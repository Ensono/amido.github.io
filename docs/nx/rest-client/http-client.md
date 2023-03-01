### @ensono-stacks/rest-client:http-client

<details>
<summary>Installs and creates a new instance of Axios, ready to generate a client with custom configuration</summary>

This plugin installs Axios and configures a new instance of the provider ready to be customised and consumed via your project.

## Prerequisites

This generator requires no prerequisites.

## Usage

```bash
nx @ensono-stacks/rest-client:http-client --name http-client --directory libs/http-client --importPath @httpClient --tags http_client
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

```text title="Generated files"

└── http-client
    ├── README.md
    └── src
        ├── index.ts
        └── index.test.ts
    ├── tsconfig.json
    ├── tsconfig.lib.json
    ├── project.json
    ├── .eslintrc.json
    ├── jest.config.ts
    └── tsconfig.spec.json
```

```text title="Modified files"
└── root
    ├── tsconfig.base.json
    └── package.json
```

</details>
