---
id: getting_started_ssr
title: Getting Started
sidebar_label: Getting Started
hide_title: false
hide_table_of_contents: false
description: Getting started with SSR
keywords:
  - rest
  - api
  - ssr
  - cms
  - integration
  - framework
  - configuration
  - side
  - rendering
  - server
  - server side rendering
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import HideNavigation from "../../../../../src/pages/HideNavigation";
import ResponsivePlayer from "../../../../../src/pages/Components/ResponsivePlayer/ResponsivePlayer";

Web applications require a lot of boilerplate. It's also hard to know how to get started without examples. We offer both server side rendered (SSR) and client side rendered (CSR) solutions that can be bootstrapped and tailored to your current project with just one command.

Oh, and they come complete with infrastructure as code so you can deploy on your cloud of choice.

Brilliant.

<ResponsivePlayer url="https://vimeo.com/486755394" />

## Bootstrap your framework

The best way to get started, is bootstrap the framework using the scaffolding-cli from Amido Stacks. By using it in interactive mode, you can simply answered 5 questions to get a bespoke framework, ready to go with an example test.

```bash title="Run to start configuring your solution"
npx @amidostacks/scaffolding-cli run -i
```

### Get developing in just a few questions

<!-- [![asciicast](https://asciinema.org/a/znvqsWhks970mYkUjGkwFoTKS.svg)](https://asciinema.org/a/znvqsWhks970mYkUjGkwFoTKS) -->

## Environment Variables

Before you can start developing you will need to replace your environment variables with the appropriated values.
This values will be automatically picked up and used by the underlying server and web client.

```bash
 NODE_ENV=development
 PORT=3000
 APP_BASE_URL=http://localhost
 APP_BASE_PATH=""
```

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
  set APP_BASE_URL=http://localhost
  ```

  ```bash
  set APP_BASE_PATH=""
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
  export APP_BASE_URL=http://localhost
  ```

  ```bash
  export APP_BASE_PATH=""
  ```

</div>

</TabItem>

</Tabs>

## Configure Optional Features

[Auth0](identity.md) <br/>
[Contentful](contentful_integration.md) <br/>
[API](api_definition_ssr.md) <br/>

## Get developing

Install dependencies (this may take a while, please be patient):

```bash
npm install
```

Compile the app:

```bash
npm run build
```

At the end of bootstrapping your example framework, you will have an output that will contain all the:

- dependencies
- scripts
- example tests
- pipelines
- and information to start testing

### Development

If you like to view the github repository , the source code can be found [here](https://github.com/amido/stacks-typescript-ssr)
<https://github.com/amido/stacks-webapp-template/tree/master/packages/scaffolding-cli/templates/src/ssr>

Move to the `<PROJECT-NAME>/src` folder and run the next commands

```bash
npm install
```

```bash
npm run dev
```

```bash title="To run locally"
npm run start
```

This offers live reload of both server side - _when using ssr_ - and client side code.

### Production

Move to the `<PROJECT-NAME>/src` folder and run the next commands

```bash
npm install
```

```bash
npm run build
```

```bash
npm run start
```

This will start the app in production mode, so you can see how it would behave deployed!

## Implementation details

The template is a Server Side Rendered (SSR) implementation using:

- [React.js](https://reactjs.org/) for the user interface (UI)
- React SSR framework [Next.js](https://nextjs.org/)
- Nextjs using a
  [Custom Server](https://nextjs.org/docs/advanced-features/custom-server) with
  Node.js [Express.js](https://expressjs.com/)

## To build and run using Docker

  In order to be able to build and run the webapp template, across environments
  and as part of CI, we need to use [Docker](https://docs.docker.com/install/).

  ```bash title="Build from the webapp directory"
  docker build ../ -f ./Dockerfile -t stacks-app
  ```

  Run it:

  ```bash
  docker run --rm -it -p 3000:3000 stacks-app
  docker run --rm -it -v $(pwd):/app/deployed/src stacks-app:latest /bin/sh
  docker run --rm -it -v $(pwd):/usr/src sonarsource/sonar-scanner-cli
  docker run --rm -it -p 3000:3000 stacks-app:latest /bin/sh
  ```

  Alternatives to running in a container

  ```bash
  CMD ["pm2-runtime", "--json", "./ecosystem.yml", "--exp-backoff-restart-delay=500", "-a", "--update-env"]
  ```

### Dockerfile Notes

  Best practice guidelines:

- Do not run app under root
    - To maximise cache layer capacity we should copy over package.json into /tmp
      and build there

## Testing

### Unit, Component and Snapshot Testing

  We are using [Jest](https://jestjs.io/) for running all unit, component,
  integration and snapshot tests. Jest supports TypeScript via Babel. Because
  TypeScript support in Babel is transpilation, to ensure that Jest will
  type-check the tests as they are run we use
  [ts-jest](https://github.com/kulshekhar/ts-jest).

  To help that encourage good testing practices for React DOM testing, we are
  leveraging a helper library [react-testing-library](https://jestjs.io/).

  `npm run test`: To run all unit tests. This will also run any snapshot tests.
  Snapshots are to be checked in and are found under the source code.
  `__tests__/__snapshots__`

For more information using Cypress, see:
[Testing and Quality]<https://stacks.amido.com/docs/testing/cypress_functional_testing>).

### Visual Testing

For more information using Applitools with Cypress, see:
[Testing and Quality](https://stacks.amido.com/docs/testing/visual_analysis).

### Accessibility Testing

For more information using Axe with Jest and Cypress, see:
[Testing and Quality](https://stacks.amido.com/docs/testing/accessibility_testing).

### Static Testing

For more information about the running using amidostacks/ci-sonarscanner, please
refer to:
[amidostacks/ci-sonarscanner](https://hub.docker.com/repository/docker/amidostacks/ci-sonarscanner)

For general information about setting up and using SonarQube for static
analysis, please refer to the
[docs/test_static_code](https://github.com/amido/stacks-webapp-template/tree/master/docstest_static_code.md)

### Consumer driven contract testing with Pact

Please refer to the very verbose documentation in
`/__tests__/pact/README.md`

## Customizing

Since the frameworks provide real examples on deployed applications, we recommend using these as examples and then replacing them with your own applications under test.

## Feedback

As always, we only improve from the incredible feedback and contributions from people like you. To help us improve, see our contribution guide for more information.

<HideNavigation prev />
