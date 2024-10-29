---
id: contract_testing_pact
title: API Contract Testing With Pact
sidebar_label: API Contract Testing With Pact
description: Contract testing with Pact
keywords:
  - contract testing
  - pact
  - consumer
  - provider
  - pact broker
  - example
  - javascript
  - bi-directional
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Bi-Directional contract testing with Pact

Bi-Directional Contract Testing is a type of contract testing available within the Pact ecosystem. [Pact](https://docs.pactflow.io/docs/bi-directional-contract-testing) describe this as:

> Bi-Directional Contract Testing is a type of static contract testing where two contracts - one representing consumer expectations, and another representing the provider's capability - are compared to ensure they are compatible.

What this means is that the team consuming an API (the Consumer) creates a consumer contract (a Pact) that defines what they expect from the API using functional testing tools and mocks. This is the consumer contract test. The team providing the API service (the Provider) will create contract (I.e. an OpenAPI specification) for their API. Finally, using [PactFlow](https://pactflow.io/), we are then able to compare the two contracts together to see if they are compatible.

WIthin our CI and CD pipelines, we can query PactFlow it to see when it is safe, in the context of the API integration, to deploy to higher environments.

The following documentation details how Stacks can help teams get started with Bi-Directional Contract Testing.

## Consumer Contract Tests NX Plugin
Stacks includes a `@ensono-stacks/pact-contract-tests` plugin which generates users a new contract testing project within an existing NX workspace. This contract testing project includes an example tests and the basic framework for running consumer contract tests. 

### Setting up @ensono-stacks/pact-contract-tests
:::tip

Visit the [Getting Started](../getting_started/setup.md) for guides on setting up an NX workspace where this plugin can be installed and executed.

:::

Within your NX workspace, install the `@ensono-stacks/pact-contract-tests` plugin with the following command:

 <Tabs>
  <TabItem value="npm" label="npm">

```bash
npm install --save-dev @ensono-stacks/pact-contract-tests@latest
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash
yarn add --dev @ensono-stacks/pact-contract-tests@latest
```

  </TabItem>
 </Tabs>

### Running the generator
Once the plugin has been installed in your NX workspace, execute the generator using the following command:

```bash
nx generate @ensono-stacks/pact-contract-tests:init
```

Once executed, enter values into the provided prompts.

### Using the consumer contract test project
The generator will create a new project folder in your NX workspace. Within the folder, there will be a `./README.md` file containing full details on how to customise the contract test project for your current projects' context.

## Extending Contract Testing
This plugin provides just a part of a full contract testing solution. There are 3 entities involved in contract testing:

1. Consumer (covered in this Plugin)
2. Provider
3. Pact Broker

Teams are required to set up their provider to test and publish their Open API specifications as well as creating an instance of PactFlow for their teams.

You can see how the whole implementation works in [PactFlow Docs](https://pactflow.io/bi-directional-contract-testing/).