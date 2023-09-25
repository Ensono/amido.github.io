---
id: ingest_pipeline_deployment_azure
title: Data Ingest Pipeline Deployment
sidebar_label: 6. Data Ingest Pipeline Deployment
hide_title: false
hide_table_of_contents: false
description: Data ingest pipelines development & deployment
keywords:
  - datastacks
  - data
  - python
  - etl
  - cli
  - azure
  - template
---

This section provides an overview of generating a new [data ingest pipeline](../etl_pipelines/ingest_data_azure.md) workload and deploying it into a Ensono Stacks Data Platform, using the [Datastacks](../etl_pipelines/datastacks.md) utility.

This guide assumes the following are in place:

* A [deployed Ensono Stacks data platform](core_data_platform_deployment_azure.md)
* [Development environment set up](dev_quickstart_data_azure.md)
* [Deployed shared resources](shared_resources_deployment_azure.md)
* A data source to ingest from. The steps below are based on using the [Azure SQL example data source](example_data_source.md)

This process will deploy the following resources into the project:

* Azure Data Factory resources (defined in Terraform / ARM)
    * Linked service
    * Dataset
    * Pipeline
    * Trigger
* Data ingest config files (JSON)
* Azure DevOps CI/CD pipeline (YAML)
* (optional) Spark job and config file for data quality tests (Python)
* Template unit tests (Python)
* Template end-to-end tests (Python, Behave)

## Data source pre-requisites

Details required for connecting to the data source will need to be stored securely (i.e. not in the source code) and to be referenced dynamically by the deployment pipeline. This approach also allows for different versions of the data source to be used in different environments (for example non-prod / prod versions). The examples below require the following details to be set for the Azure SQL sample database in each environment:

### Azure DevOps variable

Azure DevOps variables will be accessed dynamically during deployments so is used for details needed to create the linked service in Data Factory.

* `sql_connection`: connection string for the database, for example `Data Source=amidostacksdeveuwdesql.database.windows.net;Initial Catalog=exampledb;User ID=user;Integrated Security=False;Encrypt=True;Connection Timeout=30;`

### Key Vault secret

The password will need to be accessed dynamically by Data Factory on each connection, therefore should be stored in the Key Vault linked to the factory.

* `sql-password`: password to use with the connection string

## Step 1: Create feature branch

Before creating a new workload using Datastacks, open the project locally and create a new branch for the workload being created, e.g.:

```bash
git checkout -b feat/my-new-ingest-pipeline
```

## Step 2: Prepare the Datastacks config file

Datastacks requires a YAML config file for generating a new ingest workload - see [Datastacks configuration](../etl_pipelines/datastacks.md#configuration) for further details.

Create a new YAML file and populate the values relevant to your new ingest pipeline. The example below will create an ingest workload named **Ingest_AzureSql_MyNewExample**, and connect using the data source connection details as specified in [Data source pre-requisites](#data-source-pre-requisites) above.

```yaml
#######################
# Required parameters #
#######################

# Data pipeline configurations
dataset_name: AzureSql_MyNewExample
pipeline_description: "Ingest from demo Azure SQL database using ingest config file."
data_source_type: azure_sql
data_source_password_key_vault_secret_name: sql-password
data_source_connection_string_variable_name: sql_connection

# Azure DevOps configurations
ado_variable_groups_nonprod:
  - amido-stacks-de-pipeline-nonprod
  - stacks-credentials-nonprod-kv

ado_variable_groups_prod:
  - amido-stacks-de-pipeline-prod
  - stacks-credentials-prod-kv

#######################
# Optional parameters #
#######################

# Workload config
window_start_default: 2010-01-01
window_end_default: 2010-01-31

```

## Step 3: Generate project artifacts using Datastacks

Use the [Datastacks CLI](../etl_pipelines/datastacks.md#using-the-datastacks-cli) to generate the artifacts for the new workload, using the prepared config file (replacing `path_to_config_file/my_config.yaml` with the appropriate path).:

```bash
# Activate virtual environment
poetry shell

# Generate resources for an ingest pipeline (without Data Quality steps)
datastacks generate ingest --config="path_to_config_file/my_config.yaml"

# Generate resources for an ingest pipeline (with added Data Quality steps)
datastacks generate ingest --config="path_to_config_file/my_config.yaml" --data-quality
```

This will add new project artifacts for the workload under `de_workloads/ingest/Ingest_AzureSql_MyNewExample`, based on the ingest workload templates. Review the resources that have been generated.

## Step 4: Update ingest configuration

Configuration of the data that the workload will ingest from the source is specified in the file in the workload's `config/ingest_sources/ingest_config.json` file - see [data ingest configuration](../etl_pipelines/ingest_data_azure.md#configuration) for further details on this file. For the example data source, update the contents of the file with the following:

```json
{
    "data_source_name": "Ingest_AzureSql_MyNewExample",
    "data_source_type": "azure_sql",
    "enabled": true,
    "ingest_entities": [
        {
            "version": 1,
            "display_name": "movies.movies_metadata",
            "enabled": true,
            "schema": "movies",
            "table": "movies_metadata",
            "columns": "[adult], [belongs_to_collection], [budget], [genres], [homepage], [id], [imdb_id], [original_language], [original_title], [overview], [popularity], [poster_path], [production_companies], [production_countries], [release_date], [revenue], [runtime], [spoken_languages], [status], [tagline], [title], [video], [vote_average], [vote_count]",
            "load_type": "full",
            "delta_date_column": null,
            "delta_upsert_key": null
        },
        {
            "version": 1,
            "display_name": "movies.ratings_small",
            "enabled": true,
            "schema": "movies",
            "table": "ratings_small",
            "columns": "[userId], [movieId], [rating], [timestamp]",
            "load_type": "delta",
            "delta_date_column": "DATEADD(SECOND,[timestamp],'1970-01-01')",
            "delta_upsert_key": "[userId], [movieId]"
        }
    ]
}
```

## Step 5: Update end-to-end tests

The [end-to-end tests](../etl_pipelines/testing_data_azure.md#end-to-end-tests) are designed to run the ingest pipeline in a controlled fashion to ensure it functions as expected. Open the test feature file for the workload (`tests/end_to_end/features/azure_data_ingest.feature`) and update the parameters to reflect the data entities expected to be ingested. In our example, we will use the entities specified in the config file above, i.e.:

```gherkin
|{"window_start" : "2010-01-01", "window_end": "2010-01-31"}|["movies.keywords", "movies.links", "movies.movies_metadata", "movies.ratings_small"]|
```

## Step 6: Deploy new workload in non-production environment

The generated workload contains a YAML file containing a template Azure DevOps CI/CD pipeline for the workload, named `de-ingest-ado-pipeline.yaml`. This should be added as the definition for a new pipeline in Azure DevOps.

1. Sign-in to your Azure DevOps organization and go to your project.
2. Go to Pipelines, and then select New pipeline.
3. Name the new pipeline to match the name of your new workload, e.g. `de-ingest-azuresql-mynewexample`.
4. For the pipeline definition, specify the YAML file in the project repository feature branch (e.g. `de-ingest-ado-pipeline.yaml`) and save.
5. The new pipeline will require access to any Azure DevOps pipeline variable groups specified in the [datastacks config file](#step-2-prepare-the-datastacks-config-file). Under each variable group, go to 'Pipeline permissions' and add the new pipeline.
6. Run the new pipeline.

Running this pipeline in Azure DevOps will deploy the artifacts into the non-production (nonprod) environment and run tests. If successful, the generated resources will now be available in the nonprod Ensono Stacks environment.

## Step 7: Review deployed resources

If successful, the new resources will now be deployed into the non-production resource group in Azure - these can be viewed through the [Azure Portal](https://portal.azure.com/#home) or CLI.

The Azure Data Factory resources can be viewed through the [Data Factory UI](https://adf.azure.com/). You may also wish to run/debug the newly generated pipeline from here (see [Microsoft documentation](https://learn.microsoft.com/en-us/azure/data-factory/iterative-development-debugging)).

ℹ️ Note: The structure of the data platform and Data Factory resources are defined in the project's code repository, and deployed through the Azure DevOps pipelines. Changes to Data Factory resources directly through the UI will lead to them be overwritten when pipelines are next run. If you wish to update Data Factory resources, update the appropriate files within the workload (under the `data_factory` path).

Continue to make any further amendments required to the new workload, re-running the DevOps pipeline as required. If including data quality checks, update the (`ingest_dq`) file in the repository with details of checks required on the data.

## Step 8: Deploy new workload in further environments

In the example pipeline templates:

* Deployment to the non-production (nonprod) environment is triggered on a feature branch when a pull request is open
* Deployment to the production (prod) environment is triggered on merging to the `main` branch, followed by manual approval of the release step.

ℹ️ It is recommended in any data platform that processes for deploying and releasing across environments should be agreed and documented, ensuring sufficient review and quality assurance of any new workloads. The template CI/CD pipelines provided are based upon two platform environments (nonprod and prod) - but these may be amended depending upon the specific requirements of your project and organisation.

## Next steps

Now you have ingested some data into the bronze data lake layer, you can generate a [data processing pipeline](./processing_pipeline_deployment_azure.md) to transform and model the data.
