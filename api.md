# Responses

Types:

- <code><a href="./src/resources/responses.ts">ResponseObject</a></code>

Methods:

- <code title="post /v1/responses">client.responses.<a href="./src/resources/responses.ts">create</a>({ ...params }) -> ResponseObject</code>
- <code title="post /v1/responses/{request_id}">client.responses.<a href="./src/resources/responses.ts">replay</a>(requestID, { ...params }) -> ResponseObject</code>

# RoutingRules

Types:

- <code><a href="./src/resources/routing-rules.ts">RoutingRule</a></code>
- <code><a href="./src/resources/routing-rules.ts">RoutingRuleCreateResponse</a></code>
- <code><a href="./src/resources/routing-rules.ts">RoutingRuleRetrieveResponse</a></code>
- <code><a href="./src/resources/routing-rules.ts">RoutingRuleUpdateResponse</a></code>
- <code><a href="./src/resources/routing-rules.ts">RoutingRuleListResponse</a></code>
- <code><a href="./src/resources/routing-rules.ts">RoutingRuleDeleteResponse</a></code>

Methods:

- <code title="post /v1/routing-rules">client.routingRules.<a href="./src/resources/routing-rules.ts">create</a>({ ...params }) -> RoutingRuleCreateResponse</code>
- <code title="get /v1/routing-rules/{id}">client.routingRules.<a href="./src/resources/routing-rules.ts">retrieve</a>(id) -> RoutingRuleRetrieveResponse</code>
- <code title="patch /v1/routing-rules/{id}">client.routingRules.<a href="./src/resources/routing-rules.ts">update</a>(id, { ...params }) -> RoutingRuleUpdateResponse</code>
- <code title="get /v1/routing-rules">client.routingRules.<a href="./src/resources/routing-rules.ts">list</a>() -> RoutingRuleListResponse</code>
- <code title="delete /v1/routing-rules/{id}">client.routingRules.<a href="./src/resources/routing-rules.ts">delete</a>(id) -> RoutingRuleDeleteResponse</code>

# FirewallRules

Types:

- <code><a href="./src/resources/firewall-rules.ts">FirewallRule</a></code>
- <code><a href="./src/resources/firewall-rules.ts">FirewallRuleCreateResponse</a></code>
- <code><a href="./src/resources/firewall-rules.ts">FirewallRuleRetrieveResponse</a></code>
- <code><a href="./src/resources/firewall-rules.ts">FirewallRuleUpdateResponse</a></code>
- <code><a href="./src/resources/firewall-rules.ts">FirewallRuleListResponse</a></code>
- <code><a href="./src/resources/firewall-rules.ts">FirewallRuleDeleteResponse</a></code>

Methods:

- <code title="post /v1/firewall-rules">client.firewallRules.<a href="./src/resources/firewall-rules.ts">create</a>({ ...params }) -> FirewallRuleCreateResponse</code>
- <code title="get /v1/firewall-rules/{id}">client.firewallRules.<a href="./src/resources/firewall-rules.ts">retrieve</a>(id) -> FirewallRuleRetrieveResponse</code>
- <code title="patch /v1/firewall-rules/{id}">client.firewallRules.<a href="./src/resources/firewall-rules.ts">update</a>(id, { ...params }) -> FirewallRuleUpdateResponse</code>
- <code title="get /v1/firewall-rules">client.firewallRules.<a href="./src/resources/firewall-rules.ts">list</a>() -> FirewallRuleListResponse</code>
- <code title="delete /v1/firewall-rules/{id}">client.firewallRules.<a href="./src/resources/firewall-rules.ts">delete</a>(id) -> FirewallRuleDeleteResponse</code>
