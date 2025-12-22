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
- <code>client.checkoutIntents.<a href="./src/resources/checkout-intents.ts">pollUntilCompleted</a>(id, options?) -> Promise&lt;CheckoutIntent&gt;</code>
- <code>client.checkoutIntents.<a href="./src/resources/checkout-intents.ts">pollUntilAwaitingConfirmation</a>(id, options?) -> Promise&lt;CheckoutIntent&gt;</code>
- <code>client.checkoutIntents.<a href="./src/resources/checkout-intents.ts">createAndPoll</a>({ ...params }, options?) -> Promise&lt;CheckoutIntent&gt;</code>
- <code>client.checkoutIntents.<a href="./src/resources/checkout-intents.ts">confirmAndPoll</a>(id, { ...params }, options?) -> Promise&lt;CheckoutIntent&gt;</code>

# Brands

Types:

- <code><a href="./src/resources/brands.ts">BrandRetrieveResponse</a></code>

Methods:

- <code title="get /api/v1/brands/domain/{domain}">client.brands.<a href="./src/resources/brands.ts">retrieve</a>(domain) -> BrandRetrieveResponse</code>
