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

When scaffolding your application with Applitools Eyes the [@applitools/eyes-playwright](https://www.npmjs.com/package/@applitools/eyes-playwright) plugin will be added to your dependancy list, additionally the following updates will be applied to the playwright configuration file:

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

As browser/device requirements are specified within the eyes **_Configuration()_** object this would result in redunant tests runs, unnecessarily consuming your snapshot allowance. To mitigate this we make use of **_grep_** and **_grepInvert_** to isolate Applitools visual regression tests into their own project with unique configuration. 

:::caution

Tests using Applitools Eyes **MUST** be tagged with **@visual-regression** to avoid duplicate test runs

:::

### Sample tests


## Running your visual regression tests

### Locally


### CI