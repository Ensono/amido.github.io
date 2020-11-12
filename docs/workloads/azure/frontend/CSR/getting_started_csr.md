---
id: getting_started_csr
title: Getting Started
sidebar_label: Getting Started
hide_title: false
hide_table_of_contents: false
description: Getting started with CSR
keywords:
  - rest 
  - api
  - csr
  - scaffolding
  - template
  - example
  - backend
  - axios
  - bootstrap
  - dependencies
  - start project
  - client 
  - side 
  - rendering
  - client side rendering
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import HideNavigation  from "../../../../../src/pages/HideNavigation";



Web applications require a lot of boilerplate. It's also hard to know how to get started without examples. We offer both server side rendered (SSR) and client side rendered (CSR) solutions that can be bootstrapped and tailored to your current project with just one command.

Oh, and they come complete with infrastructure as code so you can deploy on your cloud of choice.

Brilliant.

## Bootstrap your framework

The best way to get started, is bootstrap the framework using the scaffolding-cli from Amido Stacks. By using it in interactive mode, you can simply answered 5 questions to get a bespoke framework, ready to go with an example test.

```bash title="Run to start configuring your solution"
npx @amidostacks/scaffolding-cli run -i
```

### Get developing in just a few questions

<!-- [![asciicast](https://asciinema.org/a/znvqsWhks970mYkUjGkwFoTKS.svg)](https://asciinema.org/a/znvqsWhks970mYkUjGkwFoTKS) -->




## Environment Variables

Before you can start developing you will need to replace your environment variables with the appropriated values.
This values will be automatically picked up and used by the underlying server and web client.


<!-- markdownlint-disable MD033 -->

<Tabs
defaultValue="linux"
values={[
{label: 'Linux/MacOS', value: 'linux'},
{label: 'Windows', value: 'windows'},
]}>
<TabItem value="windows">

<div>

  ```bash
  set NODE_ENV=development
  ```

  ```bash
  set PORT=3000
  ```

  ```bash
  set NODE_ENV: process.env.NODE_ENV || "development"
  ```

  ```bash
  set PUBLIC_URL: publicUrl
  ```

  ```bash
  set APP_BASE_PATH: ## Stacks base path
  ```

  ```bash
  set MENU_API_URL: ## Used by the internal API fetcher
  ```

  ```bash title="Instrumentation Key"
  set APPINSIGHTS_INSTRUMENTATIONKEY:{Set instrumentation hey here}
  ```

</div>

</TabItem>

<TabItem value="linux">

<div>

  ```bash
  export NODE_ENV=development
  ```

  ```bash
  export PORT=<Set Port here>
  ```

  ```bash
  export NODE_ENV: process.env.NODE_ENV || "development"
  ```

  ```bash
  export PUBLIC_URL: publicUrl
  ```

  ```bash
  export APP_BASE_PATH: ## Stacks base path
  ```

  ```bash
  export MENU_API_URL: ## Used by the internal API fetcher
  ```

  ```bash title="Instrumentation Key"
  export APPINSIGHTS_INSTRUMENTATIONKEY:<Instrumentation Key here>
  ```

</div>

</TabItem>

</Tabs>




## Get developing

At the end of bootstrapping your example framework, you will have an output that will contain all the:

* dependencies
* scripts
* example tests
* pipelines
* and information to start testing 



### Development

Move to the `<PROJECT-NAME>/src` folder and run the next commands

```bash
npm install
```

```bash
npm run dev
```

This offers live reload of both server side  - *when using ssr* - and client side code.

### Production

Move to the `<PROJECT-NAME>/src` folder and run the next commands

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
