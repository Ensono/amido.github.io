---
id: data_processing
title: Data Processing Workloads
sidebar_label: Data Processing Workloads
hide_title: false
hide_table_of_contents: false
description: Data Processing Workloads
keywords:
  - silver
  - adf
  - etl
  - databricks
---

Data processing workloads in Ensono Stacks are jobs which:

1. Take data in the data lake as input (this can be various formats e.g. CSV, Parquet, JSON, Delta).
2. Perform some form of data transformation / cleansing / modelling / aggregation over the data.
3. Output the into the data lake into a structured [Delta Lake](https://delta.io/) format.

Data processing workloads are based upon running Apache Spark / Python jobs on Databricks. These workloads may be used for various levels of data transformation and preparation within the data lake. Within the [medallion architecture](./data_engineering_intro_azure.md#medallion-architecture) these will include:

- Bronze to Silver
- Silver to Gold

Processing workloads will utilise [Datastacks' PySpark utilities](./pyspark_utilities.md), to support and standardise common tasks. Similar to ingest workloads, data processing workloads can also optionally include a [Data Quality validations](./data_quality_azure.md) step.

The following example data processing workloads are included for reference:

- [silver_movies_example](https://github.com/Ensono/stacks-azure-data/tree/main/de_workloads/data_processing/silver_movies_example): Performs Bronze to Silver layer data processing over the [example dataset](../getting_started/example_data_source.md).
- [gold_movies_example](https://github.com/Ensono/stacks-azure-data/tree/main/de_workloads/data_processing/gold_movies_example): Aggregates and joins data from the Silver layer example above to create a Gold layer dataset.

## Data processing pipeline overview

Within Stacks, processing activities are performed using Python PySpark jobs. These jobs are orchestrated by pipelines in Data Factory, and executed in Databricks. Using PySpark jobs - as opposed to notebooks - gives full control over the processing activities (for example ensuring thorough [test coverage](./testing_data_azure.md) and quality control).

The diagram below gives an example of a data processing data pipeline in Data Factory.

![ADF_SilverGoldPipelineDesign.png](../images/ADF_SilverGoldPipelineDesign.png)

The Python PySpark script executed as part of a data workload is kept inside the `spark_jobs` directory for the workload. This job will utilise the [Datastacks library](./datastacks.md), which provides a wealth of reusable utilities to assist with data transformations and loading data from/into to the data lake.

### Data Factory pipeline design

Within Data Factory, the processing pipelines are kept within the `Process` folder:

![ADF_SilverPipelinesList.png](../images/ADF_SilverPipelinesList.png)

In Data Factory a data processing pipeline can be as simple as this example:

![ADF_Silver.png](../images/ADF_silver.png)

It contains just one step - Python Databricks, configured to run a `silver.py` script, which gets deployed to DBFS
(`dbfs:/FileStore/scripts/silver/silver.py`). The Datastacks package and library is deployed to DBFS, and made available to the cluster.
