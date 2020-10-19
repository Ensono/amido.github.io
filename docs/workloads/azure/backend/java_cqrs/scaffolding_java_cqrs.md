---
id: scaffolding_java_cqrs
title: Using the Scaffolding CLI to create the Java Rest API project template
sidebar_label: Using the Scaffolding CLI
hide_table_of_contents: true
---

## Create a custom Java REST API project template from the command line

The Amido Stacks Scaffolding CLI can be used to create a fully-functional and deployable project from a template, in a variety of flavours.
It includes tests (unit, integration), together with infrastructure and deployment definitions. All by running from your CLI.

We use npx to execute and create the
[template-cli](https://www.npmjs.com/package/@amidostacks/scaffolding-cli)
[npx](https://www.npmjs.com/package/npx).

We are supporting and running [node@12](https://nodejs.org/en/about/releases/).
Please ensure that your local environment has the correct version [installed](https://nodejs.org/en/download/).

To run the Scaffolding CLI, use the following commands

```text
npx @amidostacks/scaffolding-cli@latest run -i  
```

You will be asked a number of questions. Based on the answers, your ready-to-build project template will be produced.

An example is shown in the video below.

[![asciicast](https://asciinema.org/a/358208.svg)](https://asciinema.org/a/358208)
