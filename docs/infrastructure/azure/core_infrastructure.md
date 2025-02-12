---
id: core_infrastructure
title: Azure Core Infrastructure
sidebar_label: Core Infrastructure
description: How to bootstrap the Azure tenant
keywords:
  - azure devops
  - workload
  - pipeline
  - pipeline template
  - resources
---

import HideNavigation  from "../../../src/components/HideNavigation/HideNavigation";
import useBaseUrl from '@docusaurus/useBaseUrl';

The core infrastructure is the foundation for all other Ensono Stacks Workloads. As, in most cases, this will be the first part of Ensono Stacks that you deploy we will also cover bootstrapping your Azure tenant.

## Resources Provisioned

Both the diagram and resource list below are for a single environment. By default, the pipeline template will create two environments (nonprod and prod).

### Diagram

<img alt="Azure Core Infrastructure" src={useBaseUrl('img/azure_core_infrastructure.png')} />

### Resource List

| Resource                  | Description                                                          |
| ------------------------- | -------------------------------------------------------------------- |
| Resource Group            | Used to logically group infrastructure                               |
| Virtual Network           | Fundamental building block for the private network                   |
| Subnet - AGW              | Dedicated subnet required for Application Gateway                    |
| Application Gateway       | Web traffic load balancer                                            |
| Public IP                 | IP address associated with the Application Gateway                   |
| Subnet - k8s              | Subnet used by the AKS cluster                                       |
| AKS                       | Azure Kubernetes Service                                             |
| Resource Group: Node Pool | AKS created resource group for nodes, load balancers, etc.           |
| Internal Load Balancer    | Load balancer used with NGINX ingress                                |
| VM Scale Set: Nodes       | Virtual Machine scaling for AKS                                      |
| NGINX Ingress             | Nginx ingress Kubernetes namespace, deployment and service           |
| Internal DNS Zone         | Custom DNS domain                                                    |
| Public DNS Zone           | Hosted service for DNS domain                                        |
| Application Insights      | Application performance management, monitoring and analytics service |
| Log Analytics Workspace   | Log analytics with container insights                                |
| Managed Identity          | Managed Identity with aadpodidentity binding                         |
| ACR                       | Azure Container Registry                                             |
| Key Vault                 | Cryptographic keys and secrets management service                    |

## Deploying

### Bootstrap the Azure tenant

The first step is to create the Azure tenant and subscription. This process only needs to be run once on an administrators workstation.

The administrator will need the following permissions:

- Azure AD "Global Administrator" role for the Azure AD Tenant
- IAM subscription owner

With owner privileges:

1. Create an [Azure Service Principal](https://www.terraform.io/docs/providers/azurerm/guides/service_principal_client_secret.html) for use with Terraform.
   - Make note of the TenantID, SubscriptionID, ClientID and ClientSecret
2. Create a [Blob Storage instance](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create) and [container](https://docs.microsoft.com/en-us/cli/azure/storage/container?view=azure-cli-latest#az_storage_container_create) for storing Terraform state.
   - Take note of the storage account and container name.

### Pipelines

The following pipelines are currently supported for automating the deployment:

- [Azure DevOps](./pipelines/azure_devops.md)
