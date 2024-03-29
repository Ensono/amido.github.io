---
id: maven_spring_profiles
title: Maven & Spring Profiles
sidebar_label: Maven & Spring Profiles
hide_title: false
hide_table_of_contents: false
description: Maven & Spring Profiles
keywords:
  - java
  - rest
  - api
  - ide
  - maven
  - spring
  - profiles
  - pom
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Introduction

This page describes the use of Maven Build profiles and Spring profiles to support the use of feature sets within Ensono Stacks. The
term 'feature sets' means provider support for common tasks such as persistence and message queue handling. It allows the selection
of different mechanisms across different cloud providers (such as the use of CosmosDB on Azure, or DynamoDB on AWS).

## Maven Build Profiles

Maven build profiles can be used to create customised build configurations, like targeting a level of test granularity or a 
specific deployment environment or feature set.

The profiles are specified in the applications `pom.xml` and provide the capability for a number of different elements of 
the project object model, such as dependencies and properties to be overridden by passing switches at startup. The profiles
are available to all Maven lifecycles such as compile, test and package.

An example of a profile definition is shown below: -

```xml
<profile>
  <id>aws</id>
  <activation>
    <file>
      <exists>.</exists>
    </file>
  </activation>
  <properties>
    <aws.profile.name>aws</aws.profile.name>
  </properties>
  <dependencies>
    <!-- AWS Specific Dependencies Go Here -->
  </dependencies>
</profile>
```

It is possible to specify profiles as being active via a number of mechanisms (one option is show above) and then for 
these to be enabled or disabled on the command line as per requirements.

An example of starting the application and specifying profiles is as follows - this command switches off the `aws` profile and
switches on the `azure` profile: -

```bash
mvn clean spring-boot:run -P-aws,azure
```

## Spring Profiles

Spring Profiles are a core feature of the Spring framework, allowing developers to map beans and properties to different 
profiles.

Activating a certain profile can have a huge effect on a Spring Boot application, but under the hood, a profile can merely 
control two things:

* a profile may influence the application properties, and
* a profile may influence which beans are loaded into the application context

In the Java code it is possible to specify that Spring beans should only be loaded into the context if the profile has been
activated: -

```java
@Component
@Profile("foo")
public class FooBean { ... }
```

When using Spring Boot any application properties are typically placed into a file under `resources` called `application.yml`
(or alternatively `application.properties`). 

When using Spring Profiles it is possible to create individual application property files per profile; this gives a clean
separation between property settings. The example below shows properties that are only loaded (and overlay any similarly named
properties in the base file) if the relevant profile is activated on the command line.

### application-aws.yml

```yaml
aws:
  xray:
    enabled: ${AWS_XRAY_ENABLED:false}
  secretsmanager:
    enabled: ${AWS_SECRETS_ENABLED:false}
```

### application-azure.yml

```yaml
azure:
  application-insights:
    instrumentation-key: xxxxxx
    enabled: true
```

There are multiple ways to specify the profiles at application startup. A few examples are shown below:

```bash
export SPRING_PROFILES_ACTIVE=foo,bar
java -jar profiles-0.0.1-SNAPSHOT.jar
```

```bash
java -Dspring.profiles.active=foo -jar profiles-0.0.1-SNAPSHOT.jar
```

## Ensono Stacks Profile Usage

Ensono Stacks projects have been configured with both Maven and Spring profiles in order to support the capability of being able to 
easily isolate dependencies and properties between feature sets (such as cloud provider, persistence and messaging). 

The ultimate aim of Ensono Stacks is for a project to be able to deploy an instance that is as close to developer-written code as possible, whilst
still providing a rich feature set that projects can choose from. It is also a requirement to make the Ensono Stacks maintainer experience as
simple as possible and to allow developers and testers an easy way to switch between feature sets whilst providing a platform for them
to extend Ensono Stacks with new feature sets in the future.

The use of both profile mechanisms allow dependencies and properties to be nicely ring-fenced, making it relatively easy for
supporting scripts to be able to re-package the Ensono Stacks project and for it to be tailored more closely to a projects requirements.

The three Ensono Stacks workloads differ slightly in their provided capability, so this text will now focus on the Ensono Stacks CQRS with Events 
project as that provides the richest set of features.

The following areas within the project have been configured to provide profile support: -

1. `pom.xml` - default properties assigned for all features
2. `pom.xml` - Maven build profiles created, one per feature
3. `resources/application.yml` - set of Spring profiles to auto-include based on flags passed to Maven (see `spring.profiles.include`)
4. `resources/application-PROFILE_NAME.yml` - application properties specific to each feature

As per the section above on Maven Build Profiles it can be seen that a few of the profiles have been enabled by default. This is
to provide backwards-compatibility and to ensure that the application runs even if no profiles are specified on the command line.
The profiles that have been enabled at this time by default are `aws`, `azure`, `cosmosdb` and `servicebus`.

To start the application using a different configuration, say to use `dynamodb` and `sqs` instead, the following command can be used to
switch off the profiles that aren't required and activate the ones that are. Remember that some profiles are always activated (unless switched 
off by prefixing with a `-` character) so these do not need to be explicitly specified: -

```bash
mvn clean spring-boot:run -Pdynamodb,sqs,-cosmosdb,-servicebus
```

Note that some profiles are mutually exclusive (the persistence and messaging handler profiles) so the application will fail at startup if
invalid (overlapping) profiles are specified.

## Support Scripts

A number of support scripts are included in the projects that aid in the use of profiles.

> :warning: The Cloud-related profiles (**AWS & Azure**) do not currently provide as clean a separation of dependencies as possible - 
> all library dependencies will be included irrespective of whether they are selected or not - this issue will be fixed in a later release.

### run_scenario.sh

This script is aimed at **Ensono Stacks developers & testers**.

This bash script provides a command line interface to the user to allow them to select the feature sets they want to start the 
Spring Boot application with. 

After making their choices it will display the Maven command that will be executed, and then optionally run it for the user.

```bash
sh run_scenario.sh

1. Please select the Cloud required:

   [x]   azure (Azure Cloud)
   [x]   aws (AWS Cloud)

2. Please select the Persistence required:

   [ ]   cosmosdb (CosmosDB)
   [x]   dynamodb (DynamoDB)

3. Please select the Message Handler required:

   [ ]   servicebus (Azure ServiceBus)
   [ ]   kafka (AWS Kafka)
   [x]   sqs (AWS SQS)

You have selected these options for your project:

   * azure
   * aws
   * dynamodb
   * sqs

About to execute:

   mvn clean spring-boot:run -Pazure,aws,dynamodb,sqs,-cosmosdb,-servicebus

Press ENTER to accept or CTRL-C to quit
```

### deploy_scenario.sh

This script is aimed at **Ensono Stacks adopters & end projects**.

This bash script provides a command line interface to the user to allow them to select the feature sets they want to deploy the
Spring Boot application with. After making their feature set choice it will alter the code project from being one that supports 
multiple feature sets to being one that has the features baked-in.

```bash
sh deploy_scenario.sh

1. Please select the Cloud required:

   [x]   azure (Azure Cloud)
   [x]   aws (AWS Cloud)

2. Please select the Persistence required:

   [ ]   cosmosdb (CosmosDB)
   [x]   dynamodb (DynamoDB)

3. Please select the Message Handler required:

   [ ]   servicebus (Azure ServiceBus)
   [x]   kafka (AWS Kafka)
   [ ]   sqs (AWS SQS)

You have selected these options for your project:

   * azure
   * aws
   * dynamodb
   * kafka

Press ENTER to accept or CTRL-C to quit
```

After pressing ENTER the script will perform the following actions: -

1. Move feature-set related Maven Dependencies to the main library dependencies section in `pom.xml`
2. Remove any non-required feature-set related Maven Build profiles from `pom.xml`
3. Remove any non-required feature-set related Maven Build properties from `pom.xml`
4. Hard-code the feature-set related Spring Profile list in `application.yml` (and remove any unused profiles)
5. Remove any non-required Spring profile `resources/application-PROFILE_NAME.yml` files

After these operations the Ensono Stacks project code should be closer to how a Project would manually craft their application code.
