---
id: testing_java
title: Pre-deployment tests and reports
sidebar_label: Pre-deployment tests and reports
description: Pre-deployment tests and reports for Java Rest API project
keywords:
  - java
  - rest 
  - api
  - project
  - testing
  - test
  - unit
  - component
  - integration
  - report
  - mutation
  - parallel
  - owasp
  - code coverage
  - configuration
  - access token
  - dependency checker
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Running the tests

Tests within the code are grouped using Tag annotations. There are three groups: 'Unit', 'Component' and 'Integration'. To just run the unit tests, for example, type:

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
  ./mvnw test -Dgroups="Unit"
  ```

  </TabItem>
  <TabItem value="windows">

  ```bash
  mvnw.cmd test -Dgroups="Unit"
  ```

  </TabItem>
 </Tabs>

Similarly, for the Component tests, you should use:

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
  ./mvnw test -Dgroups="Component"
  ```

  </TabItem>
  <TabItem value="windows">

  ```bash
  mvnw.cmd test -Dgroups="Component"
  ```

  </TabItem>
 </Tabs>

and the equivalent for running the Integration tests.

## Reports

### Test reports

A test report may be created from the `test` package in Java using the Surefire Plugin.
The report file (as either XML or HTML) generated for each of the test classes can be found under `./target/surefire-reports`.

Run the following command to create the report:

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
  ./mvnw surefire:test
  ```

  </TabItem>
  <TabItem value="windows">

  ```bash
  mvnw.cmd surefire:test
  ```

  </TabItem>
 </Tabs>

To generate the Serenity report:

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

The report can be viewed under `./api-tests/target/site/serenity/index.html`.

### Code coverage report

The JaCoCo Code Coverage tool allows identifying how much of the code is run during the test suite execution. It is by no means an identifier of code and test quality in its own right but can be helpful for checking if logic paths have test coverage, especially for code updates.
This library is run in the API pipeline, with output reports being made available to the CI tool being used.

To generate the JaCoCo report, please execute the following command:

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
  ./mvnw jacoco:report
  ```

  </TabItem>
  <TabItem value="windows">

  ```bash
  mvnw.cmd jacoco:report
  ```

  </TabItem>
 </Tabs>

The generated report can be viewed under `./target/site/jacoco/index.html`.

### Dependency checker report

The [OWASP Dependency-Check](https://owasp.org/www-project-dependency-check/) is a Software Composition Analysis tool that attempts to detect publicly disclosed vulnerabilities contained within a project’s dependencies.
Dependency-check has a command line interface, a Maven plugin, an Ant task, and a Jenkins plugin. The core engine contains a series of analyzers that inspect the project dependencies, collect pieces of information about the dependencies (referred to as evidence within the tool).
To generate the dependency checker report please execute:

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
  ./mvnw clean install -Powasp-dependency-check
  ```

  </TabItem>
  <TabItem value="windows">

  ```bash
  mvnw.cmd clean install -Powasp-dependency-check
  ```

  </TabItem>
 </Tabs>

The generated report can be viewed under - `./target/dependency-check.html`.

### Optional: Mutation testing

PIT mutation testing is used to generate mutation tests (see <https://pitest.org/> for details).
The mutation coverage goal analyses all classes in the codebase that match the target tests and target class filters.
To run it:

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
  ./mvnw org.pitest:pitest-maven:mutationCoverage
  ```

  </TabItem>
  <TabItem value="windows">

  ```bash
  mvnw.cmd org.pitest:pitest-maven:mutationCoverage
  ```

  </TabItem>
 </Tabs>

The generated report can be viewed under – `./target/pit-reports/YYYYMMDDHHMI`.

### Running tests in parallel threads - Using forks

Choosing the right forking strategy and parallel execution settings can have a substantial impact on the memory requirements, and the execution time of the build system.
Using multiple forks can be a good alternative to running all tests in a single JVM, and can reduce the risk of certain types of errors.

Using Forked Test Execution, new JVM processes are spun up to execute the tests, up to a configurable maximum number of processes. This creates better separation between tests, which can improve their reliability.

Maven is set to spawn new processes by the `forkCount` configuration element, as shown here below. This can either be a number (the maximum number of forks) or a multiplier (the number of forks per CPU).
The current configuration uses the value of "2", which means 2 forked processes per CPU:

```xml
<plugin>
    <artifactId>maven-failsafe-plugin</artifactId>
    <version>2.22.2</version>
    <configuration>
        <parallel>classes</parallel>
        <threadCount>2</threadCount>
        <forkCount>2</forkCount>
    </configuration>
</plugin>
```

### Access token configuration

In order to make the authenticated requests (pass Bearer Token into headers) for the functional tests, please change the value of ```generate.auth0.token``` from ``serenity.conf`` file config to 'true'.
Also, to get the right access token please provide values for following variables in the ``environment variables``:

```properties
- CLIENT_ID
- CLIENT_SECRET
- AUDIENCE
- GRANT_TYPE
- OAUTH_TOKEN_URL
```

In case the Authorization Token is not required the ```generate.auth0.token``` value is false

:::note
The more threads are used, the higher the chances of sporadic, hard-to-reproduce test failures due to timeouts and other related issues. The added performance gain of each thread also tends to drop off for higher numbers of threads.
:::
