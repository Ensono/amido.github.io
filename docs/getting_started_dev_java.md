---
id: getting_started_dev
title: Dev Java - Using the repo to build Java application locally
sidebar_label: Dev Java - Using the repo to build Java application locally
---

## GETTING STARTED WITH JAVA AND SPRINGBOOT APPLICATION


**STEPS TO RUN APPLICATION LOCALLY :**
 
1) Check out java project to your local machine : [Java Repository](https://github.com/amido/stacks-java)

2) Configure below required environment variables

   Note : For local environments use Cosmos DB emulator(CosmosDB Emulator has a known fixed key)
          For AppInsights change the app to not crash if it can't get to AI, and just log to terminal instead).
   ```
   AZURE_COSMOSDB_KEY
   AZURE_APPLICATION_INSIGHTS_INSTRUMENTATION_KEY
   ```
3. Execute the following command to build and run the application
   ```
    ./mvnw spring-boot:run
   ```

4. Verify if the application has started - [localhost](http://localhost:9000/v1/menu)

#### PLUGINS USED IN POM XML :
```
- Lombok - To write cleaner code and to avoid boiler plate code 
  (For EX: Getter, Setter, RequiredArgsConstructor, ToString, EqualsAndHashCode) in Java classes.
  
- JaCoCo - Free Java code test coverage Library.
- Surefire - Used for Reporting purpose (create reports based on tests in the java test package).
- fmt-maven-plugin - Format the java code based on rules in java-google-style.xml.
- Spotbugs - Perform a static analysis of the java code to check for bugs.

```

#### IDE GUIDELINES
Install below plugins
```
  Google-java-format
  Lombok
  SonarLint
  Spring Assistant
  CheckStyle

```
#### REPORT - Test Report :

Creates test report from the test package in Java using Surefire Plugin.
File (format can be XML or HTML) is generated for each of the test class can be found under target/surefire-reports.

- Run following command - ./mvnw surefire:test
Serenity Report - mvn clean verify
Report can be viewed under - ..stacks-java/api-tests/target/site/serenity/index.html

#### REPORT - Code Coverage && dependency check :

- Run following command - ./mvnw jacoco:report
Generated report can be viewed under – target/site/jacoco/index.html

- Dependency Checker Report - mvn clean install -Powasp-dependency-check
Generated report can be viewed under – target/dependency-check.html


#### USING DOCKER IMAGE
- Builds docker image using below command.
```
docker build -t image-tag
```
If you have an `.m2` directory in the `java/` folder the Docker build will attempt to copy the files inside the container and use the cached versions.

#### SWAGGER/OAS
- Automatically generated. Go to: [Swagger Index](http://localhost:9000/swagger/index.html)
- Swagger Json : [Swagger Json](http://localhost:9000/swagger/oas.json)

#### HEALTH CHECK
- Available at: [health check](http://localhost:9000/health)
(This can also be configured to run on another port)

