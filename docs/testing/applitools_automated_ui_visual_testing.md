---
id: visual_analysis
title: Automated UI Visual Testing With Applitools
sidebar_label: Automated UI Visual Testing
description: How to run tests with Applitools
keywords:
  - cypress
  - tests
  - testing
  - applitools
  - visual analysis
---
Visual Regression testing or Visual testing in software is a quality assurance activity of verifying if the visual aspects of the application’s user interface seem appropriate to the user. It is also known as Visual Validation Testing.

Visual Regression testing can be implemented using a variety of tools and languages and is a fast way of checking defects of front end applications. For more information on Visual Regression testing you can look at this article [Here](https://www.softwaretestinghelp.com/visual-validation-testing/)

## Visual Regression Testing with Applitools Eyes

### Pre-requisites

An Applitools eyes account - [Applitools](https://applitools.com/)

## Getting started

We are using [Applitools](https://applitools.com/) with Cypress for visual testing. For Stacks, we have configured the framework to use the free tier, which gives:

- 1 user (normally the pipeline)
- 100 checkpoints per month

Eyes-Cypress ships with official type declarations for TypeScript. This allows you to add eyes commands to your TypeScript tests.

The configuration file has been added to the `[tsconfig.cypress.json](./tsconfig.cypress.json)`.

### Running Applitools in Cypress

In order run Cypress with Applitools, you will need an [Applitools](https://applitools.com/) account. Once signed up (there is a free tier), the API key can be used to create a connection with Applitools.

Please follow the nvm [Cypress Tutorial](https://applitools.com/tutorials/cypress.html)

 ```bash
`export APPLITOOLS_API_KEY=KEY_VALUE`
 ```

### How to run the tests locally

To spin up the server locally, running Cypress headless, use:
`npm run test:cypress:eyes`. This is the same for running in CI pipelines.

### Where Applitools tests should be located

The `*.test.eyes.cy.ts` tests are located with the page compositions (a composition is several components that may come together to form a page).
