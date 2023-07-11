<!-- markdownlint-disable MD041 -->
### @ensono-stacks/logger:winston

<details>
<summary>Add Winston to your project</summary>
Generates a new Nx library which contains a Winston logger instance and associated config.

## Prerequisites

An existing Stacks workspace.

## Usage

```bash
nx g @ensono-stacks/logger:winston
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
| --httpTransportPort | Remote port of the HTTP logging endpoint                         | number  |                 | N/A     |                                  |
| --httpTransportPath | Remote URI of the HTTP logging endpoint                          | string  |                 | N/A     |                                  |
| --httpTransportSSL  | Use SSL for the HTTP logging endpoint                            | boolean | true/false      | false   |                                  |
| --streamPath        | Stream transport path                                            | string  |                 | N/A     |                                  |

### Generator Output

The generator will create a new application within your libs folder with the following structure:

```text
.
├── libs/[libname]
│   ├── src
│   ├── ├── index.ts // Contains the Winston configuration and creates the logger instance
│   ├── ├── index.test.ts // Tests for the logger
│   ├── .eslintrc.json // ESLint config - extends from workspace config
│   ├── jest.config.ts // Jest config - extends from workspace config
│   ├── project.json // Nx config file for the library
│   ├── tsconfig.json // Main Typescript config for the library - extends workspace config & references the below two tsconfig files
│   ├── tsconfig.lib.json // Typescript config for the library's source files (excluding tests)
│   ├── tsconfig.spec.json // Typescript config for the library's test files
│   ├── README.md // Information on the library and how to run scripts
├── jest.config.ts // Workspace-level Jest config - created if this does not already exist
└── jest.preset.ts // Workspace-leve Jest preset that extends `@nx/jest/preset` - created if this does not already exist.

```

Additionally, the following files will be modified

```text
.
├── nx.json // Adds configuration for Jest tests if this has not already been done by another generator
├── package.json // Adds winston as a dependency
└── tsconfig.base.json // Adds new library into `paths` field

```

### Importing the logger into your app

Having created a logger using the above [command](#usage), import the Winston logger instance from the newly created library (the import name can be found within the `tsconfig.base.json` files `paths` field) into your application:

```typescript
import logger from '@workspace-name/mynewlogger'

logger.log({
    level: 'info',
    message: 'I love Ensono Stacks!', 
})
```

To change how Winston is configured, edit the created library:

```typescript title=./libs/mynewlogger/src/index.ts
const logger = winston.createLogger(logConfiguration);

// Custom transport for non-production
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(), 
    })) 
} 
 
export default logger;
```

### Other resources

Documentation for Winston can be found [here](https://github.com/winstonjs/winston).

</details>
