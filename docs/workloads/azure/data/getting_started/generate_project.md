---
id: generate_project
title: Generate a data project
sidebar_label: 1. Generate a data project
hide_title: false
hide_table_of_contents: false
description: Generate a new data project using Ensono Stacks
keywords:
  - stacks cli
  - data
  - azure
  - template
---

This section provides an overview of scaffolding and generating a new data platform project using the [Ensono Stacks CLI](/docs/stackscli/about).

It assumes the following [pre-requisites](./requirements_data_azure.md) are in place:

* A [remote git repository](./requirements_data_azure.md#git-repository) for hosting the generated project
* A [storage account](./requirements_data_azure.md#terraform-state-storage) for the Terraform state

:::tip

See more information on the [pre-requisites] for generating Stacks Data Platform.

:::

## Step 1: Install the Ensono Stacks CLI

Download and install the [Ensono Stacks CLI](/docs/stackscli/about).
Please refer to the **Stacks.CLI.Manual** in the latest [stacks-cli release](https://github.com/ensono/stacks-cli/releases) for detailed instructions.

## Step 2: Prepare the project config

We will be using the `stacks-cli scaffold` command to generate a new data project. The scaffold command takes a YAML configuration file, defining the project.

A [sample data project config file](https://github.com/Ensono/stacks-azure-data/blob/main/stacks-cli/data-scaffold-example.yml) is provided. Prepare a copy of this file, and update the following entries as required for your new project:

| Config field                | Example value                                       | Description                                                                                                                                     |
|-----------------------------|-----------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| directory.working           | `stacks`                                            | Target directory for the scaffolded project.                                                                                                    |
| directory.export            | `~`                                                 | Path to your Ensono Stacks CLI installation.                                                                                                    |
| business.company            | `mycompany`                                         | Used for resource naming.                                                                                                                       |
| business.domain             | `mydomain`                                          | Used for environment & Terraform state key naming.                                                                                              |
| business.component          | `data`                                              | Used for resource naming.                                                                                                                       |
| project.name                | `stacks-data-platform`                              | Name of project created & used for resource naming.                                                                                             |
| project.sourcecontrol.type  | `github`                                            | Remote repository provider, e.g. GitHub or Azure DevOps.                                                                                        |
| project.sourcecontrol.url   | `https://github.com/mycompany/stacks-data-platform` | Used for setting up the remote repository - see [Git repository](./requirements_data_azure.md#git-repository).                                  |
| project.cloud.region        | `ukwest`                                            | The Azure region you'll be deploying into. Using the Azure CLI, you can use `az account list-locations -o Table` to see available region names. |
| terraform.backend.storage   | `tfstorage`                                         | Storage account name for Terraform state - see [Terraform state storage](./requirements_data_azure.md#terraform-state-storage).                 |
| terraform.backend.group     | `tfgroup`                                           | Resource group name for Terraform state.                                                                                                        |
| terraform.backend.container | `tfcontainer`                                       | Storage container name for Terraform state.                                                                                                     |

All other values can be left as they are. For full documentation of all fields in the config file, refer to the Stacks CLI Manual.

:::tip

Alternatively, you can use the `stacks-cli interactive` command to generate a YAML configuration file by answering a series of questions. See the Stacks CLI Manual for further information.

:::

## Step 3: Scaffold the project

You will now pass the prepared config file to the Ensono Stacks scaffold command, and your project will be generated. Run the following, replacing `./data-scaffold-config.yml` with the path to your config file:

```bash
stacks-cli scaffold -c ./data-scaffold-config.yml
```

If successful, the new project will now be available in the directory provided in the `directory.working` field. Navigate to the generated project's directory and review the contents.

## Step 4: Push the project to remote repository

Now the project has been generated, it can be pushed to the target remote repository. By default, scaffolded project will be configured to use the remote repo URL that was defined in the config file.

```bash

# Confirm the correct remote repository has been set
git remote show origin

# If required, set your local branch to main
git branch -M main

# Add and commit all created project files
git add .
git commit -m "Initial commit"

# Push your scaffolded project to the remote repository
git push -u origin main

```

:::tip

It is highly recommended after your initial commit that you add branch protection rules to the remote `main` branch: see guidance for [GitHub](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule) or [Azure DevOps Repos](https://learn.microsoft.com/en-us/azure/devops/repos/git/branch-policies?view=azure-devops).

:::

## Next steps

Now you have generated a new data project, [deploy the core infrastructure](./core_data_platform_deployment_azure.md).
