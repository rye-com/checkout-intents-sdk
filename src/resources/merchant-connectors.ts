// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class MerchantConnectors extends APIResource {
  /**
   * Generate an installation link for a merchant connector (e.g. Shopify).
   *
   * The returned URL begins the connector's OAuth handshake. Direct the merchant to
   * it; once they authorize the Rye app, the connector redirects back to Rye to
   * complete the install. The merchant is attributed to the calling developer and
   * becomes available for checkout via this account.
   */
  createInstallationLink(
    connector: 'shopify',
    query: MerchantConnectorCreateInstallationLinkParams,
    options?: RequestOptions,
  ): APIPromise<InstallationLink> {
    return this._client.get(path`/api/v1/merchant-connectors/${connector}/installation-link`, {
      query,
      ...options,
    });
  }
}

/**
 * A merchant connector installation link.
 */
export interface InstallationLink {
  /**
   * The merchant connector this installation link was generated for.
   */
  connector: 'shopify';

  /**
   * URL to redirect the merchant to in order to install the Rye app on their
   * merchant platform.
   */
  url: string;
}

export interface MerchantConnectorCreateInstallationLinkParams {
  /**
   * Domain or URL of the merchant store to generate the installation link for
   */
  storeUrl: string;

  /**
   * If true, the merchant onboarded via this link is exclusive to the calling
   * developer
   */
  private?: boolean;
}

export declare namespace MerchantConnectors {
  export {
    type InstallationLink as InstallationLink,
    type MerchantConnectorCreateInstallationLinkParams as MerchantConnectorCreateInstallationLinkParams,
  };
}
