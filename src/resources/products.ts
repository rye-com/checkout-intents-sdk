// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CheckoutIntentsAPI from './checkout-intents/checkout-intents';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Products extends APIResource {
  /**
   * Lookup a product's information by URL.
   */
  lookup(query: ProductLookupParams, options?: RequestOptions): APIPromise<Product> {
    return this._client.get('/api/v1/products/lookup', { query, ...options });
  }
}

export interface Product {
  id: string;

  /**
   * The availability status of a product.
   *
   * - `in_stock`: Product is available for immediate purchase
   * - `out_of_stock`: Product is currently unavailable
   * - `preorder`: Product is available for pre-order before release
   * - `backorder`: Product is temporarily out of stock but can be ordered
   * - `unknown`: Availability could not be determined
   */
  availability: ProductAvailability;

  brand: string | null;

  description: string | null;

  images: Array<ProductImage>;

  isPurchasable: boolean;

  name: string;

  price: CheckoutIntentsAPI.Money;

  sku: string | null;

  url: string;
}

/**
 * The availability status of a product.
 *
 * - `in_stock`: Product is available for immediate purchase
 * - `out_of_stock`: Product is currently unavailable
 * - `preorder`: Product is available for pre-order before release
 * - `backorder`: Product is temporarily out of stock but can be ordered
 * - `unknown`: Availability could not be determined
 */
export type ProductAvailability = 'in_stock' | 'out_of_stock' | 'preorder' | 'backorder' | 'unknown';

export interface ProductImage {
  isFeatured: boolean;

  url: string;
}

export interface ProductLookupParams {
  url: string;
}

export declare namespace Products {
  export {
    type Product as Product,
    type ProductAvailability as ProductAvailability,
    type ProductImage as ProductImage,
    type ProductLookupParams as ProductLookupParams,
  };
}
