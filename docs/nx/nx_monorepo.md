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

#### Why should you use the Nx build system?

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

There are three ways to get started with building a **CSR (React)** or **SSR (Next JS)** frontend web application with stacks, we recommend using our _[Stacks CLI](../stackscli/usage.mdx)_ for the best experience!

:::note

CSR support is currently limited however we are actively working on this!

:::

### Option 1: Stacks CLI

Once the Stacks CLI has been installed you can scaffold a brand new Stacks and Nx workspace through answering a set of interactive questions. Launch the Stacks CLI with the following command to get started:

```bash
stacks-cli interactive
```

:::note Ensure you have the Stacks CLI installed!

Visit the [Stacks CLI](../stackscli/usage.mdx) docs for more information and setup instructions!

:::

:::tip

Visit the [NX Example](../stackscli/examples.mdx#nx) for the complete instructions/example on using NX with the Stacks CLI!

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

| Plugin                                                                            | Description                                                            |
| :-------------------------------------------------------------------------------- | :--------------------------------------------------------------------- |
| [`@ensono-stacks/create-stacks-workspace`](ensono-stacks-create-stacks-workspace) | Create an Nx workspace using stacks!                                   |
| [`@ensono-stacks/workspace`](./workspace/plugin-information.md)                   | 'Stackify' your existing Nx workspace                                  |
| [`@ensono-stacks/next`](./next/plugin-information.md)                             | Enhance your Next.js project with Stacks!                              |
| [`@ensono-stacks/azure-node`](./azure-node/plugin-information.md)                 | Add Azure app insights to a node project in your stacks workspace      |
| [`@ensono-stacks/azure-react`](./azure-react/plugin-information.md)               | Creates an Azure app insights ReactJs library in your stacks workspace |
| @ensono-stacks/rest-client                                                        | Add a rest client to a project in your stacks workspace                |
| [`@ensono-stacks/playwright`](./playwright/plugin-information.md)                 | Add the playwright testing library and much more to your project!      |
| [`@ensono-stacks/logger`](./logger/plugin-information.md)                         | Add industry standard logging capabilities to your project             |