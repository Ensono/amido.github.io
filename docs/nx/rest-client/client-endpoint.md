### @ensono-stacks/rest-client:client-endpoint

<details>
<summary>Add Axios HTTP methods to your existing application</summary>

This plugin gives you choice of selecting from the HTTP methods using Axios as the provider for setting up the initial building blocks of your new endpoint.

## Prerequisites

This generator requires a _http-client_ project to be available.

## Usage

```bash
nx @ensono-stacks/rest-client:client-endpoint
```

### Command line arguments

The following command line arguments are available:

| Option            | Description                                                                                    | Type   | Accepted Values                              | Default | Required |
| ----------------- | ---------------------------------------------------------------------------------------------- | ------ | -------------------------------------------- | ------- | -------- |
| --name            | Library name                                                                                   | string |                                              |         | true     |
| --httpClient      | The import path of the previously generated http-client used in the application                | string |                                              |         | true     |
| --envVar          | The name of the API url environment variable                                                   | string |                                              | API_URL | true     |
| --endpointVersion | The version of the endpoint                                                                    | number |                                              | 1       | true     |
| --methods         | List of HTTP methods to be generated. Choose from get, post, patch, put, delete, head, options | array  | get, post, patch, put, delete, head, options |         | true     |
| --directory       | Subdirectory inside libs/ where the generated library placed                                   | string |                                              |         |          |
| --tags            | Add tags to the project (used for linting)                                                     | string |                                              |         |          |

### Generator Output

The client-endpoint will create a new library within your libs folder, using your answer to the 'What is the import path of your previously generated http-client library?' to import the previously created http-client into your client endpoint: 

```text title="Example of files being generated"

└── libs
│   ├── client-endpoint
│   │   ├── V1
│   │   │   ├── README.md
│   │   │   ├── src
│   │   │   │   ├── index.ts
│   │   │   │   ├── index.test.ts
│   │   │   │   ├── index.types.ts
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   ├── project.json
│   │   │   ├── .eslintrc.json
│   │   │   ├── jest.config.ts
└───└───└───└── tsconfig.spec.json
└── .env.local
```
Be sure to add the API_URL as an environment variable to the created .env.local file for local development 

In order to import the client-endpoint into your application a new entry for the client is added to the tsconfig.base.json "paths"

```json
"paths": {
      "@<workspace-name>/client-endpoint/v1": [
        "libs/client-endpoint/v1/src/index.ts"
      ]
    }
```

</details>
