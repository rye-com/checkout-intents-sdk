// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Orders extends APIResource {
  /**
   * Retrieve an order by id.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Order> {
    return this._client.get(path`/api/v1/orders/${id}`, options);
  }

  /**
   * List orders for the authenticated developer with cursor-based pagination.
   */
  list(
    query: OrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OrdersCursorPagination, Order> {
    return this._client.getAPIList('/api/v1/orders', CursorPagination<Order>, { query, ...options });
  }
}

export type OrdersCursorPagination = CursorPagination<Order>;

/**
 * Represents a completed order. Orders are created after a checkout intent reaches
 * the `completed` state.
 */
export interface Order {
  id: string;

  /**
   * ID of the checkout intent that was responsible for creating this order.
   */
  checkoutIntentId: string;

  /**
   * Timestamp the order was persisted to Rye.
   */
  createdAt: string;

  /**
   * Timestamp the order was last updated at
   */
  updatedAt: string;
}

export interface OrderListParams extends CursorPaginationParams {}

export declare namespace Orders {
  export {
    type Order as Order,
    type OrdersCursorPagination as OrdersCursorPagination,
    type OrderListParams as OrderListParams,
  };
}
