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

Conditional Compilation Library
As already mentioned, the .Net version of the Stacks project takes advantage of conditional compilation (see C# preprocessor directives ) to effectively provide a template that can be configured to a projects requirements.
There is no analogue in the Java world, but there are Maven plugins that exist that work in conjunction with the javac function that compiles the code to perform a level of pre-processing. Examples of these are as follows:
Manifold Preprocessor (https://github.com/manifold-systems/manifold/blob/master/docs/articles/preprocessor.md ) - 1.3k GitHub stars

The first option (Manifold Preprocessor) seems well supported and has additional capabilities such as an Intellij IDE plugin that supports the pre-processing functionality within the development environment, 
as well as having a responsive developer available via a dedicated Slack channel.

## Overview : 
First things first, the preprocessor is a javac plugin which means it plugs directly into your Java compiler and runs as part of javac -- you don't have to add intermediate build steps, manage source generation targets, or any of that. It also means it's effing fast and allows you to easily build multiple targets from a single codebase.

Next, the preprocessor is exclusively designed for conditional compilation, No Macros! You can still #define a symbol, but you can't assign a value to it -- a #define symbol is always boolean and its value is always true, unless of course the symbol is not defined or is undefined with #undef.

As you may have surmised the preprocessor doesn't try to reinvent anything; the directives are taken straight from the C-family of preprocessors. These include:

. #define
. #undef
. #if
. #elif
. #else
. #endif
. #error
. #warning

An extremely useful feature involves the symbols you can reference from #if. Not only can you reference symbols you've defined with #define,
you can also define and use symbols from a host of other sources that are visible to all your project's files.
These include build.properties files, which you can place in parent directories starting with the source root, 
and javac's -Akey[=value] compiler arguments. Additionally, the preprocessor provides builtin symbols reflecting environment
settings such as JAVA_9_OR_LATER and JPMS_NAMED.

Note unlike with #define symbols, you can define symbols with string values using build.properties and -Akey[=value] compiler arguments. 
In this case you can use equality expressions == and != to test the value:

### bulid.properties:
update this file with the required feature 

AWS=
AZURE=
SERVICEBUS=
.#SQS=
.#KAFKA=
.#COSMOSDB=
DYNAMODB=


The environment settings symbols can be extra useful if you target multiple Java versions

public class MenuService {
.#if DYNAMODB
private final MenuRepositoryDynamoDb menuRepository;

.#elif COSMOSDB
private final CosmosMenuRepository menuRepository;
.#endif

### run_scenario.sh

This script is aimed at **Stacks developers & testers**.

This bash script provides a command line interface to the user to display the list of feature sets  they want to start the
Spring Boot application with using build.properties inputs.

You have selected these options for your project:

* aws
* azure
* servicebus
* dynamodb

Press ENTER to accept or CTRL-C to quit

###script outcome   :

* disable not selected profile  
* delete  dependencies from profile properties dependencies  and add to dependencies in the pom.xml
* delete manifold configuration from pom.xml 
* keep only the required resource files based on the selected profile 


### run application

mvn clean spring-boot:run








