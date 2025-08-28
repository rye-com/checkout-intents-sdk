# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> HealthCheckResponse</code>

# API

## V1

### Brands

Types:

- <code><a href="./src/resources/api/v1/brands.ts">BrandRetrieveByDomainResponse</a></code>

Methods:

- <code title="get /api/v1/brands/domain/{domain}">client.api.v1.brands.<a href="./src/resources/api/v1/brands.ts">retrieveByDomain</a>(domain) -> BrandRetrieveByDomainResponse</code>

### CheckoutIntents

Types:

- <code><a href="./src/resources/api/v1/checkout-intents.ts">BaseCheckoutIntent</a></code>
- <code><a href="./src/resources/api/v1/checkout-intents.ts">Buyer</a></code>
- <code><a href="./src/resources/api/v1/checkout-intents.ts">CheckoutIntent</a></code>
- <code><a href="./src/resources/api/v1/checkout-intents.ts">Money</a></code>
- <code><a href="./src/resources/api/v1/checkout-intents.ts">Offer</a></code>
- <code><a href="./src/resources/api/v1/checkout-intents.ts">StripeTokenPaymentMethod</a></code>

Methods:

- <code title="post /api/v1/checkout-intents">client.api.v1.checkoutIntents.<a href="./src/resources/api/v1/checkout-intents.ts">create</a>({ ...params }) -> CheckoutIntent</code>
- <code title="get /api/v1/checkout-intents/{id}">client.api.v1.checkoutIntents.<a href="./src/resources/api/v1/checkout-intents.ts">retrieve</a>(id) -> CheckoutIntent</code>
- <code title="post /api/v1/checkout-intents/{id}/confirm">client.api.v1.checkoutIntents.<a href="./src/resources/api/v1/checkout-intents.ts">confirm</a>(id, { ...params }) -> CheckoutIntent</code>
