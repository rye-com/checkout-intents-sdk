// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ShipmentsAPI from '../shipments';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Shipments extends APIResource {
  /**
   * Advance the simulated shipment for a checkout intent. To trigger delayed or
   * canceled shipping scenarios, create the checkout intent with a matching shipping
   * and delivery test product:
   * https://rye.com/docs/api-v2/testing/test-products#shipping-&-delivery
   */
  advance(checkoutIntentID: string, options?: RequestOptions): APIPromise<ShipmentAdvanceResponse> {
    return this._client.post(
      path`/api/v1/test-helpers/checkout-intents/${checkoutIntentID}/shipments/advance`,
      options,
    );
  }
}

export interface ShipmentAdvanceResponse {
  shipment: ShipmentsAPI.Shipment;
}

export declare namespace Shipments {
  export { type ShipmentAdvanceResponse as ShipmentAdvanceResponse };
}
