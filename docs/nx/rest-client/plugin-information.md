---
id: ensono-stacks-rest-client
title: "@ensono-stacks/rest-client"
sidebar_label: "@ensono-stacks/rest-client"
description: "Using the rest-client with stacks!"
keywords:
  - NX
  - monorepo
  - stacks
  - ensono
  - "rest-client"
  - generator
  - executor
---

import HttpClient from './http-client.md'
import ClientEndpoint from './client-endpoint.md'
import BumpVersion from './bump-version.md'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This plugin provides the ability to quickly get up and running with http clients and endpoints. One can generate the basic HTTP methods required to start building out a project.

**What benefits does it give you?**

- Helps track versioning and easily bump versions of endpoints using one of the plugins.
- Ensure solid foundational syntax accuracy
- Promote best practice in generated code

## Setting up @ensono-stacks/rest-client

Install the @ensono-stacks/rest-client with the following command:

 <Tabs>
  <TabItem value="npm" label="npm">

```bash
npm install --save-dev @ensono-stacks/rest-client@latest
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash
yarn add --dev @ensono-stacks/rest-client
```

  </TabItem>
 </Tabs>

## Executors and Generators

To see a list of the plugin capabilities run the following command:

```bash
nx list @ensono-stacks/rest-client
```

View additional information about a plugin capability through the following command:

```bash
nx g @ensono-stacks/rest-client:[generator-executor-name] --help
```

### Generators
<!-- markdownlint-disable MD033 -->
<HttpClient />
<ClientEndpoint />
<BumpVersion />
