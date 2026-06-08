// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CheckoutIntentsAPI from './checkout-intents/checkout-intents';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Returns extends APIResource {
  /**
   * Create a return for a completed order. Whole-order returns only — the order's
   * line items are enumerated for you. The return is submitted for approval and then
   * progresses asynchronously toward the refund; poll the returned return id (or
   * listen for webhooks) to follow its state.
   */
  create(body: ReturnCreateParams, options?: RequestOptions): APIPromise<Return> {
    return this._client.post('/api/v1/returns', { body, ...options });
  }

  /**
   * Fetch a Return by id. Tenancy is scoped to the authenticated developer.
   */
  retrieve(returnID: string, options?: RequestOptions): APIPromise<Return> {
    return this._client.get(path`/api/v1/returns/${returnID}`, options);
  }
}

/**
 * A single Return record. The `state` discriminator tells you which of `denial`,
 * `failure`, and `refunds` is populated; `nextAction` is set once the Return is
 * approved (see {@link NextActionResponse}).
 */
export interface Return {
  /**
   * Rye return id (`ret_<32 hex>`).
   */
  id: string;

  /**
   * Rye checkout intent id that produced the order being returned.
   */
  checkoutIntentId: string;

  /**
   * When the Return record was created.
   */
  createdAt: string;

  /**
   * Rye order id (`order_<32 hex>`) this Return was opened against.
   */
  orderId: string;

  /**
   * Reason the return was requested, echoed back from the create call.
   */
  reason: ReturnReason;

  /**
   * Lifecycle state; the discriminator for the optional sub-objects below.
   */
  state: ReturnState;

  /**
   * Per-transition timestamps; later stamps fill in as the Return advances.
   */
  timeline: ReturnTimeline;

  /**
   * When the Return record was last updated.
   */
  updatedAt: string;

  /**
   * Why the merchant declined the return. Present only on `denied`.
   */
  denial?: ReturnDenial;

  /**
   * What went wrong. Present only on `failed`.
   */
  failure?: ReturnFailure;

  /**
   * What the shopper must do next (e.g. ship the items back). Present once the
   * return is approved — i.e. on `requires_action`, `processing`, and `refunded` —
   * and may be present on `denied` / `failed` if they were approved before
   * terminating. Absent on `requested`.
   */
  nextAction?: ReturnNextAction;

  /**
   * Issued refunds. Present only on `refunded`.
   */
  refunds?: Array<ReturnRefund>;
}

/**
 * Why a return was declined by the merchant.
 */
export interface ReturnDenial {
  /**
   * Machine-readable decline reason.
   */
  reason: 'final_sale' | 'return_period_ended' | 'other';

  /**
   * Optional human-readable detail from the merchant.
   */
  note?: string;
}

/**
 * Details of a failed return.
 */
export interface ReturnFailure {
  /**
   * Machine-readable failure code; switch on this.
   */
  code: 'drawdown_credit_failed' | 'merchant_unreachable' | 'other';

  /**
   * Human-readable, stable summary of the failure.
   */
  message: string;
}

/**
 * What the shopper has to do next to complete the return. Present once the Return
 * is approved.
 *
 * `type` is the discriminator: `ship_items_to_merchant` carries the matching
 * `shipItemsToMerchant` payload (a prepaid label); `no_action_required` means the
 * merchant approved a keep-the-item / no-ship return and the shopper just waits
 * for the refund (no payload). The `requires_action` state is reached only for
 * `ship_items_to_merchant`; a `no_action_required` approval skips straight to
 * `processing`.
 */
export interface ReturnNextAction {
  /**
   * Discriminator for the action the shopper must take.
   */
  type: 'ship_items_to_merchant' | 'no_action_required';

  /**
   * Prepaid return label. Present only when `type` is `ship_items_to_merchant`.
   */
  shipItemsToMerchant?: ReturnNextAction.ShipItemsToMerchant;
}

export namespace ReturnNextAction {
  /**
   * Prepaid return label. Present only when `type` is `ship_items_to_merchant`.
   */
  export interface ShipItemsToMerchant {
    /**
     * A prepaid return shipping label the shopper uses to send items back.
     */
    label: ShipItemsToMerchant.Label;
  }

  export namespace ShipItemsToMerchant {
    /**
     * A prepaid return shipping label the shopper uses to send items back.
     */
    export interface Label {
      /**
       * URL to the downloadable/printable label.
       */
      url: string;
    }
  }
}

/**
 * Reason a shopper is returning an order, supplied on the create-return call:
 * `defective` (arrived damaged or faulty), `wrong_item` (not what was ordered),
 * `unwanted` (changed their mind), `color` / `size_too_large` / `size_too_small` /
 * `style` (wrong color, size, or style), `not_as_described` (differs from the
 * listing), and `other` (anything else).
 */
export type ReturnReason =
  | 'defective'
  | 'wrong_item'
  | 'unwanted'
  | 'color'
  | 'not_as_described'
  | 'size_too_large'
  | 'size_too_small'
  | 'style'
  | 'other';

/**
 * A single refund issued against a `refunded` Return.
 */
export interface ReturnRefund {
  /**
   * Rye refund id.
   */
  id: string;

  /**
   * When this refund was reconciled.
   */
  refundedAt: string;

  /**
   * Amount returned to the shopper, in the shopper's presentment currency.
   */
  shopperRefundTotal: CheckoutIntentsAPI.Money;
}

/**
 * Lifecycle state of a Return:
 *
 * - `requested` — submitted to the merchant, awaiting approval.
 * - `requires_action` — approved; the shopper must ship the items back.
 * - `processing` — approved and in flight (items shipped, or no shipping
 *   required), awaiting the refund.
 * - `refunded` — terminal; the refund has been issued and reconciled.
 * - `denied` — terminal; the merchant declined the return.
 * - `failed` — terminal; the return could not be completed.
 */
export type ReturnState = 'requested' | 'requires_action' | 'processing' | 'refunded' | 'denied' | 'failed';

/**
 * Per-transition timestamps for a Return. `requestedAt` is always set; the rest
 * fill in as the Return advances and reflect the path it actually took (a `denied`
 * Return has `deniedAt` but never `refundedAt`).
 */
export interface ReturnTimeline {
  /**
   * When the return was requested. Always present.
   */
  requestedAt: string;

  /**
   * When the return was denied. Present only on `denied`.
   */
  deniedAt?: string;

  /**
   * When the return failed. Present only on `failed`.
   */
  failedAt?: string;

  /**
   * When the refund was fully reconciled and the Return reached `refunded`.
   */
  refundedAt?: string;

  /**
   * When the merchant issued the refund on its side.
   */
  refundIssuedAt?: string;

  /**
   * When the merchant approved the return.
   */
  returnApprovedAt?: string;
}

export interface ReturnCreateParams {
  /**
   * Rye order id (`order_<32 hex>`) of the order being returned.
   */
  orderId: string;

  /**
   * Reason for the return.
   */
  reason: ReturnReason;
}

export declare namespace Returns {
  export {
    type Return as Return,
    type ReturnDenial as ReturnDenial,
    type ReturnFailure as ReturnFailure,
    type ReturnNextAction as ReturnNextAction,
    type ReturnReason as ReturnReason,
    type ReturnRefund as ReturnRefund,
    type ReturnState as ReturnState,
    type ReturnTimeline as ReturnTimeline,
    type ReturnCreateParams as ReturnCreateParams,
  };
}
