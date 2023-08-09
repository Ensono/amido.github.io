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

Stacks Data Platform contains a range of example data workloads and pipelines, designed to demonstrate its capabilities
for delivering production ready data engineering and analytics solutions. These example workloads cover all stages from
ingesting data from source, applying data transformations across data lake layers, ultimately enabling end-user data
visualisations and analytics.

## Data pipelines

The data lake structure and approach used in Stacks is based upon the
[medallion architecture](https://www.databricks.com/glossary/medallion-architecture) design pattern. This approach
delivers a lakehouse solution, with the following structured data transformation layers:

* [Bronze (data ingestion)](ingest_data_azure.md): Landing of raw data from source.
* [Silver](silver_data_azure.md): Conformance, cleansing and data quality processing stage.
* Gold: Data aggregations, refinement and enrichment, producing datasets optimised for analytics and visualisation.

## ETL utilities

Stacks data platform features several auxiliary utilities to enhance the process for developing and deploying
production-ready data pipelines and workloads.

* [Data Quality](data_quality_azure.md): An optional step incorporated into all ETL pipelines to ensure data integrity.
* [Datastacks](datastacks.md): A CLI tool designed to facilitate the creation of custom pipelines using predefined templates.
* [PySparkle](../../../common/data/pysparkle/pysparkle_quickstart.md): A versatile library equipped with reusable data processing components.

## Dataset

The example workloads included in the solution are based upon an
[example Azure SQL data source and dataset](../getting_started/example_data_source.md). This data source may optionally
be deployed as part of the data platform, to allow full demonstration testing of these example workloads.
