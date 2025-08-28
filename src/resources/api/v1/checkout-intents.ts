// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CheckoutIntentsAPI from './checkout-intents';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class CheckoutIntents extends APIResource {
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

    paymentMethod: CheckoutIntentsAPI.StripeTokenPaymentMethod;

    state: 'placing_order';
  }

  export interface CompletedCheckoutIntent extends CheckoutIntentsAPI.BaseCheckoutIntent {
    offer: CheckoutIntentsAPI.Offer;

    paymentMethod: CheckoutIntentsAPI.StripeTokenPaymentMethod;

    state: 'completed';
  }

  export interface FailedCheckoutIntent extends CheckoutIntentsAPI.BaseCheckoutIntent {
    failureReason: FailedCheckoutIntent.FailureReason;

    state: 'failed';

    offer?: CheckoutIntentsAPI.Offer;

    paymentMethod?: CheckoutIntentsAPI.StripeTokenPaymentMethod;
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

export interface StripeTokenPaymentMethod {
  stripeToken: string;

  type: 'stripe_token';
}

export interface CheckoutIntentCreateParams {
  buyer: Buyer;

  productUrl: string;

  quantity: number;
}

export interface CheckoutIntentConfirmParams {
  paymentMethod: StripeTokenPaymentMethod;
}

export declare namespace CheckoutIntents {
  export {
    type BaseCheckoutIntent as BaseCheckoutIntent,
    type Buyer as Buyer,
    type CheckoutIntent as CheckoutIntent,
    type Money as Money,
    type Offer as Offer,
    type StripeTokenPaymentMethod as StripeTokenPaymentMethod,
    type CheckoutIntentCreateParams as CheckoutIntentCreateParams,
    type CheckoutIntentConfirmParams as CheckoutIntentConfirmParams,
  };
}
