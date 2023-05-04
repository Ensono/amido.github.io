---
id: data_platform_getting_started
title: Azure Data Platform - Getting Started
sidebar_label: Getting Started
description: Getting Started with the Azure Data Platform
keywords:
  - Data
  - Data Platform
  - Data Factory
---

# Stacks - Azure Data Ingest solution

## Overview

The repository for the Azure Data Platorm can be found at https://github.com/amido/stacks-azure-data-ingest. This repository contains a template for an Azure data platform solution, utilising Azure Data Factory for orchestration and ingestion, and Azure Data Lake Storage Gen2 for a data lake. Elements of the solution include:
* Infrastructure-as-code for all solution components (Terraform)
* Azure Data Factory resources and sample ingest pipeline (from sample source into landing (bronze) data lake zone)
* Metadata-based ETL configuration files
* Deployment pipelines for CICD / DataOps for all components
* Automated tests

### High-level architecture

![High-level architecture](/img/Stacks_Azure_Data_Platform-Ingestion_HLD.png "High-level architecture")

### Infrastructure deployed
* Resource Group
* Azure Data Factory
* Azure Data Lake Storage Gen2
* Azure Blob Storage (for config files)
* Azure Key Vault
* Log Analytics Workspace

## Repository structure
```
stacks-azure-data-ingest
├── build # Resources for building and deploying the solution (ADO pipelines)
├── config # Config files which will be uploaded to blob storage and used by ETL processes (JSON)
│   ├── schemas # JSON schemas for config files
├── data_factory # Azure Data Factory resources
│   ├── adf_managed # Path is managed by development Azure Data Factory - JSON configuration
│   ├── deployment # Utilities for deploying Azure Data Factory resources
├── docs # Documentation
├── infra # TF modules to deploy core Azure resources
├── tests #
│   ├── e2e # End-to-end tests (pytest, behave)
│   ├── integration # Integration tests (pytest, behave)
|   ├── unit # Unit tests (pytest)
├── utils # Utilities module to be used across solution
├── .flake8 # Configuration for Flake8 linting
├── .pre-commit-config.yaml # Configuration for pre-commit
├── Makefile # Includes commands for environment setup
├── pyproject.toml # Configuration for Poetry, Black
└── README.md # This file.
```

## Developing the solution

### Pre-requisites

* Python 3.10
* Poetry https://python-poetry.org/docs/
* (Windows users) A Linux distribution, e.g. WSL2 https://docs.microsoft.com/en-us/windows/wsl/install

### Setup Environment
Install the applications listed above, and ensure Poetry is added to your `$PATH`.

A Makefile has been created to assist with setting up the development environment. Run:
```bash
make setup_dev_environment
```

To install packages within Poetry, use (this will add the dependency to `pyproject.toml`):
```bash
poetry add packagename
```
to install a package for use only in the dev environment, use:
```bash
poetry add packagename --group dev
```

### Running unit tests

In order to run unit tests run the following command:

```bash
make test
```

### Running E2E Tests

To run E2E tests locally you will need to login through the Azure CLI:

```bash
az login 
```

To set the correct subscription run:

```bash
az account set --subscription <name or id>
```

To run the E2E tests you need to set up the following environment variables.

- `SUBSCRIPTION_ID`
- `RESOURCE_GROUP_NAME`
- `DATA_FACTORY_NAME`
- `REGION_NAME`
- `STORAGE_ACCOUNT_NAME`

The E2E tests may require additional permissions as we are editing data in ADLS during the E2E tests. If the tests fail
whilst clearing up directories please check you have the necessary permissions to read, write and execute against ADLS.

To run the E2E tests run:

```bash
make test_e2e
```