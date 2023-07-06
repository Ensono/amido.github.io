---
id: core_data_platform_azure
title: Infrastructure
sidebar_label: Infrastructure
hide_title: false
hide_table_of_contents: false
description: Infrastructure overview
keywords:
  - azure
  - resource group
  - adf
  - adls
  - blob
  - databricks
  - key vault
---

Azure DevOps pipelines for building and deploying the core infrastructure are configured in
[build](https://github.com/amido/stacks-azure-data/tree/main/build) folder.

Core data platform resources are defined within Terraform templates and grouped inside
[deploy/azure](https://github.com/amido/stacks-azure-data/tree/main/deploy/azure) directory.
There are two subfolders in this directory:

* `infra`
* `networking`

## Infra

`infra` subfolder contains the following definitions:

1. **Resource Group**
2. **Azure SQL Database** sample instance with database schemas
3. **Key Vault**
4. **Key Vault Secrets**:
    * Connection strings for the created SQL databases
    * Passwords to the SQL Databases
    * Service Principal Secret
    * Azure Tenant ID – Directory ID for Azure Active Directory application
    * Azure Client ID – Application ID for Azure Active Directory application
    * Other secret names with empty values to be replaced manually. Existing secrets are not
    overwritten.
5. **Azure Data Lake Storage Gen2**
6. **Azure Blob Storage**
7. **Databricks Workspace** including:
    * **Key Vault-backed secret scope**
8. **Azure Data Factory** including:
    * **Managed identity** for the service instance;
    * **Managed virtual network** enabled by default. Creating an integration runtime within
    a managed virtual network ensures the data integration process is isolated and secure.
9. **Managed private endpoints** created in the Data Factory managed virtual network, these
   establish private links to Azure resources, such as:
    * Blob Storage
    * Azure Data Lake Storage
    * Key Vault
    * SQL Database
10. **Role assignments** that assign ADF managed identity roles to access the resources linked by
   the private endpoints, as well as the Databricks workspace.
11. **Log Analytics Workspace**

## Networking

Using a private network is the default behaviour in Stacks Azure Data Platform. `networking`
subfolder contains configurations for the created network and subnetworks, at its core using
[azurerm-hub-spoke](https://github.com/amido/stacks-terraform/tree/master/azurerm/modules/azurerm-hub-spoke)
Stacks Terraform module.

The following diagram shows network configuration in all three environments:

* dev (`is_hub: true`)
* nonprod (`is_hub: false`)
* prod (`is_hub: false`)

![network_hub_spoke.png](../../images/network_hub_spoke.png)

### Databricks secure cluster connectivity

Stacks Azure Data Platform uses VNet injection to deploy Databricks to a custom virtual network.

In most scenarios, we would recommend that Azure Databricks is deployed in a fully secure manner
using secure cluster connectivity and disabling public workspace access. This means that Databricks
can only be accessed over a private endpoint from within the private network. This also means that
projects would need to have networking prerequisites such as ExpressRoute or VPNs in order to access
the workspace. If this is not possible, then a virtual machine will need to be set up within the
transit subnet. Users will then need to RDP into the VM and access the workspace via that.

Within the default Stacks deployment, Databricks is provisioned with VNet injection while leaving
the workspace UI open. This is to improve developer experience in case there is no networking/VPN
set up properly configured in the target subscription.

Enabling public workspace access only opens access to the UI via public internet. Access is still
restricted based on the IAM policy.