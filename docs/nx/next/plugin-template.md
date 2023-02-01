---
id: ensono-stacks-next
title: "@ensono-stacks/next"
sidebar_label: "@ensono-stacks/next"
description: "Using next with stacks!"
keywords:
  - NX
  - monorepo
  - stacks
  - ensono
  - "next"
  - generator
  - executor
---
import Init from './init.md'
import NextAuth from './next-auth.md'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


The `next` plugin contains generators to augment existing NextJs projects. Adding eslint rules, testing configs as well as installing and configuring NextAuth.js in your NextJs app.

Using a standard setup for your Next app ensures consistency and code quality across multiple applications quickly. NextAuth can also be quickly added to a project without costly configuration and setup.

## Setting up @ensono-stacks/next

Install the @ensono-stacks/next with the following command:

 <Tabs>
  <TabItem value="npm" label="npm">

  ```bash
  npm install --save-dev @ensono-stacks/next
  ```

  </TabItem>
  <TabItem value="yarn" label="yarn">

  ```bash
  yarn add --dev @ensono-stacks/next
  ```

  </TabItem>
 </Tabs>

## Generators

To see a list of the plugin capabilities run the following command:

```bash
nx list @ensono-stacks/next
```

View additional information about a plugin capability through the following command:
```bash
nx g @ensono-stacks/next:init --help
nx g @ensono-stacks/next:next-auth --help
```

<Init />
<NextAuth />