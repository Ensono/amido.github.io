---
id: testing_scope_netcore
title: Testing Scope
hide_title: true
hide_table_of_contents: false
description: Unit, Component, Integration, Contract and Functional testing for the .NET Core REST API application
keywords:
  - .net core
  - rest api
  - tests 
  - repository
  - stacks
  - unit tests
  - testing scope
  - component tests
  - integration tests
  - functional tests
---

## Testing Scope

This document outlines the scope of the automated tests that are part of the .NET Core stack. This is to ensure that testing achieves the test coverage required for this project and future projects using the stack.

![Testing Scope](/img/testing_scope.png)

### Unit Tests

Unit testing is an automated test method where software tests are focused on testing small units of a system individually without any external dependencies.

The purpose of unit tests is identify and ensure the unit under test adhere to requirements either functional or non-functional, while ensuring future changes to the system does not break the expected behaviour unintentionally.

### Component Tests

Component testing is a variation of Integration Tests where only internal component integration is covered, any external dependencies must be mocked.

Component Integration Tests focus only in the behaviour of integrated units within the component, component tests are not focused on individual behaviours contained within each component, but more the behaviour visible outside it.

When want to identify a chain of events triggered by an operation, if a successful command makes call to the right dependencies(mocked), the input data flows through the layers and are forwarded to the dependencies correctly.


### Integration Tests

Integration tests is a class of tests where individual units or components are combined with it's dependencies to be tested as a group. It's purpose is identify failures or ensure it's correctness when the units are integrated to each other.

Integration tests can either test internal dependencies, when modules or components of an application is tested together or external dependencies.

Integration tests are needed to assist on testing areas where unit tests and component tests can't cover, it's main purpose is find integration issues and not the individual functionality of each unit or component.

Integration tests should support, not replace, unit and component tests, writing Integration is more complex than wittering other tests, because it might break more often when any of the units changes, for that reason, Component and Unit tests should be preferred.

Component IntegrationTests for internal dependency tests are currently handled by Component Tests, it's focus is only test the behaviour of internal dependencies and any external dependency is mocked, for that reason, we don't have integration tests project for internal components

Integration tests are not meant to test configuration issues, configuration should be easily tested by smoke tests.

Integration tests intended purpose is to test integration behaviour between two or more components, check if the data format provided and expected are valid, also encoding and parsing of this data, required parameters are provided correctly.

### Functional Tests

Functional tests ensure that individual elements of the system under test are functional.

