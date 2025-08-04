---
id: github_actions
title: GitHub Actions Pipeline
sidebar_label: GitHub Actions
description: How do you set up a pipeline in GitHub Actions
keywords:
  - workload
  - pipeline
  - github actions
  - pipeline template
---

import HideNavigation from "../../../../src/components/HideNavigation/HideNavigation";
import useBaseUrl from '@docusaurus/useBaseUrl';

The pipeline will automate provisioning and updating the core infrastructure in AWS. This page assumes you have already completed the steps on the [core infrastructure page](../core_infrastructure.md).

The AWS infrastructure [source code](https://github.com/Ensono/stacks-infrastructure-eks).

## Pipeline Diagram

### Feature branch -> Non-Prod sequence

<img alt="AWS Core - GitHub Actions Pipeline" src={useBaseUrl('img/core_pipeline_nonprod.png')} />

### Main branch -> Prod sequence

<img alt="AWS Core - GitHub Actions Pipeline" src={useBaseUrl('img/core_pipeline_prod.png')} />

## Setting up GitHub Actions

### Environment Secrets

Environment secrets will need creating for storing some sensitive variables to be used by the pipeline. Instructions for creating a [environment secrets](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-deployments/managing-environments-for-deployment#environment-secrets).

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

### Update pipeline template placeholders

Where possible, the Stacks CLI will have populated the correct values in the pipeline environment file `.github/workflows/infrastructure.env`. We very much recommend that you go through the whole `.github/workflows` directory to make sure that values are correct for your project. Once you are happy with the template, commit the changes to your repository.

### Create the pipeline

Stacks generates the GitHub Actions workflow file in the directory expected by GitHub Actions, `.github/workflows`. Committing this file to the `main` branch of a GitHub repository will "create" the pipeline. Instructions for viewing [the results](https://docs.github.com/en/actions/writing-workflows/quickstart#viewing-your-workflow-results)

<HideNavigation next />
