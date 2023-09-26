---
id: pysparkle
title: PySparkle
sidebar_label: PySparkle
hide_title: false
hide_table_of_contents: false
description: PySparkle library overview
keywords:
  - pysparkle
  - spark
  - pyspark
  - python
  - etl
---

[PySparkle](https://github.com/ensono/stacks-azure-data/tree/main/pysparkle) is a Python library built to streamline data processing workflows with Apache Spark, and is an integral part of the Ensono Stacks Data Platform.

## Prerequisites

To develop and test using Pysparkle:

- Install the [local development requirements](../requirements_data_azure.md#local-development).
- [Setup your local development environment](../getting_started/dev_quickstart_data_azure.md).

### Pysparkle environment variables

To interact with Azure resources through Pysparkle, the following additional environment variables are currently required:

- `AZURE_TENANT_ID`: Directory ID for Azure Active Directory application.
- `AZURE_CLIENT_ID`: Application ID for Azure Active Directory application.
- `AZURE_CLIENT_SECRET`: Service Principal Secret.
- `ADLS_ACCOUNT`: ADLS account name.
- `BLOB_ACCOUNT`: Blob Storage account name.

These are defined in Databricks clusters - see [development in Databricks](../getting_started/dev_quickstart_data_azure.md#optional-pyspark-development-in-databricks) for further details.

## Key components

PySparkle is a library designed to assist implementing a [medallion data lake](./etl_intro_data_azure.md#medallion-architecture).
The key components of PySparkle include:

- **ETL Transformation Utilities** which streamline Data Pipelines by:
    - Offering PySpark utility functions. They accept raw data in various formats (e.g. CSV, Parquet, JSON, Delta)
    and convert it into a structured Delta format. PySparkle also facilitates pre-defined or user-defined transformations
    on dataframes.
    - Providing storage utilities that ensure smooth and secure interaction with Azure Data Lake and Blob storage.
- **[Data Quality](./data_quality_azure.md)**: PySparkle performs data quality checks according to
  user-provided configurations, ensuring the reliability and accuracy of the data.
