---
id: visual_analysis
title: Automated UI Visual Testing With Applitools
sidebar_label: Automated UI Visual Testing
---

## Getting started

We are using the [Applitools](https://applitools.com/) with Cypress for visual testing. For Stacks, we are just using the free tier. But we suggest discussing your requirements and what this means for your team. The free tier only gives:

- 1 user (normally the pipeline)
- 100 checkpoints per month

Eyes-Cypress ships with official type declarations for TypeScript. This allows you to add eyes commands to your TypeScript tests.

The configuration file has been added to the `[tsconfig.cypress.json](./tsconfig.cypress.json)`.

### Running Applitools in Cypress

In order run Cypress with Applitools, you will need an [Applitools](https://applitools.com/) account. Once signed up (there is a free tier), the API key can be used to create a connection with Applitools.

Please follow the incredible [Cypress Tutorial](https://applitools.com/tutorials/cypress.html) for how Applitools and Cypress go together like pumpkin and pie.

`export APPLITOOLS_API_KEY=`

### How to run the tests locally

To spin up the server locally, running Cypress headless, use:
`npm run test:cypress:eyes`. This is the same for running in CI pipelines.

### Where Applitools tests should be located

The `*.test.eyes.cy.ts` tests are located with the page compositions (a composition is several components that may come together to form a page).
