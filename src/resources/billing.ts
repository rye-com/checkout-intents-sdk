// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CheckoutIntentsAPI from './checkout-intents';
import { APIPromise } from '../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Billing extends APIResource {
  /**
   * Get current drawdown balance for the authenticated developer
   */
  getBalance(options?: RequestOptions): APIPromise<BillingGetBalanceResponse> {
    return this._client.get('/api/v1/billing/balance', options);
  }

  /**
   * List drawdown balance transactions for the authenticated developer
   */
  listTransactions(
    query: BillingListTransactionsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BillingListTransactionsResponsesCursorPagination, BillingListTransactionsResponse> {
    return this._client.getAPIList(
      '/api/v1/billing/transactions',
      CursorPagination<BillingListTransactionsResponse>,
      { query, ...options },
    );
  }
}

export type BillingListTransactionsResponsesCursorPagination =
  CursorPagination<BillingListTransactionsResponse>;

export interface BillingGetBalanceResponse {
  balance: CheckoutIntentsAPI.Money;
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

export interface BillingListTransactionsParams extends CursorPaginationParams {}

export declare namespace Billing {
  export {
    type BillingGetBalanceResponse as BillingGetBalanceResponse,
    type BillingListTransactionsResponse as BillingListTransactionsResponse,
    type BillingListTransactionsResponsesCursorPagination as BillingListTransactionsResponsesCursorPagination,
    type BillingListTransactionsParams as BillingListTransactionsParams,
  };
}
