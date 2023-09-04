---
id: pysparkle_quickstart
title: PySparkle
sidebar_label: Quickstart
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

[PySparkle](https://github.com/amido/stacks-azure-data/tree/main/pysparkle) is a Python library built to streamline
data processing workflows with Apache Spark, and is an integral part of the Stacks Data Platform.

## Key components

PySparkle is designed to assist implementing a [medallion data lake](../../../azure/data/etl_pipelines/etl_intro_data_azure.md#data-pipelines).
The key components of PySparkle include:

- **ETL Transformation Utilities** which streamline Data Pipelines by:
    - Offering PySpark utility functions. They accept raw data in various formats (e.g. CSV, Parquet, JSON, Delta)
    and convert it into a structured Delta format. PySparkle also facilitates pre-defined or user-defined transformations
    on dataframes.
    - Providing storage utilities that ensure smooth and secure interaction with Azure Data Lake and Blob storage.
- **[Data Quality](pysparkle_data_quality.md)**: PySparkle performs data quality checks according to
  user-provided configurations, ensuring the reliability and accuracy of the data.

## PySparkle Usage

To use PySparkle with Azure Data Lake Storage (ADLS Gen2), ensure that you have the following environment variables set:

- `AZURE_TENANT_ID`: Directory ID for Azure Active Directory application.
- `AZURE_CLIENT_ID`: Application ID for Azure Active Directory application.
- `AZURE_CLIENT_SECRET`: Service Principal Secret.
- `ADLS_ACCOUNT`: ADLS account name.
- `BLOB_ACCOUNT`: Blob Storage account name.

To perform data quality checks with PySparkle, you can use the [Datastacks](../datastacks.md) CLI:

```bash
datastacks dq --help
datastacks dq --config-path "ingest/Ingest_AzureSql_Example/data_quality/ingest_dq.json" --container config
```

## Prerequisites

Spark runs on Java 8/11/17, Java 8 prior to version 8u362 support is deprecated as of Spark 3.4.0.
For details see: [Spark Documentation](https://spark.apache.org/docs/latest/).
