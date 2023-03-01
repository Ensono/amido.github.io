### @ensono-stacks/rest-client:bump-version

<details>
<summary>Creates new version(s) for an existing client endpoint</summary>
This plugin reads any existing endpoints and creates a new directory for the specified new version with the files contained within the previous version.

## Prerequisites

This generator requires a _client-endpoint_ project to be available.

## Usage

```bash
nx @ensono-stacks/rest-client:bump-version --name client-endpoint --directory libs --endpointVersion 2
```

### Command line arguments

The following command line arguments are available:

| Option            | Description                                                                                   | Type   | Accepted Values | Default | Required |
| ----------------- | --------------------------------------------------------------------------------------------- | ------ | --------------- | ------- | -------- |
| --name            | The endpoint name you want to bump                                                            | string |                 |         | true     |
| --directory       | Subdirectory inside libs/ where the generated endpoint is placed                              | string |                 |         |          |
| --endpointVersion | The version you want to bump your endpoint. Omitting this value will bump latest version + 1. | number |                 |         |          |

### Generator Output

```text title="Generated files"

└── client-endpoint
    └── v2
        ├── README.md
            └── src
                ├── index.ts
                └── index.test.ts
                └── index.types.ts
            ├── tsconfig.json
            ├── tsconfig.lib.json
            ├── project.json
            ├── .eslintrc.json
            ├── jest.config.ts
            └── tsconfig.spec.json
```

```text title="Modified files"
└── root
    └── tsconfig.base.json
```

```text title="Updated file structure after new files are generated"

└── client-endpoint
    └── v1
        ├── README.md
            └── src
                ├── index.ts
                └── index.test.ts
                └── index.types.ts
            ├── tsconfig.json
            ├── tsconfig.lib.json
            ├── project.json
            ├── .eslintrc.json
            ├── jest.config.ts
            └── tsconfig.spec.json
    └── v2
        ├── README.md
            └── src
                ├── index.ts
                └── index.test.ts
                └── index.types.ts
            ├── tsconfig.json
            ├── tsconfig.lib.json
            ├── project.json
            ├── .eslintrc.json
            ├── jest.config.ts
            └── tsconfig.spec.json
```

</details>
