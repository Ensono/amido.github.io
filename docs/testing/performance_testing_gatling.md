---
id: performance_testing_gatling
title: Performance Testing - Gatling
sidebar_label: Gatling Performance Testing
description: Performance tests with gatling
keywords:
  - gatling
  - tests
  - testing
  - performance
  - template
  - example
  - run performance tests
  - gatling report
---

The Amido Stacks Performance Tests is a sample project demonstrating performance testing (Load testing) using the [Gatling](https://gatling.io/) tool.

The tests within this repository have been written against the Amido Stacks APIs.

## Getting started

To get started with performance testing, first clone the [Amido Stacks Performance Tests](https://github.com/amido/stacks-performance-tests) repo:

`git@github.com:amido/stacks-performance-tests.git`

## Dependencies

- Java version 11
- Maven
- IDE for Scala development. I.e. IntelliJ IDEA

## Quick run

Once the project has been cloned locally, tests can be run using the following command:

`mvn clean gatling:test -Denv=dev`

By default, this will run a load test against all simulations with 1 user with a ramp up duration of 1 second.

There are optional parameters that can be added to change the load test:

- `-DrampUsers=X` - This allows you to set the number of users that will be simulated in the tests.
- `-DrampDuration=X` - This sets the amount of seconds the test will ramp the test load from 0 users to X users in the test.
- `-DatOnceUsers=X` - Injects a given number of users at once.
- `-DconstantUsersPerSec=X -DconstUsersDuration=X` - Injects users at a constant rate, defined in users per second, during a given duration. Users will be injected at regular intervals.

## Environment settings

There are 4 environment contexts that you can run the performance tests in. These are:

- **local, dev, test, perf**

You must set the system property `-Denv` to point to one of the above environment variables.

For example: `mvn clean gatling:test -Denv=test`

Each environment variable will programmatically point to its respective properties files.

For example:

- **local - local.application.properties**

- **dev - dev.application.properties**

To a local environment of your choice, then set the `env` arg to `local` and amend the url accordingly in the `local.application.properties` file.

## Run all simulations

`mvn clean gatling:test -Denv=dev -DrampUsers=10 -DrampDuration=5 -DatOnceUsers=4`

## Run a single simulation

`mvn clean gatling:test -Denv=dev -Dgatling.simulationClass=com.amido.simulations.menu.GetMenuSimulation -DrampUsers=2 -DrampDuration=2`

## Deleting menu resources

As expected, performance tests can create a lot of resources. It is essential that at the end of the test executions, we delete all the resources that were created as part of the tests.

To delete the resources, run the following command from the root project folder and passing the base uri as an argument.

1. `cd src/test/scala/com/amido/utils`
2. `sh tearDownDeleteMenuItems.sh http://localhost:9000`

## References

[Gatling docs](https://gatling.io/docs/current)
[Performance Testing Framework with Gatling and Maven](https://devqa.io/gatling-maven-performance-test-framework/)
