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

[PySparkle](https://github.com/ensono/stacks-azure-data/tree/main/pysparkle) is a Python library built to streamline data processing workflows with Apache Spark, and is an integral part of the Stacks Data Platform.

## Prerequisites

To develop and test using Pysparkle:

- Install the [local development requirements](../../requirements_data_azure.md#local-development).
- [Setup your local development environment](../../getting_started/dev_quickstart_data_azure.md).

## Key components

PySparkle is designed to assist implementing a [medallion data lake](../etl_intro_data_azure.md#medallion-architecture).
The key components of PySparkle include:

- **ETL Transformation Utilities** which streamline Data Pipelines by:
    - Offering PySpark utility functions. They accept raw data in various formats (e.g. CSV, Parquet, JSON, Delta)
    and convert it into a structured Delta format. PySparkle also facilitates pre-defined or user-defined transformations
    on dataframes.
    - Providing storage utilities that ensure smooth and secure interaction with Azure Data Lake and Blob storage.
- **[Data Quality](pysparkle_data_quality.md)**: PySparkle performs data quality checks according to
  user-provided configurations, ensuring the reliability and accuracy of the data.
