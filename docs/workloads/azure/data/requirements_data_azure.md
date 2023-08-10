---
id: requirements_data_azure
title: Requirements
sidebar_label: Requirements
hide_title: false
hide_table_of_contents: false
description: Requirements
keywords:
  - requirements
---

## Local development

* Python 3.9+
* [Poetry](https://python-poetry.org/docs/)
* (Windows users) A Linux distribution, e.g. [WSL2](https://docs.microsoft.com/en-us/windows/wsl/install)
* Java 8/11/17 as in the [Spark documentation](https://spark.apache.org/docs/latest/)

## Azure

* Azure subscription – for deploying the solution into
* Azure service principal (Application) – needs permissions to deploy and configure all required
resources into the target subscription
* Azure DevOps project – for running CI/CD pipelines and storing project variables

### Azure Pipelines variable groups

Our blueprint solution expects the following [variable groups](https://learn.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups?view=azure-devops&tabs=yaml)
to exist in your Azure DevOps project's Pipelines Library:

* amido-stacks-de-pipeline-_env_
* amido-stacks-euw-de-_env_-network
* stacks-credentials-_env_-kv

Where _env_ can be either `nonprod` or `prod`.

Please refer to the following lists to identify the necessary variables for your project.
The specifics regarding when each variable is required have also been provided. Generally,
the variables fall into one of two categories based on the time of requirement: 'Project Start',
denoting variables required at the very outset of the project, and 'After Core Infrastructure
Deployment', referring to variables required after the fundamental infrastructure has been deployed.

<details>
  <summary>amido-stacks-de-pipeline-env</summary>

| Variable Name                    | When Needed      | Description                                 |
|----------------------------------|------------------|---------------------------------------------|
| ADLS_DataLake_URL                | After core infra | Azure Data Lake Storage Gen2 URL            |
| blob_adls_storage                | After core infra | Azure Data Lake Storage Gen2 name           |
| blob_configStorage               | After core infra | Blob storage name                           |
| Blob_ConfigStore_serviceEndpoint | After core infra | Blob service URL                            |
| databricksHost                   | After core infra | Databricks URL                              |
| databricksWorkspaceResourceId    | After core infra | Databricks workspace resource id            |
| datafactoryname                  | After core infra | Azure Data Factory name                     |
| github_token                     | After core infra | Github token                                |
| integration_runtime_name         | After core infra | Azure Data Factory integration runtime name |
| KeyVault_baseURL                 | After core infra | Vault URI                                   |
| keyvault_name                    | After core infra | Key Vault name                              |
| location                         | Project start    | Azure region                                |
| resource_group                   | Project start    | Name of the resource group                  |
| sql_connection                   | After core infra | Connection string to Azure SQL database     |

</details>

<details>
  <summary>amido-stacks-euw-de-env-network</summary>

| Variable Name                  | When Needed   | Description                                             |
|--------------------------------|---------------|---------------------------------------------------------|
| databricks_private_subnet_name | Project start | Name of the private databricks subnet                   |
| databricks_public_subnet_name  | Project start | Name of the public databricks subnet                    |
| pe_resource_group_name         | Project start | Name of the resource group to provision private VNet to |
| pe_subnet_name                 | Project start | Name of the subnet to provision private endpoints into  |
| pe_subnet_prefix               | Project start | Subnet CIDR, e.g. ["10.3.1.0/24"]                       |
| pe_vnet_name                   | Project start | Private VNet name                                       |
| private_subnet_prefix          | Project start | Subnet CIDR, e.g. ["10.3.4.0/24"]                       |
| public_subnet_prefix           | Project start | Subnet CIDR, e.g. ["10.3.3.0/24"]                       |

</details>

<details>
  <summary>stacks-credentials-env-kv</summary>

| Variable Name         | When Needed   | Description                                           |
|-----------------------|---------------|-------------------------------------------------------|
| azure-client-id       | Project start | Application ID for Azure Active Directory application |
| azure-client-secret   | Project start | Service principal secret                              |
| azure-subscription-id | Project start | Subscription ID                                       |
| azure-tenant-id       | Project start | Directory ID for Azure Active Directory application   |

</details>

Please see [Azure DevOps Pipelines](https://stacks.amido.com/docs/infrastructure/azure/pipelines/azure_devops)
for general information on using Azure Pipelines in Stacks.
