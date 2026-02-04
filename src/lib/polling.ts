/**
 * Polling helpers for Checkout Intents.
 */

import { CheckoutIntentsResource, CheckoutIntent } from '../resources/checkout-intents/checkout-intents';
import { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { sleep } from '../internal/utils/sleep';
import { loggerFor } from '../internal/utils/log';
import { PollTimeoutError } from './errors';

/**
 * Options for polling operations.
 */
export interface PollOptions {
  /**
   * The interval in milliseconds between polling attempts.
   */
  pollIntervalMs?: number;

  /**
   * The maximum number of polling attempts before timing out.
   */
  maxAttempts?: number;
}

/**
 * Core polling implementation. Polls a checkout intent until a condition is met.
 */
export async function pollUntil<T extends CheckoutIntent = CheckoutIntent>(
  resource: CheckoutIntentsResource,
  id: string,
  condition: (intent: CheckoutIntent) => intent is T,
  options?: RequestOptions & PollOptions,
): Promise<T> {
  let maxAttempts = options?.maxAttempts ?? 120; // Default: 120 attempts
  const pollIntervalMs = options?.pollIntervalMs ?? 5000; // Default: 5 seconds

  if (maxAttempts < 1) {
    loggerFor((resource as any)._client).warn(
      `[Checkout Intents SDK] Invalid maxAttempts value: ${maxAttempts}. maxAttempts must be >= 1. Defaulting to 1 to ensure at least one polling attempt.`,
    );

    maxAttempts = 1;
  }

  const headers = buildHeaders([
    options?.headers,
    {
      'X-Stainless-Poll-Helper': 'true',
      'X-Stainless-Custom-Poll-Interval': pollIntervalMs.toString(),
    },
  ]);

  let intent: CheckoutIntent;
  let attempts = 0;

  while (attempts < maxAttempts) {
    const { data, response } = await resource
      .retrieve(id, {
        ...options,
        headers: { ...options?.headers, ...headers.values },
      })
      .withResponse();

    intent = data;

    // Check if condition is met
    if (condition(intent)) {
      return intent;
    }

    attempts++;

    // If we've reached max attempts, throw an error
    if (attempts >= maxAttempts) {
      throw new PollTimeoutError({
        intentId: intent.id,
        attempts,
        maxAttempts,
        pollIntervalMs,
        message: `Polling timeout: condition not met after ${maxAttempts} attempts (${
          (maxAttempts * pollIntervalMs) / 1000
        }s)`,
      });
    }

    // Check if server suggests a polling interval
    let sleepInterval = pollIntervalMs;
    const headerInterval = response.headers.get('retry-after-ms');
    if (headerInterval) {
      const headerIntervalMs = parseInt(headerInterval);
      if (!isNaN(headerIntervalMs)) {
        sleepInterval = headerIntervalMs;
      }
    }

    await sleep(sleepInterval);
  }

  // This should never be reached due to the throw above, but TypeScript needs it
  throw new PollTimeoutError({
    intentId: intent!.id,
    attempts,
    maxAttempts,
    pollIntervalMs,
    message: `Polling timeout: condition not met after ${maxAttempts} attempts`,
  });
}
