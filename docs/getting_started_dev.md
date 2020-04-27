---
id: getting_started_dev
title: Dev - Using the repo to build an application
sidebar_label: Dev - Using the repo to build an application
---

## Getting started

## Templating a webapp

As a general rule the steps to get one of our npm environments up and running are

For local execution:

  1. Clone the project and navigate to the relavent path.
  2. run the following commands in the following order
   
  ```bash
  $ npm install
  $ npm run build
  $ npm run build:watch
  $ npm npm run start
  ```

All of our packages, including the `@amidostacks/scaffolding-api` are available on [npm](https://www.npmjs.com/package/@amidostacks/scaffolding-cli).

See the README for more information on generating the templates from the CLI: [packages/scaffolding-cli/README.md](https://github.com/amido/stacks-webapp-template/blob/master/packages/scaffolding-cli/README.md)

Once built, when starting the server and webapp, Aa browser window should open up and automatically navigate you to the local instance, but if not the default URLS is `http://localhost:3000`.
