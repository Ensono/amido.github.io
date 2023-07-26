---
id: dev_quickstart_data_azure
title: Development Quickstart
sidebar_label: Development Quickstart
hide_title: false
hide_table_of_contents: false
description: Quickstart for local development
keywords:
  - quickstart
  - development
---

Please execute the following steps to start working locally with Stacks Azure Data Platform:

1. Make sure you have installed the applications from the "Local development" section listed in
[Requirements](../requirements_data_azure.md).
2. Ensure that Poetry is added to your `$PATH`.

## Environment setup

A Makefile has been created to assist with setting up the development environment. Run:

```bash
make setup_dev_environment
```

## Running unit tests

In order to run unit tests, run the following command:

```bash
make test
```

### Running E2E Tests

To run E2E tests locally, you will need to login through the Azure CLI:

```bash
az login
```

To set the correct subscription run:

```bash
az account set --subscription <name or id>
```

To run the E2E tests, you need to set up the following environment variables:

- `AZURE_SUBSCRIPTION_ID`
- `RESOURCE_GROUP_NAME`
- `DATA_FACTORY_NAME`
- `REGION_NAME`
- `AZURE_STORAGE_ACCOUNT_NAME`

The E2E tests may require additional permissions as we are editing data in ADLS during the E2E tests. If the tests fail
whilst clearing up directories please check you have the necessary permissions to read, write and execute against ADLS.

To run the E2E tests run:

```bash
make test_e2e
```
