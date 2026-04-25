// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Events extends APIResource {
  /**
   * Retrieves an event by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Event> {
    return this._client.get(path`/api/v1/events/${id}`, options);
  }

  /**
   * Retrieve a paginated list of events.
   */
  list(query: EventListParams | null | undefined = {}, options?: RequestOptions): PagePromise<EventsCursorPagination, Event> {
    return this._client.getAPIList('/api/v1/events', CursorPagination<Event>, { query, ...options });
  }
}

export type EventsCursorPagination = CursorPagination<Event>

export interface Event {
  /**
   * Unique identifier for the event. This can be used as an idempotency key to avoid
   * double-processing of the same underlying event.
   */
  id: string;

  /**
   * Timestamp of when the event was created.
   */
  createdAt: string;

  object: 'event';

  /**
   * A reference to the object which triggered the event.
   *
   * You should use the API to fetch the full object details.
   */
  source: Event.Source;

  /**
   * Description of the event.
   *
   * Refer to [types of events](https://docs.rye.com/api-v2/webhooks/types) for a
   * list of possible values.
   */
  type: 'checkout_intent.offer_retrieved' | 'checkout_intent.offer_failed' | 'checkout_intent.completed' | 'checkout_intent.order_failed' | 'shipment.created' | 'shipment.updated' | 'product.updated' | 'product.removed' | 'webhook_endpoint.verification_challenge';

  /**
   * The event data payload. The concrete shape depends on `source.type`.
   *
   * Refer to [webhook event types](https://docs.rye.com/api-v2/webhooks/types) for
   * the payload shape associated with each `source.type`.
   */
  data?: { [key: string]: unknown };
}

export namespace Event {
  /**
   * A reference to the object which triggered the event.
   *
   * You should use the API to fetch the full object details.
   */
  export interface Source {
    /**
     * ID of the object which triggered the event.
     */
    id: string;

    /**
     * Type of the object which triggered the event.
     */
    type: 'checkout_intent' | 'shipment' | 'product' | 'webhook_endpoint';
  }
}

export interface EventListParams extends CursorPaginationParams {
}

export declare namespace Events {
  export {
    type Event as Event,
    type EventsCursorPagination as EventsCursorPagination,
    type EventListParams as EventListParams
  };
}
