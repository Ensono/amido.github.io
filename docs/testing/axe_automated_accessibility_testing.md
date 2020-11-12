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
  - cypress
  - accessibility testing
---

## Axe: Accessibility testing

From the Dequeue family of products, we are using
[aXe](https://www.deque.com/axe/) for accessibility testing. When developing, we
expect to support WCAG 2.1 Level AA ["wcag21aa"] at a minimum.

aXe tests are performed on two levels:

1. Rendering the React component and testing with Jest.
2. Rendering the entire page and testing with Cypress.

Both examples are in the scaffolded web app templates: <https://github.com/amido/stacks-webapp-template/tree/master/packages/scaffolding-cli/templates/src/ssr>

### Cypress: Debugging Axe failures

> When accessibility violations are detected, your test will fail and an entry titled "A11Y ERROR!" will be added to the command log for each type of violation found (they will be above the failed assertion). Clicking on those will reveal more specifics about the error in the DevTools console.
Source: [cypress-axe#standard-output](https://github.com/avanslaars/cypress-axe#standard-output)

For information on how to fix the failure, follow the HelpUrl printed to the console.
