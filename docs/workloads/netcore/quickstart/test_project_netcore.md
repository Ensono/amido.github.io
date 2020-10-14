---
id: test_project_netcore
title: Testing the application
sidebar_label: Testing
---

## xxAMIDOxx.xxSTACKSxx.Gatling.Tests

xxAMIDOxx.xxSTACKSxx.Gatling.Tests is a sample project demonstrating performance testing (Load testing) using the tool Gatling.

The project contains a small framework and a couple of tests that can be used to build specific load tests on projects using the Amido Stack.



## Useful Documentation

[Gatling docs](https://gatling.io/docs/current)

Blog post by Amir Gharai which was used to set up the framework - Performance Testing Framework with Gatling and Maven



## Dependencies

- Java SDK 8
- Maven
- IDE for Scala development. I.e. IntelliJ IDEA



## Quick start

Once the project has been cloned locally, tests can be run using the following command:

`mvn clean gatling:test`

By default, this will run a load test against the GET menu api with 1 user with a ramp up duration of 1 second. There are optional parameters that can be added to change the load test:

`-Dusers=X` - This allows you to set the number of users that will be simulated in the tests
`-Drampup=X` - This sets the amount of seconds the test will ramp the test load from 0 users to X users in the test

Example:

`mvn clean gatling:test -Dusers=100 -Drampup=5`

## Folder Structure

<div>
    <div>└──&nbsp;src</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;resources</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;bodies</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└──&nbsp;data</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;scala</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;xxAMIDOxx.xxSTACKSxx.Gatling.Tests</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;config</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;requests</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&nbsp;scenarios</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&nbsp;simulations</div>
</div>


This folder structure and the contents of each folder follows the guideline outlined in the blog post on [Testing Excellence](https://devqa.io/gatling-maven-performance-test-framework/). It is recommended that users of this framework refer back to this blog post, as it contains all required details.

NB: Testing Excellence was written using Gatling 2.3.0, whereas this project is using the current latest version 3.0.3. Contrary to what the blog post says, to run the tests you should use mvn clean gatling:test rather than mvn clean gatling:execute. More details [here](https://gatling.io/docs/current/migration_guides/2.3-to-3.0)
