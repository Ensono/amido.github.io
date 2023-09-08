---
id: ensono-stacks-playwright
title: "@ensono-stacks/playwright"
sidebar_label: "@ensono-stacks/playwright"
description: "Using the playwright with stacks!"
keywords:
  - Nx
  - monorepo
  - stacks
  - ensono
  - "playwright"
  - generator
  - executor
---
import InitGenerator from './init.md'
import InitDeploy from './init-deployment.md'
import AccessibilityGenerator from './accessibility.md'
import Visual from './visual-regression.md'
import VisualDeploy from './visual-regression-deployment.md'
import Executor from './executor.md'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Using the `@ensono-stacks/playwright` plugin can help you get started with testing using playwright, with it's comprehensive feature set this plugin helps you capitalise on those features by accelerating your setup process and providing examples to get you started. 

Additionally, playwright tests can be added to your deployment pipelines through the various deployment generators.

:::tip

Visit the [Frontend Testing in an Nx monorepo](../../testing/testing_in_nx/frontend_testing_in_nx.md) and [Testing with Playwright](../../testing/testing_in_nx/playwright_nx.md) user guides for more information!

:::

## Setting up @ensono-stacks/playwright

Install the `@ensono-stacks/playwright` plugin with the following command:

 <Tabs>
  <TabItem value="npm" label="npm">

  ```bash
  npm install --save-dev @ensono-stacks/playwright@latest
  ```

  </TabItem>
  <TabItem value="yarn" label="yarn">

  ```bash
  yarn add --dev @ensono-stacks/playwright@latest
  ```

  </TabItem>
 </Tabs>

## Executors and Generators

To see a list of the plugin capabilities run the following command:

```bash
nx list @ensono-stacks/playwright
```

View additional information about a plugin capability through the following command:

```bash
nx g @ensono-stacks/playwright:[generator-executor-name] --help
```

### Generators
<!-- markdownlint-disable MD033 -->
<InitGenerator />
<InitDeploy />
<AccessibilityGenerator />
<Visual />
<VisualDeploy />

### Executors

<Executor/>


