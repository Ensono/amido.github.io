---
id: scaffolding_java
title: Using the Maven Scaffolding to create the Java project template
sidebar_label: Using the Maven Scaffolding
hide_table_of_contents: true
description: Using the Maven Scaffolding to create the Java project template
keywords:
  - java
  - rest 
  - api
  - application
  - spring boot
  - swagger
  - template
  - maven scaffolding
  - get started
---

import ResponsivePlayer from "../../../../../src/pages/Components/ResponsivePlayer/ResponsivePlayer";

## Create a custom Java project template from the command line

<ResponsivePlayer url="https://vimeo.com/640390929" />


**Before starting, please make sure that your environment meets all the [requirements](requirements_java.md).**

You can customize the deployment of the project running a handful of command lines. Currently, scaffolding is handled by Maven and you can use it
by cloning one of the repositories and then installing the project as a Maven archetype locally; from there we can create a new project by using
that archetype as a template. To do so we do:

1. Clone any of the STACKS Java project (simple-api, stacks-java-cqrs, stacks-java-cqrs-events)
2. Navigate to the `<directory you cloned the project into>/java` in the terminal
3. Then issue the following Maven commands, using the included wrapper:
   1. ``./mvnw archetype:create-from-project`` - To create the archetype
   2. `` cd target/generated-sources/archetype`` - Navigate to the folder it was crated in
   3. ``..\..\..\mvnw install`` - Install the archetype locally
4. Now, navigate to a directory in which you'd like to crate the localized project into
5. To create the project we do ``<path-to-mvn-executable>/mvn archetype:generate -DarchetypeGroupId='com.amido' -DarchetypeArtifactId='<archetype-artifact-id>' -DarchetypeVersion='<archetype-version>' -DgroupId='<your-group-id>' -DartifactId='<your-artifact-id>' -Dversion='<your-version>' -Dpackage='<package-name>'``
   1. `<archetype-artifact-id>` refers to the archetype name ID, as that was created above. That ID is made of the artifact name of the original
      project as declared in its `pom.xml` suffixed with "archetype"
      1. For example: `stacks-api-cqrs-events-archetype`. The name can also be observed in the log created from the first command above.
   2. `<archetype-version>` should be taken from the `pom.xml` of the original project
   3. `<your-group-id>` is a placeholder for your group ID
   4. `<your-artifact-id>` is a placeholder for your artifact ID
   5. `<your-version>` is a placeholder for your version
   6. `<package-name>` is a placeholder for the root package name and structure. 
      1. For example, using `com.test.stacks` will instruct Maven to place the code in `src/main/java/com/test/stacks` and update all the relevant references accordingly (i.e. `imports`)


Note: For now, until the release of the Amido STACKS CLI Tool v2 is released, this is the only way to get started with STACKS
