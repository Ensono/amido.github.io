---
id: infrastructure_aws_netcore
title: .NET - AWS Infrastructure
sidebar_label: AWS Infrastructure
description: High level design of the reference implementation of the .NET Ensono Stacks REST API with CQRS.
keywords:
  - .net
  - rest api
  - cqrs
  - pipeline
  - aws
  - elastic container registry
  - elastic kubernetes service
  - dynamodb
  - deployment
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Overview

This page present the high level design of the reference implementation of the .NET Ensono Stacks REST API with CQRS.

<!-- **This page assumes that the core infrastructure has already been provisioned. Instructions and additional information on the core infrastructure can be found [here](../../../../infrastructure/aws/core_infrastructure.md)** -->

Both the diagram and resource list below are for a single environment.

### Diagram

<img alt="AWS .NET API Infrastructure" src={useBaseUrl('img/aws_rest_api_infrastructure.png')} />

### Resource List

| Resource               | Description                                                                                          |
| ---------------------- | ---------------------------------------------------------------------------------------------------- |
| EKS **\***             | Amazon Elastic Kubernetes Service                                                                    |
| Public DNS Record      | DNS record pointing Ingress (via application load balancer **\*** and internal load balancer **\***) |
| ECR **\***             | Elastic Container Registry                                                                           |
| Namespace: `{env}-api` | Kubernetes namespace for the environment                                                             |
| Ingress                | Kubernetes Ingress to handle routing to Service                                                      |
| Service                | Kubernetes Service to handle routing to Deployment Pods                                              |
| Deployment             | Kubernetes Deployment for managing Pods                                                              |
| DynamoDB               | Amazon managed NoSQL database                                                                        |

**\*** _Resource is created by the core infrastructure deployment._

## Deploying

All infrastructure is deployed using [Terraform](https://www.terraform.io/) that is included with the generated code.

### Pipelines

The following pipelines are currently supported for automating the deployment:

- [GitHub Action](./pipeline_gha_netcore.md)
