---
id: pyspark_utilities
title: PySpark utilities
sidebar_label: PySpark utilities
hide_title: false
hide_table_of_contents: false
description: PySpark utilities overview
keywords:
  - pyspark
  - spark
  - pyspark
  - python
  - etl
---

The [Datastacks](./datastacks.md) Python library contains utilities built to streamline data processing workflows with Apache Spark, and is an integral part of data workloads in Ensono Stacks.

Datastacks also provides the foundation for the [Data Quality framework](./data_quality_azure.md) in Stacks.

### Prerequisites

To develop and test using PySpark with Datastacks, the following setup is required:

- Install the [local development requirements](../requirements_data_azure.md#local-development).
- [Setup your local development environment](../getting_started/dev_quickstart_data_azure.md).

To interact with Azure resources, the following additional environment variables are currently required:

- `AZURE_TENANT_ID`: Directory ID for Azure Active Directory application.
- `AZURE_CLIENT_ID`: Application ID for Azure Active Directory application.
- `AZURE_CLIENT_SECRET`: Service Principal Secret.
- `ADLS_ACCOUNT`: ADLS account name.
- `BLOB_ACCOUNT`: Blob Storage account name.

These are defined in Databricks clusters - see [development in Databricks](../getting_started/dev_quickstart_data_azure.md#optional-pyspark-development-in-databricks) for further details.
