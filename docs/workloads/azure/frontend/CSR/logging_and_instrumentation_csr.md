---
id: logging_and_instrumentation_csr
title: Logging and Instrumentation
sidebar_label: Logging and Instrumentation
hide_title: false
hide_table_of_contents: true
description: CSR Application - Logging and Instrumentation
keywords:
  - rest 
  - api
  - csr
  - application
  - template
  - logging
  - instrumentation
  - client 
  - side 
  - rendering
  - client side rendering
---

[Application insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview)
is used to monitor both the node(express) instance and the NextJS client code
running on the browser. 

AppInsights is configured with the `instrumentationKey`
(or `process.env.APPINSIGHTS_INSTRUMENTATIONKEY`) provided from the environment
variables. 


 By default this will add telemetry to the Redux Reducers, and track all the dispatched actions!

 Awesome!

## Utility Functions

 There is also a set of utility functions to handle custom telemetry:


 ```javascript
    trackError(error :  Error)

    customTrace(error :  Error)
 ```

 You can find those in `utility/telemetry.ts` file.
