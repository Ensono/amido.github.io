---
id: accessibility_testing
title: Automated Accessibility Testing With Axe
sidebar_label: Automated Accessibility Testing
hide_title: false
hide_table_of_contents: true
description: Accessibility testing with Axe
keywords:
  - axe
  - tests
  - testing
  - jest
  - accessibility testing
---

:::danger

We recommend and already have support within [Playwright for Axe](./testing_in_nx/playwright_accessibility_testing.md)!

:::

## Axe: Accessibility testing

From the Deque family of products, we are using
[aXe](https://www.deque.com/axe/) for accessibility testing. When developing, we
expect to support WCAG 2.1 Level AA ["wcag21aa"] at a minimum.

aXe tests are performed on two levels:

1. Rendering the React component and testing with Jest.
2. Rendering the entire page and testing with Playwright.
