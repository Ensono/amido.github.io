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

- **Silver processing**: Capabilities for performing 'Bronze to Silver' layer transformations. It accepts raw data of
various formats (e.g. CSV, Parquet, JSON, Delta) as an input and converts it into a more structured Delta format.
- **Gold processing**: Capabilities for performing 'Silver to Gold' layer transformations. Supports additional
transformations and aggregations of data, creating data sets optimised for downstream consumption.
- **Data Quality**: PySparkle performs data quality checks according to user-provided configurations, ensuring the
reliability and accuracy of the data.

## PySparkle Usage

> ℹ️ PySparkle Silver processing requires the following environment variables to be set
> to access Azure Data Lake Storage (ADLS Gen2):
>
> - AZURE_TENANT_ID - Directory ID for Azure Active Directory application,
> - AZURE_CLIENT_ID - Application ID for Azure Active Directory application,
> - AZURE_CLIENT_SECRET - Service Principal Secret,
> - ADLS_ACCOUNT - ADLS account name,
> - BLOB_ACCOUNT - Blob Storage account name.

### Using CLI

```bash
pysparkle --help
pysparkle silver --help
pysparkle silver --dataset-name=movies_dataset
pysparkle --log-level=warning silver --dataset-name=movies_dataset
pysparkle data-quality --config-path "data_quality/silver_dq.json"
```

### Using an entrypoint script

```bash
python pysparkle_cli.py --help
python pysparkle_cli.py silver --help
python pysparkle_cli.py silver --dataset-name=movies_dataset
python pysparkle_cli.py --log-level=warning silver --dataset-name=movies_dataset
python pysparkle_cli.py data-quality --config-path "data_quality/silver_dq.json"
```

## Prerequisites

Spark runs on Java 8/11/17, Java 8 prior to version 8u362 support is deprecated as of Spark 3.4.0.
For details see: [Spark Documentation](https://spark.apache.org/docs/latest/).

## Azure Data Factory setup

Example setup for running PySparkle from ADF.

```json
{
    "name": "silver",
    "properties": {
        "activities": [
            {
                "name": "Silver",
                "type": "DatabricksSparkPython",
                "dependsOn": [],
                "policy": {},
                "userProperties": [],
                "typeProperties": {
                    "pythonFile": "dbfs:/FileStore/scripts/pysparkle_cli.py",
                    "parameters": [
                        "silver",
                        "--dataset-name=movies_dataset"
                    ],
                    "libraries": [
                        {
                            "whl": "dbfs:/FileStore/jars/pysparkle-latest-py3-none-any.whl"
                        }
                    ]
                },
                "linkedServiceName": {
                    "referenceName": "ls_Databricks_Small",
                    "type": "LinkedServiceReference"
                }
            }
        ],
        "folder": {
            "name": "Process"
        },
        "annotations": []
    },
    "type": "Microsoft.DataFactory/factories/pipelines"
}
```
