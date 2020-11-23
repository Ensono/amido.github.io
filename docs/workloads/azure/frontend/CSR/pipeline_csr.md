---
id: pipeline_csr
title: CSR Application - Azure DevOps Pipeline
sidebar_label: Pipeline
hide_title: false
hide_table_of_contents: false
description: CSR Application - Azure DevOps Pipeline
keywords:
  - rest
  - api
  - csr
  - application
  - template
  - azure
  - devops
  - pipeline
  - settings
  - client
  - side
  - rendering
  - client side rendering
---
import HideNavigation  from "../../../../../src/pages/HideNavigation";

import useBaseUrl from '@docusaurus/useBaseUrl';

The pipeline will automate provisioning and updating the client-side rendering infrastructure and application in Azure.

Where possible, we are creating reusable steps ([stacks-pipeline-templates](https://github.com/amido/stacks-pipeline-templates)) that can be pulled into any base pipeline. Reusable steps can include tasks to deploy, build, test and more.

## Pipeline Diagram

<img alt="CSR Application - Azure DevOps Pipeline" src={useBaseUrl('img/azure_csr_azure_devops_pipeline.png')} />

## Setting up Azure DevOps

### Update pipeline template placeholders

Where possible, the scaffolding CLI will have populated the correct values in the pipeline template file `build/azDevops/azure/app-pipeline.yml`. The values that need to be manually configured, such as the variable group name setup previously, will have placeholders using the prefix `%REPLACE_ME_FOR`. We very much recommend that you go through the whole template to make sure that values are correct for your project. Once you are happy with the template, commit the changes to your repository.

### Create the pipeline

Follow the steps below to create the pipeline and trigger the initial run.

1. In the pipelines section of Azure DevOps, select **New Pipeline**.
2. Select your repository.
3. Select the **Existing Azure Pipelines YAML files** option and enter the path `build/azDevops/azure/app-pipeline.yml`
4. Click run and wait for the pipeline to complete.

<!-- markdownlint-disable MD033 -->
<HideNavigation next />
