---
id: setup
title: Getting Started
sidebar_label: Getting Started
description: Getting started with stacks and Nx
keywords:
  - Nx
  - monorepo
  - stacks
  - Generator
  - Executor
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


### Prerequisites

#### Nx

We recommend installing Nx globally, all Nx based commands in this guide are based upon a globally installed Nx package.

<Tabs>
  <TabItem value="npm" label="npm">

```bash
npm install -g nx
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash
yarn global add nx
```

  </TabItem>
</Tabs>

#### Node

We recommend using the latest LTS version of Node, you can find the latest LTS version [here](https://nodejs.org/en/).

### Get Started

There are three ways to get started with building a **CSR (React)** or **SSR (Next JS)** frontend web application with Stacks, we recommend using our _[Stacks CLI](../stackscli/about.md)_ for the best experience!

:::note

CSR support is currently limited however we are actively working on this!

:::

#### Option 1: Stacks CLI

The Stacks CLI is a command line interface that allows you to scaffold a brand new Stacks and Nx workspace. This is the recommended approach if you are planning to use Stacks to build your infrastructure as well as your frontend web applications.

Once the Stacks CLI has been installed you can scaffold a brand new Stacks and Nx workspace through answering a set of interactive questions. Launch the Stacks CLI with the following command to get started:

```bash
stacks-cli interactive
```

:::note Ensure you have the Stacks CLI installed!

Visit the [Stacks CLI](../stackscli/about.md) docs for more information and setup instructions!

:::

:::tip

Visit the [NX Example](../stackscli/about.md) for the complete instructions/example on using NX with the Stacks CLI!

:::

#### Option 2: Create stacks workspace generator

You can scaffold a brand-new Stacks and Nx workspace using the **@ensono-stacks/create-stacks-workspace** package.

This approach is ideal if you want to use Stacks to build your frontend web applications but already have an existing infrastructure set up without Stacks as it's not mandatory to provide any infrastructure details. However, it is still possible to use Option 2 for infrastructure and deployment through passing the required CLI arguments!

Follow the interactive questions with the below command to get started:

```bash
npx @ensono-stacks/create-stacks-workspace@latest
```

:::tip

Visit the [@ensono-stacks/create-stacks-workspace](/docs/nx/create-stacks-workspace/ensono-stacks-create-stacks-workspace) docs for more information and setup instructions!

:::

#### Option 3: 'Stackify' your existing Nx monorepo

If you already have an Nx monorepo, you can still utilise stacks!

:::tip

Visit the [@ensono-stacks/workspace](./workspace/plugin-information.md) docs for more information and setup instructions!

:::

## Stacks Plugins

To accelerate your project development and ensure consistency across those projects, we have several stacks plugins available!

| Plugin                                                                                      | Description                                                                                                                                                                                                                                                                                                                                                                    |
| :------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`@ensono-stacks/create-stacks-workspace`](./create-stacks-workspace/plugin-information.md) | Create an Nx workspace using stacks!<li>Create an Nx workspace for a Next application with your choice of testing framework!</li><li>Create a testing project for the generated Next application. Supported: Playwright & Cypress</li>                                                                                                                                                   |
| [`@ensono-stacks/workspace`](./workspace/plugin-information.md)                             | 'Stackify' your existing Nx workspace<li>Add build and deploy infrastructure to your workspace</li><li>Set up libraries to manage code & commit quality</li>                                                                                                                                                                                                                   |
| [`@ensono-stacks/next`](./next/plugin-information.md)                                       | Enhance your Next.js project with Stacks!<li>Add stacks configuration and developer tools to an existing next application</li><li>Add NextAuth.js to your next application</li><li>Add build and deploy infrastructure to your next application</li>                                                                 |
| [`@ensono-stacks/azure-node`](./azure-node/plugin-information.md)                           | <li>Add Azure app insights to a node project in your stacks workspace</li>                                                                                                                                                                                                                                                                                                     |
| `@ensono-stacks/azure-react`                                                                | <li><b>Coming soon!</b></li><li>Install and configure a ReactJS library with app insights</li>                                                                                                                                                                                                                                                                                 |
| [`@ensono-stacks/rest-client`](./rest-client/plugin-information.md)                         | Add a rest client to a project in your stacks workspace<li>Create an Axios http-client with custom configuration</li><li>Create a client endpoint with Axios HTTP methods for your application</li><li>Bump existing endpoints to new versions</li><li>Create code implementation from an OpenApi schema using Orval</li>                                                      |
| [`@ensono-stacks/playwright`](./playwright/plugin-information.md)                           | Add the playwright testing library and much more to your project!<li>Create a playwright testing project for your application</li><li>Add accessibility testing to your test project</li><li>Add native visual testing with playwright</li><li>Add visual testing with Applitools eyes</li><li>Add playwright testing and reporting automatically to your build pipelines</li> |
| [`@ensono-stacks/cypress`](./cypress/plugin-information.md)                           | Add the cypress testing library and much more to your project!<li>Add accessibility testing to your test project</li><li>Add cypress testing and reporting automatically to your build pipelines</li> |
| [`@ensono-stacks/logger`](./logger/plugin-information.md)                                   | Add industry standard logging capabilities to your project<li>Add Winston to your project</li>                                                                                                                                                                                                                                                                                 |

### Further Notes

Quite a few of our generators have a safeguard of sorts to prevent running them subsequent times. This has been implemented to prevent accidental overwriting of further developed custom code following an understanding that most likely multiple runs would not be required anyway. However, if for your own reasons you would like to re-run such a generator, then you are simply required to remove the relevant project/generator or workspace/generator name entry within the `stacks` -> `executedGenerators` fields within `nx.json`.