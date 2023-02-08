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

Summary of the plugin
What is its purpose?

What benefits does it give you?

## Setting up @ensono-stacks/logger

### Prerequisites

Are there any prerequisites?

### Installation 
Install the @ensono-stacks/logger with the following command:

 <Tabs>
  <TabItem value="npm" label="npm">

  ```bash
  npm install --save-dev @ensono-stacks/logger
  ```

  </TabItem>
  <TabItem value="yarn" label="yarn">

  ```bash
  yarn add --dev @ensono-stacks/logger
  ```

  </TabItem>
 </Tabs>

##### Has it installed any additional plugins? 
What are they? Can we link to docs about the additional plugins?

#### Has it created any scripts?
How do we use them, what do those scripts do?
e.g
```json title="Example script that's created"
"scripts": {
    "prepare": "husky install"
  },
```  

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

<Winston />



