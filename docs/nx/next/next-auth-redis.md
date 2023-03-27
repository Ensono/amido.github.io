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

| Option        | Description                                                 | Type   | Accepted Values | Default         |
| ------------- | ----------------------------------------------------------- | ------ | --------------- | --------------- |
| --project     | The name of the project                                     | string | string          | N/A             |
| --adapterName | Name of the generated Redis adapter library                 | string |                 | next-auth-redis |
| --envVar      | Name of the env var that stores connection string for Redis | string |                 | REDIS_URL       |

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
import { Redis } from "ioredis";
import NextAuth from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";

import { IORedisAdapter } from "@0-5-23-next-with-test-app/next-auth-redis";

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

A final message is provided if the developer would like to run the relevant deployment generator that supports this FE.
`@ensono-stacks/next:next-auth-redis-deployment`.

</details>
