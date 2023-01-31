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

The `workspace` plugin contains executors and generators to manage the Nx workspace itself. These will often be useful in any workspace, regardless of the specific apps or libraries it contains.

Using a standard setup for workspaces ensures consistency across projects and allows developers to easily onboard onto new projects.

## Setting up @ensono-stacks/workspace

Install the @ensono-stacks/workspace with the following command:

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

## Generators

<Init />



