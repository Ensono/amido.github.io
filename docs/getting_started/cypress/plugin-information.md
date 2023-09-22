---
id: ensono-stacks-cypress
title: "@ensono-stacks/cypress"
sidebar_label: "@ensono-stacks/cypress"
description: "Using cypress with Ensono Stacks!"
keywords:
  - Nx
  - monorepo
  - stacks
  - ensono
  - cypress
  - generator
  - executor
---
import InitGenerator from './init.md'
import InitDeploy from './init-deployment.md'
import AccessibilityGenerator from './accessibility.md'
import Executor from './executor.md'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Using the `@ensono-stacks/cypress` plugin can help you get started with testing using cypress. Built upon the [@nx/cypress](https://nx.dev/packages/cypress) plugin, stacks provides additional capabilities to help you hit the ground running! 

Additionally, cypress tests can be added to your deployment pipelines through the various deployment generators.

:::tip

Visit the [Frontend Testing in an Nx monorepo](../../testing/testing_in_nx/frontend_testing_in_nx.md) and [Testing with cypress](../../testing/testing_in_nx/cypress_nx.md) user guides for more information!

:::

## Setting up @ensono-stacks/cypress

Install the `@ensono-stacks/cypress` plugin with the following command:

 <Tabs>
  <TabItem value="npm" label="npm">

  ```bash
  npm install --save-dev @ensono-stacks/cypress@latest
  ```

  </TabItem>
  <TabItem value="yarn" label="yarn">

  ```bash
  yarn add --dev @ensono-stacks/cypress@latest
  ```

  </TabItem>
 </Tabs>

## Executors and Generators

To see a list of the plugin capabilities run the following command:

```bash
nx list @ensono-stacks/cypress
```

View additional information about a plugin capability through the following command:

```bash
nx g @ensono-stacks/cypress:[generator-executor-name] --help
```

### Generators
<!-- markdownlint-disable MD033 -->
<InitGenerator />
<InitDeploy />
<AccessibilityGenerator />

### Executors

<Executor/>


