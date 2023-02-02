### @ensono-stacks/playwright:init

<details>
<summary>Initialises your playwright project with additional stacks configuration</summary>

The _init_ executor initialises your playwright project with additional stacks congiguration, providing you with the option to scaffold example Visual regression and Accessibility tests and config. 

## Usage

```bash
nx g @ensono-stacks/playwright:init
```

Upon calling the _init_ generator you will be presented with a number of options:
- What is the name of the project for this component?
    - The name of the existing playwright test app to be enhanced
- Would you like to install the scaffolding for accessibility testing?
    - Whether to install [`@axe-core/playwright`](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md) and configure an example accesibility test
- What type of visual regression tests would you like to use?
    - none: Do not generate visual regression tests
    - native: Generate visual regression tests using Playwrights native [visual comparison api](https://playwright.dev/docs/test-snapshots)
    - applitools: Generate visual regression tests using the [@applitools/eyes-playwright](https://www.npmjs.com/package/@applitools/eyes-playwright) plugin and scaffold an example visual regression test batch

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
If opting to scaffold accessibility .... complete this

:::note

Visit the [`Accessibility Testing`](../../testing/testing_in_nx/playwright_accessibility_testing.md) documentation for further details!

:::

#### Visual Testing Output

:::note

Visit the [`Playwright with visual comparisons`](../../testing/testing_in_nx/playwright_visual_testing.md) documentation for further details!

:::

:::note

Visit the [`Playwright with Applitools Eyes`](../../testing/testing_in_nx/playwright_visual_testing_applitools.md) documentation for further details!

:::

##### What is the output of the above commands?
Will it create new files, will it manipulate existing ones?


```text title="Example of files being generated"
.
├── main folder created
│   ├── file which gets created
│   ├── second file which gets created
└── second folder created
```

</details>