---
id: ensono-stacks-next
title: "@ensono-stacks/next"
sidebar_label: "@ensono-stacks/next"
description: "Using next with Ensono Stacks!"
keywords:
  - NX
  - monorepo
  - stacks
  - ensono
  - "next"
  - generator
  - executor
  - redis
---

import Init from './init.md'
import NextAuth from './next-auth.md'
import Storybook from './storybook.md'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `next` plugin contains generators to augment existing NextJs projects. Adding eslint rules, testing config as well as installing and configuring NextAuth.js in your NextJs app.

Using a standard setup for your Next app ensures consistency and code quality across multiple applications quickly. NextAuth (alongside Redis) can also be quickly added to a project without costly configuration and setup.

Using the deployment generator you can setup your application with the necessary infrastructure config to host it in k8s.

## Prerequisites

An existing [Next](https://nextjs.org/) application. Note the generator will fail if run in an empty workspace with no applications. To create a new Next application please run the NX Next generator with the following command including any relevant options. See [@nx/next plugin docs](https://nx.dev/packages/next)

```bash
nx g @nx/next:app my-new-app
```

Ensure the `stacks` -> `executedGenerators` fields are present within `nx.json` for FE code generation.

Ensure the `stacks` -> `config` fields are present and populated within `nx.json` for deployment/infra generation.

An example of the expected structure can be [seen here](/docs/getting_started/workspace/ensono-stacks-workspace#prerequisites) under `@ensono-stacks/workspace:init`​ prerequisites.

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
nx g @ensono-stacks/next:[generator-executor-name] --help
```

### Generators

<!-- markdownlint-disable MD033 -->
<Init />
<NextAuth />
<ReactQuery />
<Storybook />
