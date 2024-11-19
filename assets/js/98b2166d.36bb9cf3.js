"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[1671],{7498:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=i(4848),t=i(8453);const o={id:"logging_netcore",title:"Logging with OpenTelemetry and Application Insights",sidebar_label:"Logging",hide_title:!0,hide_table_of_contents:!1,description:"Logging for .NET",keywords:[".net","logging","logger","open telemetry","application insights","standard","open telemetry configuration"]},r=void 0,l={id:"workloads/azure/backend/netcore/logging_netcore",title:"Logging with OpenTelemetry and Application Insights",description:"Logging for .NET",source:"@site/docs/workloads/azure/backend/netcore/logging_netcore.md",sourceDirName:"workloads/azure/backend/netcore",slug:"/workloads/azure/backend/netcore/logging_netcore",permalink:"/docs/workloads/azure/backend/netcore/logging_netcore",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"logging_netcore",title:"Logging with OpenTelemetry and Application Insights",sidebar_label:"Logging",hide_title:!0,hide_table_of_contents:!1,description:"Logging for .NET",keywords:[".net","logging","logger","open telemetry","application insights","standard","open telemetry configuration"]},sidebar:"docs",previous:{title:"AWS/GHA Pipeline",permalink:"/docs/workloads/azure/backend/netcore/pipeline_gha_netcore"},next:{title:"Security",permalink:"/docs/workloads/azure/backend/netcore/security_netcore"}},a={},c=[{value:"Logging with OpenTelemetry and Application Insights",id:"logging-with-opentelemetry-and-application-insights",level:2},{value:"Log Destinations (Sinks)",id:"log-destinations-sinks",level:3},{value:"OpenTelemetry Configuration",id:"opentelemetry-configuration",level:3},{value:"Key Points",id:"key-points",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"logging-with-opentelemetry-and-application-insights",children:"Logging with OpenTelemetry and Application Insights"}),"\n",(0,s.jsxs)(n.p,{children:[".NET provides a built-in logging system, which is easy to use and handles most basic logging needs. When you need to log something in your application, you can use the ",(0,s.jsx)(n.code,{children:"ILogger<>"})," interface. This interface is provided by dependency injection, meaning it's automatically available in your classes. The ",(0,s.jsx)(n.code,{children:"ILogger<>"})," instances are created by a logging system that's set up when the application starts."]}),"\n",(0,s.jsxs)(n.p,{children:["However, the built-in logging system is basic. It doesn't have advanced features like custom filtering, adding extra information to logs, or forwarding logs to other systems. This is where ",(0,s.jsx)(n.strong,{children:"OpenTelemetry"})," comes in\u2014it extends the built-in logging system with more powerful features."]}),"\n",(0,s.jsxs)(n.p,{children:["OpenTelemetry integrates with .NET's logging system and adds support for advanced features, like sending logs to different places, filtering logs, and adding extra details to the logs (such as which machine or environment generated them). Every .NET service should use ",(0,s.jsx)(n.strong,{children:"OpenTelemetry"})," to ensure that logging is consistent and useful across all services."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"log-destinations-sinks",children:"Log Destinations (Sinks)"}),"\n",(0,s.jsx)(n.p,{children:'By default, the logs should be sent to two places (called "sinks"):'}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Console Sink"}),": This sends logs to the service's console output. This is useful because you can easily view the logs by running command-line tools, like ",(0,s.jsx)(n.code,{children:"kubectl logs"}),", to see what's happening with the service in real time."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Application Insights Sink"}),": This sends logs to ",(0,s.jsx)(n.strong,{children:"Application Insights"}),", which is the main logging platform used to store and analyze logs. It keeps logs from all services in one place, making it easier to investigate problems later."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Using both the console and Application Insights gives a quick way to check logs in real time while also ensuring that all logs are stored and available for more detailed analysis later."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"opentelemetry-configuration",children:"OpenTelemetry Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Here's an example of what the ",(0,s.jsx)(n.code,{children:"Program.cs"})," file might look like when using OpenTelemetry for logging:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"// Register OpenTelemetry\nbuilder.Services.AddOpenTelemetry()\n    .WithTracing(tracingBuilder =>\n    {\n        tracingBuilder.ConfigureResource(resource =>\n        {\n            resource.AddService(otlpServiceName);\n        });\n        tracingBuilder.AddAspNetCoreInstrumentation();\n        tracingBuilder.AddConsoleExporter(options =>\n        {\n            options.Targets = ConsoleExporterOutputTargets.Debug;\n        });\n    })\n    .WithMetrics(metricProviderBuilder =>\n    {\n        metricProviderBuilder.ConfigureResource(resource =>\n        {\n            resource.AddService(otlpServiceName);\n        });\n        metricProviderBuilder.AddAspNetCoreInstrumentation()\n            .AddAspNetCoreInstrumentation()\n            .AddConsoleExporter();\n    })\n    .WithLogging(loggerProviderBuilder =>\n    {\n        loggerProviderBuilder.ConfigureResource(resource =>\n        {\n            resource.AddService(otlpServiceName);\n        });\n        loggerProviderBuilder.AddConsoleExporter();\n    })\n    .UseOtlpExporter();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Here's an example of what the ",(0,s.jsx)(n.code,{children:"appsettings.json"})," configuration file might look like when using OpenTelemetry for logging:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "OTEL_EXPORTER_OTLP_ENDPOINT": "REPLACE_ME",\n    "APPLICATIONINSIGHTS_CONNECTION_STRING": "InstrumentationKey=REPLACE_ME"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"key-points",children:"Key Points"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Console Sink"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Sends logs to the console, so you can quickly check what's happening with your service in real time."}),"\n",(0,s.jsxs)(n.li,{children:["For example, when using ",(0,s.jsx)(n.code,{children:"kubectl logs"}),", you can see these logs immediately."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Application Insights Sink"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Sends logs to ",(0,s.jsx)(n.strong,{children:"Application Insights"}),", which stores logs from all your services for future analysis."]}),"\n",(0,s.jsx)(n.li,{children:"This makes it easier to investigate issues that happened in the past."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Log Levels"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.strong,{children:"LogLevel"}),' section controls what kinds of logs are generated. The default level is set to "Information", which means logs that are informational or more severe (like warnings or errors) will be logged.']}),"\n",(0,s.jsx)(n.li,{children:"You can override the log level for specific parts of your application if needed."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Resource Attributes"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"These are extra details added to every log, such as the service name, domain (namespace), and environment (e.g., dev, production). This helps you filter and analyze logs later by knowing where they came from."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Filtering Logs"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'OpenTelemetry allows you to ignore or exclude certain logs, for example, if you want to filter out "health check" logs that are not useful for troubleshooting.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By using OpenTelemetry in .NET, you can take full advantage of enhanced logging features that help you understand what's happening in your application. It also ensures your logs are properly forwarded to tools like Application Insights for monitoring and investigation."})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(6540);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);