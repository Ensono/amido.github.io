---
id: testing_java
title: Testing the application
sidebar_label: Testing the API
hide_title: false
hide_table_of_contents: false
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Testing the API

### Running the tests

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

### Reports

#### Test reports

A test report may be created from the `test` package in Java using the Surefire Plugin.
The report file (as either XML or HTML) generated for each of the test classes can be found under `<PROJECT-NAME>/target/surefire-reports`.

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
  ./mvnw surefire:test"
  ```

  </TabItem>
  <TabItem value="windows">

  ```bash
  mvnw.cmd surefire:test"
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
  ./mvnw clean verify"
  ```

  </TabItem>
  <TabItem value="windows">

  ```bash
  mvnw.cmd clean verify"
  ```

  </TabItem>
 </Tabs>

The report can be viewed under `<PROJECT-NAME>/api-tests/target/site/serenity/index.html`.

#### Code coverage

Run the following command:

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
  ./mvnw jacoco:report"
  ```

  </TabItem>
  <TabItem value="windows">

  ```bash
  mvnw.cmd jacoco:report"
  ```

  </TabItem>
 </Tabs>

The generated report can be viewed under `<PROJECT-NAME>/target/site/jacoco/index.html`.

#### Dependency checker report

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
  ./mvnw clean install -Powasp-dependency-check"
  ```

  </TabItem>
  <TabItem value="windows">

  ```bash
  mvnw.cmd clean install -Powasp-dependency-check"
  ```

  </TabItem>
 </Tabs>

The generated report can be viewed under `<PROJECT-NAME>/target/dependency-check.html`.

#### Mutation testing

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
  ./mvnw org.pitest:pitest-maven:mutationCoverage"
  ```

  </TabItem>
  <TabItem value="windows">

  ```bash
  mvnw.cmd org.pitest:pitest-maven:mutationCoverage"
  ```

  </TabItem>
 </Tabs>

The generated report can be viewed under – `<PROJECT-NAME>/target/pit-reports/YYYYMMDDHHMI`

### Running API tests

Set an environment variable `BASE_URL` (e.g. if testing locally set it to <http://localhost:9000>)

From project path `<>PROJECT-NAME>/api-tests` to run all tests, use

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
  ./mvnw clean verify"
  ```

  </TabItem>
  <TabItem value="windows">

  ```bash
  mvnw.cmd clean verify"
  ```

  </TabItem>
 </Tabs>

To run the Smoke tests independently, use

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

and to run the Functional tests independently, use

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
