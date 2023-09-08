---
id: dev_quickstart_data_azure
title: Local Development Quickstart
sidebar_label: 2. Local Development Quickstart
hide_title: false
hide_table_of_contents: false
description: Quickstart for local development
keywords:
  - quickstart
  - development
---

This section covers the steps required to start developing a Stacks Azure Data Platform from your machine:

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
- `AZURE_RESOURCE_GROUP_NAME`
- `AZURE_DATA_FACTORY_NAME`
- `AZURE_REGION_NAME`
- `AZURE_STORAGE_ACCOUNT_NAME`

To run the E2E tests run:

```bash
make test_e2e
```

### Troubleshooting

ℹ️ If you encounter PATH-related issues with Poetry when running the tests, we recommend installing Poetry using
[pipx](https://python-poetry.org/docs/#installing-with-pipx) rather than the official installer.

ℹ️ The E2E tests may require additional permissions as we are editing data in ADLS during the E2E tests. If the tests fail
whilst clearing up directories, ensure that you have [Storage Blob Data Contributor](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#storage-blob-data-contributor) access applied to your Azure Active Directory subscription. You may also be required to configure the [firewall rules](https://learn.microsoft.com/en-us/azure/storage/common/storage-network-security) for the storage account to whitelist your IP address.

## Next steps

Once you setup your local development environment, you can continue with the Getting Started tutorial by [deploying the Shared Resources](shared_resources_deployment_azure.md)
