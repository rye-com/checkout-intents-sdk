# CheckoutIntents

Types:

- <code><a href="./src/resources/checkout-intents.ts">BaseCheckoutIntent</a></code>
- <code><a href="./src/resources/checkout-intents.ts">Buyer</a></code>
- <code><a href="./src/resources/checkout-intents.ts">CheckoutIntent</a></code>
- <code><a href="./src/resources/checkout-intents.ts">Money</a></code>
- <code><a href="./src/resources/checkout-intents.ts">Offer</a></code>
- <code><a href="./src/resources/checkout-intents.ts">StripeTokenPaymentMethod</a></code>

Methods:

- <code title="post /api/v1/checkout-intents">client.checkoutIntents.<a href="./src/resources/checkout-intents.ts">create</a>({ ...params }) -> CheckoutIntent</code>
- <code title="get /api/v1/checkout-intents/{id}">client.checkoutIntents.<a href="./src/resources/checkout-intents.ts">retrieve</a>(id) -> CheckoutIntent</code>
- <code title="post /api/v1/checkout-intents/{id}/confirm">client.checkoutIntents.<a href="./src/resources/checkout-intents.ts">confirm</a>(id, { ...params }) -> CheckoutIntent</code>

# Brands

Types:

- <code><a href="./src/resources/brands.ts">BrandRetrieveResponse</a></code>

Methods:

- <code title="get /api/v1/brands/domain/{domain}">client.brands.<a href="./src/resources/brands.ts">retrieve</a>(domain) -> BrandRetrieveResponse</code>
