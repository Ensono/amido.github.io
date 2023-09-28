---
id: etl_intro_data_azure
title: ETL Overview
sidebar_label: ETL Overview
hide_title: false
hide_table_of_contents: false
description: Introduction to ETL Pipelines
keywords:
  - ingest
  - silver
  - gold
  - bronze
  - databricks
  - etl
  - medallion
---

The Ensono Stacks Data Platform solution accelerates the generation of production-ready ETL / ELT pipelines and workloads. New data engineering workloads can be generated through the [Datastacks](./datastacks.md) utility, while a range of example data workloads and pipelines are also provided. These workloads cover all stages from
ingesting data from source, applying data transformations across data lake layers, ultimately enabling end-user data
visualisations and analytics.

## Medallion architecture

The data lake structure and approach used in Ensono Stacks is based upon the
[medallion architecture](https://www.databricks.com/glossary/medallion-architecture) design pattern. This approach
delivers a lakehouse solution, with the following structured data transformation layers:

* [Bronze](ingest_data_azure.md): Landing of raw data from source.
* [Silver](data_processing.md): Conformance, cleansing and data quality processing stage.
* Gold: Data aggregations, refinement and enrichment, producing datasets optimised for analytics and visualisation.

## Datastacks

[Datastacks](./datastacks.md) is a library and CLI built to accelerate the development of data engineering workloads in the data platform. It features a range of utilities to enhance the process for developing and deploying production-ready data pipelines and workloads.

## Quality assurance

Quality and reliability of data workloads are at the core of Ensono Stacks data platform. This is ensured through frameworks for [data quality](./data_quality_azure.md) and [automated testing](./testing_data_azure.md).

## Sample dataset

The example workloads included in the solution are based upon an
[example Azure SQL data source and dataset](../getting_started/example_data_source.md). This data source may optionally
be deployed as part of the data platform, to allow full demonstration testing of these example workloads.
