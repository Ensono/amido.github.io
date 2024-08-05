---
id: testing_with_cypress
title: Testing with Cypress
sidebar_label: Testing with cypress
description: Testing with cypress within an NX monorepo
keywords:
  - NX
  - testing
  - cypress
  - cross-browser
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Cypress is a powerful testing framework that has gained popularity for its robust features and ease of use. Developed and maintained by a dedicated community, Cypress offers a comprehensive solution for web automation testing. It focuses on providing a seamless cross-browser experience, allowing developers to write reliable and efficient tests across different browsers. Due to it's popularity we are supporting it as a test framework within Ensono Stacks!

## Getting Started

Upon scaffolding your application with the Cypress testing framework, you will be presented with an example test suite and cypress configuration. The [`@nx/cypress`](https://www.npmjs.com/package/@nx/cypress) NX plugin is used as a base for the Cypress/NX integration. 

## Cypress Configuration

### Base configuration

The base configuration has been created with CI in mind, meaning the default configuration (shared across all projects) considers requirements for reporting and pipeline efficiency out of the box! This is created at the root of the project workspace and is used as the basis for each applications unique configuration. 

```typescript title="cypress.config.base.ts"
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

const appName = process.env.NX_TASK_TARGET_PROJECT as string;
const outputFolderForProject = process.env.CI
  ? `../../test-results/${appName}`
  : 'cypress/test-results';
const baseURL = process.env.BASE_URL || 'http://localhost:4200/';
export const baseConfig: Cypress.ConfigOptions = {
  // Test reporting configured with multiple reporters
  reporter: '../../node_modules/cypress-multi-reporters',
  // Spec: CI/Local (Default logging to console)
  // mocha-junit-reporter: CI (JUnit XML reports for CI reporting)
  // mochawesome: CI (Used for HTML report generation)
  // Reports saved to asset folders to utilise automated 'trashAssets' mechanism
  reporterOptions: {
    reporterEnabled: !process.env.CI
      ? 'spec'
      : 'spec, mocha-junit-reporter, mochawesome',
    mochaJunitReporterReporterOptions: {
      mochaFile: outputFolderForProject.concat(
        '/downloads/junit-report/results-[hash].xml'
      ),
    },
    // Mocha configuration for html reporting 
    mochawesomeReporterOptions: {
      charts: true,
      overwrite: false,
      html: false, // set to false as will be generated during consolidation of json files
      json: true,
      reportDir: outputFolderForProject.concat('/downloads/reports-json-file'),
      reportFilename: '[name].html',
      embeddedScreenshots: true,
      inlineAssets: true,
    },
  },
  // Configuration for e2e tests
  e2e: {
    ...nxE2EPreset(__dirname, { cypressDir: 'cypress' }),
    baseUrl: baseURL,
    // All assets directed into output folder
    screenshotsFolder: outputFolderForProject.concat('/screenshots'),
    videosFolder: outputFolderForProject.concat('/videos'),
    downloadsFolder: outputFolderForProject.concat('/downloads'),
    videoUploadOnPasses: false,
    // Assets, including html reports, trashed before each run
    trashAssetsBeforeRuns: true,
    retries: {
      runMode: process.env.CI ? 2 : 0,
    },
    // Configure cypress grep
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
};
```

### Project based configuration

Within the application where cypress has been added a cypress configuration file for that specific application will have been created. Extending the [base configuration](#base-configuration) this file can be used to add or change the default workspace configuration for cypress! 
See the official [cypress docs](https://docs.cypress.io/guides/references/configuration) for more information on configuring your test project! 

```typescript title="cypress.config.ts"
import { defineConfig } from 'cypress';

import { baseConfig } from '../../cypress.config.base';

export default defineConfig({
  ...baseConfig,
  e2e: {
    ...baseConfig.e2e,
    screenshotOnRunFailure: true,
    video: true,
  },
});
```

## Testing

### Writing tests

When building your Cypress tests it helps to have a version of the application deployed for capturing locators and verifying your tests function as intended.

You can serve your required application to localhost on port 4200 through the following command:

```bash
nx serve <app-name>
```

NX will then build and host your application, from here you can build/run your tests against a usable version of the application

```log title="Example"
nx serve next-app

> nx run next-app:serve:development

  info  - automatically enabled Fast Refresh for 1 custom loader
  event - compiled client and server successfully in 8.5s (166 modules)
  [ ready ] on http://localhost:4200
```


### Running your Cypress tests

Using NX we can very easily run our tests, either for a specific project, or against any affected projects. NX will handle provisioning and tearing down of the web server automatically!
Using the NX ‘affected’ capability allows you to run only the tests within a mono repo where the codebase has changes since the ‘master’ commit. (See the [docs](https://nx.dev/concepts/affected) for more information)


 <Tabs>
  <TabItem value="current" label="Current">

  ```bash
  nx e2e <app-name>
  ```

  </TabItem>
  <TabItem value="affected" label="Affected">

  ```bash
  nx affected:e2e
  ```

  </TabItem>
 </Tabs>

#### Run specific tests

Looking at the following example, we have tagged the test with **@smoke-test** within the test case name

```typescript
it('should be up and running @smoke-test', () => {
  cy.get('#hero').find('span').should('have.text', "You're up and running");
});
```

We utilise [@cypress/grep](https://www.npmjs.com/package/@cypress/grep) to enable you to run this specific test. By specifying the grep parameter with the **@smoke-test** value alongside your run command, this specific test will be executed, similarly, if multiple tests contain **@smoke-test** within their name, they will also be executed. 

```bash
nx e2e <app-name> --env.grep="@smoke-test"
```

## Testing Output

### Viewing your test results

Cypress has many configuration options for test reporting which can be found in [the documentation](https://docs.cypress.io/guides/tooling/reporters).

#### Locally 

Using the scaffolded [base configuration](#base-configuration) all test results will be output to the terminal using cypress **_spec_** reporter, an example output can be seen below:

```bash
  Cypress example tests @example-cypress
    - should take the user to the next steps part of the page when clicking whats next
    √ App should be up and running @smoke
    - App should have 5 learning materials @integration
  1 passing (1s)
  2 pending
  (Results)
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        3                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      2                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     1 second                                                                         │
  │ Spec Ran:     example.cy.ts                                                                    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
====================================================================================================
  (Run Finished)
       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  example.cy.ts                            00:01        3        1        -        2        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:01        3        1        -        2        -

 ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

 >  NX   Successfully ran target e2e for project next-cypress-application (29s)

         With additional flags:
           --env={"grep":"@smoke"}
```

To change the reporter being used locally you can amend the [`cypress.config.ts`](#project-based-configuration) to overwrite the reporter definition in the [cypress.config.base.ts](#base-configuration), view the [Cypress documentation](https://docs.cypress.io/guides/tooling/reporters) for further information! 

### Output in CI

:::info
The following plugins are dependencies for adding cypress to your build and deployment pipelines:

- [`@ensono-stacks/workspace:init`](../../getting_started/workspace/plugin-information.md#generators)
- [`@ensono-stacks/next:init-deployment`](../../getting_started/next/plugin-information.md#ensono-stacksnextinit-deployment)

:::

- Running the [`@ensono-stacks/cypress:init-deployment`](../../getting_started/cypress/plugin-information.md#ensono-stackscypressinit-deployment) generator will configure your taskctl pipelines with the relevant test/reporting tasks.
- Upon a pull request being made this will automatically trigger a build pipeline for your application whereby the e2e tests for the application will be ran.
- As defined in the [base configuration](#base-configuration) all test artefacts are output to `test-results/<app-name\>`

When running in the CI three reporters are utilised:

1. spec: Default cypress console reporting.
2. mocha-junit-reporter: A JUnit-style xml reports which are fed back into CI reports on the test run. Output to `test-results/<app-name\>/downloads/junit-report`.
3. mochawesome: Reports for each test which are used as the basis for html report generation. Output to `test-results/<app-name\>/downloads/reports-json-file`.

**Build summary:** You can view a summary of your build by viewing the pipeline which was ran upon pull request creation.

![Azure Pipeline Summary](/img/azure-test-pipeline-summary-cypress.png)

**Test results:** As part of your generated pipelines test results will be automatically displayed within the summary tab for the build.

![Azure Pipeline Test Results](/img/azure-test-pipeline-test-results-cypress.png)

**Test artefacts:** To download the test artefacts captured by Cypress select the _build_ job on the summary page, within the build log click on the 'artefact produced' link, from here you can then download the 'testresults' folder for the test run. 

![Azure Pipeline Build log](/img/azure-test-pipeline-build-log.png)
