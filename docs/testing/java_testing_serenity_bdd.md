---
id: testing_java_serenity_bdd
title: UI Browser Automation with Serenity BDD and Java
sidebar_label: Java - Serenity BDD
description: UI tests with Serenity BDD and Java
keywords:
  - serenity
  - tests
  - testing
  - ui
  - java
  - template
  - example
  - run the tests
  - run tests by tag
  - serenity report
---

import ResponsivePlayer from "../../src/pages/Components/ResponsivePlayer/ResponsivePlayer";

In the Java world there are few tools that provide an easier experience with adding behaviour driven development to your automated testing better than [Serenity BDD](http://serenity-bdd.info/#/).  Not only is it very easy to use but it also adds a rich layer of reporting to your automated testing framework which is crucial for project management and keeping your stakeholders informed.


## Getting started

Serenity BDD provides excellent integrations with Selenium, which allows you to avoid a lot of the boilerplate and infrastructure code you normally need to deal with in automated web tests.
In particular, Serenity manages the driver lifecycle for you (so you don’t need to create your own driver instances or close them at the end of the tests).

Serenity can also be configured to automatically take screenshots throughout the tests, creating rich documentation of how each test played out.

When you write your tests in a fluent, readable manner, these screenshots become part of the "living documentation" of your application.

<ResponsivePlayer url="https://vimeo.com/486755397" />

### Configurations

The [Serenity conf](https://github.com/amido/stacks-webapp-template/blob/master/packages/scaffolding-cli/templates/test/xxAMIDOxx.xxSTACKSxx.E2E.Serenity/src/test/resources/serenity.conf) file need to be configured.

The following properties for different environments are required in the `src/test/resources/serenity.conf` configuration file.

 ```text
webdriver.base.url
api.base.url
```

### Browser Download Location

If you wish to use a local instance of Serenity Webdriver, make sure to download the correct WebDriver file for the desired browser.

* [Opera](https://github.com/operasoftware/operachromiumdriver/releases)
* [Firefox](https://github.com/mozilla/geckodriver/releases)
* [Chrome](http://chromedriver.chromium.org/downloads)
* [Internet Explorer](https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver)
* [Microsoft Edge](https://blogs.windows.com/msedgedev/2015/07/23/bringing-automated-testing-to-microsoft-edge-through-webdriver/)


### Configure the serenity.properties

`serenity.take.screenshots` - Set this property to have more finer control on how screenshots are taken.

This property can take the following values:

* `FOR_EACH_ACTION`: Saves a screenshot at every web element action (like click(), typeAndEnter(), type(), typeAndTab() etc.).

* `BEFORE_AND_AFTER_EACH_STEP`: Saves a screenshot before and after every step.
* `AFTER_EACH_STEP`: Saves a screenshot after every step
* `FOR_FAILURES`: Saves screenshots only for failing steps.
* `DISABLED`: Does not save screenshots for any steps.

The default value is `serenity.take.screenshots=BEFORE_AND_AFTER_EACH_STEP`

`webdriver.driver` - The browser you want to run the tests in: firefox, chrome, phantomjs or iexplorer.

`webdriver.chrome.driver` - Path to the Chrome driver, if it is not on the system path.

More properties here: <https://serenity-bdd.github.io/theserenitybook/latest/serenity-system-properties.html>

### Run Tests Locally

To run the web tests with a given driver, please provide the path to the webdriver file using the system property: `webdriver.driver_name.driver`. For example, your serenity.properties file should contain the following:

```text
webdriver.driver=chrome
webdriver.chrome.driver=/path/to/my/chromedriver
```

Open the project folder in the terminal and execute tests by running any one of the following commands:

Run all tests on the default environment:

```bash
mvn clean verify
```

Run all tests on the specific environment e.g. staging:

```bash
mmvn clean verify -Denvironment=staging
```

Run Smoke tests only:

```bash
mvn clean verify -Dcucumber.options="--tags @Smoke"
```

Run Functional tests only:

```bash
mvn clean verify -Dcucumber.options="--tags @Functional"
```

Run tests by other tags and ignore tests that contain @Ignore tags:

```bash
mvn clean verify verify -Dcucumber.options="--tags ~@Ignore --tags @YourTag"
```

### Test Report

As a result of the test execution - serenity-maven-plugin will automatically generate the test report with name - `index.html`.

```text
Test Report Location is: ..target/site/serenity/index.html
```

### Manual Aggregation of the Test Report

Open the project folder in the terminal and execute:

```bash
mvn serenity:aggregate
```

### Running tests in parallel threads Using forks

Using multiple forks can be a good alternative to running all tests in a single JVM, and can reduce the risk of certain types of errors.

:::info
Choosing the right forking strategy and parallel execution settings can have a substantial impact on the memory requirements and the execution time of the build system.
:::

Using Forked Test Execution, new JVM processes are spun up to execute the tests, up to a configurable maximum number of processes.

This creates better separation between tests, which can improve their reliability.

Maven is set to spawn new processes by the forkCount configuration element, as shown here below.

This can either be a number (the maximum number of forks) or a multiplier (the number of forks per CPU). The current configuration uses the value of "2", which means 2 forked processes per CPU:

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

:::warning
The more threads are used, the higher the chances of sporadic, hard-to-reproduce test failures due to timeouts and other related issues. The added performance gain of each thread also tends to drop off for higher numbers of threads.
:::
