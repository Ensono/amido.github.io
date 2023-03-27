---
id: nx_stacks
title: Stacks with Nx
sidebar_label: Stacks with Nx
description: Using stacks with Nx
keywords:
  - Nx
  - monorepo
  - stacks
  - Generator
  - Executor
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The ideologies of Stacks and [`Nx`](https://nx.dev/) are aligned in their focus on providing businesses with a framework that accelerates development, allowing you to focus on business objectives with best practice code. Leveraging Nx allows us to build upon that work and to fill the gaps with infrastructure, pipelines and the integration with other Stacks subsystems. Leveraging Nx allows a common developer experience, global communities of support, and an enterprise ready base.

<details>
  <summary>What is Nx?</summary>
    <p>The Nx framework is a powerful tool that allows developers to easily build, test, and automate their applications. It is built on top of the popular open-source Node.js platform, and provides a streamlined and efficient workflow for building apps. With Nx, developers can easily manage their dependencies, automate tasks, and quickly test their applications.</p> 
    <p>Additionally, Nx provides powerful features such as code-sharing, optimized builds, and real-time feedback, making it an ideal choice for any developer looking to streamline their development process and improve their productivity.</p>

:::tip Find out more!
Find out more about Nx through their official [documentation](https://nx.dev/getting-started/intro)!
:::

</details>

For the reasons listed above we have chosen to use Nx within Stacks for CSR and SSR frontend web applications, capitalising on Nx generators and executors to streamline your development and testing processes.

<details>
  <summary>What are Nx Generators and Executors?</summary>
    <p>Nx generators and executors are two powerful features of the Nx build system that allow developers to quickly and easily generate new code and files for their projects, as well as to automate common tasks.</p>
    <p>Nx generators are templates that can be used to quickly generate new code and files for different types of projects, such as Angular applications, React components, and Node.js services. Developers can use these generators to quickly create the code and files they need, based on pre-defined templates, saving them time and effort.</p>
    <p>Nx executors, on the other hand, are scripts that can be used to automate common tasks, such as building, testing, and deploying code. Developers can use these executors to automate repetitive tasks and to streamline their workflow. Executors can also be customized to suit the specific needs of a project, making them a highly versatile tool.</p>
</details>

#### Why should you use the Nx build system

Nx makes scaling easy. Modern techniques such as distributed task execution and computation caching make sure your CI times remain fast, even as you keep adding projects to your workspace.

- Never rebuild the same code twice
  - Nx is smart! It can figure out whether the same computation has run before and can restore the files and the terminal output from its cache.
- Distributed task execution (DTE)
  - Smart, automated, dynamic distribution of tasks across multiple machines to get maximum parallelization and CPU efficient CI runs.
- Remote caching
  - Share your local computation cache with team mates and your CI system for maximum efficiency.
- Only run what changed
  - Nothing is faster than not running a task. Nx analyses your project graph and can diff it against a baseline to determine which projects changed and what tasks need to be re-run.
- Large community
  - Nx is built on top of the popular Node.js platform, which has a large and active community of developers. This means that developers using Nx can easily find support and resources online.
- Better code-sharing
  - Nx provides powerful features for sharing code between different applications, which can help teams collaborate more effectively and reduce duplication of effort.

## Set up your stacks workspace

### Prerequisites

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

### Get Started

There are three ways to get started with building a **CSR (React)** or **SSR (Next JS)** frontend web application with stacks, we recommend using our _[Stacks CLI](../stackscli/about.md)_ for the best experience!

:::note

CSR support is currently limited however we are actively working on this!

:::

### Option 1: Stacks CLI

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

### Option 2: Create stacks workspace generator

You can scaffold a brand new Stacks and Nx workspace through the **@ensono-stacks/create-stacks-workspace** plugin.

Follow the interactive questions with the below command to get started:

```bash
npx @ensono-stacks/create-stacks-workspace@latest
```

:::tip

Visit the [@ensono-stacks/create-stacks-workspace](/docs/nx/create-stacks-workspace/ensono-stacks-create-stacks-workspace) docs for more information and setup instructions!

:::

### Option 3: 'Stackify' your existing Nx workspace

If you already have an Nx workspace, you can still utilise stacks!

Use the following command to get started!

```bash
nx g @ensono-stacks/workspace:init
```

:::tip

Visit the [@ensono-stacks/workspace](./workspace/plugin-information.md) docs for more information and setup instructions!

:::

## Stacks Plugins

To accelerate your project development and ensure consistency across those projects, we have several stacks plugins available!

| Plugin                                                                                      | Description                                                                                                                                                                                                                                                                                                                                                                    |
| :------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`@ensono-stacks/create-stacks-workspace`](./create-stacks-workspace/plugin-information.md) | Create an Nx workspace using stacks!<li>Create an Nx workspace for a Next application with your choice of testing framework!</li><li>Create a testing project for the generated Next application. Supported: Playwright</li>                                                                                                                                                   |
| [`@ensono-stacks/workspace`](./workspace/plugin-information.md)                             | 'Stackify' your existing Nx workspace<li>Add build and deploy infrastructure to your workspace</li><li>Set up libraries to manage code & commit quality</li>                                                                                                                                                                                                                   |
| [`@ensono-stacks/next`](./next/plugin-information.md)                                       | Enhance your Next.js project with Stacks!<li>Add stacks configuration and developer tools to an existing next application</li><li>Add NextAuth.js to your next application</li><li>Add Redis for session management with NextAuth.js</li><li>Add build and deploy infrastructure to your next application</li>                                                                 |
| [`@ensono-stacks/azure-node`](./azure-node/plugin-information.md)                           | <li>Add Azure app insights to a node project in your stacks workspace</li>                                                                                                                                                                                                                                                                                                     |
| `@ensono-stacks/azure-react`                                                                | <li><b>Coming soon!</b></li><li>Install and configure a ReactJS library with app insights</li>                                                                                                                                                                                                                                                                                 |
| [`@ensono-stacks/rest-client`](./rest-client/plugin-information.md)                         | Add a rest client to a project in your stacks workspace<li>Create an Axios http-client with custom configuration</li><li>Create a client endpoint with Axios HTTP methods for your application</li><li>Bump existing endpoints to new versions</li>                                                                                                                            |
| [`@ensono-stacks/playwright`](./playwright/plugin-information.md)                           | Add the playwright testing library and much more to your project!<li>Create a playwright testing project for your application</li><li>Add accessibility testing to your test project</li><li>Add native visual testing with playwright</li><li>Add visual testing with Applitools eyes</li><li>Add playwright testing and reporting automatically to your build pipelines</li> |
| [`@ensono-stacks/logger`](./logger/plugin-information.md)                                   | Add industry standard logging capabilities to your project<li>Add Winston to your project</li>                                                                                                                                                                                                                                                                                 |

### Further Notes:

Quite a few of our generators have a safeguard of sorts to prevent running them subsequent times. This has been implemented to prevent accidental overwriting of further developed custom code following an understanding that most likely multiple runs would not be required anyway. However, if for your own reasons you would like to re-run such a generator, then you are simply required to remove the relevant project/generator or workspace/generator name entry within the `stacks` -> `executedGenerators` fields within `nx.json`.
