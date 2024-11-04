---
id: pipeline_gha_netcore
title: .NET - GitHub Actions Pipeline
sidebar_label: AWS/GHA Pipeline
description: How to configure GitHub Actions Pipeline for .NET
keywords:
  - .net
  - github actions
  - configure
  - pipeline
  - setting up
  - template
  - build
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The pipeline will automate provisioning and updating the .NET REST API with CQRS infrastructure in AWS.

## Pipeline Diagram

### Feature branch -> Dev sequence

<img alt="Dev .NET REST API - GitHub Actions Pipeline" src={useBaseUrl('img/netcore_pipeline_dev.png')} />

### Main branch -> Production sequence

<img alt="Prod .NET REST API - GitHub Actions Pipeline" src={useBaseUrl('img/netcore_pipeline_prod.png')} />

## Setting up GitHub Actions

### Variables

A variable file located at `.github/workflows/ci-env.yml` will contain the majority of the variables required for the pipeline. **This file should be manually checked and updated where required before first deployment**. If the project was generated using the Stacks CLI then the file will be updated with the information provided.

Environment secrets will need creating for storing some sensitive variables to be used by the pipeline. Instructions for creating a environment secrets can be found [here](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-deployments/managing-environments-for-deployment#environment-secrets).

Add the following secrets:

| Variable Name            | Description                                       | Required for               |
| ------------------------ | ------------------------------------------------- | -------------------------- |
| AWS_ACCESS_KEY_ID        | AWS IAM User Access Key ID                        | AWS Authentication         |
| AWS_ACCOUNT_ID           | AWS Account ID                                    | AWS Authentication         |
| AWS_SECRET_ACCESS_KEY    | AWS IAM User Secret Access Key                    | AWS Authentication         |
| AWS_TF_STATE_BUCKET      | S3 Bucket name for Terraform state                | Terraform State Management |
| AWS_TF_STATE_DYNAMOTABLE | DynamoDB Table name for Terraform state           | Terraform State Management |
| AWS_TF_STATE_ENCRYPTION  | Encrypt Terraform state. `true` or `false`        | Terraform State Management |
| AWS_TF_STATE_KEY         | Unique name for this applications Terraform state | Terraform State Management |
| AWS_TF_STATE_REGION      | AWS region                                        | Terraform State Management |

### Creating the pipeline

Stacks generates the GitHub Actions workflow file in the directory expected by GitHub Actions, `.github/workflows`. Committing this file to the `main` branch of a GitHub repository will "create" the pipeline. Instructions for viewing the results can be found [here](https://docs.github.com/en/actions/writing-workflows/quickstart#viewing-your-workflow-results)
