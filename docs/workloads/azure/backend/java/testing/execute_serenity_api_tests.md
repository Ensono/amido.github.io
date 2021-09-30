---
id: execute_serenity_api_tests
title: Running API tests with Serenity
sidebar_label: REST API testing with Serenity
description: How to test rest api application with serenity bdd and serenity rest assured
keywords:
  - java
  - rest 
  - api
  - serenity
  - serenity bdd
  - rest assured
  - run serenity tests
  - serenity test example
  - test runner
  - serenity test report
  - execute parallel tests
  - framework
  - testing
  - test
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import ResponsivePlayer from "../../../../../../src/pages/Components/ResponsivePlayer/ResponsivePlayer";

[Serenity BDD](https://serenity-bdd.github.io/theserenitybook/latest/index.html) is an open source library that aims to make the idea of living documentation a reality.
It also uses the test results to produce illustrated, narrative reports that document and describe what your application does and how it works.

## Getting Started

This page explains how to setup the API testing framework built with Java and Serenity BDD.

<ResponsivePlayer url="https://vimeo.com/486755397" />

### Prerequisites

Set an environment variable `BASE_URL` (e.g. if testing locally set it to <http://localhost:9000>) or use the `export BASE_URL=http://localhost:9000` command.

## Running the tests

To run all tests please navigate to `./api-tests` path and execute the following command:

 <Tabs
   groupId="operating-systems"
   defaultValue="unix"
   values={[
     { label: 'Unix', value: 'unix', },
     { label: 'Windows', value: 'windows', },
   ]
 }>
  <TabItem value="unix">

  ```bash
  ./mvnw clean verify
  ```

  </TabItem>
  <TabItem value="windows">

  ```bash
  mvnw.cmd clean verify
  ```

  </TabItem>
 </Tabs>

To run the Smoke tests independently, use:

 <Tabs
   groupId="operating-systems"
   defaultValue="unix"
   values={[
     { label: 'Unix', value: 'unix', },
     { label: 'Windows', value: 'windows', },
   ]
 }>
  <TabItem value="unix">

  ```bash
  ./mvnw clean verify -Dcucumber.options="--tags @Smoke"
  ```

  </TabItem>
  <TabItem value="windows">

  ```bash
  mvnw.cmd clean verify -Dcucumber.options="--tags @Smoke"
  ```

  </TabItem>
 </Tabs>

To run the Functional tests independently, use:

 <Tabs
   groupId="operating-systems"
   defaultValue="unix"
   values={[
     { label: 'Unix', value: 'unix', },
     { label: 'Windows', value: 'windows', },
   ]
 }>
  <TabItem value="unix">

  ```bash
  ./mvnw clean verify -Dcucumber.options="--tags @Functional"
  ```

  </TabItem>
  <TabItem value="windows">

  ```bash
  mvnw.cmd clean verify -Dcucumber.options="--tags @Functional"
  ```

  </TabItem>
 </Tabs>

To run tests by other tags and ignore tests that contain @Ignore tags use:

 <Tabs
   groupId="operating-systems"
   defaultValue="unix"
   values={[
     { label: 'Unix', value: 'unix', },
     { label: 'Windows', value: 'windows', },
   ]
 }>
  <TabItem value="unix">

  ```bash
  ./mvnw clean verify -Dcucumber.options="--tags ~@Ignore --tags @YourTag"
  ```

  </TabItem>
  <TabItem value="windows">

  ```bash
  mvnw.cmd clean verify -Dcucumber.options="--tags ~@Ignore --tags @YourTag"
  ```

  </TabItem>
 </Tabs>

<h3> Test Report </h3>

As a result of the test execution - `serenity-maven-plugin` will automatically generate the test report - `./api-tests/target/site/serenity/index.html`.

### Note

To manually aggregate the Serenity report execute the following command under `./api-tests` directory:

 <Tabs
   groupId="operating-systems"
   defaultValue="unix"
   values={[
     { label: 'Unix', value: 'unix', },
     { label: 'Windows', value: 'windows', },
   ]
 }>
  <TabItem value="unix">

  ```bash
   ./mvnw serenity:aggregate
  ```

  </TabItem>
  <TabItem value="windows">

  ```bash
  mvnw.cmd serenity:aggregate
  ```

  </TabItem>
 </Tabs>
 