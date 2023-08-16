---
id: core_data_platform_deployment_azure
title: Infrastructure Deployment
sidebar_label: Infrastructure Deployment
hide_title: false
hide_table_of_contents: false
description: Infrastructure deployment
keywords:
  - stacks cli
  - data
  - infrastructure
  - azure
  - template
---

## Prerequisite for Infrastructure Deployment 

* Azure subscription – for deploying the solution into
* Azure service principal (Application) – needs permissions to deploy and configure all required
resources into the target subscription
* Azure DevOps project – for running CI/CD pipelines and storing project variables
* Azure Pipeline variable groups ,please see [Requirements](https://stacks.amido.com/docs/workloads/azure/data/requirements_data_azure)
for details on required variable groups used in Data platform Infrastructure Azure Pipelines in Stacks.



## Infrastructure Repository Directory

Core data platform resources are defined within Terraform templates and grouped inside
[deploy/azure](https://github.com/amido/stacks-azure-data/tree/main/deploy/azure) directory.
There are two subfolders in this directory:

* `infra`
* `networking`

PLease see [Infrastructure](https://stacks.amido.com/docs/workloads/azure/data/infrastructure_data_azure) for more details.

`infra` subfolder contains the Data Platform resource defination, at its core using [Stacks Azure Terraform module](https://github.com/amido/stacks-terraform/tree/master/azurerm/modules). Please modules used in Data Platform as follow:

* Azure Databricks Workspace [azurerm-adb](https://github.com/amido/stacks-terraform/tree/master/azurerm/modules/azurerm-adb)
* Azure Data Factory [azurerm-adf](https://github.com/amido/stacks-terraform/tree/master/azurerm/modules/azurerm-adf)
* Azure Data Lake Storage Gen2/Azure Blob Storage [azurerm-adls](https://github.com/amido/stacks-terraform/tree/master/azurerm/modules/azurerm-adls)
* Key Vault [azurerm-kv](https://github.com/amido/stacks-terraform/tree/master/azurerm/modules/azurerm-kv)
* Azure SQL Database [azurerm-sql](https://github.com/amido/stacks-terraform/tree/master/azurerm/modules/azurerm-sql)

`networking` subfolder contains configurations for the created network,subnetworks and self hosted agent,at its core using [Stacks Azure Terraform module](https://github.com/amido/stacks-terraform/tree/master/azurerm/modules)
Stacks Terraform module.
Please modules used as follow:
* [azurerm-hub-spoke](https://github.com/amido/stacks-terraform/tree/master/azurerm/modules/azurerm-hub-spoke)
* [azurerm-vmss](https://github.com/amido/stacks-terraform/tree/master/azurerm/modules/azurerm-vmss)

## Infrastructure Pipeline Directory

YAML file containing a template Azure DevOps CI/CD pipeline for building and deploying the core infrastructure, named `air-infrastructure-data.yml` is configured in the
[build/azDevOps/azure](https://github.com/amido/stacks-azure-data/tree/main/build/azDevOps/azure) folder.

YAML file containing a template Azure DevOps CI/CD pipeline for networking and self hosted agent infrastructure, named `air-infrastructure-data-network.yml` is configured in the
[build/azDevOps/azure/network](https://github.com/amido/stacks-azure-data/tree/main/build/azDevOps/azure/network) folder.

## Deploy Infrastructure in non-production environment

YAML file `air-infrastructure-data.yml` should be added as the definition for a new pipeline in Azure DevOps.

1. Sign-in to your Azure DevOps organization and go to your project
2. Go to Pipelines, and then select New pipeline
3. Name the new pipeline eg `amido.stacks-data-infrastructure`
4. For the pipeline definition, specify the YAML file in the project repository feature branch (e.g. `air-infrastructure-data.yml`) and save
5. The new pipeline will require access to any Azure DevOps pipeline variable groups specified in the pipeline YMAL. Under each variable group, go to 'Pipeline permissions' and add the pipeline.
6. Run the  pipeline

Running this pipeline in Azure DevOps will deploy the artifacts into the non-production (nonprod) environment. If successful, the generated resources will now be available in the nonprod Stacks environment.

## Deploy new workload in further environments


* Deployment to the non-production (nonprod) environment is triggered on a feature branch when a pull request is open
* Deployment to the production (prod) environment is triggered on merging to the `main` branch, followed by manual approval of the release step.

## TODO

Documentation on using Stacks CLI to deploy core infrastructure components.
Commands, configurations, requirements.
