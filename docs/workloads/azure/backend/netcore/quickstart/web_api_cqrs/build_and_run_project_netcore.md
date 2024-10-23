---
id: build_and_run_project_netcore
title: Build & Run REST API with CQRS
sidebar_label: Build & Run REST API with CQRS
hide_title: true
hide_table_of_contents: true
description:  Build and Run .NET Core REST API application with CQRS
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
---

## Build and Run REST API with CQRS

<br />

The API generated from the Stacks templates may be run either locally on your computer or in a docker container.

:::note  Project Configuration
Note that depending on some of the options that you chose when creating the CQRS API, there may be additional configuration required before running the project.  It is important to complete the [Configure REST API with CQRS project](https://stacks.ensono.com/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/configure_project_netcore) section of this guide before building and running the project.
:::

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### Building and Running

<details open>
<summary>Build and run locally</summary>

<div>

<Tabs
groupId="operating-systems"
defaultValue="windows"
values={[
{label: 'Windows', value: 'windows'},
{label: 'Mac and Linux', value: 'mac-and-linux'},
]}>
<TabItem value="windows">

Below is an example of how to build and run the Stacks CQRS API solution. In this example, the solution is located in the _c:\dev_ directory, and the project is named _Company.Project_. If you have used a different directory or project name, adjust the commands accordingly.

1. **Open a terminal.**  
   You can use either Command Prompt or PowerShell.

2. **Navigate to the project directory.**  
Change to the API project directory within the solution you created using the Stacks `dotnet new` command. In this example, the solution was created in _c:\dev_ and was named _Company.Project_.

   ```bat
   cd c:\dev\company.project\src\cqrs\src\api
   ```

3. **Build the solution**  
Use the `dotnet build` command to build the solution in this directory.

   ```bat
   dotnet build
   ```

4. **Run the API project.**  
Finally, use the `dotnet run` command to start the API project.  
Replace _Company.Project_ with your actual project name.

   ```bat
   dotnet run --project Company.Project.API/Company.Project.API.csproj
   ```

:::note Potential issue when running on Windows.

If your folder structure is too deep, you may encounter a build failure. This issue arises due to our dependency on [Pact](https://docs.pact.io/) for contract testing.  The error will looks like this: -

```shell
Error MSB3491 Path: File exceeds the OS max path limit. The fully qualified file name must be less than 260 characters.
```

There are two fixes for this issue: -

- You must enable long file paths on Windows by following the instructions [here](https://docs.microsoft.com/en-us/windows/win32/fileio/maximum-file-path-limitation?tabs=powershell#enable-long-paths-in-windows-10-version-1607-and-later)
- Create your folder on an upper level where the paths won't exceed 260 characters

:::

</TabItem>

<TabItem value="mac-and-linux">

Below is an example of how to build and run the Stacks CQRS API solution. In this example, the solution is located in a folder called _dev_ in your home directory, and the project is named _Company.Project_. If you have used a different directory or project name, adjust the commands accordingly.

1. **Open a terminal.**  

2. **Navigate to the project directory.**  
Change to the API project directory within the solution you created using the Stacks `dotnet new` command. In this example, the solution was created in a folder called _dev_ inside _anneexample_'s home directory and was named _Company.Project_.

   ```bash
   cd /users/anneexample/dev/company.project/src/cqrs/src/api
   ```

3. **Build the solution**  
Use the `dotnet build` command to build the solution in this directory.

   ```bash
   dotnet build
   ```

4. **Run the API project.**  
Finally, use the `dotnet run` command to start the API project.  
Replace _Company.Project_ with your actual project name.

   ```bash
   dotnet run --project Company.Project.API/Company.Project.API.csproj
   ```

</TabItem>
</Tabs>

</div>
</details>

<br />

<details>
<summary>Build and run in docker container</summary>

<div>

<Tabs
groupId="operating-systems"
defaultValue="windows"
values={[
{label: 'Windows', value: 'windows'},
{label: 'Mac and Linux', value: 'mac-and-linux'},
]}>
<TabItem value="windows">

Below is an example of how to build and run the Stacks CQRS API solution in a Docker Container. In this example, the solution is located in the _c:\dev_ directory, and the project is named _Company.Project_. If you have used a different directory or project name, adjust the commands accordingly.

1. **Open a terminal.**  
   You can use either Command Prompt or PowerShell.

2. **Navigate to the project directory.**  
Change to the API project directory within the solution you created using the Stacks `dotnet new` command. In this example, the solution was created in _c:\dev_ and was named _Company.Project_.

   ```bat
   cd c:\dev\company.project\src\cqrs\src\api
   ```

3. **Build the Docker Image**  
Use the `docker build` command to build the Docker image from the Dockerfile in this folder.

   ```bat
   docker build -t dotnet-api .
   ```

4. **Run the Docker Image.**  
Use the `docker run` command to start a container from the built image.  
See the note on Environment Variables below for the adjustments that you should make to this command.

   ```bat title="Command Line"
   docker run -p 5000:80 ^
   --mount type=bind,source=/path/to/PROJECT-NAME/cqrs/src/api/xxENSONOxx.xxSTACKSxx.API/appsettings.json,target=/app/config/appsettings.json ^
   -e COSMOSDB_KEY=your-key ^
   -e SERVICEBUS_CONNECTIONSTRING=your-asb-connection-string ^
   -e EVENTHUB_CONNECTIONSTRING=your-aeh-connection-string ^
   -e STORAGE_CONNECTIONSTRING=your-aeh-storage-connection-string ^
   dotnet-api:latest
   ```

   ```bat title="PowerShell"
   docker run -p 5000:80 `
   --mount type=bind,source=/path/to/PROJECT-NAME/cqrs/src/api/xxENSONOxx.xxSTACKSxx.API/appsettings.json,target=/app/config/appsettings.json `
   -e COSMOSDB_KEY=your-key `
   -e SERVICEBUS_CONNECTIONSTRING=your-asb-connection-string `
   -e EVENTHUB_CONNECTIONSTRING=your-aeh-connection-string `
   -e STORAGE_CONNECTIONSTRING=your-aeh-storage-connection-string `
   dotnet-api:latest
   ```



</TabItem>

<TabItem value="mac-and-linux">

1. Open **Terminal**.

2. **Navigate to the project directory.**  
Change to the API project directory within the solution you created using the Stacks `dotnet new` command. In this example, the solution was created in a folder called _dev_ inside _anneexample_'s home directory and was named _Company.Project_.

   ```bash
   cd /users/anneexample/dev/company.project/src/cqrs/src/api
   ```

3. **Build the Docker Image**  
Use the `docker build` command to build the Docker image from the Dockerfile in this folder.

   ```bat
   docker build -t dotnet-api .
   ```

4. **Run the Docker Image.**  
Use the `docker run` command to start a container from the built image.  
See the note on Environment Variables below for the adjustments that you should make to this command.

   ```bash
   docker run -p 5000:80 \
   --mount type=bind,source=/path/to/PROJECT-NAME/cqrs/src/api/xxENSONOxx.xxSTACKSxx.API/appsettings.json,target=/app/config/appsettings.json \
   -e COSMOSDB_KEY=your-key \
   -e SERVICEBUS_CONNECTIONSTRING=your-asb-connection-string \
   -e EVENTHUB_CONNECTIONSTRING=your-aeh-connection-string \
   -e STORAGE_CONNECTIONSTRING=your-aeh-storage-connection-string \
   dotnet-api:latest
   ```

</TabItem>
</Tabs>

:::note Environment Variables

When running the Docker container, you need to pass environment variables using the `-e` switch. The **COSMOSDB_KEY** is always needed when running the container, but the **SERVICEBUS_CONNECTIONSTRING**,  **EVENTHUB_CONNECTIONSTRING** and **STORAGE_CONNECTIONSTRING** are used depending on the message service that you chose to use when you followed the [Configure REST API with CQRS project](https://stacks.ensono.com/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/configure_project_netcore) step of this guide.

When you chose a messaging service, you were asked to make a note of the environment variables necessary for your choices.  Edit the `docker run` command above by removing the environment variables for messaging services that you do not need.  For the secrets that you do need, replace the secret placeholders with your actual secrets.  The table below describes each environment variable.

| Environment Variable name   | Environment Variable required when...               |
|-----------------------------|-----------------------------------------------------|
| COSMOSDB_KEY                | Always required.                                    |
| SERVICEBUS_CONNECTIONSTRING | When _Azure Service Bus_ is your messaging service. |
| EVENTHUB_CONNECTIONSTRING   | When _Azure Event Hubs_ is your messaging service.  |
| STORAGE_CONNECTIONSTRING    | When _Azure Event Hubs_ is your messaging service.  |

:::

:::note appsettings.json

Note that we mount the **appsettings.json** file when running locally, but we do not do this when the full project is deployed to Azure.  This is because when the project is deployed to Azure, the build process will perform the substitution.

:::

</div>
</details>

### Verify that the application has started

:::note Relationship between domain and path

If you changed the name of the domain object when you created the project with the Stacks `dotnet new` command, then the URL path below will reflect this.  If you did not change the name of the domain object, then the original example of  `Menu` is used.  If, for example, you chose a domain object called  `foo`, then the path will be `../v1/foo` instead of `..v1/menu`.

:::

Browse to [http://localhost:5000/v1/menu](http://localhost:5000/v1/menu).  
This should return a valid JSON response.

The application configuration uses Swagger/OAS3 to represent the API endpoints. The Swagger UI can be viewed by directing your
browser to [http://localhost:5000/swagger/index.html](http://localhost:5000/swagger/index.html).
