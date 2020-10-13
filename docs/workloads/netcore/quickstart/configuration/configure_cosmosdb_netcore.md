---
id: configure_cosmosdb_netcore
title: Configure Cosmos DB
sidebar_label: Cosmos DB
---


The application is currently configured to work with the Azure environment.

It uses an Azure **CosmosDB** database to store the example application data.
There is a corresponding environment variable that needs to be set to interact with CosmosDB:

```text
COSMOSDB_KEY
```

For Unix systems, set as additional variable within e.g. `~/.profile` or `/etc/profile`.

For Windows, open System Properties then select the Advanced tab, then click on the Environment Variables button and add the new parameter.

Note: For running on local environments, you can use the [Cosmos DB emulator](https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator?tabs=ssl-netstd21) (CosmosDB Emulator has a known fixed key).

If not running locally, you additionally need to set the CosmosDB URI parameter `DatabaseAccountUri` within the
file `<PROJECT-NAME>/src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json`:

```text
"DatabaseAccountUri": "https://REPLACE-ME-WITH-COSMOSDB.documents.azure.com:443/"
```

