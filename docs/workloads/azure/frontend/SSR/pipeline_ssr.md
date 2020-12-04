---
id: pipeline_ssr
title: SSR Application - Azure DevOps Pipeline
sidebar_label: Pipeline
hide_title: false
hide_table_of_contents: false
description: SSR Application - Azure DevOps Pipeline
keywords:
  - rest
  - api
  - ssr
  - application
  - azure
  - pipeline
  - side
  - rendering
  - server
  - server side rendering
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import HideNavigation  from "../../../../../src/pages/HideNavigation";
import ResponsivePlayer from "../../../../../src/pages/Components/ResponsivePlayer/ResponsivePlayer";

The pipeline will automate provisioning and updating the server-side rendering infrastructure and application in Azure.

Where possible, we are creating reusable steps ([stacks-pipeline-templates](https://github.com/amido/stacks-pipeline-templates)) that can be pulled into any base pipeline. Reusable steps can include tasks to deploy, build, test and more.

## Pipeline Diagram

<img alt="SSR Application - Azure DevOps Pipeline" src={useBaseUrl('img/azure_ssr_azure_devops_pipeline.png')} />

## Setting up Azure DevOps

<ResponsivePlayer url="https://vimeo.com/486755365" />

### Variable group

A variable group will need creating for storing application variables to be used throughout the pipeline. Instructions for creating a variable group can be found [here](https://docs.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups?view=azure-devops&tabs=classic#create-a-variable-group). Give the variable group a name and description and make sure the **Allow access to all pipelines** option is checked.

Add the following variables:

| Variable Name                       | Required for         | Note                                           |
| ----------------------------------- | -------------------- | -----------------------------------------------|
| MENU_API_URL                        | Application Backend  | Output of a Stacks backend workload            |
| NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN | Application CMS      | from [Contentful](./contentful_integration.md) |
| NEXT_PUBLIC_CONTENTFUL_SPACE_ID     | Application CMS      | from [Contentful](./contentful_integration.md) |
| SONAR_ORGANIZATION                  | Static Code Analysis | from [sonarcloud](https://sonarcloud.io/)      |
| SONAR_PROJECT_KEY                   | Static Code Analysis | from [sonarcloud](https://sonarcloud.io/)      |
| SONAR_PROJECT_NAME                  | Static Code Analysis | from [sonarcloud](https://sonarcloud.io/)      |
| SONAR_TOKEN                         | Static Code Analysis | from [sonarcloud](https://sonarcloud.io/)      |

<img alt="Azure SSR Variable Group" src={useBaseUrl('img/azure_ssr_variable_group.png')} />

### Update pipeline template placeholders

Where possible, the scaffolding CLI will have populated the correct values in the pipeline template file `build/azDevops/azure/app-pipeline.yml`. The values that need to be manually configured, such as the variable group name setup previously, will have placeholders using the prefix `%REPLACE_ME_FOR`. We very much recommend that you go through the whole template to make sure that values are correct for your project. Once you are happy with the template, commit the changes to your repository.

### Create the pipeline

Follow the steps below to create the pipeline and trigger the initial run.

1. In the pipelines section of Azure DevOps, select **New Pipeline**.
2. Select your repository.
3. Select the **Existing Azure Pipelines YAML files** option and enter the path `build/azDevops/azure/app-pipeline.yml`
4. Click run and wait for the pipeline to complete.

<!-- markdownlint-disable MD033 -->
