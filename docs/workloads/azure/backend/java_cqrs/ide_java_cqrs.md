---
id: ide_java_cqrs
title: IDE guidelines for the Java Rest API
sidebar_label: IDE guidelines
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## IDE guidelines

We recommend that you install the following plugins:

- Lombok - To reduce the amount of boiler-plate code that needs to be written
- SonarLint - Fix and detect code quality issues (<https://www.sonarlint.org/>)
- Spring Assistant - An IntelliJ plugin for aiding Spring development projects (<https://plugins.jetbrains.com/plugin/10229-spring-assistant>)
- Spring Tools - Adds Spring support for IDEs (<https://spring.io/tools>)
- CheckStyle - Flags up issues with coding style (<https://checkstyle.sourceforge.io/>)
- google-java-format Formatter - Formats code according to configuration (<https://github.com/amido/stacks-java/blob/master/tools/formatter/intellij-java-google-style.xml>)

### Plugins used in POM

- Lombok - Avoids need to write e.g. Getter, Setter, RequiredArgsConstructor, ToString, EqualsAndHashCode) in Java classes.
- JaCoCo - A free Java code test coverage library.
- Surefire - Used for reporting purposes (creates reports based on tests in the Java test package).
- fmt-maven-plugin - Formats the java code based on rules in java-google-style.xml.
- Spotbugs - Performs a static analysis of the Java code to check for bugs.

### Code Quality

#### Formatter

Install the `intellij-java-google-style.xml` formatter configuration file into the IDE from [here](https://github.com/amido/stacks-java/blob/master/tools/formatter/intellij-java-google-style.xml).

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
  ./mvnw spotbugs:check
  ```

  </TabItem>

  <TabItem value="windows">

  ```bash
  mvnw.cmd spotbugs:check
  ```

  </TabItem>
 </Tabs>
