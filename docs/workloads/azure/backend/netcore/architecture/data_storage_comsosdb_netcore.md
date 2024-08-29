---
id: data_storage_cosmosdb_netcore
title: Data Storage - CosmosDB
sidebar_label: Data Storage - CosmosDB
hide_title: true
hide_table_of_contents: true
description: .NET Core REST API application - how to use the Ensono Stacks package for CosmosDB document storage
keywords:
  - .net core
  - rest api
  - cqrs
  - template 
  - cosmos 
  - cosmosdb 
  - data storage 
  - azure 
  - storage 
  - configuration 
  - cosmosdbkey
  - documentsearch
  - sql
  - api
  - repository
  - cosmosdb package
  - dependency injection
  - stacks
---

## Data Storage - CosmosDB

### Summary

This guide provides information on how to use the Ensono Stacks package for CosmosDB document storage.

The focus of this guide is the CosmosDB SQL API, it assumes the reader have prior knowledge about [CosmosDB SQL API](https://docs.microsoft.com/en-us/azure/cosmos-db/sql-query-getting-started) in order to understand the concepts describe thereafter.

It is out of scope for this document to explain what is CosmosDB and it's respective storage models, but instead describe how the package for CosmosDB handles the communication with the server. If you don’t have enough understanding of CosmosDB concepts, please take some time to review the CosmosDB documentation before you continue.

<br />

### Introduction

Most applications requires a persistent data store to keep the application data safe and available for use whenever an operation is executed.

The main storage type used on this project is a document store to persist the domain data, the storage is provided by Azure Cosmos DB SQL API.

<br />

### The problem

Monolith applications generally use a single database to store all the application data, in general, monolith solutions contains a data layer responsible to handle the database communication and data conversion by using an ORM library like Entity Framework, NHibernate or Dapper.

Microservice architecture also requires a data layer, different from monolith applications, each microservice tend have it's own data layer, generating lots of duplicate data access code spread across multiple repositories.

Duplicate data access code will at some point diverge and make each microservice have different features, or same features with different implementations that in most cases will be tightly coupled to the service that created it.

Most of these features created in a data access layer should be well planned, tested and made available to all services in order to have a consistent and reliable approach used by every team, reduce the time needed to implement data access logic and avoid the same pitfalls others might face when starting from scratch.

<br />

### The solution

Azure CosmosDB provides a reliable SDK to communicate with the CosmosDB server, but still require some knowledge from the developer to consume it properly, add proper exception handling and logging.

This package provides a single data access layer implementation that is simple and reusable by multiple services, reducing the amount of boilerplate code and keeping a consistent and well tested library.

The solution is split into two packages, **Ensono.Stacks.Data.Documents** and **Ensono.Stacks.Data.Documents.CosmosDB**.

<br />

### Document Storage

Package **Ensono.Stacks.Data.Documents** contains the interface contracts for data access layers, it will define the operations available and decouple the contracts from the implementation. In the future, if the company decides to use other solutions like MongoDB, Cassandra or similar, will make it smooth to switch between servers without changing the code on services consuming it.

The contracts are defined by two interfaces IDocumentStorage and IDocumentSearch, as below, method signatures were removed for simplicity:

```csharp title="IDocumentStorage"
IDocumentStorage<TEntity, in TEntityIdentityType>
        Task<OperationResult<TEntity>> SaveAsync(TEntityIdentityType identifier, string partitionKey, TEntity document, string eTag);
        Task<OperationResult<TEntity>> GetByIdAsync(TEntityIdentityType identifier, string partitionKey);
        Task<OperationResult> DeleteAsync(TEntityIdentityType identifier, string partitionKey);
```

```csharp title="IDocumentSearch"
IDocumentSearch<TEntity> Task<OperationResult<IEnumerable<TResult>>> Search<TResult, TOrderKey>(
    Expression<Func<TResult, bool>> searchPredicate,
    Expression<Func<TResult, TOrderKey>> orderPredicate = null,
    bool isAscendingOrder = true,
    string partitionKey = null,
    int pageSize = 20,
    int pageNumber = 1
);

Task<OperationResult<IEnumerable<TResult>>> RunSQLQueryAsync<TResult>(
    string sqlQuery,
    Dictionary<string, object> parameters = null,
    string partitionKey = null,
    int? MaxItemCount = null,
    string continuationToken = null
);
```

The operations were decoupled into two interfaces to:

* Segregate Command operations from Read operations, except for GetById that is required for commands that need the full structure stored in DB in order to update it.

* Separation of concerns, some implementations might not provide search capabilities, as it might be offloaded to a Search engine like ElasticSearch instead

* Document databases might have separate storage for search each documents structure based on the search pattern, partition and indexes. In this case the documents stored in the search database will not match the schema of the original entity stored in the domain database.

**It is expected that the implementations of these interfaces are reused between requests, for that reason it will be registered as singletons to improve the performance.**

Applications using the Document Storage does not need to be aware of the implementations, this is why you should only need the **Ensono.Stacks.Data.Documents** namespace where it is being used. Doing so, will make easier to Mock DB dependencies when doing unit tests.

<br />

### CosmosDB Package

The CosmosDB implementation of the document storage is called CosmosDbDocumentStorage and is available in the package Ensono.Stacks.Data.Documents.CosmosDB.

The package makes use of the CosmosDB SDK v3, that contains a few improvements compared to previous version, the most notorious one is the simplicity in the interfaces available, for more details, please check the announcements [here](https://azure.microsoft.com/en-gb/blog/azure-cosmos-dotnet-sdk-version-3-0-now-in-public-preview/).

A few details you should be aware when using the CosmosDB package from Stacks:

* The library use naming convention to map the Aggregate to the CosmosDB collection name(previous known as container), the library will map to the entity type name to a CosmosDB collection with same name, in the example below, the entity type is a Menu (like in a restaurant), a collection with same name should exist in the database(provisioned by DevOps).

    * The collection name is not configurable because the configuration should be valid for any collection, otherwise multiple configuration would be required per table.

    * The package does not create the collection if one does not exist to avoid misconfiguration, which would generate new collections and cause unpredictable behaviours, because the application would continue working, but sending data to wrong collection.

    * Alternatively, you can add an Attribute [Table(“CollectionName”] to the entity class name to map your entity to a collection with different name.

* **CosmosDbDocumentStorage** is registered as a singleton object per collection, this is required in order to better reuse connections when calling CosmosDB resulting in a better performance.

* CosmosDB requires a partition key to store the data, reusing the id as a partition key will make it performant and cheap for writes but will be expensive for reads that does not use the id as parameter.

    * In case the application is heavy on read operations covering multiple partitions, you should consider a materialized collection partitioned and indexed according to the search parameters used for the query. Doing across partition query is an expensive operation and should be avoided.

    * Schema design is out of the scope of this guide, for a better design of your data, please watch this video with CosmosDB design patterns

**Usage:**
When the package is used in the data access layer, as example a repository implementation, the package will make the data access logic simple and clean, off loading all the data access logic to the implemented storage.

```csharp title="MenuRepository"
public class MenuRepository : IMenuRepository
{
    IDocumentStorage<Menu, Guid> documentStorage;

    public MenuRepository(IDocumentStorage<Menu, Guid> documentStorage)
    {
        this.documentStorage = documentStorage;
    }

    public async Task<Menu> GetByIdAsync(Guid id)
    {
        var result = await documentStorage.GetByIdAsync(id, id.ToString());
        return result.Content;
    }

    public async Task<bool> SaveAsync(Menu entity)
    {
        var result = await documentStorage.SaveAsync(entity.Id, entity.Id.ToString(), entity, null);
        return result.IsSuccessful;
    }

    public async Task<bool> DeleteAsync(Guid id)
    {
        var result = await documentStorage.DeleteAsync(id, id.ToString());
        return result.IsSuccessful;
    }
}
```

As seem above, the database implementation shouldn't leak to the repository implementation, making it clean and readable.

Because document stores require a partition key to persist the data, it is required that the caller provides it on every call, in the example above, we are reusing the resource ID as the partition key, depending on the design, you might chose a different partition key that is only known by the application. Make sure you select a partition key that is know at query time, otherwise the application will execute cross partition queries when the partition key is not provided.

<br />

### Dependency Injection

In order to use the right implementation, we need to inject the dependencies in the IoC container before the application starts, the CosmosDB implementation provides an extension method called **AddCosmosDB()** from the namespace **Ensono.Stacks.Data.Documents.CosmosDB.Extensions**, to use it, you just have to make a call to the extension in the dependency registration method of your application, like below:

```csharp
public virtual void ConfigureServices(IServiceCollection services)
{
    services.Configure<CosmosDbConfiguration>(context.Configuration.GetSection("CosmosDB"));
    services.AddCosmosDB();
    services.AddSecrets(); //Required for CosmosDB configuration, see below
}
```

The first like will load the configuration from appsettings.json and bind it to an instance of **CosmosDbConfiguration**, this will be injected in the CosmosDB constructor as `IOptions<CosmosDbConfiguration>`, please see the configuration details below.

The second like adds the **CosmosDbDocumentStorage** as a singleton implementation for `IDocumentStorage<TEntity, in TEntityIdentityType>` and `IDocumentSearch<TEntity>`.

The third line add the dependencies required to resolve password at runtime, password management has been described in the docs here.

<br />

### Configuration

The cosmos DB implementation requires 3 mandatory parameters in order to work properly, these are: AccountUri, DatabaseName and c.

the CosmosDbConfiguration represents these settings in the appssetings.json as a CosmosDB section(default) with the following structure:

```json
{
    "CosmosDb": {
        "DatabaseAccountUri": "https://localhost:8081/",
        "DatabaseName": "Stacks",
        "SecurityKeySecret": {
            "Identifier": "COSMOSDBKEY",
            "Source": "Environment"
        }
    }
}
```

* DatabaseAccountUri: is the url for the database account that host the databases in azure.
* DatabaseName: is the name of the database used by the application. An account might have multiple database, but an application generally uses only one.
* SecurityKeySecret: represents a secret that is stored elsewhere, the value of this secret will be passed to the SDK as SecurityKey for authentication with CosmosDB account.
    * The secret might be hosted anywhere, within the container or on a remote server, for that reason, we use an identifier that will instruct the secret resolver where to find it. The secret management process is describe in the docs with more details.

### Operation Result

Every operation will return an `OperationResult<T>` response,  this is an object that represent the outcome of the operation, in case no exception is thrown, with the following details:

* IsSuccessful: Boolean flag that represents the status of the operation, in case it complete without exception.
* Content: Depending on the type of the operation will return either bool, an entity object or a list of entities.
* Attributes: A dictionary containing implementation specific data to be consumed by the application if required, for CosmosDB implementation, it returns the keys ETag and RequestCharge with it's respective values.

### Unit Tests

The library already have unit tests and integration tests covering the operations implemented. This does not prevent the consumer application of writing their own integration tests.

The tests implemented in the package is to ensure the package works for the intended scenarios, when applications start consuming it, some design decisions might not serialize properly, causing loss of data. For this reason, is really important that the consuming applications have tests converting at least Created+Read test to make sure the contents written to the DB are serialized and de-serialized correctly based on entity structure.
