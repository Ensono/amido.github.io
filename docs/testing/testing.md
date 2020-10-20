---
id: testing
title: Testing and Quality
sidebar_label: Testing and quality 
hide_table_of_contents: false
---


## Overview

Tests where possible will be written and delivered as part of the same branch and feature. Where this is not possible, in the event of using a standalone repo or the alternative, we expect the same development and code reviews standards to be upheld, and the branch naming to be aligned with the development branch name as possible.

### Pre-commit tests

To be run on the local active develop branch, before commit. Before committing changes, we suggest enforcing and running pre-commit tests with a pre-commit hook.

### Pre-deployment tests

To be run on the active development branch.
After which, we have two different processes, one for pre-deployment tests (unit, snapshot, integration), and another for post-deployment (functional tests).  Pre-deployment tests can run on the fly whilst coding. This is enabled by using a ‘watch-mode’ which will check for code changes, compile/trans-compile, and run the tests against the web app.

### Post-deployment tests

To be run on master once the pull request (PR) has been approved and passed all pre-deployment tests.

## Quality gates

The following demonstrates the series of quality gates that the web app must pass through in order to successfully be deployed to a user facing environment (production).

![alt text](https://www.lucidchart.com/publicSegments/view/2094f5d4-eaca-417c-a51e-36bf79853373/image.png "Quality Gates")

### Jest: Unit, component and snapshot testing

We are using [Jest](https://jestjs.io/) for running all unit, component,
integration and snapshot tests. Jest supports TypeScript via Babel. Due to the fact that
TypeScript support in Babel is transpilation, to ensure that Jest will
type-check the tests as they are run we use
[ts-jest](https://github.com/kulshekhar/ts-jest).

To help that encourage good testing practices for React DOM testing, we are
leveraging a helper library [react-testing-library](https://jestjs.io/).

### Java Application: Unit, functional and smoke testing

[Mockito](https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html) is been used to run Unit tests
which enables mock creation, verification and stubbing.

Unit-tests are mainly performed on controllers, services and DTO classes.Unit test code coverage by packages are done using
JaCoCo plugin and Unit test reports are published using Surefire plugin.

Cucumber framework is used in functional and smoke tests.Below steps needs to be followed to run the tests locally.

```text
Ensure that the application is running on local: ./mvnw spring-boot:run

Open the 'stacks-java/api-tests' path in the terminal
Execute tests by run one of the following commands:

a. Run all tests: mvn clean verify
b. Run Smoke tests only: mvn clean verify -Dcucumber.options="--tags @Smoke"
c. Run Functional tests only: mvn clean verify -Dcucumber.options="--tags @Functional"
d. Run tests by other tags and ignore tests that contain @Ignore tags: mvn clean verify verify -Dcucumber.options="--tags ~@Ignore --tags @YourTag"

Check the output report
Please use this path to find the generated test report:

stacks-java/api-tests/target/site/serenity/index.html

```

### Scripts

`npm run test`: To run all unit tests. This will also run any snapshot tests.
Snapshots are to be checked in and are found in
`[**snapshots**](__tests__/__snapshots__)`.

