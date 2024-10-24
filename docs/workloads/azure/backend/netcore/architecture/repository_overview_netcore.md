---
id: repository_overview_netcore
title: Repository Overview
sidebar_label: Repository Structure
hide_title: false
hide_table_of_contents: true
description: .NET Core REST API application - Repositories Overview
keywords:
  - .net core
  - rest api
  - cqrs
  - example 
  - template 
  - repository
  - structure
---

```text
├── build: stores build configurations
│   ├── azDevOps: stores configuration, build steps and scripts used by Azure DevOps
│   ├── github: stores configuration, build steps and scripts used by GitHub Actions
│   ├── scripts: stores reusable scripts used by the build pipelines
│   └── taskctl: stores configuration, build steps and scripts used by TaskCtl
├── deploy: stores deployment configurations
│   ├── aws: stores deployment steps and scripts used by AWS
│   ├── azure: stores deployment steps and scripts used by Azure DevOps
│   ├── helm: stores Helm charts
│   └── scripts: stores reusable scripts used by the deployment pipelines
├── docs: stores documentation
├── scripts: stores scripts used for testing, development and other purposes
├── src: stores the source code
│   ├── background-worker: stores the background worker function template
│   ├── cqrs: stores the CQRS template
│   ├── func-aeh-listener: stores the Azure Event Hub listener function template
│   ├── func-asb-listener: stores the Azure Service Bus listener function template
│   ├── func-cosmosdb-worker: stores the CosmosDB worker function template
│   ├── shared: stores the shared code
│   └── simple-api: stores the simple API template
```

There is 1 repository available:

[stacks-dotnet](https://github.com/Ensono/stacks-dotnet) for all available dotnet templates
