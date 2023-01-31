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


The Ensono Stacks Next plugin augments existing next projects with a custom Ensono config. Adding testing options, enabling a custom eslint config as well as adding next auth to a project.

What benefits does it give you?

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

### Generators

<Init />
<NextAuth />



