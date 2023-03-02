<!-- markdownlint-disable MD041 -->
### @ensono-stacks/next:next-auth-redis

<details>
<summary>Add Redis for session management to your Next application</summary>

The next-auth-redis generator will add Redis for session management into your existing Next app with Next-auth.


## Prerequisites

An existing [Next](https://nextjs.org/) application with Next-auth. Use the `@ensono-stacks/next:next-auth` generator to add this into your application

## Usage

```bash
nx g @ensono-stacks/next:next-auth-redis
```

### Command line arguments

The following command line arguments are available:

| Option    | Description           | Type      | Accepted Values   |Default            |
| ---       | -------------------   | ---       | ---               | ---               |
| --project | The name of the project  | string   |  string       | N/A              |
| --adapterName | Name of the generated Redis adapter library  | string    |                | next-auth-redis     |
| --envVar | Name of the env var that stores connection string for Redis  | string    |                  | REDIS_URL     |

### Generator Output

A new redis library will be added to your `libs` folder with the following structure:

```bash
libs
│   next-auth-redis
│   ├──  src
│   │   ├── index.ts       #All code required for session management with Redis
│   │   ├── index.test.ts  #Unit tests using 'ioredis-mock' to mock Redis functions.
│   ├──  README.md
│   ├── tsconfig.json
│   ├── tsconfig.lib.json
│   ├── project.json
│   ├── .eslintrc.json
│   ├── jest.config.ts
└── └── tsconfig.spec.json
```

In order for Redis to be used within next-auth a new entry for the redis library is added to the tsconfig.base.json "paths"

```json
"paths": {
      "@<workspace-name>/next-auth-redis": [
        "libs/next-auth-redis/src/index.ts"
      ]
    }
```

Your `[...nextauth].ts` file within the Next application will be updated to use the new Redis adapter:

```typescript
import { Redis } from 'ioredis';
import NextAuth from 'next-auth';
import AzureADProvider from 'next-auth/providers/azure-ad';

import { IORedisAdapter } from '@0-5-23-next-with-test-app/next-auth-redis';

const nextAuth = NextAuth({
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
      tenantId: process.env.AZURE_AD_TENANT_ID,
    }),
  ],
  adapter: IORedisAdapter(new Redis(process.env.REDIS_URL)),
});

export default nextAuth;
``` 

#### Build and Deployment updates

When infrastructure is detected for the application, these files will be enhanced to cater for Redis:

- "app-name"/build/values[-prod].yaml files will have 3 new entries added for redis

```yaml
redisURL: ''
nextAuthSecret: ''
nextAuthURL: <app-name>.<internal/external domain>
```

- "app-name"/terraform/main.tf will have a new azurerm_redis_cache resource added. The variables.tf file will have these corresponding variables defined

```typescript
resource "azurerm_redis_cache" "default_primary" {
  name                = var.redis_name
  location            = var.redis_resource_group_location
  resource_group_name = var.redis_resource_group_name
  capacity            = var.redis_capacity
  family              = var.redis_family
  sku_name            = var.redis_sku_name
  minimum_tls_version = var.minimum_tls_version
}
```

- "app-name"/terraform/[prod/nonprod].tfvars will have additional variables added.

```typescript
redis_name                    = "<company>-<domain>-<prod/nonprod>-<cloud region>-<business component>"
redis_resource_group_location = "%REPLACE%"
redis_resource_group_name     = "<company>-<domain>-<prod/nonprod>-<cloud region>-<business component>"
```

:::warning
Be sure to update the redis_resource_group_location value
:::

- "app-name"/terraform/outputs.tf will have the redis_connection_string added

```typescript
output "redis_connection_string" {
  sensitive = true
  value     = "rediss://:${azurerm_redis_cache.default_primary.primary_access_key}@${azurerm_redis_cache.default_primary.hostname}:${azurerm_redis_cache.default_primary.ssl_port}"
}
```

- "app-name"/.env.local will have the REDIS_URL env variable added and set

```typescript
REDIS_URL=localhost:6379
```

- "app-name"/project.json will have the helm-upgrade commands updated to use the NEXTAUTH_SECRET

```typescript
"helm-upgrade": {
      "executor": "nx:run-commands",
      "options": {
        "commands": [
          {
            "command": "helm upgrade [... unchanged ...] --set nextAuthSecret=\\\"$NEXTAUTH_SECRET\\\"",
            "forwardAllArgs": false
          }
        ],
        "cwd": "apps/baseline-next-app/build/terraform"
      },
      "configurations": {
        "prod": {
          "commands": [
            {
              "command": "helm upgrade [... unchanged ...] --set nextAuthSecret=\\\"$NEXTAUTH_SECRET\\\"",
              "forwardAllArgs": false
            }
          ]
        }
      }
```

:::warning
For Azure DevOps, the **NEXTAUTH_SECRET** needs to be added to the <company\>-<component\>-<domain\>-nonprod and <company\>-<component\>-<domain\>-prod' variable groups
:::

</details>
