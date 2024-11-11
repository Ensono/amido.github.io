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

import ResponsivePlayer  from "../../../../../../../src/components/ResponsivePlayer/ResponsivePlayer";

## Create a project using the Nuget template package

### Install the package

<ResponsivePlayer url='https://www.youtube.com/watch?v=H6eaa8ukhq4'>

1. Go to the [Ensono.Stacks.Templates package page on Nuget](https://www.nuget.org/packages/Ensono.Stacks.Templates/).
2. Copy the installation command shown on the page.
3. Open your terminal and run the command from Step 2.  An example of the command is shown below.

   ```bash
   dotnet new install Ensono.Stacks.Templates
   ```

### Create a new project

Once the Stacks Template package has finished installing, you will have the following templates to use as starting points for your projects: -

* **Web API**: A web API built with controllers.
* **Web API with CQRS**: A web API built with controllers that uses the CQRS pattern.
* **ServiceBus Worker**: A background worker that monitors an Azure Service Bus and responds when a message is received.
* **Azure Function: CosmosDb Worker**: An Azure Function that sends a message to an Azure Service Bus, when an item is created in a Cosmos DB.
* **Azure Function: EventHub Listener**: An Azure Function that monitors an Azure Event Hub and responds when a message is received.
* **Azure Function: ServiceBus Listener**: An Azure Function that monitors an Azure Service Bus and responds when a message is received.

These templates include automated testing and build pipelines, so they are ready for deployment to cloud providers.  To create a solution from one of these templates, please follow the relevant guide below.

#### The Stacks Web API Template

This template will create a simple Web API solution that is built with ASP .NET Controllers.  It includes authentication, authorization, middleware for managing exceptions and middleware to assign or preserve correlation IDs.

To create a Stacks Simple Web API solution: -

1. Open your command line or terminal.
2. Change to the directory to where you would like to create your solution.
3. Run the following command, replacing the parameter values with your choices.  
For a description of each parameter and the options available, please scroll to the end of this section.

   ```bash title="Run the command to create a Stacks Web API solution"
   dotnet new stacks-webapi --name Company.Project --domain Menu --cloudProvider Azure
   ```

   This example command will create a folder and a solution called `Company.Project` with a sample domain object called `menu` and DevOps build pipelines for Microsoft Azure.

#### The Stacks Web API with CQRS Template

This template extends the Stacks Web API template.  It includes all the features of the Web API template and has been extended to implement the [Command Query Responsibility Segregation architectural pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs).  Example commands and queries are included in the solution to demonstrate how the CQRS pattern works.

To create a Stacks Web API with CQRS solution: -

1. Open your command line or terminal.
2. Change to the directory to where you would like to create your solution.
3. Run the following command, replacing the parameter values with your choices.  
For a description of each parameter and the options available, please scroll to the end of this section.

   ```Run the command to create a Stacks Web API solution"
   dotnet new stacks-cqrs --name Company.Project --domain Menu --database CosmosDb --eventPublisher ServiceBus --cloudProvider Azure
   ```

   This example command will create a folder and a solution called `Company.Project` with a sample domain object called `menu`.  The solution will use CosmosDB for its database and publish events to Azure Service Bus.  A DevOps build pipeline will also be created for Microsoft Azure.

#### The Stacks Background Worker Template

This template will create a solution for a Background Worker that monitors an [Azure Service Bus](https://learn.microsoft.com/en-us/azure/service-bus-messaging/).  When an Event is published to the Service Bus that the worker has subscribed to, it will respond by executing the appropriate Event Handler.  The solution contains several events and their handlers to serve as examples.

To create a Stacks Background Worker: -

1. Open your command line or terminal.
2. Change to the directory to where you would like to create your solution.
3. Run the following command, replacing the parameter values with your choices.  
For a description of each parameter and the options available, please scroll to the end of this section.

   ```bash title="Run the command to create a Stacks Background Worker solution"
   dotnet new stacks-asb-worker --name Company.Project --domain Menu
   ```

   This example command will create a folder and a solution called `Company.Project` with a sample domain object called `menu` and a DevOps build pipeline for Microsoft Azure.

#### The Stacks Azure Function: Cosmos DB Worker Template

This template will create a solution for an Azure Function triggered by the [Azure Cosmos DB change feed trigger](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-trigger). When an item is either created or updated in a Cosmos DB container, the Azure Function will trigger.  The Function will publish a message to an Azure Service Bus to notify subscribers that an item has either been created or updated in the Cosmos DB container.

To create an Azure Function Cosmos DB Worker: -

1. Open your command line or terminal.
2. Change to the directory to where you would like to create your solution.
3. Run the following command, replacing the parameter values with your choices.  
For a description of each parameter and the options available, please scroll to the end of this section.

   ```bash title="Run the command to create an Azure Function Cosmos DB Worker solution"
   dotnet new stacks-az-func-cosmosdb-worker --name Company.Project
   ```

   This example command will create a folder and a solution called `Company.Project` and a DevOps build pipeline for Microsoft Azure.

#### The Stacks Azure Function:  Event Hub Listener Template

This template will create a solution for an Azure Function that uses the [Azure Event Hub Trigger](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-event-hubs-trigger).  When a new event is published to the Event Hub that the function is monitoring, the function will trigger.  The function will receive the event, deserializes it to an object and write a log message that it has received a message.

To create an Azure Function Event Hub Listener: -

1. Open your command line or terminal.
2. Change to the directory to where you would like to create your solution.
3. Run the following command, replacing the parameter values with your choices.  
For a description of each parameter and the options available, please scroll to the end of this section.

   ```bash title="Run the command to create an Azure Function Event Hub Listener solution"
   dotnet new stacks-az-func-aeh-listener --name Company.Project --domain Menu
   ```

   This example command will create a folder and a solution called `Company.Project` with a sample event for when a `menu` is created and a DevOps build pipeline for Microsoft Azure.

#### Stacks Azure Function:  Azure Service Bus Listener

This is a template for an Azure Function that uses the [Azure Service Bus Trigger](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-service-bus-trigger).  When a new message is published to an Azure Service Bus that the function has subscribed to, the function will trigger.  The function will receive the message, deserializes it to an object and write a log that it has received a message.

To create an Azure Service Bus Listener: -

1. Open your command line or terminal.
2. Change to the directory to where you would like to create your solution.
3. Run the following command, replacing the parameter values with your choices.  
For a description of each parameter and the options available, please scroll to the end of this section.

```bash title="Run the command to create an Azure Function Service Bus Listener solution"
dotnet new stacks-az-func-asb-listener --name Company.Project  --domain Menu
```

   This example command will create a folder and a solution called `Company.Project` with a sample event for when a `menu` is created and a DevOps build pipeline for Microsoft Azure.

#### Template Parameters

:::note Template parameter details

A description of the parameters used in the examples above are shown below.  
Please note that some templates may only offer a subset of the parameters shown.

* **-n | --name**
    * Sets the project name.
    * If you do not provide this parameter, the project name will be the same as the folder where you run the command.

* **-do | --domain**
    * Sets the name of the sample domain model's aggregate root object for API templates.
    * Sets the name the sample events that are created for for listener templates.
    * Sets the name of the CosmosDB collection if Cosmos DB is chosen for a database.

* **-db | --database**
    * Configures which database provider will be used.
        * Choices: -
        * `CosmosDb` for Microsoft Azure CosmosDB,
        * `DynamoDb` for Amazon Web Services DynamoDB,
        * `InMemoryDb` for an in memory 'database'.  For demonstration, not suitable for production.

* **-e | --eventPublisher**
    * Configures which messaging service will be used.
    * Choices: -
        * `AwsSns` for Amazon Web Services Simple Notification Service,
        * `EventHub` for Microsoft Azure Event Hub,
        * `ServiceBus` for Microsoft Azure Event Hub,
        * `None` to not include an event publisher.

* **-o | --output**
    * Sets the path where the project will be created.
    * If you do not provide this parameter, a new folder will be created.

* **-cp | --cloudProvider**
    * Configures which cloud provider to use.
    * Choices: -
        * `AWS` for Amazon Web Services,
        * `Azure` for Microsoft Azure,
        * `GCP` for Google Cloud PLatform.

* **-cicd | --cicdProvider**
    * Configures which CI/CD provider templates to use.
    * Choices: -
        * `AZDO` for Microsoft Azure DevOps,
        * `GHA` for GitHub Actions,
        * `None` to not include CI/CD pipelines.
:::

### Uninstalling the templates

To remove the Stacks templates from your machine, uninstall the NuGet package by running the following command

```bash title="To uninstall package execute the following command"
dotnet new uninstall Ensono.Stacks.Templates
```
