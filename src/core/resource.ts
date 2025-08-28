// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { CheckoutIntents } from '../client';

export abstract class APIResource {
  protected _client: CheckoutIntents;

  constructor(client: CheckoutIntents) {
    this._client = client;
  }
}
