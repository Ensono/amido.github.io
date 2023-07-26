---
id: requirements_data_azure
title: Requirements
sidebar_label: Requirements
hide_title: false
hide_table_of_contents: false
description: Requirements
keywords:
  - requirements
---

## Local development

* Python 3.9+
* Poetry https://python-poetry.org/docs/
* (Windows users) A Linux distribution, e.g. WSL2 https://docs.microsoft.com/en-us/windows/wsl/install

## Azure

* Azure subscription
* Azure DevOps

Stacks Azure Data Platform uses Azure DevOps to run CI/CD pipelines. An existing Azure DevOps project in your
organization is a pre-requisite to work with our solution.

### Azure Pipelines variable groups

Our blueprint solution expects the following [variable groups](https://learn.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups?view=azure-devops&tabs=yaml)
to exist in your Azure DevOps project's Pipelines Library:

* Nonprod Environment:
  * amido-stacks-de-pipeline-nonprod
  * amido-stacks-infra-credentials-nonprod
  * stacks-credentials-nonprod-kv
* Prod Environment:
  * amido-stacks-de-pipeline-prod
  * amido-stacks-infra-credentials-prod
  * stacks-credentials-prod-kv

Please see [Azure DevOps Pipelines](https://stacks.amido.com/docs/infrastructure/azure/pipelines/azure_devops)
for details on using Azure Pipelines in Stacks.
