---
id: shared_resources_deployment_azure
title: Shared Resources Deployment
sidebar_label: Shared Resources Deployment
hide_title: false
hide_table_of_contents: false
description: Deployment of common Azure Data Factory resources shared by data pipelines
keywords:
  - DE
  - data
  - infrastructure
  - adf
  - cicd
---

This section provides an overview of deploying the shared resources for Stacks Data Platform.
This aligns to the workflow shown in the [deployment architecture](../architecture/architecture_data_azure.md#data-engineering-workloads) section.
Data Plaform shared resources include the ADF resources which are shared in various ADF pipelines.These are as follow:-
* Linked services
    * ls_Blob_ConfigStore
    * ls_KeyVault
    * ls_ADLS_DataLake
    * ls_Databricks_Small
    * ls_Blob_ConfigStore
* Datasets
    * ds_dp_ConfigStore_Json
    * ds_dp_DataLake_Parquet
* Pipelines
    * pipeline_Get_Ingest_Config
    * pipeline_Generate_Ingest_Query

It assumes all [prerequisites](../requirements_data_azure.md#azure) are in place, including:

* Azure subscription and service principal
* Azure DevOps project with [Pipelines variable groups](../requirements_data_azure.md#azure-pipelines-variable-groups)
* A [deployed Stacks data platform](core_data_platform_deployment_azure.md)

## Step 1: Create feature branch

Open the project locally and create a new feature branch, e.g.:

```bash
git checkout -b feat/de-shared-pipeline
```
The `de_build` folder includes YAML file called `job-pipeline-vars` that contains the variables used in the DE shared reource pipeline. These variables must be updated as per the project requirements.

## Step 2: Add a shared resources pipeline in Azure DevOps

YAML file containing a template Azure DevOps CI/CD pipeline for building and deploying the shared resources, named `de-shared-resources.yml` is configured in the [de_workloads/shared_resources](https://github.com/amido/stacks-azure-data/tree/main/de_workloads/shared_resources).
This YAML file should be added as the definition for a new pipeline in Azure DevOps.

1. Sign-in to your Azure DevOps organization and go to your project
2. Go to Pipelines, and then select **New pipeline**
3. Name the new pipeline, e.g. `de-shared-resources`
4. For the pipeline definition, specify the YAML file in the project repository feature branch (`de-shared-resources.yml`) and save
5. The new pipeline will require access to any Azure DevOps pipeline variable groups specified in the pipeline YMAL. Under each variable group, go to 'Pipeline permissions' and add the pipeline.


## Step 3: Deploy shared resources in non-production environment

Run the pipeline configured in Step 2 to commence the build and deployment process.

Running this pipeline in Azure DevOps will initiate the deployment of artifacts into the non-production (nonprod) environment. It's important to monitor the progress of this deployment to ensure its success. You can track the progress and status of the deployment within the Pipelines section of Azure DevOps.

If successful, the core DE shared reource will now be available in the nonprod Stacks environment. To view these deployed resources, navigate to the [Azure portal](https://portal.azure.com/), and go to your Azure Data Factory UI in the proper resource group. Within the ADF, you'll find the shared resources that were deployed.

## Step 4: Deploy shared resources in further environments

By default Stacks provides a framework for managing the platform across two environments - nonprod and prod.
The template CI/CD pipelines provided are based upon these two platform environments, but these may be amended depending upon the specific requirements of your project and organisation.

* Deployment to the non-production (nonprod) environment is triggered on a feature branch when a pull request is open
* Deployment to the production (prod) environment is triggered on merging to the `main` branch, followed by manual approval of the release step.


