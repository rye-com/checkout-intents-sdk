/**
 * Custom error classes for the Checkout Intents SDK.
 * This file is in src/lib/ and will NOT be overwritten by Stainless.
 */

import { CheckoutIntentsError } from '../core/error';

export class PollTimeoutError extends CheckoutIntentsError {
  /** The checkout intent ID that was being polled */
  readonly intentId: string;
  /** Number of attempts made before timing out */
  readonly attempts: number;
  /** Polling interval in milliseconds */
  readonly pollIntervalMs: number;
  /** Maximum number of attempts configured */
  readonly maxAttempts: number;

  constructor({
    intentId,
    attempts,
    pollIntervalMs,
    maxAttempts,
    message,
  }: {
    intentId: string;
    attempts: number;
    pollIntervalMs: number;
    maxAttempts: number;
    message?: string;
  }) {
    function createDefaultMessage() {
      const totalTimeInSeconds = (maxAttempts * pollIntervalMs) / 1000;
      return (
        `Polling timeout for checkout intent '${intentId}': ` +
        `condition not met after ${attempts} attempts (${totalTimeInSeconds}s). ` +
        `Consider increasing maxAttempts, pollingIntervalMs, or checking the intent state manually.`
      );
    }

    const finalMessage = message ?? createDefaultMessage();

    super(finalMessage);

    this.intentId = intentId;
    this.attempts = attempts;
    this.pollIntervalMs = pollIntervalMs;
    this.maxAttempts = maxAttempts;
  }
}
