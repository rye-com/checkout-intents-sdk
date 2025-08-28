// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CheckoutIntents from 'checkout-intents';

const client = new CheckoutIntents({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource checkoutIntents', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.api.v1.checkoutIntents.create({
      buyer: {
        address1: '123 Main St',
        city: 'New York',
        country: 'US',
        email: 'john.doe@example.com',
        firstName: 'John',
        lastName: 'Doe',
        phone: '5555555555',
        postalCode: '10001',
        province: 'NY',
      },
      productUrl: 'productUrl',
      quantity: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.api.v1.checkoutIntents.create({
      buyer: {
        address1: '123 Main St',
        city: 'New York',
        country: 'US',
        email: 'john.doe@example.com',
        firstName: 'John',
        lastName: 'Doe',
        phone: '5555555555',
        postalCode: '10001',
        province: 'NY',
        address2: 'Apt 1',
      },
      productUrl: 'productUrl',
      quantity: 0,
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.api.v1.checkoutIntents.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('confirm: only required params', async () => {
    const responsePromise = client.api.v1.checkoutIntents.confirm('id', {
      paymentMethod: { stripeToken: 'tok_1RkrWWHGDlstla3f1Fc7ZrhH', type: 'stripe_token' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('confirm: required and optional params', async () => {
    const response = await client.api.v1.checkoutIntents.confirm('id', {
      paymentMethod: { stripeToken: 'tok_1RkrWWHGDlstla3f1Fc7ZrhH', type: 'stripe_token' },
    });
  });
});
