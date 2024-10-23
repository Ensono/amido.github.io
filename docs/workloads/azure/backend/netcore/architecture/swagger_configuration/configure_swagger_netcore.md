---
id: configure_swagger_netcore
title: Configure Swagger
sidebar_label: Swagger
hide_title: true
hide_table_of_contents: true
description: Configure Swagger for .NET Core REST API application
keywords:
  - .net core
  - rest 
  - api
  - tests 
  - stacks
  - swagger
  - registration
  - controller
  - configuration
  - dotnet
---

## Configure OpenAPI

The document generation configuration is done in the Program class of the API. A call to the extension method `AddSwaggerGen(Action<SwaggerGenOptions> setupAction)` is made passing an action to generate the documentation options.

Each call to `AddSwaggerGen()` will generate a new document. The parameters passed will be used to configure the rules for document generation. The output of a document generation process is a simple JSON file. By default, the file(spec) will be available on `/swagger/versionName/swagger.json`.

### Example

```csharp
    services
        .AddSwaggerGen(c =>
        {
            c.SwaggerDoc("all", new OpenApiInfo
            {
                Version = "all",
                Title = "Menu API",
                Description = "APIs used to interact and manage menus for a restaurant",
                Contact = new OpenApiContact
                {
                    Name = "Ensono",
                    Url = new Uri(projectUrl),
                    Email = "stacks@ensono.com"
                }
            });

            c.IncludeXmlComments($"{AppContext.BaseDirectory}{Path.DirectorySeparatorChar}{typeof(xxENSONOxx.xxSTACKSxx.API.Program).Assembly.GetName().Name}.xml");
            c.IncludeXmlComments($"{AppContext.BaseDirectory}{Path.DirectorySeparatorChar}{typeof(CreateMenuRequest).Assembly.GetName().Name}.xml");

            c.DocumentFilter<SwaggerDocumentTagger>(new OpenApiTag[]
            {
                new OpenApiTag { Name = "Menu" },
                new OpenApiTag { Name = "Category" },
                new OpenApiTag { Name = "Item" }
            }, new string[] { });

            c.TagActionsBy(api => new[] { api.GroupName ?? api.ActionDescriptor.RouteValues["controller"] });
            c.DocInclusionPredicate((docName, apiDesc) => true);
            c.CustomOperationIds(apiDesc => apiDesc.TryGetMethodInfo(out var methodInfo) ? methodInfo.Name : null);
            c.ConfigureForJwtBearerAuthentication(jwtBearerAuthenticationConfiguration);
        })
        .AddSwaggerGen(c =>
        {
            c.SwaggerDoc("v1", new OpenApiInfo
            {
                Version = "v1",
                Title = "Menu API",
                Description = "APIs used to interact and manage menus for a restaurant",
                Contact = new OpenApiContact
                {
                    Name = "Ensono",
                    Url = new Uri(projectUrl),
                    Email = "stacks@ensono.com"
                }
            });

            c.IncludeXmlComments($"{AppContext.BaseDirectory}{Path.DirectorySeparatorChar}{typeof(xxENSONOxx.xxSTACKSxx.API.Program).Assembly.GetName().Name}.xml");
            c.DocumentFilter<VersionPathFilter>("/v1");
        })
        .AddSwaggerGen(c =>
        {
            c.SwaggerDoc("v2", new OpenApiInfo
            {
                Version = "v2",
                Title = "Menu API",
                Description = "APIs used to interact and manage menus for a restaurant",
                Contact = new OpenApiContact
                {
                    Name = "Ensono",
                    Url = new Uri(projectUrl),
                    Email = "stacks@ensono.com"
                }
            });

            c.IncludeXmlComments($"{AppContext.BaseDirectory}{Path.DirectorySeparatorChar}{typeof(xxENSONOxx.xxSTACKSxx.API.Program).Assembly.GetName().Name}.xml");
            c.DocumentFilter<VersionPathFilter>("/v2");
        });
```

The snippet above demonstrates the usage of `.AddSwaggerGen()` to register the document generation. The output of this snipped will generate a document found on the path `/swagger/v1/swagger.json`.
