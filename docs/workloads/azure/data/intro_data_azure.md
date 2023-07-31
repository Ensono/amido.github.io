---
id: intro_data_azure
title: Stacks Azure Data Platform
sidebar_label: Introduction
hide_title: false
hide_table_of_contents: false
description: Introduction to Stacks Azure Data Platform
keywords:
  - data
  - python
  - etl
  - databricks
  - azure
  - adf
  - template
---

The [Stacks Azure Data Platform](https://github.com/amido/stacks-azure-data) solution provides
a template for deploying a production-ready data platform, including **Azure Data Factory** for data
ingestion and orchestration, **Databricks** for data processing and **Azure Data Lake Storage Gen2**
for data lake storage. The solution's data workload naming convention originates from Databricks'
Medallion Architecture, a system emphasising structured data transformation layers.

Key elements of the solution include:

* Infrastructure as code (IaC) for all infrastructure components (Terraform);
* A sample ingest pipeline that transfers data from a source into a landing (Bronze) data lake zone;
* Sample data processing pipelines named Silver and Gold. Silver is responsible for data transformations from Bronze
to Silver layer, while Gold handles transformations from Silver to Gold layer;
* Data Quality validations;
* Datastacks CLI and templates, which allow generation of new ingestion or data processing pipelines based
on the provided configuration;
* Deployment pipelines to enable CI/CD and DataOps for all components;
* Automated tests to ensure quality assurance and operational efficiency;
* [Datastacks](etl_pipelines/datastacks.md) - a library and CLI built to accelerate the development of data engineering
workloads in the data platform;
* [Pysparkle](../../common/data/pysparkle/pysparkle_quickstart.md) - a library built to streamline data processing activities running in Apache Spark.

### High-level architecture

![High-level architecture.png](images/Stacks_Azure_Data_Platform-HLD.png)

### Infrastructure deployed

* Resource Group
* Key Vault
* Azure Data Lake Storage Gen2
* Azure Blob Storage
* Azure Data Factory
* Log Analytics Workspace
* Databricks Workspace (optional)
* Azure SQL Database (optional)

For details please see [Infrastructure](infrastructure_data_azure.md).

### Data Engineering workloads

Example data engineering workloads are provided, which run within a deployed Stacks Azure Data Platform.
These are categorised as follows:

* [Ingest](etl_pipelines/ingest_data_azure.md)
* [Bronze to Silver](etl_pipelines/silver_data_azure.md)

Each of the ingest and data processing workloads may optionally include [Data Quality checks](etl_pipelines/data_quality_azure.md).
