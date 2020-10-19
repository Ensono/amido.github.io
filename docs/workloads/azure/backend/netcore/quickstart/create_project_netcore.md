---
id: create_project_netcore
title: Create the project
sidebar_label: Create the project
---

## Create the project

To create the project there are three different options available.

* Cloning the repository
* Using the dotnet template
* Using the npx Scaffolding CLI

### Create the project by cloning GitHub repository

Clone the Dotnet project to your local machine from here: [stacks-dotnet repository](https://github.com/amido/stacks-dotnet)


### Create the project using the template

```cmd
dotnet new stacks-app -n Company.Project -d DomainName
```

The above command will create a folder and a repository called `Company.Project`.

:::info 

When omitting the **-n** parameter, the CLI will create the project using the name of the folder the command is being run from.
(e.g. `c:\demo\amido-sample> dotnet new stacks-app` will generate a project called `amido-sample`).
To prevent the creation of a new folder you can pass the parameter `-o` with a path name
e.g. `dotnet new stacks-app -o ./foldername`).

The parameter `-d` is a short name for `--Domain`. Domain is the name used by the aggregate root object,
and referenced in multiple place in the project. It is used as the name of the collection within the CosmosDB instance.

:::

### Create the project using the Scaffolding CLI

The Amido Stacks Scaffolding CLI can be used to create a fully-functional and deployable project from a template, in a variety of flavours.
It includes tests (unit, integration), together with infrastructure and deployment definitions. All by running from your CLI.

We use [npx](https://www.npmjs.com/package/npx) to execute the [scaffolding-cli](https://www.npmjs.com/package/@amidostacks/scaffolding-cli).

:::note
To install **npx** run the following command

```cli

npm install -g npx

```

:::

We are supporting and running [node@12](https://nodejs.org/en/about/releases/).
Please ensure that your local environment has the correct version [installed](https://nodejs.org/en/download/).

To run the Scaffolding CLI, use the following commands

```cli
npx @amidostacks/scaffolding-cli@latest run -i
```

You will be asked a number of questions. Based on the answers, your ready-to-build project template will be produced.


