#!/usr/bin/env -S npm run tsn -T

import CheckoutIntents from 'checkout-intents';

/**
 * Recommended checkout flow (two-phase):
 * 1. Create checkout intent and poll until offer is ready
 * 2. Review pricing with user
 * 3. Confirm with payment and poll until completion
 *
 * This follows the Rye documented checkout flow.
 */

const client = new CheckoutIntents({
  apiKey: process.env['CHECKOUT_INTENTS_API_KEY']!,
});

async function main() {
  // Phase 1: Create checkout intent and wait for offer
  console.log('Creating checkout intent...');

  const intent = await client.checkoutIntents.createAndPoll({
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

  console.log('Checkout intent created:', intent.id);
  console.log('State:', intent.state);

  // Handle failure during offer retrieval
  if (intent.state === 'failed') {
    console.log('Failed to retrieve offer:', intent.failureReason);
    return;
  }

  // Review the offer with the user before confirming
  if ('offer' in intent) {
    console.log('\nOffer Details:');
    console.log('  Subtotal:', intent.offer.cost.subtotal);
    console.log('  Shipping:', intent.offer.cost.shipping ?? intent.offer.shipping);
    console.log('  Tax:', intent.offer.cost.tax);
    console.log('  Total:', intent.offer.cost.total);
  }

  // Phase 2: User confirms, complete the checkout
  console.log('\nConfirming checkout...');

  const completed = await client.checkoutIntents.confirmAndPoll(intent.id, {
    paymentMethod: {
      type: 'stripe_token',
      stripeToken: 'tok_visa', // Use tok_visa in staging
    },
  });

  console.log('Final state:', completed.state);

  if (completed.state === 'completed') {
    console.log('✓ Order placed successfully!');
  } else if (completed.state === 'failed') {
    console.log('✗ Order failed:', completed.failureReason);
  }
}

main();
