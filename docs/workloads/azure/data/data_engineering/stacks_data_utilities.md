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

To interact with Azure resources, the following additional environment variables are currently required:

- `AZURE_TENANT_ID`: Directory ID for Azure Active Directory application.
- `AZURE_CLIENT_ID`: Application ID for Azure Active Directory application.
- `AZURE_CLIENT_SECRET`: Service Principal Secret.
- `ADLS_ACCOUNT`: ADLS account name.
- `BLOB_ACCOUNT`: Blob Storage account name.
