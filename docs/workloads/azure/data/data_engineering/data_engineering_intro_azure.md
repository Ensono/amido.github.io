---
id: data_engineering_intro_azure
title: Data Engineering Overview
sidebar_label: Data Engineering Overview
hide_title: false
hide_table_of_contents: false
description: Data Engineering in Ensono Stacks
keywords:
  - ingest
  - silver
  - gold
  - bronze
  - databricks
  - etl
  - medallion
---

Ensono Stacks accelerates the generation of production-ready data engineering workloads and pipelines for a data lakehouse. New data engineering workloads can be generated through the [Datastacks CLI](#stacks-data-utilities), while a range of example data workloads and pipelines are also provided. These workloads cover all stages from ingesting data from source, applying data transformations across data lake layers, ultimately enabling end-user data visualisations and analytics.

## Lakehouse approach

The Ensono Stacks Data Platform is based upon a _Lakehouse_ architecture. This approach combines the benefits of both data warehouses and data lakes, to provide a platform that is fully scalable, flexible and performant, along with governance and management capabilities. It can support all use cases, from complex machine learning to standard BI reporting and analysis.

### Medallion architecture

The data lake structure in Ensono Stacks is based upon the
[medallion architecture](https://www.databricks.com/glossary/medallion-architecture) design pattern. The default data lake deployed through Ensono Stacks contains the following data layers:

| Data lake layer | Description | Default container name | Data format | Stacks workload type |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Bronze | The initial landing area where data is stored as per its original source, prior to any transformations. | raw | Parquet | [Data ingest](./ingest_data_azure.md) |
| Silver | The data has been cleansed, validated and stored in an optimal format to support downstream analytic use-cases. | staging | Delta | [Data processing](./data_processing.md) |
| Gold | Reliable data entities prepared for specific use-cases. These typically combine and aggregate datasets from the silver layer. | conformance | Delta | [Data processing](./data_processing.md) |

### Fabric lakehouse

[Microsoft Fabric](https://learn.microsoft.com/en-us/fabric/) can be used as the lakehouse layer in an Ensono Stacks Data Platform. Fabric provides an all-in-one analytics experience, with a range of tools for data analysts, data engineers and data scientists. It also closely integrates with Power BI. Full details on getting a Fabric lakehouse up and running with your Ensono Stacks Data Platform are in the [getting started](../getting_started/fabric_deployment_guide.md) section.

## Stacks Data utilities

The deployed platform utilises the [Stacks Data Python library](./stacks_data_utilities.md), which provides a range of utilities to enhance the process for developing and deploying production-ready data pipelines and workloads. Central to this is the [Datastacks CLI](./datastacks.md), which enables automatic generation of new data workloads.

## Quality assurance

Quality and reliability of data workloads are at the core of Ensono Stacks Data Platform. This is ensured through frameworks for [data quality](./data_quality_azure.md) and [automated testing](./testing_data_azure.md).

## Sample dataset

The example workloads included in the solution are based upon an
[example Azure SQL data source and dataset](../getting_started/example_data_source.md). This data source may optionally
be deployed as part of the data platform, to allow full demonstration testing of these example workloads.
