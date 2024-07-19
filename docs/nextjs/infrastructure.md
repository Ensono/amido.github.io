---
id: infrastructure
title: Infrastructure
sidebar_label: Infrastructure
description: Using Ensono Stacks with NextJs Authentication and Session Management
keywords:
  - Nx
  - monorepo
  - stacks
  - Generator
  - Executor
  - ensono
---

## How to enable Redis for Next Auth

If you wish to use Redis for authentication, please ensure that the variables within `~/build/azDevOps/azure/pipeline-vars.yml` relating to redis have been populated; see below for more details:

```yaml
- name: create_redis
  value: true
- name: redis_resource_group_name
  value: yourRGName
- name: maxmemory_policy
  value: allkeys-lru
- name: sku_name
  value: Basic
```

To enable redis, `create_redis` must always be true. `redis_resource_group_name` should be an existing resource group that you wish for redis to be created in. `maxmemory_policy` and `sku_name` should be populated with your specific values, these values can be:

| Option             | Description                                       | Type   | Accepted Values                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Default       | Comment                                                                                     |
| ------------------ | ------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------- |
| `sku_name`         | The SKU Redis will use, and the features included | string | The provider to be installed                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `Basic`       | [View all available options here](https://azure.microsoft.com/en-us/pricing/details/cache/) |
| `maxmemory_policy` | Policy redis will enforce on data stored          | string | <ul><li>`volatile-lru`: The default eviction policy. It removes the least recently used key out of all the keys with an expiration set.</li><li>`allkeys-lru`: Removes the least recently used key.</li><li>`volatile-random`: Removes a random key that has an expiration set.</li><li>`allkeys-random`: Removes a random key.</li><li>`volatile-ttl`: Removes the key with the shortest time to live based on the expiration set for it.</li><li>`noeviction`: No eviction policy. Returns an error message if you attempt to insert data.</li><li>`volatile-lfu`: Evicts the least frequently used keys out of all keys with an expire field set.</li><li>`allkeys-lfu`: Evicts the least frequently used keys out of all keys.</li></ul> | `allkeys-lru` |                                                                                             |
