---
id: architecture_data_azure
title: Architecture Overview
sidebar_label: Architecture Overview
hide_title: false
hide_table_of_contents: false
description: Introduction to Stacks Azure Data Platform
keywords:
  - data
  - python
  - etl
  - databricks
  - azure
  - adf
---

Stacks Azure Data Platform serves two primary functions:

* Deployment of a fully integrated, modern Azure Data Platform.
* A framework for generating new data engineering workloads from configurable templates, and deploying them to the Data Platform.

## Architecture of the deployed solution

![High-level architecture.png](../images/Stacks_Azure_Data_Platform-HLD.png)

## Deployment workflow

The following activity diagrams depicts the steps to create the Core Data Platform, as well as additional
data engineering workloads:

### Data platform deployment

![Data platform deployment](../images/workflow-core-platform.png)

### Data engineering workloads

![Data engineering workload generation and deployment](../images/workflow-de-workloads.png)
