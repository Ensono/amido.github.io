---
id: cli_webapp_frameworks_ssr
title: Getting Started
sidebar_label: Getting Started
hide_title: false
hide_table_of_contents: false
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import HideNavigation from "../../../../src/pages/HideNavigation";

Web applications require a lot of boilerplate. It's also hard to know how to get started without examples. We offer both server side rendered (SSR) and client side rendered (CSR) solutions that can be bootstrapped and tailored to your current project with just one command.

Oh, and they come complete with infrastructure as code so you can deploy on your cloud of choice.

Brilliant.

## Bootstrap your framework

The best way to get started, is bootstrap the framework using the scaffolding-cli from Amido Stacks. By using it in interactive mode, you can simply answered 5 questions to get a bespoke framework, ready to go with an example test.

`npx @amidostacks/scaffolding-cli run -i`

### Get developing in just a few questions

[![asciicast](https://asciinema.org/a/znvqsWhks970mYkUjGkwFoTKS.svg)](https://asciinema.org/a/znvqsWhks970mYkUjGkwFoTKS)

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

</div>

  </TabItem>

  <TabItem value="linux">

<div>
export NODE_ENV=development <br/>
export PORT= #### <br/>
export APP_BASE_URL=http://localhost <br/>
export APP_BASE_PATH= "" <br/>

</div>

  </TabItem>

</Tabs>

## Configure Optional Features

[Auth0](docs/workloads/azure/frontend/identity) <br/>
[Contentful](docs/workloads/azure/frontend/cms) <br/>
[API](docs/workloads/azure/frontend/api_definition) <br/>

## Get developing

At the end of bootstrapping your example framework, you will have an output that will contain all the:

- dependencies
- scripts
- example tests
- pipelines
- and information to start testing

### Development

```bash
npm install
```

```bash
npm run dev
```

This offers live reload of both server side - _when using ssr_ - and client side code.

### Production

```bash
npm install
```

```bash
npm run build
```

```bash
npm run start
```

This will start the app in production mode, so you can see how it would behave deployed!

## Customising

Since the frameworks provide real examples on deployed applications, we recommend using these as examples and then replacing them with your own applications under test.

## Feedback

As always, we only improve from the incredible feedback and contributions from people like you. To help us improve, see our contribution guide for more information.

<HideNavigation prev />
