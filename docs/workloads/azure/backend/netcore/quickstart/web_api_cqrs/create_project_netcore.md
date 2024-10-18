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

# Create a project using the NuGet template package

## Install the package

1. Go to the [Ensono.Stacks.Templates package page on Nuget](https://www.nuget.org/packages/Ensono.Stacks.Templates/).
2. Copy the command displayed on this page, which is used to install the latest version of the Stacks Templates package.
3. Open your terminal and run the command that we copied in Step 2. An example is shown below.

```bash
dotnet new install Ensono.Stacks.Templates
```

## Create a new project

Once the Stacks Template package has finished installing, you will have the following templates to use as starting points for your projects.  All of these templates include automated testing and build files, so that they can be published quickly to a cloud provider.  

The following list describes each template and how to create a solution from that template: -

### Stacks Simple Web API

A simple Web API Solution that's built with ASP .NET Controllers.  It includes authentication, authorization, middleware for managing exceptions and middleware to assign or preserve correlation IDs.

To create a Stacks Simple Web API solution: -

1. Open your command line or terminal.
2. Navigate to the folder where you would like to create your solution.
3. Run the following command, replacing the parameter values with your choices.  For a description of each parameter and the options available, please scroll to the end of this section.

```bash title="Run the command to create the project"
dotnet new stacks-webapi --name Company.Project --domain YourDomain --cloudProvider ChosenCloudProvider
```

This example command will create a folder and a solution called `Company.Project`.  The template will also create the  DevOps build pipelines for the cloud provider that you choose.

### Stacks CQRS Web API

This template builds upon the Stack Simple Web API template.  It includes all the features of the Simple Web API and has been extended to implement the [Command Query Responsibility Segregation architectural pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs).  Example commands and queries are included in the solution to demonstrate how the CQRS pattern works.

To create a Stacks CQRS Web API solution: -

1. Open your command line or terminal.
2. Navigate to the folder where you would like to create your solution.
3. Run the following command, replacing the parameter values with your choices.  For a description of each parameter and the options available, please scroll to the end of this section.

```bash title="Run the command to create the project"
dotnet new stacks-cqrs --name Company.Project --domain DomainAggregate --eventPublisher ChosenEventPublisher --database ChosenDatabase --cloudProvider ChosenCloudProvider
```

This example command will create a folder and a solution called `Company.Project` with a domain aggregate root object named `DomainAggregate`.  The template will create your solution so that is uses the event publisher and database that you specify in the parameters.  It will also create DevOps build pipelines for the cloud provider that you choose.

### Stacks Background Worker

This is a template for a Background Worker that monitors an [Azure Service Bus](https://learn.microsoft.com/en-us/azure/service-bus-messaging/).  When an Event is published to the Service Bus Topic that the the worker has subscribed to, it will respond by executing the appropriate Event Handler.  The solution contains several events and their handlers to serve as examples.

To create a Stacks Background Worker: -

1. Open your command line or terminal.
2. Navigate to the folder where you would like to create your solution.
3. Run the following command, replacing the parameter values with your choices.  For a description of each parameter and the options available, please scroll to the end of this section.

```bash title="Run the command to create the project"
dotnet new stacks-asb-worker --name Company.Project --domain DomainAggregate
```

This example command will create a folder and a solution called `Company.Project` with a domain aggregate root object  named `DomainAggregate`.  The template will also create DevOps build pipelines for Azure DevOps.

### Stacks Azure Function: CosmosDB Worker

This is a template for an Azure Function triggered by the [Azure Cosmos DB change feed trigger](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-trigger). When an item is either created or updated in a CosmosDb container, the Azure Function will trigger.  The Function will publish a message to an Azure Service Bus Topic, informing all of the subscribers to the topic, that an item has either been created or updated in the Container.

To create an Azure Function CosmosDB Worker

1. Open your command line or terminal.
2. Navigate to the folder where you would like to create your solution.
3. Run the following command, replacing the parameter values with your choices.  For a description of each parameter and the options available, please scroll to the end of this section.

```bash title="Run the command to create the project"
dotnet new stacks-az-func-cosmosdb-worker --name Company.Project
```

This example command will create a folder and a solution called `Company.Project`.  The template will also create DevOps build pipelines for Azure DevOps.

### Stacks Azure Function:  Azure Event Hub Listener

This is a template for an Azure Function that uses the [Azure Event Hub Trigger](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-event-hubs-trigger).  When a new event is published to the  Event Hub that the function is monitoring, the function will trigger.  The function will receive the event, deserializes it to an object and write a log that it has received a message.

To create an Azure Function Event Hub Listener

1. Open your command line or terminal.
2. Navigate to the folder where you would like to create your solution.
3. Run the following command, replacing the parameter values with your choices.  For a description of each parameter and the options available, please scroll to the end of this section.

```bash title="Run the command to create the project"
dotnet new stacks-az-func-aeh-listener --name Company.Project --domain DomainAggregate
```

This example command will create a folder and a solution called `Company.Project` with a domain aggregate root object  named `DomainAggregate`.  The template will also create DevOps build pipelines for Azure DevOps.

### Stacks Azure Function:  Azure Service Bus Listener

This is a template for an Azure Function that uses the [Azure Service Bus Trigger](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-service-bus-trigger).  When a new message is published to an Azure Service Bus Topic that the function has subscribed to, the function will trigger.  The function will receive the event, deserializes it to an object and write a log that it has received a message.

To create an Azure Service Bus Listener

1. Open your command line or terminal.
2. Navigate to the folder where you would like to create your solution.
3. Run the following command, replacing the parameter values with your choices.  For a description of each parameter and the options available, please scroll to the end of this section.

```bash title="Run the command to create the project"
dotnet new stacks-az-func-aeh-listener --name Company.Project --domain DomainAggregate
```

This example will create a folder and a repository called `Company.Project` with domain aggregate root object named `DomainAggregate`.  The template will also create DevOps build pipelines for Azure DevOps.

### Template Parameters

:::note Template parameter details

Some templates may offer only a subset of the arguments shown.

- **-n | --name**
  - Sets the project name.
  - If you do not provide this parameter, the project name will be the same as the folder where you run the command.

- **-do | --domain**
  - Sets the name of the aggregate root object.
  - This is also the name of the collection within the CosmosDB instance.

- **-db | --database**
  - Configures which database provider to be used.
  - Choices are: -
    - `CosmosDb` for Microsoft Azure CosmosDB,
    - `DynamoDb` for Amazon Web Services DynamoDB,
    - `InMemoryDb` for an in memory 'database'.  For demonstration, not suitable for production workloads.

- **-e | --eventPublisher**
  - Configures the messaging service.
  - Choices are: -
    - `AwsSns` for Amazon Web Services Simple Notification Service,
    - `EventHub` for Microsoft Azure Event Hub,
    - `ServiceBus` for Microsoft Azure Event Hub,
    - `None` to not include an event publisher.

- **-o|--output**
  - Sets the path where the project will be created.
  - If you do not provide this parameter, a new folder will be created.

- **-c|--cloudProvider**
  - Configures which cloud provider to use.
  - Accepted values:
    - `AWS` for Amazon Web Services,
    - `Azure` for Microsoft Azure,
    - `GCP` for Google Cloud PLatform.

- **-cicd|--cicdProvider**
  - Configures which CI/CD provider templates to use.
  - Accepted values: 
    - `AZDO` for Microsoft Azure DevOps,
    - `GHA` for GitHub Actions, 
    - `None` to not included CI/CD pipelines.
:::

## Uninstalling the templates

If you want to remove the templates from your system you should uninstall the NuGet package.

```bash title="To uninstall package execute the following command"
dotnet new uninstall Ensono.Stacks.Templates
```

## ToDo Notes

Check these switches which don't appear to work

- **-e:fw | --enableFunctionWorker**
  - Includes the `Azure Function:  CosmosDB Worker` project  in the solution.

- **-e:fl | --enableFunctionListener**
  - Includes the `Azure Function:  Service Bus Listener` project in the solution.

- **-e:bw | --enableBackgroundWorker**
  - Includes the `Background Worker` project in the solution.