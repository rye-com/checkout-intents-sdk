#!/usr/bin/env -S npm run tsn -T

import CheckoutIntents from 'checkout-intents';

/**
 * Handling polling timeouts and errors.
 *
 * This example demonstrates:
 * - How to catch polling timeout errors
 * - How to configure polling parameters
 * - How to handle different error scenarios
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
    if (error instanceof Error && error.message.includes('Polling timeout')) {
      console.log('✗ Polling timed out as expected');
      console.log('\nTo fix this:');
      console.log('  - Increase maxAttempts (e.g., 60 for 2 minutes)');
      console.log('  - Increase pollIntervalMs if you want less frequent checks');
      console.log('  - Use appropriate polling method (pollUntilAwaitingConfirmation or pollUntilCompleted)');
    } else {
      console.error('✗ Unexpected error:', error);
    }
  }

  console.log('\nBest practices:');
  console.log('  - Use 5000ms (5s) for pollIntervalMs (default)');
  console.log('  - Use 120 maxAttempts for ~10 minute timeout (default)');
  console.log('  - Always handle the "failed" state in your condition');
}

main();
