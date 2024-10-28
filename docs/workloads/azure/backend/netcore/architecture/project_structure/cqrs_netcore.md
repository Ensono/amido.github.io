---
id: project_structure_netcore_cqrs
title: CQRS Rest Api Solution Structure
sidebar_label: CQRS Rest Api Solution Structure
hide_title: true
hide_table_of_contents: true
description: .NET CQRS REST API application - Solution Structure
keywords:
  - .net
  - rest api
  - example
  - template
  - repository
  - structure
---

## Solution Structure

### Web API with CQRS

```text
Solution xxENSONOxx.xxSTACKSxx.API
├── API
│  ├── xxENSONOxx.xxSTACKSxx.API
│  ├── xxENSONOxx.xxSTACKSxx.API.Infrastructure
├── Application
│  ├── xxENSONOxx.xxSTACKSxx.Application.CommandHandlers
│  ├── xxENSONOxx.xxSTACKSxx.Application.Integration
│  ├── xxENSONOxx.xxSTACKSxx.Application.QueryHandlers
├── Common
│  ├── xxENSONOxx.xxSTACKSxx.Abstractions
│  ├── xxENSONOxx.xxSTACKSxx.Common
│  ├── xxENSONOxx.xxSTACKSxx.CQRS
│  └── External
├── Domain
│  └── xxENSONOxx.xxSTACKSxx.Domain
├── Shared
│  ├── xxENSONOxx.xxSTACKSxx.Shared.Messaging.Azure.ServiceBus
│  └── xxENSONOxx.xxSTACKSxx.Shared.Messaging.Azure.ServiceBus.Tests
└── Tests
   ├── xxENSONOxx.xxSTACKSxx.API.ComponentTests
   ├── xxENSONOxx.xxSTACKSxx.API.UnitTests
   ├── xxENSONOxx.xxSTACKSxx.Common.UnitTests
   ├── xxENSONOxx.xxSTACKSxx.CQRS.UnitTests
   ├── xxENSONOxx.xxSTACKSxx.Domain.UnitTests
   ├── xxENSONOxx.xxSTACKSxx.Infrastructure.IntegrationTests
   └── xxENSONOxx.xxSTACKSxx.Infrastructure.UnitTests
```

#### xxENSONOxx.xxSTACKSxx.API

Contains controllers and OpenAPI documentation. Exposes the application via REST/HTTP endpoints and validates requests. Self-hosted, managed by Program.cs.

#### xxENSONOxx.xxSTACKSxx.API.Infrastructure

Handles cross-cutting concerns like logging, caching, and exception handling. Includes middleware and filters.

#### xxENSONOxx.xxSTACKSxx.Application.CommandHandlers

Handles commands that change the application's state. Validates and processes commands.

#### xxENSONOxx.xxSTACKSxx.Application.Integration

Interacts with external services, databases, and other resources. Handles data access and external communication.

#### xxENSONOxx.xxSTACKSxx.Application.QueryHandlers

Handles queries for data from the application. Processes queries and returns data.

#### xxENSONOxx.xxSTACKSxx.Abstractions

Contains interfaces and base classes for common patterns and behaviors.

#### xxENSONOxx.xxSTACKSxx.Common

Contains utility classes, extension methods, and shared code for logging, configuration, serialization, etc.

#### xxENSONOxx.xxSTACKSxx.CQRS

Implements the Command Query Responsibility Segregation (CQRS) pattern. Separates read and write operations.

#### xxENSONOxx.xxSTACKSxx.Domain

Represents the core domain model. Includes entities, value objects, and business rules.

#### xxENSONOxx.xxSTACKSxx.Shared.Messaging.Azure.ServiceBus

Interacts with Azure Service Bus for messaging. Manages queues, topics, and messaging tasks.

#### xxENSONOxx.xxSTACKSxx.Shared.Messaging.Azure.ServiceBus.Tests

Contains unit tests for the messaging classes. Tests message processing, queue management, and other messaging tasks.

#### xxENSONOxx.xxSTACKSxx.API.ComponentTests

**ComponentTests** cover the entire service from the API endpoints to the last service layer before external dependencies. They mock resources like repositories and gateways to simulate various scenarios.

APIs should also be covered by Contract Tests. Component Tests might seem redundant but can skip API coverage and focus on the application layer to the service boundary. This approach requires an extra test to ensure API and Application integration.

Component tests are similar to functional tests but with a key difference. Functional Tests check if an input produces the expected output without caring about the process. Component Tests ensure the input returns the expected output and that certain conditions are met, such as event raising, external service calls, and correct data formatting.

#### xxENSONOxx.xxSTACKSxx.API.UnitTests

**UnitTests** cover the API project, including controllers, services, and repositories. They mock external dependencies like databases and external services to ensure the API behaves as expected.

#### xxENSONOxx.xxSTACKSxx.Common.UnitTests

**UnitTests** cover the Common project, including utility classes, extension methods, and other shared code. They test common tasks like logging, configuration, serialization, and other common tasks.

#### xxENSONOxx.xxSTACKSxx.CQRS.UnitTests

**UnitTests** cover the CQRS project, including classes that implement the Command Query Responsibility Segregation (CQRS) pattern. They test command handlers, query handlers, and other components that separate read and write operations in the application.

#### xxENSONOxx.xxSTACKSxx.Domain.UnitTests

**UnitTests** cover the Domain project, including classes that represent the core domain model of the application. They test entities, value objects, and other domain-specific classes that define the application's data model and business rules.

#### xxENSONOxx.xxSTACKSxx.Infrastructure.IntegrationTests

**IntegrationTests** cover the Integration project, including classes that interact with external services, databases, and other resources. They test repositories, gateways, and other classes that handle data access and external communication.

#### xxENSONOxx.xxSTACKSxx.Infrastructure.UnitTests

**UnitTests** cover the Infrastructure project, including classes that handle cross-cutting concerns like logging, caching, and exception handling. They test middleware, filters, and other components that apply to the entire API.

:::note Further Reading

For more information on CQRS, you can refer to the following resource:

[CQRS Documentation](https://martinfowler.com/bliki/CQRS.html) by Martin Fowler

:::


