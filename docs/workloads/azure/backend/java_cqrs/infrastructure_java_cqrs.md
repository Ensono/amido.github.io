---
id: infrastructure_java_cqrs
title: Java Rest API with CQRS - Azure Infrastructure
sidebar_label: Infrastructure
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Overview

This page present the high level design of the reference implementation of the Java Stacks
application which is based on Spring Boot Rest API with CQRS.

**This page assumes that the core infrastructure has already been provisioned. Instructions and additional information on the core infrastructure can be found [here](../../../../infrastructure/azure/core_infrastructure.md)**

### Diagram

<img alt="Azure Java API Infrastructure" src={useBaseUrl('img/azure_java_api_infrastructure.png')} />

### Resource List

| Resource                | Description                                                                          |
| ----------------------- | ------------------------------------------------------------------------------------ |
| Resource Group - Core\* | Used to logically group core infrastructure                                          |
| AKS\*                   | Azure Kubernetes Service                                                             |
| Public DNS Record       | DNS record pointing Ingress (via application gateway\* and internal load balancer\*) |
| ACR\*                   | Azure Container Registry                                                             |
| Namespace: {env}-api    | Kubernetes namespace for the environment                                             |
| Ingress                 | Kubernetes Ingress to handle routing to Service                                      |
| Service                 | Kubernetes Service to handle routing to Deployment Pods                              |
| Deployment              | Kubernetes Deployment for managing Pods                                              |
| Resource Group - API    | Used to logically group API specific infrastructure                                  |
| Cosmos DB               | Azure managed NoSQL database                                                         |

\* Resource is created by the core infrastructure deployment.
