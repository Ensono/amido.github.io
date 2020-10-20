---
id: environment_variables_nodejs_crs
title: Environment Variables
sidebar_label: Environment Variables
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Environment Variables

Before you can start developing you will need to replace your environment variables with the appropriated values.
This values will be automatically picked up and used by the underlying server and web client.

```bash
##
NODE_ENV=development
PORT={PORT}
NODE_ENV: process.env.NODE_ENV || "development",
PUBLIC_URL: publicUrl,
APP_BASE_PATH: ## Stacks base path,
MENU_API_URL: ## Used by the internal API fetcher
APPINSIGHTS_INSTRUMENTATIONKEY: ## Instrumentation Key
```
<!-- markdownlint-disable MD033 -->

<Tabs
defaultValue="linux"
values={[
{label: 'Linux/MacOS', value: 'linux'},
{label: 'Windows', value: 'windows'},
]}>
<TabItem value="windows">

<div>
set NODE_ENV=development <br/>

</div>

  </TabItem>

  <TabItem value="linux">

<div>
export NODE_ENV=development <br/>
</div>

  </TabItem>

</Tabs>

<!-- markdownlint-enable MD033  -->
