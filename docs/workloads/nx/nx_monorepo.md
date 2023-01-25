---
id: nx_monorepo
title: NX Build System
sidebar_label: Stacks with NX
description: Using stacks with the NX build system
keywords:
  - NX
  - monorepo
  - stacks
  - CompleteWithAdditonalKeywords
---

:::caution

This page is not complete

:::

THIS SECTION SHOULD INCLUDE SOME INFORMATION ON [NX](https://nx.dev/) 
We chose NX as it aligns closely to the ideologies of stacks, it enables us to........[GARETH TO FILL IN WITH SOME FANCY INFORMATION]

## Why should you use the NX build system?

Nx makes scaling easy. Modern techniques such as distributed task execution and computation caching make sure your CI times remain fast, even as you keep adding projects to your workspace.
- Never rebuild the same code twice
  - Nx is smart! It can figure out whether the same computation has run before and can restore the files and the terminal output from its cache.
- Distributed task execution (DTE)
  - Smart, automated, dynamic distribution of tasks across multiple machines to get maximum parallelization and CPU efficient CI runs.
- Remote caching
  - Share your local computation cache with team mates and your CI system for maximum efficiency.
- Only run what changed
  - Nothing is faster than not running a task. Nx analyzes your project graph and can diff it against a baseline to determine which projects changed and what tasks need to be re-run.

## Scaffold your stacks workspace

To be completed with information on scaffolding the stacks workspace, alongside some example questions that the CLI would ask you

```bash
✔ Question 1
✔ Question 2
✔ Question 3
```

### Adding NX to your existing workspace

https://nx.dev/recipes/adopting-nx

## Stacks Plugins


| Plugin | Description |
| :---   | :---   |
| [`@ensono-stacks/create-stacks-workspace`](ensono-stacks-create-stacks-workspace) | Create an NX workspace using stacks! |
| @ensono-stacks/workspace | Add stacks to your existing NX workspace | 
| @ensono-stacks/next | Add a Next.js project to your stacks workspace |
| @ensono-stacks/azure-node | Add Azure app insights to a node project in your stacks workspace|
| @ensono-stacks/rest-client | Add a rest client to a project in your stacks workspace |

To be added: 
- Next SSR App
- React SSR App
- NextAuth Azure AD
- Rest client generator
- React Azure App Insights
- Localisation
- Logging
- Playwright