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
  - pact stub service
  - pact broker
  - example
  - java
  - dotnet
---

## Consumer-Driven contract testing with Pact

Consumer-Driven Contract (CDC) Testing is a pattern that allows a consumer (i.e:
a client) and a provider (i.e. an API provider) to communicate using an agreed
contract (a pact).

The following documentation is an overview of the Pact implementation as part of the templated SSR web app.

:::info
The `beforeAll` and `afterAll` hooks in Jest is not before all tests but
before each file.
:::

### `[Utils](./utils)`

These are reusable components that can be used for any Javascript consumer setup with pact-js.

We are using Jest to wrap pact-js to create the interactions and
generate the Pacts for the web app as a consumer. Following the examples on
[pact-js](https://github.com/pact-foundation/pact-js).

There is full documentation for how contract testing works available on the
[Pact website](https://docs.pact.io/how_pact_works).

A global 'provider' variable is set up in the `[pactSetup.ts](./utils/pactSetup.ts)`
file. Then the `[pactTestWrapper.ts](./utils/pactTestWrapper.ts)` ensures each test
file will have the provider setup for them.

The `pactFileWriteMode` option been set to `update` in the provider that the
pacts append to. Please see
[pactFileWriteMode](https://docs.pact.io/implementation_guides/ruby/configuration#pactfile_write_mode)

```bash title="Export the Consumer and Provider names when running locally, or define in Azure Pipelines Library"
export PACT_CONSUMER= \
export PACT_PROVIDER=
```

```bash title="Generate and verify pacts against mock"
npm run test:pact
```

Due to the afterAll hooks in Jest not invoking after all tests, but before each
file, there is a `[pactPublish](./utils/pactPublish.ts)` script to publish the
pacts to the configured broker.

```bash title="Export broker credentials for running locally, or define in Azure Pipelines Library"
export PACT_BROKER= \
export PACT_BEARER_TOKEN= \
```

```bash title="Publish the pacts to the configured broker"
npm run test:pact-publish
```

### Pact stub service

Pact contracts are easily turned into locally running API stubs. They are great
for use as a simple service to run integration tests against, whether with
Jest, or with Cypress. This ensures that you can test your application without
hitting the actual endpoint, and ensures the same response every time, without
duplicating mock definitions.

If gives the consumer confidence that if the contract tests are passing with the
provider, then the mocks should suffice to test parts of their application
against.

No more updating stub responses that go out of date. Hooray!

The Pact files (.json) are generated when the Pact tests are run
(`npm run tests:pact`), and are published to the broker on succeeding. To get the latest pact file to generate the stub service from, you can either:

1. Run the tests, which will output the Pact .json files to
   `[**tests**/pacts](./__tests__/pacts)`
2. Pull down the latest passing contracts from the broker
   (`https://PACT_BROKER/pacts/provider/PROVIDER/consumer/CONSUMER/latest`)

Once the files are sourced, it's as simple as starting the stub service either
from the npm script in CI, or by calling the
`[pactStubServer.ts](./pact/packStubServer.ts)` from your test.

```bash title="To start the Pact stub server"
npm run test:pact-start-stub
```

To test the server:

```bash title="To test that the service is running and returning expected responses"
curl -v localhost:8389/v1/menu/e98583ad-0feb-4e48-9d4f-b20b09cb2633 -H "Accept: application/json"
```

Please remember to always stop your server once done testing.

### 'Can I Deploy'

The [Can I Deploy](https://docs.pact.io/pact_broker/can_i_deploy) tool ensures you are safe to deploy your application. Before deploying to a new environment, you need to know if the version is compatible with the provider version. Instead of checking the broker, we can poll the broker and check programmatically with the latest versions.

```bash title="Run can I deploy using the pact-js SDK"
npm run test:pact-can-i-deploy-ci
```

> The above command is called in the pipeline

```bash title="Run can I deploy using the pact CLI"
npm run test:pact-can-i-deploy-cli
```

*Example output:*
This demonstrates that the consumer is safe to deploy, and will return exit code 0 (this means yes!).

```bash
INFO: Asking broker at https://amido-stacks.pact.dius.com.au if it is possible to deploy
```

### Pact working example

We have included a Pact test which will deploy to a PactFlow broker, and verify against the MenuAPI .NET API. This is to ensure that there is an example working test that can be used as a reference.

Example ENV_VARS:

```bash
export PACT_BEARER_TOKEN=
export PACT_BROKER=https://amido-stacks.pact.dius.com.au
export PACT_CONSUMER=GenericMenuConsumer
export PACT_PROVIDER=MenuAPI
```

Maintainers and contributors may obtain the `PACT_BEARER_TOKEN` if they request access to the PactFlow instance. Else, this will be run in the Azure DevOps Pipeline.

#### Tests

`[get-menu-by-id.test.pact.ts](./get-menu-by-id.test.pact.ts)` is an example test. This calls the `[menuServive](./mocks/menuService.ts)` Menu API when running locally.

When the tests pass, the contract will be written to `[pacts](./pacts/genericmenuconsumer-menuapi.json)`, following the naming convention: `<PACT_CONSUMER>-<PACT_PROVIDER>`.

Some good practices:
✅ Use Pact Matchers to ensure we account for state change, e.g. no hardcoded values for menus in the database, see <https://docs.pact.io/getting_started/matching> for more information.
✅ Ensure that the provider state has been configured by the Provider

It's important to get the `PACT_CONSUMER` and `PACT_PROVIDER` names correct, as these form the key for verify.

⚠️ /pacts: these are checked in for reference only. Please do not change the outputted .json files. They are created on successful test runs by Pact. These will be published to the broker upon successful run in the pipeline, with the corresponding version tags.

### Running "PACT" for Java Application

**Prerequisite:**
Please provide the Pact_Broker_URL and Pact_Broker_Token to the provider's pom

```text
    <pactBrokerUrl>Pact_Broker_URL</pactBrokerUrl>
    <pactBrokerToken>Pact_Broker_Token</pactBrokerToken>
```

**Steps:**

```text
- Consumer: Creating the contract
  Run the 'GenericMenuConsumer.java' class from the following path: api-tests/src/test/java/com/xxAMIDOxx/xxSTACKSxx/api/pact/GenericMenuConsumer.java

  Note: this step can be skipped in case the pact file already exists in .pact/pacts directory.
- Execute mvn pact:publish from 'api-tests' directory to publish the consumer pact to broker.
- Execute mvn pact:verify from the provider (java directory).
- Execute mvn pact:publish from 'java' directory to publish this pact to broker.
- Execute mvn pact:can-i-deploy -Dpacticipant=YOUR_CONSUMER_NAME -DpacticipantVersion=CONSUMER_VERSION -Dto=ENV_TO_DEPLOY from 'java' directory including this variables: to check if the versions of consumer and provider are compatible.
```
