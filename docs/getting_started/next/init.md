<!-- markdownlint-disable MD041 -->

### @ensono-stacks/next:init

<details>
<summary>Adds custom config and developer tools to an existing next application</summary>

The next init generator will add a custom ESlint config to an existing NextJs application, install `eslint-plugin-testing-library` to the project. as well as update project.json with a custom test config to allow coverage collection from [jest](https://jestjs.io/).

## Prerequisites

An existing [Next](https://nextjs.org/) application

## Usage

```bash
nx g @ensono-stacks/next:init
```

### Command line arguments

The following command line arguments are available:

| Option    | Description                           | Type   | Accepted Values   | Default |
| --------- | ------------------------------------- | ------ | ----------------- | ------- |
| --project | Name of the existing next application | string | nameOfApplication | N/A     |

### Generator Output

The following files will be updated.

```text
UPDATE apps/baseline-next-app/project.json #Updated with custom test config to allow for coverage collection
UPDATE apps/baseline-next-app/.eslintrc.json #Ehanced with additional linting rules
UPDATE apps/baseline-next-app/tsconfig.json #Minor enhancements
UPDATE apps/baseline-next-app/tsconfig.spec.json #Updates for monorepo structure
UPDATE apps/baseline-next-app/specs/index.spec.tsx #Formatting changes
```

The generator will also add [react-axe](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/react/README.md) (version 4.7.3) into the app via the following:

```typescript title="...app.tsx"
// @ts-ignore
if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line global-require
    const axe = require('@axe-core/react'); // eslint-disable-line @typescript-eslint/no-var-requires
    // eslint-disable-next-line global-require
    const React = require('react'); // eslint-disable-line @typescript-eslint/no-var-requires
    // eslint-disable-next-line global-require
    const ReactDOM = require('react-dom'); // eslint-disable-line @typescript-eslint/no-var-requires
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    axe(React, ReactDOM, 1000);
}

...
```

react-axe has been added so your app can be tested for accessibility and results will show in the Chrome DevTools console.

A final message is provided if the developer would like to run the relevant deployment generator that supports this FE.
`@ensono-stacks/next:init-deployment`.

</details>
