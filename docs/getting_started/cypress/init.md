<!-- markdownlint-disable MD041 -->

### @ensono-stacks/cypress:init {#ensono-stacks-cypress-init}

<details>
<summary>Create a cypress test project for your chosen application</summary>

The _init_ generator adds cypress e2e tests to the application you choose.

## Usage

```bash
nx g @ensono-stacks/cypress:init
```

Upon calling the _init_ generator you will be presented with the following question:

- What app would you like to generate a test project for?
- The name of the existing application to generate a test project for

### Command line arguments

The following command line arguments are available:

| Option    | Description                                                | Type   |
| --------- | ---------------------------------------------------------- | ------ |
| --project | The name of the application to generate a test project for | string |

### Generator Output

The _init_ generator will create a new test project within your chosen application containing an example test and predefined configuration for the monorepo and the individual test project.

```text title="Generated files"
.
├── apps
│   ├── <app-name>
│   │   ├── cypress
│   │   │   ├── e2e
│   │   │   │   ├── example.cy.ts #Example tests using cypress
│   │   │   ├── fixtures
│   │   │   │   ├── example.json #Example fixture/test data
│   │   │   ├── support
│   │   │   │   ├── commands.ts #Example custom commands for cypress
│   │   │   │   ├── e2e.ts #Configuration for cypress and test reporting
│   │   │   ├── tsconfig.json #Typescript configuration for cypress
│   │   ├── project.json #Updated with target for cypress and reporting
│   │   ├── tsconfig.json #Typescript configuration updated for cypress exclusions
└── cypress.config.base.ts #Shared cypress configuration across projects
```

:::note

Visit the [`Testing with cypress`](../../testing/testing_in_nx/cypress_nx.md) documentation for further details!

:::

</details>
