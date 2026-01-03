// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CheckoutIntentsAPI from '../checkout-intents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class CheckoutSessions extends APIResource {
  /**
   * Create a new checkout session.
   *
   * Checkout sessions are hosted checkout forms your shoppers can use to complete
   * their purchases.
   *
   * @example
   * ```ts
   * const checkoutSession =
   *   await client.betas.checkoutSessions.create({
   *     productUrl: 'productUrl',
   *     quantity: 1,
   *   });
   * ```
   */
  create(
    body: CheckoutSessionCreateParams,
    options?: RequestOptions,
  ): APIPromise<CheckoutSessionCreateResponse> {
    return this._client.post('/api/v1/betas/checkout-sessions', { body, ...options });
  }
}

export interface CheckoutSessionCreateResponse {
  /**
   * URL to send your user to for checkout.
   */
  url: string;
}

export interface CheckoutSessionCreateParams {
  productUrl: string;

  quantity: number;

  /**
   * Make all properties in T optional
   */
  buyer?: CheckoutSessionCreateParams.Buyer;

  constraints?: CheckoutSessionCreateParams.Constraints;

  promoCodes?: Array<string>;

  variantSelections?: Array<CheckoutIntentsAPI.VariantSelection>;
}

export namespace CheckoutSessionCreateParams {
  /**
   * Make all properties in T optional
   */
  export interface Buyer {
    address1?: string;

    address2?: string;

    city?: string;

    country?: string;

    email?: string;

    firstName?: string;

    lastName?: string;

    phone?: string;

    postalCode?: string;

    province?: string;
  }

  export interface Constraints {
    maxShippingPrice?: number;

    maxTotalPrice?: number;
  }
}

export declare namespace CheckoutSessions {
  export {
    type CheckoutSessionCreateResponse as CheckoutSessionCreateResponse,
    type CheckoutSessionCreateParams as CheckoutSessionCreateParams,
  };
}
