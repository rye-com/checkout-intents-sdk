// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Brands extends APIResource {
  /**
   * Retrieve brand information by domain name
   *
   * Look up a brand by its domain name (e.g. "aloyoga.com" or "www.amazon.com").
   * Returns brand information including the marketplace type if the lookup succeeds.
   */
  retrieve(domain: string, options?: RequestOptions): APIPromise<BrandRetrieveResponse> {
    return this._client.get(path`/api/v1/brands/domain/${domain}`, options);
  }
}

export interface BrandRetrieveResponse {
  /**
   * A unique identifier for the brand.
   */
  id: string;

  /**
   * Indicates what ecommerce platform the brand uses.
   */
  marketplace: 'AMAZON' | 'SHOPIFY' | 'BESTBUY' | 'UNKNOWN';

  /**
   * If `false`, then products from this brand cannot be purchased through the Sell
   * Anything API.
   */
  supported: boolean;
}

export declare namespace Brands {
  export { type BrandRetrieveResponse as BrandRetrieveResponse };
}
