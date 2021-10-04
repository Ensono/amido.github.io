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
│   ├── azDevOps: stores configuration, build steps and scripts used by azure dev ops only
│   ├── jenkins: stores configuration, build steps and scripts used by jenkins only
│   └── scripts: stores scripts used by build steps that can be reused by multiple
|                tools without changes. ie: Docker script for Container Image creation
├── deploy
|  ├── k8s: stores yaml files for k8s deployments. i.e: deployments, services,
|  |  |    configMap and related dependencies for each service in an application
|  |  ├── ui: stores yaml for ui service
|  |  └── api: stores yaml for the api service and configuration files
│  │     ├── base: store raw yaml used by k8s
│  │     ├── kustomization: store kustomize files(for kubectl apply -k)
│  │     │   ├── dev: configuration files for dev environment
│  │     │   └── test: configuration files for test environment
│  │     └── helm-chart: store helm chart files(if helm used)
│  │         └── templates
|  ├── serviceFabric: scripts used to deploy applications on serviceFabric
|  ├── terraform: terraform scripts used to provision dependencies
|  |              only needed by this application
|  └── scripts: deployment scripts shared by multiple tools. ie: Variable substitution
├── contracts: stores swagger specs, ui mocks and other documents describing
|              the overall solution
└── src
   ├── services (i.e: apis, queue listener, scheduled jobs)
   ├── tests: stores tests not built in other services solutions (functional tests,
   |          performance, etc)
   └── ui: stores the front end service and components
```


There are 3 repositories available:

[stacks-dotnet](https://github.com/amido/stacks-dotnet) for a simple web API <br/>
[stacks-dotnet-cqrs](https://github.com/amido/stacks-dotnet-cqrs) for a web API with CQRS <br/>
[stacks-dotnet-cqrs-events](https://github.com/amido/stacks-dotnet-cqrs-events) for a web API with CQRS and Event Listening (with function and worker service) <br/>
