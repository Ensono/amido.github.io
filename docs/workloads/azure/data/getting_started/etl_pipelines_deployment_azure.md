---
id: etl_pipelines_deployment_azure
title: ETL Pipeline Deployment
sidebar_label: ETL Pipeline Deployment
hide_title: false
hide_table_of_contents: false
description: Data pipelines development & deployment
keywords:
  - datastacks
  - data
  - python
  - etl
  - cli
  - azure
  - template
---
---

This section provides an overview of generating a new [ETL ingest pipeline](../etl_pipelines/ingest_data_azure.md) workload and deploying it into a Stacks Data Platform, using the [Datastacks](../etl_pipelines/datastacks.md) utility.
This aligns to the workflow shown in the [deployment architecture](../architecture/architecture_data_azure.md#data-engineering-workloads) section.
It assumes all prerequisites are in place, including:

* A [deployed Stacks data platform](core_data_platform_deployment_azure.md)
* [Development environment set up](dev_quickstart_data_azure.md)
* A data source to ingest from. The steps below are based on using the [Azure SQL example data source](example_data_source.md)

This process will deploy the following resources into the project:

* Azure Data Factory resources (defined in Terraform / ARM)
    * Linked service
    * Dataset
    * Pipeline
* Data ingest config files (JSON)
* Azure DevOps CI/CD pipeline (YAML)
* (optional) Spark jobs for data quality tests (Python)
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
git checkout -b feat/my-new-data-pipeline
```

## Step 2: Prepare the Datastacks config file

Datastacks requires a config file for generating a new ingest workload. This config file should be a yaml file. A sample config file is included in the [de_templates](https://github.com/amido/stacks-azure-data/tree/main/de_templates) folder.

Create a new config file and populate the values relevant to your new ingest pipeline. The example below will create an ingest workload named **Ingest_AzureSql_MyNewExample**, and connect using the data source connection details as specified in [Data source pre-requisites](#data-source-pre-requisites) above.

```yaml
# `dataset_name` parameter is used to determine names of the following ADF resources:
# - pipeline: Ingest_<dataset_name>
# - dataset: ds_<dataset_name>
# - linked service: ls_<dataset_name>
dataset_name: AzureSql_MyNewExample
pipeline_description: "Ingest from demo Azure SQL database using ingest config file."
data_source_type: azure_sql

key_vault_linked_service_name: ls_KeyVault
data_source_password_key_vault_secret_name: sql-password
data_source_connection_string_variable_name: sql_connection

# Azure DevOps configurations

ado_variable_groups_nonprod:
  - amido-stacks-de-pipeline-nonprod
  - stacks-credentials-nonprod-kv

ado_variable_groups_prod:
  - amido-stacks-de-pipeline-prod
  - stacks-credentials-prod-kv

# Datalake containers

bronze_container: raw
silver_container: staging
gold_container: curated
```

## Step 3: Generate project artifacts using Datastacks

Use the Datastacks CLI to generate the artifacts for the new workload, using the prepared config file (replacing `path_to_config_file/my_config.yaml` with the appropriate path). Note, a workload with Data Quality steps requires a data platform with a Databricks workspace:

```bash
# Initiate Datastacks using poetry:
poetry run datastacks

# Generate resources for an ingest pipeline (without Data Quality steps)
datastacks generate ingest --config="path_to_config_file/my_config.yaml"

# Generate resources for an ingest pipeline (with added Data Quality steps)
datastacks generate ingest --config="path_to_config_file/my_config.yaml" --data-quality
```

This should add new project artifacts for the workload under `de_workloads/ingest/Ingest_AzureSql_MyNewExample`, based on the ingest workload templates. Review the resources that have been generated.

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

The end-to-end tests are designed to run the ingest pipeline in a controlled fashion to ensure it functions as expected. Open the test feature file for the workload (`tests/end_to_end/features/azure_data_ingest.feature`) and update the parameters to reflect the data entities expected to be ingested. In our example, we will use the entities specified in the config file above, i.e.:

```python
|{"window_start" : "2010-01-01", "window_end": "2010-01-31"}|["movies.keywords", "movies.links", "movies.movies_metadata", "movies.ratings_small"]|
```

## Step 6: Deploy new workload in non-production environment

The generated workload contains a YAML file containing a template Azure DevOps CI/CD pipeline for the workload, named `de-ingest-ado-pipeline.yaml`. This should be added as the definition for a new pipeline in Azure DevOps.

1. Sign-in to your Azure DevOps organization and go to your project
2. Go to Pipelines, and then select New pipeline
3. Name the new pipeline to match the name of your new workload, e.g. `de-ingest-azuresql-mynewexample`
4. For the pipeline definition, specify the YAML file in the project repository feature branch (e.g. `de-ingest-ado-pipeline.yaml`) and save
5. The new pipeline will require access to any Azure DevOps pipeline variable groups specified in the [datastacks config file](#step-2-prepare-the-datastacks-config-file). Under each variable group, go to 'Pipeline permissions' and add the new pipeline.
6. Run the new pipeline

Running this pipeline in Azure DevOps will deploy the artifacts into the non-production (nonprod) environment and run tests. If successful, the generated resources will now be available in the nonprod Stacks environment.

Continue to make any further amendments required to the new workload, re-running the pipeline as required. If including data quality checks, update the (`ingest_dq`) file with details of checks required on the data.

## Step 7: Deploy new workload in further environments

In the example pipeline templates:

* Deployment to the non-production (nonprod) environment is triggered on a feature branch when a pull request is open
* Deployment to the production (prod) environment is triggered on merging to the `main` branch, followed by manual approval of the release step.

It is recommended in any Stacks data platform that processes for deploying and releasing to further should be agreed and documented, ensuring sufficient review and quality assurance of any new workloads. The template CI/CD pipelines provided are based upon two platform environments (nonprod and prod) - but these may be amended depending upon the specific requirements of your project and organisation.
