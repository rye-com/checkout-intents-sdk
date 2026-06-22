// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ReturnsAPI from './returns';
import {
  ReturnApproveParams,
  ReturnCreateParams,
  ReturnDenyParams,
  ReturnFailParams,
  ReturnRefundParams,
  Returns,
} from './returns';
import * as ShipmentsAPI from './shipments';
import { ShipmentAdvanceResponse, Shipments } from './shipments';

export class TestHelpers extends APIResource {
  returns: ReturnsAPI.Returns = new ReturnsAPI.Returns(this._client);
  shipments: ShipmentsAPI.Shipments = new ShipmentsAPI.Shipments(this._client);
}

TestHelpers.Returns = Returns;
TestHelpers.Shipments = Shipments;

export declare namespace TestHelpers {
  export {
    Returns as Returns,
    type ReturnCreateParams as ReturnCreateParams,
    type ReturnApproveParams as ReturnApproveParams,
    type ReturnDenyParams as ReturnDenyParams,
    type ReturnFailParams as ReturnFailParams,
    type ReturnRefundParams as ReturnRefundParams,
  };

  export { Shipments as Shipments, type ShipmentAdvanceResponse as ShipmentAdvanceResponse };
}
