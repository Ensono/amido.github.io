### @ensono-stacks/playwright:visualRegression

<details>
<summary>Adds native or cloud based visual regression to your test suite</summary>

The _visualRegression_ generator provides you with the option to scaffold visual regression tests and configuration through a cloud based provider or Playwrights native visual comparison API.

## Usage

```bash
nx g @ensono-stacks/playwright:visualRegression
```

Upon calling the _visualRegression_ generator you will be presented with a number of options:
- What type of visual regression tests would you like to use?
    - native: Generate visual regression tests using Playwrights native [visual comparison api](https://playwright.dev/docs/test-snapshots)
    - applitools: Generate visual regression tests using the [`@applitools/eyes-playwright`](https://www.npmjs.com/package/@applitools/eyes-playwright) plugin and scaffold an example visual regression test batch

### Command line arguments

The following command line arguments are available:

| Option                | Description                                                       | Type      | Accepted Values                           |Default    |
| ---------------       | --------------------------------------------------------------    | ---       | ---                                       | ---       |
| --project             | The name of the existing playwright test app to enhance       | string   |                              |           |
| --visualRegression, -v   | Method used to conduct visual testing                            | string    | [choices: "native", "applitools"] | none      |

### Generator Output

##### Playwright with native visual comparisons
Opting to scaffold *native* visual testing will make a number of amendments to your test projects configuration:
1. [playwright.config.ts snapshot configuration](../../testing/testing_in_nx/playwright_visual_testing#snapshot-configuration): Configuration for your visual tests
2. [playwright-visual-regression.spec.ts](../../testing/testing_in_nx/playwright_visual_testing#sample-tests): Sample test showcasing how to perform visual testing using playwrights native [visual comparison api](https://playwright.dev/docs/test-snapshots).
3. project.json: Additional task set up to enable you to run your visual regression tests using the playwright:jammy container
```text title="Generated files"
.
├── apps
│   ├── <app-name>-e2e
│   │   ├── src
│   │   │   ├── playwright-visual-regression.spec.ts #Example visual test using playwright
├── build
│   ├── azDevOps
│   │   ├── azuredevops-updatesnapshots.yaml #Pipeline to capture and update baseline images within the CI
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