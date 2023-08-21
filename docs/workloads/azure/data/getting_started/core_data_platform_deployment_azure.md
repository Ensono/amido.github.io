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

This section provides an overview of generating a new Data Platform project and deploying core infrastructure for Stacks Data Platform.
This aligns to the workflow shown in the [deployment architecture](../architecture/architecture_data_azure.md#data-engineering-workloads) section.
It assumes all prerequisites are in place, including:

* [Azure](core_data_platform_deployment_azure.md#azure)
* [Azure Pipelines variable groups](core_data_platform_deployment_azure.md#azure-pipelines-variable-groups)

## Step 1: Create/Generate Data Platform project using Stacks CLI

The [Stacks CLI](../../../../stackscli/about) will help you get started with scaffolding your applications and workspaces using Stacks! Through a series of questions the CLI will determine how and what to build for your workspace, helping to accelerate your development process.

Push the generated project to target repository.

## Step 2: Add Infrastructure pipeline in Azure Devops

YAML file containing a template Azure DevOps CI/CD pipeline for building and deploying the core infrastructure, named `air-infrastructure-data.yml` is configured in the `build/azDevOps/azurefolder`

YAML file `air-infrastructure-data.yml` should be added as the definition for a new pipeline in Azure DevOps.

1. Sign-in to your Azure DevOps organization and go to your project
2. Go to Pipelines, and then select New pipeline
3. Name the new pipeline eg `amido.stacks-data-infrastructure`
4. For the pipeline definition, specify the YAML file in the project repository feature branch (e.g. `air-infrastructure-data.yml`) and save
5. The new pipeline will require access to any Azure DevOps pipeline variable groups specified in the pipeline YMAL. Under each variable group, go to 'Pipeline permissions' and add the pipeline.

YAML file containing a template Azure DevOps CI/CD pipeline for networking and self hosted agent infrastructure, named `air-infrastructure-data-network.yml` is configured in the `build/azDevOps/azure/network` folder.
If the client/user doesnot have their own network and self hosted agent then we need to  configure networking pipeline using `air-infrastructure-data-network.yml` in Azure Devops using the steps mentioned above.

If the client/user have their own network and self hosted agent then networking  pipline wont required.

## Step 3: Deploy Infrastructure in non-production environment

Run the  pipeline configured in Step 2

Running this pipeline in Azure DevOps will deploy the artifacts into the non-production (nonprod) environment. If successful, the generated resources will now be available in the nonprod Stacks environment.

## Step 4: Deploy Infrastructure in further environments 

* Deployment to the non-production (nonprod) environment is triggered on a feature branch when a pull request is open
* Deployment to the production (prod) environment is triggered on merging to the `main` branch, followed by manual approval of the release step.



## TODO

Documentation on using Stacks CLI to deploy core infrastructure components.
Commands, configurations, requirements.
