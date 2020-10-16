---
id: create_project_netcore
title: Create the project
hide_title: true
sidebar_label: Create the project
---

## Create the project

To create the project there are three different options available.

* [Cloning the repository](#create-the-project-by-cloning-github-repository)
* [Using the dotnet template](#create-the-project-using-the-template)
* [Using the npx Scaffolding CLI](#create-the-project-using-the-scaffolding-cli)

<br />

### Create the project by cloning GitHub repository

Clone the Dotnet project to your local machine from here: [stacks-dotnet repository](https://github.com/amido/stacks-dotnet)

<br />

### Create the project using the template

```cmd title="Template command to create the project"
dotnet new stacks-app -n Company.Project -d DomainName
```

The above command will create a folder and a repository called `Company.Project`.

:::note Template parameter details

- **-n**
    - Sets the project name
    - Omitting it will result in the project name being the same as the folder where the command has been ran from

- **-o**
    - Sets the path to where the project is added
    - Omitting the parameter will result in the creation of a new folder

- **-d**, **-Domain**
    - Sets the name of the aggregate root object. It is also the name of the collection within CosmosDB instance.

:::

<br />

### Create the project using the Scaffolding CLI

The Amido Stacks Scaffolding CLI can be used to create a fully-functional and deployable project from a template, in a variety of flavours.
It includes tests (unit, integration), together with infrastructure and deployment definitions. All by running from your CLI.

We use [npx](https://www.npmjs.com/package/npx) to execute the [scaffolding-cli](https://www.npmjs.com/package/@amidostacks/scaffolding-cli).

```text title="npx install command"
npm install -g npx
```

We are supporting and running [node@12](https://nodejs.org/en/about/releases/).
Please ensure that your local environment has the correct version [installed](https://nodejs.org/en/download/).

```cli title="Scaffolding-CLI command to create the project"
npx @amidostacks/scaffolding-cli@latest run -i
```

You will be asked a number of questions. Based on the answers, your ready-to-build project template will be produced.


