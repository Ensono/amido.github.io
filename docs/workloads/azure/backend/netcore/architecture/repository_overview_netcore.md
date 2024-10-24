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
├── build
│   ├── azDevOps
│   │   ├── azure
│   │   └── templates
│   ├── github
│   │   ├── aws
│   │   └── templates
│   ├── scripts
│   └── taskctl
├── deploy
│   ├── aws
│   │   └── app
│   ├── azure
│   │   └── app
│   ├── helm
│   │   └── stacks-dotnet
│   └── scripts
├── docs
├── scripts
├── src
│   ├── background-worker
│   │   └── src
│   ├── cqrs
│   │   ├── contracts
│   │   └── src
│   ├── func-aeh-listener
│   │   └── src
│   ├── func-asb-listener
│   │   └── src
│   ├── func-cosmosdb-worker
│   │   └── src
│   ├── shared
│   └── simple-api
│       ├── contracts
│       └── src
```

There is 1 repository available:

[stacks-dotnet](https://github.com/Ensono/stacks-dotnet) for all available dotnet templates
