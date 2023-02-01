---
id: ensono-stacks-workspace
title: "@ensono-stacks/workspace"
sidebar_label: "@ensono-stacks/workspace"
description: "Using the workspace with stacks!"
keywords:
  - NX
  - monorepo
  - stacks
  - ensono
  - workspace
  - generator
  - executor
---
import Init from './init.md'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `@ensono-stacks/workspace` plugin contains generators to manage the Nx workspace itself. These will often be useful in any workspace, regardless of the specific apps or libraries it contains.

Using a standard setup for workspaces ensures consistency across projects and allows developers to easily onboard onto new projects.

## Setting up @ensono-stacks/workspace

Install the `@ensono-stacks/workspace` with the following command:

 <Tabs>
  <TabItem value="npm" label="npm">

  ```bash
  npm install --save-dev @ensono-stacks/workspace
  ```

  </TabItem>
  <TabItem value="yarn" label="yarn">

  ```bash
  yarn add --dev @ensono-stacks/workspace
  ```

  </TabItem>
 </Tabs>

##### Has it installed any additional plugins? 
`@ensono-stacks/workspace` depends on the `@ensono-stacks/core` plugin.

## Executors and Generators

To see a list of the plugin capabilities run the following command:

```bash
nx list @ensono-stacks/workspace
```

View additional information about a plugin capability through the following command:
```bash
nx g @ensono-stacks/workspace:[generator-executor-name] --help
```
### Generators

<Init />



