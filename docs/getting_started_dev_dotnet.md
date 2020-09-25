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

## USING THE STACKS DOTNET TEMPLATE

The Stacks template is a template for the `dotnet new` command, and used to create a new application repository based on the Stacks structure.

The Amido Stacks structure uses a naming convention for many folders in order to make the process simple and intuitive.
For that reason, you are advised to create the whole application structure and then remove the parts that are not needed.

### INSTALLING THE TEMPLATE

If you have installed the Stacks template before, it is recommended that you remove older versions before installing the new one.
To remove it, run the following command:

````text
dotnet new -u stacks-app-template
````

Note: if you don't have a previous installed, the command will fail, you can skip to the next step.

Download the [stacks-app-template.1.0.0.nupkg template package](https://github.com/amido/stacks-dotnet/releases/tag/1.0.0)
(.Net Core 3.1, current LTS release) to a temporary folder.

Install this package:

````text
dotnet new -i /path/to/stacks-app-template.1.0.0.nupkg
````

Once this has completed, a list of available templates will be displayed on the screen.
Check to ensure that the template **Amido Stacks Application Repository** is present in the list.

### CREATE A NEW APPLICATION USING THE TEMPLATE

````text
dotnet new stacks-app -n Company.Project -d DomainName
````

The above command will create a folder and a repository called `Company.Project`.

If you omit the parameter `-n`, the CLI will create the project using the name of the folder the command is being run from
(e.g. `c:\demo\amido-sample> dotnet new stacks-app` will generate a project called `amido-sample`).
To prevent the creation of a new folder you can pass the parameter `-o` with a path name
e.g. `dotnet new stacks-app -o ./foldername`).

The parameter `-d` is a short name for `--Domain`. Domain is the name used by the aggregate root object and referenced in multiple place in the project.

### RUNNING THE APPLICATION

The template does not set up the application configuration required to run. Before you attempt to start the
application make sure it is configured properly.

Assuming you have already installed all dependencies required (i.e. CosmosDB emulator, or you have a conection to a CosmosDB instance)
you will need to configure the application to connect to the database. Ensure that the `DatabaseAccountUri` value is set
(as per the instructions above for running the application locally).

By default, on a developer machine, the template is configured to connect to a local CosmosDB emulator - make sure you
create a database (default is `Stacks`) and a collection within it (default: same as domain name supplied).
The collection partition key by default uses the ID (`/id`).

You should also ensure that the `Company.Project.API/Properties/launchSettings.json` file has the correct `COSMOSDB_KEY value set.

Once these are set, load the project into VisualStudio and press `F5` to start debugging. The browser will open,
and you should be presented with a Swagger UI page showing the default api endpoints with their CRUD operations.

Alternatively, you can run these steps from the command line:

````text
dotnet restore
dotnet clean
dotnet build

dotnet run --project Company.Project.API/Company.Project.API.csproj
````

The deployment pipeline should be configured with the DevOps team in order to setup the right dependencies.

## USING THE SCAFFOLDING CLI TO CREATE A DOTNET PROJECT

The Amido Stacks Scaffolding CLI can be used to create a fully-functional and deployable project from a template, in a variety of flavours.
It includes tests (unit, integration), together with infrastructure and deployment definitions. All by running from your CLI.

We use `npx` to execute and create the
[template-cli](https://www.npmjs.com/package/@amidostacks/scaffolding-cli)
[npx](https://www.npmjs.com/package/npx).

We are supporting and running [node@12](https://nodejs.org/en/about/releases/).
Please ensure that your local environment has the correct version [installed](https://nodejs.org/en/download/).

To run the Scaffolding CLI, use the following commands

```text
npx @amidostacks/scaffolding-cli@latest run -i
```

You will be asked a number of questions. Based on the answers, your ready-to-build project template will be produced.
