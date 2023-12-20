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

This section provides an overview of generating a new [data processing pipeline](../data_engineering/data_processing.md) workload and deploying it into a Ensono Stacks Data Platform, using the [Datastacks CLI](../data_engineering/datastacks.md).

This guide assumes the following are in place:

- A [deployed Ensono Stacks Data Platform](./core_data_platform_deployment_azure.md)
- [Development environment set up](./dev_quickstart_data_azure.md)
- [Deployed shared resources](./shared_resources_deployment_azure.md)
- [Data ingested into the bronze layer of the data lake](./ingest_pipeline_deployment_azure.md)

This process will deploy the following resources into the project:

- Azure Data Factory Pipeline resource (defined in Terraform / ARM)
- Boilerplated script for performing data processing activities using PySpark (Python).
- Azure DevOps CI/CD pipeline (YAML)
- (optional) Spark job and config file for data quality tests (Python)
- Template unit tests (Python)

## Background

Once you have landed data in the bronze layer of your data lake (e.g. through a [data ingest pipeline](./ingest_pipeline_deployment_azure.md)), you will typically need to perform additional processing activities upon the data in order make it usable for your needs - for example loading it into the silver and gold layers of your data lake. For more information, see [data processing workloads](../data_engineering/data_processing.md).

In the steps below, we will generate a data processing pipeline that uses data ingested in the [previous task](./ingest_pipeline_deployment_azure.md) as its source, and loads it into the silver layer. The same approach can be used to load data from silver to gold.

## Step 1: Create feature branch

Before creating a new workload using Datastacks, open the project locally and create a new branch for the workload being created, e.g.:

```bash
git checkout -b feat/my-new-processing-pipeline
```

## Step 2: Prepare the Datastacks config file

Datastacks requires a YAML config file for generating a new ingest workload - see [Datastacks configuration](../data_engineering/datastacks.md#configuration) for further details.

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

Use the [Datastacks CLI](../data_engineering/datastacks.md#using-the-datastacks-cli) to generate the artifacts for the new workload, using the prepared config file (replacing `path_to_config_file/my_config.yaml` with the appropriate path).:

```bash
# Activate virtual environment
poetry shell

# Generate resources for an ingest pipeline (without data quality steps)
datastacks generate processing --config="path_to_config_file/my_config.yaml"

# Generate resources for an ingest pipeline (with added data quality steps)
datastacks generate processing --config="path_to_config_file/my_config.yaml" --data-quality
```

This will add new project artifacts for the workload under `de_workloads/processing/my_processing_pipeline`, based on the ingest workload templates. Review the resources that have been generated.

## Step 4: Update PySpark job

Within the generated workload, the following Python file will be used as the entrypoint for the processing job: `spark_jobs/process.py`. The file is structured ready to start adding any logic specific to your particular workload using Python / Spark. It will reference [Stacks Data utilities](../data_engineering/stacks_data_utilities.md) to simplify interactions with the data platform and standard transformation activities.

```python
import logging
from stacks.data.logger import setup_logger
from stacks.data.pyspark.etl import EtlSession

WORKLOAD_NAME = "processing_demo"

logger_library = "stacks.data"
logger = logging.getLogger(logger_library)


def etl_main() -> None:
    """Execute data processing and transformation jobs."""
    logger.info(f"Running {WORKLOAD_NAME} processing...")

    etl_session = EtlSession(WORKLOAD_NAME)
    spark_session = etl_session.spark_session
    adls_client = etl_session.adls_client

    #######################
    # Add processing here #
    #######################

    logger.info(f"Finished: {WORKLOAD_NAME} processing.")


if __name__ == "__main__":
    setup_logger(name=logger_library, log_level=logging.INFO)
    etl_main()

```

For the getting started guide, we have provided a simple example - you may extend this based on whatever your workload requires. Copy the following additional imports and constants into the top of your `process.py` file:

```python
from stacks.data.pyspark.etl import (
    TableTransformation,
    read_latest_rundate_data,
    transform_and_save_as_delta,
)
from stacks.data.pyspark.pyspark_utils import rename_columns_to_snake_case

BRONZE_CONTAINER = "raw"
SILVER_CONTAINER = "staging"
SOURCE_DATA_TYPE = "parquet"
INPUT_PATH_PATTERN = "ingest_azure_sql_example/movies.{table_name}/v1/full/"
OUTPUT_PATH_PATTERN = "movies/{table_name}"
```

Next, copy the following within the `etl_main` function in `process.py`, replacing the ` # Add processing here #` comment:

```python
    tables = [
        TableTransformation("links", rename_columns_to_snake_case),
        TableTransformation("ratings_small", rename_columns_to_snake_case),
    ]

    for table in tables:
        df = read_latest_rundate_data(
            spark_session,
            adls_client,
            BRONZE_CONTAINER,
            INPUT_PATH_PATTERN.format(table_name=table.table_name),
            datasource_type=SOURCE_DATA_TYPE,
        )

        output_path = OUTPUT_PATH_PATTERN.format(table_name=table.table_name)

        transform_and_save_as_delta(
            spark_session, adls_client, df, table.transformation_function, SILVER_CONTAINER, output_path
        )

```

The processing script is now prepared to perform the following steps:

1. Initiate a Spark session and connectivity to the data lake.
2. Define `TableTransformation` objects - these consist of an input table name, and a transformation function. Here we are specifying two tables - _links_ and _ratings_small_ - and assigning the `rename_columns_to_snake_case` function as their transformation function.
3. For each of the tables:
    1. Read the latest data from the bronze layer into a Spark DataFrame.
    2. Define an output path for the data in the silver layer.
    3. Execute the transformation function against the DataFrame.
    4. Save the transformed DataFrame into the silver layer in Delta format.

In order to run / debug the code during development, you may wish to use [Databricks for development](./dev_quickstart_data_azure.md#optional-pyspark-development-in-databricks).

## Step 5: Update tests

The workload is created with placeholders for adding unit and end-to-end tests - see [testing](../data_engineering/testing_data_azure.md) for further details.

### Unit tests

A placeholder for adding unit tests is located within the workload under `tests/unit/test_processing.py`. The unit tests are intended as a first step to ensure the code is performing as intended and ensure no breaking changes have been introduced. The unit tests will run as part of the deployment pipeline, and can be run locally by developers.

Within the same directory a `conftest.py` is provided. This contains a PyTest fixture to enable a local Spark session to be used for running the unit tests in isolation - for examples of this you can refer to the [example silver workload](https://github.com/Ensono/stacks-azure-data/blob/main/de_workloads/processing/silver_movies_example/tests/unit/).

Add any unit tests you require to `test_processing.py` (although they are not strictly required for the getting started guide). You may also add these tests to the project's `Makefile` under the `test` command, to easily run them alongside other unit tests in the project.

### End-to-end tests

A placeholder directory for end-to-end tests for the workload is provided under `tests/unit/test_processing.py`. These will run as part of the deployment pipeline.

End-to-end tests not required to be added for the getting started demo, but would be recommended when developing any production workload.

## Step 6: Deploy new workload in non-production environment

As for ingest workloads, processing workloads contains a YAML file containing a template Azure DevOps CI/CD pipeline, named `de-process-ado-pipeline.yaml`. This should be added as the definition for a new pipeline in Azure DevOps.

1. Sign-in to your Azure DevOps organization and go to your project.
2. Go to Pipelines, and then select New.
3. Name the new pipeline to match the name of your new workload, e.g. `de-process-my-processing-pipeline`.
4. For the pipeline definition, specify the YAML file in the project repository feature branch (e.g. `de-process-ado-pipeline.yaml`) and save.
5. The new pipeline will require access to any Azure DevOps pipeline variable groups specified in the [datastacks config file](#step-2-prepare-the-datastacks-config-file). Under each variable group, go to 'Pipeline permissions' and add the new pipeline.
6. Run the new pipeline.

Running this pipeline in Azure DevOps will deploy the artifacts into the non-production (nonprod) environment and run tests. If successful, the generated resources will now be available in the nonprod Ensono Stacks environment.

## Step 7: Review deployed resources

If successful, the workload's resources will now be deployed into the non-production resource group in Azure - these can be viewed through the [Azure Portal](https://portal.azure.com/#home) or CLI.

The Azure Data Factory resources can be viewed through the [Data Factory UI](https://adf.azure.com/). You may also wish to run/debug the newly generated pipeline from here (see [Microsoft documentation](https://learn.microsoft.com/en-us/azure/data-factory/iterative-development-debugging)).

:::note Updating Data Factory resources

The structure of the data platform and Data Factory resources are defined in the project's code repository, and deployed through the Azure DevOps pipelines. Changes to Data Factory resources directly through the UI will lead to them being overwritten when deployment pipelines are next run. See [Data Factory development quickstart](../getting_started/dev_quickstart_data_azure.md#azure-data-factory-development) for further information on updating Data Factory resources.

:::

Continue to make any further amendments required to the new workload, re-running the DevOps pipeline as required. If including data quality checks, update the (`data_quality_config.json`) file in the repository with details of checks required on the data.

## Step 8: Deploy new workload in further environments

In the example pipeline templates:

- Deployment to the non-production (nonprod) environment is triggered on a feature branch when a pull request is open
- Deployment to the production (prod) environment is triggered on merging to the `main` branch, followed by manual approval of the release step.

:::tip

It is recommended in any data platform that processes for deploying and releasing across environments should be agreed and documented, ensuring sufficient review and quality assurance of any new workloads. The template CI/CD pipelines provided are based upon two platform environments (nonprod and prod) - but these may be amended depending upon the specific requirements of your project and organisation.

:::
