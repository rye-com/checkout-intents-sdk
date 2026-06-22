// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ReturnsAPI from '../returns';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Returns extends APIResource {
  /**
   * Create a simulated return for an order, then drive it through its lifecycle with
   * the approve/deny/refund/fail helpers below.
   */
  create(body: ReturnCreateParams, options?: RequestOptions): APIPromise<ReturnsAPI.Return> {
    return this._client.post('/api/v1/test-helpers/returns', { body, ...options });
  }

  approve(
    returnID: string,
    body: ReturnApproveParams,
    options?: RequestOptions,
  ): APIPromise<ReturnsAPI.Return> {
    return this._client.post(path`/api/v1/test-helpers/returns/${returnID}/approve`, { body, ...options });
  }

  deny(returnID: string, body: ReturnDenyParams, options?: RequestOptions): APIPromise<ReturnsAPI.Return> {
    return this._client.post(path`/api/v1/test-helpers/returns/${returnID}/deny`, { body, ...options });
  }

  fail(returnID: string, body: ReturnFailParams, options?: RequestOptions): APIPromise<ReturnsAPI.Return> {
    return this._client.post(path`/api/v1/test-helpers/returns/${returnID}/fail`, { body, ...options });
  }

  refund(
    returnID: string,
    body: ReturnRefundParams,
    options?: RequestOptions,
  ): APIPromise<ReturnsAPI.Return> {
    return this._client.post(path`/api/v1/test-helpers/returns/${returnID}/refund`, { body, ...options });
  }
}

export interface ReturnCreateParams {
  /**
   * Rye order id (`oi_<hex>` / `order_<hex>`) to open the simulated return against.
   */
  orderId: string;

  /**
   * Subset of order line items to return. Defaults to every order item at full
   * quantity.
   */
  lineItems?: Array<ReturnCreateParams.LineItem>;

  /**
   * Defaults to `other` when omitted.
   */
  reason?: ReturnsAPI.ReturnReason;
}

export namespace ReturnCreateParams {
  export interface LineItem {
    /**
     * Order line item id (`oi_<hex>`) to return.
     */
    orderLineItemId: string;

    /**
     * Units of this line item to return.
     */
    quantity: number;
  }
}

export interface ReturnApproveParams {
  /**
   * `ship_items_to_merchant` lands the return in `requires_action` with a stub
   * shipping label; `no_action_required` lands it directly in `processing`. Defaults
   * to `ship_items_to_merchant`.
   */
  nextAction?: 'ship_items_to_merchant' | 'no_action_required';
}

export interface ReturnDenyParams {
  note?: string;

  /**
   * Defaults to `other`.
   */
  reason?: 'final_sale' | 'return_period_ended' | 'other';
}

export interface ReturnFailParams {
  note?: string;
}

export interface ReturnRefundParams {
  /**
   * Defaults to `shopper`.
   */
  costBearer?: 'shopper' | 'developer' | 'rye';
}

export declare namespace Returns {
  export {
    type ReturnCreateParams as ReturnCreateParams,
    type ReturnApproveParams as ReturnApproveParams,
    type ReturnDenyParams as ReturnDenyParams,
    type ReturnFailParams as ReturnFailParams,
    type ReturnRefundParams as ReturnRefundParams,
  };
}
