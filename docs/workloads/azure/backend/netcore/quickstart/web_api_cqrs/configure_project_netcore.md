---
id: configure_project_netcore
title: Configure REST API with CQRS project
hide_title: true
sidebar_label: Configure REST API with CQRS project
hide_table_of_contents: true
description:  Configure, Build and run .NET Core REST API application with CQRS on local and docker container
keywords:
  - .net core
  - rest api
  - cqrs
  - azure
  - application insights
  - cosmos db
  - aws sns
  - build
  - run
  - application
  - configure
  - docker
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Configure REST API with CQRS project

To configure the REST API with CQRS project, you will need to set up two services: a _storage service_ and a _messaging service_. In the first part of this guide, [Create REST API with CQRS project](https://stacks.ensono.com/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/create_project_netcore), when you ran the `dotnet new` command, you chose a database and a messaging service. Now we will configure the services that you selected.

### Configure your database

When you created your project using the Stacks `dotnet new` command, you had the option to choose a database using either the `-db` or `--database` switch. Your options were an in-memory database, Microsoft Azure Cosmos DB or Amazon Web Services DynamoDB. Follow the relevant guide below based on your choice.

#### Configure an in-memory database

The in-memory database requires no additional setup since it holds all data in memory without connecting to an external service. While useful for demonstration purposes, it is _not_ suitable for production workloads.

#### Configure an Azure Cosmos DB database

To configure Cosmos DB, we need to set the `CosmosDb:DatabaseAccountUri` setting in the `appsettings.json` file and create an environment variable for the database's Primary Key.  You may run the database locally or connect to an existing Cosmos DB instance in Azure. Follow one of the guides below, depending on your choice.

<details>
<summary>Run Cosmos DB locally using the emulator, (Windows only).</summary>

<div>

1. **Use the Cosmos DB emulator.**  
Follow the [instructions provided by Microsoft](https://learn.microsoft.com/en-us/azure/cosmos-db/how-to-develop-emulator?tabs=windows%2Ccsharp&pivots=api-nosql) to install and start the emulator.  
The Cosmos DB emulator is only available for the Windows operating system. Mac and Linux users should follow the instructions below to run Cosmos DB emulator in a Docker container.

2. **Browse to the emulator's quick-start page.**  
After installing the Cosmos DB emulator, browse to the quick-start page in your browser.  
You will find the location of the quick-start page in the _'Start the emulator'_ section of the documentation, it is usually [https://localhost:8081/_explorer/index.html](https://localhost:8081/_explorer/index.html)

3. **Find the Cosmos DB URI and primary key**  
The screenshot below shows the location of the Cosmos DB `URI` and the `Primary Key`.  Make a note of these values.

   ![Cosmos DB URI and Key](/img/cosmosdb_emulator_3.png)

4. **Create the database and container**  
Create a collection called `Stacks`.  This must match the value of the `CosmosDb:DatabaseName` setting in the `appsettings.json` file, an example is shown below.  Create a container id called `Menu`, which is the name of your domain object.  If, when you created your project, you chose a different domain object name, you should use this name for your container.  Finally choose `/id` for your partition key.

   ![CosmosDB](/img/cosmosdb_emulator_1.png)

5. **Add the URI to appsettings.json**  
Open the `Company.Project/cqrs/src/api/Company.Project.API/appsettings.json` file, where Company.Project is the name of your project.  Set the `CosmosDb:DatabaseAccountUri` to the URI value that we made a note of in step 2. An example is shown below:

  ```json title="Company.Project/cqrs/src/api/Company.Project.API/appsettings.json"
  "CosmosDb": {
    "DatabaseAccountUri": "<Add your Cosmos DB Account URI here>",
    "DatabaseName": "Stacks",
    "SecurityKeySecret": {
      "Identifier": "COSMOSDB_KEY",
    }
  }
  ```

</div>
</details>

<br />

<details>
<summary>Run Cosmos DB locally in a container.</summary>

<div>

1. **Install the Cosmos DB container.**  
Follow the [instructions provided by Microsoft](https://learn.microsoft.com/en-us/azure/cosmos-db/how-to-develop-emulator?tabs=docker-linux%2Ccsharp&pivots=api-nosql) to install and start the emulator in a Docker Container.

2. **Browse to the emulator's quick-start page.**  
After installing the Cosmos DB container, browse to the quick-start page in your browser.  
You will find the location of the quick-start page in the _'Start the emulator'_ section of the documentation.

3. **Find the Cosmos DB URI and primary key**  
The screenshot below shows the location of the Cosmos DB `URI` and the `Primary Key`.  Make a note of these values.

   ![Cosmos DB URI and Key](/img/cosmosdb_emulator_3.png)

4. **Create the database and container**  
Create a collection called `Stacks`.  This must match the value of the `CosmosDb:DatabaseName` setting in the `appsettings.json` file.  Create a container id called `Menu`, which is the name of your domain object.  If, when you created your project, you chose a different domain object name, you should use this name for your container.  Finally choose `/id` for your partition key.

   ![CosmosDB](/img/cosmosdb_emulator_1.png)

5. **Add the URI to appsettings.json**  
Open the `Company.Project/cqrs/src/api/Company.Project.API/appsettings.json` file, where Company.Project is the name of your project.  Set the `CosmosDb:DatabaseAccountUri` to the URI value that we made a note of in step 2. An example is shown below.

  ```json title="Company.Project/cqrs/src/api/Company.Project.API/appsettings.json"
  "CosmosDb": {
    "DatabaseAccountUri": "<Add your Cosmos DB Account URI here>",
    "DatabaseName": "Stacks",
    "SecurityKeySecret": {
      "Identifier": "COSMOSDB_KEY",
    }
  }
  ```

</div>
</details>

<br />

<details>
<summary>Connecting to a Cosmos DB instance in Azure.</summary>

<div>

1. **Locate the your Cosmos DB**  
Login to your Azure account and type _'Azure Cosmos DB'_ in the search bar at the top of the page to list all of your Cosmos DB instances.  Then click the one that you wish to use.

2. **Locate your database URI and primary key.**  
From the left hand menu, choose Settings/Keys.  In the keys blade that appears to the right, click the eye icon next to the Primary Key to reveal its value.  Make a note of the `URI` and the `Primary Key`.

3. **Add the URI to appsettings.json**  
Open the `Company.Project/cqrs/src/api/Company.Project.API/appsettings.json` file, where Company.Project is the name of your project.  Set the `CosmosDb:DatabaseAccountUri` to the URI value that we made a note of in step 2. An example is shown below.

  ```json title="Company.Project/cqrs/src/api/Company.Project.API/appsettings.json"
  "CosmosDb": {
    "DatabaseAccountUri": "<Add your Cosmos DB Account URI here>",
    "DatabaseName": "Stacks",
    "SecurityKeySecret": {
      "Identifier": "COSMOSDB_KEY",
    }
  }
  ```

</div>
</details>

The `CosmosDb:SecurityKeySecret:Identifier` value in the `Company.Project/cqrs/src/api/Company.Project.API/appsettings.json` file defines the name of the environment variable that we need to set.  The default name for the environment variable is `COSMOSDB_KEY` but you can change it if you wish. In this guide, we will assume we are working with the default value.

Choose one of the following methods to set the `COSMOSDB_KEY` environment variable.
Each tab presents options for where you would like to run your Stacks project, locally on Windows, locally on Mac/linux or in a Docker container.

<div>

<Tabs
defaultValue="windows"
values={[
{label: 'Windows', value: 'windows'},
{label: 'Mac and Linux', value: 'mac-and-linux'},
{label: 'Docker', value: 'docker'}
]}>
<TabItem value="windows">

<details>
<summary>Use Powershell to set the COSMOSDB_KEY environment variable.</summary>

<div>

Use `Powershell` with administrator privileges to execute the command below. Substitute `<PRIMARY-KEY-HERE>` with the key that you made a note of.

```powershell title="Run PS command to add the COSMOSDB_KEY system variable"
[Environment]::SetEnvironmentVariable("COSMOSDB_KEY", "<PRIMARY-KEY-HERE>", [EnvironmentVariableTarget]::Machine)
```

</div>
</details>

<details>
<summary>Use Visual Studio to set the COSMOSDB_KEY environment variable.</summary>
  
<div>

1. **Open the project in Visual Studio.**  
  The solution file is located in the `src/api/Company.Project.API.sln` folder.  Where Company.Project is the name of you chose when creating the project.

2. **Edit the launchSettings.json file.**  
  The launchSettings.json file is used to provide environment variables when a project is launched.  Open the file in the in the properties folder of the project and add the  **COSMOSDB_KEY** environment variable with the value that you made a note of.  There is an example below.

   ```json title="src/api/Company.Project.API/properties/launchSettings.json"
   {
     ...
     "profiles": {
       "Company.Project.API": {
         "environmentVariables": {
           "ASPNETCORE_ENVIRONMENT": "Development",
           "COSMOSDB_KEY": "<PRIMARY-KEY-HERE>"
           ...
         }
       }
     }
   }
   ```

</div>
</details>

<details>
<summary>Use VS Code to set the COSMOSDB_KEY environment variable.</summary>
  
<div>
If you are using VS Code you will have a `launch.json` file generated when you try to run the project. In this file there's an `env` section used to provide environment variables when a project is launched.  Open this file and add the  **COSMOSDB_KEY** environment variable with the value that you made a note of.  There is an example below.

```json title="launch.json"
"env": {
   "COSMOSDB_KEY": "<PRIMARY-KEY-HERE>",
}
```

</div>
</details>

</TabItem>

<TabItem value="mac-and-linux">

<details>
<summary>Use terminal to set the COSMOSDB_KEY environment variable.</summary>

<div>

Use the `terminal` to execute the command below.  Substitute `<PRIMARY-KEY-HERE>` with the key that you made a note of to set the environment variable, only for the current session of your terminal.

```shell title="Run terminal command to add the COSMOSDB_KEY system variable"
export COSMOSDB_KEY=<PRIMARY-KEY-HERE>
```

To set the environment variable permanently on your system you'll have to edit your `bash_profile` or `.zshenv` file depending on which shell are you using.

```shell title="Example for setting env variable in .zchenv"
echo 'export COSMOSDB_KEY=<PRIMARY-KEY-HERE>' >> ~/.zshenv
```

</div>
</details>

<details>
<summary>Use VS Code to set the COSMOSDB_KEY environment variable.</summary>

<div>

If you are using VS Code you will have a `launch.json` file generated when you try to run the project. In this file there's an `env` section used to provide environment variables when a project is launched.  Open this file and add the  **COSMOSDB_KEY** environment variable with the value that you made a note of.  There is an example below.

```json title="launch.json"
"env": {
    "COSMOSDB_KEY": "<PRIMARY-KEY-HERE>",
}
```

</div>
</details>

</TabItem>

<TabItem value="docker">

If you are running the application in a docker container, then environment variables are set when you use the `docker run` command with the `-e` switch.  Make a note of your Cosmos DB URL and Primary Key as we will use them in the [Build & Run REST API with CQRS](https://stacks.ensono.com/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/build_and_run_project_netcore) section of this guide.

</TabItem>

</Tabs>
</div>
<br/>

#### Configuring DynamoDB

To use DynamoDB you will need to create a DynamoDB instance in Amazon Web Services.  The following steps describe how to create a DynamoDB instance and configure you solution.

1. **Create an AWS DynamoDB instance**  
Follow the [AWS Developers guide to get started with DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SettingUp.DynamoWebService.html) to create a DynamoDB instance.  When you create your instance, you may wish name it the same as your Domain Object when you create the project.  If you did not provide one, we recommend you use the default name of _'menu'_.

2. **Configure the AWS CLI tools.**  
The template assumes that you are using the AWS CLI tools and have configured your access keys via the `aws configure` command.  Follow the [AWS CLI configuration guide](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html) and the [AWS named profiles guide](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html) to setup your CLI environment.

3. **Edit the appsettings.json file**  
To configure the project to use your DynamoDB instance, adjust the `.../cqrs/src/api/Company.Project.API/appsettings.json` file, where  Company.Project is the name that you chose for your project.  Add the following section to your appsettings.json file where the TableName value is the name of the instance that you created above.

   ```json title="../cqrs/src/api/Company.Project.API/appsettings.json"
   "DynamoDb": {
       "TableName": "Menu",
       "TablePrefix": ""
   }
   ```

### Configure your messaging service

When you created your project using the Stacks `dotnet new` command, you had an option to choose a messaging service using either the `-e` or `--eventPublisher` switch.  Your options were either, Microsoft Azure Event Hub, Microsoft Azure Service Bus or Amazon Web Services Simple Notification Service.  Depending on the option that you chose, follow one of the guides below to configure your database.

#### Configure Azure Event Hub

To use Azure Event Hubs as a messaging service,follow the steps below: -

1. **Locate the your Event Hub**  
Login to you Azure account and type _'Event Hubs'_ in the search bar at the top of the page to list all of your Event Hub instances.  Then click the one that you wish to use.  Make a note of the name of the Event Hub.

2. **Locate your Event Hub's connection string.**  
From the left hand menu, choose Settings/Shared Access Policies.  In the Shared Access Policies blade, choose a policy that has the `send` claim and click it. Make a note of the value in the `Primary Connection String` text box in the blade that appears to the right.

3. **Add the Event Hub Name to appsettings.json**  
To configure the project to use your Azure Event Hubs instance, adjust the .../cqrs/src/api/Company.Project.API/appsettings.json file, where Company.Project is the name that you chose for your project. Change the `EventHubConfiguration:Publisher:EventHubName` value to the name of the Event Hub that we made a note of in step 1.

   ```json
   "EventHubConfiguration": {
       "Publisher": {
           "NamespaceConnectionString": {
               "Identifier": "EVENTHUB_CONNECTIONSTRING",
               "Source": "Environment"
           },
           "EventHubName": "stacks-event-hub"
       }
   }
   ```

4. **Add the Event Hub connection string as an environment variable.**
The connection string for the Event Hub is stored in an environment variable specified in the `EventHubConfiguration:Publisher:NamespaceConnectionString:Identifier` value.  This guide assumes that we will use the default environment variable name of `EVENTHUB_CONNECTIONSTRING`, but you may change its name in the appsettings.json file if you wish.

Choose one of the following methods to set the `EVENTHUB_CONNECTIONSTRING` environment variable.
Each tab presents options for where you would like to run your Stacks project, locally on Windows, locally on Mac/linux or in a Docker container.

<div>
<Tabs
defaultValue="windows"
values={[
{label: 'Windows', value: 'windows'},
{label: 'Mac and Linux', value: 'mac-and-linux'},
{label: 'Docker', value: 'docker'}
]}>
<TabItem value="windows">

<details>
<summary>Use Powershell to set the EVENTHUB_CONNECTIONSTRING environment variable.</summary>

<div>
Use `Powershell` with administrator privileges to execute the command below. Substitute `<CONNECTION-STRING-HERE>` with the connection string that you made a note of.

```powershell title="Run PS command to add the EVENTHUB_CONNECTIONSTRING system variable"
[Environment]::SetEnvironmentVariable("EVENTHUB_CONNECTIONSTRING", "<CONNECTION-STRING-HERE>", [EnvironmentVariableTarget]::Machine)
```

</div>
</details>

<details>
<summary>Use Visual Studio to set the EVENTHUB_CONNECTIONSTRING environment variable.</summary>

<div>

1. **Open the project in Visual Studio.**  
The solution file is located in the `src/api/Company.Project.API.sln` folder.  Where Company.Project is the name of you chose when creating the project.  Open this solution in Visual Studio.

2. **Edit the launchSettings.json file.**  
The launchSettings.json file is used to provide environment variables when a project is launched.  Open the file in the in the properties folder of the project and add the  **EVENTHUB_CONNECTIONSTRING** environment variable with the value that you made a note of.  In the example below, substitute `<CONNECTION-STRING-HERE>` with your connection string.

   ```json title="src/api/Company.Project.API/properties/launchSettings.json"
   {
     "profiles": {
       "Company.Project.API": {
         "environmentVariables": {
           "ASPNETCORE_ENVIRONMENT": "Development",
           "EVENTHUB_CONNECTIONSTRING": "<CONNECTION-STRING-HERE>"
         }
       }
     }
   }
   ```

</div>
</details>

<details>
<summary>Use VS Code to set the EVENTHUB_CONNECTIONSTRING environment variable.</summary>

<div>
If you are using VS Code you will have a `launch.json` file generated when you try to run the project. In this file there's an `env` section used to provide environment variables when a project is launched.  Open this file and add the **EVENTHUB_CONNECTIONSTRING** environment variable,  substituting `<CONNECTION-STRING-HERE>` with your connection string.

```json title="launch.json"
"env": {
   "EVENTHUB_CONNECTIONSTRING": "<CONNECTION-STRING-HERE>",
}
```

</div>
</details>

</TabItem>
<TabItem value="mac-and-linux">

<details>
<summary>Use terminal to set the EVENTHUB_CONNECTIONSTRING environment variable.</summary>

<div>
Use the `terminal` to execute the command below.  Substitute `<CONNECTION-STRING-HERE>` with your own key to set the environment variable only for the current session of your terminal.

```shell title="Run terminal command to add the EVENTHUB_CONNECTIONSTRING system variable"
export EVENTHUB_CONNECTIONSTRING=<CONNECTION-STRING-HERE>
```

To set the environment variable permanently on your system you'll have to edit your `bash_profile` or `.zshenv` file depending on which shell are you using.

```shell title="Example for setting env variable in .zchenv"
echo 'export EVENTHUB_CONNECTIONSTRING=<CONNECTION-STRING-HERE>' >> ~/.zshenv
```

</div>
</details>

<details>
<summary>Use VS Code to set the EVENTHUB_CONNECTIONSTRING environment variable.</summary>

<div>
If you are using VS Code you will have a `launch.json` file generated when you try to run the project. In this file there's an `env` section used to provide environment variables when a project is launched.  Open this file and add the  **EVENTHUB_CONNECTIONSTRING** environment variable with the value that you made a note of.  There is an example below.

```json title="launch.json"
"env": {
    "EVENTHUB_CONNECTIONSTRING": "<CONNECTION-STRING-HERE>",
}
```

</div>
</details>

</TabItem>

<TabItem value="docker">

If you are running the application in a docker container, then environment variables are set when you use the `docker run` command with the `-e` switch.  Make a note of your Event Hub Connection String as we will use it in the [Build & Run REST API with CQRS](https://stacks.ensono.com/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/build_and_run_project_netcore) section of this guide.

</TabItem>

</Tabs>
</div>
<br/>

#### Configure Azure Service Bus

To use Azure Service Bus as a messaging service, follow the steps below.

1. **Locate the your Azure Service Bus**  
Login to you Azure account and type _Service Bus_ in the search bar at the top of the page to list all of your Service Bus instances.  From the left hand menu, choose Entities/Topics and make a note of the name of the Service Bus Topic that you wish to send to.

2. **Locate your Azure Service Bus connection string.**  
From the left hand menu, choose Settings/Shared Access Policies.  In the Shared Access Policies blade, choose a policy that has the `send` claim and click it. Make a note of the value in the `Primary Connection String` text box.

3. **Add your topic name to appsettings.json**  
To configure the project to use your Azure Service Bus instance, adjust the ../cqrs/src/api/Company.Project.API/appsettings.json file, where Company.Project is the name that you chose for your project. In the `ServiceBusConfiguration` section, replace the `<TOPIC-NAME-HERE>` placeholder with the name of your Azure Service Bus topic.

   ```json title="../cqrs/src/api/Company.Project.API/appsettings.json"
   "ServiceBusConfiguration": {
      "Sender": {
          "Topics": [
              {
                  "Name": "<TOPIC-NAME-HERE>",
                  "ConnectionStringSecret": {
                      "Identifier": "SERVICEBUS_CONNECTIONSTRING",
                      "Source": "Environment"
                  }
              }
          ]
      }
   }
   ```

4. **Add your Azure Service Bus connection string as an environment variable.**  
The connection string for the Service Bus is stored in an environment variable specified in the `ServiceBusConfiguration:Sender:Topics:ConnectionStringSecret:Identifier` value.  This guide assumes that we will use the default environment variable name of `SERVICEBUS_CONNECTIONSTRING`, but you may change its name in the appsettings.json file if you wish.

Choose one of the following methods to set the `SERVICEBUS_CONNECTIONSTRING` environment variable.
Each tab presents options for where you would like to run your Stacks project, locally on Windows, locally/Mac or linux or in a Docker container.

<div>
<Tabs
defaultValue="windows"
values={[
{label: 'Windows', value: 'windows'},
{label: 'Mac and Linux', value: 'mac-and-linux'},
{label: 'Docker', value: 'docker'}
]}>
<TabItem value="windows">

<details>
<summary>Use Powershell to set the SERVICEBUS_CONNECTIONSTRING environment variable.</summary>

<div>
Use `Powershell` with administrator privileges to execute the command below. Substitute `<CONNECTION-STRING-HERE>` with your connection string.

```powershell title="Run PS command to add the SERVICEBUS_CONNECTIONSTRING system variable"
[Environment]::SetEnvironmentVariable("", "<CONNECTION-STRING-HERE>", [EnvironmentVariableTarget]::Machine)
```

</div>
</details>

<details>
<summary>Use Visual Studio to set the SERVICEBUS_CONNECTIONSTRING environment variable.</summary>

<div>

1. **Open the project in Visual Studio.**  
The solution file is located in the `src/api/Company.Project.API.sln` folder.  Where Company.Project is the name of you chose when creating the project.  Open this solution in Visual Studio.

2. **Edit the launchSettings.json file.**  
The launchSettings.json file is used to provide environment variables when a project is launched.  Open the file in the in the properties folder of the project and add the  **SERVICEBUS_CONNECTIONSTRING** environment variable with the value that you made a note of.  In the example below, substitute `<CONNECTION-STRING-HERE>` with your connection string.

   ```json title="src/api/Company.Project.API/properties/launchSettings.json"
   {
     ...
     "profiles": {
       "Company.Project.API": {
         "environmentVariables": {
           "ASPNETCORE_ENVIRONMENT": "Development",
           "SERVICEBUS_CONNECTIONSTRING": "<CONNECTION-STRING-HERE>"
         }
       }
     }
   }
   ```

</div>
</details>

<details>
<summary>Use VS Code to set the SERVICEBUS_CONNECTIONSTRING environment variable.</summary>

<div>
If you are using VS Code you will have a `launch.json` file generated when you try to run the project. In this file there's an `env` section used to provide environment variables when a project is launched.  Open this file and add the **SERVICEBUS_CONNECTIONSTRING** environment variable,  substituting `<CONNECTION-STRING-HERE>` with your connection string.

   ```json title="launch.json"
   "env": {
      "SERVICEBUS_CONNECTIONSTRING": "<CONNECTION-STRING-HERE>",
   }
   ```

</div>
</details>
</TabItem>

<TabItem value="mac-and-linux">

<details>
<summary>Use terminal to set the SERVICEBUS_CONNECTIONSTRING environment variable.</summary>

<div>
Use the `terminal` to execute the command below.  Substitute `<CONNECTION-STRING-HERE>` with your own key to set the environment variable only for the current session of your terminal.

```shell title="Run terminal command to add the SERVICEBUS_CONNECTIONSTRING system variable"
export SERVICEBUS_CONNECTIONSTRING=<CONNECTION-STRING-HERE>
```

To set the environment variable permanently on your system you'll have to edit your `bash_profile` or `.zshenv` file depending on which shell are you using.

```shell title="Example for setting env variable in .zchenv"
echo 'export SERVICEBUS_CONNECTIONSTRING=<CONNECTION-STRING-HERE>' >> ~/.zshenv
```

</div>
</details>

<details>
<summary>Use VS Code to set the SERVICEBUS_CONNECTIONSTRING environment variable.</summary>

<div>
If you are using VS Code you will have a `launch.json` file generated when you try to run the project. In this file there's an `env` section used to provide environment variables when a project is launched.  Open this file and add the  **SERVICEBUS_CONNECTIONSTRING** environment variable with the value that you made a note of.  There is an example below.

   ```json title="launch.json"
   "env": {
       "SERVICEBUS_CONNECTIONSTRING": "<CONNECTION-STRING-HERE>",
   }
   ```

</div>
</details>
</TabItem>

<TabItem value="docker">

If you are running the application in a docker container, then environment variables are set when you use the `docker run` command with the `-e` switch.  Make a note of your Service Bus Connection String as we will use it in the [Build & Run REST API with CQRS](https://stacks.ensono.com/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/build_and_run_project_netcore) section of this guide.

</TabItem>

</Tabs>
</div>
<br/>

#### Configuring AWS Simple Notification Service

To use Simple Notification Service as a messaging service, follow the steps below.

1. **Locate the your SNS Topic**  
Login to you AWS account and type _'SNS'_ in the search bar at the top of the page.  Then chose Topics from the left hand menu to list all of your Topics.  Note, ensure you are in the correct region, shown in the top right-hand corner of the screen.

2. **Locate your Topic Arn.**  
From the list of topics on the screen locate the topic that you wish to use and make a note of the TopicArn.

3. **Add the AWS SNS configuration to appsettings.json**  
To configure the project to use your AWS SNS instance, adjust the .../cqrs/src/api/Company.Project.API/appsettings.json file, where Company.Project is the name that you chose for your project.  Add an `AwsSnsConfiguration` section and an `AWS section`.  Replace the `<YOUR-REGION-HERE>` placeholder with the region in which your topic resides, for example `eu-west-2`.

   ```json title="/cqrs/src/api/Company.Project.API/appsettings.json"
   "AwsSnsConfiguration": {
      "TopicArn": {
        "Identifier": "TOPIC_ARN",
      }
    },
    "AWS": {
        "Region": "<YOUR-REGION-HERE>"
    }
   ```

4. **Add the TOPIC_ARN as an environment variable.**
The Topic ARN is stored in an environment variable specified in the `AwsSnsConfiguration:Sender:TopicArn:Identifier` value.  This guide assumes that we will use the default environment variable name of `TOPIC_ARN`, but you may change its name in the appsettings.json file if you wish.

Choose one of the following methods to set the `TOPIC-ARN` environment variable.
Each tab presents options for where you would like to run your Stacks project, locally on Windows, locally on Mac/linux or in a Docker container.

<div>
<Tabs
defaultValue="windows"
values={[
{label: 'Windows', value: 'windows'},
{label: 'Mac and Linux', value: 'mac-and-linux'},
{label: 'Docker', value: 'docker'}
]}>
<TabItem value="windows">

<details>
<summary>Use Powershell to set the TOPIC-ARN environment variable.</summary>

<div>
Use `Powershell` with administrator privileges to execute the command below. Substitute `<TOPIC-ARN-HERE>` with the connection string that you made a note of.

```powershell title="Run PS command to add the TOPIC-ARN system variable"
[Environment]::SetEnvironmentVariable("TOPIC-ARN", "<TOPIC-ARN-HERE>", [EnvironmentVariableTarget]::Machine)
```

</div>
</details>

<details>
<summary>Use Visual Studio to set the TOPIC-ARN environment variable.</summary>

<div>

1. **Open the project in Visual Studio.**  
The solution file is located in the `src/api/Company.Project.API.sln` folder.  Where Company.Project is the name of you chose when creating the project.  Open this solution in Visual Studio.

2. **Edit the launchSettings.json file.**  
The launchSettings.json file is used to provide environment variables when a project is launched.  Open the file in the in the properties folder of the project and add the  **TOPIC-ARN** environment variable with the value that you made a note of.  In the example below, substitute `<TOPIC-ARN-HERE>` with your connection string.

   ```json title="src/api/Company.Project.API/properties/launchSettings.json"
   {
     "profiles": {
       "Company.Project.API": {
         "environmentVariables": {
           "ASPNETCORE_ENVIRONMENT": "Development",
           "TOPIC-ARN": "<TOPIC-ARN-HERE>"
         }
       }
     }
   }
   ```

</div>
</details>

<details>
<summary>Use VS Code to set the TOPIC-ARN environment variable.</summary>

<div>
If you are using VS Code you will have a `launch.json` file generated when you try to run the project. In this file there's an `env` section used to provide environment variables when a project is launched.  Open this file and add the **TOPIC-ARN** environment variable,  substituting `<TOPIC-ARN-HERE>` with your connection string.

```json title="launch.json"
"env": {
   "TOPIC-ARN": "<TOPIC-ARN-HERE>",
}
```

</div>
</details>
</TabItem>

<TabItem value="mac-and-linux">

<details>
<summary>Use terminal to set the TOPIC-ARN environment variable.</summary>

<div>
Use the `terminal` to execute the command below.  Substitute `<TOPIC-ARN-HERE>` with your own key to set the environment variable only for the current session of your terminal.

```shell title="Run terminal command to add the TOPIC-ARN system variable"
export TOPIC-ARN=<TOPIC-ARN-HERE>
```

To set the environment variable permanently on your system you'll have to edit your `bash_profile` or `.zshenv` file depending on which shell are you using.

```shell title="Example for setting env variable in .zchenv"
echo 'export TOPIC-ARN=<TOPIC-ARN-HERE>' >> ~/.zshenv
```

</div>
</details>

<details>
<summary>Use VS Code to set the TOPIC-ARN environment variable.</summary>

<div>
Use the `terminal` to execute the command below.  Substitute `<TOPIC-ARN-HERE>` with your own key to set the environment variable only for the current session of your terminal.

```shell title="Run terminal command to add the TOPIC-ARN system variable"
export TOPIC-ARN=<TOPIC-ARN-HERE>
```

To set the environment variable permanently on your system you'll have to edit your `bash_profile` or `.zshenv` file depending on which shell are you using.

```shell title="Example for setting env variable in .zchenv"
echo 'export TOPIC-ARN=<TOPIC-ARN-HERE>' >> ~/.zshenv
```

</div>
</details>

</TabItem>

<TabItem value="docker">

If you are running the application in a docker container, then environment variables are set when you use the `docker run` command with the `-e` switch.  Make a note of your Toptic ARN Connection String as we will use it in the [Build & Run REST API with CQRS](https://stacks.ensono.com/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/build_and_run_project_netcore) section of this guide.

</TabItem>

</Tabs>
</div>
