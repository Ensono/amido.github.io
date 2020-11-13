---
id: environment_variables_nodejs_ssr
title: Environment Variables
sidebar_label: Environment Variables
hide_title: false
hide_table_of_contents: false
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
 APP_BASE_URL=http://localhost
 APP_BASE_PATH=""

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
set PORT= #### <br/>
set APP_BASE_URL=http://localhost <br/>
set APP_BASE_PATH="" <br/>
set NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN= #### <br/>
set NEXT_PUBLIC_CONTENTFUL_PREVIEW_SECRET= #### <br/>
set NEXT_PUBLIC_CONTENTFUL_SPACE_ID= #### <br/>
set NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN= ### <br/>

</div>

  </TabItem>

  <TabItem value="linux">

<div>
export NODE_ENV=development <br/>
export PORT= #### <br/>
export APP_BASE_URL=http://localhost <br/>
export APP_BASE_PATH= "" <br/>
export NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN= #### <br/>
export NEXT_PUBLIC_CONTENTFUL_PREVIEW_SECRET= #### <br/>
export NEXT_PUBLIC_CONTENTFUL_SPACE_ID= #### <br/>
export NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN= ### <br/>

</div>

  </TabItem>

</Tabs>

<!-- markdownlint-enable MD033  -->