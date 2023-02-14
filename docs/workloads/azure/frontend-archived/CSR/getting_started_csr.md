---
id: getting_started_csr
title: Getting Started
sidebar_label: Getting Started
hide_title: false
hide_table_of_contents: false
description: Getting started with CSR
keywords:
  - rest
  - api
  - csr
  - scaffolding
  - template
  - example
  - backend
  - axios
  - bootstrap
  - dependencies
  - start project
  - client
  - side
  - rendering
  - client side rendering
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import HideNavigation  from "../../../../../src/pages/HideNavigation";

Web applications require a lot of boilerplate. It's also hard to know how to get started without examples.
We offer both server side rendered (SSR) and client side rendered (CSR) solutions that can be
bootstrapped and tailored to your current project with just one command.

Oh, and they come complete with Infrastructure As Code so you can deploy on your cloud of choice.

Brilliant.

## Bootstrap your framework

Packages for templating SSR Node.js with React apps with little build configuration.
The best way to get started, is bootstrap the framework using the scaffolding-cli from Amido Stacks.
By using it in the interactive mode, you can simply answer few questions to get a bespoke framework,
ready to go with an example test.

```bash title="Run to start configuring your solution"
npx @amidostacks/scaffolding-cli run -i
```

### Get developing in just a few questions

<!-- [![asciicast](https://asciinema.org/a/znvqsWhks970mYkUjGkwFoTKS.svg)](https://asciinema.org/a/znvqsWhks970mYkUjGkwFoTKS) -->

## Environment Variables

Before you can start developing you'll need to replace your environment variables with the appropriate values.
These values will be automatically picked up and used by the underlying server and web client.

<!-- markdownlint-disable MD033 -->

<Tabs
defaultValue="linux"
values={[
{label: 'Linux/MacOS', value: 'linux'},
{label: 'Windows', value: 'windows'},
]}>
<TabItem value="windows">

<div>

  ```bash
  set NODE_ENV=development
  ```

  ```bash
  set PORT=3000
  ```

  ```bash
  set NODE_ENV: process.env.NODE_ENV || "development"
  ```

  ```bash
  set PUBLIC_URL: publicUrl
  ```

  ```bash
  set APP_BASE_PATH: ## Stacks base path
  ```

  ```bash
  set MENU_API_URL: ## Used by the internal API fetcher
  ```

  ```bash title="Instrumentation Key"
  set APPINSIGHTS_INSTRUMENTATIONKEY:{Set instrumentation hey here}
  ```

</div>

</TabItem>

<TabItem value="linux">

<div>

  ```bash
  export NODE_ENV=development
  ```

  ```bash
  export PORT=3000
  ```

  ```bash
  export NODE_ENV: process.env.NODE_ENV || "development"
  ```

  ```bash
  export PUBLIC_URL: publicUrl
  ```

  ```bash
  export APP_BASE_PATH: ## Stacks base path
  ```

  ```bash
  export MENU_API_URL: ## Used by the internal API fetcher
  ```

  ```bash title="Instrumentation Key"
  export APPINSIGHTS_INSTRUMENTATIONKEY:<Instrumentation Key here>
  ```

</div>

</TabItem>

</Tabs>

## Get developing

CSR webapp is bootstrapped from
[Create-React-App](https://create-react-app.dev/docs/getting-started)

## Implementation details

The template is a Client Side Rendered (CSR) implementation using:

- [React.js](https://reactjs.org/)
- [Jest](https://jestjs.io/)
- [Cypress](https://docs.cypress.io/)

At the end of bootstrapping your example framework you'll have an output that will contain all the:

- dependencies
- scripts
- example tests
- pipelines
- information needed to start testing

### Development

If you like to view the github repository , the source code can be found [here](https://github.com/amido/stacks-typescript-csr)

Move to the `<PROJECT-NAME>/src` folder and run the next commands

```bash
npm install
```

```bash
npm run dev
```

This offers live reload of client side code and server side code *if you're using ssr*.

```bash
npm start
```

Runs the app in the development mode.<br /> Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

:::note
For local development, you will need to start the server to host the webapp under dev.
:::

```text
Note: To avoid running the CSR in localhost CORS issues we can run the SSR app in the background and use MENU_API_URL env point to http://localhost:3000
```

The page will reload if you make edits.<br /> You will also see any lint errors
in the console.

```bash
npm run test
```

Launches the test runner in the interactive watch mode.<br /> See the section
about
[running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### Production

Move to the `<PROJECT-NAME>/src` folder and run the next commands

```bash
npm install
```

```bash
npm run build
```

Builds the app for production to the `dist` folder.<br /> It correctly bundles
React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br /> Your app is
ready to be deployed!

```bash
npm run start
```

This will start the app in production mode so you can see how it will behave when deployed.

## Making a Progressive Web App

This section has moved here:
<https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app>

## Advanced Configuration

This section has moved here:
<https://facebook.github.io/create-react-app/docs/advanced-configuration>

## Cypress: Functional Testing

Compile and watch for code changes:

```bash
npm run test:cypress:watch
```

Run locally in
[Cypress Test Runner](https://docs.cypress.io/guides/guides/command-line.html#cypress-open):

```bash
npm run test:cypress:open
```

## Environment variables

We need to ensure that Cypress knows the following at a minimum:

- protocol (e.g. http)
- host (e.g. google.com)
- path (e.g. /images)

All variables should be pulled in using the same method the app does. In this
case, this is all done in `cypress/plugins/index.config.js`

## Scripts

For all Cypress oriented scripts, see the below file in the CSR source code
`test:cypress - ./package.json`

## Customising

Since the frameworks provide real examples on deployed applications, we recommend using these as examples and then replacing them with your own applications under test.

## Feedback

Your feedback and contributions will help us to improve. See the [Stacks guide to new contributions](https://stacks.amido.com/docs/contributions) for more information.

<HideNavigation prev />
