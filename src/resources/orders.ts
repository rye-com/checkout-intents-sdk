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
   * The cancellation for this order, or `null` if none has been requested. Populated
   * by joining the separate cancellations collection on the order's marketplace
   * order id.
   */
  cancellation: Order.RequestedCancellation | Order.CompletedCancellation | Order.DeniedCancellation | null;

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

  /**
   * The `referenceId` you supplied on the checkout intent, echoed back so you can
   * reconcile this order against your own records. Absent when none was supplied.
   */
  referenceId?: string;
}

export namespace Order {
  export interface RequestedCancellation {
    id: string;

    checkoutIntentId: string;

    createdAt: string;

    marketplaceOrderId: string;

    reason: RequestedCancellation.Reason;

    state: 'requested';
  }

  export namespace RequestedCancellation {
    export interface Reason {
      code: 'requested_by_customer' | 'fraud' | 'inventory' | 'payment_issue' | 'staff_error' | 'other';

      /**
       * Optional free-text note explaining the cancellation, forwarded to the merchant
       * when possible.
       */
      message?: string;
    }
  }

  export interface CompletedCancellation {
    id: string;

    checkoutIntentId: string;

    createdAt: string;

    marketplaceOrderId: string;

    reason: CompletedCancellation.Reason;

    state: 'completed';
  }

  export namespace CompletedCancellation {
    export interface Reason {
      code: 'requested_by_customer' | 'fraud' | 'inventory' | 'payment_issue' | 'staff_error' | 'other';

      /**
       * Optional free-text note explaining the cancellation, forwarded to the merchant
       * when possible.
       */
      message?: string;
    }
  }

  export interface DeniedCancellation {
    id: string;

    checkoutIntentId: string;

    createdAt: string;

    denialReason: DeniedCancellation.DenialReason;

    marketplaceOrderId: string;

    reason: DeniedCancellation.Reason;

    state: 'denied';
  }

  export namespace DeniedCancellation {
    export interface DenialReason {
      code: 'other' | 'already_shipped' | 'non_cancellable_item' | 'cancellation_window_expired';

      message: string;
    }

    export interface Reason {
      code: 'requested_by_customer' | 'fraud' | 'inventory' | 'payment_issue' | 'staff_error' | 'other';

      /**
       * Optional free-text note explaining the cancellation, forwarded to the merchant
       * when possible.
       */
      message?: string;
    }
  }
}

export interface OrderListParams extends CursorPaginationParams {}

export declare namespace Orders {
  export {
    type Order as Order,
    type OrdersCursorPagination as OrdersCursorPagination,
    type OrderListParams as OrderListParams,
  };
}
