---
id: testing
title: Testing and Quality
sidebar_label: Testing and Quality 
---

## Overview

Tests where possible will be written and delivered as part of the same branch and feature. Where this is not possible, in the event of using a standalone repo or the alternative, we expect the same development and code reviews standards to be upheld, and the branch naming to be aligned with the development branch name as possible.

### Pre-commit Tests

To be run on the local active develop branch, before commit. Before committing changes, we suggest enforcing and running pre-commit tests with a pre-commit hook.

### Pre-deployment Tests

To be run on the active development branch.
After which, we have two different processes, one for pre-deployment tests (unit, snapshot, integration), and another for post-deployment (functional tests).  Pre-deployment tests can run on the fly whilst coding. This is enabled by using a ‘watch-mode’ which will check for code changes, compile/trans-compile, and run the tests against the webapp.

### Post-deployment Tests

To be run on master once the pull request (PR) has been approved and passed all pre-deployment tests.

## Quality Gates

The following demonstrates the series of quality gates that the webapp must pass through in order to successfully be deployed to a user facing environment (production).

![alt text](https://www.lucidchart.com/publicSegments/view/2094f5d4-eaca-417c-a51e-36bf79853373/image.png "Quality Gates")


## Cypress

### Dubugging Axe Failures

> When accessibility violations are detected, your test will fail and an entry titled "A11Y ERROR!" will be added to the command log for each type of violation found (they will be above the failed assertion). Clicking on those will reveal more specifics about the error in the DevTools console.
Source: [cypress-axe#standard-output](https://github.com/avanslaars/cypress-axe#standard-output)

For information on how to fix the failure, follow the HelpUrl printed to the console.

There is support with [SonarCloud](https://sonarcloud.io/) for static analysis.
We can run this with Amido Stacks custom container, supports running Sonar Scanner for .NET and NPM projects. 
[amidostacks/ci-sonarscanner](https://hub.docker.com/repository/docker/amidostacks/ci-sonarscanner).

This container make running static code analysis a breeze in the pipelines.

In order to run, the export the followings environment variables for the
SonarCloud Project:

```bash
export SONAR_TOKEN=
export SONAR_PROJECT_KEY=
export SONAR_ORGANIZATION=
export BUILD_NUMBER=
```

To find this, please ensure that you sign up with GitHub to
[Sonarcloud](https://sonarcloud.io) for the Organisation under test.

First generate the code coverage results but running the unit tests, then run the SonarCloud scanner and
push up the results for analysis.

```bash
npm run test
docker run -e SONAR_HOST_URL=https://sonarcloud.io -e SONAR_TOKEN=$SONAR_TOKEN -e SONAR_PROJECT_KEY=$SONAR_PROJECT_KEY -e SONAR_ORGANIZATION=$SONAR_ORGANIZATION -e BUILD_NUMBER=1.2.3 -v $(pwd):/usr/src --rm -it amidostacks/ci-sonarscanner /bin/bash -c 'cd /usr/src && sonar-scanner'
```
