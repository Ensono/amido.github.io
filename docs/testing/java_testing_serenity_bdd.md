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

### Configurations

The serenity.conf file need to be configured [Serenity conf](https://github.com/amido/stacks-webapp-template/blob/master/packages/scaffolding-cli/templates/test/xxAMIDOxx.xxSTACKSxx.E2E.Serenity/src/test/resources/serenity.conf)

The following properties for different environments are required in the src/test/resources/serenity.conf configuration file.

 ```text
   webdriver.base.url
   api.base.url
   WebDriver Downloads
   - If you wish to use a local instance of Serenity Webdriver, be sure to download the WebDriver file for the browsers with which you wish to perform cross browser testing
   from the links mentioned below:
```

### Browser Download Location

```text
1) [Opera](https://github.com/operasoftware/operachromiumdriver/releases)
2) [Firefox](https://github.com/mozilla/geckodriver/releases)
3) [Chrome](http://chromedriver.chromium.org/downloads)
4) [Internet Explorer](https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver)
5) [Microsoft Edge](https://blogs.windows.com/msedgedev/2015/07/23/bringing-automated-testing-to-microsoft-edge-through-webdriver/)
   Configure the serenity.properties file:
   serenity.take.screenshots - Set this property to have more finer control on how screenshots are taken, default is serenity.take.screenshots=BEFORE_AND_AFTER_EACH_STEP This property can take the following values:
```

FOR_EACH_ACTION: Saves a screenshot at every web element action (like click(), typeAndEnter(), type(), typeAndTab() etc.).
BEFORE_AND_AFTER_EACH_STEP: Saves a screenshot before and after every step.
AFTER_EACH_STEP: Saves a screenshot after every step
FOR_FAILURES: Saves screenshots only for failing steps.
DISABLED: Does not save screenshots for any steps.
webdriver.driver - What browser do you want your tests to run in, for example firefox, chrome, phantomjs or iexplorer.

webdriver.chrome.driver - Path to the Chrome driver, if it is not on the system path.

More properties here: <https://serenity-bdd.github.io/theserenitybook/latest/serenity-system-properties.html>

### Run Tests Locally

Open current folder in the terminal

```bash
Execute tests by running one of the following commands:
a. Run all tests on the default environment: mvn clean verify
b. Run all tests on the specific environment e.g. staging: mmvn clean verify -Denvironment=staging
b. Run Smoke tests only: mvn clean verify -Dcucumber.options="--tags @Smoke"
c. Run Functional tests only: mvn clean verify -Dcucumber.options="--tags @Functional"
d. Run tests by other tags and ignore tests that contain @Ignore tags: mvn clean verify verify -Dcucumber.options="--tags ~@Ignore --tags @YourTag"
```

Check the output report
As a result of the test execution - serenity-maven-plugin will automatically generate the test report with name - index.html.

```text
Test Report Location is: ..target/site/serenity/index.html
```

#### Manual Aggregation of the Test Report

```bash
- Open the ../E2E/Serenity path in the terminal
- Execute the mvn serenity:aggregate command
- Running tests in parallel threads - Using forks
  Note : Choosing the right forking strategy and parallel execution settings can have a substantial impact on the memory requirements
  and the execution time of the build system. Using multiple forks can be a good alternative to running all tests in a single JVM, and can reduce the risk of certain types of errors.
```

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

**Note**
The more threads are used, the higher the chances of sporadic, hard-to-reproduce test failures due to timeouts and other related issues. The added performance gain of each thread also tends to drop off for higher numbers of threads.pper-left box, drag-and-drop a file, or open one with the chooser at the top.
Content gets parsed and displayed in the upper-right box; rule violations (if any) show up in the lower-right box.
Click a violation for information about it or click its line number to highlighted it in the lower-left box.

> *Note*: [All rules](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md) are enabled except [MD013/line-length](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md013) and [MD002/first-heading-h1](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md002) (deprecated).

#### Resources

* [`markdownlint` on GitHub](https://github.com/DavidAnson/markdownlint)
* [`markdownlint` on npm](https://www.npmjs.com/package/markdownlint)
* [Markdown specification](https://daringfireball.net/projects/markdown/)
* [CommonMark specification](https://commonmark.org/)

#### Thanks

[`markdownlint/Ruby`](https://github.com/markdownlint/markdownlint) for the inspiration and [`markdown-it`](https://github.com/markdown-it/markdown-it) for the parser and interactive demo idea!
