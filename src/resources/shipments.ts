// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Shipments extends APIResource {
  /**
   * Retrieve a shipment by id
   *
   * Returns shipment information if the lookup succeeds.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shipment> {
    return this._client.get(path`/api/v1/shipments/${id}`, options);
  }

  /**
   * Retrieve a paginated list of shipments
   *
   * Enables developers to query shipments associated with their account, with
   * filters and cursor-based pagination.
   */
  list(
    query: ShipmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ShipmentsCursorPagination, Shipment> {
    return this._client.getAPIList('/api/v1/shipments', CursorPagination<Shipment>, { query, ...options });
  }
}

export type ShipmentsCursorPagination = CursorPagination<Shipment>;

export type Shipment =
  | Shipment.WithStatusBaseShipmentWithTrackingShipped
  | Shipment.DeliveredShipment
  | Shipment.WithStatusBaseShipmentWithTrackingDelayed
  | Shipment.WithStatusBaseShipmentWithTrackingOutForDelivery
  | Shipment.WithStatusBaseShipmentOrdered
  | Shipment.WithStatusBaseShipmentCanceled;

export namespace Shipment {
  export interface WithStatusBaseShipmentWithTrackingShipped {
    id: string;

    checkoutIntentId: string;

    createdAt: string;

    externalId: string;

    shippedAt: string;

    status: 'shipped';

    tracking: WithStatusBaseShipmentWithTrackingShipped.Tracking;

    trackingEvents: Array<WithStatusBaseShipmentWithTrackingShipped.TrackingEvent>;

    updatedAt: string;
  }

  export namespace WithStatusBaseShipmentWithTrackingShipped {
    export interface Tracking {
      number: string | null;

      carrierName?: string | null;

      estimatedDeliveryDate?: string | null;

      url?: string | null;
    }

    export interface TrackingEvent {
      description: string | null;

      displayDate: string | null;

      displayTime: string | null;

      location: TrackingEvent.Location;
    }

    export namespace TrackingEvent {
      export interface Location {
        city?: string | null;

        country?: string | null;

        province?: string | null;
      }
    }
  }

  export interface DeliveredShipment {
    id: string;

    checkoutIntentId: string;

    createdAt: string;

    deliveredAt: string;

    externalId: string;

    shippedAt: string;

    status: 'delivered';

    tracking: DeliveredShipment.Tracking;

    trackingEvents: Array<DeliveredShipment.TrackingEvent>;

    updatedAt: string;
  }

  export namespace DeliveredShipment {
    export interface Tracking {
      number: string | null;

      carrierName?: string | null;

      estimatedDeliveryDate?: string | null;

      url?: string | null;
    }

    export interface TrackingEvent {
      description: string | null;

      displayDate: string | null;

      displayTime: string | null;

      location: TrackingEvent.Location;
    }

    export namespace TrackingEvent {
      export interface Location {
        city?: string | null;

        country?: string | null;

        province?: string | null;
      }
    }
  }

  export interface WithStatusBaseShipmentWithTrackingDelayed {
    id: string;

    checkoutIntentId: string;

    createdAt: string;

    externalId: string;

    shippedAt: string;

    status: 'delayed';

    tracking: WithStatusBaseShipmentWithTrackingDelayed.Tracking;

    trackingEvents: Array<WithStatusBaseShipmentWithTrackingDelayed.TrackingEvent>;

    updatedAt: string;
  }

  export namespace WithStatusBaseShipmentWithTrackingDelayed {
    export interface Tracking {
      number: string | null;

      carrierName?: string | null;

      estimatedDeliveryDate?: string | null;

      url?: string | null;
    }

    export interface TrackingEvent {
      description: string | null;

      displayDate: string | null;

      displayTime: string | null;

      location: TrackingEvent.Location;
    }

    export namespace TrackingEvent {
      export interface Location {
        city?: string | null;

        country?: string | null;

        province?: string | null;
      }
    }
  }

  export interface WithStatusBaseShipmentWithTrackingOutForDelivery {
    id: string;

    checkoutIntentId: string;

    createdAt: string;

    externalId: string;

    shippedAt: string;

    status: 'out_for_delivery';

    tracking: WithStatusBaseShipmentWithTrackingOutForDelivery.Tracking;

    trackingEvents: Array<WithStatusBaseShipmentWithTrackingOutForDelivery.TrackingEvent>;

    updatedAt: string;
  }

  export namespace WithStatusBaseShipmentWithTrackingOutForDelivery {
    export interface Tracking {
      number: string | null;

      carrierName?: string | null;

      estimatedDeliveryDate?: string | null;

      url?: string | null;
    }

    export interface TrackingEvent {
      description: string | null;

      displayDate: string | null;

      displayTime: string | null;

      location: TrackingEvent.Location;
    }

    export namespace TrackingEvent {
      export interface Location {
        city?: string | null;

        country?: string | null;

        province?: string | null;
      }
    }
  }

  export interface WithStatusBaseShipmentOrdered {
    id: string;

    checkoutIntentId: string;

    createdAt: string;

    status: 'ordered';

    updatedAt: string;
  }

  export interface WithStatusBaseShipmentCanceled {
    id: string;

    checkoutIntentId: string;

    createdAt: string;

    status: 'canceled';

    updatedAt: string;
  }
}

export interface ShipmentListParams extends CursorPaginationParams {
  ids?: Array<string>;

  status?: Array<'out_for_delivery' | 'delivered' | 'shipped' | 'canceled' | 'delayed' | 'ordered'>;
}

export declare namespace Shipments {
  export {
    type Shipment as Shipment,
    type ShipmentsCursorPagination as ShipmentsCursorPagination,
    type ShipmentListParams as ShipmentListParams,
  };
}
