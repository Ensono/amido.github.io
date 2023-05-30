<!-- markdownlint-disable MD041 -->
### @ensono-stacks/cypress:accessibility

<details>
<summary>Adds axe accessibility tests to your test project</summary>

The _accessibility_ generator installs the required plugins for conducting accessibility testing with cypress. Additionally, this will configure your test project to enable proper test reporting from `axe` while providing you with an example set of test cases.

## Usage

```bash
nx g @ensono-stacks/cypress:accessibility
```

### Command line arguments

The following command line arguments are available:

| Option                | Description                                                       | Type      | 
| ---------------       | --------------------------------------------------------------    | ---       | 
| --project -p             | The name of the test project to add accessibility tests to       | string  | 

### Generator Output

Scaffolding accessibility testing will add two dependencies to the `package.json`:

1. [`axe-core`](https://www.npmjs.com/package/axe-core) - The accessibility test engine
2. [`cypress-axe`](https://www.npmjs.com/package/cypress-axe) - Cypress integration with the accessibility test engine

Additionally, an example accessibility test will be generated, showcasing how to utilise _axe_ to scan your application for accessibility violations:

```text title="Generated files"
.
├── apps
│   ├── <app-name>
│   │   ├── cypress
│   │   │   │   ├── support
│   │   │   │   │   ├── e2e.ts #Terminal logging function configured
│   │   │   │   ├── e2e
│   │   │   │   │   ├── axe-accessibility.cy.ts #Example accessibility test using cypress
│   │   ├── cypress.config.js #setupNodeEvents configured for logging with terminal logging function
├──   tsconfig.cy.json #cypress-axe declared as a type
└──────────
```

:::note

Visit the [`Accessibility Testing`](../../testing/testing_in_nx/cypress_accessibility_testing.md) documentation for further details!

:::

</details>
