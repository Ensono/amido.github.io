---
id: testing
title: Testing and Quality
sidebar_label: Testing and Quality 
---

## Overview

Tests where possible will be written and delivered as part of the same branch and feature. Where this is not possible, in the event of using a standalone repo or the alternative, we expect the same development and code reviews standards to be upheld, and the branch naming to be aligned with the development branch name as possible.

### Pre-commit Tests

To be run on the local active develop branch, before commit. Before committing changes, we suggest enforcing and running pre-commit tests with a pre-commit hook.

### Pre-deployment Tests

To be run on the active development branch.
After which, we have two different processes, one for pre-deployment tests (unit, snapshot, integration), and another for post-deployment (functional tests).  Pre-deployment tests can run on the fly whilst coding. This is enabled by using a ‘watch-mode’ which will check for code changes, compile/trans-compile, and run the tests against the webapp.

### Post-deployment Tests

To be run on master once the pull request (PR) has been approved and passed all pre-deployment tests.

## Quality Gates

The following demonstrates the series of quality gates that the webapp must pass through in order to successfully be deployed to a user facing environment (production).

![alt text](https://www.lucidchart.com/publicSegments/view/2094f5d4-eaca-417c-a51e-36bf79853373/image.png "Quality Gates")


## Cypress

### Dubugging Axe Failures

> When accessibility violations are detected, your test will fail and an entry titled "A11Y ERROR!" will be added to the command log for each type of violation found (they will be above the failed assertion). Clicking on those will reveal more specifics about the error in the DevTools console.
Source: [cypress-axe#standard-output](https://github.com/avanslaars/cypress-axe#standard-output)

For information on how to fix the failure, follow the HelpUrl printed to the console.

There is support with [SonarCloud](https://sonarcloud.io/) for static analysis.
We can run this with Amido Stacks custom container, supports running Sonar Scanner for .NET and NPM projects. 
[amidostacks/ci-sonarscanner](https://hub.docker.com/repository/docker/amidostacks/ci-sonarscanner).

This container make running static code analysis a breeze in the pipelines.

In order to run, the export the followings environment variables for the
SonarCloud Project:

```bash
export SONAR_TOKEN=
export SONAR_PROJECT_KEY=
export SONAR_ORGANIZATION=
export BUILD_NUMBER=
```

To find this, please ensure that you sign up with GitHub to
[Sonarcloud](https://sonarcloud.io) for the Organisation under test.

First generate the code coverage results but running the unit tests, then run the SonarCloud scanner and
push up the results for analysis.

```bash
npm run test
docker run -e SONAR_HOST_URL=https://sonarcloud.io -e SONAR_TOKEN=$SONAR_TOKEN -e SONAR_PROJECT_KEY=$SONAR_PROJECT_KEY -e SONAR_ORGANIZATION=$SONAR_ORGANIZATION -e BUILD_NUMBER=1.2.3 -v $(pwd):/usr/src --rm -it amidostacks/ci-sonarscanner /bin/bash -c 'cd /usr/src && sonar-scanner'
```

## Consumer Driven Contract Testing with Pact

Consumer Driven Contract (CDC) Testing is a pattern that allows a consumer (i.e:
a client) and a provider (i.e. an API provider) to communicate using an agreed
contract (a pact).

The following documentation is an overview of the Pact implementation as part of the templated SSR webapp. See [packages](./packages.md) for a link to the source code.

_Note: The `beforeAll` and `afterAll` hooks in Jest is not before all tests but
before each file._

### [Utils](./utils)

These are reusable components that can be used for any Javascript consumer setup with pact-js.

We are using Jest to wrap pact-js in order to create the interactions and
generate the Pacts for the webapp as a consumer. Following the examples on
[pact-js](https://github.com/pact-foundation/pact-js).

There is full documentation for how contract testing works available on the
[Pact website](https://docs.pact.io/how_pact_works).

A global 'provider' variable is setup in the [pactSetup.ts](./utils/pactSetup.ts)
file. Then the [pactTestWrapper.ts](./utils/pactTestWrapper.ts) ensures each test
file will have the provider setup for them.

The `pactFileWriteMode` option been set to `update` in the provider that the
pacts append to. Please see
[pactFileWriteMode](https://docs.pact.io/implementation_guides/ruby/configuration#pactfile_write_mode)

```bash
# Export the Consumer and Provider names when running locally, or define in Azure Pipelines Library
export PACT_CONSUMER= \
export PACT_PROVIDER=
```

```bash
# Generate and verify pacts against mock
npm run test:pact
```

Due to the afterAll hooks in Jest not invoking after all tests, but before each
file, there is a [pactPublish](./utils/pactPublish.ts) script to publish the
pacts to the configured broker.

```bash
# Export broker credentials for running locally, or define in Azure Pipelines Library
export PACT_BROKER= \
export PACT_BEARER_TOKEN= \
```

```bash
# Publish the pacts to the configured broker
npm run test:pact-publish
```

### Pact Stub Service

Pact contracts are easily turned into locally running API stubs. They are great
for using as a simple service to run integration tests against, whether with
Jest, or with Cypress. This ensures that you can test your application without
hitting the actual endpoint, and ensures the same response everytime, without
duplicating mock definitions.

If gives the consumer confidence that if the contract tests are passing with the
provider, then the mocks should suffice to test parts of their application
against.

No more updating stub responses that go out of date. Hooray!

The Pact files (.json) are generated when the Pact tests are run
(`npm run tests:pact`), and are published to the broker on succeeding. In order
to get the latest pact file to generate the stub service from, you can either:

1. Run the tests, which will output the Pact .json files to
   [**tests**/pacts](./__tests__/pacts)
2. Pull down the latest passing contracts from the broker
   (`https://PACT_BROKER/pacts/provider/PROVIDER/consumer/CONSUMER/latest`)

Once the files are sourced, it's as simple as starting the stub service either
from the npm script in CI, or by calling the
[pactStubServer.ts](./pact/packStubServer.ts) from your test.

```bash
# To start the Pact stub server
npm run test:pact-start-stub
```

To test the server:

```bash
# To test that the service is running and returning expected responses:
curl -v localhost:8389/v1/menu/e98583ad-0feb-4e48-9d4f-b20b09cb2633 -H "Accept: application/json"
```

Please remember to always stop your server once done testing.

### Can I Deploy?

The [Can I Deploy](https://docs.pact.io/pact_broker/can_i_deploy) tool ensures you are safe to deploy your application. Before deploying to a new environment, you need to know if the version is compatible with the provider version. Instead of checking the broker, we can poll the broker and check programmatically with the latest versions.

```bash
# Run can I deploy using the pact-js SDK
# This is called in the pipeline
npm run test:pact-can-i-deploy-ci
```

```bash
# Run can I deploy using the pact CLI
npm run test:pact-can-i-deploy-cli
```

*Example output:*
This demonstrates that the consumer is safe to deploy, and will return exit code 0 (this means yes!).

```
INFO: Asking broker at https://amido-stacks.pact.dius.com.au if it is possible to deploy
INFO: pact-node@10.5.0/10589 on AML0160.local: 
    Computer says yes \o/ 
    
    CONSUMER            | C.VERSION           | PROVIDER | P.VERSION      | SUCCESS?
    --------------------|---------------------|----------|----------------|---------
    GenericMenuConsumer | 0.0.213-test-report | MenuAPI  | 1.5.190-master | true    
    
    All required verification results are published and successful
```

### Pact working Example

We have included a Pact test which will deploy to a PactFlow broker, and verify against the MenuAPI .NET API. This is to ensure that there is an example working test that can be used as reference.

Example ENV_VARS:

```bash
export PACT_BEARER_TOKEN=
export PACT_BROKER=https://amido-stacks.pact.dius.com.au
export PACT_CONSUMER=GenericMenuConsumer
export PACT_PROVIDER=MenuAPI
```

Maintainers and contributers may obtain the `PACT_BEARER_TOKEN` if they request access to the PactFlow instance. Else, this will be run in the Azure Devops Pipeline.

#### Tests

[get-menu-by-id.test.pact.ts](./get-menu-by-id.test.pact.ts) is an example test. This calls the [menuServive](./mocks/menuService.ts) Menu API when running locally.

When the tests pass, the contract will be written to [pacts](./pacts/genericmenuconsumer-menuapi.json), following the naming convention: `<PACT_CONSUMER>-<PACT_PROVIDER>`.

Some good practices:
✅ Use Pact Matchers to ensure we account for state change, e.g. no hardcoded values for menus in the database, see https://docs.pact.io/getting_started/matching for more information.
✅ Ensure that the provider state has been configured by the Provider

It's important to get the `PACT_CONSUMER` and `PACT_PROVIDER` names correct, as these form the key for verfiy.

⚠️ /pacts: these are checked in for reference only. Please do not changed the outputted .json files. They are created on successful test runs by Pact. These will be published to the broker upon successful run in the pipeline, with the corresponding version tags.