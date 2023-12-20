---
id: stacks_data_utilities
title: Stacks Data Utilities
sidebar_label: Stacks Data Utilities
hide_title: false
hide_table_of_contents: false
description: Stacks Data utilities overview
keywords:
  - pyspark
  - spark
  - python
  - etl
---

[**stacks-data**](https://pypi.org/project/stacks-data/) is a Python library, containing a suite of utilities to accelerate development within an Ensono Stacks Data Platform. It is an integral part of the platform, supporting common tasks such as generating new data engineering workloads and running Spark jobs. **stacks-data** consists of:

- [Datastacks CLI](./datastacks.md) - A command-line interface for data engineers, enabling interaction with Datastacks' various functions.
- [Data workload generation](./datastacks.md#generating-data-workloads) - Generate new data workloads based upon common templates.
- PySpark utilities - A suite of reusable utilities to simplify development of data pipelines using Apache Spark and Python.
- Data quality utilities - Utilities to support the [data quality framework](./data_quality_azure.md) implemented in Stacks.
- Azure utilities - Utilities to support common interactions with Azure resources from data workloads.
- Behave utilities - Common scenarios and setup used by [Behave end-to-end tests](./testing_data_azure.md#end-to-end-tests).

## Setup

The following setup steps will ensure your development environment is setup correctly and install **stacks-data** in your Python virtual environment:

- Install the [local development requirements](../getting_started/requirements_data_azure.md#local-development).
- [Setup your local development environment](../getting_started/dev_quickstart_data_azure.md).

Alternatively, you can directly install stacks-data from [PyPi](https://pypi.org/project/stacks-data/), using:

```bash
pip install stacks-data
```

For information on utilising **stacks-data** from within Databricks - see [development in Databricks](../getting_started/dev_quickstart_data_azure.md#optional-pyspark-development-in-databricks).


## Azure environment variables

Several environment variables are required by stacks-data to interact with Azure services. The environment variables you require differ depending on which processes you are running, and where you are running them from (e.g. your local machine, a Databricks cluster, or a CICD pipeline). A Stacks Data Platform will automatically ensure the required environment variables are made available from CICD pipelines and Databricks job clusters. However, to run processes from your local machine or a different Databricks cluster, you will need to configure these manually.

### Storage account names

Environment variables defining the storage account names are required both for running Spark jobs and triggering end-to-end tests - so should be defined wherever you run these tasks from (e.g. local machine, Databricks cluster).

| Environment variable name | Description | Example value |
| ----- | ----- | ----- |
| `ADLS_ACCOUNT` | Azure Data Lake storage account name. | amidostacksdeveuwdeadls |
| `CONFIG_BLOB_ACCOUNT` | Blob Storage account name used for config data. | amidostacksdeveuwdeconfi |

### Running Spark jobs

For running Spark jobs, you need to define the storage account names as well as the environment variables below. If developing Spark jobs from within Databricks, these variables will need to be set on your cluster and should reference values from the key vault - see [PySpark development in Databricks](../getting_started/dev_quickstart_data_azure.md#optional-pyspark-development-in-databricks).

| Environment variable name | Description | Example value |
| ----- | ----- | ----- |
| `AZURE_TENANT_ID` | Directory ID for Azure Active Directory application. | _00000000-0000-0000-0000-000000000000_ |
| `AZURE_CLIENT_ID` | Service Principal Application ID. | _00000000-0000-0000-0000-000000000000_ |
| `AZURE_CLIENT_SECRET` | Service Principal Secret. | _secretValue123456_ |

### Running end-to-end tests

In order to trigger [end-to-end tests](testing_data_azure.md#end-to-end-tests), you need to define the storage account names as well as the environment variables below. Running end-to-end tests requires access to various Azure resources, for example to prepare and tidy up test data, and trigger Data Factory pipelines. `AZURE_TENANT_ID`, `AZURE_CLIENT_ID` and `AZURE_CLIENT_SECRET` may also be provided to authenticate with Azure, or alternatively if running the tests locally you can authenticate by [signing in to the Azure CLI](https://learn.microsoft.com/en-us/cli/azure/authenticate-azure-cli).

| Environment variable name | Description | Example value |
| ----- | ----- | ----- |
| `AZURE_SUBSCRIPTION_ID` | Azure subscription ID. | _00000000-0000-0000-0000-000000000000_ |
| `AZURE_RESOURCE_GROUP_NAME` | Name of the resource group. | amido-stacks-dev-euw-de |
| `AZURE_DATA_FACTORY_NAME` | Name of the Data Factory resource. | amido-stacks-dev-euw-de |
| `AZURE_REGION_NAME` | Azure region in which the platform is deployed. | West Europe |
