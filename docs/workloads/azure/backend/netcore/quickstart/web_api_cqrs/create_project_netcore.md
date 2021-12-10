---
id: create_project_netcore
title: Create the project
hide_title: true
sidebar_label: Create the project
hide_table_of_contents: true
description: Create .NET Core REST API application with CQRS from a template
keywords:
  - .net core
  - rest api
  - cqrs
  - example
  - template
  - azure
  - application insights
  - cosmos db
  - build
  - run
  - application
  - configure
  - docker
  - tests
  - github
---

import ResponsivePlayer from "../../../../../../../src/pages/Components/ResponsivePlayer/ResponsivePlayer";

## Create the project

There are several ways to get your Stacks project, or to get parts of it.

<br />


<details>
<summary>Create a new project using the template or add code to an existing project</summary>

<div>

### Install the package

:::note
.NET 3.1 templates have been deprecated. If you want to use the 3.1 templates the latest version is [3.0.130](https://www.nuget.org/packages/Amido.Stacks.CQRS.Templates/3.0.130)
:::

Access Amido.Stacks.CQRS.Template package page in Nuget [here](https://www.nuget.org/packages/Amido.Stacks.CQRS.Templates/). Copy and execute the command displayed in the page (if you want to get the latest version). For example:

```bash title="Run the command to install the package"
	dotnet new --install Amido.Stacks.CQRS.Templates
```

<ResponsivePlayer url="https://vimeo.com/640289104" />

Once installed you can either, create a new project (step 2) or add CQRS to an existing project (step 3). Choose one.

### Create a new project

Navigate to the folder where you wish to create a new project on.

```bash title="Run the command to create the project"
dotnet new stacks-cqrs-webapi -n Company.Project -do YourDomain
```

The above command will create a folder and a repository called `Company.Project`.

### Uninstalling a template

```bash title="To uninstall the template pack you have to execute the following command"
dotnet new --uninstall Amido.Stacks.Templates
```

### Setting the database option

To create a project with CosmosDb as the database you can use the following command

```bash title="Run the command to create the project with database"
dotnet new stacks-cqrs-webapi -n Company.Project -do YourDomain -do CosmosDb
```

<ResponsivePlayer url="https://vimeo.com/640289034" />

### Add CQRS to an existing project

Let's say you have a WebAPI solution and you want to add CQRS functionality to it.

In order for the template to generate correctly you'll need to execute it in the folder where your `.sln` file is located. Also for the purposes of this example we're assuming that in your solution the projects and namespaces have `Foo.Bar` as a prefix.

```shell
% cd src

% dotnet new stacks-add-cqrs -n Foo.Bar.CQRS -do Menu
The template "Amido Stacks Web Api CQRS - Add to existing solution" was created successfully.
```

If all is well, in the output you'll see that projects are being added as references to your `.sln` file. The list of projects that you'll get by installing this template are as follows (please note the prefix provided with the `-n` flag from above):

- Foo.Bar.CQRS.Infrastructure
- Foo.Bar.CQRS.API
- Foo.Bar.CQRS.API.Models
- Foo.Bar.CQRS.Application.CommandHandlers
- Foo.Bar.CQRS.Application.Integration
- Foo.Bar.CQRS.Application.QueryHandlers
- Foo.Bar.CQRS.Domain
- Foo.Bar.CQRS.Common
- Foo.Bar.CQRS.CQRS
- Foo.Bar.CQRS.Common.UnitTests
- Foo.Bar.CQRS.CQRS.UnitTests
- Foo.Bar.CQRS.Domain.UnitTests
- Foo.Bar.CQRS.Infrastructure.IntegrationTests

As you see you get a new `Foo.Bar.CQRS.API` folder which has controllers wired up with the CQRS command handlers. If you had provided `-n Foo.Bar` as your name in the command above you would get an error stating the following:

```shell
Creating this template will make changes to existing files:
  Overwrite   ./Foo.Bar.API.Models/Requests/CreateCategoryRequest.cs
  Overwrite   ./Foo.Bar.API.Models/Requests/CreateItemRequest.cs
  Overwrite   ./Foo.Bar.API.Models/Requests/CreateCarRequest.cs
  Overwrite   ./Foo.Bar.API.Models/Requests/UpdateCategoryRequest.cs
  Overwrite   ./Foo.Bar.API.Models/Requests/UpdateItemRequest.cs
  Overwrite   ./Foo.Bar.API.Models/Requests/UpdateCarRequest.cs
  Overwrite   ./Foo.Bar.API.Models/Responses/Category.cs
  Overwrite   ./Foo.Bar.API.Models/Responses/Item.cs
  Overwrite   ./Foo.Bar.API.Models/Responses/Car.cs
  Overwrite   ./Foo.Bar.API.Models/Responses/ResourceCreatedResponse.cs
  Overwrite   ./Foo.Bar.API.Models/Responses/SearchCarResponse.cs
  Overwrite   ./Foo.Bar.API.Models/Responses/SearchCarResponseItem.cs
  Overwrite   ./Foo.Bar.API.Models/Foo.Bar.API.Models.csproj
  Overwrite   ./Foo.Bar.API/appsettings.json
  Overwrite   ./Foo.Bar.API/Authentication/ConfigurationExtensions.cs
  Overwrite   ./Foo.Bar.API/Authentication/JwtBearerAuthenticationConfiguration.cs
  Overwrite   ./Foo.Bar.API/Authentication/JwtBearerAuthenticationConfigurationExtensions.cs
  Overwrite   ./Foo.Bar.API/Authentication/JwtBearerAuthenticationOperationFilter.cs
  Overwrite   ./Foo.Bar.API/Authentication/JwtBearerAuthenticationStartupExtensions.cs
  Overwrite   ./Foo.Bar.API/Authentication/OpenApiJwtBearerAuthenticationConfiguration.cs
  Overwrite   ./Foo.Bar.API/Authentication/OpenApiSecurityDefinitions.cs
  Overwrite   ./Foo.Bar.API/Authentication/StubJwtBearerAuthenticationHttpMessageHandler.cs
  Overwrite   ./Foo.Bar.API/Authentication/SwaggerGenOptionsExtensions.cs
  Overwrite   ./Foo.Bar.API/Authorization/ConfigurableAuthorizationPolicyProvider.cs
  Overwrite   ./Foo.Bar.API/Constants.cs
  Overwrite   ./Foo.Bar.API/Controllers/ApiControllerBase.cs
  Overwrite   ./Foo.Bar.API/Controllers/Category/AddCarCategoryController.cs
  Overwrite   ./Foo.Bar.API/Controllers/Category/DeleteCategoryController.cs
  Overwrite   ./Foo.Bar.API/Controllers/Category/UpdateCarCategoryController.cs
  Overwrite   ./Foo.Bar.API/Controllers/Item/AddCarItemController.cs
  Overwrite   ./Foo.Bar.API/Controllers/Item/DeleteCarItemController.cs
  Overwrite   ./Foo.Bar.API/Controllers/Item/UpdateCarItemController.cs
  Overwrite   ./Foo.Bar.API/Controllers/Car/CreateCarController.cs
  Overwrite   ./Foo.Bar.API/Controllers/Car/DeleteCarController.cs
  Overwrite   ./Foo.Bar.API/Controllers/Car/GetCarByIdController.cs
  Overwrite   ./Foo.Bar.API/Controllers/Car/GetCarByIdV2Controller.cs
  Overwrite   ./Foo.Bar.API/Controllers/Car/SearchCarController.cs
  Overwrite   ./Foo.Bar.API/Controllers/Car/UpdateCarController.cs
  Overwrite   ./Foo.Bar.API/Program.cs
  Overwrite   ./Foo.Bar.API/Startup.cs
  Overwrite   ./Foo.Bar.API/Foo.Bar.API.csproj

Rerun the command and pass --force to accept and create.
```

This will happen if the newly generated template project names collide with your existing structure. It's up to you to decide if you want to use the `--force` flag and overwrite all collisions with the projects from the template. By doing so you might lose your custom logic in some places and you'll have to transfer things manually to the new projects by examining the diffs in your source control.

If you don't want to do that you can generate the new projects with a different namespace (what was shown above) and then copy/remove the things you don't need.

<ResponsivePlayer url="https://vimeo.com/640287397" />

:::note Template parameter details

- **-n|--name**
    - Sets the project name
    - Omitting it will result in the project name being the same as the folder where the command has been ran from
- **-do|--domain**
    - Sets the name of the aggregate root object. It is also the name of the collection within CosmosDB instance.
- **-db|--database**
    - Configures which database provider to be used.
- **-o|--output**
    - Sets the path to where the project is added
    - Omitting the parameter will result in the creation of a new folder
:::

</div>
</details>

<br />

<details>
<summary>Create the templates locally by cloning the GitHub repository (outdated)</summary>
<div>

Clone the .NET project to your local machine from here: [stacks-dotnet-cqrs repository](https://github.com/amido/stacks-dotnet-cqrs)

```bash title="Run git clone repository command"
git clone git@github.com:amido/stacks-dotnet-cqrs.git
```

</div>
</details>

<br/>

<details>
<summary>Create the project using the Scaffolding CLI (in redevelopment)</summary>

<div>

The scaffolding CLI is being redeveloped to offer you more guided choices of Amido Stacks project flavour.
Based on the answers, the ready-to-build project template will be produced.

</div>
</details>

<br/><hr/>

## Pros and cons of each option

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
    defaultValue="template"
    values={[
        {label: '.NET Core Template', value: 'template'},
        {label: 'GitHub Repository Clone', value: 'repository_clone'},
        {label: "Scaffolding  CLI", value: 'scaffolding_cli'}
    ]}>
    <TabItem value="template">
        <h4>PROS</h4>
        <ul>
            <li>Has no dependencies.</li>
            <li>Enables creation of .NET Core projects in Amido Stacks Suite.</li>
            <li>Enables versioning and access to older versions of Stacks templates</li>
            <li>Removes out the content not needed from the GitHub repository.</li>
        </ul>
        <h4>CONS</h4>
        <ul>
            <li>Too many commands to run.</li>
        </ul>
    </TabItem>
    <TabItem value="repository_clone">
    <p>source code can be found [here](https://github.com/amido/stacks-dotnet-cqrs)</p>
        <h4>PROS</h4>
        <ul>
            <li>Familiar approach.</li>
            <li>Quick and easy to run (one command).</li>
        </ul>
        <h4>CONS</h4>
        <ul>
            <li>Requires <strong>git</strong> installation.</li>
            <li>Does not remove the files not needed in the repository which may create confusion.</li>
            <li>Does not allow automated personalization of the project.</li>
            <li>All Amido Stacks repositories links required to create all flavours of projects.</li>
        </ul>
    </TabItem>
    <TabItem value="scaffolding_cli">
        <p>The Amido Stacks Scaffolding CLI will be used to create a fully-functional and deployable project from a template, in a variety of flavours.</p>
        <h4>PROS</h4>
        <ul>
            <li>Provides a guided project creation when generating the preferred project flavour.</li>
            <li>Enables the creation of all projects in Amido Stacks templates suite.</li>
            <li>Allows automated personalization of project name, domain model, company name.</li>
            <li>Removes out the content not needed from the GitHub repository.</li>
        </ul>
        <h4>CONS</h4>
        <ul>
            <li>Requires the installation of an extra application.</li>
        </ul>
    </TabItem>
</Tabs>

<br />
