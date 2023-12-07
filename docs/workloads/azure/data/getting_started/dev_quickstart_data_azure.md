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

1. Make sure you have installed the applications in [local development requirements](./requirements_data_azure.md#local-development).
2. Ensure that Poetry is added to your `$PATH`.

## Environment setup

Poetry will be used to create a Python virtual environment for the project, and install the project's dependencies (including [stacks-data](../data_engineering/stacks_data_utilities.md)). A `make` command has been created to assist with the initial setup, as well as installing other development tools such as [pre-commit](#code-quality-checks).

:::tip

You may wish to enable the [virtualenvs.in-project](https://python-poetry.org/docs/configuration/#virtualenvsin-project) configuration setting in Poetry - this will ensure that the Python virtual environment for the project gets created within the project directory, which can simplify management and integration with your IDE. To set this, run `poetry config virtualenvs.in-project true`.

:::

To setup your local development environment, run the following commands:

```bash
# Use make command to setup your local development environment
make setup_dev_environment

# Enter the Poetry virtual environment shell
poetry shell
```

### (Optional) Azure connection

In order to interact with Azure resources when developing locally, including running end-to-end tests, you must [set up the environment variables](../data_engineering/stacks_data_utilities.md#azure-environment-variables) required by stacks-data.

## Running tests

`make` commands are provided to assist with running tests while developing locally. See [testing](../data_engineering/testing_data_azure.md) for further details on these tests.

:::tip

If you encounter PATH-related issues with Poetry when running the tests, we recommend installing Poetry using
[pipx](https://python-poetry.org/docs/#installing-with-pipx) rather than the official installer.

:::

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

:::tip

Running end-to-end tests from your local machine may require additional permissions in Azure. If the tests fail whilst clearing up directories, ensure that you have [Storage Blob Data Contributor](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#storage-blob-data-contributor) access applied to your Azure Active Directory subscription. You may also be required to configure the [firewall rules](https://learn.microsoft.com/en-us/azure/storage/common/storage-network-security) for the storage account to whitelist your IP address.

:::

### Code quality checks

[Pre-commit](https://pre-commit.com/) is used for code quality and linting checks on the project. It can be run using:

```bash
make pre_commit
```

## (Optional) PySpark development in Databricks

When developing with PySpark, you may wish to either:

- Run scripts locally using a local Spark installation, or
- Run scripts on a Databricks cluster, through [Databricks Repos](https://learn.microsoft.com/en-us/azure/databricks/repos/).

To run scripts within a Databricks cluster, you will need to:

- Ensure the [stacks-data library](../data_engineering/stacks_data_utilities.md) is installed on the cluster.
- Add the [environment variables](../data_engineering/stacks_data_utilities.md#azure-environment-variables) required for running Spark jobs. These should match those used in the [Data Factory linked service](https://github.com/Ensono/stacks-azure-data/blob/main/de_workloads/shared_resources/data_factory/adf_linked_services.tf), and reference secret values from the key vault where applicable, e.g.:

```bash
AZURE_TENANT_ID={{secrets/key-vault-backed/azure-tenant-id}}
AZURE_CLIENT_ID={{secrets/key-vault-backed/azure-client-id}}
AZURE_CLIENT_SECRET={{secrets/key-vault-backed/service-principal-secret}}
ADLS_ACCOUNT=amidostacksdeveuwdeadls
CONFIG_BLOB_ACCOUNT=amidostacksdeveuwdeconfi
```

## Azure Data Factory Development

A core component of the Ensono Stacks Data Platform is [Azure Data Factory](https://learn.microsoft.com/en-us/azure/data-factory/), which is used for ingest activities, pipeline orchestration and scheduling. When an instance of Data Factory has been deployed, it's intuitive user interface can be used for reviewing, monitoring and editing resources.

While resources can be edited directly through the UI, the approach used in Stacks is to manage all resources through infrastructure-as-code using Terraform. The allows full CI/CD capabilities and control over changes across environments. Developers may use Data Factory's UI to assist in the development of new resources, and then transpose these into the project repository.

The following resource types will typically be added for new data workloads:

| Resource type | Stacks workload types | Defined in | Notes |
| ----- | ----- | ----- | ----- |
| Linked services | Ingest | `data_factory/adf_linked_services.tf` | Refer to Microsoft documentation for up-to-date details on [connector types supported by Data Factory](https://learn.microsoft.com/en-us/azure/data-factory/connector-overview), and Terraform documentation for adding [custom linked services](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/data_factory_linked_custom_service). Core linked services are added during deployment of [shared resources](./shared_resources_deployment_azure.md). |
| Datasets | Ingest | `data_factory/adf_datasets.tf` | Refer to Terraform documentation for adding [custom datasets](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/data_factory_custom_dataset). Core datasets are added during deployment of [shared resources](./shared_resources_deployment_azure.md). |
| Pipelines | Ingest & Processing | `data_factory/adf_pipelines.tf` | Pipelines are deployed using the Terraform [azurerm_resource_group_template_deployment](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/resource_group_template_deployment) type. These refer to a JSON file containing the pipeline definition. The pipeline definition JSON can be obtained after creating pipelines interactively through the Data Factory UI. If editing a pipeline in the Data Factory UI, click the `{}` icon to view the underlying JSON - this can then be copied into the workload's JSON file in the project repo (under the `resources` element). |
| Triggers | Ingest | `data_factory/adf_triggers.tf` | Refer to Terraform documentation for adding triggers, e.g. [tumbling window triggers](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/data_factory_tumbling_window). |

:::tip

Changes to Data Factory resources directly through the UI will lead to them being overwritten when deployment pipelines are next run. Ensure updates are made within the project repository to ensure updates are not lost.

:::

## Next steps

Once you setup your local development environment, you can continue with the Getting Started tutorial by [deploying the shared resources](./shared_resources_deployment_azure.md).
