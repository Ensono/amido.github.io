---
id: testing
title: Testing and Quality
sidebar_label: Testing and quality 
hide_table_of_contents: false
---


## Overview

Tests where possible will be written and delivered as part of the same branch and feature. Where this is not possible, in the event of using a standalone repo or the alternative, we expect the same development and code reviews standards to be upheld, and the branch naming to be aligned with the development branch name as possible.

### Pre-commit tests

To be run on the local active develop branch, before commit. Before committing changes, we suggest enforcing and running pre-commit tests with a pre-commit hook.

### Pre-deployment tests

To be run on the active development branch.
After which, we have two different processes, one for pre-deployment tests (unit, snapshot, integration), and another for post-deployment (functional tests).  Pre-deployment tests can run on the fly whilst coding. This is enabled by using a ‘watch-mode’ which will check for code changes, compile/trans-compile, and run the tests against the web app.

### Post-deployment tests

To be run on master once the pull request (PR) has been approved and passed all pre-deployment tests.

## Quality gates

The following demonstrates the series of quality gates that the web app must pass through in order to successfully be deployed to a user facing environment (production).

![alt text](https://www.lucidchart.com/publicSegments/view/2094f5d4-eaca-417c-a51e-36bf79853373/image.png "Quality Gates")

### Jest: Unit, component and snapshot testing

We are using [Jest](https://jestjs.io/) for running all unit, component,
integration and snapshot tests. Jest supports TypeScript via Babel. Due to the fact that
TypeScript support in Babel is transpilation, to ensure that Jest will
type-check the tests as they are run we use
[ts-jest](https://github.com/kulshekhar/ts-jest).

To help that encourage good testing practices for React DOM testing, we are
leveraging a helper library [react-testing-library](https://jestjs.io/).

### Java Application: Unit, functional and smoke testing

[Mockito](https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html) is been used to run Unit tests
which enables mock creation, verification and stubbing.

Unit-tests are mainly performed on controllers, services and DTO classes.Unit test code coverage by packages are done using
JaCoCo plugin and Unit test reports are published using Surefire plugin.

Cucumber framework is used in functional and smoke tests.Below steps needs to be followed to run the tests locally.

```text
Ensure that the application is running on local: ./mvnw spring-boot:run

Open the 'stacks-java/api-tests' path in the terminal
Execute tests by run one of the following commands:

a. Run all tests: mvn clean verify
b. Run Smoke tests only: mvn clean verify -Dcucumber.options="--tags @Smoke"
c. Run Functional tests only: mvn clean verify -Dcucumber.options="--tags @Functional"
d. Run tests by other tags and ignore tests that contain @Ignore tags: mvn clean verify verify -Dcucumber.options="--tags ~@Ignore --tags @YourTag"

Check the output report
Please use this path to find the generated test report:

stacks-java/api-tests/target/site/serenity/index.html

```

### Scripts

`npm run test`: To run all unit tests. This will also run any snapshot tests.
Snapshots are to be checked in and are found in
`[**snapshots**](__tests__/__snapshots__)`.

## Cypress: Functional tests

> Keywords: Functional automation, End to End, E2E

We are using [Cypress](https://docs.cypress.io/) for functional testing as much
as possible. The key features of Cypress:

- Integration testing with API testing support (Node.js)
- Easy debugability (DOM snapshotting)
- Selector playground
- Great documentation
- Best implementation of Live Reloading

### Why Cypress is categorised in the pre-deployed tests

The Cypress tests, if structured correctly, can be run BEFORE the app client is deployed to an environment. This is to ensure that we get the fastest feedback we can. If you are following branching strategies such as GitFlow, then you can run these tests on your branch before merging to master.

| BENEFITS  | DOWNSIDES |
| ---       |  ---      |
| deployment independent | not full integration tests as not running on deployed infrastructure|
| faster feedback |  |
| run core tests before the branch is merged to master, smoke tests post-merge and deployment |  |

### How Cypress is run in Continuous Integration (CI) pipelines

Glad you asked. You'll see an npm script in the `package.json` which uses [start-server-and-test](https://github.com/bahmutov/start-server-and-test). This package starts the Node.js Express server, waits for the app URL (localhost in this case), then runs test command; when the tests end, it shuts down the server instance.

Key benefits means we never have to explicitly wait for the server to be ready before testing.

_package.json script_:

```text
"test:cypress" : "env CI=true node_modules/.bin/start-server-and-test start $APP_BASE_URL:$PORT test:cypress:run"
```

### How to use Cypress

Please read
[Cypress - Best Practices](https://docs.cypress.io/guides/references/best-practices.html)
for how to get the most out of Cypress.

### How to use Cypress while developing

#### Server Side Rendered (SSR) apps

Say if you are following Test Driven Development (TDD) cycles, or if you wish to write a failing test for a known bug, and fix the app and check to ensure that the test passes, you may wish you watch the tests and the code together.

To open and run Cypress locally with live reload, after installing dependencies:

1. Install app dependencies `npm install`
2. Build the web app `npm run build`
3. Compile the `*.cy.ts` Cypress test files `npm run test:cypress:compile`
   (optional: pass `--watch` through to watch for changes)
4. Start the server, run the tests headless, tear down the server:
   `npm run test:cypress`. When writing tests: Open Cypress with live-reloading
   and selector playground `npm run test:cypress:open`

### How to run all the tests without keeping the server running

#### Server Side Rendered (SSR) applications

To spin up the server automatically, then run Cypress in headless Chrome, use:

_Script_:

`npm run test:cypress`. This is the same script as mentioned for running in [CI pipelines](#how-is-cypress-run-in-continuous-integration-ci-pipelines)

### Where tests should be located

We suggest co-locating the `*.cy.ts` tests with the page compositions (a composition is several components that may come together to form a page). for high-level tests, and component tests with the components themselves.

e.g.

compositions
├── create
│   ├── index.test.cy.ts
│   └── index.tsx
└── home
    ├── __snapshots__
    │   └── index.test.tsx.snap
    ├── components.tsx
    ├── index.axe.test.tsx
    ├── index.test.axe.cy.ts
    ├── index.test.cy.ts
    ├── index.test.eyes.cy.ts
    ├── index.test.tsx
    └── index.tsx

### How to configure the environments

We suggest tightly coupling Cypress with the app under test. This means sharing environment configuration files. This ensures that in your deployment pipelines, and quality gating process, you are confident that the app under test is being tested correctly.

For example, if an API URL changes, you will only have a single place to change and the tests and app will be updated together.

 Note that the environment variables are required on the hosting platform, e.g.
`export NODE_ENV=dev`
