---
id: execute_karate_api_tests
title: Running API tests with Karate
sidebar_label: REST API testing with Karate
description: How to test rest api application with karate
keywords:
  - java
  - rest 
  - api
  - karate
  - run karate tests
  - karate test example
  - test runner
  - karate test report
  - execute parallel tests
  - framework
  - testing
  - test
---

import HideNavigation  from "../../../../../../src/pages/HideNavigation";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import ResponsivePlayer from "../../../../../../src/pages/Components/ResponsivePlayer/ResponsivePlayer";

Karate is an open-source general-purpose test-automation framework that can script calls to HTTP end-points and assert that the JSON or XML responses are as expected. Karate also has support for service-virtualization where it can bring up "mock" (or stub) servers which can substitute for web-services that need to participate in an integration-test. Karate's capabilities include being able to run tests in parallel, HTML reports and compatibility with Continuous Integration tools.

## Getting Started

This page explains how to setup the API testing framework built with Java and Karate.

<ResponsivePlayer url="https://vimeo.com/486755267" />

### Prerequisites

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

 Run Functional tests on the specific environment, use:

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
 ./mvnw test -Dtest=RunFunctionalTests -Dkarate.env=local
 ```

 </TabItem>
<TabItem value="windows">

 ```bash
 mvnw.cmd test -Dtest=RunFunctionalTests -Dkarate.env=local
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

### Switching the Environment

There is only one thing you need to do to switch the environment - which is to set a Java system property.
By default, the value of karate.env when you access it within karate-config.js - is base_url value taken from the environment variables

## Running tests in parallel

Choosing the right forking strategy and parallel execution settings can have a substantial impact on the memory requirements and the execution time of the build system.
The tests can be easily grouped in features and tags to run and compose test-suites in a very flexible manner.

### @parallel=false

In rare cases you may want to suppress the default of Scenario-s executing in parallel and the special tag @parallel=false can be used. If you place it above the Feature keyword, it will apply to all Scenario-s. And if you just want one or two Scenario-s to NOT run in parallel, you can place this tag above only those Scenario-s.

### Parallel Stats

For convenience, some stats are logged to the console when execution completes, which should look something like this:

```bash
======================================================
elapsed:   2.35 | threads:    5 | thread time: 4.98
features:    54 | ignored:   25 | efficiency: 0.42
scenarios:  145 | passed:   145 | failed: 0
======================================================
```

#### Note

 Any *.feature file tagged as @ignore will be skipped - as the ~ prefix means a "NOT" operation.
 You can also specify tags on the command-line. The tags() method from test runner class also takes multiple arguments,for e.g.

 `this is an "AND" operation: tags("@customer", "@smoke", "~@ignoredTags")`

 `and this is an "OR" operation: tags("@customer, @smoke, ~@ignoredTags")`

 The more threads are used, the higher the chances of sporadic, hard-to-reproduce test failures due to timeouts, test data clean up, and other related issues.
 The added performance gain of each thread also tends to drop off for higher numbers of threads.

 ```java
 class Runner {
     @Test
     void run() {
         Results results = Runner.path("classpath:PATH_TO_FUTURE_OR_PACKAGE").tags("~@ignoredTags", "@YourTag").parallel(1);
         assertEquals(0, results.getFailCount(), results.getErrorMessages());
     }
 }
 ```

### Test Reports

 As a result of the test execution - karate will automatically generate the test report - `target/surefire-reports/karate-summary.html`.
 
<HideNavigation next />
