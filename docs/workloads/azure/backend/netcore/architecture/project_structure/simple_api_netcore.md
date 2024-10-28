---
id: project_structure_netcore_simple_api
title: Simple Api Solution Structure
sidebar_label: Simple Api Solution Structure
hide_title: true
hide_table_of_contents: true
description: .NET Simple REST API application - Solution Structure
keywords:
  - .net
  - rest api
  - example
  - template
  - repository
  - structure
---

## Solution Structure

### Simple Web API

```text
Solution xxENSONOxx.xxSTACKSxx.API
├── API
│   ├── xxENSONOxx.xxSTACKSxx.API
│   ├── xxENSONOxx.xxSTACKSxx.API.Models
├── TESTS
│   ├── xxENSONOxx.xxSTACKSxx.API.ComponentTests
│   ├── xxENSONOxx.xxSTACKSxx.API.UnitTests
└── xxENSONOxx.xxSTACKSxx.AppHost
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

#### Company.Project.API.UnitTests

**UnitTests** cover the API project, including controllers, services, and repositories. They mock external dependencies like databases and external services to ensure the API behaves as expected.

#### xxENSONOxx.xxSTACKSxx.AppHost

The AppHost project is responsible for hosting the API and uses Aspire. Aspire is a lightweight, high-performance framework for building and hosting .NET applications. It provides essential features like dependency injection, configuration management, and middleware support.

The AppHost project contains the Program.cs class, which configures the API and starts the host. The AppHost project should be kept as simple as possible to avoid adding unnecessary dependencies or logic.
