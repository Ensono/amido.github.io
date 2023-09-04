---
id: datastacks
title: Datastacks overview
sidebar_label: Datastacks
hide_title: false
hide_table_of_contents: false
description: Overview of the Datastacks utility
keywords:
  - data
  - python
  - etl
  - cli
  - azure
  - template
---

Datastacks is a utility built to support various functions within the Ensono Stacks Data Platform. The library and its associated Python-based CLI is intended to assist developers working within a deployed Stacks Data Platform, supporting common tasks such as generating new data engineering workloads and running Spark jobs.

## Using the Datastacks CLI

* [Setup project environment](../../azure/data/getting_started/dev_quickstart_data_azure.md)

```bash
# Initiate Datastacks using poetry:
poetry run datastacks

# Run Datastacks from the command line
datastacks --help

# Alternatively, run using entrypoint script
python datastacks/datastacks_cli.py --help
```

## Generating data workloads

Datastacks can be used to generate all the resources required for a new data engineering workload - for example a data ingest pipeline. This will create all resources required for the workload, based upon templates within the [de_templates](https://github.com/amido/stacks-azure-data/tree/main/de_templates) directory.

The [deployment architecture](../../azure/data/architecture/architecture_data_azure.md#data-engineering-workloads) section shows the workflow for using Datastacks to generate a new workload.
See [ETL Pipeline Deployment](../../azure/data/getting_started/etl_pipelines_deployment_azure.md) for a step-by-step guide on deploying a new workload using Datastacks.

### Commands

* **`generate`**: This command contains subcommands which generate components for the data platform given a config file.
    * **`ingest`**: This subcommand utilises the template for ingest data pipelines, and uses a given config file to generate the required code for a new ingest pipeline ready for use. A flag can be included to specify whether to include data quality components in the pipeline.

### Examples

```bash
# Generate resources for an ingest pipeline
datastacks generate ingest --config="de_templates/test_config_ingest.yaml"

# Generate resources for an ingest pipeline, with added Data Quality steps
datastacks generate ingest --config="de_templates/test_config_ingest.yaml" --data-quality
```

### Configuration

In order to generate a new data engineering workload the Datastacks CLI takes a path to a config file. This config file should be YAML format, and contain configuration values as specified in the table below. A sample config file is included in the [de_templates](https://github.com/amido/stacks-azure-data/tree/main/de_templates) folder. The structure of config is [validated using Pydantic](https://github.com/amido/stacks-azure-data/tree/main/datastacks/datastacks/config.py).

| Config field | Description | Required? | Format | Default value | Example value |
| --------------------------------------------- | ----------------------------------------------------------------- | --------------- | ------------ | ------------------- | ------------------- |
| dataset_name | Dataset name, used to derive pipeline and linked service names. | Yes | String | _n/a_ | AzureSql_Demo |
| pipeline_description | Description of the pipeline to be created. | Yes | String | _n/a_ | "Ingest from demo Azure SQL database using ingest config file." |
| data_source_type | Datasource type, at present this must be azure_sql. | Yes | String<br>Allowed values:<br>"azure_sql" | _n/a_ | azure_sql |
| key_vault_linked_service_name | Name of the Key Vault linked service in Data Factory. | Yes | String | _n/a_ | ls_KeyVault |
| data_source_password_key_vault_secret_name | Secret name of the data source password in Key Vault. | Yes | String | _n/a_ | sql-password |
| data_source_connection_string_variable_name | Variable name for the connection string. | Yes | String | _n/a_ | sql_connection |
| ado_variable_groups_nonprod | List of required variable groups in non-production environment. | Yes | List[String] | _n/a_ | - amido-stacks-de-pipeline-nonprod<br>- stacks-credentials-nonprod-kv |
| ado_variable_groups_prod | List of required variable groups in production environment. | Yes | List[String] | _n/a_ | - amido-stacks-de-pipeline-prod<br>- stacks-credentials-prod-kv |
| default_arm_deployment_mode | Deployment mode for terraform. | No | String | "Incremental" | Incremental |
| window_start_default | Date to set as start of default time window. | No | Date | "2010-01-01" | 2010-01-01 |
| window_end_default | Date to set as end of default time window. | No | Date | "2010-01-31" | 2010-01-31 |
| bronze_container | Name of container for Bronze data | Yes | String | _n/a_ | raw |
| silver_container | Name of container for Silver data | No | String | None | staging |
| gold_container | Name of container for Gold data | No | String | None | curated |
| trigger_start | Datetime to set as start time for pipeline trigger. | No | Datetime | _n/a_ | 2010-01-01T00:00:00Z |
| trigger_end | Datetime to set as end time for pipeline trigger. | No | Datetime | _n/a_ | 2011-12-31T23:59:59Z |
| trigger_frequency | Frequency for the trigger. | No | String<br>Allowed values:<br>"Minute"<br>"Hour"<br>"Day"<br>"Week"<br>"Month" | "Month" | Month |
| trigger_interval | Interval value for the trigger. | No | Integer | 1 | 1 |
| trigger_delay | Delay between triggered runs, formatted HH:mm:ss | No | String | "02:00:00" | 02:00:00 |

## Performing data quality checks

Datastacks provides a CLI to conduct data quality checks using the [PySparkle](pysparkle/pysparkle_quickstart.md) library as a backend.

```bash
datastacks dq --help
datastacks dq --config-path "ingest/Ingest_AzureSql_Example/data_quality/ingest_dq.json" --container config
```

### Required configuration

For details regarding the required environment settings and the configuration file please read
[PySparkle](pysparkle/pysparkle_quickstart.md) and [PySparkle Data Quality](pysparkle/pysparkle_data_quality.md) sections.
