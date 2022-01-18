---
id: create_project_netcore
title: Create REST API with CQRS and Events project
hide_title: true
sidebar_label: Create REST API with CQRS and Events project
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

import ResponsivePlayer from "../../../../../../../src/pages/Components/ResponsivePlayer/ResponsivePlayer";

## Create a project

## Install the package

:::note
.NET 3.1 templates have been deprecated. If you want to use the 3.1 templates the latest version is [3.0.296](https://www.nuget.org/packages/Amido.Stacks.CQRS.Events.Templates/3.0.296)
:::

Access Amido.Stacks.CQRS.Events.Template package page in Nuget [here](https://www.nuget.org/packages/Amido.Stacks.CQRS.Events.Templates/)
Copy and execute the command displayed in the page (if you want to get the latest version).
For example

```bash title="Run the command to install the package"
dotnet new --install Amido.Stacks.CQRS.Events.Templates
```

<ResponsivePlayer url="https://vimeo.com/640289104" />

Once installed, you obtain 6 templates that can be used

### stacks-cqrs-events-app

<p>The full template containing API, functions, background worker and build infrastructure</p>

Navigate to the folder where you wish to create a new project on.

```bash title="Run the command to create the project"
dotnet new stacks-cqrs-events-app -n Company.Project -do YourDomain -e MessagingProvider -db DatabaseOption
```

The above command will create a folder and a repository called `Company.Project`.

### stacks-cqrs-events-webapi

<p>A template for the api project. If you need a CQRS WebAPI that can publish messages, this is the template to use.</p>

Navigate to the folder where you wish to create a new project on.

```bash title="Run the command to create the project"
dotnet new stacks-cqrs-events-webapi -n Company.Project -do YourDomain -e MessagingProvider
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
    - Configures the messaging service
- **-e:fw|--enableFunctionWorker**
    - Configures the messaging service
- **-e:fl|--enableFunctionListener**
    - Configures the messaging service
- **-e:bw|--enableBackgroundWorker**
    - Configures the messaging service
- **-o|--output**
    - Sets the path to where the project is added
    - Omitting the parameter will result in the creation of a new folder
:::

<ResponsivePlayer url="https://vimeo.com/640289070" />
