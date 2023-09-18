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

The Stacks Data Platform solution accelerates the generation of production-ready ETL / ELT pipelines and workloads. New data engineering workloads can be generated through the [Datastacks](./datastacks.md) utility, while a range of example data workloads and pipelines are also provided. These workloads cover all stages from
ingesting data from source, applying data transformations across data lake layers, ultimately enabling end-user data
visualisations and analytics.

## Medallion architecture

The data lake structure and approach used in Stacks is based upon the
[medallion architecture](https://www.databricks.com/glossary/medallion-architecture) design pattern. This approach
delivers a lakehouse solution, with the following structured data transformation layers:

* [Bronze](ingest_data_azure.md): Landing of raw data from source.
* [Silver](data_processing.md): Conformance, cleansing and data quality processing stage.
* Gold: Data aggregations, refinement and enrichment, producing datasets optimised for analytics and visualisation.

## ETL utilities

Stacks data platform features several auxiliary utilities to enhance the process for developing and deploying
production-ready data pipelines and workloads.

* [Datastacks](datastacks.md): A CLI tool designed to facilitate the creation of custom pipelines using predefined templates.
* [PySparkle](pysparkle.md): A versatile library equipped with reusable data processing components.
* [Data Quality](data_quality_azure.md): An optional step incorporated into all ETL pipelines to ensure data integrity.

## Dataset

The example workloads included in the solution are based upon an
[example Azure SQL data source and dataset](../getting_started/example_data_source.md). This data source may optionally
be deployed as part of the data platform, to allow full demonstration testing of these example workloads.
