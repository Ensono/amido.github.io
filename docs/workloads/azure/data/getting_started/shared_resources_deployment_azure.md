---
id: shared_resources_deployment_azure
title: Shared Resources Deployment
sidebar_label: 4. Shared Resources Deployment
hide_title: false
hide_table_of_contents: false
description: Deployment of common Azure Data Factory resources shared by data pipelines
keywords:
  - data
  - infrastructure
  - adf
  - cicd
---

This section provides an overview of deploying the shared resources for an Ensono Stacks Data Platform.

The shared resources include Azure Data Factory resources which are shared across pipelines. These are as follows:

* Linked services
    * _ls_ADLS_DataLake_ - Connection to the Data Lake
    * _ls_Blob_ConfigStore_ - Connection to the config storage location
    * _ls_Databricks_Small_ - Connection to Databricks job cluster (default 2 fixed workers)
    * _ls_KeyVault_ - Connection to Azure Key Vault
* Datasets
    * _ds_dp_ConfigStore_Json_ - For reading JSON data from ls_Blob_ConfigStore
    * _ds_dp_DataLake_Parquet_ - For writing Parquet data to ls_ADLS_DataLake
* Pipelines
    * _pipeline_Get_Ingest_Config_ - To retrieve config data for use in a pipeline
    * _pipeline_Generate_Ingest_Query_ - To generate a query for ingesting data

For details of how these resources are used in ingest pipelines, see [data ingestion](../data_engineering/ingest_data_azure.md).

This guide assumes the following are in place:

* A [deployed Ensono Stacks Data Platform](./core_data_platform_deployment_azure.md)
* [Development environment set up](./dev_quickstart_data_azure.md)

## Step 1: Create feature branch

Open the project locally and create a new feature branch, e.g.:

```bash
git checkout -b feat/de-shared-pipeline
```

The `de_build` folder includes YAML file called `job-pipeline-vars` that contains the variables used in the DE shared resource pipeline. These variables must be updated as per the project requirements.

## Step 2: Add a shared resources pipeline in Azure DevOps

The default shared resources for the Ensono Stacks Data Platform are found under [de_workloads/shared_resources](https://github.com/ensono/stacks-azure-data/tree/main/de_workloads/shared_resources). This directory contains a YAML file `de-shared-resources.yml` containing a template Azure DevOps CI/CD pipeline for building and deploying the shared resources.
This YAML file should be added as the definition for a new pipeline in Azure DevOps.

1. Sign-in to your Azure DevOps organization and go to your project.
2. Go to Pipelines, and then select **New pipeline**.
3. Name the new pipeline, e.g. `de-shared-resources`.
4. For the pipeline definition, specify the YAML file in the project repository feature branch (`de-shared-resources.yml`) and save.
5. The new pipeline will require access to any Azure DevOps pipeline variable groups specified in the pipeline YAML. Under each variable group, go to 'Pipeline permissions' and add the pipeline.

## Step 3: Deploy shared resources in non-production environment

Run the pipeline configured in Step 2 to commence the build and deployment process.

Running this pipeline in Azure DevOps will initiate the deployment of artifacts into the non-production (nonprod) environment. It's important to monitor the progress of this deployment to ensure its success. You can track the progress and status of the deployment within the Pipelines section of Azure DevOps.

If successful, the core DE shared resources will now be available in the non-production environment. To view the deployed resources, navigate to the relevant resource group in the [Azure portal](https://portal.azure.com/). The deployed Data Factory resources can be viewed through the [Data Factory UI](https://adf.azure.com/).

:::note Updating Data Factory resources

The structure of the data platform and Data Factory resources are defined in the project's code repository, and deployed through the Azure DevOps pipelines. Changes to Data Factory resources directly through the UI will lead to them being overwritten when deployment pipelines are next run. See [Data Factory development quickstart](../getting_started/dev_quickstart_data_azure.md#azure-data-factory-development) for further information on updating Data Factory resources.

:::

## Step 4: Deploy shared resources in further environments

By default Ensono Stacks provides a framework for managing the platform across two environments - nonprod and prod.
The template CI/CD pipelines provided are based upon these two platform environments, but these may be amended depending upon the specific requirements of your project and organisation.

* Deployment to the non-production (nonprod) environment is triggered on a feature branch when a pull request is open
* Deployment to the production (prod) environment is triggered on merging to the `main` branch, followed by manual approval of the release step.

## Next steps

Once the shared resources are deployed you may now [generate a new data ingest pipeline](./ingest_pipeline_deployment_azure.md) (optionally implementing the [example data source](./example_data_source.md) beforehand).
