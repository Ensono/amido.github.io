---
id: ensono-stacks-azure-react
title: "@ensono-stacks/azure-react"
sidebar_label: "@ensono-stacks/azure-react"
description: "Creates a ReactJS application and configures the ReactJs application for Azure!"
keywords:
  - Nx
  - monorepo
  - stacks
  - ensono
  - azure-react
  - generator
  - executor
  - appinsights
---

import GeneratorAppInsights from './generator-app-insights-web.md';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates a ReactJS application and configures your ReactJS application to use various Azure services:

- [App Insights](https://www.npmjs.com/package/applicationinsights)
- ...more to come.

## Setting up @ensono-stacks/azure-react

Install the `@ensono-stacks/azure-react` plugin with the following command:

 <Tabs>
  <TabItem value="npm" label="npm">

  ```bash
  npm install --save-dev @ensono-stacks/azure-react
  ```

  </TabItem>
  <TabItem value="yarn" label="yarn">

  ```bash
  yarn add --dev @ensono-stacks/azure-react
  ```

  </TabItem>
 </Tabs>

## Executors and Generators

To see a list of the plugin capabilities run the following command:

```bash
nx list @ensono-stacks/azure-react
```

View additional information about a plugin capability through the following commands:
```bash
nx g @ensono-stacks/azure-react:app-insights-web --help
```

### Generators

<GeneratorAppInsights />



