---
id: create_project_netcore
title: Create REST API project
hide_title: true
sidebar_label: Create REST API project
hide_table_of_contents: true
description: Create .NET Core REST API application from a template
keywords:
  - .net core
  - rest api
  - example
  - template
  - azure
  - application insights
  - build
  - run
  - application
  - configure
  - docker
  - tests
  - github
---

## Create a project using the Nuget template package

### Install the package

1. Go to the [Ensono.Stacks.Templates package page on Nuget](https://www.nuget.org/packages/Ensono.Stacks.Templates/).
2. Copy the command displayed on the page to install the latest version of the package.
3. Open your terminal and run the copied command. For example:

```bash
dotnet new install Ensono.Stacks.Templates
```

### Create a new project

1. Open your terminal.
2. Navigate to the folder where you want to create the new project.
3. Run the following command to create the project:

```bash
dotnet new stacks-webapi -n Company.Project -do YourDomain --cloudProvider Azure
```

This command will create a folder and a repository called `Company.Project` with DevOps build pipelines ready for Azure DevOps.

### Uninstalling a template

1. Open your terminal.
2. Run the following command to uninstall the template pack:

```bash
dotnet new uninstall Ensono.Stacks.Templates
```

### Template parameter details

- **-n|--name**
  - Sets the project name.
  - If you do not provide this parameter, the project name will be the same as the folder where you run the command.

- **-do|--domain**
  - Sets the name of the aggregate root object. This is also the name of the collection within the CosmosDB instance.

- **-o|--output**
  - Sets the path where the project will be created.
  - If you do not provide this parameter, a new folder will be created.

- **--cloudProvider**
  - Configures which cloud provider to use.

- **-cicd|--cicdProvider**
  - Configures which CI/CD provider templates to use.