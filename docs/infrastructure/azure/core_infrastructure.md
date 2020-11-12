---
id: core_infrastructure
title: Azure Core Infrastructure
sidebar_label: Core Infrastructure
description: How to bootstrap the Azure tenant
keywords:
  - azure devops
  - scaffolding cli
  - workload
  - pipeline
  - pipeline template
  - resources
---

import HideNavigation  from "../../../src/pages/HideNavigation";
import useBaseUrl from '@docusaurus/useBaseUrl';

The core infrastructure is the foundation for all other Stacks Workloads. As, in most cases, this will be the first part of Stacks that you deploy we will also cover bootstrapping your Azure tenant.

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

### Using the Scaffolding CLI

The [Amido Stacks Scaffolding CLI](https://www.npmjs.com/package/@amidostacks/scaffolding-cli) can be used to create a project consisting of the core infrastructure as code scripts and the deployment pipeline.

We are supporting and running [node@12](https://nodejs.org/en/about/releases/).
Please ensure that your local environment has the correct version [installed](https://nodejs.org/en/download/).

To run the Scaffolding CLI, use the following command:

```bash
npx @amidostacks/scaffolding-cli@latest run -i
```

You will be asked a number of questions. Make sure to select `Azure` and `Cloud platform shared services`.

<!-- TODO: Example video here -->

### Pipelines

The following pipelines are currently supported for automating the deployment:

- [Azure DevOps](./pipelines/azure_devops.md)

### Running Locally

Currently, vars.tf and provider configuration is not
automatically updated. Future iterations will include this.

The safest way to run and maintain this locally is to rely on Docker and environment
variables as that is the way the pipeline will trigger the
executions of Terraform.

Sample commands with example environment vars:

```bash
# Navigate to the infra directory
cd ${YOUR_DIRECTORY_PATH}/deploy/azure/infra

# Run Amido Terraform Docker container
docker run -v $(pwd):/usr/data --rm -it amidostacks/ci-tf:0.0.4 /bin/bash

###########################################################################
# All commands from this point should be executed in the Docker container #
###########################################################################

# Navigate to /usr/data directory
cd /usr/data

# Export Azure Credentials. Replace the example values.
export ARM_CLIENT_ID=1111-2222-3333-444 \
ARM_CLIENT_SECRET=1111-2222-3333-4444 \
ARM_SUBSCRIPTION_ID=1111-2222-3333-444 \
ARM_TENANT_ID=1111-2222-3333-444

# Export Terraform variables. Replace the example values.
export TF_VAR_resource_group_location=uksouth \
TF_VAR_name_company=amido \
TF_VAR_name_project=example \
TF_VAR_name_component=core \
TF_VAR_name_environment=nonprod \
TF_VAR_create_acr=true \
TF_VAR_acme_email=example@amidostacks.com \
TF_VAR_is_cluster_private=true \
TF_VAR_cluster_version=1.17.11 \
TF_VAR_stage=nonprod \
TF_VAR_key_vault_name=example-core-nonprod \
TF_VAR_dns_zone=nonprod.amidostacks.com \
TF_VAR_internal_dns_zone=nonprod.amidostacks.internal

# Initial Terraform. Replace the example values.
terraform init \
-backend-config="resource_group_name=amido-stacks-terraform" \
-backend-config="storage_account_name=amidostacksterraform" \
-backend-config="container_name=tfstate" \
-backend-config="key=example-core"

# Select or create the "nonprod" workspace.
terraform workspace select nonprod || terraform workspace new nonprod

# Check the plan matches your expected changes. 
terraform plan
```

<HideNavigation prev />
