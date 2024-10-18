---
id: frontend_testing_in_nx
title: Frontend Testing in an Nx monorepo
sidebar_label: Frontend Testing in an Nx monorepo
description: Considerations for testing within an Nx monorepo
keywords:
  - Nx
  - testing
  - playwright
  - accessibility testing
  - visual regression testing
  - monorepo
---

Using [Nx](https://nx.dev/) provides many benefits when working with SSR or CSR frontend applications. When using [Ensono Stacks to scaffold an Nx monorepo](../../nx/nx_monorepo.md) you will be provided with several options to assure quality in your development process.

## Getting Started

To leverage Ensono Stacks and accelerate your testing process within your Nx monorepo you need to have a preexisting Nx workspace. See the **["Getting Started"](/docs/getting_started/setup)** page for more details on how to setup your workspace!

### Selecting your test framework

We recommend and currently support Playwright within the Ensono Stacks workflow, with it’s Microsoft backing, extensive feature set and fast cross-browser web automation capability, it is our preferred tooling choice.

:::tip

Visit the [`Playwright`](../../getting_started/playwright/plugin-information.md) Ensono Stacks plugin to start testing!
:::

### Accessibility Testing

<details>
  <summary>Why accessibility test?</summary>
  <div>
    <p>Accessibility testing is a critical aspect of website and application development that ensures that everyone, including those with disabilities or impairments, can fully access and use the site or app. It is not only a legal requirement, but also a moral and ethical one, to ensure that digital products are inclusive and usable by all.</p>
    <p>This type of testing identifies and addresses any barriers that would make it difficult or impossible for some users to access the site or app, such as poor contrast, small text, or lack of alternative text for images. By catching these issues early in the development process, developers can ensure that their website or application is user-friendly for everyone and compliant with the regulations like WCAG and Section 508 that are legally binding in certain regions.</p>
    <p>Automated accessibility tooling can consistently and efficiently check for accessibility issues across different pages and sections of a website or application and identify potential accessibility issues. Integrating into Continuous Integration/Continuous Deployment (CI/CD) pipelines enables accessibility testing to be performed as part of the development process, ensuring that issues are identified and addressed early on.</p>
  </div>
</details>

The [`@ensono-stacks/playwright:accessibility`](../../getting_started/playwright/plugin-information.md#ensono-stacks-playwright-accessibility) generator enables you to add Axe accessibility tests to your application, if you would prefer an alternative to axe, then simply use an alternative plugin within your workspace!

### Visual Regression Testing

<details>
  <summary>Why visual regression test?</summary>
  <div>
    <p>Visual regression testing is a crucial step in the website and application development process. It ensures that the visual elements of the site or app are functioning correctly and are consistent across different browsers, devices, and screen sizes. This type of testing involves taking screenshots of a website or application, and then comparing them to previous versions or reference screenshots to identify any differences. By catching visual bugs early on in the development process, visual regression testing helps to prevent costly and time-consuming rework, and ensures that the end user has a consistent and polished experience.</p>
    <p>Visual regression testing can be automated which save a lot of time and effort compared to manual testing. Automated visual testing enables the developers to run many test cases in a very short time, which is not possible with manual testing.</p>
  </div>
</details>

If you are considering adding visual regression tests to your application, then we provide two options with the [`@ensono-stacks/playwright:visual-regression`](../../getting_started/playwright/plugin-information.md#ensono-stacks-playwright-visual-regression) generator:

- Applitools eyes
    - A powerful visual regression testing tool that detects visual changes, updates of browsers or OS, and integrates with popular testing frameworks and CI/CD pipelines, making it easy to automate visual regression testing and improve the quality and user-friendliness of digital products. Our community of experts recommend this software as the best approach, to decide if it is right for you, please visit [Applitools Eyes!](https://applitools.com/platform/eyes/)
- Native
    - A free alternative to cloud-based providers which enables developers to perform automated visual regression testing using the latest web platform features in their chosen testing framework.
