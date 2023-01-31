### @ensono-stacks/rest-client:bump-version

<details>
<summary>Creates new version(s) for an existing client endpoint</summary>
This plugin reads any existing endpoints and creates a new directory for the specified new version with the files contained within the previous version.

## Prerequisites

This generator requires no prerequisites.

## Usage

```bash
nx @ensono-stacks/rest-client:bump-version --endpoint client-endpoint --endpointPath libs --endpointVersion 2
```

### Command line arguments

The following command line arguments are available:

| Option            | Description                                            | Type   | Accepted Values | Default | Required |
| ----------------- | ------------------------------------------------------ | ------ | --------------- | ------- | -------- |
| --endpoint        | The endpoint you want to bump to the specified version | string |                 |         | true     |
| --endpointPath    | The path to your endpoint (parent directory)           | string |                 |         | true     |
| --endpointVersion | The version you want to bump your endpoint             | number |                 |         | true     |

### Generator Output

##### What is the output of the above commands?

```text title="Example of existing file structure"

└── client-endpoint
    └── V1
        ├── index.ts
        ├── index.test.ts
        └── index.types.ts
```

```text title="Example of updated file structure after new files being generated"

└── client-endpoint
    └── V1
        ├── index.ts
        ├── index.test.ts
        └── index.types.ts
    └── V2
        ├── index.ts
        ├── index.test.ts
        └── index.types.ts`
```

</details>
