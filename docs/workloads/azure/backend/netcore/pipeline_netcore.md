---
id: pipeline_netcore
title: .NET - Azure DevOps Pipeline
sidebar_label: Pipeline
description: How to configure Azure DevOps Pipeline for .NET
keywords:
  - .net
  - azure devops
  - configure
  - pipeline
  - setting up
  - template
  - build
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The pipeline will automate provisioning and updating the .NET REST API with CQRS infrastructure in Azure.

## Pipeline Diagram

### Feature branch -> Dev sequence

<img alt="Dev .NET REST API - Azure DevOps Pipeline" src={useBaseUrl('img/netcore_pipeline_dev.png')} />

### Main branch -> Production sequence

<img alt="Prod .NET REST API - Azure DevOps Pipeline" src={useBaseUrl('img/netcore_pipeline_prod.png')} />

## Setting up Azure DevOps

### Variables

A variable file located at `build/azDevOps/azure/ci-vars.yml` will contain the majority of the variables required for the pipeline. **This file should be manually checked and updated where required before first deployment**. If the project was generated using the Stacks CLI then the file will be updated with the information provided.

Variable groups will need creating for storing some sensitive variables to be used by the pipeline. Instructions for creating a variable group can be found [here](https://docs.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups?view=azure-devops&tabs=classic#create-a-variable-group). Two variable groups are used by default, one for Azure credentials and one for any application specific variables.

#### Azure Credentials

Create a variable group called `azure-sp-creds`, add a description and make sure the **Allow access to all pipelines** option is checked.

Add the following variables:

| Variable Name       | Description                           | Required for                         |
| ------------------- | ------------------------------------- | ------------------------------------ |
| ARM_CLIENT_ID       | Azure Service Principal Client ID     | Terraform and application deployment |
| ARM_CLIENT_SECRET   | Azure Service Principal Client Secret | Terraform and application deployment |
| ARM_SUBSCRIPTION_ID | Azure Subscription ID                 | Terraform and application deployment |
| ARM_TENANT_ID       | Azure Tenant ID                       | Terraform and application deployment |

#### Application Specific

Create a the variable group, add a description and make sure the **Allow access to all pipelines** option is checked. Update the `- group: replaceme` in the `build/azDevOps/azure/ci-vars.yml` file to match the name of your variable group.

Add the following variables:

| Variable Name | Description                                | Required for         |
| ------------- | ------------------------------------------ | -------------------- |
| SONAR_TOKEN   | [SonarCloud Token](https://sonarcloud.io/) | Static Code Analysis |

### Create the pipeline

Follow the steps below to create the pipeline and trigger the initial run.

1. In the pipelines section of Azure DevOps, select **New Pipeline**.
2. Select your repository.
3. Select the **Existing Azure Pipelines YAML files** option and enter the path `build/azDevops/azure/ci.yml`
4. Click run and wait for the pipeline to complete.
