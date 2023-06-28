---
id: repository_data_azure
title: Repository
sidebar_label: Repository
hide_title: true
hide_table_of_contents: false
description: Repository structure explained
keywords:
  - data
  - python
  - repository
---

# Repository structure

Structure of [stacks-azure-data](https://github.com/amido/stacks-azure-data) repository:

```
stacks-azure-data
├── build # Azure DevOps pipelines configuration for building and deploying the core infrastructure
├── data_processing # Azure Data Factory ETL pipelines, leveraging Databricks for data transformations
│   ├── config # Configuration files (uploaded to blob storage)
│   ├── jobs # Data processing pipelines with optional Data Quality checks
│   │   ├── gold # Bronze to Silver layer transformations
│   │   ├── silver # Silver to Gold layer transformations
├── de_build # Azure DevOps pipelines configuration for building and deploying ADF pipelines
├── deploy # TF modules to deploy core Azure resources (used by `build` directory)
├── docs # Documentation
├── ingest # Pipeline utilizing ADF for data ingestion, with optional Data Quality checks performed in Databricks
│   ├── config # Configuration files used by ETL and DQ processes (uploaded to blob storage)
│   ├── jobs
│   │   ├── Generate_Ingest_Query # Helper utility used in the ingestion pipeline
│   │   ├── Get_Ingest_Config # Helper utility used in the ingestion pipeline
│   │   ├── Ingest_AzureSql_Example # Data ingestion pipeline with optional Data Quality checks
├── pysparkle # Python library built to streamline data processing; packaged and uploaded to DBFS
├── utils # Python utilities package used across solution for local testing
├── .flake8 # Configuration for Flake8 linting
├── .pre-commit-config.yaml # Configuration for pre-commit hooks
├── Makefile # Includes commands for environment setup
├── pyproject.toml # Project dependencies
└── README.md # This file.
```
