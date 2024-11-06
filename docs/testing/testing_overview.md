---
id: testing_overview
title: Testing Overview
sidebar_label: Testing Overview
description: Overview of testing strategies and tools in Ensono Stacks
keywords:
  - testing
  - QA
  - Ensono Stacks
  - automation
  - performance
  - accessibility
  - visual regression
  - framework
---

# Testing Overview

Building testing frameworks from scratch requires a lot of boilerplate code. It is also hard to know how to get started without examples.

To ensure the quality and reliability of your software projects, Ensono Stacks includes a range of integrated testing frameworks. These frameworks are designed to be easily bootstrapped and customized to fit your specific project needs.  

## Types of Testing

### Static Code Analysis

Static code analysis helps identify potential issues in your codebase without executing the code. Ensono Stacks integrates with [SonarCloud](https://sonarcloud.io/) to provide static analysis and quality gates.  Further information can be found [here](./testing_static.md).

### Performance Testing

Performance testing ensures that your application can handle the expected load and perform well under stress. Ensono Stacks uses [Gatling](https://gatling.io/) for performance testing.  Further information can be found [here.](./performance_testing_gatling.md)

### UI Testing

#### Playwright

Playwright is the preferred tool within the Ensono Stacks.  It is a powerful tool for cross-browser web automation. It supports multiple browsers and provides capabilities for both functional and visual regression testing.  For more details on how Ensono utilizes Playwright within Ensono Stacks, refer to the following documentation:

- **General Testing**: [Testing with Playwright](./testing_in_nx/playwright_nx.md)
- **Visual Regression Testing**: [Playwright Visual Testing](./testing_in_nx/playwright_visual_testing.md)
- **Accessibility Testing**: [Accessibility Testing with Playwright](./testing_in_nx/playwright_accessibility_testing.md)
- **Applitools Integration**: [Playwright with Applitools Eyes](./testing_in_nx/playwright_visual_testing_applitools.md)

### API Testing

#### Ensono Stacks .NET
The Ensono Stacks .NET includes a functional testing framework using xUnit and BDDfy. This framework allows you to write and run tests to ensure that your API behaves correctly. For more details, refer to the [Functionally Testing the API](../workloads/azure/backend/netcore/testing/functional_testing_netcore.md) documentation.

#### Ensono Stacks JAVA
The Ensono Stacks JAVA includes an API testing framework using Serenity BDD and Rest Assured. This framework allows you to write and run tests to ensure that your API behaves correctly. For more details, refer to the [Running API tests with Serenity](../workloads/azure/backend/java/testing/execute_serenity_api_tests.md) documentation.

#### Contract Testing with Pact

Contract testing ensures that the interactions between services are working as expected. Ensono Stacks uses [Pact](https://docs.pact.io/) for consumer-driven contract testing.  For further information please refer to the [API Contract Testing with Pact](./contract_testing_pact.md) documentation.

### ServiceBus Testing
Ensono Stacks .NET includes functional and unit tests for ServiceBus operations to ensure correct handling of topics, queues, and messages. Key components include:

- ServiceBusDriver.cs: Tests for adding messages, checking topic existence, reading, and clearing messages.
- FakeSBClient.cs: Mocks ServiceBus client behaviors for unit testing.

### CosmosDB Testing
Ensono Stacks .NET includes unit and integration tests for CosmosDB operations to ensure correct data handling and repository functionality. Key components include:

- CosmosDbMenuRepositoryTests.cs: Unit tests for CosmosDbMenuRepository, verifying implementation of IMenuRepository, and testing GetByIdAsync, SaveAsync, and DeleteAsync methods using a fake IDocumentStorage.
- CosmosDbDocumentStorageQueriesIntegrationTests.cs: Integration tests for CosmosDbDocumentStorage, validating communication with CosmosDB, data encoding/decoding, and various search operations, including tests for single/multiple fields, ordering, partition keys, and SQL queries.

## Getting Started

To get started with testing in Ensono Stacks, refer to the detailed documentation for each testing tool and framework. Each guide provides setup instructions, configuration details, and example tests to help you integrate testing into your development workflow.

For more information on setting up your workspace, see the [Getting Started](../getting_started/setup.md) guide.

## Conclusion

Ensono Stacks offers a robust set of tools and frameworks to ensure the quality and reliability of your software projects. By leveraging these tools, you can automate testing, catch issues early, and deliver high-quality software with confidence.
