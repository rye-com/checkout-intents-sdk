// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CheckoutIntents, { WebhookSignatureVerificationError } from 'checkout-intents';
import { createHmac } from 'crypto';

const client = new CheckoutIntents({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

const WEBHOOK_SECRET = 'test_webhook_secret_key';

const EVENT_PAYLOAD = JSON.stringify({
  id: 'evt_1234567890',
  createdAt: '2026-03-25T00:00:00Z',
  object: 'event',
  source: {
    id: 'ci_1234567890',
    type: 'checkout_intent',
  },
  type: 'checkout_intent.offer_retrieved',
});

function computeSignature(data: string, secret: string): string {
  return createHmac('sha256', secret).update(data).digest('hex');
}

describe('resource events', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.events.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.events.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.events.list({
    after: 'after',
    before: 'before',
    limit: 1,
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(CheckoutIntents.NotFoundError);
  });

  describe('unwrap', () => {
    test('with valid signature', async () => {
      const signature = computeSignature(EVENT_PAYLOAD, WEBHOOK_SECRET);

      const event = await client.events.unwrap(EVENT_PAYLOAD, `v0=${signature}`, WEBHOOK_SECRET);

      expect(event.id).toBe('evt_1234567890');
      expect(event.createdAt).toBe('2026-03-25T00:00:00Z');
      expect(event.object).toBe('event');
      expect(event.source.id).toBe('ci_1234567890');
      expect(event.source.type).toBe('checkout_intent');
      expect(event.type).toBe('checkout_intent.offer_retrieved');
    });

    test('with ArrayBuffer body', async () => {
      const encoder = new TextEncoder();
      const bodyBytes = encoder.encode(EVENT_PAYLOAD);
      const signature = computeSignature(EVENT_PAYLOAD, WEBHOOK_SECRET);

      const event = await client.events.unwrap(bodyBytes.buffer, `v0=${signature}`, WEBHOOK_SECRET);

      expect(event.id).toBe('evt_1234567890');
    });

    test('with null signature header', async () => {
      await expect(client.events.unwrap(EVENT_PAYLOAD, null, WEBHOOK_SECRET)).rejects.toThrow(
        WebhookSignatureVerificationError,
      );
      await expect(client.events.unwrap(EVENT_PAYLOAD, null, WEBHOOK_SECRET)).rejects.toThrow(
        /Invalid signature header format/,
      );
    });

    test('with missing prefix', async () => {
      const signature = computeSignature(EVENT_PAYLOAD, WEBHOOK_SECRET);

      await expect(client.events.unwrap(EVENT_PAYLOAD, signature, WEBHOOK_SECRET)).rejects.toThrow(
        WebhookSignatureVerificationError,
      );
      await expect(client.events.unwrap(EVENT_PAYLOAD, signature, WEBHOOK_SECRET)).rejects.toThrow(
        /Invalid signature header format/,
      );
    });

    test('with invalid signature', async () => {
      await expect(
        client.events.unwrap(EVENT_PAYLOAD, 'v0=invalid_signature', WEBHOOK_SECRET),
      ).rejects.toThrow(WebhookSignatureVerificationError);
      await expect(
        client.events.unwrap(EVENT_PAYLOAD, 'v0=invalid_signature', WEBHOOK_SECRET),
      ).rejects.toThrow(/signature verification failed/);
    });

    test('with wrong secret', async () => {
      const signature = computeSignature(EVENT_PAYLOAD, WEBHOOK_SECRET);

      await expect(client.events.unwrap(EVENT_PAYLOAD, `v0=${signature}`, 'wrong_secret')).rejects.toThrow(
        WebhookSignatureVerificationError,
      );
      await expect(client.events.unwrap(EVENT_PAYLOAD, `v0=${signature}`, 'wrong_secret')).rejects.toThrow(
        /signature verification failed/,
      );
    });

    test('with tampered body', async () => {
      const signature = computeSignature(EVENT_PAYLOAD, WEBHOOK_SECRET);
      const tamperedBody = EVENT_PAYLOAD.replace('evt_1234567890', 'evt_tampered');

      await expect(client.events.unwrap(tamperedBody, `v0=${signature}`, WEBHOOK_SECRET)).rejects.toThrow(
        WebhookSignatureVerificationError,
      );
      await expect(client.events.unwrap(tamperedBody, `v0=${signature}`, WEBHOOK_SECRET)).rejects.toThrow(
        /signature verification failed/,
      );
    });

    test('with invalid JSON', async () => {
      const invalidJson = 'not valid json';
      const signature = computeSignature(invalidJson, WEBHOOK_SECRET);

      await expect(client.events.unwrap(invalidJson, `v0=${signature}`, WEBHOOK_SECRET)).rejects.toThrow(
        WebhookSignatureVerificationError,
      );
      await expect(client.events.unwrap(invalidJson, `v0=${signature}`, WEBHOOK_SECRET)).rejects.toThrow(
        /Failed to parse webhook payload/,
      );
    });

    test('with real webhook payload', async () => {
      const body = `{"id":"evt_ci_acf8e2c44f4c4583bd5b58d291242bb2_awaiting_confirmation","object":"event","type":"checkout_intent.offer_retrieved","createdAt":"2026-04-21T03:27:50.000Z","source":{"type":"checkout_intent","id":"ci_acf8e2c44f4c4583bd5b58d291242bb2"}}`;
      const signature = 'v0=a296fa9084469414e018aa8c33f68d315f88a0b503babb3825f7de87f473803e';
      const secret = '6b2f15a9c9ee825fcf6f6447351a810c';

      const event = await client.events.unwrap(body, signature, secret);

      expect(event.id).toBe('evt_ci_acf8e2c44f4c4583bd5b58d291242bb2_awaiting_confirmation');
      expect(event.type).toBe('checkout_intent.offer_retrieved');
      expect(event.source.id).toBe('ci_acf8e2c44f4c4583bd5b58d291242bb2');
      expect(event.source.type).toBe('checkout_intent');
    });
  });
});
