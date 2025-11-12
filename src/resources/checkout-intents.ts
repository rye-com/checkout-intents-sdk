// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CheckoutIntentsAPI from './checkout-intents';
import { PollTimeoutError } from '../core/error';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';
import { sleep } from '../internal/utils/sleep';
import { buildHeaders } from '../internal/headers';
import { loggerFor } from '../internal/utils/log';

/**
 * Options for polling operations.
 */
export interface PollOptions {
  /**
   * The interval in milliseconds between polling attempts.
   */
  pollIntervalMs?: number;

  /**
   * The maximum number of polling attempts before timing out.
   */
  maxAttempts?: number;
}

export class CheckoutIntentsResource extends APIResource {
  /**
   * Create a checkout intent with the given request body.
   *
   * @example
   * ```ts
   * const checkoutIntent = await client.checkoutIntents.create({
   *   buyer: {
   *     address1: '123 Main St',
   *     city: 'New York',
   *     country: 'United States',
   *     email: 'john.doe@example.com',
   *     firstName: 'John',
   *     lastName: 'Doe',
   *     phone: '+1234567890',
   *     postalCode: '10001',
   *     province: 'NY',
   *   },
   *   productUrl: 'productUrl',
   *   quantity: 1,
   * });
   * ```
   */
  create(body: CheckoutIntentCreateParams, options?: RequestOptions): APIPromise<CheckoutIntent> {
    return this._client.post('/api/v1/checkout-intents', { body, ...options });
  }

  /**
   * Retrieve a checkout intent by id
   *
   * Returns checkout intent information if the lookup succeeds.
   *
   * @example
   * ```ts
   * const checkoutIntent =
   *   await client.checkoutIntents.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CheckoutIntent> {
    return this._client.get(path`/api/v1/checkout-intents/${id}`, options);
  }

  /**
   * Add payment details to a checkout intent
   *
   * @example
   * ```ts
   * const checkoutIntent =
   *   await client.checkoutIntents.addPayment('id', {
   *     paymentMethod: {
   *       stripeToken: 'tok_1RkrWWHGDlstla3f1Fc7ZrhH',
   *       type: 'stripe_token',
   *     },
   *   });
   * ```
   */
  addPayment(
    id: string,
    body: CheckoutIntentAddPaymentParams,
    options?: RequestOptions,
  ): APIPromise<CheckoutIntent> {
    return this._client.post(path`/api/v1/checkout-intents/${id}/payment`, { body, ...options });
  }

  /**
   * Confirm a checkout intent with provided payment information
   *
   * Confirm means we have buyer's name, address and payment info, so we can move
   * forward to place the order.
   *
   * @example
   * ```ts
   * const checkoutIntent = await client.checkoutIntents.confirm(
   *   'id',
   *   {
   *     paymentMethod: {
   *       stripeToken: 'tok_1RkrWWHGDlstla3f1Fc7ZrhH',
   *       type: 'stripe_token',
   *     },
   *   },
   * );
   * ```
   */
  confirm(
    id: string,
    body: CheckoutIntentConfirmParams,
    options?: RequestOptions,
  ): APIPromise<CheckoutIntent> {
    return this._client.post(path`/api/v1/checkout-intents/${id}/confirm`, { body, ...options });
  }

  /**
   * A helper to poll a checkout intent until a specific condition is met.
   *
   * @example
   * ```ts
   * // Poll until completed or failed
   * const checkoutIntent = await client.checkoutIntents.pollUntil(
   *   'id',
   *   (intent) => intent.state === 'completed' || intent.state === 'failed'
   * );
   * ```
   */
  private async pollUntil<T extends CheckoutIntent = CheckoutIntent>(
    id: string,
    condition: (intent: CheckoutIntent) => intent is T,
    options?: RequestOptions & PollOptions,
  ): Promise<T> {
    let maxAttempts = options?.maxAttempts ?? 120; // Default: 120 attempts
    const pollIntervalMs = options?.pollIntervalMs ?? 5000; // Default: 5 seconds

    if (maxAttempts < 1) {
      loggerFor(this._client).warn(
        `[Checkout Intents SDK] Invalid maxAttempts value: ${maxAttempts}. maxAttempts must be >= 1. Defaulting to 1 to ensure at least one polling attempt.`,
      );

      maxAttempts = 1;
    }

    const headers = buildHeaders([
      options?.headers,
      {
        'X-Stainless-Poll-Helper': 'true',
        'X-Stainless-Custom-Poll-Interval': pollIntervalMs.toString(),
      },
    ]);

    let intent: CheckoutIntentsAPI.CheckoutIntent;
    let attempts = 0;

    while (attempts < maxAttempts) {
      const { data, response } = await this.retrieve(id, {
        ...options,
        headers: { ...options?.headers, ...headers.values },
      }).withResponse();

      intent = data;

      // Check if condition is met
      if (condition(intent)) {
        return intent;
      }

      attempts++;

      // If we've reached max attempts, throw an error
      if (attempts >= maxAttempts) {
        throw new PollTimeoutError({
          intentId: intent.id,
          attempts,
          maxAttempts,
          pollIntervalMs,
          message: `Polling timeout: condition not met after ${maxAttempts} attempts (${
            (maxAttempts * pollIntervalMs) / 1000
          }s)`,
        });
      }

      // Check if server suggests a polling interval
      let sleepInterval = pollIntervalMs;
      const headerInterval = response.headers.get('retry-after-ms');
      if (headerInterval) {
        const headerIntervalMs = parseInt(headerInterval);
        if (!isNaN(headerIntervalMs)) {
          sleepInterval = headerIntervalMs;
        }
      }

      await sleep(sleepInterval);
    }

    // This should never be reached due to the throw above, but TypeScript needs it
    throw new PollTimeoutError({
      intentId: intent!.id,
      attempts,
      maxAttempts,
      pollIntervalMs,
      message: `Polling timeout: condition not met after ${maxAttempts} attempts`,
    });
  }

  /**
   * A helper to poll a checkout intent until it reaches a completed state
   * (completed or failed).
   *
   * @example
   * ```ts
   * const checkoutIntent = await client.checkoutIntents.pollUntilCompleted('id');
   * if (checkoutIntent.state === 'completed') {
   *   console.log('Order placed successfully!');
   * } else if (checkoutIntent.state === 'failed') {
   *   console.log('Order failed:', checkoutIntent.failureReason);
   * }
   * ```
   */
  async pollUntilCompleted(
    id: string,
    options?: RequestOptions & PollOptions,
  ): Promise<CheckoutIntent.CompletedCheckoutIntent | CheckoutIntent.FailedCheckoutIntent> {
    return this.pollUntil(
      id,
      (intent): intent is CheckoutIntent.CompletedCheckoutIntent | CheckoutIntent.FailedCheckoutIntent =>
        intent.state === 'completed' || intent.state === 'failed',
      options,
    );
  }

  /**
   * A helper to poll a checkout intent until it's ready for confirmation
   * (awaiting_confirmation state) or has failed. This is typically used after
   * creating a checkout intent to wait for the offer to be retrieved from the merchant.
   *
   * The intent can reach awaiting_confirmation (success - ready to confirm) or failed
   * (offer retrieval failed). Always check the state after polling.
   *
   * @example
   * ```ts
   * const intent = await client.checkoutIntents.pollUntilAwaitingConfirmation('id');
   *
   * if (intent.state === 'awaiting_confirmation') {
   *   // Review the offer before confirming
   *   console.log('Total:', intent.offer.cost.total);
   * } else if (intent.state === 'failed') {
   *   // Handle failure (e.g., offer retrieval failed, product out of stock)
   *   console.log('Failed:', intent.failureReason);
   * }
   * ```
   */
  async pollUntilAwaitingConfirmation(
    id: string,
    options?: RequestOptions & PollOptions,
  ): Promise<CheckoutIntent.AwaitingConfirmationCheckoutIntent | CheckoutIntent.FailedCheckoutIntent> {
    return this.pollUntil(
      id,
      (
        intent,
      ): intent is CheckoutIntent.AwaitingConfirmationCheckoutIntent | CheckoutIntent.FailedCheckoutIntent =>
        intent.state === 'awaiting_confirmation' || intent.state === 'failed',
      options,
    );
  }

  /**
   * A helper to create a checkout intent and poll until it's ready for confirmation.
   * This follows the Rye documented flow: create → poll until awaiting_confirmation.
   *
   * After this method completes, you should review the offer (pricing, shipping, taxes)
   * with the user before calling confirm().
   *
   * @example
   * ```ts
   * // Phase 1: Create and wait for offer
   * const intent = await client.checkoutIntents.createAndPoll({
   *   buyer: {
   *     address1: '123 Main St',
   *     city: 'New York',
   *     country: 'United States',
   *     email: 'john.doe@example.com',
   *     firstName: 'John',
   *     lastName: 'Doe',
   *     phone: '+1234567890',
   *     postalCode: '10001',
   *     province: 'NY',
   *   },
   *   productUrl: 'https://example.com/product',
   *   quantity: 1,
   * });
   *
   * // Review the offer with the user
   * console.log('Total:', intent.offer.cost.total);
   *
   * // Phase 2: Confirm with payment
   * const completed = await client.checkoutIntents.confirmAndPoll(intent.id, {
   *   paymentMethod: { type: 'stripe_token', stripeToken: 'tok_visa' }
   * });
   * ```
   */
  async createAndPoll(
    body: CheckoutIntentCreateParams,
    options?: RequestOptions & PollOptions,
  ): Promise<CheckoutIntent.AwaitingConfirmationCheckoutIntent | CheckoutIntent.FailedCheckoutIntent> {
    const intent = await this.create(body, options);
    return this.pollUntilAwaitingConfirmation(intent.id, options);
  }

  /**
   * A helper to confirm a checkout intent and poll until it reaches a completed state
   * (completed or failed).
   *
   * @example
   * ```ts
   * const checkoutIntent = await client.checkoutIntents.confirmAndPoll(
   *   'id',
   *   {
   *     paymentMethod: {
   *       stripeToken: 'tok_1RkrWWHGDlstla3f1Fc7ZrhH',
   *       type: 'stripe_token',
   *     },
   *   }
   * );
   *
   * if (checkoutIntent.state === 'completed') {
   *   console.log('Order placed successfully!');
   * } else if (checkoutIntent.state === 'failed') {
   *   console.log('Order failed:', checkoutIntent.failureReason);
   * }
   * ```
   */
  async confirmAndPoll(
    id: string,
    body: CheckoutIntentConfirmParams,
    options?: RequestOptions & PollOptions,
  ): Promise<CheckoutIntent.CompletedCheckoutIntent | CheckoutIntent.FailedCheckoutIntent> {
    const intent = await this.confirm(id, body, options);
    return this.pollUntilCompleted(intent.id, options);
  }
}

export interface BaseCheckoutIntent {
  id: string;

  buyer: Buyer;

  createdAt: string;

  productUrl: string;

  quantity: number;

  variantSelections?: Array<VariantSelection>;
}

export interface Buyer {
  address1: string;

  city: string;

  country: string;

  email: string;

  firstName: string;

  lastName: string;

  phone: string;

  postalCode: string;

  province: string;

  address2?: string;
}

export type CheckoutIntent =
  | CheckoutIntent.RetrievingOfferCheckoutIntent
  | CheckoutIntent.AwaitingConfirmationCheckoutIntent
  | CheckoutIntent.PlacingOrderCheckoutIntent
  | CheckoutIntent.CompletedCheckoutIntent
  | CheckoutIntent.FailedCheckoutIntent;

export namespace CheckoutIntent {
  export interface RetrievingOfferCheckoutIntent extends CheckoutIntentsAPI.BaseCheckoutIntent {
    state: 'retrieving_offer';
  }

  export interface AwaitingConfirmationCheckoutIntent extends CheckoutIntentsAPI.BaseCheckoutIntent {
    offer: CheckoutIntentsAPI.Offer;

    state: 'awaiting_confirmation';

    paymentMethod?: CheckoutIntentsAPI.PaymentMethod;
  }

  export interface PlacingOrderCheckoutIntent extends CheckoutIntentsAPI.BaseCheckoutIntent {
    offer: CheckoutIntentsAPI.Offer;

    paymentMethod: CheckoutIntentsAPI.PaymentMethod;

    state: 'placing_order';
  }

  export interface CompletedCheckoutIntent extends CheckoutIntentsAPI.BaseCheckoutIntent {
    offer: CheckoutIntentsAPI.Offer;

    paymentMethod: CheckoutIntentsAPI.PaymentMethod;

    state: 'completed';
  }

  export interface FailedCheckoutIntent extends CheckoutIntentsAPI.BaseCheckoutIntent {
    failureReason: FailedCheckoutIntent.FailureReason;

    state: 'failed';

    offer?: CheckoutIntentsAPI.Offer;

    paymentMethod?: CheckoutIntentsAPI.PaymentMethod;
  }

  export namespace FailedCheckoutIntent {
    export interface FailureReason {
      code:
        | 'checkout_intent_expired'
        | 'payment_failed'
        | 'insufficient_stock'
        | 'product_out_of_stock'
        | 'offer_retrieval_failed'
        | 'order_placement_failed'
        | 'developer_not_found'
        | 'missing_shipping_method'
        | 'unsupported_currency'
        | 'unsupported_store_no_guest_checkout';

      message: string;
    }
  }
}

export interface Money {
  amountSubunits: number;

  currencyCode: string;
}

export interface Offer {
  cost: Offer.Cost;

  shipping: Offer.Shipping;
}

export namespace Offer {
  export interface Cost {
    subtotal: CheckoutIntentsAPI.Money;

    total: CheckoutIntentsAPI.Money;

    discount?: CheckoutIntentsAPI.Money;

    shipping?: CheckoutIntentsAPI.Money;

    tax?: CheckoutIntentsAPI.Money;
  }

  export interface Shipping {
    availableOptions: Array<Shipping.AvailableOption>;

    selectedOptionId?: string;
  }

  export namespace Shipping {
    export interface AvailableOption {
      id: string;

      cost: CheckoutIntentsAPI.Money;
    }
  }
}

export type PaymentMethod =
  | PaymentMethod.StripeTokenPaymentMethod
  | PaymentMethod.BasisTheoryPaymentMethod
  | PaymentMethod.NekudaPaymentMethod;

export namespace PaymentMethod {
  export interface StripeTokenPaymentMethod {
    stripeToken: string;

    type: 'stripe_token';
  }

  export interface BasisTheoryPaymentMethod {
    basisTheoryToken: string;

    type: 'basis_theory_token';
  }

  export interface NekudaPaymentMethod {
    nekudaUserId: string;

    type: 'nekuda_token';

    /**
     * Construct a type with a set of properties K of type T
     */
    nekudaMandateData?: { [key: string]: string | number };
  }
}

export interface VariantSelection {
  label: string;

  value: string | number;
}

export interface CheckoutIntentCreateParams {
  buyer: Buyer;

  productUrl: string;

  quantity: number;

  variantSelections?: Array<VariantSelection>;
}

export interface CheckoutIntentAddPaymentParams {
  paymentMethod: PaymentMethod;
}

export interface CheckoutIntentConfirmParams {
  paymentMethod: PaymentMethod;
}

export declare namespace CheckoutIntentsResource {
  export {
    type BaseCheckoutIntent as BaseCheckoutIntent,
    type Buyer as Buyer,
    type CheckoutIntent as CheckoutIntent,
    type Money as Money,
    type Offer as Offer,
    type PaymentMethod as PaymentMethod,
    type PollOptions as PollOptions,
    type VariantSelection as VariantSelection,
    type CheckoutIntentCreateParams as CheckoutIntentCreateParams,
    type CheckoutIntentAddPaymentParams as CheckoutIntentAddPaymentParams,
    type CheckoutIntentConfirmParams as CheckoutIntentConfirmParams,
  };
}
