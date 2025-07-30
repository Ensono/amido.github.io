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

## Infrastructure Deployment

The following tools are required for deploying the infrastructure needed for supporting the Ensono Stacks Data platform.

| Tool | Notes | Required in CI/CD |
|---|---|---|
| [Stacks CLI](https://github.com/Ensono/stacks-cli) | Used to scaffold the new data project | N |
| [TaskCTL](https://github.com/Ensono/tastctl) | Runs the tasks and pipelines as defined in the project. Uses the Ensono Independent Runner. | 
| [VSCode](https://code.visualstudio.com/Download) | IDE for editing the configuration required for the deployment of the platform. | N |
| [Docker Desktop](https://www.docker.com/products/docker-desktop/) <br /> [Rancher Desktop](https://rancherdesktop.io/) | Docker engine so that the Ensono Independent Runner can be used, <br /> (Only one of these engines is required) | Y (Docker engine)
| [Terraform](https://www.terraform.io) | Terraform is only required for local testing or if not using Ensono Independent Runner | Y |

## Local development

The following tools are required for developing the data pipelines 

| Tool | Notes |
|---|---|
| [Python 3.9 - 3.11](https://www.python.org/downloads/)                                                 | Use of Python 3.12+ is not currently supported. You may wish to use a utility such as [pyenv](https://pypi.org/project/pyenv/) to manage your local versions of Python. |
| [Poetry](https://python-poetry.org/docs/)                                                              | Used for Python dependency management in Stacks.                                                                                                                        |
| (Windows users) a Linux distribution, e.g. [WSL](https://docs.microsoft.com/en-us/windows/wsl/install) | A Unix-based environment is recommended for developing the solution (e.g. macOS, Linux, or WSL for Windows users).                                                      |
| Java 8/11/17 runtime                                                                                   | Optional: Java is required to develop and run tests using PySpark locally - see [Spark documentation](https://spark.apache.org/docs/latest/).                           |
| [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli)                             | Optional: Azure CLI allows you to interact with Azure resources locally, including running end-to-end tests.                                                            |


See [development quickstart](./dev_quickstart_data_azure.md) for further details on getting start with developing the solution.

## Git repository

A remote Git repository is required for storing and managing a data project's code. This can be in either **GitHub** or **Azure DevOps**. When scaffolding a new data project, you will need the HTTPS URL of the repo.

While Ensono Stacks supports storing code in both GitHub and Azure DevOps, it does not currently support CI/CD pipelines using GitHub Actions. Requirements for Azure DevOps are detailed in the [CI/CD - Azure DevOps](#cicd---azure-devops) section below.

The examples and quickstart documentation assume that `main` is the primary branch in the repo.

## Azure subscription

In order to deploy an Ensono Stacks Data Platform into Azure, you will need:

* One or more Azure subscriptions – for deploying the solution into
* Azure service principal (Application) – must have `Contributor` access to deploy and configure all required resources into the target subscription(s)
  * Client ID
  * Client Secret
  * Subscription ID
  * Tenant ID

### Terraform state storage

Deployment of Azure resources in Ensono Stacks is done through Terraform. Within your Azure subscription, you must provision a [storage container](https://learn.microsoft.com/en-us/azure/storage/blobs/blob-containers-portal) to hold [Terraform state data](https://developer.hashicorp.com/terraform/language/state). Details regarding this storage are required when you first scaffold the project using the Ensono Stacks CLI. Therefore, once you have provisioned the storage container, make note of the following:

* Storage account name
* Resource group name
* Container name

## CI/CD - Azure DevOps

CI/CD processes within the Ensono Stacks Data Platform are currently designed to be run in Azure DevOps Pipelines[^1]. Therefore, it is a requirement to [create a project in Azure DevOps](https://learn.microsoft.com/en-us/azure/devops/organizations/projects/create-project?view=azure-devops&tabs=browser).

[^1]: More general information on [using Azure Pipelines in Stacks](/docs/infrastructure/azure/pipelines/azure_devops) is also available.

### Azure Pipelines variable groups

So that ADO can deploy the resource into Azure, credentials need to be supplied for each of the subscriptions that need to be deployed to. It is envisaged that there will be up to two subscriptions:

| Description | Name | Environments |
|-------------|------|--------------|
| Non production subscription | `nonprod` | `dev`, `qa` |
| Production subscription | `prod` | `uat`, `prod` |

The expected names of the variable groups are:

* azure-sp-creds
* azure-sp-creds-prod

The following table details the information that should be in each group.

| Variable Name                    | Description                                  |
|----------------------------------|----------------------------------------------|
| ARM_CLIENT_ID               | Client ID of the service princiapl             |
| ARM_CLIENT_SECRET               | Secret associated with the specific Client ID            |
| ARM_SUBSCRIPTION_ID               | ID of the subscription that the Service Principal has access to                            |
| ARM_TENANT_ID | Azure tenant that the specific subscription belongs to                             |
| AZDO_PERSONAL_ACCESS_TOKEN                   | Azure DevOps PAT token so that Terraform can create the the variable groups                               |


<p />

The Terraform for the project now creates Azure DevOps variable groups from the outputs. This means that the values in the group are always current date because they are updated on each run of Terraform.

The variable groups will be automatically created based on the name of the company, project, component, stage and environment. The following shows examples of what will be in each type of group.

:::note Company name details
To illustrate the names of the variable groups the following is used as an example

* Company: `ensono`
* Project: `analytics`
* Component: `data`
* Environment: `dev`
:::

The name of the resource groups is built up using the following standard:

```
<company>-<project>-<component>-<stage>-<environment>
```

* ensono-analytics-data-networking-dev
* ensono-analytics-data-infra-dev

This allows the name to be predictable so when the project is scaffolded the names are correctly set in the Azure DevOps pipeline file.

:::note Networking variables

The variable group for networking, `ensono-analytics-data-networking-dev` is only created of the networking stage is deployed to create a private network.

:::

<details>
  <summary>ensono-analytics-data-networking-dev</summary>

| Variable Name | Description | Example |
|---------------|-------------|---------|
| adf_private_nsg_subnet_association_id | ID of the subnet association for private NSG | /subscriptions/36ad8b14-a636-4c43-9278-7905d8af8f17/resourceGroups/ensono-data-euw-data-dev-network/providers/Microsoft.Network/virtualNetworks/ensono-data-euw-data-dev/subnets/ensono-data-euw-data-dev-adf-priv |
| adf_public_nsg_subnet_association_id | ID of the subnet association for public NSG | /subscriptions/36ad8b14-a636-4c43-9278-7905d8af8f17/resourceGroups/ensono-data-euw-data-dev-network/providers/Microsoft.Network/virtualNetworks/ensono-data-euw-data-dev/subnets/ensono-data-euw-data-dev-adf-pub |
| ado_agent_pool_name | Name of the agent pool that has been created in ADO | ensono-data-euw-hub-agent-pool |
| ado_create_variable_group | Whether variable groups have been created | true |
| ado_org_url | URL of the ADO organisation | https://dev.azure.com/ensonodigitaluk |
| ado_project_id | Name of the project in ADO that vbariable groups and agent pools have been aligned to | Stacks |
| build_agent_subnet_name | Name of the build agent subnet | build-agent |
| dns_zone_resource_group_name | Name of the resource group for the DNS zone | ensono-data-euw-hub |
| enable_private_networks | Whether private networks have been enabled | true |
| hub_resource_group_name | Name of the hub resource group | ensono-data-euw-hub |
| hub_vnet_name | Name of the hub resource group | ensono-data-euw-hub |
| name_company | Name of the company | ensono |
| nat_gateway_id | Resource ID of the NAT gatewaty | /subscriptions/36ad8b14-a636-4c43-9278-7905d8af8f17/resourceGroups/ensono-data-euw-data-dev-network/providers/Microsoft.Network/natGateways/ensono-data-euw-data-dev |
| nat_gateway_pip_id | Resource ID of the NAT gateway public IP address | /subscriptions/36ad8b14-a636-4c43-9278-7905d8af8f17/resourceGroups/ensono-data-euw-data-dev-network/providers/Microsoft.Network/publicIPAddresses/ensono-data-euw-data-dev |
| pe_subnet_id | Resource ID of the private endpoint subnet | /subscriptions/36ad8b14-a636-4c43-9278-7905d8af8f17/resourceGroups/ensono-data-euw-data-dev-network/providers/Microsoft.Network/virtualNetworks/ensono-data-euw-data-dev/subnets/ensono-data-euw-data-dev-pe |
| pe_subnet_name | Name of the private endpoint subnet | ensono-data-euw-data-dev-pe |
| pe_subnet_prefix | Network prefix of the private endpoint subnet | ["10.3.1.0/24"] |
| private_subnet_name | Name of the ADF private subnet  | ensono-data-euw-data-dev-adf-priv |
| private_subnet_prefix | Subnet prefix of the ADF private subnet | ["10.3.3.0/24"] |
| public_subnet_name | Name of the public ADF network | ensono-data-euw-data-dev-adf-pub |
| public_subnet_prefix | Subnet prefix of the ADF public network | ["10.3.4.0/24"] |
| vnet_name | Name of the main virtual network | ensono-data-euw-data-dev |
| vnet_resource_group_name | Name of the virtual network resource group | ensono-data-euw-data-dev-network |

</details>

<details>
  <summary>ensono-analytics-data-infra-dev</summary>

| Variable Name | Description | Example |
|---------------|-------------|---------|
| adb_databricks_hosturl | Azure Databricks host url | https://adb-1145164413853524.4.azuredatabricks.net/ |
| adb_databricks_id | Resource ID of the Azure Databricks | /subscriptions/36ad8b14-a636-4c43-9278-7905d8af8f17/resourceGroups/ensono-data-euw-data-dev/providers/Microsoft.Databricks/workspaces/ensono-data-euw-data |
| adf_integration_runtime_name | Name of the Azure Datafactory runtime | adf-managed-vnet-runtime |
| adf_name | Name of the Azure Datafactory | "ensono-data-euw-data" |
| adls_dfs_endpoints | Endpoints of the Azure Data Lake Storage distriubuted file system | ["https://ensodatadeveuwdatatbynco.dfs.core.windows.net/","https://ensodatadeveuwdatatbynad.dfs.core.windows.net/"] |
| adls_storage_account_endpoints | Endpoints of the Azure Data Lake Storage account endpoints| ["https://ensodatadeveuwdatatbynco.blob.core.windows.net/","https://ensodatadeveuwdatatbynad.blob.core.windows.net/"] |
| adls_storage_accounts | List of the Azure Data Lake storage accounts | ["ensodatadeveuwdatatbynco","ensodatadeveuwdatatbynad"] |
| key_vault_id | Resource ID of the Azure Key Vault | /subscriptions/36ad8b14-a636-4c43-9278-7905d8af8f17/resourceGroups/ensono-data-euw-data-dev/providers/Microsoft.KeyVault/vaults/enso-datadeveuw-datatbyn |
| key_vault_uri | URl of the deployed key vault | https://enso-datadeveuw-datatbyn.vault.azure.net/ |
| kv_name | Name of the key vault | enso-datadeveuw-datatbyn |
| private_endpoint_list | List of the private endpoints | `{"adb":"/subscriptions/36ad8b14-a636-4c43-9278-7905d8af8f17/resourceGroups/ensono-data-euw-data-dev/providers/Microsoft.Databricks/workspaces/ensono-data-euw-data","adls":"/subscriptions/36ad8b14-a636-4c43-9278-7905d8af8f17/resourceGroups/ensono-data-euw-data-dev/providers/Microsoft.Storage/storageAccounts/ensodatadeveuwdatatbynad","blob":"/subscriptions/36ad8b14-a636-4c43-9278-7905d8af8f17/resourceGroups/ensono-data-euw-data-dev/providers/Microsoft.Storage/storageAccounts/ensodatadeveuwdatatbynco","kv":"/subscriptions/36ad8b14-a636-4c43-9278-7905d8af8f17/resourceGroups/ensono-data-euw-data-dev/providers/Microsoft.KeyVault/vaults/enso-datadeveuw-datatbyn","sql":"/subscriptions/36ad8b14-a636-4c43-9278-7905d8af8f17/resourceGroups/ensono-data-euw-data-dev/providers/Microsoft.Sql/servers/ensonodataeuwdatatbynsql"}` |
| resource_group_name | Name of the resopurce group for this endpoint | ensono-data-euw-data-dev |
| sql_admin_password | Password for the SQL server | 123456789abcde |

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
