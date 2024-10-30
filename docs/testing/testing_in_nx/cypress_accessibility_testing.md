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

Accessibility testing with Cypress is very simple and ensures that everyone, including those with disabilities or impairments can fully access and use the site or app. It is not only a legal requirement, but also a moral and ethical one, to ensure that digital products are inclusive and usable by all.

## Axe: Accessibility testing

From the Dequeue family of products, we are using [aXe](https://www.deque.com/axe/) for accessibility testing. Using their Node.js plugin, [`axe-core`](https://www.npmjs.com/package/axe-core), we also utilise [`cypress-axe`](https://www.npmjs.com/package/cypress-axe) for integration into the Cypress testing framework.

### Scaffolded Example

When accessibility tests are scaffolded into your project you will see the following example:

```typescript title="axe-accessibility.cy.ts"
import 'cypress-axe';
import { terminalLogAxe } from '../support/e2e';

describe('@accessibility-tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  it('Has no detectable a11y violations on load (with custom parameters)', () => {
    // Test the page at initial load (with context and options)
    cy.checkA11y(
      null,
      {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
        },
      },
      terminalLogAxe
    );
  });

  it('Has no detectable a11y violations on load (filtering to only include critical impact violations)', () => {
    // Test on initial load, only report and assert for critical impact items
    cy.checkA11y(
      null,
      {
        includedImpacts: ['critical'],
      },
      terminalLogAxe
    );
  });

  // Basic usage after interacting with the page
  it('Has no a11y violations after button click', () => {
    // Interact with the page, then check for a11y issues
    cy.contains('a', "What's next?").click();
    cy.checkA11y(null, undefined, terminalLogAxe);
  });

  it('Only logs a11y violations while allowing the test to pass', () => {
    // Do not fail the test when there are accessibility failures
    cy.checkA11y(null, undefined, terminalLogAxe, true);
  });

  it('Has no a11y violations after asynchronous load', () => {
    // Retry the check if there are initial failures
    cy.checkA11y(
      null,
      {
        retries: 3,
        interval: 100,
      },
      terminalLogAxe
    );
  });
});

```

Using `cypress-axe` we first inject `axe-core` into the webpage within our _beforeEach_ hook, this ensures that each test in the spec file has been set up to run tests using the axe testing engine.

```typescript
beforeEach(() => {
  cy.visit('/');
  // highlight-next-line
  cy.injectAxe();
});
```

Using the `cy.checkA11y()` function ([see docs for usage](https://github.com/component-driven/cypress-axe/blob/master/README.md)) we then test the webpage against various accessibility rules.

```typescript
it('Has no detectable a11y violations on load (with custom parameters)', () => {
    // Test the page at initial load (with context and options)
    cy.checkA11y(
      null,
      {
        // highlight-start
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
        },
        // highlight-end
      },
      terminalLogAxe
    );
    
});
```

Passing the `terminalLogAxe` function as a callback to `cy.checkA11y()` then creates and prints a readable table of accessibility violations to the console. (The `terminalLogAxe` function has been added to your _app-name/cypress/support/e2e.ts_ file)

```typescript
it('Has no detectable a11y violations on load (with custom parameters)', () => {
    // Test the page at initial load (with context and options)
    cy.checkA11y(
      null,
      {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
        },
      },
      // highlight-next-line
      terminalLogAxe
    );
});
```

### Running your accessibility tests

We recommend tagging your Cypress accessibility tests so that you can target these specific tests if required. In the below examples we have tagged the tests with **@accessibility** which enables us to target them through **grep** as seen in the ['Run specific tests'](./cypress_nx.md#run-specific-tests) example

<Tabs>
 <TabItem value="grouped" label="Grouped">

 ```typescript
 //multiple tests grouped in a describe block
 describe('Example test group @accessibility', () => {
            
    it('accessibility test 1', async ({ page }) => {
        //test code
    });

    it('accessibility test 2', async ({ page }) => {
        //test code
    });
 }
 ```

 </TabItem>
 <TabItem value="individual" label="Individual">

 ```typescript
 it('Example individual test @accessibility', () => {
    //Accessibility test with axe
 });
 ```

 </TabItem>
</Tabs>

## Viewing your test results

Further to the explanation given in the ['Testing with Cypress'](./cypress_nx.md#running-your-cypress-tests) page, accessibility test results can also be found in the console output post execution.

```text title="Sample AXE report"
1) Has no detectable a11y violations on load (with custom parameters)
3 accessibility violations were detected
┌─────────┬──────────────────┬───────────┬───────────────────────────────────────────────────────────────────────────────────────────────────────────────────┬───────┐
│ (index) │        id        │  impact   │                                                    description                                                    │ nodes │
├─────────┼──────────────────┼───────────┼───────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼───────┤
│    0    │ 'color-contrast' │ 'serious' │ 'Ensures the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds' │   1   │
│    1    │ 'html-has-lang'  │ 'serious' │                                'Ensures every HTML document has a lang attribute'                                 │   1   │
│    2    │  'svg-img-alt'   │ 'serious' │      'Ensures <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text'      │   3   │
└─────────┴──────────────────┴───────────┴───────────────────────────────────────────────────────────────────────────────────────────────────────────────────┴───────┘
```
