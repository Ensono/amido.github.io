---
id: browser_support
title: Browser Support
sidebar_label: Browser Support
---

Given we are building a WebApp template designing for accessibility, we would
like to have optionality to support broad range of browsers. We look to
following the standards set by Government Digital Services (GDS) on designing
our WebApp and testing for compatibility. Amido's stacks supports latest version
of modern browsers.

Next.js supports IE11 and all modern browsers out of the box using
`@babel/preset-env`.

## polyfills support

In cases where your own code or any external NPM dependencies you are using
requires features not supported by your target browsers you will need to
implement polyfills.

_Please note: Next's
[polyfills](https://github.com/zeit/next.js/tree/canary/examples/with-polyfills)
example demonstrates the recommended approach to implement polyfills._

## Tools used

- [Browserslist](https://github.com/browserslist/browserslist) -
  `.browserslistrc` contains the list of supported browsers.
  - [Examples](https://github.com/browserslist/browserslist-example) - to update
    this list
- [eslint-plugin-compat](https://www.npmjs.com/package/eslint-plugin-compat) -
  enforces the browser support across stacks.

#### To find out the list of supported browsers.

```bash
# run the following on the root level

npx browserslist
```

> If you do not have npx already: "npm install -g npx"
