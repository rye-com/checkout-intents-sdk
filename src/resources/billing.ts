// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CheckoutIntentsAPI from './checkout-intents/checkout-intents';
import { APIPromise } from '../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Billing extends APIResource {
  /**
   * Cancel/void an unpaid top-up invoice. Only invoices in open state can be
   * cancelled.
   *
   * @example
   * ```ts
   * await client.billing.cancelTopupInvoice('invoiceId');
   * ```
   */
  cancelTopupInvoice(invoiceID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v1/billing/drawdown/topup/${invoiceID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

  /**
   * Request an on-demand top-up invoice.. Requires drawdown billing to be enabled.
   * Only one unpaid top-up invoice is allowed at a time.
   *
   * @example
   * ```ts
   * const response = await client.billing.createTopupInvoice({
   *   amountSubunits: 500000,
   * });
   * ```
   */
  createTopupInvoice(body: BillingCreateTopupInvoiceParams, options?: RequestOptions): APIPromise<BillingCreateTopupInvoiceResponse> {
    return this._client.post('/api/v1/billing/drawdown/topup', { body, ...options });
  }

  /**
   * Get current drawdown balance for the authenticated developer
   *
   * @example
   * ```ts
   * const response = await client.billing.getBalance();
   * ```
   */
  getBalance(options?: RequestOptions): APIPromise<BillingGetBalanceResponse> {
    return this._client.get('/api/v1/billing/balance', options);
  }

  /**
   * List drawdown balance transactions for the authenticated developer
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const billingListTransactionsResponse of client.billing.listTransactions()) {
   *   // ...
   * }
   * ```
   */
  listTransactions(query: BillingListTransactionsParams | null | undefined = {}, options?: RequestOptions): PagePromise<BillingListTransactionsResponsesCursorPagination, BillingListTransactionsResponse> {
    return this._client.getAPIList('/api/v1/billing/transactions', CursorPagination<BillingListTransactionsResponse>, { query, ...options });
  }
}

export type BillingListTransactionsResponsesCursorPagination = CursorPagination<BillingListTransactionsResponse>

export interface BillingCreateTopupInvoiceResponse {
  id: string;

  amount: CheckoutIntentsAPI.Money;

  /**
   * Vendor-agnostic bank transfer details for push-based payment
   */
  bankTransferDetails: BillingCreateTopupInvoiceResponse.BankTransferDetails;

  /**
   * Vendor-agnostic provider types
   */
  status: 'draft' | 'open' | 'paid' | 'uncollectible' | 'void' | 'unknown';

  url: string | null;
}

export namespace BillingCreateTopupInvoiceResponse {
  /**
   * Vendor-agnostic bank transfer details for push-based payment
   */
  export interface BankTransferDetails {
    accountHolderName: string;

    accountNumber: string;

    bankName: string;

    routingNumber: string;
  }
}

export interface BillingGetBalanceResponse {
  balance: CheckoutIntentsAPI.Money;

  drawdownEnabled: boolean;
}

export interface BillingListTransactionsResponse {
  id: string;

  amount: CheckoutIntentsAPI.Money;

  createdAt: string;

  description?: string;

  /**
   * Construct a type with a set of properties K of type T
   */
  metadata?: { [key: string]: string };
}

export interface BillingCreateTopupInvoiceParams {
  /**
   * Amount in smallest currency unit (e.g. cents).
   */
  amountSubunits: number;

  /**
   * Override whether to automatically charge the invoice. Defaults to the
   * developer's drawdown config value if not specified.
   */
  chargeAutomatically?: boolean;
}

export interface BillingListTransactionsParams extends CursorPaginationParams {
}

export declare namespace Billing {
  export {
    type BillingCreateTopupInvoiceResponse as BillingCreateTopupInvoiceResponse,
    type BillingGetBalanceResponse as BillingGetBalanceResponse,
    type BillingListTransactionsResponse as BillingListTransactionsResponse,
    type BillingListTransactionsResponsesCursorPagination as BillingListTransactionsResponsesCursorPagination,
    type BillingCreateTopupInvoiceParams as BillingCreateTopupInvoiceParams,
    type BillingListTransactionsParams as BillingListTransactionsParams
  };
}
