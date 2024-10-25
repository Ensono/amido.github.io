## Solution Structure

### Web API with CQRS

```text
Solution xxENSONOxx.xxSTACKSss.API
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
│  └── xxENSONOxx.xxSTACKSxx.Shared.Messaging.Azure.ServiceBus
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

The API project contains controllers and OpenAPI documentation. It exposes the application via REST/HTTP endpoints and validates requests using DataAnnotations or FluentValidation (not included). The API is self-hosted, managed by the Program.cs class.

#### xxENSONOxx.xxSTACKSxx.Models

The models have been separated from the API project for reusability. They use DataAnnotations for validation, avoiding dependencies on third-party libraries like FluentValidation unless necessary.

This separation helps prevent code duplication in API.Models and TestModels, making it easier to package models as NuGet packages for QA Functional Tests.

Additionally, it simplifies creating a Client SDK to communicate with the API without rewriting models whenever the API changes.

#### Company.Project.API.ComponentTests

**ComponentTests** cover the entire service from the API endpoints to the last service layer before external dependencies. They mock resources like repositories and gateways to simulate various scenarios.

APIs should also be covered by Contract Tests. Component Tests might seem redundant but can skip API coverage and focus on the application layer to the service boundary. This approach requires an extra test to ensure API and Application integration.

Component tests are similar to functional tests but with a key difference. Functional Tests check if an input produces the expected output without caring about the process. Component Tests ensure the input returns the expected output and that certain conditions are met, such as event raising, external service calls, and correct data formatting.
