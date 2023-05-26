---
id: cypress_accessibility_testing
title: Accessibility Testing with Cypress
sidebar_label: Accessibility Testing
description: Accessibility Testing with Cypress using Axe!
keywords:
  - NX
  - axe
  - tests
  - testing
  - cypress
  - accessibility testing
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Accessibility testing with Playwright is very simple and ensures that everyone, including those with disabilities or impairments can fully access and use the site or app. It is not only a legal requirement, but also a moral and ethical one, to ensure that digital products are inclusive and usable by all.

## Axe: Accessibility testing

From the Dequeue family of products, we are using [aXe](https://www.deque.com/axe/) for accessibility testing, specifically their Node.js plugin, [`@axe-core/playwright`](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md), for integration into the Playwright testing framework.

### Scaffolded Example

When accessibility tests are scaffolded into your project you will see the following example:

```typescript title="axe-accessibility.spec.ts"
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { prettyPrintAxeReport } from 'axe-result-pretty-print';

test.describe('NextJs example accessibility tests @accessibility', () => {
  
  test('should not have any automatically detectable WCAG A or AA violations', async ({
    page,
  }) => {
    await page.goto('/');
    await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze()
      .then((results) => {
        prettyPrintAxeReport({
          violations: results.violations,
          passes: results.passes,
        });
        expect(results.violations,'No violations should be present, see console log').toHaveLength(0)
      });
  });
});
```

Using the AxeBuilder, a chainable API for playwright, we automatically inject axe into all frames. Using the optional `withTags()` function we can specify the WCAG guidelines we want to verify our application conforms to. 

```typescript
// highlight-next-line
await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze()
      .then((results) => {
        prettyPrintAxeReport({
          violations: results.violations,
          passes: results.passes,
        });
        expect(results.violations,'No violations should be present, see console log').toHaveLength(0)
      });
```

Upon axe analysis we then pass the results object to the `then()` function. In here we use the axe-result-pretty-print to view the accessibility test results in a readable format.

```typescript
await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze()
      .then((results) => {
        // highlight-start
        prettyPrintAxeReport({
          violations: results.violations,
          passes: results.passes,
        });
        // highlight-end
        expect(results.violations,'No violations should be present, see console log').toHaveLength(0)
      });
```

The violations array within the results object detail any elements of the application which have breached the specified/default web content accessibility guidelines. As such, we assert that there are no entries in the array, if there are more than one elements then the test will fail.

```typescript
await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze()
      .then((results) => {
        // highlight-start
        prettyPrintAxeReport({
          violations: results.violations,
          passes: results.passes,
        });
        // highlight-next-line
        expect(results.violations,'No violations should be present, see console log').toHaveLength(0)
      });
```

### Running your accessibility tests

We recommend tagging your Playwright accessibility tests so that you can target these specific tests if required. In the below examples we have tagged the tests with **@accessibility** which enables us to target them through **grep** as seen in the ['Run specific tests'](./playwright_nx.md#run-specific-tests) example

<Tabs>
 <TabItem value="grouped" label="Grouped">

 ```typescript
 //multiple tests grouped in a describe block
 test.describe('Example test group @accessibility', () => {
            
    test('accessibility test 1', async ({ page }) => {
        //test code
    });

    test('accessibility test 2', async ({ page }) => {
        //test code
    });
 }
 ```

 </TabItem>
 <TabItem value="individual" label="Individual">

 ```typescript
 test('Example individual test @accessibility', async ({ page }) => {
    //Accessibility test with AxeBuilder
 });
 ```

 </TabItem>
</Tabs>

## Viewing your test results

Further to the explanation given in the ['Testing with Playwright'](./playwright_nx.md#running-your-playwright-tests) page, accessibility test results can also be found in the console output post execution.

```text title="Sample AXE report"

Page passed 16 axe rules: aria-allowed-attr, aria-hidden-body, aria-required-attr, aria-roles, aria-valid-attr-value, aria-valid-attr, avoid-inline-spacing, bypass, color-contrast, document-title, duplicate-id-active, duplicate-id, link-name, meta-viewport, nested-interactive, svg-img-alt
Axe core library found 3 violations
┌─────────┬───────────────────────────────────────────────────────────────────────────────────────────────────────────┬──────────────────┬─────────────────────┬───────────┬───────┐
│ (index) │                                                description                                                │        id        │        wcag         │  impact   │ nodes │
├─────────┼───────────────────────────────────────────────────────────────────────────────────────────────────────────┼──────────────────┼─────────────────────┼───────────┼───────┤
│    0    │ 'Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds' │ 'color-contrast' │ 'WCAG 2.0 Level AA' │ 'serious' │   1   │
│    1    │                            'Ensures every HTML document has a lang attribute'                             │ 'html-has-lang'  │ 'WCAG 2.0 Level A'  │ 'serious' │   1   │
│    2    │  'Ensures <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text'  │  'svg-img-alt'   │ 'WCAG 2.0 Level A'  │ 'serious' │   1   │
└─────────┴───────────────────────────────────────────────────────────────────────────────────────────────────────────┴──────────────────┴─────────────────────┴───────────┴───────┘
1. id: 'color-contrast' learn more: https://dequeuniversity.com/rules/axe/4.6/color-contrast?application=playwright
   name: Elements must have sufficient color contrast
   description: Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds
   WCAG: 'WCAG 2.0 Level AA'
   Affected elements:
		Selector: "#love"Source code: <p id="love">

2. id: 'html-has-lang' learn more: https://dequeuniversity.com/rules/axe/4.6/html-has-lang?application=playwright
   name: <html> element must have a lang attribute
   description: Ensures every HTML document has a lang attribute
   WCAG: 'WCAG 2.0 Level A'

```
