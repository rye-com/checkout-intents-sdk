#!/usr/bin/env -S npm run tsn -T

import CheckoutIntents, { PollTimeoutError, CheckoutIntentsError } from 'checkout-intents';

/**
 * Handling polling timeouts and errors.
 *
 * This example demonstrates:
 * - How to catch PollTimeoutError specifically
 * - How to access timeout error details
 * - How to configure polling parameters
 * - How to handle different error scenarios
 * - Best practices for error handling
 */

const client = new CheckoutIntents({
  apiKey: process.env['CHECKOUT_INTENTS_API_KEY']!,
});

async function main() {
  console.log('Creating checkout intent...');

  const intent = await client.checkoutIntents.create({
    buyer: {
      address1: '123 Main St',
      city: 'New York',
      country: 'US',
      email: 'john.doe@example.com',
      firstName: 'John',
      lastName: 'Doe',
      phone: '212-333-2121',
      postalCode: '10001',
      province: 'NY',
    },
    productUrl: 'https://flybyjing.com/collections/shop/products/sichuan-chili-crisp',
    quantity: 1,
  });

  console.log('Created checkout intent:', intent.id);

  try {
    console.log('\nPolling with immediate timeout (will timeout)...');

    // Poll with immediate timeout to demonstrate error handling
    await client.checkoutIntents.pollUntilAwaitingConfirmation(intent.id, {
      pollIntervalMs: 0,
      maxAttempts: 0,
    });

    console.log('✓ Polling succeeded (unexpected)');
  } catch (error) {
    if (error instanceof PollTimeoutError) {
      console.log('✗ Polling timed out as expected');
      console.log('\nPollTimeoutError details:');
      console.log(`  Intent ID: ${error.intentId}`);
      console.log(`  Attempts made: ${error.attempts}`);
      console.log(`  Time elapsed: ${(error.attempts * error.pollIntervalMs) / 1000}s`);
      console.log(`  Poll interval: ${error.pollIntervalMs}ms`);
      console.log(`  Max attempts: ${error.maxAttempts}`);
      console.log(`\nError message:\n  ${error.message}`);

      console.log('\nTo fix this:');
      console.log('  - Increase maxAttempts (e.g., 60 for ~5 minutes with 5s interval)');
      console.log('  - Increase pollIntervalMs if you want less frequent checks');
      console.log('  - Use appropriate polling method (pollUntilAwaitingConfirmation or pollUntilCompleted)');

      // You can also retrieve the intent manually to check its current state
      console.log('\nManually checking intent state...');
      const currentIntent = await client.checkoutIntents.retrieve(error.intentId);
      console.log(`  Current state: ${currentIntent.state}`);
    } else if (error instanceof CheckoutIntentsError) {
      // Catch other SDK errors (API errors, network errors, etc.)
      console.log('✗ Other error:', error);
    } else {
      throw error;
    }
  }
}

main();
