// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CheckoutIntents from 'checkout-intents';

const client = new CheckoutIntents({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource merchantConnectors', () => {
  // Mock server tests are disabled
  test.skip('createInstallationLink: only required params', async () => {
    const responsePromise = client.merchantConnectors.createInstallationLink('shopify', {
      storeUrl: 'storeUrl',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createInstallationLink: required and optional params', async () => {
    const response = await client.merchantConnectors.createInstallationLink('shopify', {
      storeUrl: 'storeUrl',
      private: true,
    });
  });
});
