---
id: build_and_run_project_netcore
title: Build & Run
sidebar_label: Build & Run the Project
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
  - build
  - run
  - application
---

## Build and Run the application

<br />

The API generated consists of configuration to be run locally or on a docker container.

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<details open>
<summary>Build and run locally</summary>

<div>

<Tabs
groupId="operating-systems"
defaultValue="windows"
values={[
{label: 'Windows', value: 'windows'},
{label: 'Linux', value: 'linux'},
]}>
<TabItem value="windows">

Move to the `<PROJECT-NAME>/src/api` folder and run the next commands in **Command Prompt** or **Powershell**

```bash
dotnet build
```

```bash
# Note that the template engine will rename your paths, so change the command accordingly
dotnet run --project xxAMIDOxx.xxSTACKSxx.API/xxAMIDOxx.xxSTACKSxx.API.csproj
```

</TabItem>

<TabItem value="linux">

Move to the `<PROJECT-NAME>/src/api` folder and run the next commands in **terminal**.

```bash
export COSMOSDB_KEY=<COSMOSDB_KEY value here>
export SERVICEBUS_CONNECTIONSTRING=<Your Service Bus connection string here>
export EVENTHUB_CONNECTIONSTRING=<Your Event Hub connection string here>
export STORAGE_CONNECTIONSTRING=<Your Event Hub storage connection string here>
```

```bash
dotnet build
```

```bash
# Note that the template engine will rename your paths, so change the command accordingly
dotnet run --project xxAMIDOxx.xxSTACKSxx.API/xxAMIDOxx.xxSTACKSxx.API.csproj
```

</TabItem>
</Tabs>

</div>
</details>

<br />

<details>
<summary>Build and run in docker container</summary>

<div>

From the `<PROJECT-NAME>/src/api` folder, build a Docker image using e.g. the command below:

```bash title="Build docker image"
docker build -t dotnet-api .
```

This uses the **Dockerfile** in this folder to generate the Docker image.

After the creation of the Docker image, the Docker container can be run using the command below:

```bash title="Run docker container"
docker run -p 5000:80 --mount type=bind,source=/path/to/PROJECT-NAME/src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json,target=/app/config/appsettings.json -e COSMOSDB_KEY=your-key -e SERVICEBUS_CONNECTIONSTRING=your-asb-connection-string -e EVENTHUB_CONNECTIONSTRING=your-aeh-connection-string -e STORAGE_CONNECTIONSTRING=your-aeh-storage-connection-string  dotnet-api:latest`
```

:::note
The **COSMOSDB_KEY** described in the command above has to be passed when running the container. **SERVICEBUS_CONNECTIONSTRING** OR **EVENTHUB_CONNECTIONSTRING** and **STORAGE_CONNECTIONSTRING** are needed based on the configuration and message service you'll be using. Note that the **appsettings.json** value is mounted here for running locally,
but not if the full project is deployed to Azure, where the build process will perform the substitution.
:::

</div>
</details>

<br />

<details open>
<summary>Verify that the application has started</summary>

<div>

Browse to [http://localhost:5000/v1/menu](http://localhost:5000/v1/menu). This should return a valid JSON response.

The application configuration uses Swagger/OAS3 to represent the API endpoints. The Swagger UI can be viewed by directing your
browser to [http://localhost:5000/swagger/index.html](http://localhost:5000/swagger/index.html).

</div>
</details>

<br />
