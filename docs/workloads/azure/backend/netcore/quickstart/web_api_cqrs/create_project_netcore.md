---
id: create_project_netcore
title: Create REST API with CQRS project
hide_title: true
sidebar_label: Create REST API with CQRS project
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

## Create a project

<details>
<summary>Installing/uninstalling the package</summary>

### Install the package

:::note
.NET 3.1 templates have been deprecated. If you want to use the 3.1 templates the latest version is [3.0.130](https://www.nuget.org/packages/Amido.Stacks.CQRS.Templates/3.0.130)
:::

Access Amido.Stacks.CQRS.Template package page in Nuget [here](https://www.nuget.org/packages/Amido.Stacks.CQRS.Templates/). Copy and execute the command displayed in the page (if you want to get the latest version). For example:

```bash title="Run command to install the package"
	dotnet new --install Amido.Stacks.CQRS.Templates
```

<ResponsivePlayer url="https://vimeo.com/640289104" />

Once installed you can either, create a new project or add CQRS to an existing project.

### Uninstalling the templates

If you want to remove the templates from your system you'll have to uninstall the Nuget package.

```bash title="To uninstall package execute the following command"
dotnet new --uninstall Amido.Stacks.CQRS.Templates
```

</details>

<details>
<summary>Creating a new project</summary>

### Create a new project

Navigate to the folder where you wish to create a new project in. Then run the following command.

```bash title="Run the command to create the project"
dotnet new stacks-cqrs-webapi -n Company.Project -do YourDomain
```

The above command will create a folder and a repository called `Company.Project`.

### Setting the database option

To create a project with CosmosDb as the database you can use the following command

```bash title="Run the command to create the project with database"
dotnet new stacks-cqrs-webapi -n Company.Project -do YourDomain -db CosmosDb
```

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

<ResponsivePlayer url="https://vimeo.com/640289034" />

</details>

<details>
<summary>Adding CQRS to an existing project</summary>

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

</details>
