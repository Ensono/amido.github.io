---
id: scaffolding_java_cqrs
title: Using the Scaffolding CLI to create the Java Rest API project template
sidebar_label: Using the Scaffolding CLI
hide_table_of_contents: true
description: Using the Scaffolding CLI to create the Java Rest API project template
keywords:
  - java
  - rest 
  - api
  - cqrs
  - application
  - spring boot
  - swagger
  - template
  - scaffolding cli
  - get started
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

```bash
npx @amidostacks/scaffolding-cli@latest run -i
```

You will be asked a number of questions. Based on the answers, your ready-to-build project template will be produced.
Below are the questions asked and given options.

1. Select Target Cloud Platform
     1. Azure - Azure Kubernetes Services (AKS)
     2. Google Cloud Platform - Google Kubernetes Engine (GKE)
2. Select Project type
     1. React app with server side rendering
     2. React app with client side rendering
     3. API with .NET
     4. API with Java
     5. API with Java and CQRS
     6. Cloud platform shared services
3. Please provide the company name
4. Please provide the project name
5. Please provide scope (domain)
6. Continue to additional project configuration?
7. Please provide version control repository name
8. Please provide platform service region
9. Provide host name (DNS domain)
10. Package prefix - will be prepended to companyName.projectName previously supplied, e.g. com or uk.co
11. Select Testing Framework
    1. Serenity
    2. Karate

<!--An example is shown in the video below. -->
<!-- [![asciicast](https://asciinema.org/a/358208.svg)](https://asciinema.org/a/358208) -->
