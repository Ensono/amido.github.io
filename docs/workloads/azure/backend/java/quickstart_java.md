---
id: quickstart_java
title: Getting started with the Java Rest API application
sidebar_label: Getting started
description: Getting started with the Java Rest API application
keywords:
  - java
  - rest 
  - api
  - application
  - spring boot
  - authorization
  - docker
  - swagger
  - auth0
  - settings
  - get started
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Using the repository to build the Java Spring Boot Rest API application

### Versioning

This is version `1.0.0` of the `java-stacks` project.

### Running the application locally

1. Clone the Java project to your local machine from here: [stacks-java repository](https://github.com/amido/stacks-java/tree/feat/api-with-no-cqrs)
2. Configure required environment variables

    The application is currently configured to work with the Azure environment.

    It uses an Azure **CosmosDB** database to store the example application data. So you should have access to an instance to use with the application.
    Note: For running on a local Windows environment you can use the [Cosmos DB emulator](setting_up_cosmos_db_locally_java.md) (CosmosDB Emulator has a known fixed key).
    For further info please follow the [link](https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator?tabs=ssl-netstd21).

    In addition, Azure **ApplicationInsights** is used for logging purposes. If this is unavailable, modify the application so that it doesn't fail to startup if it can't access ApplicationInsights, and simply log to the terminal instead.

    ```yaml
       application-insights:
           instrumentation-key: xxxxxx
           enabled: false
       ```

    There are two corresponding environment variables that need to be set to interact with these systems:

    ```text
    AZURE_COSMOSDB_KEY
    AZURE_APPLICATION_INSIGHTS_INSTRUMENTATION_KEY
    ```

    <Tabs
      groupId="operating-systems"
      defaultValue="unix"
      values={[
        {label: 'Unix', value: 'unix'},
        {label: 'Windows', value: 'windows'},
      ]}>
      <TabItem value="unix">
      Set the two environment variables as additional variables within e.g. ~/.profile or /etc/profile.
      </TabItem>
      <TabItem value="windows">
      Open the System Properties then select the Advanced tab, then click on the Environment Variables
      button and add the new parameters.
      </TabItem>
    </Tabs>

3. Build and run the application

    Note that at a minimum [Java 11](https://adoptopenjdk.net/) should be installed.

    Move to the `<PROJECT-NAME>/java` folder, then

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
    ./mvnw spring-boot:run
    ```

    </TabItem>
    <TabItem value="windows">

    ```bash
    mvnw.cmd spring-boot:run
    ```

   </TabItem>
   </Tabs>

4. Build and run the application using Cosmos DB Emulator
   please refer to section "Determine which root certificates have been installed" in [Setting Up CosmosDB Emulator](setting_up_cosmos_db_locally_java.md)

    Move to the `<PROJECT-NAME>/java` folder, then
    go to `application.yml` either comment out the `application-insights` block or set `enabled`  property to `false`.
    In `logback-spring.xml` comment out the application-insight section.

    ![logback](/img/logback_xml.png)

    Set `AZURE_COSMOSDB_KEY` as an environment variable and set the value to be the primary key value on the emulator.
    <br />

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
    ./mvnw spring-boot:run -Dspring-boot.run.jvmArguments='-Djavax.net.ssl.trustStore="<Location of the root cosmos db certificate>" -Djavax.net.ssl.trustStorePassword="changeit"'
    ```

    </TabItem>
    <TabItem value="windows">

    ```bash
    mvnw.cmd spring-boot:run -Dspring-boot.run.jvmArguments='-Djavax.net.ssl.trustStore="<Location of the root cosmos db certificate>" -Djavax.net.ssl.trustStorePassword="changeit"'
    ```

    </TabItem>
    </Tabs>

5. Verify that the application has started

    Browse to [http://localhost:9000/v1/menu](http://localhost:9000/v1/menu). This should return a valid JSON response.

    The application configuration uses Swagger/OAS3 to represent the API endpoints. The Swagger UI can be viewed by directing your
    browser to [http://localhost:9000/swagger/index.html](http://localhost:9000/swagger/index.html).

### Authorization

All API endpoints are (optionally) protected using **Auth0**. There is an `auth.properties` file within the project codebase.
If the following property within this file is set:

```text
auth.isEnabled=true
```

then clients will need to pass an `Authorization` header containing the Bearer token generated from Auth0 as part of the endpoint request. If the value
is set to `false` then no authorization is required.

#### Auth0 configuration properties

If using Auth0 for authorization, Auth0 itself will need to be configured with both an API definition and an associated Application.
There are corresponding configuration values required for the Stacks application, within the `auth.properties` file, e.g.

```text
auth0.issuer=https://amidostacks.eu.auth0.com/
auth0.apiAudience=https://amidostacks.eu.auth0.com/api/v2/
```

These parameters are used to verify that the JWT supplied in the Authorization header of a request is valid.

#### Swagger/OAS

- Automatically generated for the project. Go to [Swagger Index](http://localhost:9000/swagger/index.html) to view.
- Swagger Json is here: [Swagger Json](http://localhost:9000/swagger/oas.json)

#### Health check

- Available at: [health check](http://localhost:9000/health)
(This can also be configured to run on another port)

## Using a Docker image

<https://docs.docker.com/docker-for-windows/install/>

From the `<PROJECT-NAME>/java` folder, build a Docker image using e.g. the command below:

   ```bash
   docker build --tag stacks:1.0 .
   ```

This uses the `Dockerfile` in this folder to generate the Docker image.

If you have an `.m2` directory in the `java/` folder, the Docker build will attempt to copy the files inside the container and use the cached versions.

Once the Docker image is created, you can then run a Docker container based on this image using e.g.

   ```bash
   docker run -p 9000:9000 -e AZURE_APPLICATION_INSIGHTS_INSTRUMENTATION_KEY -e AZURE_COSMOSDB_KEY stacks:1.0
   ```

which passes in the two required environment variables from your own environment.
