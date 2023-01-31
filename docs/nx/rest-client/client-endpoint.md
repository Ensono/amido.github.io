### @ensono-stacks/rest-client:client-endpoint

<details>
<summary>Add Axios HTTP methods to your existing application</summary>

This plugin gives you choice of selecting from the HTTP methods using Axios as the provider for setting up the initial building blocks of your new endpoint.

## Prerequisites

This generator requires no prerequisites.

## Usage

```bash
nx @ensono-stacks/rest-client:client-endpoint --name client-endpoint --directory libs --endpointVersion 2 --envVar API_URL --httpClient @ensono-stacks/http-clients --methods get post patch --tags client_endpoint
```

### Command line arguments

The following command line arguments are available:

| Option            | Description                                                | Type    | Accepted Values                              | Default         | Required |
| ----------------- | ---------------------------------------------------------- | ------- | -------------------------------------------- | --------------- | -------- |
| --name            | Library name                                               | string  |                                              |                 | true     |
| --directory       | A directory where the endpoint is placed                   | string  |                                              |                 | true     |
| --endpointVersion | The version of the endpoint                                | integer |                                              | default-integer | true     |
| --envVar          | The name of the API url environment variable               | string  |                                              |                 | true     |
| --httpClient      | The import path of the http-client used in the application | string  |                                              |                 | true     |
| --methods         | Client methods to generate                                 | string  | get, post, patch, put, delete, head, options |                 | true     |
| --tags            | Add tags to the library (used for linting)                 | string  |                                              |                 |          |

### Generator Output

##### What is the output of the above commands?

```text title="Example of files being generated"

└── libs
    └── client-endpoint
        └── V1
            ├── index.ts
            ├── index.test.ts
            └── index.types.ts
└── .env
```

</details>
