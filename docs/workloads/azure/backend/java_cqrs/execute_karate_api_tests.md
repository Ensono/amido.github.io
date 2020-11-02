---
id: execute_karate_api_tests
title: Running API tests with Karate
sidebar_label: REST API testing with Karate
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Karate is an open-source general-purpose test-automation framework that can script calls to HTTP end-points and assert that the JSON or XML responses are as expected. Karate also has support for service-virtualization where it can bring up "mock" (or stub) servers which can substitute for web-services that need to participate in an integration-test. Karate's capabilities include being able to run tests in parallel, HTML reports and compatibility with Continuous Integration tools.

## Getting Started

This page explains how to setup the API testing framework built with Java and Karate.

### Prerequisite

Set an environment variable named `BASE_URL` (e.g. if testing locally set it to <http://localhost:9000>) or use the `export BASE_URL=http://localhost:9000` command.

## Running the tests

To run all functional tests please navigate to `./api-tests-karate` path and execute the following command:
 
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
 ./mvnw test -Dtest=RunFunctionalTests
 ```

 </TabItem>
<TabItem value="windows">

 ```bash
 mvnw.cmd test -Dtest=RunFunctionalTests
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
 ./mvnw test -Dtest=RunSmokeTests
 ```

 </TabItem>
<TabItem value="windows">

 ```bash
 mvnw.cmd test -Dtest=RunSmokeTests
 ```

 </TabItem>
 </Tabs>

### Run the specific feature by tag option

Karate allows running tests by a [specific tag](https://intuit.github.io/karate/#tags). To do that please set your tag to the specific feature or test, and then specify it in the Runner Class as follows: 

```bash
    @Karate.Test
    Karate testFullPath() {
        return Karate.run("classpath:PATH_TO_THE_FEATURE/FEATURE_NAME.feature").tags("@TAG");
    }
```

#### Note 

 Any *.feature file tagged as @ignore will be skipped - as the ~ prefix means a "NOT" operation. 
 You can also specify tags on the command-line. The tags() method from test runner class also takes multiple arguments,for e.g. 
 
 `this is an "AND" operation: tags("@customer", "@smoke", "~@ignoredTags")`
 
 `and this is an "OR" operation: tags("@customer, @smoke, ~@ignoredTags")`
 
 
### Test Reports
 
 As a result of the test execution - karate will automatically generate the test report - `target/surefire-reports/karate-summary.html`. 
 