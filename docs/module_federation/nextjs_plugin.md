---
id: nextjs_plugin
title: Ensono Stacks with NextJs Module Federation
sidebar_label: Ensono Stacks Module Federation
description: Using Ensono Stacks with NextJs Module Federation
keywords:
  - Nx
  - monorepo
  - stacks
  - Generator
  - Executor
  - ensono
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Microfrontends are an architectural pattern for building frontend applications by breaking them down into smaller, loosely coupled, and independently deployable parts called "micro-frontends." Each microfrontend corresponds to a distinct feature or functionality of the application and is developed and deployed independently of the others.

#### Module Federation with NextJs

Module Federation is a feature introduced in Webpack 5, it enables developers to share code dynamically across different applications at runtime. This feature is particularly beneficial when building microfrontends or decoupled frontend architectures.

@module-federation/nextjs-mf is a plugin that leverages Webpack 5’s Module Federation features, allowing developers to implement Module Federation in NextJs applications.

It aims to enable a federated modules architecture in NextJs, enabling you to split a monolithic NextJs application into smaller, independently deployable parts.

The following guide details the steps of how to set up Module Federation with a Ensono Stacks NextJs application. You can also visit this [GitHub repo](https://github.com/Ensono/stacks-nextjs-federated-modules-example) to view an existing example application

## NextJs Module Federation with Ensono Stacks

### Prerequisites

#### Nx

We recommend installing Nx globally, all Nx based commands in this guide are based upon a globally installed Nx package.

<Tabs>
  <TabItem value="npm" label="npm">

```bash
npm install -g nx
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash
yarn global add nx
```

  </TabItem>
</Tabs>

#### Node

We recommend using the latest LTS version of Node, you can find the latest LTS version on the [**Node website**](https://nodejs.org/en/).

:::tip
    You can switch to the latest LTS version of Node via NVM. Node Version Manager (NVM) sets your Node version to that set in the `.nvmrc` file.

    You can find the installation instructions in the [**NVM documentation**](https://github.com/nvm-sh/nvm#installing-and-updating).
:::

### Get Started

#### Create a new Ensono Stacks and Nx workspace

You can scaffold a brand-new Ensono Stacks and Nx workspace using the **@ensono-stacks/create-stacks-workspace** package.

Follow the interactive questions creating a new NextJs application named <b>host</b>:

```bash
npx @ensono-stacks/create-stacks-workspace@latest
```

:::tip

Visit the [@ensono-stacks/create-stacks-workspace](/docs/getting_started/create-stacks-workspace/ensono-stacks-create-stacks-workspace) docs for more information and setup instructions!

:::

This will generate a new Ensono Stacks Nx workspace containing a NextJs <b>host</b> application 

First We need to install the NextJs federated modules plugin

<Tabs>
  <TabItem value="npm" label="npm">

```bash
npm add @module-federation/nextjs-mf
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash
yarn add @module-federation/nextjs-mf
```

  </TabItem>
</Tabs>


Create a new <b>header</b> application which will be our remote module, we can do this manually or by using the Nx CLI.

```bash
nx g @nx/next:app header --no-appDir
```

Now we have both our <b>host</b> and <b>header</b> modules, we need to update various config in each application to enable module federation.

Let's update the header `next.config` with details of our remote <b>header</b> module.
<b>header/next.config</b>:

```javascript
const NextFederationPlugin = require('@module-federation/nextjs-mf');
const { withNx } = require('@nrwl/next/plugins/with-nx');
const path = require('node:path');

module.exports = withNx({
    output: 'standalone',
    experimental: {
        outputFileTracingRoot: path.join(__dirname, '../../')
    },
    webpack(config) {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'header',
                filename: 'static/chunks/remoteEntry.js',
                exposes: {
                    './index': './pages/index.tsx',
                },
            }),
        );
        return config;
    }
});
```

Create an new env file for the <b>header</b> app with the addresses of our <b>host</b> and <b>header</b> modules.
<b>header/.env.development</b>:

```dotenv
STACKS_PUBLIC_HOST_URL="http://localhost:4200"
STACKS_PUBLIC_HEADER_URL="http://localhost:4300"
```

Then update the header modules `project.json` with the port on which the header module will be hosted
<b>header/project.json</b>:

```json
{
    "serve": {
        "executor": "@nx/next:server",
        "defaultConfiguration": "development",
        "options": {
            "buildTarget": "header:build",
            "dev": true,
            "port": 4300
        }
    }
}
```

Lets update the header module component to make it a bit more readable.

<b>header/pages/index.tsx</b>:

```javascript
export function Index() {
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <div id="welcome">
                        <h1>
                            Header 👋
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;

```

Now we need to update the host modules `next.config.ts` with details of the <b>host</b> and any remote modules.
<b>host/next.config.t
s</b>:

```javascript
const NextFederationPlugin = require('@module-federation/nextjs-mf');
const { withNx } = require('@nrwl/next/plugins/with-nx');
const path = require('node:path');

const remotes = isServer => {
    const location = isServer ? 'ssr' : 'chunks';

    return {
        header: `header@${process.env.STACKS_PUBLIC_HEADER_URL}/_next/static/${location}/remoteEntry.js`,
    };
};

module.exports = withNx({
    output: 'standalone',
    experimental: {
        outputFileTracingRoot: path.join(__dirname, '../../'),
        scrollRestoration: true
    },
    webpack(config, options) {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'host',
                filename: 'static/chunks/remoteEntry.js',
                remotes: remotes(options.isServer),
            }),
        );

        return config;
    }
});
```

As with the <b>header</b> module, we also need to add a new env file to the <b>host</b> application
<b>host/.env.development</b>:

```dotenv
STACKS_PUBLIC_HOST_URL="http://localhost:4200"
STACKS_PUBLIC_HEADER_URL="http://localhost:4300"
```

Also updating the <b>host</b> modules `project.json` with the correct port number

```json
{
    "serve": {
        "executor": "@nx/next:server",
        "defaultConfiguration": "development",
        "options": {
            "buildTarget": "host:build",
            "dev": true,
            "port": 4200
        }
    }
}
```

We can then import the <b>header</b> module into the <b>host</b> in the `_app.tsx` file
<b>host/pages/_app.tsx</b>:

```javascript
import { AppProps } from 'next/app';
import Head from 'next/head';
import Header from 'header/index';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Welcome to host!</title>
            </Head>
            <Header />
            <main className="app">
                <Component {...pageProps} />
            </main>
        </>
    );
}

export default CustomApp;
```

Now run the app with the following command

```bash
nx run-many --target=serve
```

We can then visit [localhost:4200](http://localhost:4200/) and see the <b>header</b> module running inside the <b>host</b> application.
Or we can visit [localhost:4300](http://localhost:4300/) and see the <b>header</b> module hosted independently.
 


