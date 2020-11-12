---
id: cypress_functional_testing
title: Functional Testing with Cypress
sidebar_label: Cypress - Functional Testing
description: Cypress - Functional Testing Example
keywords:
  - cypress
  - tests
  - testing
  - pre-deployed tests
  - continuous integration
  - configure the cypress tests
---

## Cypress: Functional tests

We are using [Cypress](https://docs.cypress.io/) for functional testing as much
as possible. The key features of Cypress:

- Integration testing with API testing support (Node.js)
- Easy to debug
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

1. Install app dependencies

   ``` bash
   npm install
   ```

2. Build the web app

   ```bash
   npm run build
   ```

3. Compile the `*.cy.ts` Cypress test files

   ```bash
   npm run test:cypress:compile
   ```

   (optional: pass `--watch` through to watch for changes)

4. Start the server, run the tests headless, tear down the server:

   ```bash
   npm run test:cypress
   ```

   When writing tests: Open Cypress with live-reloading and selector playground.

   ```bash
   npm run test:cypress:open
   ```

### How to run all the tests without keeping the server running

#### Server Side Rendered (SSR) applications

To spin up the server automatically, then run Cypress in headless Chrome, use:

_Script_:

`npm run test:cypress`. This is the same script as mentioned for running in [CI pipelines](#how-is-cypress-run-in-continuous-integration-ci-pipelines)

### Where tests should be located

We suggest co-locating the `*.cy.ts` tests with the page compositions (a composition is several components that may come together to form a page). for high-level tests, and component tests with the components themselves.

e.g.

```text
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
```

### How to configure the environments

We suggest tightly coupling Cypress with the app under test. This means sharing environment configuration files. This ensures that in your deployment pipelines, and quality gating process, you are confident that the app under test is being tested correctly.

For example, if an API URL changes, you will only have a single place to change and the tests and app will be updated together.

 Note that the environment variables are required on the hosting platform, e.g.

```bash
export NODE_ENV=dev
```
