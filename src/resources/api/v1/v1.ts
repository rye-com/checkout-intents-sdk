// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BrandsAPI from './brands';
import { BrandRetrieveByDomainResponse, Brands } from './brands';
import * as CheckoutIntentsAPI from './checkout-intents';
import {
  BaseCheckoutIntent,
  Buyer,
  CheckoutIntent,
  CheckoutIntentConfirmParams,
  CheckoutIntentCreateParams,
  CheckoutIntents,
  Money,
  Offer,
  StripeTokenPaymentMethod,
} from './checkout-intents';

export class V1 extends APIResource {
  brands: BrandsAPI.Brands = new BrandsAPI.Brands(this._client);
  checkoutIntents: CheckoutIntentsAPI.CheckoutIntents = new CheckoutIntentsAPI.CheckoutIntents(this._client);
}

V1.Brands = Brands;
V1.CheckoutIntents = CheckoutIntents;

export declare namespace V1 {
  export { Brands as Brands, type BrandRetrieveByDomainResponse as BrandRetrieveByDomainResponse };

  export {
    CheckoutIntents as CheckoutIntents,
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
