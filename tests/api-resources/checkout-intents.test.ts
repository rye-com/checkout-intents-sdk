// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CheckoutIntents from 'checkout-intents';
import { type CheckoutIntent } from 'checkout-intents/resources';

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
      promoCodes: ['string'],
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
      promoCodes: ['string'],
      variantSelections: [{ label: 'Size, Color, etc.', value: 'Small, Red, XS, L, etc.' }],
    });
  });

  describe('polling helpers', () => {
    test('pollUntilCompleted: polls until completed state', async () => {
      let callCount = 0;
      const mockStates = ['placing_order', 'completed'] as const;

      // Mock the retrieve method to simulate state progression
      const originalRetrieve = client.checkoutIntents.retrieve;
      client.checkoutIntents.retrieve = jest.fn().mockImplementation(() => {
        const state = mockStates[Math.min(callCount, mockStates.length - 1)];
        callCount++;

        const mockIntent = {
          id: 'test-id',
          state,
          buyer: {
            address1: '123 Main St',
            city: 'New York',
            country: 'US',
            email: 'test@example.com',
            firstName: 'John',
            lastName: 'Doe',
            phone: '1234567890',
            postalCode: '10001',
            province: 'NY',
          },
          createdAt: new Date().toISOString(),
          productUrl: 'https://example.com/product',
          quantity: 1,
        };

        // Add payment method for states that require it
        if (state === 'placing_order' || state === 'completed') {
          (mockIntent as CheckoutIntent.PlacingOrderCheckoutIntent).paymentMethod = {
            type: 'stripe_token',
            stripeToken: 'tok_test',
          };
        }

        return {
          withResponse: async () => ({
            data: mockIntent,
            response: new Response(null, { headers: new Headers() }),
          }),
        };
      });

      const result = await client.checkoutIntents.pollUntilCompleted('test-id', {
        pollIntervalMs: 10,
        maxAttempts: 10,
      });

      expect(result.state).toBe('completed');
      expect(client.checkoutIntents.retrieve).toHaveBeenCalledTimes(2);

      // Restore original method
      client.checkoutIntents.retrieve = originalRetrieve;
    });

    test('pollUntilCompleted: can return failed state', async () => {
      // Mock the retrieve method to simulate failure
      const originalRetrieve = client.checkoutIntents.retrieve;
      client.checkoutIntents.retrieve = jest.fn().mockImplementation(() => {
        return {
          withResponse: async () => ({
            data: {
              id: 'test-id',
              state: 'failed',
              failureReason: {
                code: 'payment_failed',
                message: 'Payment failed',
              },
              buyer: {
                address1: '123 Main St',
                city: 'New York',
                country: 'US',
                email: 'test@example.com',
                firstName: 'John',
                lastName: 'Doe',
                phone: '1234567890',
                postalCode: '10001',
                province: 'NY',
              },
              createdAt: new Date().toISOString(),
              productUrl: 'https://example.com/product',
              quantity: 1,
            },
            response: new Response(null, { headers: new Headers() }),
          }),
        };
      });

      const result = await client.checkoutIntents.pollUntilCompleted('test-id', {
        pollIntervalMs: 10,
        maxAttempts: 10,
      });

      expect(result.state).toBe('failed');
      expect(client.checkoutIntents.retrieve).toHaveBeenCalledTimes(1);

      // Restore original method
      client.checkoutIntents.retrieve = originalRetrieve;
    });

    test('pollUntilCompleted: throws error on timeout', async () => {
      // Mock the retrieve method to always return a non-terminal state
      const originalRetrieve = client.checkoutIntents.retrieve;
      client.checkoutIntents.retrieve = jest.fn().mockImplementation(() => {
        return {
          withResponse: async () => ({
            data: {
              id: 'test-id',
              state: 'retrieving_offer',
              buyer: {
                address1: '123 Main St',
                city: 'New York',
                country: 'US',
                email: 'test@example.com',
                firstName: 'John',
                lastName: 'Doe',
                phone: '1234567890',
                postalCode: '10001',
                province: 'NY',
              },
              createdAt: new Date().toISOString(),
              productUrl: 'https://example.com/product',
              quantity: 1,
            },
            response: new Response(null, { headers: new Headers() }),
          }),
        };
      });

      await expect(
        client.checkoutIntents.pollUntilCompleted('test-id', {
          pollIntervalMs: 10,
          maxAttempts: 3,
        }),
      ).rejects.toThrow(/Polling timeout/);

      // Restore original method
      client.checkoutIntents.retrieve = originalRetrieve;
    });

    test('pollUntilAwaitingConfirmation: polls until awaiting_confirmation state', async () => {
      let callCount = 0;
      const mockStates = ['retrieving_offer', 'awaiting_confirmation'] as const;

      // Mock the retrieve method to simulate state progression
      const originalRetrieve = client.checkoutIntents.retrieve;
      client.checkoutIntents.retrieve = jest.fn().mockImplementation(() => {
        const state = mockStates[Math.min(callCount, mockStates.length - 1)];
        callCount++;

        const mockIntent = {
          id: 'test-id',
          state,
          buyer: {
            address1: '123 Main St',
            city: 'New York',
            country: 'US',
            email: 'test@example.com',
            firstName: 'John',
            lastName: 'Doe',
            phone: '1234567890',
            postalCode: '10001',
            province: 'NY',
          },
          createdAt: new Date().toISOString(),
          productUrl: 'https://example.com/product',
          quantity: 1,
        };

        // Add offer when in awaiting_confirmation state
        if (state === 'awaiting_confirmation') {
          (mockIntent as CheckoutIntent.AwaitingConfirmationCheckoutIntent).offer = {
            cost: {
              subtotal: { amountSubunits: 1000, currencyCode: 'USD' },
              total: { amountSubunits: 1200, currencyCode: 'USD' },
            },
            shipping: {
              availableOptions: [],
            },
          };
        }

        return {
          withResponse: async () => ({
            data: mockIntent,
            response: new Response(null, { headers: new Headers() }),
          }),
        };
      });

      const result = await client.checkoutIntents.pollUntilAwaitingConfirmation('test-id', {
        pollIntervalMs: 10,
        maxAttempts: 10,
      });

      expect(result.state).toBe('awaiting_confirmation');
      expect(client.checkoutIntents.retrieve).toHaveBeenCalledTimes(2);

      // Restore original method
      client.checkoutIntents.retrieve = originalRetrieve;
    });

    test('pollUntilAwaitingConfirmation: can also return failed state', async () => {
      // Mock the retrieve method to return a failed state immediately
      const originalRetrieve = client.checkoutIntents.retrieve;
      client.checkoutIntents.retrieve = jest.fn().mockImplementation(() => {
        return {
          withResponse: async () => ({
            data: {
              id: 'test-id',
              state: 'failed',
              failureReason: {
                code: 'offer_retrieval_failed',
                message: 'Could not retrieve offer from merchant',
              },
              buyer: {
                address1: '123 Main St',
                city: 'New York',
                country: 'US',
                email: 'test@example.com',
                firstName: 'John',
                lastName: 'Doe',
                phone: '1234567890',
                postalCode: '10001',
                province: 'NY',
              },
              createdAt: new Date().toISOString(),
              productUrl: 'https://example.com/product',
              quantity: 1,
            },
            response: new Response(null, { headers: new Headers() }),
          }),
        };
      });

      const result = await client.checkoutIntents.pollUntilAwaitingConfirmation('test-id');

      expect(result.state).toBe('failed');
      expect('failureReason' in result && result.failureReason.code).toBe('offer_retrieval_failed');

      // Restore original method
      client.checkoutIntents.retrieve = originalRetrieve;
    });

    test('createAndPoll: creates and polls until awaiting_confirmation (not terminal)', async () => {
      const originalCreate = client.checkoutIntents.create;
      const originalPollUntilAwaitingConfirmation = client.checkoutIntents.pollUntilAwaitingConfirmation;

      const mockBuyer = {
        address1: '123 Main St',
        city: 'New York',
        country: 'US',
        email: 'test@example.com',
        firstName: 'John',
        lastName: 'Doe',
        phone: '1234567890',
        postalCode: '10001',
        province: 'NY',
      };

      // Mock create
      client.checkoutIntents.create = jest.fn().mockResolvedValue({
        id: 'test-id',
        state: 'retrieving_offer',
        buyer: mockBuyer,
        createdAt: new Date().toISOString(),
        productUrl: 'https://example.com/product',
        quantity: 1,
      });

      // Mock pollUntilAwaitingConfirmation
      client.checkoutIntents.pollUntilAwaitingConfirmation = jest.fn().mockResolvedValue({
        id: 'test-id',
        state: 'awaiting_confirmation',
        offer: {
          cost: {
            subtotal: { amountSubunits: 1000, currencyCode: 'USD' },
            total: { amountSubunits: 1200, currencyCode: 'USD' },
          },
          shipping: {
            availableOptions: [],
          },
        },
        buyer: mockBuyer,
        createdAt: new Date().toISOString(),
        productUrl: 'https://example.com/product',
        quantity: 1,
      });

      const result = await client.checkoutIntents.createAndPoll({
        buyer: mockBuyer,
        productUrl: 'https://example.com/product',
        quantity: 1,
      });

      expect(result.state).toBe('awaiting_confirmation');
      expect(client.checkoutIntents.create).toHaveBeenCalled();
      expect(client.checkoutIntents.pollUntilAwaitingConfirmation).toHaveBeenCalledWith('test-id', undefined);

      // Restore original methods
      client.checkoutIntents.create = originalCreate;
      client.checkoutIntents.pollUntilAwaitingConfirmation = originalPollUntilAwaitingConfirmation;
    });

    test('pollUntilCompleted: coerces maxAttempts < 1 to 1 and logs warning', async () => {
      const originalRetrieve = client.checkoutIntents.retrieve;
      const originalWarn = console.warn;
      const warnSpy = jest.fn();
      console.warn = warnSpy;

      // Mock the retrieve method
      client.checkoutIntents.retrieve = jest.fn().mockImplementation(() => {
        return {
          withResponse: async () => ({
            data: {
              id: 'test-id',
              state: 'completed',
              buyer: {
                address1: '123 Main St',
                city: 'New York',
                country: 'US',
                email: 'test@example.com',
                firstName: 'John',
                lastName: 'Doe',
                phone: '1234567890',
                postalCode: '10001',
                province: 'NY',
              },
              createdAt: new Date().toISOString(),
              productUrl: 'https://example.com/product',
              quantity: 1,
              paymentMethod: {
                type: 'stripe_token',
                stripeToken: 'tok_test',
              },
            },
            response: new Response(null, { headers: new Headers() }),
          }),
        };
      });

      // Test with maxAttempts = 0
      const result = await client.checkoutIntents.pollUntilCompleted('test-id', {
        pollIntervalMs: 10,
        maxAttempts: 0,
      });

      expect(result.state).toBe('completed');
      // Should have been called exactly once (coerced to 1)
      expect(client.checkoutIntents.retrieve).toHaveBeenCalledTimes(1);
      // Should have logged a warning
      expect(warnSpy).toHaveBeenCalledWith(
        expect.stringContaining('[Checkout Intents SDK] Invalid maxAttempts value: 0'),
      );

      // Restore
      client.checkoutIntents.retrieve = originalRetrieve;
      console.warn = originalWarn;
    });
  });
});
