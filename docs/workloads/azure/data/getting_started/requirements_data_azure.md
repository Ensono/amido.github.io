---
id: requirements_data_azure
title: Prerequisites
sidebar_label: Prerequisites
hide_title: false
hide_table_of_contents: false
description: Prerequisites for developing with Ensono Stacks Data Platform
keywords:
  - requirements
  - prerequisites 
---

## Local development

The following tools are recommended for developing while using the Ensono Stacks data solution:

| Tool                                                                                                   | Notes                                                                                                                                                                   |
|--------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Python 3.9 - 3.11](https://www.python.org/downloads/)                                                 | Use of Python 3.12+ is not currently supported. You may wish to use a utility such as [pyenv](https://pypi.org/project/pyenv/) to manage your local versions of Python. |
| [Poetry](https://python-poetry.org/docs/)                                                              | Used for Python dependency management in Stacks.                                                                                                                        |
| (Windows users) a Linux distribution, e.g. [WSL](https://docs.microsoft.com/en-us/windows/wsl/install) | A Unix-based environment is recommended for developing the solution (e.g. macOS, Linux, or WSL for Windows users).                                                      |
| Java 8/11/17 runtime                                                                                   | Optional: Java is required to develop and run tests using PySpark locally - see [Spark documentation](https://spark.apache.org/docs/latest/).                           |
| [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli)                             | Optional: Azure CLI allows you to interact with Azure resources locally, including running end-to-end tests.                                                            |

See [development quickstart](./dev_quickstart_data_azure.md) for further details on getting start with developing the solution.

## Git repository

A remote Git repository is required for storing and managing a data project's code. This can be in either **GitHub** or **Azure DevOps**. When scaffolding a new data project, you will need the HTTPS URL of the repo.

While Ensono Stacks supports storing code in both GitHub and Azure DevOps, it does not currently support CI/CD pipelines using GitHub Actions. Requirements for Azure DevOps are detailed in the [CI/DC - Azure DevOps](#cicd---azure-devops) section below.

The examples and quickstart documentation assume that `main` is the primary branch in the repo.

## Azure subscription

In order to deploy an Ensono Stacks Data Platform into Azure, you will need:

* One or more Azure subscriptions – for deploying the solution into
* Azure service principal (Application) – must have `Contributor` access to deploy and configure all required
resources into the target subscription(s)

### Terraform state storage

Deployment of Azure resources in Ensono Stacks is done through Terraform. Within your Azure subscription, you must provision a [storage container](https://learn.microsoft.com/en-us/azure/storage/blobs/blob-containers-portal) to hold [Terraform state data](https://developer.hashicorp.com/terraform/language/state). Details regarding this storage are required when you first scaffold the project using the Ensono Stacks CLI. Therefore, once you have provisioned the storage container, make note of the following:

* Storage account name
* Resource group name
* Container name

## CI/CD - Azure DevOps

CI/CD processes within the Ensono Stacks Data Platform are currently designed to be run in Azure DevOps Pipelines[^1]. Therefore, it is a requirement to [create a project in Azure DevOps](https://learn.microsoft.com/en-us/azure/devops/organizations/projects/create-project?view=azure-devops&tabs=browser).

[^1]: More general information on [using Azure Pipelines in Stacks](/docs/infrastructure/azure/pipelines/azure_devops) is also available.

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

:::note Networking variables

The variables under `amido-stacks-euw-de-env-network` are only required if you want to provision the infrastructure within a private network.

:::

<details>
  <summary>amido-stacks-de-pipeline-env</summary>

| Variable Name                    | When Needed      | Description                                  |
|----------------------------------|------------------|----------------------------------------------|
| ADLS_DataLake_URL                | After core infra | Azure Data Lake Storage Gen2 URL             |
| blob_adls_storage                | After core infra | Azure Data Lake Storage Gen2 name            |
| blob_configStorage               | After core infra | Blob storage name                            |
| Blob_ConfigStore_serviceEndpoint | After core infra | Blob service URL                             |
| databricksHost                   | After core infra | Databricks URL                               |
| databricksWorkspaceResourceId    | After core infra | Databricks workspace resource id             |
| datafactoryname                  | After core infra | Azure Data Factory name                      |
| github_token                     | After core infra | GitHub PAT token, see below for more details |
| integration_runtime_name         | After core infra | Azure Data Factory integration runtime name  |
| KeyVault_baseURL                 | After core infra | Vault URI                                    |
| keyvault_name                    | After core infra | Key Vault name                               |
| location                         | Project start    | Azure region                                 |
| resource_group                   | Project start    | Name of the resource group                   |
| sql_connection                   | After core infra | Connection string to Azure SQL database      |

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

### Github PAT Token

Within the pipelines we use an Azure DevOps task called UsePythonVersion@0 which allows us to install a specific version of Python onto the build agent. If the Python version doesn't exist on the build agent, it will download it from [Github Actions](https://github.com/actions/python-versions) however this requires a Github PAT Token otherwise you may hit by a GitHub anonymous download limit.
You can create a token by following this [guide](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).
You do not require any permissions on this token because GitHub only needs to read your public profile.

### Azure Pipelines Service Connections

Service Connections are used in Azure DevOps Pipelines to connect to external services, like Azure and GitHub.
You must create the following Service Connections:

| Name                   | When Needed   | Description                                                                                                                                                                                                                                                                                                                  |
|------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Stacks.Pipeline.Builds | Project start | The Service Connection to Azure. The service principal or managed identity that is used to create the connection must have contributor access to the Azure Subscription. See [Microsoft documentation](https://learn.microsoft.com/en-us/azure/devops/pipelines/library/connect-to-azure?view=azure-devops) for more information.               |
| GitHubReleases         | Project start | The Service Connection to Github for releases. The access token that is used to create the connection must have read/write access to the GitHub repository. See [Microsoft documentation](https://learn.microsoft.com/en-us/azure/devops/pipelines/library/service-endpoints?view=azure-devops#github-service-connection) for more information. |
