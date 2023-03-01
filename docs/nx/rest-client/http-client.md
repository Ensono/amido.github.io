### @ensono-stacks/rest-client:http-client

<details>
<summary>Installs and creates a new instance of Axios, ready to generate a client with custom configuration</summary>

This plugin installs Axios and configures a new instance of the provider ready to be customised and consumed via your project.

## Usage

```bash
nx g @ensono-stacks/rest-client:http-client
```

### Command line arguments

The following command line arguments are available:

| Option       | Description                                                     | Type    | Accepted Values | Default | Required |
| ------------ | --------------------------------------------------------------- | ------- | --------------- | ------- | -------- |
| --name       | Library name                                                    | string  |                 |         | true     |
| --directory  | Subdirectory inside libs/ where the generated library is placed | string  |                 |         |          |
| --importPath | What import path would you like to use for the library          | string  |                 |         |          |
| --tags       | Add tags to the library (used for linting)                      | string  |                 |         |          |
| --skipFormat | Skip formatting files                                           | boolean |                 | false   |          |

### Generator Output

The http-client will create a new library within your libs folder for the axios http client:
```text title="Generated files"

├── http-client
│   ├──  src
│   │   ├── index.ts
│   │   ├── index.test.ts
│   ├──  README.md
│   ├── tsconfig.json
│   ├── tsconfig.lib.json
│   ├── project.json
│   ├── .eslintrc.json
│   ├── jest.config.ts
└── └── tsconfig.spec.json
```

Additionally, the package.json will be updated with the axios dependency.
```text title="Modified files"
├── root
│   ├── tsconfig.base.json
└── └──package.json
```

In order to import the http-client into your application a new entry for the client is added to the tsconfig.base.json "paths"

```json
"paths": {
      "@<workspace-name>/http-client": [
        "libs/http-client/src/index.ts"
      ]
    }
```

</details>
