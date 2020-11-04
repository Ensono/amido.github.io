---
id: cli_webapp_frameworks
title: Getting Started
sidebar_label: Getting Started
hide_title: false
hide_table_of_contents: false
---

Web applications require a lot of boilerplate. It's also hard to know how to get started without examples. We offer both server side rendered (SSR) and client side rendered (CSR) solutions that can be bootstrapped and tailored to your current project with just one command.

Oh, and they come complete with infrastructure as code so you can deploy on your cloud of choice.

Brilliant.

## Bootstrap your framework

The best way to get started, is bootstrap the framework using the scaffolding-cli from Amido Stacks. By using it in interactive mode, you can simply answered 5 questions to get a bespoke framework, ready to go with an example test.

`npx @amidostacks/scaffolding-cli run -i`

### Get developing in just a few questions

<!-- [![asciicast](https://asciinema.org/a/znvqsWhks970mYkUjGkwFoTKS.svg)](https://asciinema.org/a/znvqsWhks970mYkUjGkwFoTKS) -->


## Get developing

At the end of bootstrapping your example framework, you will have an output that will contain all the:

* dependencies
* scripts
* example tests
* pipelines
* environment variables
* and information to start testing immediately


### Development

```bash
npm install
```

```bash
npm run dev
```

This offers live reload of both server side  - *when using ssr* - and client side code.

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
