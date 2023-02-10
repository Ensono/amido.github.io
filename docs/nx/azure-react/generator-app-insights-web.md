### @ensono-stacks/azure-react:app-insights-web

<details>
<summary>Installs and configures a ReactJS app with App Insights.</summary>

This generator will add and configure [applicationinsights reactjs](https://www.npmjs.com/package/@microsoft/applicationinsights-react-js) and [applicationinsights web](https://www.npmjs.com/package/@microsoft/applicationinsights-web) npm packages for you.

This enables the following:

- Tracking of router changes
- React components usage statistics

It requires the connection string to be set in an env variable, from which it will be read.

## Usage

```bash
nx generate @ensono-stacks/azure-react:app-insights-web --name=<app-name> --connectionString=<KEY_NAME> --directory=<directory where the lib is placed> --importPath=<import path for the library> --tags=<tags to the library>
```

### Command line arguments

The following command line arguments are available:

| Option            | Description                                               | Type      | Required |
| ---               | --------------------------------------------------------- | ---       | --- |
| --name         | Library name                                      | string    | Required |
| --connectionString  | The env variable for the connection string.        | string    | Required |
| --directory          | A directory where the lib is placed.          | string    | Optional |
| --importPath          | What import path would you like to use for the library?.          | string    | Optional |
| --tags          | Add tags to the library (used for linting).          | string    | Optional |

### Generator Output

- Adds an app insights config file
```json title="/src/app-insights-config.ts"
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  DistributedTracingModes,
  IConfig,
} from '@microsoft/applicationinsights-common';
// eslint-disable-next-line import/no-extraneous-dependencies
import type { IConfiguration } from '@microsoft/applicationinsights-core-js';

const appInsightConfig: IConfiguration & IConfig = {
  enableAutoRouteTracking: false,
  enableCorsCorrelation: true,
  enableRequestHeaderTracking: true,
  enableResponseHeaderTracking: true,
  disableFetchTracking: false,
  distributedTracingMode: DistributedTracingModes.AI_AND_W3C,
  enableAjaxPerfTracking: true
};

export default appInsightConfig;
```

- Adds a telemetry provider 
```json title="/src/telemetry-provider.tsx"
import {
  ReactPlugin,
  AppInsightsContext,
} from '@microsoft/applicationinsights-react-js';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { FC, ReactNode } from 'react';

import appInsightConfig from './app-insights-config';

const reactPlugin = new ReactPlugin();
const connectionString = process.env.<%= connectionString %>;

export const appInsights = new ApplicationInsights({
  config: {
    connectionString,
    ...appInsightConfig,
    extensions: [reactPlugin],
  },
});

if (!appInsights.appInsights.isInitialized()) {
  appInsights.loadAppInsights();
}

export const TelemetryProvider: FC<{ children?: ReactNode }> = ({ children }) => (
  <AppInsightsContext.Provider value={reactPlugin}>
    {children}
  </AppInsightsContext.Provider>
);
```

- Installs and adds microsoft applicationinsights packages to package.json
```json title="/package.json"
  "dependencies": {
    ...OtherDependencies
    "@microsoft/applicationinsights-react-js": "3.4.0",
    "@microsoft/applicationinsights-web": "2.8.9",
  }
}
```

Full documentation and a getting started guide can be found at [React plug-in for Application Insights JavaScript SDK](https://learn.microsoft.com/en-gb/azure/azure-monitor/app/javascript-react-plugin)
</details>