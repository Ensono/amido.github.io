---
id: consummer_driven_contract_testing_netcore
title: Consumer Driven Contract Testing
hide_title: true
hide_table_of_contents: false
---

## Consumer Driven Contract Testing

Consumer Driven Contract (CDC) Testing is a pattern that allows a consumer (i.e: a client) and a provider (i.e. an API provider) to communicate using an agreed contract (a pact)
It's mostly beneficial in scenarios where there's many consumers that need to talk with one service provider, although it can be useful even with one consumer and one provider only.
For our .NET Core stacks, we are using pact.net library.

### How Pact works

Having well-formed contract tests makes it easy for developers to avoid version hell. Contract testing is ideal for developing and deploying microservices.
Consumer driven means the contract is written as part of the consumer tests.
A major advantage of this pattern is that only parts of the communication that are actually used by the consumer(s) get tested. This in turn means that any provider behaviour not used by current consumers is free to change without breaking tests.


### Consumer testing

Each test built by the consumer is an interaction that is recorded by the pact mock provider in a pact file (in json format)
The consumer does not communicate with the real service at the time of the tests execution.
The tests describe what expects from the provider and nothing else that the provide may expose.


### Provider testing

Regarding provider testing, the provider mock verifier will load the interactions shared by the consumers and submits these to the actual provider and the actual response it generates is compared with the minimal expected response, as described in the interaction.
If the generated response is valid, then the provider tests pass.


### Pact Broker

When sharing pact files, it's better to use a pact broker that can also integrate with the CI/CD tooling in order to verify the test results and allow both consumer's and provider's pipelines to verify the results and decide when to merge the changes and deploy them.

![PACT Testing](/img/pact_testing.png)


