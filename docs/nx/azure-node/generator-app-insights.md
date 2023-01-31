### @ensono-stacks/azure-node:app-insights

<details>
<summary>Installs and configures App Insights in your NodeJS app.</summary>

This generator will add and configure [applicationinsights](https://www.npmjs.com/package/applicationinsights) npm package for you.

## Prerequisites

Requires your NodeJS server to be implemented in a function called `main()`.

It requires the App Insights Access Key to be set in an env variable, from which it will be read.

## Usage

```bash
nx generate @ensono-stacks/azure-node:app-insights --project=demo --appInsightsKey=APP_INSIGHTS_KEY --server=src/server.ts
```

### Command line arguments

The following command line arguments are available:

| Option    | Description           | Type      | Accepted Values   | Default           |
| ---       | -------------------   | ---       | ---               | ---               |
| --project | Target project name.  | string    |                   |                   |
| --appInsightsKey | The env variable that stores the app insights key. | string    |   |   |
| --server         | Path to custom server file inside the project. | string  |   |   |

### Generator Output
##### What is the output of the above commands?

- Adds `applicationinsights` dependency in `package.json`.
- Extends `main()` function in the server file.

</details>