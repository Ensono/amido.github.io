---
id: maven_modules_java
title: Overview of Maven modularity
sidebar_label: Modularity Overview
hide_title: false
hide_table_of_contents: true
description: Maven Modules used as Ensono Stacks Workload dependencies
keywords:
- java
- maven
- module
- modularity
- archetype
---

In order to reduce code duplication, make maintenance easier and allow better customisation control, 
the Ensono Stacks Workloads use the following internal dependencies:

## Common Modules

These modules are shared modules, independant of the cloud provider selected: -

- [Ensono Stacks modules parent](/docs/workloads/common/backend/java/architecture/dependency_parent_java), found in [stacks-java-module-parent](https://github.com/Ensono/stacks-java-module-parent)
- [Ensono Stacks commons core module](/docs/workloads/common/backend/java/architecture/dependency_commons_java), found in [stacks-java-core-commons](https://github.com/Ensono/stacks-java-core-commons)
- [Ensono Stacks commons API module](/docs/workloads/common/backend/java/architecture/dependency_api_java), found in [stacks-java-core-api](https://github.com/Ensono/stacks-java-core-api)
- [Ensono Stacks commons CQRS module](/docs/workloads/common/backend/java/architecture/dependency_cqrs_java), found in [stacks-java-core-cqrs](https://github.com/Ensono/stacks-java-core-cqrs)
- [Ensono Stacks messaging core module](/docs/workloads/common/backend/java/architecture/dependency_messaging_java), found in [stacks-java-core-messaging](https://github.com/Ensono/stacks-java-core-messaging)

## Azure Capability Modules

Capabilities are provided by the Azure cloud platform: -

- [Ensono Stacks Azure Service Bus module](/docs/workloads/azure/backend/java/architecture/dependency_servicebus_java), found in [stacks-java-azure-servicebus](https://github.com/Ensono/stacks-java-azure-servicebus)
- [Ensono Stacks Azure CosmosDB module](/docs/workloads/azure/backend/java/architecture/dependency_cosmos_java), found in [stacks-java-azure-cosmos](https://github.com/Ensono/stacks-java-azure-cosmos)

## AWS Capability Modules

Capabilities are provided by the AWS cloud platform: -

- [Ensono Stacks AWS SQS module](/docs/workloads/aws/backend/java/architecture/dependency_sqs_java), found in [stacks-java-aws-sqs](https://github.com/Ensono/stacks-java-aws-sqs)
- [Ensono Stacks AWS DynamoDB module](/docs/workloads/aws/backend/java/architecture/dependency_dynamodb_java), found in [stacks-java-aws-dynamodb](https://github.com/Ensono/stacks-java-aws-dynamodb)

The modules are built and published independently of the Workloads and by default are pulled into the project as
Maven dependencies. You can easily replace these by cloning individual repositories and placing them in your
application either directly or as modules.
