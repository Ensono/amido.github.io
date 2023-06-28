---
id: silver_data_azure
title: Silver Pipeline
sidebar_label: Silver Pipeline
hide_title: true
hide_table_of_contents: false
description: Silver processing pipeline
keywords:
  - silver
  - adf
  - etl
  - databricks
---

# Silver processing

Silver processing represents the 'Bronze to Silver' layer transformations. It accepts raw data
(e.g. CSV files) as an input and converts it into a more structured delta format.
Azure Data Lake Storage (ADLS Gen2) has been chosen as both the source and destination system for
our data processing.

## Pipeline overview

The diagram below gives an overview of the Silver pipeline design.

![ADF_SilverPipelineDesign.png](../../images/ADF_SilverPipelineDesign.png?raw=true)


Silver processing is executed as Python Databricks job with the data transformation logic
packaged within our [PySparkle](../../../../common/data/pysparkle/pysparkle_quickstart.md) library.

## Data Factory pipeline design

The pipelines folder is structured as follows:

![ADF_SilverPipelinesList.png](../../images/ADF_SilverPipelinesList.png)

Similar to other ETL pipelines, Silver can optionally include a Data Quality validations step.
Depending on your particular needs, you can deploy each of the pipelines with or without a Data
Quality step. More on Data Quality can be found [here](data_quality_azure.md).

In ADF the base Silver pipeline is as simple as this:

![ADF_Silver.png](../../images/ADF_silver.png)

It contains just one step - Python Databricks, configured to run a simple script (`silver.py`),
which is an entrypoint to the PySparkle library. PySparkle is attached to a cluster by pointing
to its location in DBFS.

Contents of `dbfs:/FileStore/scripts/silver.py`:
```python
from pysparkle.pysparkle_cli import cli

def call_pysparkle_entrypoint():
    cli(["silver", "--dataset-name", "movies_dataset"], standalone_mode=False)

if __name__ == "__main__":
    call_pysparkle_entrypoint()
```
