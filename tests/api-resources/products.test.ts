// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CheckoutIntents from 'checkout-intents';

const client = new CheckoutIntents({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource products', () => {
  // Mock server tests are disabled
  test.skip('listSubscriptions', async () => {
    const responsePromise = client.products.listSubscriptions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('lookup: only required params', async () => {
    const responsePromise = client.products.lookup({ url: 'url' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('lookup: required and optional params', async () => {
    const response = await client.products.lookup({ url: 'url' });
  });

  // Mock server tests are disabled
  test.skip('subscribe: only required params', async () => {
    const responsePromise = client.products.subscribe({ type: 'store', url: 'https://store.myshopify.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('subscribe: required and optional params', async () => {
    const response = await client.products.subscribe({ type: 'store', url: 'https://store.myshopify.com' });
  });

  // Mock server tests are disabled
  test.skip('unsubscribe: only required params', async () => {
    const responsePromise = client.products.unsubscribe({
      type: 'store',
      url: 'https://store.myshopify.com',
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
  test.skip('unsubscribe: required and optional params', async () => {
    const response = await client.products.unsubscribe({ type: 'store', url: 'https://store.myshopify.com' });
  });
});
