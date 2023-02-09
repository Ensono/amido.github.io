### @ensono-stacks/logger:winston

<details>
<summary>Add Winston to your project</summary>
Generates a new Nx library which contains a Winston logger instance and associated config.

## Prerequisites

An existing Stacks workspace.

## Usage

```bash
nx @ensono-stacks/logger:winston
```

### Command line arguments

The following command line arguments are available:

| Option              | Description                                                      | Type    | Accepted Values | Default | Available in interactive prompt? |
|---------------------|------------------------------------------------------------------|---------|-----------------|---------|----------------------------------|
| --name              | Name of the generated library                                    | string  |                 | N/A     | Yes                              |
| --tags              | Add tags to the project (used for linting)                       | string  |                 | N/A     |                                  |
| --directory         | Directory where the project is placed (within Nx libs directory) | string  |                 | N/A     |                                  |
| --skipFormat        | Skip formatting files                                            | boolean | true/false      | false   |                                  |
| --logLevelType      | The type of log levels that will be used                         | enum    | cli/syslog/npm  | npm     | Yes                              |
| --consoleLogs       | Output logs to the console                                       | boolean | true/false      | false   |                                  |
| --fileTransportPath | File path used for logs transport                                | string  |                 | N/A     |                                  |
| --httpTransport     | Add a http transport                                             | boolean | true/false      | false   |                                  |
| --httpTransportHost | Remote host of the HTTP logging endpoint                         | string  |                 | N/A     |                                  |
| --httpTransportPort | Remote port of the HTTP logging endpoint                         | string  |                 | N/A     |                                  |
| --httpTransportPath | Remote URI of the HTTP logging endpoint                          | string  |                 | N/A     |                                  |
| --httpTransportSSL  | Use SSL for the HTTP logging endpoint                            | boolean | true/false      | false   |                                  |
| --streamPath        | Stream transport path                                            | string  |                 | N/A     |                                  |

### Generator Output
##### What is the output of the above commands?

```text title="Files generated"
.
├── libs/[libname]
│   ├── src
│   ├── ├── index.ts
│   ├── ├── index.test.ts
│   ├── .eslintrc.json
│   ├── jest.config.ts
│   ├── project.json
│   ├── tsconfig.json
│   ├── tsconfig.lib.json
│   ├── tsconfig.spec.json
│   ├── README.md
├── jest.config.ts
└── jest.preset.ts

```

```text title="Files modified"
.
├── package.json - adds winston as a dependency
└── tsconfig.base.json - adds new library into `paths` field

```

### Other resources

Documentation for Winston can be found [here](https://github.com/winstonjs/winston).

</details>