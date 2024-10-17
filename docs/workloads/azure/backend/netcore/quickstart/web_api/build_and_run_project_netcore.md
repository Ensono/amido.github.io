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

## Build and Run the Application

The API can be configured to run locally or in a Docker container.

### Build and Run Locally

<details open>
<summary>Instructions for Windows</summary>

1. Open **Command Prompt** or **PowerShell**.
2. Navigate to the `<PROJECT-NAME>/simple-api/src/api` folder.
3. Run the following command to build the project:

    ```bash
    dotnet build
    ```

4. Run the following command to start the project:

    ```bash
    dotnet run --project xxENSONOxx.xxSTACKSxx.API/xxENSONOxx.xxSTACKSxx.API.csproj
    ```

</details>

<details>
<summary>Instructions for Linux</summary>

1. Open your **terminal**.
2. Navigate to the `<PROJECT-NAME>/simple-api/src/api` folder.
3. Run the following command to build the project:

    ```bash
    dotnet build
    ```

4. Run the following command to start the project:

    ```bash
    dotnet run --project xxENSONOxx.xxSTACKSxx.API/xxENSONOxx.xxSTACKSxx.API.csproj
    ```

</details>

### Build and Run in Docker Container

<details>
<summary>Instructions for Docker</summary>

1. Open your **terminal**.
2. Navigate to the `<PROJECT-NAME>/simple-api/src/api` folder.
3. Run the following command to build a Docker image:

    ```bash
    docker build -t dotnet-api .
    ```

   This uses the **Dockerfile** in this folder to generate the Docker image.

4. After the Docker image is created, run the following command to start the Docker container:

    ```bash
    docker run -p 5000:80 --mount type=bind,source=/path/to/PROJECT-NAME/simple-api/src/api/xxENSONOxx.xxSTACKSxx.API/appsettings.json,target=/app/config/appsettings.json
    ```

</details>

### Verify that the Application Has Started

1. Open your web browser.
2. Go to [http://localhost:5000/v1/menu](http://localhost:5000/v1/menu). This should return a valid JSON response.

   > If you have changed the domain (originally `Menu`), the path will reflect that change. For example, if your domain is `Foo`, then the path will be `../v1/foo` instead of `../v1/menu`.

3. To view the Swagger UI, go to [http://localhost:5000/swagger/index.html](http://localhost:5000/swagger/index.html). This will show the API endpoints.