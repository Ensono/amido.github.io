---
id: structure_java_cqrs
title: Java Rest API Structure
sidebar_label: Project structure
description: Java Rest API Structure
keywords:
  - java
  - rest 
  - api
  - project
  - overview
  - configuration
  - logging
  - application insights
  - swagger
  - authorisation
  - settings
  - cqrs
---

## Project structure

The outline structure of the project is as below.

```text
├── java
│   └── com
│       └── amido
│           └── stacks
│               └── workloads
│                   └── menu
│                       ├── api
│                       │   ├── v1
│                       │   │   ├── dto
│                       │   │   │   ├── request
│                       │   │   │   └── response
│                       │   │   └── impl
│                       │   └── v2
│                       │       └── impl
│                       ├── commands
│                       ├── domain
│                       ├── events
│                       ├── exception
│                       ├── handlers
│                       ├── mappers
│                       ├── repository
│                       └── service
│                           └── impl
└── resources
    └── local
```

## Overview of `com.amido.stacks.workflows.menu` packages

Package `menu.api.v1` contains the `Controller` definitions, both as interface definitions where the
[Swagger](https://swagger.io/) (OpenAPI) details are defined, and as concrete implementations under the `impl` package.

Package `menu.api.v1.dto` contains request and response object definitions for the different endpoints.

Package `menu.api` additionally contains the `OpenApiConfiguration` class, which is responsible for
defining what is displayed by the Swagger UI page for the application.

Package `menu.commands` contains the `Command` classes specific to particular API update operations, e.g. `CreateMenuCommand`, `DeleteItemCommand` etc.

Package `menu.domain` contains the data object defintions for the Menu model: `Menu`, `Category` and `Item`.

Package `menu.events` contains the `Event` definitions for specific API update events.

Package `menu.exception` contains the custom `Exception` definitions for the application.

Package `menu.handlers` contains the `Handler` definitions that coordinate command execution and the sending of events.

Package `menu.repository` contains the `MenuRepository` interface definition, which defines repository operations and
extends `CosmosRepository`, itself an extension of the Spring `PagingAndSortingRepository`.

Package `menu.service` contains the interface `MenuQueryService` and its implementation, `CosmosMenuQueryService` which relies
on the CosmosRepository to fulfil the service's actions.

## Configuration

The `resources` directory contains an `application.yaml` file, and this is responsible for the project configuration.
This information includes Azure Cosmos DB and Application Insights configuration, which are passed as a environment variables during the deployment phase.

Below is snippet of the `application.yml` configuring the Swagger and the Spring Boot specifications:

```yaml
spring:
  application:
    name: xxSTACKSxx-api
  data:
    rest:
      detection-strategy: annotated

server:
  # Note: ONLY use this if you're behind a trusted Reverse Proxy, such as Application Gateway.
  # If you host this app directly then users can easily inject headers.
  forward-headers-strategy: framework
  #######
  port: 9000

management:
  endpoints:
    web:
      base-path: /

springdoc:
  swagger-ui:
    disable-swagger-default-url: true
    display-operation-id: true
    path: /swagger/index.html
  packagesToScan: com.xxAMIDOxx.xxSTACKSxx.menu.api
  api-docs:
    groups:
      enabled: true
    enabled: true
    path: /swagger/oas-json
```

## Application logging

Java provides a simple logging abstraction with most of required logging features used by an application.
Whenever logging is required in the application, the class will instantiate an instance of Logger from slf4j to use as the logger object. The Logger instances are created by Logging Factory registered by each application and will abstract the logging library from the application logging.

In the application, we have customized how the logs are created. There is a `logback-spring.xml` file in the `resources` directory
to add the customized features, as below:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <appender class="ch.qos.logback.core.ConsoleAppender" name="console">
    <encoder>
      <pattern>%d{dd-MM-yyyy HH:mm:ss.SSS} %magenta([%thread]) | %X{CorrelationId} |
        %highlight(%-5level) %logger{36}.%M - %msg%n
      </pattern>
    </encoder>
  </appender>
  <appender class="com.microsoft.applicationinsights.logback.ApplicationInsightsAppender"
    name="aiAppender">
  </appender>
  <root level="debug">
    <appender-ref ref="console"/>
  </root>
  <root level="info">
    <appender-ref ref="aiAppender"/>
  </root>
</configuration>

```

## Application Insights

Azure Application Insights is the chosen logging platform, and will aggregate all logs generated by all services.

Integrating with Application Insights ensures all logs generated (and filtered) are forwarded to the logging platform
for correlation and potential future investigation. Below is the section that needs to be added the `application.yml` to
enable it to interact with Application Insights:

```yaml
 application-insights:
    instrumentation-key: xxxxxx
    enabled: true
```

Additionally, an `AI-Agent.xml` definition is included in the `resource` directory to enable deeper data insights:

```xml
<?xml version="1.0" encoding="utf-8"?>
<ApplicationInsightsAgent>
  <Instrumentation>
    <BuiltIn>
      <Logging threshold="info"/>
    </BuiltIn>
  </Instrumentation>
</ApplicationInsightsAgent>
```

Any events published by the application will have a correlation id, to enable tracking of requests, responses and any exceptions.

## Authorization with Auth0

The API endpoints are protected by an OAuth 2.0 provider.
The OAuth 2.0 client is configured as an [Auth0](https://auth0.com/) instance. All requests must include a `Bearer` token in the `Authorization` header.

There is an `auth.properties` file which configures the authorization definitions required to use
the application with in conjunction with Auth0 to secure access to endpoints with JWT. If this property is set:

```text
auth.isEnabled=true
```

then a valid JWT is required to be sent with the header in the request to the API endpoint.

Other Auth0 properties defined in this file, and used by spring security for validating the token are:

- `auth0.issuer` - the issuer of the JWT Token. Typically, this is your Auth0 domain prefixed by `https://`
- `auth0.apiAudience` - the unique identifier for your API, `https://.../api/v2/`

### Testing Auth0 JWT security using Swagger UI

- Open the swagger UI page at [http://localhost:9000/swagger/index.html](http://localhost:9000/swagger/index.html) once
the application is up and running locally.

- Send a POST request via the `Auth` endpoint on the Swagger UI page for your configured API definition, containing the following payload:

    ```json
    {
      "client_id": "REDACTED",
      "client_secret": "REDACTED",
      "audience": "https://REDACTED/api/v2/",
      "grant_type": "client_credentials"
    }
    ```

- You should receive a response containing a valid token something like

    ```json
    {
        "access_token": "eyJhbGciOiJSU...wd6WXw",
        "expires_in": 86400,
        "token_type": "Bearer"
    }
    ```

- Click on the `Authorise` button on the Swagger UI page and paste the token.
- Endpoints should now work _only_ with a valid token.
