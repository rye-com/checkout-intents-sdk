// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CheckoutIntentsAPI from './checkout-intents/checkout-intents';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Products extends APIResource {
  /**
   * Retrieve product subscription rules.
   *
   * @example
   * ```ts
   * const response = await client.products.listSubscriptions();
   * ```
   */
  listSubscriptions(options?: RequestOptions): APIPromise<ProductListSubscriptionsResponse> {
    return this._client.get('/api/v1/products/subscriptions', options);
  }

  /**
   * Lookup a product's information by URL.
   *
   * @example
   * ```ts
   * const product = await client.products.lookup({
   *   url: 'url',
   * });
   * ```
   */
  lookup(query: ProductLookupParams, options?: RequestOptions): APIPromise<Product> {
    return this._client.get('/api/v1/products/lookup', { query, ...options });
  }

  /**
   * Subscribe to product events from a store.
   *
   * @example
   * ```ts
   * const productSubscription = await client.products.subscribe(
   *   { type: 'store', url: 'https://store.com' },
   * );
   * ```
   */
  subscribe(body: ProductSubscribeParams, options?: RequestOptions): APIPromise<ProductSubscription> {
    return this._client.post('/api/v1/products/subscribe', { body, ...options });
  }

  /**
   * Unsubscribe from product events from a store.
   *
   * @example
   * ```ts
   * const productSubscription =
   *   await client.products.unsubscribe({
   *     type: 'store',
   *     url: 'https://store.com',
   *   });
   * ```
   */
  unsubscribe(body: ProductUnsubscribeParams, options?: RequestOptions): APIPromise<ProductSubscription> {
    return this._client.post('/api/v1/products/unsubscribe', { body, ...options });
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

  retailer: string | null;

  sku: string | null;

  url: string;

  variantDimensions?: Array<VariantDimension> | null;

  variants?: Array<ProductVariant> | null;
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

export type ProductSubscription = ProductSubscriptionProduct | ProductSubscriptionStore;

export interface ProductSubscriptionProduct {
  /**
   * Product id.
   */
  id: string;

  /**
   * Whether the resolved product is subscribed after the mutation.
   */
  subscribed: boolean;

  /**
   * Scope of the subscription change.
   */
  type: 'product';

  /**
   * Product subscription URL.
   */
  url: string;
}

export interface ProductSubscriptionStore {
  /**
   * Store domain.
   */
  domain: string;

  /**
   * Whether the resolved store is subscribed after the mutation.
   */
  subscribed: boolean;

  /**
   * Scope of the subscription change.
   */
  type: 'store';

  /**
   * Store subscription URL.
   */
  url: string;
}

export interface ProductVariant {
  id: string | null;

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

  dimensions: Array<CheckoutIntentsAPI.VariantSelection>;

  images: Array<ProductImage>;

  name: string | null;

  price: CheckoutIntentsAPI.Money;

  sku: string | null;
}

export interface VariantDimension {
  label: string;

  values: Array<string>;
}

export interface ProductListSubscriptionsResponse {
  data: Array<ProductSubscription>;
}

export interface ProductLookupParams {
  url: string;
}

export interface ProductSubscribeParams {
  /**
   * Scope of the subscription change.
   */
  type: 'store' | 'product';

  /**
   * Store or product URL to subscribe or unsubscribe.
   */
  url: string;
}

export interface ProductUnsubscribeParams {
  /**
   * Scope of the subscription change.
   */
  type: 'store' | 'product';

  /**
   * Store or product URL to subscribe or unsubscribe.
   */
  url: string;
}

export declare namespace Products {
  export {
    type Product as Product,
    type ProductAvailability as ProductAvailability,
    type ProductImage as ProductImage,
    type ProductSubscription as ProductSubscription,
    type ProductSubscriptionProduct as ProductSubscriptionProduct,
    type ProductSubscriptionStore as ProductSubscriptionStore,
    type ProductVariant as ProductVariant,
    type VariantDimension as VariantDimension,
    type ProductListSubscriptionsResponse as ProductListSubscriptionsResponse,
    type ProductLookupParams as ProductLookupParams,
    type ProductSubscribeParams as ProductSubscribeParams,
    type ProductUnsubscribeParams as ProductUnsubscribeParams,
  };
}
