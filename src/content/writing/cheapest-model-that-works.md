---
title: "the cheapest model that works"
date: "2026-08-11"
desc: "Per-task model selection and provider-agnostic routing keep agentique's running cost near zero."
---

classification and relevance scoring don't need a frontier model. they need a model that clears the eval. so i run the smallest one that does, chosen per task, not one big model everywhere.

the routing is provider-agnostic on purpose — free and low-cost endpoints, swappable without touching calling code. treating model choice as a per-task decision instead of a global default is most of what keeps the bill flat.
