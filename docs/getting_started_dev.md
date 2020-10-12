---
id: getting_started_dev
title: Dev [Node.js] - Using the repo to build the Node.js application
sidebar_label: Dev [Node.js]- Using the repo to build the Node.js application
---

# Getting Started

## Initializing a project  *SSR / CSR* project

The Amido Stacks Scaffolding CLI can be used to create a fully-functional and deployable project from a template, in a variety of flavours.
It includes tests (unit, integration), together with infrastructure and deployment definitions. All by running from your CLI.

We use `npx` to execute and create the
[template-cli](https://www.npmjs.com/package/@amidostacks/scaffolding-cli)
[npx](https://www.npmjs.com/package/npx).

We are supporting and running [node@12](https://nodejs.org/en/about/releases/).
Please ensure that your local environment has the correct version [installed](https://nodejs.org/en/download/).

To run the Scaffolding CLI, use the following commands

```text
npx @amidostacks/scaffolding-cli@latest run -i
```

You will be asked a number of questions. Based on the answers, your ready-to-build project template will be produced.

## Bootstrapping a WebApp - Local Setup

After following the CLI Steps, you will get a skeleton app setup
As a general rule the steps to get one of our npm environments up and running are


## Environment Setup

Before you can start hacking away, you need to setup some environment variables.

```bash

 NODE_ENV=development 
 PORT={PORT} 
 APP_BASE_URL=http://localhost 
 APP_BASE_PATH=""

 NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN= {Token}
 NEXT_PUBLIC_CONTENTFUL_PREVIEW_SECRET=  {PREVIEW SECRET}
 NEXT_PUBLIC_CONTENTFUL_SPACE_ID=  {ID}
 NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=  {Token}

```


For local development execution:

```bash
npm install
npm  run dev
```

For local production execution:

```bash
npm install
npm run build
npm run build:watch
npm run start
```



All of our packages, including the `@amidostacks/scaffolding-cli` are available on [npm](https://www.npmjs.com/package/@amidostacks/scaffolding-cli).

See the README for more information on generating the templates from the CLI: [packages/scaffolding-cli/README.md](https://github.com/amido/stacks-webapp-template/blob/master/packages/scaffolding-cli/README.md)

Once built, when starting the server and webapp, a browser window should open up and automatically navigate you to the local instance, but if not the default URLS is `http://localhost:3000`.
