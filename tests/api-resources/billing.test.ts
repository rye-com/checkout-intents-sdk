// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CheckoutIntents from 'checkout-intents';

const client = new CheckoutIntents({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource billing', () => {
  // Mock server tests are disabled
  test.skip('cancelTopupInvoice', async () => {
    const responsePromise = client.billing.cancelTopupInvoice('invoiceId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createTopupInvoice: only required params', async () => {
    const responsePromise = client.billing.createTopupInvoice({ amountSubunits: 500000 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createTopupInvoice: required and optional params', async () => {
    const response = await client.billing.createTopupInvoice({ amountSubunits: 500000, chargeAutomatically: false });
  });

  // Mock server tests are disabled
  test.skip('getBalance', async () => {
    const responsePromise = client.billing.getBalance();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listTransactions', async () => {
    const responsePromise = client.billing.listTransactions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listTransactions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.billing.listTransactions({
    after: 'after',
    before: 'before',
    limit: 1,
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(CheckoutIntents.NotFoundError);
  });
});
