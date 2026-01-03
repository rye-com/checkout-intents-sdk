# CheckoutIntents

Types:

- <code><a href="./src/resources/checkout-intents.ts">BaseCheckoutIntent</a></code>
- <code><a href="./src/resources/checkout-intents.ts">Buyer</a></code>
- <code><a href="./src/resources/checkout-intents.ts">CheckoutIntent</a></code>
- <code><a href="./src/resources/checkout-intents.ts">Money</a></code>
- <code><a href="./src/resources/checkout-intents.ts">Offer</a></code>
- <code><a href="./src/resources/checkout-intents.ts">PaymentMethod</a></code>
- <code><a href="./src/resources/checkout-intents.ts">VariantSelection</a></code>

Methods:

- <code title="post /api/v1/checkout-intents">client.checkoutIntents.<a href="./src/resources/checkout-intents.ts">create</a>({ ...params }) -> CheckoutIntent</code>
- <code title="get /api/v1/checkout-intents/{id}">client.checkoutIntents.<a href="./src/resources/checkout-intents.ts">retrieve</a>(id) -> CheckoutIntent</code>
- <code title="get /api/v1/checkout-intents">client.checkoutIntents.<a href="./src/resources/checkout-intents.ts">list</a>({ ...params }) -> CheckoutIntentsCursorPagination</code>
- <code title="post /api/v1/checkout-intents/{id}/payment">client.checkoutIntents.<a href="./src/resources/checkout-intents.ts">addPayment</a>(id, { ...params }) -> CheckoutIntent</code>
- <code title="post /api/v1/checkout-intents/{id}/confirm">client.checkoutIntents.<a href="./src/resources/checkout-intents.ts">confirm</a>(id, { ...params }) -> CheckoutIntent</code>
- <code title="post /api/v1/checkout-intents/purchase">client.checkoutIntents.<a href="./src/resources/checkout-intents.ts">purchase</a>({ ...params }) -> CheckoutIntent</code>

# Betas

## CheckoutSessions

Types:

- <code><a href="./src/resources/betas/checkout-sessions.ts">CheckoutSessionCreateResponse</a></code>

Methods:

- <code title="post /api/v1/betas/checkout-sessions">client.betas.checkoutSessions.<a href="./src/resources/betas/checkout-sessions.ts">create</a>({ ...params }) -> CheckoutSessionCreateResponse</code>
