---
id: configure_swagger_netcore
title: Configure Swagger
sidebar_label: Swagger
---

The document generation configuration is done in the Startup class of your API, within the ConfigureServices(IServiceCollection services) method, we need to make a call to the extension method `AddSwaggerGen(Action<SwaggerGenOptions> setupAction)` passing an action to generate the documentation options.

Each call to AddSwaggerGen() will generate a new document, the parameters passed to it will be used to configure the rules for document generation, the output of a document generation is a simple JSON file, by default the file(spec) will be available on `/swagger/versionName/swagger.json.`

Example:

```jsx title="Startup.cs (Register doc generation)"
public class Startup
{
    public IConfiguration Configuration { get; }
    private readonly IHostingEnvironment _hostingEnv;

    public Startup(IHostingEnvironment env, IConfiguration configuration)
    {
        _hostingEnv = env;
        Configuration = configuration;
    }

    public void ConfigureServices(IServiceCollection services)
    {
        services
            .AddMvcCore()
            .AddApiExplorer()
            ... Omit for brevity ...;

        services
            .AddSwaggerGen(c =>
            {
                //defines the doc version
                c.SwaggerDoc("v1", new Info
                {
                    Version = "v1",
                    Title = "API",
                    Description = "APIs endpoints"
                });

                //will generate models containing only the class name, ignoring the namespace
                c.CustomSchemaIds(type => type.FriendlyId(false));

                //Enum will be generated as strings
                c.DescribeAllEnumsAsStrings();

                //Will load the comments provided in the code using / / / , the build will generate the xml file in the output folder.
                // Make sure the project file contains the attribute <GenerateDocumentationFile>true</GenerateDocumentationFile>
                c.IncludeXmlComments($"{AppContext.BaseDirectory}{Path.DirectorySeparatorChar}{_hostingEnv.ApplicationName}.xml");

                // Show only operations where route starts with v1
                c.DocumentFilter<VersionPathFilter>("/v1");

                // Include DataAnnotation attributes on Controller Action parameters as Swagger validation rules (e.g required, pattern, ..)
                // Enforce parameters provided in the path to be required
                // Use [ValidateModelState] on Actions to actually validate it in C# as well!
                c.OperationFilter<GeneratePathParamsValidationFilter>();
            });
    }
}
```

The snippet above demonstrates the usage of .AddSwaggerGen() to register the document generation. The output of this snipped will generate a document found on the following path `/swagger/v1/swagger.json`
