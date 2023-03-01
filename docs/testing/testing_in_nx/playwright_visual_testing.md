---
id: playwright_visual_testing
title: Visual Regression Testing with Playwright
sidebar_label: Playwright with Visual Comparisons
description: Visual regression testing with Playwrights visual comparison API!
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

Performing visual regression testing with Playwright ensures that the visual elements of your application are functioning correctly and are consistent across different browsers, devices, and screen sizes. By catching visual bugs early on in the development process, visual regression testing helps to prevent costly and time-consuming rework, and ensures that the end user has a consistent and polished experience.

With Playwright this can be achieved natively through it's visual comparisons api. This is a great first step to capitalise on the benefits of visual regression testing, however, we highly recommend using a cloud based provider such as Applitools eyes. Using Applitools eyes grants multiple benefits over the native capability of playwright such as automated baseline management, greater browser/device support, rich reporting and analytics and easier collaboration. 

## Playwright visual comparisons

Scaffolding your project with a native configuration for visual regression testing will generate a sample set of tests and update your project configuration.

### CI strategy for visual comparison

When working with visual comparisons using playwright and your own CI system there are a number of challenges:
1. Users may have different browsers and dependency versions installed locally when capturing images, leading to pixel variance during image comparison. 
2. Images captured on different operating systems can lead to pixel variance
3. Images captured on different CPU architecture can lead to pixel variance

One possible solution to this is to utilise the [Playwright Docker](https://playwright.dev/docs/docker) container, however, through extensive testing we still found significant differences when comparing images captured on docker containers for alternative architecture. 

Our strategy is to have the CI as the one and only 'source of truth', this means that any visual comparisons will be skipped locally, consequently, no baseline images will be captured on any local systems. See the [Updating your baseline images](#updating-your-baseline-images) section to understand how we capture baseline images in the CI.

### Snapshot configuration

As part of native visual comparisons with playwright the following recommended configuration is added into the projects config file during scaffolding:

```typescript title="playwright.config.base.ts"

  /* Visual regression config */
  updateSnapshots: 'missing',
  ignoreSnapshots: !process.env.CI,
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.05,
      threshold: 0.2,
      animations: 'disabled',
    },
    toMatchSnapshot: {
      maxDiffPixelRatio: 0.05,
      threshold: 0.2,
    },
  }

```

- updateSnapshots
    - Description: Whether to update expected snapshots with the actual results produced by the test run.
    - Value: **'missing'** - Missing snapshots are created, for example when authoring a new test and running it for the first time.
- ignoreSnapshots
    - Description: Whether to skip snapshot expectations, such as expect(value).toMatchSnapshot() and await expect(page).toHaveScreenshot()..
    - Value: **!process.env.CI** - Any snapshot checks are skipped unless the test is being ran within the CI. 
- toHaveScreenshot/toMatchSnapshot::maxDiffPixelRatio
    - Description: an acceptable ratio of pixels that are different to the total amount of pixels, between 0 and 1.
    - Value: **0.05** - Any images with > 0.05% pixel variance will be flagged.
- toHaveScreenshot/toMatchSnapshot::threshold
    - Description: an acceptable perceived colour difference in the YIQ colour space between the same pixel in compared images, between zero (strict) and one (lax).
    - Value: **0.2** - Any pixel with > 20% variance will be flagged
- toHaveScreenshot::animations
    - Description: whether to enable or disable CSS animations, CSS transitions and Web Animations
    - Value: **disabled** - finite animations are fast-forwarded to completion and infinite animations are cancelled to initial state.

  
:::info

Visual comparisons can be configured in many ways, for further details check out [the docs!](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-have-screenshot-1).

:::

### Sample tests

```typescript title="playwright-visual-regression.spec.ts"

import { test, expect } from '@playwright/test';

test.describe('Native @visual-regression', () => {
  test.beforeEach(async ({ page }) => {
    // Wait for network and body to be visible to ensure app is loaded
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForSelector('body', { state: 'visible' });
  });

  test('main page to have no visual regressions', async ({ page }) => {
    const screenshot = await page.screenshot({ fullPage: true });
    await expect(screenshot).toMatchSnapshot('main-page.png');
  });

  test('Expanded information blocks have no visual regressions', async ({
    page,
  }) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const information of await page
      .locator('#commands >> details')
      .elementHandles()) {
      /* eslint-disable no-await-in-loop */
      await information.click();
    }
    await expect(page.locator('#commands')).toHaveScreenshot('info-blocks.png');
  });
});

```

The sample contains two tests, showcasing playwrights ability to perform full page comparisons, or target specific areas of the web page. 
Upon first run of the test(s) Playwright will capture a baseline image, the name will vary depending on whether a value is passed to the `toHaveScreenshot()`/`toMatchScreenshot()` methods:

- Default: auto-generated name consisting of `desribe block name`-`test case name`-`browser`-`operating system`.png
- Defined: user specified name resulting in `user defined name`-`browser`-`operating system`.png

As indicated by the below folder structure, a `playwright-visual-regression.spec.ts-snapshots` folder will be generated for the `playwright-visual-regression.spec.ts` file to house all associated baseline images. Using the [project based configuration](././playwright_nx.md#project-based-configuration) multiple screenshots will be captured for each device, in this example capturing the snapshots on windows results in each image being appended with _'win32'_

```text title="Output from running the playwright-visual-regression.spec.ts example"
.
├── playwright-visual-regression.spec.ts-snapshots/
│   ├── main-page-expanded-blocks-chromium-win32.png
│   ├── main-page-expanded-blocks-firefox-win32.png
│   ├── main-page-expanded-blocks-Mobile-Chrome-win32.png
│   ├── main-page-expanded-blocks-Mobile-Safari-win32.png
│   ├── main-page-expanded-blocks-webkit-win32.png
│   ├── Native-visual-regression-main-page-to-have-no-visual-regressions-1-chromium-win32.png
│   ├── Native-visual-regression-main-page-to-have-no-visual-regressions-1-firefox-win32.png
│   ├── Native-visual-regression-main-page-to-have-no-visual-regressions-1-Mobile-Chrome-win32.png
│   ├── Native-visual-regression-main-page-to-have-no-visual-regressions-1-Mobile-Safari-win32.png
│   └── Native-visual-regression-main-page-to-have-no-visual-regressions-1-webkit-win32.png
└── playwright-visual-regression.spec.ts
```

## Running your visual regression tests

### Locally

Playwright visual tests must be tagged with **@visual-regression** which enables us to target them through **grep** as seen in the ['Run specific tests'](./playwright_nx.md#run-specific-tests) example

<Tabs>
 <TabItem value="grouped" label="Grouped">

 ```typescript
 //multiple tests grouped in a describe block
 test.describe('Example test group @visual-regression', () => {
            
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
 test('Example visual test @visual-regression', async ({ page }) => {
    //test code
 });
 ```

 </TabItem>
</Tabs>

:::caution

Tests using playwright visual comparisons **MUST** be tagged with **@visual-regression** in order for the 'update snapshots' pipeline to pick up these tests.

:::

### CI

Using the preconfigured pipelines your playwright tests will be ran automatically as part of the deployment process.

:::tip
Visit the [CI docs](../testing_in_nx/playwright_nx.md#output-in-ci) for more information
:::

## Viewing your test results

Further to the explanation given in the ['Testing with Playwright'](./playwright_nx.md#running-your-playwright-tests) page, visual regression test results can also be found in the console output post execution.
However, to see the differences in images you should look within the **_test-results_** folder, for each failed visual comparison test 3 screenshots will be saved, the original, the expected and the difference. Viewing the **_diff.png_** file will highlight the visual difference between the actual snapshot and the expected one.

```text title="visual differences location"
.
└── test-results/
    └── src-example-chromium/
        ├── example-1-actual.png
        ├── example-1-diff.png
        └── example-1-expected.png

```

:::tip

Use the [HTML reporter](./playwright_nx.md#viewing-your-test-results) to easily see the differences between snapshots which do not match their baseline images!

:::

## Updating your baseline images

When the [@ensono-stacks/playwright:visualRegression](../../nx/playwright/plugin-information.md#generators) is executed an **azuredevops-updatesnapshots.yaml** pipeline is added to your build directory. 

In any pull requests where you have visual regression tests to capture images for, or if you want to update baseline images, the following comment can be added to the pull request. This will automatically trigger the updatesnapshots pipeline, running through all tests tagged with **@visual-regression** and capturing/recapturing their baseline images.

```bash
/azp run <pipeline-name>.updatesnapshots
```

Following this, the build for the PR will be automatically restarted, using the newly captured baseline images for comparison.

:::info Make sure you have enabled triggers for the update snapshots pipeline
<details>
  <summary><b>Enable the updatesnapshots pipeline</b></summary>
  <div>
  <p>In order for the pipeline to be automatically triggered through comments to your pull requests, please enable triggers</p> 
  <p>1. Click the options menu and select 'Triggers'</p>

  ![Trigger menu](/img/azure-pipeline-triggers.png)

  <p>2. Under the pull request validation section ensure the following values are selected</p>

  ![Trigger setup](/img/azure-pipeline-trigger-setup.png)
  
  </div>
</details>
:::
