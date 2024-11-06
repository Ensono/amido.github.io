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
This summary outlines key areas of testing included in the Ensono Stacks.

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

#### Ensono Stacks Java
The Ensono Stacks Java includes an API testing framework using Serenity BDD and Rest Assured. This framework allows you to write and run tests to ensure that your API behaves correctly. For more details, refer to the [Running API tests with Serenity](../workloads/azure/backend/java/testing/execute_serenity_api_tests.md) documentation.

#### Contract Testing with Pact

Contract testing ensures that the interactions between services are working as expected. Ensono Stacks uses [Pact](https://docs.pact.io/) for consumer-driven contract testing.  For further information please refer to the [API Contract Testing with Pact](./contract_testing_pact.md) documentation.

### ServiceBus Testing
Ensono Stacks .NET includes comprehensive functional and unit tests for ServiceBus operations to ensure the correct handling of topics, queues, and messages.  

The GitHub repository folder containing the ServiceBus unit tests can be found [here](https://github.com/Ensono/stacks-dotnet/tree/master/src/shared/xxENSONOxx.xxSTACKSxx.Shared.Messaging.Azure.ServiceBus.Tests).  These tests ensure that the various components of the ServiceBus, such as validators, serializers, routers, listeners, and custom processors, function correctly and handle different scenarios as expected.

Functional tests can be found in the GitHub repository folder [here](https://github.com/Ensono/stacks-dotnet/tree/master/src/func-cosmosdb-worker/src/tests/Functional/xxENSONOxx.xxSTACKSxx.Worker.FunctionalTests/Tests).  Key areas of coverage include: 
 - Adding messages to the queue
 - Checking the existence of topics
 - Reading messages from the queue
 - Clearing messages from the queue

### CosmosDB Testing
Ensono Stacks .NET includes unit and integration tests for CosmosDB operations to ensure correct data handling and repository functionality. These include:

 - Unit tests for verifying the repository implementation and its functionality using a mock repository.  The unit test example are in the CosmosDbMenuRepositoryTests.cs in this repository [folder](https://github.com/Ensono/stacks-dotnet/blob/master/src/cqrs/src/api/xxENSONOxx.xxSTACKSxx.Infrastructure.UnitTests/). 

 - Integration tests for CosmosDB Document Storage, validating communication with CosmosDB, data encoding/decoding, and various search operations, including tests for single/multiple fields, ordering, partition keys, and SQL queries.  The integration tests are in the repository folder [here](https://github.com/Ensono/stacks-dotnet/tree/master/src/cqrs/src/api/xxENSONOxx.xxSTACKSxx.Infrastructure.IntegrationTests/CosmosDb/Integration). 


## Getting Started

To get started with testing in Ensono Stacks, refer to the detailed documentation for each testing tool and framework. Each guide provides setup instructions, configuration details, and example tests to help you integrate testing into your development workflow.

For more information on setting up your workspace, see the [Getting Started](../getting_started/setup.md) guide.

## Conclusion

Ensono Stacks offers a robust set of tools and frameworks to ensure the quality and reliability of your software projects. By leveraging these tools, you can automate testing, catch issues early, and deliver high-quality software with confidence.
