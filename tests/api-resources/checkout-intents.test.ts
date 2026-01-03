// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CheckoutIntents from 'checkout-intents';

const client = new CheckoutIntents({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource checkoutIntents', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.checkoutIntents.create({
      buyer: {
        address1: '123 Main St',
        city: 'New York',
        country: 'US',
        email: 'john.doe@example.com',
        firstName: 'John',
        lastName: 'Doe',
        phone: '1234567890',
        postalCode: '10001',
        province: 'NY',
      },
      productUrl: 'productUrl',
      quantity: 1,
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
    const response = await client.checkoutIntents.create({
      buyer: {
        address1: '123 Main St',
        city: 'New York',
        country: 'US',
        email: 'john.doe@example.com',
        firstName: 'John',
        lastName: 'Doe',
        phone: '1234567890',
        postalCode: '10001',
        province: 'NY',
        address2: 'Apt 1',
      },
      productUrl: 'productUrl',
      quantity: 1,
      constraints: { maxShippingPrice: 500, maxTotalPrice: 100000 },
      promoCodes: ['sqF12lZ1VlBb'],
      variantSelections: [{ label: 'Size, Color, etc.', value: 'Small, Red, XS, L, etc.' }],
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.checkoutIntents.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.checkoutIntents.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.checkoutIntents.list(
        { id: ['string'], after: 'after', before: 'before', limit: 0, state: ['retrieving_offer'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(CheckoutIntents.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('addPayment: only required params', async () => {
    const responsePromise = client.checkoutIntents.addPayment('id', {
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
  test.skip('addPayment: required and optional params', async () => {
    const response = await client.checkoutIntents.addPayment('id', {
      paymentMethod: { stripeToken: 'tok_1RkrWWHGDlstla3f1Fc7ZrhH', type: 'stripe_token' },
    });
  });

  // Prism tests are disabled
  test.skip('confirm: only required params', async () => {
    const responsePromise = client.checkoutIntents.confirm('id', {
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
    const response = await client.checkoutIntents.confirm('id', {
      paymentMethod: { stripeToken: 'tok_1RkrWWHGDlstla3f1Fc7ZrhH', type: 'stripe_token' },
    });
  });

  // Prism tests are disabled
  test.skip('purchase: only required params', async () => {
    const responsePromise = client.checkoutIntents.purchase({
      buyer: {
        address1: '123 Main St',
        city: 'New York',
        country: 'US',
        email: 'john.doe@example.com',
        firstName: 'John',
        lastName: 'Doe',
        phone: '1234567890',
        postalCode: '10001',
        province: 'NY',
      },
      paymentMethod: { stripeToken: 'tok_1RkrWWHGDlstla3f1Fc7ZrhH', type: 'stripe_token' },
      productUrl: 'productUrl',
      quantity: 1,
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
  test.skip('purchase: required and optional params', async () => {
    const response = await client.checkoutIntents.purchase({
      buyer: {
        address1: '123 Main St',
        city: 'New York',
        country: 'US',
        email: 'john.doe@example.com',
        firstName: 'John',
        lastName: 'Doe',
        phone: '1234567890',
        postalCode: '10001',
        province: 'NY',
        address2: 'Apt 1',
      },
      paymentMethod: { stripeToken: 'tok_1RkrWWHGDlstla3f1Fc7ZrhH', type: 'stripe_token' },
      productUrl: 'productUrl',
      quantity: 1,
      constraints: { maxShippingPrice: 500, maxTotalPrice: 100000 },
      promoCodes: ['sqF12lZ1VlBb'],
      variantSelections: [{ label: 'Size, Color, etc.', value: 'Small, Red, XS, L, etc.' }],
    });
  });
});
