---
id: ensono-stacks-azure-node
title: "@ensono-stacks/azure-node"
sidebar_label: "@ensono-stacks/azure-node"
description: "Configure NodeJS application for Azure!"
keywords:
  - Nx
  - monorepo
  - stacks
  - ensono
  - azure-node
  - generator
  - executor
  - appinsights
---

import GeneratorAppInsights from './generator-app-insights.md';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Configures your NodeJS application to use various Azure services:

- [App Insights](https://www.npmjs.com/package/applicationinsights)
- ...more to come.

## Setting up @ensono-stacks/azure-node

Install the `@ensono-stacks/azure-node` with the following command:

 <Tabs>
  <TabItem value="npm" label="npm">

  ```bash
  npm install --save-dev @ensono-stacks/azure-node@latest
  ```

  </TabItem>
  <TabItem value="yarn" label="yarn">

  ```bash
  yarn add --dev @ensono-stacks/azure-node@latest
  ```

  </TabItem>
 </Tabs>

## Executors and Generators

To see a list of the plugin capabilities run the following command:

```bash
nx list @ensono-stacks/azure-node
```

View additional information about a plugin capability through the following command:
```bash
nx g @ensono-stacks/azure-node:[generator-executor-name] --help
```

### Generators

<GeneratorAppInsights />



