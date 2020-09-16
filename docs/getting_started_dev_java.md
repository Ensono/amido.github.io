---
id: getting_started_dev_java
title: Using the repo to build the Java application locally
sidebar_label: Dev [Java] - Using the repo to build the Java application locally
---

## GETTING STARTED WITH THE JAVA SPRINGBOOT APPLICATION

### TO RUN THE APPLICATION LOCALLY

1) Clone the Java project to your local machine from here: [stacks-java repository](https://github.com/amido/stacks-java)
2) Configure these required environment variables:

   ```text
   AZURE_COSMOSDB_KEY
   AZURE_APPLICATION_INSIGHTS_INSTRUMENTATION_KEY
   ```

   For Unix systems, set them as additional variables within e.g. `~/.profile` or `/etc/profile`.

   For Windows, open System Properties then select the Advanced tab, then click on the Environment Variables button and add the new parameters.

   The first of these is responsible for connecting to Azure **CosmosDB**, which stores the application data.

   The second is for Azure **ApplicationInsights**, which is used for logging purposes.

   Note: For local environments you can use the [Cosmos DB emulator](https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator?tabs=ssl-netstd21) (CosmosDB Emulator has a known fixed key).
        For ApplicationInsights, modify the application so that it doesn't fail to startup if it can't access AI,
        and simply log to the terminal instead).
  
3) Execute the following command to build and run the application:

   Move to the `<PROJECT-NAME>/java` folder, then

   Unix:

   ```text
   ./mvnw spring-boot:run
   ```

   Windows:

   ```text
   mvnw.cmd spring-boot:run
   ```

4) Verify that the application has started by browsing to [http://localhost:9000/v1/menu](http://localhost:9000/v1/menu). This should return a valid JSON response.

   The application configuration uses Swagger/OAS3 to represent the API endpoints. The Swagger UI can be viewed by directing your browser to
  [http://localhost:9000/swagger/index.html](http://localhost:9000/swagger/index.html).
  
### AUTHORIZATION

All API endpoints are (optionally) protected using **Auth0**. There is an `auth.properties` file within the project codebase.
If the following property within this file is set:

   ```text
   auth.isEnabled=true
   ```

   then clients will need to pass an `Authorization` header containing the Bearer token generated from Auth0 as part of the endpoint request. If the value
   is set to `false` then no authorization is required.

#### AUTH0 CONFIGURATION PROPERTIES

   If using Auth0 for authorization, Auth0 itself will need to be configured with both an API definition and an associated Application.
   There are corresponding configuration values required for the Stacks application, within the `auth.properties` file, e.g.

   ```text
    auth0.issuer=https://amidostacks.eu.auth0.com/
    auth0.apiAudience=https://amidostacks.eu.auth0.com/api/v2/
   ```

   These parameters are used to verify that the JWT supplied in the Authorization header of a request is valid.

### IDE GUIDELINES

We recommend that you install the following plugins

```text
  google-java-format
  Lombok
  SonarLint
  Spring Assistant
  CheckStyle
```

### PLUGINS USED IN POM XML

- Lombok - To write cleaner code and to avoid having to write boiler plate code
  (for example: Getter, Setter, RequiredArgsConstructor, ToString, EqualsAndHashCode) in Java classes.
- JaCoCo - A free Java code test coverage library.
- Surefire - Used for reporting purposes (creates reports based on tests in the Java test package).
- fmt-maven-plugin - Formats the java code based on rules in java-google-style.xml.
- Spotbugs - Performs a static analysis of the Java code to check for bugs.

### REPORTS

#### TEST REPORTS

A test report may be created from the `test` package in Java using the Surefire Plugin.
The report file (as either XML or HTML) generated for each of the test classes can be found under `target/surefire-reports`.

Run the following command to create the report:

  ```text
  ./mvnw surefire:test
  ```

To generate the Serenity report:

  ```text
  mvn clean verify
  ```

The report can be viewed under `<PROJECT-NAME>/api-tests/target/site/serenity/index.html`.

#### CODE COVERAGE & DEPENDENCY CHECK REPORTS

Run the following command:

   ```text
   ./mvnw jacoco:report
   ```

The generated report can be viewed under `<PROJECT-NAME>/target/site/jacoco/index.html`.

For the dependency checker report, run:

   ```text
   mvn clean install -Powasp-dependency-check
   ```

The generated report can be viewed under `<PROJECT-NAME>/target/dependency-check.html`.

### USING A DOCKER IMAGE

From the `<PROJECT-NAME>/java` folder, build a Docker image using e.g. the command below:

   ```text
   docker build --tag stacks:1.0 .
   ```

This uses the `Dockerfile` in this folder to generate the Docker image.

If you have an `.m2` directory in the `java/` folder, the Docker build will attempt to copy the files inside the container and use the cached versions.

Once the Docker image is created, you can then run a Docker container based on this image using e.g.

   ```text
   docker run -p 9000:9000 -e AZURE_APPLICATION_INSIGHTS_INSTRUMENTATION_KEY -e AZURE_COSMOSDB_KEY stacks:1.0
   ````

which passes in the two required environment variables from your own environment.

#### SWAGGER/OAS

- Automatically generated for the project. Go to [Swagger Index](http://localhost:9000/swagger/index.html) to view.
- Swagger Json is here: [Swagger Json](http://localhost:9000/swagger/oas.json)

#### HEALTH CHECK

- Available at: [health check](http://localhost:9000/health)
(This can also be configured to run on another port)

## USING THE SCAFFOLDING CLI TO CREATE A JAVA SPRINGBOOT PROJECT TEMPLATE

This will template out a fully-functional and deployable project, in a variety of flavours. It includes tests (unit, integration), together with infrastructure and deployment definitions.
All by running from your CLI.

We use npx to execute and create the
[template-cli](https://www.npmjs.com/package/@amidostacks/scaffolding-cli)
[npx](https://www.npmjs.com/package/npx).

We are supporting and running [node@12](https://nodejs.org/en/about/releases/).
Please ensure that your local environment has the correct version
[installed](https://nodejs.org/en/download/).

You will be asked a number of questions. Based on the answers, your ready-to-build project template will be produced.

[![asciicast](https://asciinema.org/a/358208.svg)](https://asciinema.org/a/358208)
