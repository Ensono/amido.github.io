---
id: infrastructure_netcore
title: .NET - Azure Infrastructure
sidebar_label: Infrastructure
description: High level design of the reference implementation of the .NET Ensono Stacks REST API with CQRS.
keywords:
  - .net
  - rest api
  - cqrs
  - pipeline
  - azure
  - azure container registry
  - azure kubernetes service
  - application insights
  - cosmos db
  - deployment
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Overview

This page present the high level design of the reference implementation of the .NET Ensono Stacks REST API with CQRS.

**This page assumes that the core infrastructure has already been provisioned. Instructions and additional information on the core infrastructure can be found [here](../../../../infrastructure/azure/core_infrastructure.md)**

Both the diagram and resource list below are for a single environment.

### Diagram

<img alt="Azure .NET API Infrastructure" src={useBaseUrl('img/azure_rest_api_infrastructure.png')} />

### Resource List

| Resource                     | Description                                                                                  |
| ---------------------------- | -------------------------------------------------------------------------------------------- |
| Resource Group - Core **\*** | Used to logically group core infrastructure                                                  |
| AKS **\***                   | Azure Kubernetes Service                                                                     |
| Public DNS Record            | DNS record pointing Ingress (via application gateway**\*** and internal load balancer**\***) |
| ACR **\***                   | Azure Container Registry                                                                     |
| Namespace: `{env}-api`       | Kubernetes namespace for the environment                                                     |
| Ingress                      | Kubernetes Ingress to handle routing to Service                                              |
| Service                      | Kubernetes Service to handle routing to Deployment Pods                                      |
| Deployment                   | Kubernetes Deployment for managing Pods                                                      |
| Resource Group - API         | Used to logically group API specific infrastructure                                          |
| Cosmos DB                    | Azure managed NoSQL database                                                                 |

**\*** _Resource is created by the core infrastructure deployment._

## Deploying

All infrastructure is deployed using [Terraform](https://www.terraform.io/) that is included with the generated code.

### Pipelines

The following pipelines are currently supported for automating the deployment:

- [Azure DevOps](./pipeline_netcore.md)
