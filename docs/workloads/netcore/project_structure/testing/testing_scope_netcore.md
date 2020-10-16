---
id: testing_scope_netcore
title: Testing Scope
hide_title: true
hide_table_of_contents: false
---

## Testing Scope

This document outlines the scope of the automated tests that are part of the .Net Core stack. This is to ensure that testing achieves the test coverage required for this project and future projects using the stack.

![Testing Scope](/img/testing_scope.png)

### Unit Tests

Unit testing is an automated test method where software tests are focused on testing small units of a system individually without any external dependencies.

The purpose of unit tests is identify and ensure the unit under test adhere to requirements either functional or non-functional, while ensuring future changes to the system does not break the expected behavior unintentionally.

### Coverage

Unit test coverage is a very controversial topic, people have different interpretations when questioned about the the coverage of unit tests, unit tests became a generic term to define automated tests.

The main challenge is to define how big is a unit under test should be, some define it as a class level test, some at function level, other as a module level test, technically there is no right answer to define the size, but there are a few key points that are important to adhere:

- Unit tests should be small:
    - Writing big unit tests that test many operations provided by a class are more likely to become brittle tests, very common on end-to-end tests that expect all feature dependencies to work properly, if one dependency changes and fail, the entire test breaks.

- Mock external dependencies:
    - External dependencies or internal behavior that depends on external elements(i.e data) should be mocked or faked to have consistent test results.
    - Avoid testing a chain of calls(i.e: ClassA.MethodA calls ClassB.MethodB that calls ClassC.MethodC), even though ClassA depends on ClassB, the dependency on ClassB should be mocked to avoid changes on ClassB affect ClassA logic
    - When a unit under test depends on other units to be tested, you should either write component tests or integration tests. See respective topics below.

- Focus on the value of test instead of coverage
    - Writing tests is easy and simple, maintaining it is expensive and time consuming, writing tests that does not bring value to the project is just a waste of time.
    - Is very common to see people focusing on code coverage to have a high code coverage percentage, but writing numerous useless tests just to testing code path that does not bring value if the behaviors is being tested properly.
    - Code path changes very often and maintaining a high coverage is harder than maintaining value added tests.

- Running a test must be fast
    - Unit tests should be fast to run, big projects is very likely to have thousands of them, having each test running for 1 second is very time consuming when your have too many to run.
    - Slow tests takes much time from developers who eventually will stop running them, making them unreliable and brittle

- Tests should support the developer, not the other way around
    - Don't write tests just to assert a algorithm condition, test should help the developer assert it's decisions before committing a large amount of time to prove they will work, writing test before code brings the value of doubt and enlighten key points that the developer hasn't considered in advance.
    - TDD development process support the idea of writing tests before code to ensure the requirements are meet when the code is implemented, writing test after the code forces the test to adapt to the code where tests should adapt to the requirement change instead.

### Where

Every project in the solution should be a candidate to have unit tests, identify the test value first

### Examples

Domain tests:

    - operations changes the domain to state expected
    - ensure domain operations raise the right events and the events contains the right information.
    - domain state returns different results
    - Supporting elements behave as expected:

Parser accept an input and returns the right output
    - Encoding library provides the right output
    - data mapper map the fields accordingly
    - data conversion
