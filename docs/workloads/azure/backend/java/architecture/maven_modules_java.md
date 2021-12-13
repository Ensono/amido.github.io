---
id: maven_modules_java
title: Overview of Maven modularity
sidebar_label: Modularity Overview
hide_title: false
hide_table_of_contents: true
description: Maven Modules used as Stacks Workload dependencies
keywords:
- java
- maven
- module
- modularity
- archetype
---

In order to reduce code duplication, make maintenance easier and allow better customisation control, 
the Stacks Workloads use the following internal dependencies:

- [Stacks modules parent](/docs/workloads/azure/backend/java/architecture/dependency_parent_java), found in [stacks-java-module-parent](https://github.com/amido/stacks-java-module-parent)
- [Stacks commons core module](/docs/workloads/azure/backend/java/architecture/dependency_commons_java), found in [stacks-java-core-commons](https://github.com/amido/stacks-java-core-commons)
- [Stacks commons API module](/docs/workloads/azure/backend/java/architecture/dependency_api_java), found in [stacks-java-core-api](https://github.com/amido/stacks-java-core-api)
- [Stacks commons CQRS module](/docs/workloads/azure/backend/java/architecture/dependency_cqrs_java), found in [stacks-java-core-cqrs](https://github.com/amido/stacks-java-core-cqrs)
- [Stacks messaging core module](/docs/workloads/azure/backend/java/architecture/dependency_messaging_java), found in [stacks-java-core-messaging](https://github.com/amido/stacks-java-core-messaging)
- [Stacks Azure Service Bus module](/docs/workloads/azure/backend/java/architecture/dependency_servicebus_java), found in [stacks-java-azure-servicebus](https://github.com/amido/stacks-java-azure-servicebus)
- [Stacks Azure CosmosDB module](/docs/workloads/azure/backend/java/architecture/dependency_cosmos_java), found in [stacks-java-azure-cosmos](https://github.com/amido/stacks-java-azure-cosmos)

The modules are built and published independently of the Workloads and by default are pulled into the project as
Maven dependencies. You can easily replace these by cloning individual repositories and placing them in your
application either directly or as modules.
