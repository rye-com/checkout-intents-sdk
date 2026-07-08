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
- <code title="post /api/v1/checkout-intents/{id}/confirm">client.checkoutIntents.<a href="./src/resources/checkout-intents/checkout-intents.ts">confirm</a>(id, { ...params }) -> CheckoutIntent</code>
- <code title="post /api/v1/checkout-intents/purchase">client.checkoutIntents.<a href="./src/resources/checkout-intents/checkout-intents.ts">purchase</a>({ ...params }) -> CheckoutIntent</code>
- <code title="get /api/v1/checkout-intents/{id}/order">client.checkoutIntents.<a href="./src/resources/checkout-intents/checkout-intents.ts">retrieveOrder</a>(id) -> Order</code>

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

# Orders

Types:

- <code><a href="./src/resources/orders.ts">Cancellation</a></code>
- <code><a href="./src/resources/orders.ts">Order</a></code>

Methods:

- <code title="get /api/v1/orders/{id}">client.orders.<a href="./src/resources/orders.ts">retrieve</a>(id) -> Order</code>
- <code title="get /api/v1/orders">client.orders.<a href="./src/resources/orders.ts">list</a>({ ...params }) -> OrdersCursorPagination</code>
- <code title="post /api/v1/orders/{id}/cancel">client.orders.<a href="./src/resources/orders.ts">cancel</a>(id, { ...params }) -> Cancellation</code>

# Products

Types:

- <code><a href="./src/resources/products.ts">Product</a></code>
- <code><a href="./src/resources/products.ts">ProductAvailability</a></code>
- <code><a href="./src/resources/products.ts">ProductImage</a></code>
- <code><a href="./src/resources/products.ts">ProductSubscription</a></code>
- <code><a href="./src/resources/products.ts">ProductSubscriptionProduct</a></code>
- <code><a href="./src/resources/products.ts">ProductSubscriptionStore</a></code>
- <code><a href="./src/resources/products.ts">ProductVariant</a></code>
- <code><a href="./src/resources/products.ts">VariantDimension</a></code>
- <code><a href="./src/resources/products.ts">ProductListSubscriptionsResponse</a></code>

Methods:

- <code title="get /api/v1/products/subscriptions">client.products.<a href="./src/resources/products.ts">listSubscriptions</a>() -> ProductListSubscriptionsResponse</code>
- <code title="get /api/v1/products/lookup">client.products.<a href="./src/resources/products.ts">lookup</a>({ ...params }) -> Product</code>
- <code title="post /api/v1/products/subscribe">client.products.<a href="./src/resources/products.ts">subscribe</a>({ ...params }) -> ProductSubscription</code>
- <code title="post /api/v1/products/unsubscribe">client.products.<a href="./src/resources/products.ts">unsubscribe</a>({ ...params }) -> ProductSubscription</code>

# Shipments

Types:

- <code><a href="./src/resources/shipments.ts">Shipment</a></code>
- <code><a href="./src/resources/shipments.ts">ShipmentStatus</a></code>
- <code><a href="./src/resources/shipments.ts">ShipmentTracking</a></code>

Methods:

- <code title="get /api/v1/shipments/{id}">client.shipments.<a href="./src/resources/shipments.ts">retrieve</a>(id) -> Shipment</code>
- <code title="get /api/v1/shipments">client.shipments.<a href="./src/resources/shipments.ts">list</a>({ ...params }) -> ShipmentsCursorPagination</code>

# Commissions

Types:

- <code><a href="./src/resources/commissions.ts">Commission</a></code>
- <code><a href="./src/resources/commissions.ts">CommissionStatus</a></code>
- <code><a href="./src/resources/commissions.ts">CommissionType</a></code>
- <code><a href="./src/resources/commissions.ts">SettlementDirection</a></code>

Methods:

- <code title="get /api/v1/commissions">client.commissions.<a href="./src/resources/commissions.ts">list</a>({ ...params }) -> CommissionsCursorPagination</code>

# PaymentGateways

Types:

- <code><a href="./src/resources/payment-gateways.ts">PaymentGateway</a></code>
- <code><a href="./src/resources/payment-gateways.ts">PaymentGatewaySession</a></code>

Methods:

- <code title="post /api/v1/payment-gateways/{gateway}/session">client.paymentGateways.<a href="./src/resources/payment-gateways.ts">createSession</a>(gateway) -> PaymentGatewaySession</code>

# Billing

Types:

- <code><a href="./src/resources/billing.ts">BillingCreateTopupInvoiceResponse</a></code>
- <code><a href="./src/resources/billing.ts">BillingGetBalanceResponse</a></code>
- <code><a href="./src/resources/billing.ts">BillingListTransactionsResponse</a></code>

Methods:

- <code title="delete /api/v1/billing/drawdown/topup/{invoiceId}">client.billing.<a href="./src/resources/billing.ts">cancelTopupInvoice</a>(invoiceID) -> void</code>
- <code title="post /api/v1/billing/drawdown/topup">client.billing.<a href="./src/resources/billing.ts">createTopupInvoice</a>({ ...params }) -> BillingCreateTopupInvoiceResponse</code>
- <code title="get /api/v1/billing/balance">client.billing.<a href="./src/resources/billing.ts">getBalance</a>() -> BillingGetBalanceResponse</code>
- <code title="get /api/v1/billing/transactions">client.billing.<a href="./src/resources/billing.ts">listTransactions</a>({ ...params }) -> BillingListTransactionsResponsesCursorPagination</code>

# Events

Types:

- <code><a href="./src/resources/events.ts">Event</a></code>

Methods:

- <code title="get /api/v1/events/{id}">client.events.<a href="./src/resources/events.ts">retrieve</a>(id) -> Event</code>
- <code title="get /api/v1/events">client.events.<a href="./src/resources/events.ts">list</a>({ ...params }) -> EventsCursorPagination</code>

# MerchantConnectors

Types:

- <code><a href="./src/resources/merchant-connectors.ts">InstallationLink</a></code>

Methods:

- <code title="get /api/v1/merchant-connectors/{connector}/installation-link">client.merchantConnectors.<a href="./src/resources/merchant-connectors.ts">createInstallationLink</a>(connector, { ...params }) -> InstallationLink</code>

# Returns

Types:

- <code><a href="./src/resources/returns.ts">Return</a></code>
- <code><a href="./src/resources/returns.ts">ReturnDenial</a></code>
- <code><a href="./src/resources/returns.ts">ReturnFailure</a></code>
- <code><a href="./src/resources/returns.ts">ReturnNextAction</a></code>
- <code><a href="./src/resources/returns.ts">ReturnReason</a></code>
- <code><a href="./src/resources/returns.ts">ReturnRefund</a></code>
- <code><a href="./src/resources/returns.ts">ReturnState</a></code>
- <code><a href="./src/resources/returns.ts">ReturnTimeline</a></code>

Methods:

- <code title="post /api/v1/returns">client.returns.<a href="./src/resources/returns.ts">create</a>({ ...params }) -> Return</code>
- <code title="get /api/v1/returns/{returnId}">client.returns.<a href="./src/resources/returns.ts">retrieve</a>(returnID) -> Return</code>

# TestHelpers

## Returns

Methods:

- <code title="post /api/v1/test-helpers/returns">client.testHelpers.returns.<a href="./src/resources/test-helpers/returns.ts">create</a>({ ...params }) -> Return</code>
- <code title="post /api/v1/test-helpers/returns/{returnId}/approve">client.testHelpers.returns.<a href="./src/resources/test-helpers/returns.ts">approve</a>(returnID, { ...params }) -> Return</code>
- <code title="post /api/v1/test-helpers/returns/{returnId}/deny">client.testHelpers.returns.<a href="./src/resources/test-helpers/returns.ts">deny</a>(returnID, { ...params }) -> Return</code>
- <code title="post /api/v1/test-helpers/returns/{returnId}/fail">client.testHelpers.returns.<a href="./src/resources/test-helpers/returns.ts">fail</a>(returnID, { ...params }) -> Return</code>
- <code title="post /api/v1/test-helpers/returns/{returnId}/refund">client.testHelpers.returns.<a href="./src/resources/test-helpers/returns.ts">refund</a>(returnID, { ...params }) -> Return</code>

## Shipments

Types:

- <code><a href="./src/resources/test-helpers/shipments.ts">ShipmentAdvanceResponse</a></code>

Methods:

- <code title="post /api/v1/test-helpers/checkout-intents/{checkoutIntentId}/shipments/advance">client.testHelpers.shipments.<a href="./src/resources/test-helpers/shipments.ts">advance</a>(checkoutIntentID) -> ShipmentAdvanceResponse</code>
