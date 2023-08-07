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

Stacks Data Platform showcases an array of integrated data processing pipelines, designed to demonstrate its full
spectrum of capabilities. Our goal is to offer a comprehensive user journey that begins at the data source and travels
through multiple transformations within the data lake layers, culminating in visualizations on graphical dashboards.

## Data pipelines

The naming convention for the data pipelines originates in Databricks' Medallion Architecture, which emphasises
structured data transformation layers:

* [Data Ingestion](ingest_data_azure.md): The initial stage of data collection.
* [Silver Pipeline](silver_data_azure.md): Conformance, cleansing and data quality processing stage.
* Gold Pipeline: Involves data aggregations, refinement and enrichment, producing datasets optimized for analytics.

### ETL utilities

This section also introduces several auxiliary utilities to complement the main data pipelines:

* [Data Quality](data_quality_azure.md): An optional step incorporated into all ETL pipelines to ensure data integrity.
* [Datastacks](datastacks.md): A CLI tool designed to facilitate the creation of custom pipelines using predefined templates.
* [PySparkle](../../../common/data/pysparkle/pysparkle_quickstart.md): A versatile library equipped with reusable data processing components.

## Dataset

The platform leverages [The Movies Dataset](../getting_started/example_data_source.md#example-dataset), which contains
metadata and ratings for approximately 45,000 movies released on or before July 2017.

**The Movies Dataset** contains a number of CSV files and includes values of different types, including nested datatypes
and arrays, which give us enough complexity for transformations.
