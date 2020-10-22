---
id: testing_java_serenity_bdd
title: UI Browser Automation with Serenity BDD and Java
sidebar_label: Java - Serenity BDD
---

## Getting started

Serenity BDD provides excellent integration with Selenium, which allows you to avoid a lot of the boilerplate and infrastructure code you normally need to deal with in automated web tests.
In particular, Serenity manages the driver lifecycle for you (so you don’t need to create your own driver instances, or close them at the end of the tests).

Serenity can also be configured to automatically take screenshots throughout the tests, creating rich documentation of how each test played out.

When you write your tests in a fluent, readable manner, these screenshots become part of the "living documentation" of your application.

## Configurations

The [serenity.conf](https://github.com/amido/stacks-webapp-template/blob/master/packages/scaffolding-cli/templates/test/xxAMIDOxx.xxSTACKSxx.E2E.Serenity/src/test/resources/serenity.conf) file need to be configured

The following properties for different environments are required in the `src/test/resources/serenity.conf` configuration file.

```text
webdriver.base.url
api.base.url
```

### WebDriver Downloads

If you wish to use a local instance of Serenity Webdriver, make sure to download the correct WebDriver executable for the desired browser:


* [Opera](https://github.com/operasoftware/operachromiumdriver/releases)
* [Firefox](https://github.com/mozilla/geckodriver/releases)
* [Chrome](http://chromedriver.chromium.org/downloads)
* [Internet Explorer](https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver)
* [Microsoft Edge](https://blogs.windows.com/msedgedev/2015/07/23/bringing-automated-testing-to-microsoft-edge-through-webdriver/)


### Configuring serenity.properties

`serenity.take.screenshots` - Set this property to have more finer control on how screenshots are taken. 

This property can take the following values:

* `FOR_EACH_ACTION`: Saves a screenshot at every web element action (like click(), typeAndEnter(), type(), typeAndTab() etc.).
* `BEFORE_AND_AFTER_EACH_STEP`: Saves a screenshot before and after every step.
* `AFTER_EACH_STEP`: Saves a screenshot after every step
* `FOR_FAILURES`: Saves screenshots only for failing steps.
* `DISABLED`: Does not save screenshots for any steps.

The default is `serenity.take.screenshots=BEFORE_AND_AFTER_EACH_STEP`.

`webdriver.driver` - Specify the browser that you want to run your tests in, for example firefox, chrome, phantomjs or iexplorer.

`webdriver.chrome.driver` - Path to the Chrome driver, if it is not on the system path.

For more properties and configuration see [Serenity system properties](https://serenity-bdd.github.io/theserenitybook/latest/serenity-system-properties.html)

## Run Tests Locally

Open a terminal and navigate to the project root. Execute tests by running any one of the following commands:

Run all tests on the default environment: 

```bash
mvn clean verify
```

Run all tests on the specific environment e.g. staging:

```bash
mvn clean verify -Denvironment=staging
```

Run Smoke tests only:

```bash
mvn clean verify -Dcucumber.options="--tags @Smoke"
```

Run Functional tests only:

```bash
mvn clean verify -Dcucumber.options="--tags @Functional"
```

Run tests by other tags and ignore tests that contain `@Ignore` tags:

```bash
mvn clean verify verify -Dcucumber.options="--tags ~@Ignore --tags @YourTag"
```

### Check the Report

As a result of the test execution,  the **serenity-maven-plugin** will automatically generate the test report with the name - `index.html`.

For example:

```text
Test Report Location is: ..target/site/serenity/index.html
```

### Manual Aggregation of the Test Report

Open the ../E2E/Serenity path in the terminal and run the following command:

```bash
mvn serenity:aggregate command
```

### Running tests in parallel threads - Using forks

:::info
Choosing the right forking strategy and parallel execution settings can have a substantial impact on the memory requirements and the execution time of the build system.
:::

Maven is set to spawn new processes by the `forkCount` configuration element, as shown here below.
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
