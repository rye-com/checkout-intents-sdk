// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CheckoutIntentsAPI from './checkout-intents';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CheckoutIntentsResource extends APIResource {
  /**
   * Create a checkout intent with the given request body.
   */
  create(body: CheckoutIntentCreateParams, options?: RequestOptions): APIPromise<CheckoutIntent> {
    return this._client.post('/api/v1/checkout-intents', { body, ...options });
  }

  /**
   * Retrieve a checkout intent by id
   *
   * Returns checkout intent information if the lookup succeeds.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CheckoutIntent> {
    return this._client.get(path`/api/v1/checkout-intents/${id}`, options);
  }

  /**
   * Add payment details to a checkout intent
   */
  addPayment(
    id: string,
    params: CheckoutIntentAddPaymentParams,
    options?: RequestOptions,
  ): APIPromise<CheckoutIntent> {
    const { body } = params;
    return this._client.post(path`/api/v1/checkout-intents/${id}/payment`, { body: body, ...options });
  }

  /**
   * Confirm a checkout intent with provided payment information
   *
   * Confirm means we have buyer's name, address and payment info, so we can move
   * forward to place the order.
   */
  confirm(
    id: string,
    body: CheckoutIntentConfirmParams,
    options?: RequestOptions,
  ): APIPromise<CheckoutIntent> {
    return this._client.post(path`/api/v1/checkout-intents/${id}/confirm`, { body, ...options });
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

export interface PaymentMethod {
  stripeToken: string;

  type: 'stripe_token';
}

/**
 * Represents variant selections for a product, such as size, color, etc.
 */
export interface VariantSelection {
  /**
   * The label of the variant being selected. Match this label with what is used on
   * the product page.
   */
  label: string;

  /**
   * The value of the variant being selected. Match this value with what is used on
   * the product page.
   */
  value: string | number;
}

export interface CheckoutIntentCreateParams {
  buyer: Buyer;

  productUrl: string;

  quantity: number;

  variantSelections?: Array<VariantSelection>;
}

export interface CheckoutIntentAddPaymentParams {
  /**
   * The request body containing the payment details
   */
  body: unknown;
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
    type VariantSelection as VariantSelection,
    type CheckoutIntentCreateParams as CheckoutIntentCreateParams,
    type CheckoutIntentAddPaymentParams as CheckoutIntentAddPaymentParams,
    type CheckoutIntentConfirmParams as CheckoutIntentConfirmParams,
  };
}
