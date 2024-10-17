---
id: logging_netcore
title: Logging with OpenTelemetry and Application Insights
sidebar_label: Logging
hide_title: true
hide_table_of_contents: false
description: Logging for .NET
keywords:
  - .net
  - logging
  - logger
  - open telemetry
  - application insights
  - standard
  - open telemetry configuration
---

## Logging with OpenTelemetry and Application Insights

.NET provides a built-in logging system, which is easy to use and handles most basic logging needs. When you need to log something in your application, you can use the `ILogger<>` interface. This interface is provided by dependency injection, meaning it's automatically available in your classes. The `ILogger<>` instances are created by a logging system that's set up when the application starts.

However, the built-in logging system is basic. It doesn't have advanced features like custom filtering, adding extra information to logs, or forwarding logs to other systems. This is where **OpenTelemetry** comes in—it extends the built-in logging system with more powerful features.

OpenTelemetry integrates with .NET's logging system and adds support for advanced features, like sending logs to different places, filtering logs, and adding extra details to the logs (such as which machine or environment generated them). Every .NET service should use **OpenTelemetry** to ensure that logging is consistent and useful across all services.

---

### Log Destinations (Sinks)

By default, the logs should be sent to two places (called "sinks"):

1. **Console Sink**: This sends logs to the service's console output. This is useful because you can easily view the logs by running command-line tools, like `kubectl logs`, to see what's happening with the service in real time.

2. **Application Insights Sink**: This sends logs to **Application Insights**, which is the main logging platform used to store and analyze logs. It keeps logs from all services in one place, making it easier to investigate problems later.

Using both the console and Application Insights gives a quick way to check logs in real time while also ensuring that all logs are stored and available for more detailed analysis later.

---

### OpenTelemetry Configuration

Here's an example of what the `Program.cs` file might look like when using OpenTelemetry for logging:

```csharp
// Register OpenTelemetry
builder.Services.AddOpenTelemetry()
    .WithTracing(tracingBuilder =>
    {
        tracingBuilder.ConfigureResource(resource =>
        {
            resource.AddService(otlpServiceName);
        });
        tracingBuilder.AddAspNetCoreInstrumentation();
        tracingBuilder.AddConsoleExporter(options =>
        {
            options.Targets = ConsoleExporterOutputTargets.Debug;
        });
    })
    .WithMetrics(metricProviderBuilder =>
    {
        metricProviderBuilder.ConfigureResource(resource =>
        {
            resource.AddService(otlpServiceName);
        });
        metricProviderBuilder.AddAspNetCoreInstrumentation()
            .AddAspNetCoreInstrumentation()
            .AddConsoleExporter();
    })
    .WithLogging(loggerProviderBuilder =>
    {
        loggerProviderBuilder.ConfigureResource(resource =>
        {
            resource.AddService(otlpServiceName);
        });
        loggerProviderBuilder.AddConsoleExporter();
    })
    .UseOtlpExporter();
```
 
Here's an example of what the `appsettings.json` configuration file might look like when using OpenTelemetry for logging:

```json
{
    "OTEL_EXPORTER_OTLP_ENDPOINT": "REPLACE_ME",
    "APPLICATIONINSIGHTS_CONNECTION_STRING": "InstrumentationKey=REPLACE_ME"
}
```

### Key Points:

1. **Console Sink**: 
   - Sends logs to the console, so you can quickly check what's happening with your service in real time. 
   - For example, when using `kubectl logs`, you can see these logs immediately.

2. **Application Insights Sink**: 
   - Sends logs to **Application Insights**, which stores logs from all your services for future analysis. 
   - This makes it easier to investigate issues that happened in the past.

3. **Log Levels**:
   - The **LogLevel** section controls what kinds of logs are generated. The default level is set to "Information", which means logs that are informational or more severe (like warnings or errors) will be logged.
   - You can override the log level for specific parts of your application if needed.

4. **Resource Attributes**:
   - These are extra details added to every log, such as the service name, domain (namespace), and environment (e.g., dev, production). This helps you filter and analyze logs later by knowing where they came from.

5. **Filtering Logs**:
   - OpenTelemetry allows you to ignore or exclude certain logs, for example, if you want to filter out "health check" logs that are not useful for troubleshooting.

By using OpenTelemetry in .NET, you can take full advantage of enhanced logging features that help you understand what's happening in your application. It also ensures your logs are properly forwarded to tools like Application Insights for monitoring and investigation.