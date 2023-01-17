---
id: testing_with_playwright
title: Testing with Playwright
sidebar_label: Testing with playwright
description: Testing with playwright within an NX monorepo
keywords:
  - NX
  - testing
  - COMPLETE-THIS-SECTION
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Playwright is a relatively new testing framework, which is developed and supported by Microsoft. Playwright was designed to enable cross-browser web automation that is reliable and fast, with support for multiple browsers, programming languages and test runners. With a vast array of growing capabilities, alongside Microsoft backing, we are supporting and recommending it as a test framework within stacks!

## Getting Started
Upon scaffolding your application with the playwright testing framework, you will be presented with an example test suite and playwright configuration. The [@mands/nx-playwright](https://github.com/marksandspencer/nx-plugins/tree/main/packages/nx-playwright) NX plugin is used as a base for the Playwright/NX integration. 

### Base configuration
The base configuration has been created with CI in mind, meaning the default configuration (shared across all projects) considers requirements for reporting and pipeline efficiency out of the box! 

```typescript title="playwright.config.base.ts"
import { PlaywrightTestConfig } from '@playwright/test';

const baseURL = process.env.BASE_URL || 'http://localhost:4200/';

export const baseConfig: PlaywrightTestConfig = {
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : undefined,
  /* Max failures in CI to fail fast */
  maxFailures: process.env.CI ? 10 : undefined,
  /* Timeout for each test in ms */
  timeout: 30000,
  /* Reporter to use. */
  reporter: process.env.CI
    ? [
        ['dot'],
        ['html', { open: 'never' }],
        ['junit', { outputFile: 'test-results/junit-report.xml' }],
      ]
    : 'list',
  use: {
    baseURL,
  },
};
```
### Project based configuration
Individual project configuration has been created with our own recommendations to get the most out of playwright’s capabilities, targeting multiple browsers and devices. From this example, you can tailor it to suit your specific needs! See the [docs](https://playwright.dev/docs/test-configuration) for more information! 
```typescript title="playwright.config.ts"
import { type PlaywrightTestConfig, devices } from '@playwright/test';
//Extends the base configuration for playwright which is shared across all projects
import { baseConfig } from '../../playwright.config.base';

//Configuration unique to the current application tests
const config: PlaywrightTestConfig = {
  ...baseConfig,
  use: {
    ...baseConfig.use,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },

  /* Test against multiple browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },

    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
      },
    },
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 12'],
      },
    },
  ],
};

export default config;
```
### Browsers and Devices
The scaffolded project configuration by default uses Desktop Chrome, Firefox and WebKit. Upon package install or test execution Playwright will automatically install the browsers defined within the running project. Other browsers are available, such as Microsoft Edge and HiDPI browsers. Additionally, the scaffolded project configuration contains two examples for mobile devices, Mobile Chrome on the Pixel 5, and WebKit on the iPhone 12.

Playwright has an extensive library of browsers and devices which can be found in the [device descriptors list](https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/server/deviceDescriptorsSource.json). An example of a mobile emulation device is found below, showcasing how Playwright emulates the devices through **userAgent** and **viewport** configuration, alongside mobile properties such as **isMobile**/**hasTouch**. By default, each emulated device will have a **defaultBrowserType**, in this example the iPhone12 uses webkit.
```json title="deviceDescriptorsSource.json"
"iPhone 12": {
    "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Mobile/15E148 Safari/604.1",
    "screen": {
      "width": 390,
      "height": 844
    },
    "viewport": {
      "width": 390,
      "height": 664
    },
    "deviceScaleFactor": 3,
    "isMobile": true,
    "hasTouch": true,
    "defaultBrowserType": "webkit"
  }
```

### Running your playwright tests
Using NX we can very easily run our tests, either for the a specific project, or against any affected projects. NX will handle provisioning and tearing down of the webserver automatically!
Using the NX ‘affected’ capability allows you to run only the tests within a mono repo where the codebase has changes since the ‘master’ commit. (See the [docs](https://nx.dev/concepts/affected) for more information)


 <Tabs>
  <TabItem value="current" label="Current">

  ```bash
  nx e2e example-test-project-e2e
  ```

  </TabItem>
  <TabItem value="affected" label="Affected">

  ```bash
  nx affected:e2e
  ```

  </TabItem>
 </Tabs>