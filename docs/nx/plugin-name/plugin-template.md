---
id: ensono-stacks-[plugin-name]
title: "@ensono-stacks/[plugin-name]"
sidebar_label: "@ensono-stacks/[plugin-name]"
description: "Using the [plugin-name] with stacks!"
keywords:
  - NX
  - monorepo
  - stacks
  - ensono
  - "[plugin-name]"
  - generator
  - executor
---
import ExecutorName from './executor-generator-template.md'
import GeneratorName from './executor-generator-template.md'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Summary of the plugin
What is it's purpose?

What benefits does it give you?

## Setting up @ensono-stacks/[plugin-name]

Install the @ensono-stacks/[plugin-name] with the following command:

 <Tabs>
  <TabItem value="npm" label="npm">

  ```bash
  npm install --save-dev @ensono-stacks/[plugin-name]
  ```

  </TabItem>
  <TabItem value="yarn" label="yarn">

  ```bash
  yarn add --dev @ensono-stacks/[plugin-name]
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
nx list @ensono-stacks/[plugin-name]
```

View additional information about a plugin capability through the following command:
```bash
nx g @ensono-stacks/[plugin-name]:[generator-executor-name] --help
```
### Executors

<ExecutorName />
<ExecutorName />
<ExecutorName />

### Generators

<GeneratorName />



