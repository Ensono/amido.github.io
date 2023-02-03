---
id: ensono-stacks-playwright
title: "@ensono-stacks/playwright"
sidebar_label: "@ensono-stacks/playwright"
description: "Using the playwright with stacks!"
keywords:
  - NX
  - monorepo
  - stacks
  - ensono
  - "playwright"
  - generator
  - executor
---
import InitGenerator from './init.md'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Using the `@ensono-stacks/playwright` plugin can help you get started with testing using playwright, with it's comprehensive feature set this plugin helps you capitalise on those features by accelerating your setup process and providing examples to get you started. 

:::tip

Visit the [Frontend Testing in an NX monorepo](../../testing/testing_in_nx/frontend_testing_in_nx.md) and [Testing with Playwright](../../testing/testing_in_nx/playwright_nx.md) user guides for more information!

:::

## Setting up @ensono-stacks/playwright

### Prerequisites

To get started with `@ensono-stacks/playwright`, there are a number of prerequisite items:

1. The [`@mands/nx-playwright`](https://github.com/marksandspencer/nx-plugins/tree/main/packages/nx-playwright) plugin is installed
2. Playwright and it's dependencies have been installed
3. A playwright test app exists

<details>
<summary>How to install @mands/nx-playwright and playwright</summary>

<Tabs>
  <TabItem value="npm" label="npm">

  ```bash
  npm install --save-dev @mands/nx-playwright
  npm install --save-dev playwright
  npx playwright install --with-deps
  ```

  </TabItem>
  <TabItem value="yarn" label="yarn">

  ```bash
  yarn add --dev @mands/nx-playwright
  yarn add --dev playwright
  yarn playwright install --with-deps
  ```

  </TabItem>
 </Tabs>

</details>

<details>
<summary>How to create a playwright test app</summary>

```bash
nx generate @mands/nx-playwright:project <APP-NAME>-e2e --project <APP-NAME>
```

</details>
 

### Installation 
Install the @ensono-stacks/playwright with the following command:

 <Tabs>
  <TabItem value="npm" label="npm">

  ```bash
  npm install --save-dev @ensono-stacks/playwright
  ```

  </TabItem>
  <TabItem value="yarn" label="yarn">

  ```bash
  yarn add --dev @ensono-stacks/playwright
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

<InitGenerator />



