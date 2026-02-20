// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CheckoutIntents from 'checkout-intents';

const client = new CheckoutIntents({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource checkoutSessions', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.betas.checkoutSessions.create({ productUrl: 'productUrl', quantity: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.betas.checkoutSessions.create({
      productUrl: 'productUrl',
      quantity: 1,
      buyer: {
        address1: '123 Main St',
        address2: 'Apt 1',
        city: 'New York',
        country: 'US',
        email: 'john.doe@example.com',
        firstName: 'John',
        lastName: 'Doe',
        phone: '1234567890',
        postalCode: '10001',
        province: 'NY',
      },
      constraints: {
        maxShippingPrice: 500,
        maxTotalPrice: 100000,
        offerRetrievalEffort: 'max',
      },
      discoverPromoCodes: true,
      promoCodes: ['string'],
      variantSelections: [{ label: 'Size, Color, etc.', value: 'Small, Red, XS, L, etc.' }],
    });
  });
});
