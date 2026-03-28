// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PaymentGateways extends APIResource {
  /**
   * Create a payment gateway session for client-side card tokenization.
   *
   * Returns short-lived credentials scoped to the authenticated developer. Use the
   * credentials with the corresponding gateway's client-side SDK to tokenize a card.
   * Tokens created this way are locked to the developer's container and cannot be
   * used by other developers.
   */
  createSession(gateway: PaymentGateway, options?: RequestOptions): APIPromise<PaymentGatewaySession> {
    return this._client.post(path`/api/v1/payment-gateways/${gateway}/session`, options);
  }
}

export type PaymentGateway = 'basis-theory';

export interface PaymentGatewaySession {
  container: string;

  gateway: 'basis_theory';

  sessionKey: string;
}

export declare namespace PaymentGateways {
  export { type PaymentGateway as PaymentGateway, type PaymentGatewaySession as PaymentGatewaySession };
}
