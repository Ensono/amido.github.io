---
id: core_data_platform_deployment_azure
title: Infrastructure Deployment
sidebar_label: 1. Infrastructure Deployment
hide_title: false
hide_table_of_contents: false
description: Infrastructure deployment
keywords:
  - stacks cli
  - data
  - infrastructure
  - azure
  - template
---

This section provides an overview of generating a new Data Platform project and deploying core infrastructure for Stacks Data Platform.
This aligns to the workflow shown in the [deployment architecture](../architecture/architecture_data_azure.md#data-engineering-workloads) section.
It assumes the [Azure requirements](../requirements_data_azure.md#azure) are in place, including:

* Azure subscription and service principal
* Azure DevOps project with [Pipelines variable groups](../requirements_data_azure.md#azure-pipelines-variable-groups)
* A remote git repository for hosting the generated project (this guide assumes `main` is the primary branch in this repo)

## Step 1: Create/Generate Data Platform project using Stacks CLI

The [Stacks CLI](https://stacks.amido.com/docs/stackscli/about) will help you get started with scaffolding your applications and workspaces using Stacks. Through a series of questions the CLI will determine how and what to build for your workspace, helping to accelerate your development process.

Download and install the `stacks-cli` using [Stacks CLI](https://stacks.amido.com/docs/stackscli/about) page. Please refer to the **Stacks.CLI.Manual** in the latest `stacks-cli` release for detailed instruction.

To construct a Data Platform project, two primary cli commands are required: `stacks-cli interactive` and `stacks-cli scaffold`.

The interactive command is designed to ask questions on the command line about the configuration
required for setting up Ensono Digital Stacks. It will then save this configuration out to a file that can be
read in using the scaffold command.

```cmd
stacks-cli interactive
```

The majority of the questions are self-explanatory; please refer to the **Stacks.CLI.Manual** for further detail, however the following two will define the type of the target project.

| Question                                      | Required value for data project |
|-----------------------------------------------|---------------------------------|
| What framework should be used for the project?| infra                           |
| Which type of infrastructure is required?     | data                            |

The resulting configuration file named `stacks.yml` contains all of the configuration that was used to generate the project,
which means it can be used to produce the same project stack again.

The CLI can be used with a configuration file to generate the Ensono Digital Stacks based projects using `stacks-cli scaffold`.

```cmd
stacks-cli scaffold -c ./stacks.yml
```

Open the project locally and push the generated project to the target remote repository's `main` branch.

## Step 2: Add Infrastructure pipeline in Azure DevOps

Open the project locally and create a new feature branch e.g.:

```bash
git checkout -b feat/infra-pipeline
```

YAML file containing a template Azure DevOps CI/CD pipeline for building and deploying the core infrastructure is provided in `build/azDevOps/azure/air-infrastructure-data.yml`.

YAML file `air-infrastructure-data.yml` should be added as the definition for a new pipeline in Azure DevOps.

1. Sign-in to your Azure DevOps organization and go to your project
2. Go to Pipelines, and then select **New pipeline**
3. Name the new pipeline, e.g. `amido.stacks-data-infrastructure`
4. For the pipeline definition, specify the YAML file in the project repository feature branch (`air-infrastructure-data.yml`) and save
5. The new pipeline will require access to any Azure DevOps pipeline variable groups specified in the pipeline YAML. Under each variable group, go to 'Pipeline permissions' and add the pipeline.

### Optional: Networking and self-hosted agent

The `build/azDevOps/azure/network` folder contains a YAML file named `air-infrastructure-data-network.yml` that serves as a template for Azure DevOps CI/CD pipeline for networking and self-hosted agent infrastructure.

If the client or user does not have their own network and self-hosted agent, they must establish the networking pipeline in Azure DevOps following the procedures outlined above. This setup should be completed before initiating the core infrastructure pipeline.

The `build/azDevOps/azure/network` folder also includes another YAML file called `air-infrastructure-data-network-vars.yml` that contains the variables used in the networking pipeline. These variables must be updated as well as the project requirements.

If the client/user has their own network and self-hosted agent, then the networking pipeline won't be required.

## Step 3: Deploy Infrastructure in non-production environment

Run the pipeline configured in Step 2 to commence the build and deployment process.

Running this pipeline in Azure DevOps will initiate the deployment of artifacts into the non-production (nonprod) environment. It's important to monitor the progress of this deployment to ensure its success. You can track the progress and status of the deployment within the Pipelines section of Azure DevOps.

If successful, the core infrastructure resources will now be available in the nonprod Stacks environment. To view these deployed resources, navigate to the [Azure portal](https://portal.azure.com/) and search for the resource group associated with the deployment. This resource group is named based upon values provided during step 1 in the pattern
`companyname-projectname-stage-region-component` (for example: `amido-stacks-dev-euw-de`). Within the resource group, you'll find a list of the resources that were deployed.

Once core infrasturcture resources are deployed in nonprod environment, values will need adding into the nonprod variable group to reflect the deployed resources (e.g. `amido-stacks-de-pipeline-nonprod`). For additional information, see [Pipelines variable groups](../requirements_data_azure.md#azure-pipelines-variable-groups).

## Step 4: Deploy Infrastructure in further environments

By default Stacks provides a framework for managing the platform across two environments - nonprod and prod.
The template CI/CD pipelines provided are based upon these two platform environments (nonprod and prod) - but these may be amended depending upon the specific requirements of your project and organisation.

* Deployment to the non-production (nonprod) environment is triggered on a feature branch when a pull request is open
* Deployment to the production (prod) environment is triggered on merging to the `main` branch, followed by manual approval of the release step.

Once core infrastructure resources are deployed in prod environment, values will need adding into the prod variable group to reflect the deployed resources (e.g. `amido-stacks-de-pipeline-prod`). For additional information, see [Pipelines variable groups](../requirements_data_azure.md#azure-pipelines-variable-groups).

## Next steps

Now you have generated and deployed a new Stacks data platform, [setup your local development environment](dev_quickstart_data_azure.md).
