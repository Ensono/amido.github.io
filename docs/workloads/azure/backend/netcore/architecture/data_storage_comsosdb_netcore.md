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

This guide explains how to use the Ensono Stacks package for CosmosDB document storage with .NET Core REST API applications.

### Introduction

Applications need a persistent data store. This project uses Azure Cosmos DB SQL API for document storage.

### The Problem

Monolith applications use a single database, while microservices have separate data layers, leading to duplicate and inconsistent data access code.

### The Solution

The Ensono Stacks package provides a reusable data access layer for CosmosDB, reducing boilerplate code and ensuring consistency.

### Document Storage

The Ensono Stacks package defines abstractions for data access:

```csharp
IDocumentStorage<TEntity, in TEntityIdentityType>
    Task<OperationResult<TEntity>> SaveAsync(TEntityIdentityType identifier, string partitionKey, TEntity document, string eTag);
    Task<OperationResult<TEntity>> GetByIdAsync(TEntityIdentityType identifier, string partitionKey);
    Task<OperationResult> DeleteAsync(TEntityIdentityType identifier, string partitionKey);
```

```csharp
IDocumentSearch<TEntity>
    Task<OperationResult<IEnumerable<TResult>>> Search<TResult, TOrderKey>(Expression<Func<TResult, bool>> searchPredicate, Expression<Func<TResult, TOrderKey>> orderPredicate = null, bool isAscendingOrder = true, string partitionKey = null, int pageSize = 20, int pageNumber = 1);
    Task<OperationResult<IEnumerable<TResult>>> RunSQLQueryAsync<TResult>(string sqlQuery, Dictionary<string, object> parameters = null, string partitionKey = null, int? MaxItemCount = null, string continuationToken = null);
```

### CosmosDB Implementation

The Ensono Stacks package implements the document storage using CosmosDB SDK v3.

### Usage

Example repository implementation:

```csharp
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

### Dependency Injection

Register the CosmosDB implementation in the IoC container:

```csharp
public virtual void ConfigureServices(IServiceCollection services)
{
    services.Configure<CosmosDbConfiguration>(context.Configuration.GetSection("CosmosDB"));
    services.AddCosmosDB();
    services.AddSecrets();
}
```

### Configuration

Example `appsettings.json` configuration:

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

### Operation Result

Operations return an `OperationResult<T>` with:

- `IsSuccessful`: Boolean flag indicating success.
- `Content`: The result content.
- `Attributes`: Additional data like `ETag` and `RequestCharge`.

### Unit Tests

Ensure your application has tests to verify data serialization and deserialization.
