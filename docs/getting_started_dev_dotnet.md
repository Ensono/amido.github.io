---
id: getting_started_dev_dotnet
title: Using the repo to build the Dotnet application locally
sidebar_label: Dev [Dotnet] - Using the repo to build the Dotnet application locally
---

## GETTING STARTED WITH THE DOTNET APPLICATION

### RUNNING THE APPLICATION LOCALLY

1. Clone the Dotnet project to your local machine from here: [stacks-dotnet repository](https://github.com/amido/stacks-dotnet)
2. Configure required environment variables

    The application is currently configured to work with the Azure environment.

    It uses an Azure **CosmosDB** database to store the example application data.
    There is a corresponding environment variable that needs to be set to interact with CosmosDB:

    ```text
    COSMOSDB_KEY
    ```

    For Unix systems, set as additional variable within e.g. `~/.profile` or `/etc/profile`.

    For Windows, open System Properties then select the Advanced tab, then click on the Environment Variables button and add the new parameter.

    Note: For running on local environments, you can use the [Cosmos DB emulator](https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator?tabs=ssl-netstd21) (CosmosDB Emulator has a known fixed key).

    If not running locally, you additionally need to set the CosmosDB URI parameter `DatabaseAccountUri` within the
    file `<PROJECT-NAME>/src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json`:

    ```text
    "DatabaseAccountUri": "https://REPLACE-ME-WITH-COSMOSDB.documents.azure.com:443/"
   ```

3. Build and run the application

    Move to the `<PROJECT-NAME>/src/api` folder, then

    Unix:

    ```text
    export COSMOSDB_KEY=${COSMOSDB_KEY}

    dotnet restore
    dotnet clean
    dotnet build
    dotnet run --project xxAMIDOxx.xxSTACKSxx.API/xxAMIDOxx.xxSTACKSxx.API.csproj
    ```

    Windows:

    ```text
    TODO
    ```

4. Verify that the application has started

    Browse to [http://localhost:5000/v1/menu](http://localhost:5000/v1/menu). This should return a valid JSON response.

    The application configuration uses Swagger/OAS3 to represent the API endpoints. The Swagger UI can be viewed by directing your
    browser to [http://localhost:5000/swagger/index.html](http://localhost:5000/swagger/index.html).

### USING A DOCKER IMAGE

From the `<PROJECT-NAME>/src/api` folder, build a Docker image using e.g. the command below:

   ```text
   docker build -t dotnet-api .
   ```

This uses the `Dockerfile` in this folder to generate the Docker image.

Once the Docker image is created, you can then run a Docker container based on this image using e.g.

   ```text
   docker run -p 5000:80 --mount type=bind,source=/path/to/PROJECT-NAME/src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json,target=/app/config/appsettings.json -e COSMOSDB_KEY=your-key dotnet-api:latest
   ````

where the `COSMOSDB_KEY` is the value as described above. Note that the `appsettings.json` value is mounted here for running locally,
but not if the full project is deployed to Azure, where the build process will perform the substitution.

#### SWAGGER/OAS

- Automatically generated for the project. Go to [Swagger Index](http://localhost:5000/swagger/index.html) to view.
- Swagger Json is here: [Swagger Json](http://localhost:5000/swagger/oas.json)

## USING THE SCAFFOLDING CLI TO CREATE A DOTNET PROJECT TEMPLATE

The Amido Stacks Scaffolding CLI can be used to create a fully-functional and deployable project from a template, in a variety of flavours.
It includes tests (unit, integration), together with infrastructure and deployment definitions. All by running from your CLI.

We use npx to execute and create the
[template-cli](https://www.npmjs.com/package/@amidostacks/scaffolding-cli)
[npx](https://www.npmjs.com/package/npx).

We are supporting and running [node@12](https://nodejs.org/en/about/releases/).
Please ensure that your local environment has the correct version [installed](https://nodejs.org/en/download/).

You will be asked a number of questions. Based on the answers, your ready-to-build project template will be produced.
