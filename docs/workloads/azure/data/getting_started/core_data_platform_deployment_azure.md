---
id: core_data_platform_deployment_azure
title: Infrastructure Deployment
sidebar_label: 2. Infrastructure Deployment
hide_title: false
hide_table_of_contents: false
description: Infrastructure deployment
keywords:
  - stacks cli
  - ensono
  - data
  - infrastructure
  - azure
  - template
---

This section provides an overview of configuring and deploying the core data platform infrastructure in Azure.

It assumes you have [generated a new data project using Ensono Stacks](./generate_project.md), and that the following [requirements](./requirements_data_azure.md) are in place:

* [Azure subscription and service principal](./requirements_data_azure.md#azure-subscription)
    * If you want to provision the infrastructure within a private network, this can be done as part of a [Hub-Spoke network topology](../architecture/infrastructure_data_azure#networking). Spoke virtual network and subnet for private endpoints must be provisioned for each environment. The hub network must contain a self-hosted agent. See [Microsoft documentation](https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/hybrid-networking/hub-spoke?tabs=cli) for more details on implementing Hub-spoke network topology in Azure.
* [Azure DevOps project with Pipelines variable groups](./requirements_data_azure.md#azure-devops).

## Step 1: Create branch and set networking option

Open the project locally and create a new feature branch e.g.:

```bash
git checkout -b feat/infra-pipeline
```

The file `deploy/azure/infra/vars.tf` contains a variable `enable_private_networks`:

* If you want to provision infrastructure within a [private network](../architecture/infrastructure_data_azure#networking), ensure this variable is set to `true`. This is the approach currently supported by Ensono Stacks.

## Step 2: Add Infrastructure pipeline in Azure DevOps

A YAML file containing a template Azure DevOps CI/CD pipeline for building and deploying the core infrastructure is provided in `build/azDevOps/azure/air-infrastructure-data.yml` - this should be added as the definition for a new pipeline in Azure DevOps.

1. Sign-in to your Azure DevOps organization and go to your project
2. Go to Pipelines, and then select **New pipeline**
3. Name the new pipeline, e.g. `amido.stacks-data-infrastructure`
4. For the pipeline definition, specify the YAML file in the project repository feature branch (`air-infrastructure-data.yml`) and save
5. The new pipeline will require access to any Azure DevOps pipeline variable groups specified in the pipeline YAML. Under each variable group, go to 'Pipeline permissions' and add the pipeline.

## Step 3: Deploy Infrastructure in non-production environment

Run the pipeline configured in Step 2 to commence the build and deployment process.

Running this pipeline in Azure DevOps will initiate the deployment of artifacts into the non-production (nonprod) environment. It's important to monitor the progress of this deployment to ensure its success. You can track the progress and status of the deployment within the Pipelines section of Azure DevOps.

If successful, the core infrastructure resources will now be available in the nonprod Ensono Stacks environment. To view these deployed resources, navigate to the [Azure portal](https://portal.azure.com/) and search for the resource group associated with the deployment. This resource group is named based upon values provided during step 1 in the pattern
`companyname-projectname-stage-region-component` (for example: `amido-stacks-dev-euw-de`). Within the resource group, you'll find a list of the resources that were deployed.

Once core infrasturcture resources are deployed in nonprod environment, values will need adding into the nonprod variable group to reflect the deployed resources (e.g. `amido-stacks-de-pipeline-nonprod`). For additional information, see [Pipelines variable groups](./requirements_data_azure.md#azure-pipelines-variable-groups).

## Step 4: Deploy Infrastructure in further environments

By default Ensono Stacks provides a framework for managing the platform across two environments - nonprod and prod.
The template CI/CD pipelines provided are based upon these two platform environments (nonprod and prod) - but these may be amended depending upon the specific requirements of your project and organisation.

* Deployment to the non-production (nonprod) environment is triggered on a feature branch when a pull request is open
* Deployment to the production (prod) environment is triggered on merging to the `main` branch, followed by manual approval of the release step.

Once core infrastructure resources are deployed in prod environment, values will need adding into the prod variable group to reflect the deployed resources (e.g. `amido-stacks-de-pipeline-prod`). For additional information, see [Pipelines variable groups](./requirements_data_azure.md#azure-pipelines-variable-groups).

## Next steps

Now you have generated and deployed a new Ensono Stacks Data Platform, [setup your local development environment](./dev_quickstart_data_azure.md).
