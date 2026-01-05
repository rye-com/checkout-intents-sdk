// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CheckoutSessionsAPI from './checkout-sessions';
import { CheckoutSessionCreateParams, CheckoutSessions } from './checkout-sessions';

export class Betas extends APIResource {
  checkoutSessions: CheckoutSessionsAPI.CheckoutSessions = new CheckoutSessionsAPI.CheckoutSessions(
    this._client,
  );
}

/**
 * A checkout session represents a hosted checkout form that shoppers can use to
 * complete their purchases.
 *
 * Checkout sessions provide a pre-built UI for collecting payment and shipping
 * information, allowing you to quickly integrate checkout functionality without
 * building your own forms.
 */
export interface CheckoutSession {
  /**
   * URL to send your user to for checkout. This URL is valid for 4 hours.
   */
  url: string;
}

Betas.CheckoutSessions = CheckoutSessions;

export declare namespace Betas {
  export { type CheckoutSession as CheckoutSession };

  export {
    CheckoutSessions as CheckoutSessions,
    type CheckoutSessionCreateParams as CheckoutSessionCreateParams,
  };
}
