---
id: setting_up_cosmos_db_locally_cqrs
title: Cosmos DB Emulator
sidebar_label: Cosmos DB Emulator
hide_table_of_contents: true
---

## Set up Cosmos DB Emulator locally

The Azure Cosmos emulator provides a local environment that emulates the Azure Cosmos DB
service for development purposes. Using the Azure Cosmos emulator, you can develop and test
your application locally, without creating an Azure subscription or incurring any costs.
Latest instruction can be found in the [Microsoft page](https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator?tabs=cli%2Cssl-netstd21)

### Using the Cosmos DB Emulator to run the database locally

1. Download and install the latest version of CosmosDB Emulator. Once it's installed it will be available on

   ```text
   https://localhost:8081/_explorer/index.html
   ```

   You can also find the Emulator from Start Menu and type Azure Cosmos DB Emulator.
   The value for **COSMOSDB_KEY** can be found within the emulator. See Primary Key:

   ![CosmosDB](/img/cosmosdb_emulator_3.png)
   Set the cosmosdb URI, databaseName and key in application.yml file using the value above

   ```yaml
   azure:
     cosmosdb:
       uri: xxxxxx
       database: xxxxxx
       key: xxxxxx
   ```

<br />

### Create the Cosmos DB structure

  Based on the template the Cosmos DB has to contain a fixed structure.

  Create a collection **Stacks** with a container id **menu** and the partition key **/id**.

  Create a database called Stacks for the application, and a database called CosmosDBPackage for the
  integration tests of the CosmosDB package

  ![CosmosDB](/img/cosmosdb_emulator_1.png)

<br />

  The Stacks database should have a container called Menu partitioned by `/id`.

  ![CosmosDB](/img/cosmosdb_emulator_2.png)
