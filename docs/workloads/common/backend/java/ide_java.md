---
id: ide_java
title: IDE guidelines for the Java Rest API
sidebar_label: IDE guidelines
hide_title: false
hide_table_of_contents: false
description: IDE guidelines for the Java Rest API
keywords:
  - java
  - rest
  - api
  - ide
  - ide guidelines
  - plugins
  - code quality
  - lombok
  - sonarlint
  - spring assistant
  - check style
  - google java format
  - spotbugs
  - jacoco
  - setups
  - pom
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## IDE guidelines

The IDE we have used is Intellij.

We recommend that you install the following plugins:

- Lombok - To reduce the amount of boiler-plate code that needs to be written
- [Sonarlint](https://www.sonarlint.org/) - Fix and detect code quality issues
- [Spring Assistant](https://plugins.jetbrains.com/plugin/10229-spring-assistant) - An IntelliJ plugin for aiding Spring development projects
- [Spring Tools](https://spring.io/tools) - Adds Spring support for IDEs
- [CheckStyle](https://checkstyle.sourceforge.io/) - Flags up issues with coding style
- [google-java-format Formatter](https://github.com/Ensono/stacks-java/blob/master/tools/formatter/intellij-java-google-style.xml) - Formats code according to configuration

### Plugins used in POM

- Lombok - Avoids need to write e.g. Getter, Setter, RequiredArgsConstructor, ToString, EqualsAndHashCode) in Java classes.
- JaCoCo - A free Java code test coverage library.
- Surefire - Used for reporting purposes (creates reports based on tests in the Java test package).
- fmt-maven-plugin - Formats the java code based on rules in java-google-style.xml.
- Spotbugs - Performs a static analysis of the Java code to check for bugs.

### Set up the project

#### How to import the whole project

In the IDE(We used Intellij) go to File -> New -> Project.
Set project SDK to Java 11. Click Next -> Next
![New Project](/img/new_java_project.png)

Choose the java project folder
![New Java Project](/img/new_java_project_1.png)
click finish.

#### What setup required to get it up and running

Open up the "java" folder and right click on pom.xml and choose "Add as Maven Project".
Click on Run -> Edit Configurations
![Run Configurations](/img/run_configuration.png)
Click on Add new Configuration and choose Application/Spring boot
![Run Configurations_1](/img/run_configuration_1.png)
Choose the main class as "Application.java" and set any relevant variables, such as to set environment variable
for **AZURE_COSMOSDB_KEY** and set JRE to Java 11. Click OK
![Run Configurations_2](/img/run_configuration_2.png)

Open Application.java file and right click and choose run Application.![Run Java Application](/img/run_java_application.png)

### Code Quality

#### Formatter

Install the `intellij-java-google-style.xml` formatter configuration file into the IDE from [here](https://github.com/Ensono/stacks-java/blob/master/tools/formatter/intellij-java-google-style.xml).

The Java source code will automatically be reformatted to comply with the [Google Java Style](https://google.github.io/styleguide/javaguide.html).

You can override the settings locally in the codebase by adding, for example:

```text
//@formatter:off
manually formatted code
///@formatter:on
```

##### Validating and applying formatting

From the `<PROJECT-NAME>/java` folder run

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
./mvnw com.coveo:fmt-maven-plugin:check
```

  </TabItem>
  <TabItem value="windows">

```bash
mvnw.cmd com.coveo:fmt-maven-plugin:check
```

  </TabItem>
 </Tabs>

To validate the current formatting. You can then run the below code to apply formatting to the
source code.

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
./mvnw com.coveo:fmt-maven-plugin:format
```

  </TabItem>
  <TabItem value="windows">

```bash
mvnw.cmd com.coveo:fmt-maven-plugin:format
```

  </TabItem>
 </Tabs>

#### Verifying common programming flaws

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
./mvnw spotbugs:check
```

  </TabItem>

  <TabItem value="windows">

```bash
mvnw.cmd spotbugs:check
```

  </TabItem>
 </Tabs>
