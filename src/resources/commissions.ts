// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CheckoutIntentsAPI from './checkout-intents/checkout-intents';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Commissions extends APIResource {
  /**
   * List commissions for the authenticated developer
   *
   * Returns a paginated list of commissions with optional filters using cursor-based
   * pagination. Pass the `endCursor` from a previous response as `after` to fetch
   * the next page, or the `startCursor` as `before` to fetch the previous page.
   * Specifying both `after` and `before` returns 422.
   */
  list(
    query: CommissionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CommissionsCursorPagination, Commission> {
    return this._client.getAPIList('/api/v1/commissions', CursorPagination<Commission>, {
      query,
      ...options,
    });
  }
}

export type CommissionsCursorPagination = CursorPagination<Commission>;

/**
 * A commission earned (or owed) on a completed checkout intent.
 */
export interface Commission {
  /**
   * Unique identifier for this commission.
   */
  id: string;

  /**
   * The checkout intent this commission was generated from.
   */
  checkoutIntentId: string;

  /**
   * Time the commission was first recorded.
   */
  createdAt: string;

  /**
   * Commission amount paid to the developer.
   */
  developerCommission: CheckoutIntentsAPI.Money;

  /**
   * Fee retained by Rye.
   */
  ryeFee: CheckoutIntentsAPI.Money;

  /**
   * Whether Rye owes the developer or vice versa once settled.
   */
  settlementDirection: SettlementDirection;

  /**
   * Lifecycle status, e.g. pending, finalized, refunded.
   */
  status: CommissionStatus;

  /**
   * Kind of commission, e.g. surcharge, discount_code, affiliate.
   */
  type: CommissionType;

  /**
   * Time the commission last changed (e.g. status transition).
   */
  updatedAt: string;

  /**
   * Time the commission moved to a terminal status. Unset until finalized.
   */
  finalizedAt?: string;
}

/**
 * Lifecycle status of a commission record.
 */
export type CommissionStatus = 'pending' | 'confirmed' | 'updated' | 'finalized' | 'refunded' | 'expired';

/**
 * Type of commission earned on an order. Canonical definition used by both the API
 * contract and the internal `@rye-com/ci-commissions` package.
 */
export type CommissionType = 'surcharge' | 'promo_arbitrage' | 'discount_code' | 'affiliate' | 'out_of_band';

/**
 * Direction of settlement: who owes whom once the commission is finalized.
 */
export type SettlementDirection = 'rye_owes_developer' | 'developer_owes_rye';

export interface CommissionListParams extends CursorPaginationParams {
  checkoutIntentId?: string;

  /**
   * Lifecycle status of a commission record.
   */
  status?: CommissionStatus;

  /**
   * Type of commission earned on an order. Canonical definition used by both the API
   * contract and the internal `@rye-com/ci-commissions` package.
   */
  type?: CommissionType;
}

export declare namespace Commissions {
  export {
    type Commission as Commission,
    type CommissionStatus as CommissionStatus,
    type CommissionType as CommissionType,
    type SettlementDirection as SettlementDirection,
    type CommissionsCursorPagination as CommissionsCursorPagination,
    type CommissionListParams as CommissionListParams,
  };
}
