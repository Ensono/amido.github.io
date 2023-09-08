---
id: ensono-stacks-logger
title: "@ensono-stacks/logger"
sidebar_label: "@ensono-stacks/logger"
description: "Using the logger with stacks!"
keywords:
  - Nx
  - monorepo
  - stacks
  - ensono
  - "logger"
  - generator
  - executor
---
import Winston from './winston.md'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `@ensono-stacks/logger` plugin allows you to add industry standard logging functionality to your Stacks apps.

Currently, the following logging libraries are supported:

- **[winston](https://github.com/winstonjs/winston)**

## Setting up @ensono-stacks/logger

### Prerequisites

An existing Stacks workspace.

### Installation 

Install the @ensono-stacks/logger with the following command:

 <Tabs>
  <TabItem value="npm" label="npm">

  ```bash
  npm install --save-dev @ensono-stacks/logger@latest
  ```

  </TabItem>
  <TabItem value="yarn" label="yarn">

  ```bash
  yarn add --dev @ensono-stacks/logger@latest
  ```

  </TabItem>
 </Tabs>


## Executors and Generators

To see a list of the plugin capabilities run the following command:

```bash
nx list @ensono-stacks/logger
```

View additional information about a plugin capability through the following command:

```bash
nx g @ensono-stacks/logger:[generator-executor-name] --help
```

### Generators
<!-- markdownlint-disable MD033 -->
<Winston />



