---
id: core_infrastructure_aws
title: AWS Core Infrastructure
sidebar_label: Core Infrastructure
description: How to bootstrap the Azure tenant
keywords:
  - github actions
  - workload
  - pipeline
  - pipeline template
  - resources
---

import HideNavigation from "../../../src/components/HideNavigation/HideNavigation";
import useBaseUrl from '@docusaurus/useBaseUrl';

The core infrastructure is the foundation for all other Ensono Stacks Workloads. As, in most cases, this will be the first part of Ensono Stacks that you deploy we will also cover bootstrapping your AWS tenant.

## Resources Provisioned

Both the diagram and resource list below are for a single environment. By default, the pipeline template will create two environments (nonprod and prod).

### Diagram

<img alt="AWS Core Infrastructure" src={useBaseUrl('img/aws_core_infrastructure.png')} />

### Resource List

| Resource              | Description                                         |
| --------------------- | --------------------------------------------------- |
| Virtual Private Cloud | Fundamental building block for the network          |
| Public Subnet         | Dedicated subnet required for Network Load Balancer |
| Network Load Balancer | Web traffic load balancer                           |
| Private Subnet        | Subnet used by the EKS cluster                      |
| EKS                   | Amazon Elastic Kubernetes Service                   |
| Route 53              | Hosted service for DNS domain                       |
| IAM                   | Identity and access management                      |
| KMS                   | Cryptographic keys and secrets management service   |

## Deploying

### Bootstrap the AWS tenant

This process only needs to be run once on an administrators workstation.

The administrator will need the permissions that allow them to:

1. Create an IAM User for use with Terraform. This will require permissions to read and create all the core resources.
   - Make note of the Access Key ID and Secret Access Key
2. Create an [S3 Bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html) for storing Terraform state.
   - Take note of the S3 bucket name.
3. Create a [DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/getting-started-step-1.html) table for locking Terraform state.

### Pipelines

The following pipelines are currently supported for automating the deployment:

- [GitHub Actions](./pipelines/github_actions.md)
