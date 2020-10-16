---
id: cosmosdb_configuration_netcore
title: CosmosDB Configuration
---

## Configure Cosmos DB Collection for Stacks in Cosmos Db Emulator

<br />

1. A database called Stacks for the application, and a database called CosmosDBPackage for the integration tests of the CosmosDB package (Temporary, until we split the solution on it's own repository)

![CosmosDB](/img/cosmosdb_emulator_1.png)

<br />

2. The Stacks database should have a container called Menu partitioned by `/id`.

![CosmosDB](/img/cosmosdb_emulator_2.png)