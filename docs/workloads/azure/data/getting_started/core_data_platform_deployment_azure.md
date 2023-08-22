---
id: core_data_platform_deployment_azure
title: Infrastructure Deployment
sidebar_label: Infrastructure Deployment
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
It assumes all prerequisites are in place, including:

* [Azure](../requirements_data_azure.md#azure)
* [Azure Pipelines variable groups](../requirements_data_azure.md#azure-pipelines-variable-groups)

## Step 1: Create/Generate Data Platform project using Stacks CLI

The [Stacks CLI](../../../../stackscli/about) will help you get started with scaffolding your applications and workspaces using Stacks. Through a series of questions the CLI will determine how and what to build for your workspace, helping to accelerate your development process.

Download and install the stacks-cli using [Stacks CLI](../../../../stackscli/about). Please refer **Stacks.CLI.Manual** in the latest stacks-cli release for detailed instruction.

To construct a Data platform project, two primary cli commands are required: `stacks-cli interactive` and `stacks-cli scaffold`.

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

The resulting configuration file named stacks.yml contains all of the configuration that was used to generate the projects,
which means it can be used to produce the same project stack again.

The CLI can be used with a configuration file to generate the Ensono Digital Stacks based projects using `stacks-cli scaffold`.

```cmd
stacks-cli scaffold -c ./stacks.yml
```

Open the project locally and push the generated project to target repository in `main/master` branch.

## Step 2: Add Infrastructure pipeline in Azure Devops

Open the project locally and create a new feature branch e.g.:

```bash
git checkout -b feat/infra-pipeline
```

YAML file containing a template Azure DevOps CI/CD pipeline for building and deploying the core infrastructure, named `air-infrastructure-data.yml` is configured in the `build/azDevOps/azurefolder`

YAML file `air-infrastructure-data.yml` should be added as the definition for a new pipeline in Azure DevOps.

1. Sign-in to your Azure DevOps organization and go to your project
2. Go to Pipelines, and then select New pipeline
3. Name the new pipeline eg `amido.stacks-data-infrastructure`
4. For the pipeline definition, specify the YAML file in the project repository feature branch (e.g. `air-infrastructure-data.yml`) and save
5. The new pipeline will require access to any Azure DevOps pipeline variable groups specified in the pipeline YMAL. Under each variable group, go to 'Pipeline permissions' and add the pipeline.

The `build/azDevOps/azure/network` folder has a YAML file entitled `air-infrastructure-data-network.yml` that contains a template Azure DevOps CI/CD pipeline for networking and self-hosted agent infrastructure. If the client/user does not have their own network and self-hosted agent, then we must establish the networking pipeline in Azure Devops following the procedures outlined above and it must before the core infrasturcture pipeline. The `build/azDevOps/azure/network` folder also contains a YAML file called `air-infrastructure-data-network-vars.yml` that contains the variables used in the networking pipeline. These variables must be updated as well as the project requirements.

If the client/user have their own network and self hosted agent then networking pipeline wont be required.

## Step 3: Deploy Infrastructure in non-production environment

Run the  pipeline configured in Step 2

Running this pipeline in Azure DevOps will deploy the artifacts into the non-production (nonprod) environment. If successful, the generated resources will now be available in the nonprod Stacks environment.

## Step 4: Deploy Infrastructure in further environments 

* Deployment to the non-production (nonprod) environment is triggered on a feature branch when a pull request is open
* Deployment to the production (prod) environment is triggered on merging to the `main/master` branch, followed by manual approval of the release step.
