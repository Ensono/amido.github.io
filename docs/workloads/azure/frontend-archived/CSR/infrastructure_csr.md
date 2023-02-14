---
id: infrastructure_csr
title: CSR Application - Azure Infrastructure
sidebar_label: Infrastructure
hide_title: false
hide_table_of_contents: false
description: CSR Application - Azure Infrastructure
keywords:
  - rest 
  - api
  - csr
  - application
  - template
  - azure
  - infrastructure
  - client 
  - side 
  - rendering
  - client side rendering
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Overview

This page present the high level design of the reference implementation of the Stacks client-side rendering application.

**This page assumes that the core infrastructure has already been provisioned. Instructions and additional information on the core infrastructure can be found [here](../../../../infrastructure/azure/core_infrastructure.md)**

Both the diagram and resource list below are for a single environment.

### Diagram

<img alt="Azure CSR App Infrastructure" src={useBaseUrl('img/azure_csr_app_infrastructure.png')} />

### Resource List

| Resource             | Description                                                |
| -------------------- | ---------------------------------------------------------- |
| Resource Group - APP | Used to logically group app specific infrastructure        |
| Public DNS Record    | DNS record pointing to the CDN                             |
| CDN Profile          | Azure Content Delivery Network with storage account origin |
| Storage Account      | Azure Storage containing application                       |

## Deploying

### Pipelines

The following pipelines are currently supported for automating the deployment:

- [Azure DevOps](./pipeline_csr.md)

### Running Locally

Currently, vars.tf and provider configuration is not
automatically updated. Future iterations will include this.

The safest way to run and maintain this locally is to rely on Docker and environment
variables as that is the way the pipeline will trigger the
executions of Terraform.

Sample commands with example environment vars:

```bash
# Navigate to the infra directory
cd ${YOUR_DIRECTORY_PATH}/deploy/azure/app

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
export TF_VAR_name_company=amido \
TF_VAR_name_project=example \
TF_VAR_name_component=frontend \
TF_VAR_name_environment=dev \
TF_VAR_name_stage=dev \
TF_VAR_dns_resource_group=amido-example-nonprod-uks-core \
TF_VAR_resource_group_location=uksouth \
TF_VAR_dns_zone=nonprod.amidostacks.com \
TF_VAR_dns_record=dev \
TF_VAR_app_insights_name=amido-example-nonprod-uks-core

# Initial Terraform. Replace the example values.
terraform init \
-backend-config="resource_group_name=amido-stacks-terraform" \
-backend-config="storage_account_name=amidostacksterraform" \
-backend-config="container_name=tfstate" \
-backend-config="key=example-frontend"

# Select or create the "dev" workspace.
terraform workspace select dev || terraform workspace new dev

# Check the plan matches your expected changes.
terraform plan
```
