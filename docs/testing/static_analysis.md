---
id: static_analysis
title: Static Code Analysis
sidebar_label: Static Analysis
---

### Static analysis

There is support with [SonarCloud](https://sonarcloud.io/) for static analysis.

We can run this with Amido Stacks custom container, supports running Sonar Scanner for .NET and NPM projects.

[amidostacks/ci-sonarscanner](https://hub.docker.com/repository/docker/amidostacks/ci-sonarscanner).

This container make running static code analysis a breeze in the pipelines.

To run, the export the followings environment variables for the
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
