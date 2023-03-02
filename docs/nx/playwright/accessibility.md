<!-- markdownlint-disable MD041 -->
### @ensono-stacks/playwright:accessibility

<details>
<summary>Adds axe accessibility tests to your test project</summary>

The _accessibility_ generator installs [`@axe-core/playwright`](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md) and configures an example accessibility test

## Usage

```bash
nx g @ensono-stacks/playwright:accessibility
```

### Command line arguments

The following command line arguments are available:

| Option                | Description                                                       | Type      | 
| ---------------       | --------------------------------------------------------------    | ---       | 
| --project -p             | The name of the test project to add accessibility tests to       | string  | 

### Generator Output

Scaffolding accessibility testing will add two dependencies to the `package.json`:

1. [`@axe-core/playwright`](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md) - The accessibility test engine
2. [`axe-result-pretty-print`](https://www.npmjs.com/package/axe-result-pretty-print) - Result formatter

Additionally, an example accessibility test will be generated, showcasing how to utilise both _axe_ and _axe-result-pretty-print_ to scan your application for accessibility violations:

```text title="Generated files"
.
├── apps
│   ├── <app-name>-e2e
│   │   ├── src
│   │   │   ├── axe-accessibility.spec.ts #Example accessibility test using playwright
└──────────
```

:::note

Visit the [`Accessibility Testing`](../../testing/testing_in_nx/playwright_accessibility_testing.md) documentation for further details!

:::

</details>
