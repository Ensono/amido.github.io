---
id: functional_testing_netcore
title: Functionally testing the application
sidebar_label: Functionally Testing the API
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


## Automated Functional Tests Overview

This is a sample project that shows how to do **functional testing** using **BDDfy** and **xUnit**. Functional testing checks if an API behaves correctly by running different tests.

### Tools Used in the Project

- **xUnit**: The testing framework used to write and run the tests.
- **BDDfy**: A tool to write tests in a behavior-driven development (BDD) style, making the tests easy to read.
- **HttpClient**: Used to send API requests.
- **Shouldly**: A tool to check if the result of the tests matches what's expected.

### How to Run the Tests

1. Open a terminal or command prompt.
2. Navigate to the `API.FunctionalTests` folder.
3. Run this command:

    ```bash
    dotnet test
    ```

This will run all the tests in the project.

## Test Folder Structure

Here is what the test folder looks like:

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

### What Each Folder Does

- **Builders**: Contains helper classes to create the data you need for API requests.
- **Configuration**: Manages settings needed for the tests.
- **Models**: Defines the data structures used in API requests and responses.
- **Tests**: Contains all the test logic.

#### Builders

This folder helps create data for API requests.

- `HttpRequestBuilder.cs`: Helps create HTTP requests (the actual request you send to the API).
- `HttpRequestFactory.cs`: Coordinates creating the HTTP requests for different API methods (like GET, POST, etc.).

All builder classes should inherit from the interface `IBuilder.cs`.

#### Configuration

This folder handles the settings for the tests.

- `ConfigModel.cs`: Represents the settings (like URLs) in the `appsettings.json` file.
- `ConfigAccessor.cs`: Reads the settings from `appsettings.json` and makes them usable in the tests. If the machine running the tests has specific environment variables (like a different URL), it will replace the settings in the file.

For example, if the appsettings.json contains the base API URL `"BaseUrl":"http://dev.azure.amidostacks.com/api/menu/"`, but the environment variable on your computer uses a different URL, the environment variable will be used instead.

#### Models

These represent the data used in API requests and responses. For example, the request body or response body. The Builders use these models to create the data for the tests.

#### Tests Folder

This folder contains all the test code.

#### Fixtures

The Fixtures folder contains setup and cleanup code for the tests.

- `AuthFixture.cs`: Contains methods to get authentication tokens that are needed for some test cases.

Fixtures in xUnit allow setting up a shared context for tests. For more info on xUnit fixtures, see the [xUnit documentation](https://xunit.net/docs/shared-context).

#### Stories

The Stories folder contains the actual test cases, written using BDDfy.

- Each file in this folder represents a test story.
- Inside each story, there are multiple test cases that test specific API features.

Test cases are written using xUnit's Facts. Each test is described using BDDfy, which helps organize the test steps in a readable way.

Some tests are marked as smoke tests using `[Trait("Category", "SmokeTest")]`. Smoke tests are quick checks to make sure everything works.

#### Steps

The Steps folder contains the logic behind each test.

- These are the steps that are executed within each test case. For example, sending a request to the API, checking the response, etc.
- The test cases in the Stories folder call these steps.
