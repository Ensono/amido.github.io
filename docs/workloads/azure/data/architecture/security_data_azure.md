---
id: security_data_azure
title: Security
sidebar_label: Security
hide_title: false
hide_table_of_contents: false
description: Security
keywords:
  - security
  - service principal
  - managed identity
---

In Ensono Stacks Azure Data Platform all resources are created using the application-type Azure AD service
principal. Credentials for the service principal are stored in Azure Pipelines variable groups.

Both the service principal and the configured variable groups are the prerequisites for deploying
our platform to Azure. For details please check the [requirements](../getting_started/requirements_data_azure.md) page.

For internal communication between Azure services, Ensono Stacks Data Platform uses managed identities,
which are created automatically within our CI/CD deployments. For instance, Azure Data Factory
gets deployed with the managed private endpoints to access Blob Storage, Azure Data Lake Storage,
Key Vault etc.

In addition, all resources are created in a private Virtual Network (VNet) with all public access
disabled. For details please see [Infrastructure & Networking](./infrastructure_data_azure.md).
