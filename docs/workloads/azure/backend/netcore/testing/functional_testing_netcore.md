---
id: functional_testing_netcore
title: Testing the application
sidebar_label: Testing the API
hide_title: false
hide_table_of_contents: false
description: Dotnet API tests examples using bddfy
keywords:
  - dotnet api tests
  - rest 
  - api
  - bddfy
  - xunit
  - shouldly
  - csharp
  - dotnet
  - testing
---


The Automated Functional Tests is a sample project demonstrating functional testing created using BDDfy and XUnit.

The project contains the framework for testing API's and a number of test cases to demonstrate usage of the framework.


## Dependencies

- xUnit (Test adapter)
- BDDfy (BDD tool)
- HttpClient (For API requests)
- Shouldly (Assertions)

## Running Tests

Navigate to `API.FunctionalTests` folder and run the following command:

```bash
dotnet test
```

## Test Folder structure

```text
├── Builders
|   └── Http
├── Configuration
├── Models
└── Tests
    ├── Fixtures
    ├── Stories
    └── Steps
```

## Builders

This folder contains builder classes that are used to create POCO's (Plain Old CLR Object) for objects used in API requests. Ideally there should be a model for every request and response that is used within the tests. The aim of these classes is to make it as easy as possible for developers to generate the data required by API's.

All Builder classes should inherit from `IBuilder.cs`


### Http

This folder contains a builder and factory for managing HttpClients within the tests.

- `HttpRequestBuilder.cs` manages creating the HttpRequest and also the HttpClient. This is only used within `HttpRequestFactory.cs`.
- `HttpRequestFactory.cs` orchestrates the creation of the HttpRequest for each REST method.


## Configuration

This contains classes used to manage the configuration for the tests.

- `ConfigModel.cs` is a POCO representation of the json in `appsettings.json`
- `ConfigAccessor.cs` contains the logic required to obtain the JSON from `appsettings.json` and bind it to the `ConfigModel.cs` object. This allows the configuration to be used as a simple object.
The ConfigAccessor will automatically replace any configuration setting values with the values set in the Environment Variables on the machine running the tests.

Example: In `appsettings.json` we are using the configuration setting (key-value pair) `"BaseUrl":"http://dev.azure.amidostacks.com/api/menu/"`. If there is an Environment Variable set on the current machine/build agent using `BaseUrl` key, the value in `appsettings.json` will be replaced.


## Models

These are POCO representations of entities that are used in API requests (E.g. Request body, response body). The builder classes are used to create instances of these models.


## Tests

This is the parent folder for all test code


## Fixtures

The "Fixtures" folder contains xUnit class fixtures. These class fixtures are used to create test context for the tests. The fixture is where you can put fixture setup (via constructor) and teardown (Via `Dispose()`)

See [xUnit documentation](https://xunit.net/docs/shared-context) for information on different fixtures and how to use them.

`AuthFixture.cs` contains methods for getting authentication tokens required in the test cases.


## Stories

The Stories folder contains all the test cases (I.e. the BDDfy stories). Each class should represent a new test story, and within each class/story, there will be a number of test cases which test a specific feature.

Test cases within a story are defined using xUnit `Facts`. BDDfy is used to describe and orchestrate the tests.

The solution tags tests as smoke tests using xUnit `Traits`. I.e. `[Trait("Category", "SmokeTest")]`


## Steps

This is where all the step definitions are created. The definitions contain the logic behind the tests and these steps are called from within the test cases found within the `TestCases` folder.
