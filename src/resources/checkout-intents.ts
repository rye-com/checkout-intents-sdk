// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CheckoutIntentsAPI from './checkout-intents';
import { APIPromise } from '../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

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
   *     country: 'US',
   *     email: 'john.doe@example.com',
   *     firstName: 'John',
   *     lastName: 'Doe',
   *     phone: '1234567890',
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
   * Retrieve a paginated list of checkout intents
   *
   * Enables developers to query checkout intents associated with their account, with
   * filters and cursor-based pagination.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const checkoutIntent of client.checkoutIntents.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CheckoutIntentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CheckoutIntentsCursorPagination, CheckoutIntent> {
    return this._client.getAPIList('/api/v1/checkout-intents', CursorPagination<CheckoutIntent>, {
      query,
      ...options,
    });
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
   * Create a checkout intent and immediately trigger the purchase workflow.
   *
   * This is a "fire-and-forget" endpoint that combines create + confirm in one step.
   * The workflow handles offer retrieval, payment authorization, and order placement
   * asynchronously. Poll the GET endpoint to check status.
   *
   * @example
   * ```ts
   * const checkoutIntent =
   *   await client.checkoutIntents.purchase({
   *     buyer: {
   *       address1: '123 Main St',
   *       city: 'New York',
   *       country: 'US',
   *       email: 'john.doe@example.com',
   *       firstName: 'John',
   *       lastName: 'Doe',
   *       phone: '1234567890',
   *       postalCode: '10001',
   *       province: 'NY',
   *     },
   *     paymentMethod: {
   *       stripeToken: 'tok_1RkrWWHGDlstla3f1Fc7ZrhH',
   *       type: 'stripe_token',
   *     },
   *     productUrl: 'productUrl',
   *     quantity: 1,
   *   });
   * ```
   */
  purchase(body: CheckoutIntentPurchaseParams, options?: RequestOptions): APIPromise<CheckoutIntent> {
    return this._client.post('/api/v1/checkout-intents/purchase', { body, ...options });
  }
}

export type CheckoutIntentsCursorPagination = CursorPagination<CheckoutIntent>;

export interface BaseCheckoutIntent {
  id: string;

  buyer: Buyer;

  createdAt: string;

  productUrl: string;

  quantity: number;

  constraints?: BaseCheckoutIntent.Constraints;

  discoverPromoCodes?: boolean;

  promoCodes?: Array<string>;

  variantSelections?: Array<VariantSelection>;
}

export namespace BaseCheckoutIntent {
  export interface Constraints {
    maxShippingPrice?: number;

    maxTotalPrice?: number;

    /**
     * Controls how much effort the system should spend retrieving an offer.
     *
     * - 'max': Full effort including AI agent fallback (slower, higher success rate)
     * - 'low': Fast API-only retrieval, fails if API unavailable (faster, lower
     *   success rate)
     *
     * Default: 'max'
     */
    offerRetrievalEffort?: 'max' | 'low';
  }
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
    estimatedDeliveryDate: string | null;

    offer: CheckoutIntentsAPI.Offer;

    orderId: string | null;

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
      /**
       * Type derived from runtime array - always in sync
       */
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
        | 'invalid_input'
        | 'incorrect_cost_breakdown'
        | 'unsupported_store_no_guest_checkout'
        | 'workflow_invocation_failed'
        | 'variant_selections_invalid'
        | 'variant_selections_required'
        | 'form_validation_error'
        | 'captcha_blocked'
        | 'bot_protection_blocked'
        | 'constraint_total_price_exceeded'
        | 'constraint_shipping_cost_exceeded'
        | 'promo_code_discovery_not_enabled'
        | 'unknown';

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

  appliedPromoCodes?: Array<string>;
}

export namespace Offer {
  export interface Cost {
    subtotal: CheckoutIntentsAPI.Money;

    total: CheckoutIntentsAPI.Money;

    discount?: CheckoutIntentsAPI.Money;

    shipping?: CheckoutIntentsAPI.Money;

    surcharge?: CheckoutIntentsAPI.Money;

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

      discount?: CheckoutIntentsAPI.Money;
    }
  }
}

export type PaymentMethod =
  | PaymentMethod.StripeTokenPaymentMethod
  | PaymentMethod.BasisTheoryPaymentMethod
  | PaymentMethod.NekudaPaymentMethod
  | PaymentMethod.PravaPaymentMethod
  | PaymentMethod.DrawdownPaymentMethod;

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

  export interface PravaPaymentMethod {
    pravaToken: string;

    type: 'prava_token';
  }

  export interface DrawdownPaymentMethod {
    type: 'drawdown';
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

  constraints?: CheckoutIntentCreateParams.Constraints;

  discoverPromoCodes?: boolean;

  promoCodes?: Array<string>;

  variantSelections?: Array<VariantSelection>;
}

export namespace CheckoutIntentCreateParams {
  export interface Constraints {
    maxShippingPrice?: number;

    maxTotalPrice?: number;

    /**
     * Controls how much effort the system should spend retrieving an offer.
     *
     * - 'max': Full effort including AI agent fallback (slower, higher success rate)
     * - 'low': Fast API-only retrieval, fails if API unavailable (faster, lower
     *   success rate)
     *
     * Default: 'max'
     */
    offerRetrievalEffort?: 'max' | 'low';
  }
}

export interface CheckoutIntentListParams extends CursorPaginationParams {
  id?: Array<string>;

  state?: Array<'completed' | 'failed' | 'retrieving_offer' | 'awaiting_confirmation' | 'placing_order'>;
}

export interface CheckoutIntentAddPaymentParams {
  paymentMethod: PaymentMethod;
}

export interface CheckoutIntentConfirmParams {
  paymentMethod: PaymentMethod;
}

export interface CheckoutIntentPurchaseParams {
  buyer: Buyer;

  paymentMethod: PaymentMethod;

  productUrl: string;

  quantity: number;

  constraints?: CheckoutIntentPurchaseParams.Constraints;

  discoverPromoCodes?: boolean;

  promoCodes?: Array<string>;

  variantSelections?: Array<VariantSelection>;
}

export namespace CheckoutIntentPurchaseParams {
  export interface Constraints {
    maxShippingPrice?: number;

    maxTotalPrice?: number;

    /**
     * Controls how much effort the system should spend retrieving an offer.
     *
     * - 'max': Full effort including AI agent fallback (slower, higher success rate)
     * - 'low': Fast API-only retrieval, fails if API unavailable (faster, lower
     *   success rate)
     *
     * Default: 'max'
     */
    offerRetrievalEffort?: 'max' | 'low';
  }
}

export declare namespace CheckoutIntentsResource {
  export {
    type BaseCheckoutIntent as BaseCheckoutIntent,
    type Buyer as Buyer,
    type CheckoutIntent as CheckoutIntent,
    type Money as Money,
    type Offer as Offer,
    type PaymentMethod as PaymentMethod,
    type VariantSelection as VariantSelection,
    type CheckoutIntentsCursorPagination as CheckoutIntentsCursorPagination,
    type CheckoutIntentCreateParams as CheckoutIntentCreateParams,
    type CheckoutIntentListParams as CheckoutIntentListParams,
    type CheckoutIntentAddPaymentParams as CheckoutIntentAddPaymentParams,
    type CheckoutIntentConfirmParams as CheckoutIntentConfirmParams,
    type CheckoutIntentPurchaseParams as CheckoutIntentPurchaseParams,
  };
}
