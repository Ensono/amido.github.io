---
id: datastacks_deployment_azure
title: Datastacks Build & Deployment
sidebar_label: 5. Datastacks Build & Deployment
hide_title: false
hide_table_of_contents: false
description: Build and deployment of Datastacks utilities library
keywords:
  - data
  - infrastructure
  - databricks
  - python
  - cicd
---

This section provides an overview of the build and deployment of the [Datastacks Python library](../etl_pipelines/pyspark_utilities.md).

Datastacks provides a range of utilities designed to support the development of data engineering workloads. The steps in this section are to setup a deployment pipeline, which:

- Build and package Datastacks as a Python wheel.
- Load the wheel into Databricks' DBFS, so it is accessible to jobs running in Databricks.

This guide assumes the following are in place:

- A [deployed Ensono Stacks data platform](core_data_platform_deployment_azure.md)
- [Development environment set up](dev_quickstart_data_azure.md)
- [Deployed shared resources](shared_resources_deployment_azure.md)

## Step 1: Create feature branch

Open the project locally and create a new feature branch, e.g.:

```bash
git checkout -b feat/datastacks-deployment
```

## Step 2: Add a Datastacks pipeline in Azure DevOps

The Datastacks utility resources are located within the [datastacks](https://github.com/ensono/stacks-azure-data/tree/main/datastacks) directory. This directory contains a YAML file `datastacks-pipeline.yml` containing a template Azure DevOps CI/CD pipeline for building and deploying the Datastacks Python library.
This YAML file should be added as the definition for a new pipeline in Azure DevOps.

1. Sign-in to your Azure DevOps organization and go to your project.
2. Go to Pipelines, and then select **New pipeline**.
3. Name the new pipeline, e.g. `datastacks-build-deploy`.
4. For the pipeline definition, specify the YAML file in the project repository feature branch (`datastacks-pipeline.yml`) and save.
5. The new pipeline will require access to any Azure DevOps pipeline variable groups specified in the pipeline YAML. Under each variable group, go to 'Pipeline permissions' and add the pipeline.

## Step 3: Deploy Datastacks in non-production environment

Run the pipeline configured in Step 2 to commence the build and deployment process.

Running this pipeline in Azure DevOps will initiate the build and deployment of the Datastacks library into the non-production (nonprod) environment. It's important to monitor the progress of this deployment to ensure its success. You can track the progress and status of the deployment within the Pipelines section of Azure DevOps.

ℹ️ Once deployed, Datastacks Python utilities will be accessible to scripts running in Databricks. The workloads created in the following examples will utilise this, or refer to [PySpark development in Databricks](./dev_quickstart_data_azure.md#optional-pyspark-development-in-databricks).

## Step 4: Deploy shared resources in further environments

By default Ensono Stacks provides a framework for managing the platform across two environments - nonprod and prod.
The template CI/CD pipelines provided are based upon these two platform environments, but these may be amended depending upon the specific requirements of your project and organisation.

- Deployment to the non-production (nonprod) environment is triggered on a feature branch when a pull request is open
- Deployment to the production (prod) environment is triggered on merging to the `main` branch, followed by manual approval of the release step.

## Next steps

Now Datastacks Python utilities have been deployed you may now [generate a new data ingest pipeline](./ingest_pipeline_deployment_azure.md) (optionally implementing the [example data source](example_data_source.md) beforehand).
