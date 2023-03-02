### @ensono-stacks/azure-node:app-insights

<details>
<summary>Installs and configures App Insights in your NodeJS app.</summary>

This generator will add and configure [applicationinsights](https://www.npmjs.com/package/applicationinsights) npm package for you.

## Prerequisites


- Requires a NodeJs server for application insights to hook into.

:::tip

Use the [@nrwl/next:custom-server](https://nx.dev/packages/next/generators/custom-server) generator which will have been added to your workspace by [@ensono-stacks/workspace`](../workspace/plugin-information.md) to generate your NodeJS server!

:::

- It requires the APPLICATIONINSIGHTS_CONNECTION_STRING environment variable to be set.

:::warning

There is a known issue with the [`@nrwl/next:custom-server`](https://nx.dev/packages/next/generators/custom-server) impacting _customServerTarget_ when typescript libraries are present in the monorepo. Please check the following [Github Issue](https://github.com/nrwl/nx/issues/12032) for the status of this issue.

:::



## Usage

```bash
nx generate @ensono-stacks/azure-node:app-insights
```

### Command line arguments

The following command line arguments are available:

| Option            | Description                                               | Type      | 
| ---               | --------------------------------------------------------- | ---       | 
| --project         | Target project name.                                      | string    | 
| --appInsightsKey  | The env variable that stores the app insights key.        | string    | 
| --server          | Path to custom server file inside the project.            | string    | 

### Generator Output

- Adds `applicationinsights` dependency in `package.json`.
- Extends `main()` function in the server file to initialise and configure app insights.

</details>