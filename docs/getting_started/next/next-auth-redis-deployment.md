<!-- markdownlint-disable MD041 -->

### @ensono-stacks/next:next-auth-redis-deployment

<details>
<summary>Configure Deployment & Infra to support Redis in your Next application</summary>

The next-auth-redis-deployment generator will add required Redis config into your existing Next app with Next-auth.

## Prerequisites

An existing [Next](https://nextjs.org/) application with Next-auth. Use the `@ensono-stacks/next:next-auth` generator to add this into your application

## Usage

```bash
nx g @ensono-stacks/next:next-auth-redis-deployment
```

### Command line arguments

The following command line arguments are available:

| Option    | Description             | Type   | Accepted Values | Default |
| --------- | ----------------------- | ------ | --------------- | ------- |
| --project | The name of the project | string | string          | N/A     |

### Generator Output

When infrastructure is detected for the application, these files will be enhanced to cater for Redis:

- "app-name"/build/values[-prod].yaml files will have 3 new entries added for redis

```yaml
redisURL: ""
nextAuthSecret: ""
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
redis_name =
  "<company>-<domain>-<prod/nonprod>-<cloud region>-<business component>";
redis_resource_group_location = "%REPLACE%";
redis_resource_group_name =
  "<company>-<domain>-<prod/nonprod>-<cloud region>-<business component>";
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
For Azure DevOps, the **NEXTAUTH_SECRET** needs to be added to the `<company\>-<component\>-<domain\>-nonprod` and `<company\>-<component\>-<domain\>-prod`' variable groups
:::

</details>
