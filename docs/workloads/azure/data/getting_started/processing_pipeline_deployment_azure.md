---
id: processing_pipeline_deployment_azure
title: Data Processing Pipeline Deployment
sidebar_label: 7. Data Processing Pipeline Deployment
hide_title: false
hide_table_of_contents: false
description: Data processing pipelines development & deployment
keywords:
  - datastacks
  - data
  - python
  - etl
  - cli
  - azure
  - template
---

This section provides an overview of generating a new [data processing pipeline](../etl_pipelines/data_processing.md) workload and deploying it into a Ensono Stacks Data Platform, using the [Datastacks](../etl_pipelines/datastacks.md) utility.

This guide assumes the following are in place:

* A [deployed Ensono Stacks data platform](./core_data_platform_deployment_azure.md)
* [Development environment set up](./dev_quickstart_data_azure.md)
* [Deployed shared resources](./shared_resources_deployment_azure.md)
* [Data ingested into the bronze layer of the data lake](./ingest_pipeline_deployment_azure.md)

This process will deploy the following resources into the project:

* Azure Data Factory Pipeline resource (defined in Terraform / ARM)
* Boilerplated script for performing data processing activities using PySpark (Python).
* Azure DevOps CI/CD pipeline (YAML)
* (optional) Spark job and config file for data quality tests (Python)
* Template unit tests (Python)

## Background

Once you have landed data in the bronze layer of your data lake (e.g. through a [data ingest pipeline](./ingest_pipeline_deployment_azure.md)), you will typically need to perform additional processing activities upon the data in order make it usable for your needs - for example loading it into the silver and gold layers of your data lake. For more information, see [data processing workloads](../etl_pipelines/data_processing.md).

In the steps below, we will generate a data processing pipeline that uses data ingested in the [previous task](./ingest_pipeline_deployment_azure.md) as its source, and loads it into the silver layer. The same approach can be used to load data from silver to gold.

## Step 1: Create feature branch

Before creating a new workload using Datastacks, open the project locally and create a new branch for the workload being created, e.g.:

```bash
git checkout -b feat/my-new-processing-pipeline
```

## Step 2: Prepare the Datastacks config file

Datastacks requires a YAML config file for generating a new ingest workload - see [Datastacks configuration](../etl_pipelines/datastacks.md#configuration) for further details.

Create a new YAML file and populate the values relevant to your new processing pipeline. The example below will generate resources for a processing workload named **my_processing_pipeline**.

```yaml
#######################
# Required parameters #
#######################

# Pipeline configurations
pipeline_name: my_processing_pipeline

# Description of pipeline shown in Azure Data Factory
pipeline_description: "My example processing pipeline."

# Azure DevOps configurations
ado_variable_groups_nonprod:
  - amido-stacks-de-pipeline-nonprod
  - stacks-credentials-nonprod-kv

ado_variable_groups_prod:
  - amido-stacks-de-pipeline-prod
  - stacks-credentials-prod-kv

```

## Step 3: Generate project artifacts using Datastacks

Use the [Datastacks CLI](../etl_pipelines/datastacks.md#using-the-datastacks-cli) to generate the artifacts for the new workload, using the prepared config file (replacing `path_to_config_file/my_config.yaml` with the appropriate path).:

```bash
# Activate virtual environment
poetry shell

# Generate resources for an ingest pipeline (without Data Quality steps)
datastacks generate processing --config="path_to_config_file/my_config.yaml"

# Generate resources for an ingest pipeline (with added Data Quality steps)
datastacks generate processing --config="path_to_config_file/my_config.yaml" --data-quality
```

This will add new project artifacts for the workload under `de_workloads/processing/my_processing_pipeline`, based on the ingest workload templates. Review the resources that have been generated.

## Step 4: Update PySpark job

TODO.

## Step 5: Update tests

TODO.

## Step 6: Deploy new workload in non-production environment

The generated workload contains a YAML file containing a template Azure DevOps CI/CD pipeline for the workload, named `de-process-ado-pipeline.yaml`. This should be added as the definition for a new pipeline in Azure DevOps.

1. Sign-in to your Azure DevOps organization and go to your project.
2. Go to Pipelines, and then select New.
3. Name the new pipeline to match the name of your new workload, e.g. `de-process-my-processing-pipeline`.
4. For the pipeline definition, specify the YAML file in the project repository feature branch (e.g. `de-process-ado-pipeline.yaml`) and save.
5. The new pipeline will require access to any Azure DevOps pipeline variable groups specified in the [datastacks config file](#step-2-prepare-the-datastacks-config-file). Under each variable group, go to 'Pipeline permissions' and add the new pipeline.
6. Run the new pipeline.

Running this pipeline in Azure DevOps will deploy the artifacts into the non-production (nonprod) environment and run tests. If successful, the generated resources will now be available in the nonprod Ensono Stacks environment.

## Step 7: Review deployed resources

If successful, the new resources will now be deployed into the non-production resource group in Azure - these can be viewed through the [Azure Portal](https://portal.azure.com/#home) or CLI.

The Azure Data Factory resources can be viewed through the [Data Factory UI](https://adf.azure.com/). You may also wish to run/debug the newly generated pipeline from here (see [Microsoft documentation](https://learn.microsoft.com/en-us/azure/data-factory/iterative-development-debugging)).

ℹ️ Note: The structure of the data platform and Data Factory resources are defined in the project's code repository, and deployed through the Azure DevOps pipelines. Changes to Data Factory resources directly through the UI will lead to them be overwritten when pipelines are next run. If you wish to update Data Factory resources, update the appropriate files within the workload (under the `data_factory` path).

Continue to make any further amendments required to the new workload, re-running the DevOps pipeline as required. If including data quality checks, update the (`data_quality_config.json`) file in the repository with details of checks required on the data.

## Step 8: Deploy new workload in further environments

In the example pipeline templates:

* Deployment to the non-production (nonprod) environment is triggered on a feature branch when a pull request is open
* Deployment to the production (prod) environment is triggered on merging to the `main` branch, followed by manual approval of the release step.

It is recommended in any Ensono Stacks data platform that processes for deploying and releasing to further should be agreed and documented, ensuring sufficient review and quality assurance of any new workloads. The template CI/CD pipelines provided are based upon two platform environments (nonprod and prod) - but these may be amended depending upon the specific requirements of your project and organisation.
