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

import ResponsivePlayer from "../../../../../../../src/pages/Components/ResponsivePlayer/ResponsivePlayer";

## Create a project using the Nuget template package

### Install the package

:::note
.NET 3.1 templates have been deprecated. If you want to use the 3.1 templates the latest version is [3.0.232](https://www.nuget.org/packages/Amido.Stacks.Templates/3.0.232)
:::

Access Amido.Stacks.Templates package page in Nuget [here](https://www.nuget.org/packages/Amido.Stacks.Templates/). Copy and execute the command displayed in the page (if you want to get the latest version). For example:

```bash title="Run the command to install the package"
dotnet new --install Amido.Stacks.Templates
```

<ResponsivePlayer url="https://vimeo.com/640289104" />

### Create a new  project

Navigate to the folder where you wish to create a new project in.

```bash title="Run the command to create the project"
dotnet new stacks-webapi -n Company.Project -do YourDomain
```

The above command will create a folder called `Company.Project`.

### Uninstalling a template

```bash title="To uninstall the template pack you have to execute the following command"
dotnet new --uninstall Amido.Stacks.Templates
```

:::note Template parameter details

- **-n|--name**
    - Sets the project name
    - Omitting it will result in the project name being the same as the folder where the command has been ran from
- **-do|--domain**
    - Sets the name of the aggregate root object. It is also the name of the collection within CosmosDB instance.
- **-o|--output**
    - Sets the path to where the project is added
    - Omitting the parameter will result in the creation of a new folder
:::
