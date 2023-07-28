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

Please expand the following lists to see the required variables.

<details>
  <summary>amido-stacks-de-pipeline-env</summary>

  * ADLS_DataLake_URL: Azure Data Lake Storage Gen2 URL
  * azure_subscription_id
  * azure-client-secret
  * blob_adls_storage: Azure Data Lake Storage Gen2 name
  * blob_configStorage: Blob storage name
  * Blob_ConfigStore_serviceEndpoint: Blob service URL
  * databricksHost: Databricks UI URL
  * databricksWorkspaceResourceId
  * datafactoryname
  * github_token
  * integration_runtime_name
  * KeyVault_baseURL: Vault URI
  * keyvault_name: Key Vault name
  * location: Azure region
  * pe_subnet_prefix: Subnet CIDR, e.g. ["10.3.1.0/24"]
  * private_subnet_prefix: Subnet CIDR, e.g. ["10.3.1.0/24"]
  * public_subnet_prefix: Subnet CIDR, e.g. ["10.3.1.0/24"]
  * resource_group: Name of the resource group
  * sql_connection: Connection string to Azure SQL database

</details>

<details>
  <summary>amido-stacks-euw-de-env-network</summary>

  * pe_resource_group_name: Name of the resource group to provision private VNet to
  * pe_vnet_name: Private VNet name
  * pe_subnet_name: Name of the subnet to provision private endpoints into

</details>

<details>
  <summary>stacks-credentials-env-kv</summary>

  * azure-client-id
  * azure-client-secret
  * azure-subscription-id
  * azure-tenant-id

</details>

Please see [Azure DevOps Pipelines](https://stacks.amido.com/docs/infrastructure/azure/pipelines/azure_devops)
for general information on using Azure Pipelines in Stacks.
