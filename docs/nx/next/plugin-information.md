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
import NextInfra from './infra.md'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `next` plugin contains generators to augment existing NextJs projects. Adding eslint rules, testing configs as well as installing and configuring NextAuth.js in your NextJs app.

Using a standard setup for your Next app ensures consistency and code quality across multiple applications quickly. NextAuth can also be quickly added to a project without costly configuration and setup.

## Prerequisites

An existing [Next](https://nextjs.org/) application. Note the generator will fail if run in an empty workspace with no applications. To create a new Next application please run the NX Next generator with the following command including any relevant options. See [@nrwl/next plugin docs](https://nx.dev/packages/next)

```
nx g @nrwl/next:app my-new-app
```

## Setting up @ensono-stacks/next

Install the `@ensono-stacks/next` with the following command:

 <Tabs>
  <TabItem value="npm" label="npm">

```bash
npm install --save-dev @ensono-stacks/next@latest
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash
yarn add --dev @ensono-stacks/next@latest
```

  </TabItem>
 </Tabs>

## Executors and Generators

To see a list of the plugin capabilities run the following command:

```bash
nx list @ensono-stacks/next
```

View additional information about a plugin capability through the following command:

```bash
nx g @ensono-stacks/azure-node:[generator-executor-name] --help
```

### Generators

<Init />
<NextAuth />
<NextInfra />
