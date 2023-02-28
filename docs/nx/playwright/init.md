### @ensono-stacks/playwright:init

<details>
<summary>Create a playwright test project for your chosen application</summary>

The _init_ generator creates a playwright project for the application you choose. Additionally it initialises your playwright project with additional stacks configuration and adds playwright tests to your pipeline if present.

## Usage

```bash
nx g @ensono-stacks/playwright:init
```

Upon calling the _init_ generator you will be presented with the following question:
- What app would you like to generate a test project for?
    - The name of the existing application to generate a test project for (named <app-name\>-e2e)

### Command line arguments

The following command line arguments are available:

| Option                | Description                                                       | Type      | 
| ---------------       | --------------------------------------------------------------    | ---       |
| --project             | The name of the application to generate a test project for      | string   |  

### Generator Output

#### Default Output
The _init_ generator will create a new test project for your chosen application containing an example test and predefined configuration for the monorepo and the individual test projects. 
By default the _init_ generator will configure both a baseline playwright configuration and an individual project base playwright configuration.


```text title="Generated files"
.
├── apps
│   ├── <app-name>-e2e
│   │   ├── src
│   │   │   ├── example.spec.ts #Example tests using playwright
│   │   ├── playwright.config.ts #Example playwright configuration catering for multiple browsers and devices
│   │   ├── project.json #Configuration for the project, including various NX targets
│   │   ├── tsconfig.e2e.json #Example playwright configuration catering for multiple browsers and devices
│   │   ├── tsconfig.json #Example playwright configuration catering for multiple browsers and devices
└── playwright.config.base.ts
```

:::note

Visit the [`Testing with Playwright`](../../testing/testing_in_nx/playwright_nx.md) documentation for further details!

:::

</details>