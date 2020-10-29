---
id: testing_java_cqrs
title: Pre-deployment tests and reports
sidebar_label: Pre-deployment tests and Reports
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

### Test report

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

The The [OWASP Dependency-Check](https://owasp.org/www-project-dependency-check/) is a Software Composition Analysis tool that attempts to detect publicly disclosed vulnerabilities contained within a project’s dependencies.
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

### Optional: Mutation testing report

<br />
Mutation testing is the process of iterating through each line of implemented code, mutating that line, then running unit tests and checking if the mutation broke the expectations.
<br />

PIT mutation testing is used to generate tests (see <https://pitest.org/> for details).
The mutation coverage goal analyses all classes in the codebase that match the target tests and target class filters.
To run it please execute the following command:

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
