---
id: setting_up_dynamodb_locally_java
title: DynamoDB Emulator
sidebar_label: DynamoDB Emulator
hide_title: false
hide_table_of_contents: false
description: How to set up the DynamoDB Emulator
keywords:
- dynamodb
- emulator
- settings
- template
---

## Introduction

This page is **work in progress** and will be completed as the Stacks DynamoDB support is more fully developed.

## Starting the DynamoDB Emulator

There are two options for running the DynamoDB emulator, these are as follows: -

1. Running as a JAR (requires Java)
2. Running as a Docker image (requires Docker Desktop or alternative container services)

If you would like to run it as a JAR, follow the instructions here: [Deploying DynamoDB locally on your computer](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html)

If you would prefer to use Docker, there is a `docker-compose.yml` file within the `stacks-java-aws-dynamodb` GitHub project. This 
is replicated below for convenience: -

```yaml
version: '3.7'
services:
  dynamodb:
    image:  amazon/dynamodb-local
    container_name: dynamodb-local
    hostname: dynamodb
    volumes:
      -  ~/docker-data/dynamodb-local-data:/home/dynamodblocal/data
    ports:
      - 8000:8000
    command: "-jar DynamoDBLocal.jar -sharedDb -dbPath /home/dynamodblocal/data/"
```

To start the DynamoDB in Docker use the command: -

```bash
docker compose -f docker-compose.yml up
```

which should yield the following output: -

```text
Attaching to dynamodb-local
dynamodb-local  | Initializing DynamoDB Local with the following configuration:
dynamodb-local  | Port:	8000
dynamodb-local  | InMemory:	false
dynamodb-local  | DbPath:	/home/dynamodblocal/data/
dynamodb-local  | SharedDb:	true
dynamodb-local  | shouldDelayTransientStatuses:	false
dynamodb-local  | CorsParams:	*
dynamodb-local  |
```

## DynamoDB Emulator endpoint

Irrespective of the way that the emulator was started there should now be an instance of DynamoDB listening on `localhost` 
at port `8000`.

## Interacting with the DynamoDB Emulator

To interact with the database you will need to have thw AWS CLI application installed. If you do not already have this installed
you can find instructions for doing so here : [Installing the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) 

Once you have the AWS CLI installed it should now be possible to interact with the database. For example, to list the tables 
that have been created in the database use:

```bash
aws dynamodb list-tables --endpoint-url http://localhost:8000
```

## Creating the Stacks Menu table

**NOTE: This section needs updating to provide a more complete data model for Menu; it will at least support basic querying and 
creation of a top level Menu item for the time being. For sub-objects, such as Categories and Items the schema below will
need to be further worked on.**

To create the Menu table (if it doesn't already exist) create a file with the following content in a temporary location and
name it **Menu.dynamodb.json**: -

```yaml
{
        "AttributeDefinitions": [
            {
                "AttributeName": "id",
                "AttributeType": "S"
            }
        ],
        "TableName": "Menu",
        "KeySchema": [
            {
                "AttributeName": "id",
                "KeyType": "HASH"
            }
        ],
        "ProvisionedThroughput": {
            "ReadCapacityUnits": 1,
            "WriteCapacityUnits": 1
        }
}
```

Create the table in DynamoDB using the following command: -

```bash
aws dynamodb create-table --cli-input-json file://Menu.dynamodb.json --endpoint-url http://localhost:8000
```

If you now list the tables it should return the name of the table just created (e.g. Menu): -

```bash
aws dynamodb list-tables --endpoint-url http://localhost:8000 | cat

{
    "TableNames": [
        "Menu"
    ]
}
```

After data has been added to the Menu table using the workload APIs it is possible to scan the records using the following command: -

```bash
aws dynamodb scan --consistent-read --table-name Menu --endpoint-url http://localhost:8000 | cat

{
    "Items": [
        {
            "name": {
                "S": "Test Menu 1"
            },
            "description": {
                "S": "Test menu no. 1"
            },
            "id": {
                "S": "7a994352-dc9e-4b11-8c0f-36792489f112"
            },
            "categories": {
                "L": [
            ...
```

Additional [DynamoDB API query examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html) can be found online. 

## Executing Stacks Workload using DynamoDB rather than CosmosDB

TODO: **Move this to a better area once the DynamoDB work is completed**

There are a few steps required to use DynamoDB rather than CosmosDB: -

1. Ensure that the module `stacks-aws-dynamodb` is present (and version number correct( in the **dynamodb** `pom.xml` (section profile[id='dynamodb'] > dependencies > dependency)
   1. To get the current WIP version of the module run the following commands:
      1. `git clone https://github.com/amido/stacks-java-aws-dynamodb.git`
      2. `mvn clean install`
2. Check that the endpoint specified in `application-dynamodb.yml` is correct (local or pointing at AWS per requirements)
3. Switch off the CosmosDB profile and switch on the DynamoDB profile when starting the workload

The current definition of the profile in (for example) the stacks-cqrs-with-events project `pom.xml` needs to be as follows:

```xml
<profile>
  <id>dynamodb</id>
  <properties>
    <dynamodb.profile.name>dynamodb</dynamodb.profile.name>
  </properties>
  <dependencies>
    <dependency>
      <groupId>com.amido.stacks.modules</groupId>
      <artifactId>stacks-aws-dynamodb</artifactId>
      <version>${stacks.aws.dynamodb.version}</version>
    </dependency>
  </dependencies>
</profile>
```

To start the application either use `sh run_scenario.sh` and pick the required features, or run the command: -

```bash
mvn clean spring-boot:run -Pazure,aws,dynamodb,servicebus,-cosmosdb
```

Remember that Cosmos DB and DynamoDB are mutually exclusive, so only use one or the other.
