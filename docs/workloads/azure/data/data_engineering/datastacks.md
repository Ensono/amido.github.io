---
id: datastacks
title: Datastacks CLI
sidebar_label: Datastacks CLI
hide_title: false
hide_table_of_contents: false
description: Overview of the Datastacks CLI utility
keywords:
  - data
  - python
  - etl
  - cli
  - azure
  - template
---

The Datastacks CLI is a command-line interface for data engineers, built upon the [Stacks Data Python library](./stacks_data_utilities.md). It's features include:

- [Data workload generation](#generating-data-workloads) - Generate new data engineering workloads based upon common templates.
- [Data quality checks](./data_quality_azure.md#interactive-usage) - Interactively run data quality checks over a data source.

## Using the Datastacks CLI

- [Setup project environment](../getting_started/dev_quickstart_data_azure.md)

```bash
# Option 1: Run Datastacks CLI using Poetry's interactive shell (recommended for local development)
poetry shell
datastacks --help

# Option 2: Run Datastacks CLI using poetry run (recommended where Poetry shell cannot be used, e.g. CI/CD pipelines)
poetry run datastacks --help
```

## Generating data workloads

Datastacks can be used to generate all the resources required for a new data engineering workload - for example a [data ingest](./ingest_data_azure.md) or [data processing](./data_processing.md) pipeline. This will create all resources required for the workload, based upon templates.

The [deployment architecture](../architecture/architecture_data_azure.md#data-engineering-workloads) section shows the workflow for using Datastacks to generate a new workload.
The [getting started](../getting_started/getting_started.md) section includes step-by-step instructions on deploying a new ingest or processing workload using Datastacks.

### Commands

- **`generate`**: Top-level command for generating resources for a new data workload.
    - **`ingest`**: Subcommand to generate a new [data ingest workload](./ingest_data_azure.md), using the provided configuration file. A optional flag (`--data-quality` or `-dq`) can be included to specify whether to include data quality components in the workload.
    - **`processing`**: Subcommand to generate a new [data processing workload](./data_processing.md), using the provided configuration file. A optional flag (`--data-quality` or `-dq`) can be included to specify whether to include data quality components in the workload.

### Examples

```bash
# Activate virtual environment
poetry shell

# Generate resources for an ingest workload
datastacks generate ingest --config="de_workloads/generate_examples/test_config_ingest.yaml"

# Generate resources for an ingest workload, with added data quality steps
datastacks generate ingest --config="de_workloads/generate_examples/test_config_ingest.yaml" --data-quality

# Generate resources for a processing workload
datastacks generate processing --config="de_workloads/generate_examples/test_config_processing.yaml"

# Generate resources for a processing workload, with added data quality steps
datastacks generate processing --config="de_workloads/generate_examples/test_config_processing.yaml" --data-quality
```

### Configuration

In order to generate a new data engineering workload the Datastacks CLI takes a path to a config file. This config file should be YAML format, and contain configuration values as specified in the table below. Sample config files are included in the [de_workloads/generate_examples](https://github.com/ensono/stacks-azure-data/tree/main/de_workloads/generate_examples) folder.

#### All workloads

| Config field | Description | Required? | Format | Default value | Example value |
| --------------------------------------------- | ----------------------------------------------------------------- | --------------- | ------------ | ------------------- | ------------------- |
| pipeline_description | Description of the pipeline to be created. Will be used for the Data Factory pipeline description. | Yes | String | _n/a_ | "Ingest from demo Azure SQL database using ingest config file." |
| ado_variable_groups_nonprod | List of required variable groups in non-production environment. | Yes | List[String] | _n/a_ | - amido-stacks-de-pipeline-nonprod<br />- stacks-credentials-nonprod-kv |
| ado_variable_groups_prod | List of required variable groups in production environment. | Yes | List[String] | _n/a_ | - amido-stacks-de-pipeline-prod<br />- stacks-credentials-prod-kv |
| default_arm_deployment_mode | Deployment mode for terraform. | No | String | "Incremental" | Incremental |
| stacks_data_package_version | Version of the [stacks-data](./stacks_data_utilities.md) Python package in PyPi to install on the job cluster. | No | String (SemVer pattern) | _Latest available package at the time of generation_ | 0.1.2 |

#### Ingest workloads

| Config field | Description | Required? | Format | Default value | Example value |
| --------------------------------------------- | ----------------------------------------------------------------- | --------------- | ------------ | ------------------- | ------------------- |
| dataset_name | Dataset name, used to derive pipeline and linked service names, e.g. AzureSql_Example. | Yes | String | _n/a_ | azure_sql_demo |
| data_source_password_key_vault_secret_name | Secret name of the data source password in Key Vault. | Yes | String | _n/a_ | sql-password |
| data_source_connection_string_variable_name | Variable name for the connection string. | Yes | String | _n/a_ | sql_connection |
| data_source_type | Data source type. | Yes | String<br /><br />Allowed values[^1]:<br />"azure_sql" | _n/a_ | azure_sql |
| bronze_container | Name of container for landing ingested data. | No | String | raw | raw |
| key_vault_linked_service_name | Name of the Key Vault linked service in Data Factory. | No | String | ls_KeyVault | ls_KeyVault |
| trigger_start | Start datetime for Data Factory pipeline trigger. | No | Datetime | _n/a_ | 2010-01-01T00:00:00Z |
| trigger_end | Datetime to set as end time for pipeline trigger. | No | Datetime | _n/a_ | 2011-12-31T23:59:59Z |
| trigger_frequency | Frequency for the Data Factory pipeline trigger. | No | String<br /><br />Allowed values:<br />"Minute"<br />"Hour"<br />"Day"<br />"Week"<br />"Month" | "Month" | Month |
| trigger_interval | Interval value for the Data Factory pipeline trigger. | No | Integer | 1 | 1 |
| trigger_delay | Delay between Data Factory pipeline triggers, formatted HH:mm:ss | No | String | "02:00:00" | 02:00:00 |
| window_start_default | Default window start date in the Data Factory pipeline. | No | Date | "2010-01-01" | 2010-01-01 |
| window_end_default | Default window end date in the Data Factory pipeline. | No | Date | "2010-01-31" | 2010-01-31 |

[^1]: Additional data source types will be supported in future - see [ingest data source types](./ingest_data_azure.md#data-source-types).

#### Processing workloads

| Config field | Description | Required? | Format | Default value | Example value |
| --------------------------------------------- | ----------------------------------------------------------------- | --------------- | ------------ | ------------------- | ------------------- |
| pipeline_name | Name of the data pipeline / workload. | Yes | String | _n/a_ | processing_demo |
