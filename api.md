# CheckoutIntents

Types:

- <code><a href="./src/resources/checkout-intents/checkout-intents.ts">BaseCheckoutIntent</a></code>
- <code><a href="./src/resources/checkout-intents/checkout-intents.ts">Buyer</a></code>
- <code><a href="./src/resources/checkout-intents/checkout-intents.ts">CheckoutIntent</a></code>
- <code><a href="./src/resources/checkout-intents/checkout-intents.ts">Money</a></code>
- <code><a href="./src/resources/checkout-intents/checkout-intents.ts">Offer</a></code>
- <code><a href="./src/resources/checkout-intents/checkout-intents.ts">PaymentMethod</a></code>
- <code><a href="./src/resources/checkout-intents/checkout-intents.ts">VariantSelection</a></code>

Methods:

- <code title="post /api/v1/checkout-intents">client.checkoutIntents.<a href="./src/resources/checkout-intents/checkout-intents.ts">create</a>({ ...params }) -> CheckoutIntent</code>
- <code title="get /api/v1/checkout-intents/{id}">client.checkoutIntents.<a href="./src/resources/checkout-intents/checkout-intents.ts">retrieve</a>(id) -> CheckoutIntent</code>
- <code title="get /api/v1/checkout-intents">client.checkoutIntents.<a href="./src/resources/checkout-intents/checkout-intents.ts">list</a>({ ...params }) -> CheckoutIntentsCursorPagination</code>
- <code title="post /api/v1/checkout-intents/{id}/payment">client.checkoutIntents.<a href="./src/resources/checkout-intents/checkout-intents.ts">addPayment</a>(id, { ...params }) -> CheckoutIntent</code>
- <code title="post /api/v1/checkout-intents/{id}/confirm">client.checkoutIntents.<a href="./src/resources/checkout-intents/checkout-intents.ts">confirm</a>(id, { ...params }) -> CheckoutIntent</code>
- <code title="post /api/v1/checkout-intents/purchase">client.checkoutIntents.<a href="./src/resources/checkout-intents/checkout-intents.ts">purchase</a>({ ...params }) -> CheckoutIntent</code>

## Shipments

Methods:

- <code title="get /api/v1/checkout-intents/{id}/shipments">client.checkoutIntents.shipments.<a href="./src/resources/checkout-intents/shipments.ts">list</a>(id, { ...params }) -> ShipmentsCursorPagination</code>

# Betas

Types:

- <code><a href="./src/resources/betas/betas.ts">CheckoutSession</a></code>

## CheckoutSessions

Methods:

- <code title="post /api/v1/betas/checkout-sessions">client.betas.checkoutSessions.<a href="./src/resources/betas/checkout-sessions.ts">create</a>({ ...params }) -> CheckoutSession</code>

# Brands

Types:

- <code><a href="./src/resources/brands.ts">BrandRetrieveResponse</a></code>

Methods:

- <code title="get /api/v1/brands/domain/{domain}">client.brands.<a href="./src/resources/brands.ts">retrieve</a>(domain) -> BrandRetrieveResponse</code>

# Products

Types:

- <code><a href="./src/resources/products.ts">Product</a></code>
- <code><a href="./src/resources/products.ts">ProductAvailability</a></code>
- <code><a href="./src/resources/products.ts">ProductImage</a></code>

Methods:

- <code title="get /api/v1/products/lookup">client.products.<a href="./src/resources/products.ts">lookup</a>({ ...params }) -> Product</code>

# Shipments

Types:

- <code><a href="./src/resources/shipments.ts">Shipment</a></code>
- <code><a href="./src/resources/shipments.ts">ShipmentStatus</a></code>
- <code><a href="./src/resources/shipments.ts">ShipmentTracking</a></code>

Methods:

- <code title="get /api/v1/shipments/{id}">client.shipments.<a href="./src/resources/shipments.ts">retrieve</a>(id) -> Shipment</code>
- <code title="get /api/v1/shipments">client.shipments.<a href="./src/resources/shipments.ts">list</a>({ ...params }) -> ShipmentsCursorPagination</code>

# Billing

Types:

- <code><a href="./src/resources/billing.ts">BillingGetBalanceResponse</a></code>
- <code><a href="./src/resources/billing.ts">BillingListTransactionsResponse</a></code>

Methods:

- <code title="get /api/v1/billing/balance">client.billing.<a href="./src/resources/billing.ts">getBalance</a>() -> BillingGetBalanceResponse</code>
- <code title="get /api/v1/billing/transactions">client.billing.<a href="./src/resources/billing.ts">listTransactions</a>({ ...params }) -> BillingListTransactionsResponsesCursorPagination</code>
