import type { Event } from '../resources/events';
import { WebhookSignatureVerificationError } from '../lib/errors';

const SIGNATURE_PREFIX = 'v0=';

export async function unwrapEvent(
  body: string | ArrayBuffer,
  signatureHeader: string | null,
  secret: string,
): Promise<Event> {
  if (signatureHeader === null || !signatureHeader.startsWith(SIGNATURE_PREFIX)) {
    throw new WebhookSignatureVerificationError(
      `Invalid signature header format. Expected header starting with '${SIGNATURE_PREFIX}'.`,
    );
  }

  const expectedSignature = signatureHeader.substring(SIGNATURE_PREFIX.length);
  const bodyBytes = typeof body === 'string' ? new TextEncoder().encode(body) : new Uint8Array(body);
  const computedSignature = await computeHmacSha256(bodyBytes, secret);

  if (!secureCompare(computedSignature, expectedSignature)) {
    throw new WebhookSignatureVerificationError(
      'Webhook signature verification failed. The signature does not match the payload.',
    );
  }

  try {
    const bodyString = typeof body === 'string' ? body : new TextDecoder().decode(bodyBytes);
    return JSON.parse(bodyString) as Event;
  } catch {
    throw new WebhookSignatureVerificationError('Failed to parse webhook payload.');
  }
}

async function computeHmacSha256(data: Uint8Array, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const keyData = encoder.encode(secret);
  const key = await crypto.subtle.importKey('raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, [
    'sign',
  ]);
  const signature = await crypto.subtle.sign('HMAC', key, data);
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function secureCompare(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }
  const encoder = new TextEncoder();
  const aBytes = encoder.encode(a);
  const bBytes = encoder.encode(b);
  let result = 0;
  for (let i = 0; i < aBytes.length; i++) {
    result |= aBytes[i]! ^ bBytes[i]!;
  }
  return result === 0;
}
