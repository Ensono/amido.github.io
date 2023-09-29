---
id: dev_quickstart_data_azure
title: Local Development Quickstart
sidebar_label: 3. Local Development Quickstart
hide_title: false
hide_table_of_contents: false
description: Quickstart for local development
keywords:
  - quickstart
  - development
---

This section covers the steps required to start developing a Ensono Stacks Azure Data Platform from your machine:

1. Make sure you have installed the applications in [local development requirements](../requirements_data_azure.md#local-development).
2. Ensure that Poetry is added to your `$PATH`.

## Environment setup

A Makefile has been created to assist with setting up the development environment. Run:

```bash
make setup_dev_environment
```

### (Optional) Azure connection

In order to interact with Azure resources when developing, including running end-to-end tests, you must:

1. [Sign in to the Azure CLI](https://learn.microsoft.com/en-us/cli/azure/authenticate-azure-cli)
2. Set the following environment variables:
    - `AZURE_SUBSCRIPTION_ID`
    - `AZURE_RESOURCE_GROUP_NAME`
    - `AZURE_DATA_FACTORY_NAME`
    - `AZURE_REGION_NAME`
    - `AZURE_STORAGE_ACCOUNT_NAME`
    - `AZURE_CONFIG_ACCOUNT_NAME`

## Running tests

`make` commands are provided to assist with running tests while developing locally. See [testing](../etl_pipelines/testing_data_azure.md) for further details on these tests.

### Unit tests

In order to run unit tests, run the following command:

```bash
make test
```

### End-to-end tests

Running the end-to-end tests will involve executing Data Factory pipelines in Azure. Ensure you have setup the [Azure connection](#optional-azure-connection) and run:

```bash
make test_e2e
```

### Code quality checks

[Pre-commit](https://pre-commit.com/) is used for code quality and linting checks on the project. It can be run using:

```bash
make pre_commit
```

## (Optional) PySpark development in Databricks

ℹ️ This sub-section assumes that [Datastacks build & deployment](./datastacks_deployment_azure.md) has been completed - if you are working through the _getting started guide_ for the first time, you may skip this section.

When developing with PySpark, you may wish to either:

- Run scripts locally using a local Spark installation, or
- Run scripts on a Databricks cluster, through [Databricks Repos](https://learn.microsoft.com/en-us/azure/databricks/repos/).

To run scripts within a Databricks cluster, you will need to:

- Install the Datastacks whl file on the cluster, either from:
    - The latest deployed version in `dbfs:/FileStore/jars/datastacks-latest-py3-none-any.whl`, or
    - Create a new whl file with the `poetry build` command.
- Add the additional [environment variables](../etl_pipelines/pyspark_utilities.md#prerequisites) required for PySpark development - the values can be set as per the Data Factory linked service (see [adf_linked_services.tf](https://github.com/Ensono/stacks-azure-data/blob/main/de_workloads/shared_resources/data_factory/adf_linked_services.tf)).
- Ensure the user has appropriate permissions for Azure resources required.

## Troubleshooting

ℹ️ If you encounter PATH-related issues with Poetry when running the tests, we recommend installing Poetry using
[pipx](https://python-poetry.org/docs/#installing-with-pipx) rather than the official installer.

ℹ️ Running end-to-end tests from your local machine may require additional permissions in Azure. If the tests fail whilst clearing up directories, ensure that you have [Storage Blob Data Contributor](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#storage-blob-data-contributor) access applied to your Azure Active Directory subscription. You may also be required to configure the [firewall rules](https://learn.microsoft.com/en-us/azure/storage/common/storage-network-security) for the storage account to whitelist your IP address.

## Next steps

Once you setup your local development environment, you can continue with the Getting Started tutorial by [deploying the shared resources](shared_resources_deployment_azure.md).
