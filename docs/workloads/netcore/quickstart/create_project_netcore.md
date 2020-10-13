---
id: create_project_netcore
title: Create the project
sidebar_label: Create
---

### Create the project by cloning GitHub repository

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


### Create the project using the template

````text
dotnet new stacks-app -n Company.Project -d DomainName
````

The above command will create a folder and a repository called `Company.Project`.

If you omit the parameter `-n`, the CLI will create the project using the name of the folder the command is being run from
(e.g. `c:\demo\amido-sample> dotnet new stacks-app` will generate a project called `amido-sample`).
To prevent the creation of a new folder you can pass the parameter `-o` with a path name
e.g. `dotnet new stacks-app -o ./foldername`).

The parameter `-d` is a short name for `--Domain`. Domain is the name used by the aggregate root object,
and referenced in multiple place in the project. It is used as the name of the collection within the CosmosDB instance.


### Create the project using the scaffolding cli

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


