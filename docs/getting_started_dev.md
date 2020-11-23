---
id: getting_started_dev
title: Dev [Node.js] - Using the repo to build the Node.js application
sidebar_label: Dev [Node.js]- Using the repo to build the Node.js application
description: How to get started
keywords:
  - bootstrapping
  - stacks
  - get started
---

## Getting started

## Bootstrapping a WebApp

As a general rule the steps to get one of our npm environments up and running are

For local execution:

  1. Clone the project and navigate to the relevant path.
  2. run the following commands in the following order

  ```bash
  npm install
  npm run build
  npm run build:watch
  npm npm run start
  ```

All of our packages, including the `@amidostacks/scaffolding-cli` are available on [npm](https://www.npmjs.com/package/@amidostacks/scaffolding-cli).

See the README for more information on generating the templates from the CLI: [packages/scaffolding-cli/README.md](https://github.com/amido/stacks-webapp-template/blob/master/packages/scaffolding-cli/README.md)

Once built, when starting the server and webapp, a browser window should open up and automatically navigate you to the local instance, but if not the default URLS is `http://localhost:3000`.
