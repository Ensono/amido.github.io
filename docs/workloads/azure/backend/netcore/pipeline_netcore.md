---
id: pipeline_netcore
title: .NET Core - Azure DevOps Pipeline
sidebar_label: Pipeline
description: How to configure Azure DevOps Pipeline for .NET Core
keywords:
  - .net core
  - azure devops
  - configure
  - pipeline
  - setting up
  - template
  - build
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The pipeline will automate provisioning and updating the .NET Core REST API with CQRS infrastructure in Azure.

Where possible, we are creating reusable steps ([stacks-pipeline-templates](https://github.com/Ensono/stacks-pipeline-templates)) that can be pulled into any base pipeline. Reusable steps can include tasks to deploy, build, test and more.

## Pipeline Diagram

<img alt=".NET Core REST API - Azure DevOps Pipeline" src={useBaseUrl('img/azure_netcore_azure_devops_pipeline.png')} />

## Setting up Azure DevOps

### Variable group

A variable group will need creating for storing variables to be used for testing steps. Instructions for creating a variable group can be found [here](https://docs.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups?view=azure-devops&tabs=classic#create-a-variable-group). Give the variable group a name and description and make sure the **Allow access to all pipelines** option is checked.

Add the following variables:

| Variable Name            | Required for         | Note                                                                              |
| ------------------------ | -------------------- | --------------------------------------------------------------------------------- |
| COSMOSDB_KEY_DEV         | Integration Test     | Output from infrastructure deployment. Should be enabled after first pipeline run |
| COSMOSDB_NAME_DEV        | Integration Test     | Output from infrastructure deployment. Should be enabled after first pipeline run |
| COSMOSDB_ACCOUNT_URI_DEV | Integration Test     | Output from infrastructure deployment. Should be enabled after first pipeline run |
| SONAR_ORGANIZATION       | Static Code Analysis | from [sonarcloud](https://sonarcloud.io/)                                         |
| SONAR_PROJECT_KEY        | Static Code Analysis | from [sonarcloud](https://sonarcloud.io/)                                         |
| SONAR_PROJECT_NAME       | Static Code Analysis | from [sonarcloud](https://sonarcloud.io/)                                         |
| SONAR_TOKEN              | Static Code Analysis | from [sonarcloud](https://sonarcloud.io/)                                         |
| PACT_BEARER_TOKEN        | Contract Test        | from [pact](https://docs.pact.io/)                                                |
| PACT_BROKER              | Contract Test        | from [pact](https://docs.pact.io/)                                                |

<img alt="Azure .NET Core Variable Group" src={useBaseUrl('img/azure_netcore_variable_group.png')} />

### Update pipeline template placeholders

Where possible, the scaffolding CLI will have populated the correct values in the pipeline template file `build/azDevops/azure/api-pipeline.yml`. The values that need to be manually configured, such as the variable group name setup previously, will have placeholders using the prefix `%REPLACE_ME_FOR`. We very much recommend that you go through the whole template to make sure that values are correct for your project. Once you are happy with the template, commit the changes to your repository.

### Create the pipeline

Follow the steps below to create the pipeline and trigger the initial run.

1. In the pipelines section of Azure DevOps, select **New Pipeline**.
2. Select your repository.
3. Select the **Existing Azure Pipelines YAML files** option and enter the path `build/azDevops/azure/api-pipeline.yml`
4. Click run and wait for the pipeline to complete.
5. Update the API variable group with the Cosmos DB details.
6. Enable Integration Tests in `build/azDevops/azure/api-pipeline.yml`
7. Commit changes to trigger the pipeline again.
