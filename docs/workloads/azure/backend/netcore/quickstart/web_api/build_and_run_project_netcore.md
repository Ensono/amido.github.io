---
id: build_and_run_project_netcore
title: Build & Run REST API
sidebar_label: Build & Run REST API
hide_title: true
hide_table_of_contents: true
description:  Build and Run .NET Core REST API application
keywords:
  - .net core
  - rest api
  - azure
  - application insights
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

Move to the `<PROJECT-NAME>/simple-api/src/api` folder and run the next commands in **Command Prompt** or **Powershell**

```bash
dotnet build
```

```bash
# Note that the template engine will rename your paths, so change the command accordingly
dotnet run --project xxENSONOxx.xxSTACKSxx.API/xxENSONOxx.xxSTACKSxx.API.csproj
```

</TabItem>

<TabItem value="linux">

Move to the `<PROJECT-NAME>/simple-api/src/api` folder and run the next commands in **terminal**.

```bash
dotnet build
```

```bash
# Note that the template engine will rename your paths, so change the command accordingly
dotnet run --project xxENSONOxx.xxSTACKSxx.API/xxENSONOxx.xxSTACKSxx.API.csproj
```

</TabItem>
</Tabs>

</div>
</details>

<br />

<details>
<summary>Build and run in docker container</summary>

<div>

From the `<PROJECT-NAME>/simple-api/src/api` folder, build a Docker image using e.g. the command below:

```bash title="Build docker image"
docker build -t dotnet-api .
```

This uses the **Dockerfile** in this folder to generate the Docker image.

After the creation of the Docker image, the Docker container can be run using the command below:

```bash title="Run docker container"
docker run -p 5000:80 --mount type=bind,source=/path/to/PROJECT-NAME/simple-api/src/api/xxENSONOxx.xxSTACKSxx.API/appsettings.json,target=/app/config/appsettings.json
```

</div>
</details>

<br />

<details open>
<summary>Verify that the application has started</summary>

<div>

:::note Relationship between domain and path

Keep in mind that if you've changed the domain (original being `Menu`), the path will reflect that. If your domain is `Foo`. Then the path will be `../v1/foo` instead of `..v1/menu` etc.

:::

Browse to [http://localhost:5000/v1/menu](http://localhost:5000/v1/menu). This should return a valid JSON response.

The application configuration uses Swagger/OAS3 to represent the API endpoints. The Swagger UI can be viewed by directing your
browser to [http://localhost:5000/swagger/index.html](http://localhost:5000/swagger/index.html).

</div>
</details>

<br />
