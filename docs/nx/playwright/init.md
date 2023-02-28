### @ensono-stacks/playwright:init

<details>
<summary>Initialises your playwright project with additional stacks configuration</summary>

The _init_ executor initialises your playwright project with additional stacks configuration, providing you with the option to scaffold example Visual regression and Accessibility tests and config. 

## Usage

```bash
nx g @ensono-stacks/playwright:init
```

Upon calling the _init_ generator you will be presented with a number of options:
- What is the name of the project for this component?
    - The name of the existing playwright test app to be enhanced
- Would you like to install the scaffolding for accessibility testing?
    - Whether to install [`@axe-core/playwright`](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md) and configure an example accessibility test
- What type of visual regression tests would you like to use?
    - none: Do not generate visual regression tests
    - native: Generate visual regression tests using Playwrights native [visual comparison api](https://playwright.dev/docs/test-snapshots)
    - applitools: Generate visual regression tests using the [`@applitools/eyes-playwright`](https://www.npmjs.com/package/@applitools/eyes-playwright) plugin and scaffold an example visual regression test batch

### Command line arguments

The following command line arguments are available:

| Option                | Description                                                       | Type      | Accepted Values                           |Default    |
| ---------------       | --------------------------------------------------------------    | ---       | ---                                       | ---       |
| --project             | The name of the existing playwright test app to be enhanced       | boolean   |  true/false                               |           |
| --accessibility       | Whether to configure accessibility tests                          | boolean   | y/n                                       |           |
| --visualRegression    | Visual regression type to configure                               | string    | [choices: "none", "native", "applitools"] | none      |

### Generator Output

#### Default Output
By default the _init_ generator will configure both a baseline playwright configuration and an individual project base playwright configuration.
:::caution

Any existing properties in the _playwright.config.base.ts_ file will have their values overwritten by this generator, please review this file if you have existing configuration which you need to cater for.

:::

```text title="Generated files"
.
├── apps
│   ├── <app-name>-e2e
│   │   ├── src
│   │   │   ├── example.spec.ts #Example tests using playwright
│   │   ├── playwright.config.ts #Example playwright configuration catering for multiple browsers and devices
└──────────
```

:::note

Visit the [`Testing with Playwright`](../../testing/testing_in_nx/playwright_nx.md) documentation for further details!

:::

#### Accessibility Output
Opting to scaffold accessibility testing will add two dependencies to the `package.json`:
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

#### Visual Testing Output
##### Playwright with native visual comparisons
Opting to scaffold *native* visual testing will make a number of amendments to your test projects configuration:
1. [playwright.config.ts snapshot configuration](../../testing/testing_in_nx/playwright_visual_testing#snapshot-configuration): Configuration for your visual tests
2. [playwright-visual-regression.spec.ts](../../testing/testing_in_nx/playwright_visual_testing#sample-tests): Sample test showcasing how to perform visual testing using playwrights native [visual comparison api](https://playwright.dev/docs/test-snapshots).
```text title="Generated files"
.
├── apps
│   ├── <app-name>-e2e
│   │   ├── src
│   │   │   ├── playwright-visual-regression.spec.ts #Example visual test using playwright
└──────────
```
:::note

Visit the [`Playwright with visual comparisons`](../../testing/testing_in_nx/playwright_visual_testing.md) documentation for further details!

:::

##### Playwright with Applitools Eyes
Opting to scaffold visual testing with *applitools* will make a number of amendments to your test projects configuration:
1. [@applitools/eyes-playwright](https://www.npmjs.com/package/@applitools/eyes-playwright): Dependency added to `package.json`
2. [playwright.config.ts project configuration](../../testing/testing_in_nx/playwright_visual_testing_applitools.md#applitools-eyes-with-playwright): Standalone project configuration to isolate visual tests with Applitools Eyes
3. [applitools-eyes-grid.spec.ts](../../testing/testing_in_nx/playwright_visual_testing_applitools.md#sample-tests): Sample test showcasing how to perform visual testing using the Applitools Eyes Grid.
```text title="Generated files"
.
├── apps
│   ├── <app-name>-e2e
│   │   ├── src
│   │   │   ├── applitools-eyes-grid.spec.ts #Example visual test using playwright
└──────────
```
:::note

Visit the [`Playwright with Applitools Eyes`](../../testing/testing_in_nx/playwright_visual_testing_applitools.md) documentation for further details!

:::

</details>