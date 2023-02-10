### @ensono-stacks/azure-react:app-insights-web

<details>
<summary>Installs and configures a ReactJS Library with App Insights.</summary>

This enables the following:

- Tracking of router changes
- React components usage statistics


This generator will create a new ReactJS Library with [applicationinsights reactjs](https://www.npmjs.com/package/@microsoft/applicationinsights-react-js) and [applicationinsights web](https://www.npmjs.com/package/@microsoft/applicationinsights-web) npm packages installed and configured for you. This can then be imported an used in an existing ReactJs application.

## Usage

```bash
nx generate @ensono-stacks/azure-react:app-insights-web --name=<app-name> --connectionString=<KEY_NAME> --directory=<directory where the lib is placed> --importPath=<import path for the library> --tags=<tags to the library>
```


:::caution

App insights requires the connection string environment variable to be set to the value set within Azure. The name of the connection string variable is set in the generator options `--connectionString`. Please see [documentation on connection strings](https://learn.microsoft.com/en-gb/azure/azure-monitor/app/sdk-connection-string?tabs=net) for more information

:::

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

### Using Application Insights 

To use the Application Insights react hooks within your application please import the generated library and wrap your application in the TelemetryProvider installed by the generator for example 

```json 
import NxWelcome from './nx-welcome';
import { TelemetryProvider } from 'packages/nameOfGeneratedAppInsightsLibrary/src';

export function App() {
    return (
        <TelemetryProvider>
            <NxWelcome title="welcome title" />
            <div />
        </TelemetryProvider>
    );
}

export default App;

```

From here a `useAppInsightsContext` hook will be available to use anywhere within your ReactJs App. For example
```json 
import React from "react";
import { useAppInsightsContext } from "@microsoft/applicationinsights-react-js";

const MyComponent = () => {
    const appInsights = useAppInsightsContext();
    const metricData = {
        average: engagementTime,
        name: "React Component Engaged Time (seconds)",
        sampleCount: 1
      };
    const additionalProperties = { "Component Name": 'MyComponent' };
    appInsights.trackMetric(metricData, additionalProperties);
    
    return (
        <h1>My Component</h1>
    );
}
export default MyComponent;
```

Full documentation and a getting started guide can be found at [React plug-in for Application Insights JavaScript SDK](https://learn.microsoft.com/en-gb/azure/azure-monitor/app/javascript-react-plugin)
</details>