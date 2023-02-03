---
id: nx_stacks
title: Stacks with NX
sidebar_label: Stacks with NX
description: Using stacks with NX build
keywords:
  - NX
  - monorepo
  - stacks
  - CompleteWithAdditonalKeywords
---

:::caution

This page is not complete

:::

The ideologies of Stacks and [`NX`](https://nx.dev/) are aligned in their focus on providing businesses with the tools they need to optimize their IT infrastructure, while also saving them time and effort. Both Stacks and the NX build system are designed to make it easy for companies to manage and scale their IT infrastructure, and to help them improve their overall productivity. 

<details>
  <summary>What is NX?</summary>
    <p>The NX build system is a powerful tool that allows developers to easily build, test, and deploy their applications. It is built on top of the popular open-source Node.js platform, and provides a streamlined and efficient workflow for building and deploying applications. With NX, developers can easily manage their dependencies, automate tasks, and quickly test their applications in different environments.</p> 
    <p>Additionally, NX provides powerful features such as code-sharing, optimized builds, and real-time feedback, making it an ideal choice for any developer looking to streamline their development process and improve their productivity.</p>

:::tip Find out more!
Find out more about NX through their official [documentation](https://nx.dev/getting-started/intro)!
:::

</details>

For the reasons listed above we have chosen to use NX within Stacks, capitalising on NX generators and executors to streamline your development and testing processes. 

<details>
  <summary>What are NX Generators and Executors?</summary>
    <p>NX generators and executors are two powerful features of the NX build system that allow developers to quickly and easily generate new code and files for their projects, as well as to automate common tasks.</p>
    <p>NX generators are templates that can be used to quickly generate new code and files for different types of projects, such as Angular applications, React components, and Node.js services. Developers can use these generators to quickly create the code and files they need, based on pre-defined templates, saving them time and effort.</p>
    <p>NX executors, on the other hand, are scripts that can be used to automate common tasks, such as building, testing, and deploying code. Developers can use these executors to automate repetitive tasks and to streamline their workflow. Executors can also be customized to suit the specific needs of a project, making them a highly versatile tool.</p>
    <p>Both generators and executors are integrated with the NX build system, which enables developers to easily build, test and deploy their application. They also allow for consistent patterns to be followed in the project, making it easier for developers to understand the project structure and for maintainability.</p>
</details>

#### Why should you use the NX build system?

NX makes scaling easy. Modern techniques such as distributed task execution and computation caching make sure your CI times remain fast, even as you keep adding projects to your workspace.
- Never rebuild the same code twice
  - NX is smart! It can figure out whether the same computation has run before and can restore the files and the terminal output from its cache.
- Distributed task execution (DTE)
  - Smart, automated, dynamic distribution of tasks across multiple machines to get maximum parallelization and CPU efficient CI runs.
- Remote caching
  - Share your local computation cache with team mates and your CI system for maximum efficiency.
- Only run what changed
  - Nothing is faster than not running a task. NX analyses your project graph and can diff it against a baseline to determine which projects changed and what tasks need to be re-run.
- Large community
  - NX is built on top of the popular Node.js platform, which has a large and active community of developers. This means that developers using NX can easily find support and resources online.
- Better code-sharing
  - NX provides powerful features for sharing code between different applications, which can help teams collaborate more effectively and reduce duplication of effort.

## Set up your stacks workspace

There are three ways to scaffold you stacks workspace, we recommend using our Stacks CLI for the best experience!

### Option 1: Stacks CLI

:::danger

TO BE COMPLETED PENDING STACKS CLI IMPLEMENTATION

:::

### Option 2: Create stacks workspace generator

You can scaffold a brand new Stacks and NX workspace through the __@ensono-stacks/create-stacks-workspace__ plugin.

Follow the interactive questions with the below command to get started:

```bash
npx @ensono-stacks/create-stacks-workspace@latest
```

:::tip

Visit the [@ensono-stacks/create-stacks-workspace](./azure-node/not-valid-link-update-when-available.md) docs for more information and setup instructions!

:::

### Option 3: 'Stackify' your existing NX workspace

If you already have an NX workspace, you can still utilise stacks!

Use the following command to get started!
```bash
nx g @ensono-stacks/workspace:init
```

:::tip

Visit the [@ensono-stacks/workspace](./workspace/plugin-information.md) docs for more information and setup instructions!

:::

## Stacks Plugins

To accelerate your project development and ensure consistency across those projects, we have several stacks plugins available!

| Plugin | Description |
| :---   | :---   |
| [`@ensono-stacks/create-stacks-workspace`](ensono-stacks-create-stacks-workspace) | Create an NX workspace using stacks! |
| [`@ensono-stacks/workspace`](./workspace/plugin-information.md) | 'Stackify' your existing NX workspace | 
| [`@ensono-stacks/next`](./next/plugin-information.md) | Add a Next.js project to your stacks workspace |
| [`@ensono-stacks/azure-node`](./azure-node/plugin-information.md) | Add Azure app insights to a node project in your stacks workspace|
| @ensono-stacks/rest-client | Add a rest client to a project in your stacks workspace |
| [`@ensono-stacks/playwright`](./playwright/plugin-information.md) | Add the playwright testing library and much more to your project! |

To be added (Dev note, to be removed): 
- Next SSR App?
- React SSR App?
- NextAuth Azure AD
- Rest client generator
- React Azure App Insights
- Localisation
- Logging
