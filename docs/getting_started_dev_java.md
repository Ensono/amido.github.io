---
id: getting_started_dev_java
title: Dev Java - Using the repo to build Java application locally
sidebar_label: Dev Java - Using the repo to build Java application locally
---

## GETTING STARTED WITH JAVA AND SPRINGBOOT APPLICATION

### IDE GUIDELINES

We recommend that you install the below plugins

```text
  Google-java-format
  Lombok
  SonarLint
  Spring Assistant
  CheckStyle
```

**STEPS TO RUN THE APPLICATION LOCALLY:**

1) Clone the Java project to your local machine from here: [Java Repository](https://github.com/amido/stacks-java)
2) Configure the required environment variables below:

   ```text
   AZURE_COSMOSDB_KEY
   AZURE_APPLICATION_INSIGHTS_INSTRUMENTATION_KEY
   ```
   
   These are responsible for connecting to Azure's CosmosDB, which stores the application data, and to ApplicationInsights,
   which is used for logging purposes.

   Note: For local environments use the Cosmos DB emulator (CosmosDB Emulator has a known fixed key)
        For ApplicationInsights, modify the application so that it doesn't fail to startup if it can't access AI,
        and simply log to the terminal instead).
  
3) Execute the following command to build and run the application:

   ```text
   ./mvnw spring-boot:run
   ```

4) Verify that the application has started by browsing to [http://localhost:9000v1/menu](http://localhost:9000/v1/menu)
  
   All API end-points are protected with Auth0. Clients need to pass the Bearer token for authentication.  
   Auth0 Configuration properties: Auth0 console will have Application and API configuration.

   ```text
    auth0.issuer=https://amidostacks.eu.auth0.com/
    auth0.apiAudience=https://amidostacks.eu.auth0.com/api/v2/
   ```

### PLUGINS USED IN POM XML

- Lombok - To write cleaner code and to avoid having to write boiler plate code
  (for example: Getter, Setter, RequiredArgsConstructor, ToString, EqualsAndHashCode) in Java classes.
- JaCoCo - A free Java code test coverage library.
- Surefire - Used for reporting purposes (creates reports based on tests in the Java test package).
- fmt-maven-plugin - Formats the java code based on rules in java-google-style.xml.
- Spotbugs - Performs a static analysis of the Java code to check for bugs.

#### REPORT - Test Report

Creates test report from the test package in Java using Surefire Plugin.
File (format can be XML or HTML) is generated for each of the test class can be found under target/surefire-reports.

- Run following command - ./mvnw surefire:test
Serenity Report - mvn clean verify
Report can be viewed under - ..stacks-java/api-tests/target/site/serenity/index.html

#### REPORT - Code Coverage && dependency check

- Run following command - ./mvnw jacoco:report
Generated report can be viewed under – target/site/jacoco/index.html

- Dependency Checker Report - mvn clean install -Powasp-dependency-check
Generated report can be viewed under – target/dependency-check.html

#### USING DOCKER IMAGE

Build a Docker image using the command below:

```text
docker build -t image-tag
```

If you have an `.m2` directory in the `java/` folder the Docker build will attempt to copy the files inside the container and use the cached versions.

#### SWAGGER/OAS

- Automatically generated. Go to: [Swagger Index](http://localhost:9000/swagger/index.html)
- Swagger Json : [Swagger Json](http://localhost:9000/swagger/oas.json)

#### HEALTH CHECK

- Available at: [health check](http://localhost:9000/health)
(This can also be configured to run on another port)

## USING THE SCAFFOLDING CLI TO CREATE JAVA SPRINGBOOT PROJECT TEMPLATE

This templates out a fully-functional and deployable project, in a variety of flavours. It includes tests (unit, integration), and infrastructure and deployment definitions.
All from your CLI.

We use npx to execute and create the
[template-cli](https://www.npmjs.com/package/@amidostacks/scaffolding-cli)
[npx](https://www.npmjs.com/package/npx).

We are supporting and running [node@12](https://nodejs.org/en/about/releases/).
Please ensure that your local environment has the correct version
[installed](https://nodejs.org/en/download/).

You will be asked a number of questions. Based on the answers, your ready-to-build project template will be produced.

[![asciicast](https://asciinema.org/a/358208.svg)](https://asciinema.org/a/358208)
