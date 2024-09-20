---
id: create_project_netcore
title: Create REST API with CQRS project
hide_title: true
sidebar_label: Create REST API with CQRS project
hide_table_of_contents: true
description: Create .NET Core REST API application with CQRS from a template
keywords:
  - .net core
  - rest api
  - cqrs
  - example
  - template
  - azure
  - application insights
  - cosmos db
  - build
  - run
  - application
  - configure
  - docker
  - tests
  - github
---

## Create a project

<details>
<summary>Installing/uninstalling the package</summary>

### Install the package


Access Ensono.Stacks.Template package page in Nuget [here](https://www.nuget.org/packages/Amido.Stacks.Templates/)
Copy and execute the command displayed in the page (if you want to get the latest version).
For example

```bash title="Run the command to install the package"
dotnet new install Ensono.Stacks.Templates
```

Once installed, you obtain 7 templates that can be used

### stacks-webapi

<p>A simple web API which also includes the build infrastructure</p>

Navigate to the folder where you wish to create a new project in.

```bash title="Run the command to create the project"
dotnet new stacks-webapi -n Company.Project -do YourDomain --cloudProvider Azure
```

The above command will create a folder and a repository called `Company.Project` with DevOps build pipelines ready for Azure DevOps.

### stacks-cqrs-app

<p>The full template containing API, functions, background worker and build infrastructure</p>

Navigate to the folder where you wish to create a new project on.

```bash title="Run the command to create the project"
dotnet new stacks-cqrs-app -n Company.Project -do YourDomain -e MessagingProvider -db DatabaseOption --cloudProvider CloudProvider
```

The above command will create a folder and a repository called `Company.Project`.

### stacks-az-func-cosmosdb-worker

<p>A template for a Azure Function containing a CosmosDb change feed trigger. Upon a CosmosDb event, the worker reads it and publishes a message to Service Bus.</p>

Navigate to the folder where you wish to create a new project on.

```bash title="Run the command to create the function"
dotnet new stacks-az-func-cosmosdb-worker -n Company.Project
```

### stacks-az-func-asb-listener

<p>A template containing an Azure Function project with a single function that has a Service Bus subscription trigger. The function receives the message and deserializes it.</p>

Navigate to the folder where you wish to create a new project on.

```bash title="Run the command to create the function"
dotnet new stacks-az-func-asb-listener -n Company.Project -do Menu
```

### stacks-asb-worker

<p>A template contains a background worker application that reads and handles messages from a ServiceBus subscription.</p>

Navigate to the folder where you wish to create a new project on.

```bash title="Run the command to create the function"
dotnet new stacks-asb-worker -n Company.Project -do Menu
```

:::note Template parameter details (some templates may offer only a subset of the arguments shown)

- **-n|--name**
    - Sets the project name
    - Omitting it will result in the project name being the same as the folder where the command has been ran from
- **-do|--domain**
    - Sets the name of the aggregate root object. It is also the name of the collection within CosmosDB instance.
- **-db|--database**
    - Configures which database provider to be used
- **-e|--eventPublisher**
    - Configures the messaging service. Available services are:
        - ServiceBus
        - EventHub
        - AwsSns
        - None
- **-e:fw|--enableFunctionWorker**
    - Configures the messaging service
- **-e:fl|--enableFunctionListener**
    - Configures the messaging service
- **-e:bw|--enableBackgroundWorker**
    - Configures the messaging service
- **-o|--output**
    - Sets the path to where the project is added
    - Omitting the parameter will result in the creation of a new folder
- **--cloudProvider**
    - Configures which cloud provider to be used
:::

Once installed you can either, create a new project or add CQRS to an existing project.

### Uninstalling the templates

If you want to remove the templates from your system you'll have to uninstall the Nuget package.

```bash title="To uninstall package execute the following command"
dotnet new uninstall Ensono.Stacks.Templates
```

</details>

<details>
<summary>Creating a new project</summary>

### Create a new project

Navigate to the folder where you wish to create a new project in. Then run the following command.

```bash title="Run the command to create the project"
dotnet new stacks-cqrs-app -n Company.Project -do YourDomain --cloudProvider Azure
```

The above command will create a folder and a repository called `Company.Project` with DevOps build pipelines ready for Azure DevOps.

### Setting the database option

To create a project with CosmosDb as the database you can use the following command

```bash title="Run the command to create the project with database"
dotnet new stacks-cqrs-app -n Company.Project -do YourDomain -db CosmosDb
```

:::note Template parameter details

- **-n|--name**
    - Sets the project name
    - Omitting it will result in the project name being the same as the folder where the command has been ran from
- **-do|--domain**
    - Sets the name of the aggregate root object. It is also the name of the collection within CosmosDB instance.
- **-db|--database**
    - Configures which database provider to be used.
- **-o|--output**
    - Sets the path to where the project is added
    - Omitting the parameter will result in the creation of a new folder
- **--cloudProvider**
    - Configures which cloud provider to be used
- **-cicd|--cicdProvider**
    - Configures which cicd provider templates to be used
:::


### Setting event publishing options

</details>