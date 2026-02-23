// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ShipmentsAPI from '../shipments';
import { ShipmentsCursorPagination } from '../shipments';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Shipments extends APIResource {
  /**
   * List shipments for a checkout intent
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const shipment of client.checkoutIntents.shipments.list(
   *   'id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    id: string,
    query: ShipmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ShipmentsCursorPagination, ShipmentsAPI.Shipment> {
    return this._client.getAPIList(
      path`/api/v1/checkout-intents/${id}/shipments`,
      CursorPagination<ShipmentsAPI.Shipment>,
      { query, ...options },
    );
  }
}

export interface ShipmentListParams extends CursorPaginationParams {}

export declare namespace Shipments {
  export { type ShipmentListParams as ShipmentListParams };
}

export { type ShipmentsCursorPagination };
