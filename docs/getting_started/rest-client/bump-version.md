<!-- markdownlint-disable MD041 -->
### @ensono-stacks/rest-client:bump-version

<details>
<summary>Creates new version(s) for an existing client endpoint</summary>
This plugin reads any existing endpoints and creates a new directory for the specified new version with the files contained within the previous version.

## Prerequisites

This generator requires a _client-endpoint_ project to be available.

## Usage

```bash
nx g @ensono-stacks/rest-client:bump-version
```

### Command line arguments

The following command line arguments are available:

| Option            | Description                                                                                   | Type   | Accepted Values | Default | Required |
| ----------------- | --------------------------------------------------------------------------------------------- | ------ | --------------- | ------- | -------- |
| --name            | The endpoint name you want to bump                                                            | string |                 |         | true     |
| --directory       | Subdirectory inside libs/ where the generated endpoint is placed                              | string |                 |         |          |
| --endpointVersion | The version you want to bump your endpoint. Omitting this value will bump latest version + 1. | number |                 |         |          |

### Generator Output

The generator will take a copy of your **latest** endpoint and bump it to the next version (unless overridden through the --endpointVersion argument)

```text title="V1 endpoint"

├── client-endpoint
│   ├── v1
│   │   ├── README.md
│   │   │   ├──  src
│   │   │   │   ├── index.ts
│   │   │   │   ├── index.test.ts
│   │   │   │   ├── index.types.ts
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   ├── project.json
│   │   │   ├── .eslintrc.json
│   │   │   ├── jest.config.ts
└───└───└───└── tsconfig.spec.json
```

Once the `bump-version` generator has been used, your library structure will look similar to the following:

```text title="Bumped endpoint structure"

├── client-endpoint
│   ├── v1
│   │   ├── [...]
│   ├── v2
│   │   ├── README.md
│   │   │   ├──  src
│   │   │   │   ├── index.ts
│   │   │   │   ├── index.test.ts
│   │   │   │   ├── index.types.ts
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   ├── project.json
│   │   │   ├── .eslintrc.json
│   │   │   ├── jest.config.ts
└───└───└───└── tsconfig.spec.json
```

In order to import the bumped client-endpoint into your application a new entry for the client is added to the tsconfig.base.json "paths"

```json
"paths": {
      "@<workspace-name>/client-endpoint/v2": [
        "libs/client-endpoint/v2/src/index.ts"
      ]
    }
```

</details>
