---
id: logging_and_instrumentation_ssr
title: Logging and Instrumentation
sidebar_label: Logging and Instrumentation
hide_title: false
hide_table_of_contents: true
description: SSR Application - Logging and Instrumentation
keywords:
  - rest 
  - api
  - ssr
  - application
  - azure
  - infrastructure
  - logging
  - instrumentation
  - side 
  - rendering
  - server 
  - server side rendering  
---

[Application insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview)
is used to monitor both the node(express) instance and the NextJS client code
running on the browser. 

AppInsights is configured with the `instrumentationKey`
(or `process.env.APPINSIGHTS_INSTRUMENTATIONKEY`) provided from the environment
variables. 

AppInsights collects the console logs provided by the Winston.
AppInsights on Client side is implemented using a React HOC(Higher order
component) to the Next's `_app.ts`.
 