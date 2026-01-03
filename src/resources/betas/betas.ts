// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CheckoutSessionsAPI from './checkout-sessions';
import {
  CheckoutSessionCreateParams,
  CheckoutSessionCreateResponse,
  CheckoutSessions,
} from './checkout-sessions';

export class Betas extends APIResource {
  checkoutSessions: CheckoutSessionsAPI.CheckoutSessions = new CheckoutSessionsAPI.CheckoutSessions(
    this._client,
  );
}

Betas.CheckoutSessions = CheckoutSessions;

export declare namespace Betas {
  export {
    CheckoutSessions as CheckoutSessions,
    type CheckoutSessionCreateResponse as CheckoutSessionCreateResponse,
    type CheckoutSessionCreateParams as CheckoutSessionCreateParams,
  };
}
