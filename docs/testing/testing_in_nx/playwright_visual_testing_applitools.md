---
id: playwright_visual_testing_applitools_eyes
title: Visual Regression Testing with Applitools Eyes
sidebar_label: Playwright with Applitools Eyes
description: Visual regression testing with Playwrights and Applitools Eyes
keywords:
  - NX
  - axe
  - tests
  - testing
  - playwright
  - visual
  - regression
  - applitools
  - eyes
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Applitools Eyes is a powerful tool that provides a number of benefits over using Playwright's native visual comparison capabilities. Applitools Eyes automatically manages the baseline images for visual tests, making it easy to keep track of changes over time. It also automatically compares screenshots of your website or application, highlighting any differences and making it easy to identify visual bugs. 

Applitools Eyes supports a wide range of browsers and devices, so you can test your website or application across a greater range of platforms and ensure that it looks and behaves correctly. Additionally, Applitools Eyes provides detailed reports and analytics that can help you identify trends and patterns in your visual testing results, making it easier to understand and fix issues. With Applitools Eyes, teams can work together and identify issues quickly and efficiently. 

Overall, Applitools Eyes is a more powerful and flexible solution for visual testing and monitoring that can help you catch more visual bugs and improve your development process.

## Applitools eyes with Playwright

When scaffolding your application with Applitools Eyes the [@applitools/eyes-playwright](https://www.npmjs.com/package/@applitools/eyes-playwright) plugin will be added to your dependency list, additionally the following updates will be applied to the playwright configuration file:

```typescript title="playwright.config.ts"
  grepInvert: /.*@visual-regression/,
  projects: [
    {
      name: 'applitools',
      grep: /.*@visual-regression/,
      grepInvert: null,
      retries: 0,
    },
    ...
```

As playwright executes each test once per project and the _playwright.config.ts_ contains multiple project definitions this would result in the visual regression tests being ran multiple times within the Applitools cloud.

As browser/device requirements are specified within the eyes `Configuration()` object this would result in redundant tests runs, unnecessarily consuming your snapshot allowance. To mitigate this we make use of **_grep_** and **_grepInvert_** to isolate Applitools visual regression tests into their own project with unique configuration. 

:::caution

Tests using Applitools Eyes **MUST** be tagged with **@visual-regression** to avoid duplicate test runs

:::

### Sample tests

Upon scaffolding your application with Playwright and Applitools eyes a sample test file will also be provided, demonstrating/describing how visual regression tests can be ran on the Applitools Eyes Grid.

```typescript title="applitools-eyes-grid.spec.ts"
import { test } from '@playwright/test';
import {
  BatchInfo,
  Configuration,
  VisualGridRunner,
  BrowserType,
  DeviceName,
  ScreenOrientation,
  Eyes,
  Target,
} from '@applitools/eyes-playwright';

export let Batch: BatchInfo;
export let Config: Configuration;
export let Runner: VisualGridRunner;

// This method sets up the configuration for running visual tests in the Ultrafast Grid.
// The configuration is shared by all tests in a test suite, so it belongs in a `beforeAll` method.
// If you have more than one test class, then you should abstract this configuration to avoid duplication.
test.beforeAll(async () => {
  // Concurrency refers to the number of visual checkpoints Applitools will perform in parallel.
  // Warning: If you have a free account, then concurrency will be limited to 1.
  Runner = new VisualGridRunner({ testConcurrency: 5 });

  // Create a new batch for tests.
  // A batch is the collection of visual checkpoints for a test suite.
  // Batches are displayed in the dashboard, so use meaningful names.
  Batch = new BatchInfo({
    name: 'Example: Playwright TypeScript with the Ultrafast Grid',
  });

  // Create a configuration for Applitools Eyes.
  Config = new Configuration();

  // Set the batch for the config.
  Config.setBatch(Batch);

  // Add desktop browsers with different viewports for cross-browser testing in the Ultrafast Grid.
  Config.addBrowser(1920, 1080, BrowserType.CHROME);
  // Config.addBrowser(1366, 768, BrowserType.FIREFOX);
  // Config.addBrowser(3840, 2160, BrowserType.SAFARI);

  // Add mobile emulation devices with different orientations for cross-browser testing in the Ultrafast Grid.
  Config.addDeviceEmulation(
    DeviceName.iPhone_11_Pro_Max,
    ScreenOrientation.LANDSCAPE
  );
  // Config.addDeviceEmulation(DeviceName.Galaxy_S22, ScreenOrientation.PORTRAIT);
});

// This "describe" method contains related test cases with per-test setup and cleanup.
// In this example, there is only one test.
test.describe('Applitools-eyes - ultrafast grid - @visual-regression', () => {
  let eyes: Eyes;

  // This method sets up each test with its own Applitools Eyes object.
  test.beforeEach(async ({ page }) => {
    //Navigate to the base page of the NextJs app
    await page.goto('/');
    // Create the Applitools Eyes object connected to the VisualGridRunner and set its configuration.
    eyes = new Eyes(Runner, Config);

    // Open Eyes to start visual testing.
    // Each test should open its own Eyes for its own snapshots.
    // It is a recommended practice to set all four inputs below:
    await eyes.open(
      page, // The Playwright page object to "watch"
      'next-js-app', // The name of the app under test
      test.info().title, // The name of the test case
      { width: 1920, height: 1080 } // The viewport size for the local browser
    );
  });

  // This test performs a simple visual regression test, capturing/comparing a screenshot of the full window.
  // If the page ever changes, then Applitools will detect the changes and highlight them in the dashboard.
  test('Check the main page', async () => {
    // This snapshot uses STRICT match level to verify that the page content matches the baseline image closely enough that the human eye would not see any difference.
    await eyes.check('Main page', Target.window().fully().strict());
  });

  test.afterEach(async () => {
    // Close Eyes to tell the server it should display the results.
    await eyes.close();
  });
});

test.afterAll(async () => {
  // Close the batch and report visual differences to the console.
  // Note that it forces Playwright to wait synchronously for all visual checkpoints to complete.
  // If any visual regressions are detected, the playwright test will fail
  const results = await Runner.getAllTestResults();
  console.log('Visual test results', results);
});
```

## Running your visual regression tests

As a prerequisite to running Applitools Eyes tests, the API key must be set. The API key can be found by following ['How to retrieve your API key'](https://applitools.com/docs/topics/overview/obtain-api-key.html) guide.


### Locally

As mentioned [above](#applitools-eyes-with-playwright), Applitools Eyes tests should be tagged with **@visual-regression** to ensure that we do not accidentally duplicate test runs, this also enables us to target these tests through **grep** as seen in the ['Run specific tests'](./playwright_nx.md#run-specific-tests) example.

<Tabs>
 <TabItem value="grouped" label="Grouped">

 ```typescript
 //multiple tests grouped in a describe block
 test.describe('Applitools-eyes - ultrafast grid - @visual-regression', () => {   
    test('visual test 1', async ({ page }) => {
        //test code
    });

    test('visual test 2', async ({ page }) => {
        //test code
    });
 }
 ```

 </TabItem>
 <TabItem value="individual" label="Individual">

 ```typescript
 test('Example applitools eyes test @visual-regression', async ({ page }) => {
    //test code
 });
 ```

 </TabItem>
</Tabs>

:::note

You must set your runner key API before running Applitools Eyes tests locally by following [this guide](https://help.applitools.com/hc/en-us/articles/360006914732-The-runner-key-API-Key-).
It is recommended to restart your machine to ensure that environment variable changes are registered!

:::

### CI

Using the preconfigured pipelines your playwright visual comparison tests will be ran automatically as part of the deployment process (As long as the API key has been set as an environment variable in the CI).

:::tip
Visit the [CI docs](../testing_in_nx/playwright_nx.md#output-in-ci) for more information
:::

## Viewing your test results and updating baseline images

Similar to [viewing your test results](./playwright_nx.md#viewing-your-test-results) for standard tests, Applitools Eyes will also output test results to the console in the following format:

```bash
Visual test results TestResultsSummaryData {
  _summary: {
    results: [ [Object], [Object] ],
    passed: 2,
    unresolved: 0,
    failed: 0,
    exceptions: 0,
    mismatches: 0,
    missing: 0,
    matches: 2
  },
  _deleteTest: [Function: deleteTest]
}
```

If any test failures occur you should see the following message, allowing you to review the test failure and either accept or reject the difference(s) by navigating to the provided URL:

```bash
Error: Test 'Check the main page' of 'next-js-app' detected differences! See details at: https://eyes.applitools.com/app/batches/XXXXXXXXXXXXXXXXXXXX/XXXXXXXXXXXXXXXXXXXX?accountId=XXXXXXXXXXXXXXXXXXXXX
```

:::tip

Take a look at '[Reviewing test results and updating the baseline](https://applitools.com/docs/topics/overview/overview-reviewing-test-results.html)' for a detailed guide.

:::
