---
id: configure_swagger_ui_netcore
title: Configure Swagger UI
hide_title: true
sidebar_label: Swagger UI
hide_table_of_contents: true
description: Swagger UI configuration for the .NET Core REST API application
keywords:
  - .net core
  - rest api
  - tests 
  - stacks
  - swagger
  - swagger ui
  - registration
  - controller
  - configuration
  - dotnet
---

import HideNavigation  from "../../../../../../../src/components/HideNavigation/HideNavigation";

## Configure OpenApi UI

To configure the OpenApi UI, the spec path along with the name of the spec must be passed in the `SwaggerEndpoint()` method within the `UseSwaggerUI()` extension.

```csharp
  .UseSwagger(c =>
   {
       c.PreSerializeFilters.Add((swagger, httpReq) =>
       {
           swagger.Servers = new List<OpenApiServer> { new OpenApiServer { Url = $"{pathBase}" } };
       });
   })
   .UseSwaggerUI(c =>
   {
       c.DisplayOperationId();
       c.SwaggerEndpoint("all/swagger.json", "Menu (all)");
       c.SwaggerEndpoint("v1/swagger.json", "Menu (version 1)");
       c.SwaggerEndpoint("v2/swagger.json", "Menu (version 2)");

       if (jwtBearerAuthenticationConfiguration.HasOpenApiClient())
       {
           c.OAuthClientId(jwtBearerAuthenticationConfiguration.OpenApi.ClientId);
           c.OAuthUsePkce();
       }
   });
```

The above snippet registers the `v1/swagger.json` in the UI. Once the UI is loaded, the documents registered by `SwaggerEndpoint()` will be loaded.

For registering multiple spec versions, simply register multiple document generations by calling the `.AddSwaggerGen(c => ...)` multiple times, changing just the document filter from `/v1` to the version desired.

```csharp
// OpenApi multiple doc spec
 services
        .AddSwaggerGen(c =>
        {
            // excluded for brevity 
        });
```

The OpenAPI UI should be available as below.

![Swagger UI](/img/swagger-ui-info.png)

<HideNavigation next />
