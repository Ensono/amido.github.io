---
id: data_platform_overview
title: Azure Data Platform Overview
sidebar_label: Azure Data Platform Overview
description: Overview of data platform on Azure
keywords:
  - Data
  - Data Platform
  - Data Factory
---

## Overview

The pipeline is designed to read data from a source and upload it to Azure Blob Storage for further processing.

## Components

Azure Blob Storage: The data ingestion pipeline uses Azure Blob Storage as the destination for the data being ingested. The repository provides configuration files that allow you to specify the storage account and container to use for the data.

Source data: The repository is designed to ingest data from a source, such as a CSV file or an API endpoint. The source data can be configured in the repository's configuration files.

Data ingestion script: The repository contains a Node.js script (`index.js`) that reads data from the source and uploads it to Azure Blob Storage. The script can be run on demand or scheduled to run at specific intervals using a scheduler such as Azure Functions or Azure Logic Apps.

Configuration files: The repository contains several configuration files that allow you to customize the data ingestion pipeline. These files include:

- `config.js`: This file contains the configuration variables for the data ingestion pipeline, such as the source data location and the destination Blob Storage container.
- `appsettings.json`: This file contains configuration variables for the Node.js script, such as the logging level and the maximum number of parallel uploads.

These Terraform scripts create and configure the following resources in Azure:

- Storage Account: The Terraform scripts create a new Azure Storage Account or use an existing one if it's provided in the configuration. The Storage Account is used to store the data being ingested.
- Blob Container: The Terraform scripts create a new Blob Container inside the Storage Account or use an existing one if it's provided in the configuration. The Blob Container is used to organize and store the data being ingested.
- Resource Group: The Terraform scripts create a new Azure Resource Group or use an existing one if it's provided in the configuration. The Resource Group is used to group together all the Azure resources created by the scripts.
- Storage Account Access Key: The Terraform scripts create an Access Key for the Storage Account, which is used by the data ingestion script to access the Blob Container.
- App Service Plan: The Terraform scripts create an App Service Plan, which is used to host the data ingestion script.
- App Service: The Terraform scripts create an App Service, which runs the Node.js data ingestion script.
- Application Insights: The Terraform scripts create an Application Insights instance, which provides monitoring and telemetry data for the data ingestion script.

Azure Data factory: Azure Data Factory (ADF) is Azure's cloud ETL service for serverless data integration and data transformation. The ADF UI allows developers to build and debug these resources visually, with all configurations saved in JSON format. Resources will be deployed programmatically through ARM templates.

ADF-managed approach with Automated ADF publish:

- Git repo linked to Development ADF instance - dedicated path in repo managed by ADF (auto commits on saves).
- ADF resources saved as JSON in repo.
- Each user makes changes in their private branches.
- Users must create a pull request to make changes in the Master branch.
- The Azure DevOps pipeline build is triggered every time a new commit is made to master. It validates the resources and generates an ARM template as an artifact if validation succeeds.
- The DevOps Release pipeline is configured to create a new release and deploy the ARM template each time a new build is available.

In the approach, the build pipeline uses the ADFUtilities NPM package, which will validate all the resources and generate the ARM templates. 

The build pipeline is responsible for validating Data Factory resources and generating the ARM template instead of the Data Factory UI (Publish button).

The ADO pipeline handles deployment in each environment.

Pre- and post-deployment scripts for stopping, starting, and cleaning up resources are generated automatically during the build process, so there is no need to maintain these scripts separately. 
