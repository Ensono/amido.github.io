---
id: pipeline_java
title: Java REST API - Azure DevOps Pipeline
sidebar_label: Pipeline
description: Java REST API- Azure DevOps Pipeline
keywords:
  - java
  - rest
  - api
  - azure
  - devops
  - pipeline
  - spring boot
  - setting
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The pipeline will automate provisioning and updating the Java REST API infrastructure in Azure.

Where possible, we are creating reusable steps ([stacks-pipeline-templates](https://github.com/amido/stacks-pipeline-templates)) that can be pulled into any base pipeline. Reusable steps can include tasks to deploy, build, test and more.

## Pipeline Diagram

<img alt="Java REST API - Azure DevOps Pipeline" src={useBaseUrl('img/azure_java_azure_devops_pipeline.png')} />

## Setting up Azure DevOps

### Variable group

A variable group will need creating for storing application variables to be used with the pipeline. Instructions for creating a variable group can be found [here](https://docs.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups?view=azure-devops&tabs=classic#create-a-variable-group). Give the variable group a name and description and make sure the **Allow access to all pipelines** option is checked.

Add the following variables:

* **APPINSIGHTS_INSTRUMENTATIONKEY** (output of core infrastructure)
* **SONAR_ORGANIZATION** (from [sonarcloud](https://sonarcloud.io/))
* **SONAR_PROJECT_KEY** (from [sonarcloud](https://sonarcloud.io/))
* **SONAR_PROJECT_NAME** (from [sonarcloud](https://sonarcloud.io/))
* **SONAR_TOKEN** (from [sonarcloud](https://sonarcloud.io/))

<img alt="Azure Java Variable Group" src={useBaseUrl('img/azure_java_variable_group.png')} />

### Update pipeline template placeholders

Where possible, the scaffolding CLI will have populated the correct values in the pipeline template file `build/azDevops/azure/api-pipeline.yml`. The values that need to be manually configured, such as the variable group name setup previously, will have placeholders using the prefix `%REPLACE_ME_WITH`. We very much recommend that you go through the whole template to make sure that values are correct for your project. Once you are happy with the template, commit the changes to your repository.

### Create the pipeline

Follow the steps below to create the pipeline and trigger the initial run.

1. In the pipelines section of Azure DevOps, select **New Pipeline**.
2. Select your repository.
3. Select the **Existing Azure Pipelines YAML files** option and enter the path `build/azDevops/azure/api-pipeline.yml`
4. Click run and wait for the pipeline to complete.
