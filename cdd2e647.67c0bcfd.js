(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{181:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(2),o=t(6),i=(t(0),t(210)),a={id:"logging_and_instrumentation_csr",title:"Logging and Instrumentation",sidebar_label:"Logging and Instrumentation",hide_title:!1,hide_table_of_contents:!0,description:"CSR Application - Logging and Instrumentation",keywords:["rest","api","csr","application","template","logging","instrumentation","client","side","rendering","client side rendering"]},c={unversionedId:"workloads/azure/frontend/CSR/logging_and_instrumentation_csr",id:"workloads/azure/frontend/CSR/logging_and_instrumentation_csr",isDocsHomePage:!1,title:"Logging and Instrumentation",description:"CSR Application - Logging and Instrumentation",source:"@site/docs/workloads/azure/frontend/CSR/logging_and_instrumentation_csr.md",slug:"/workloads/azure/frontend/CSR/logging_and_instrumentation_csr",permalink:"/stacks/docs/workloads/azure/frontend/CSR/logging_and_instrumentation_csr",version:"current",sidebar_label:"Logging and Instrumentation",sidebar:"docs",previous:{title:"Api Definition",permalink:"/stacks/docs/workloads/azure/frontend/CSR/api_definition_crs"},next:{title:"CSR Application - Azure Infrastructure",permalink:"/stacks/docs/workloads/azure/frontend/CSR/infrastructure_csr"}},s=[{value:"Utility Functions",id:"utility-functions",children:[]}],l={rightToc:s};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview"}),"Application insights"),"\nis used to monitor both the node(express) instance and the NextJS client code\nrunning on the browser. "),Object(i.b)("p",null,"AppInsights is configured with the ",Object(i.b)("inlineCode",{parentName:"p"},"instrumentationKey"),"\n(or ",Object(i.b)("inlineCode",{parentName:"p"},"process.env.APPINSIGHTS_INSTRUMENTATIONKEY"),") provided from the environment\nvariables. "),Object(i.b)("p",null," By default this will add telemetry to the Redux Reducers, and track all the dispatched actions!"),Object(i.b)("p",null," Awesome!"),Object(i.b)("h2",{id:"utility-functions"},"Utility Functions"),Object(i.b)("p",null," There is also a set of utility functions to handle custom telemetry:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"   trackError(error :  Error)\n\n   customTrace(error :  Error)\n")),Object(i.b)("p",null," You can find those in ",Object(i.b)("inlineCode",{parentName:"p"},"utility/telemetry.ts")," file."))}u.isMDXComponent=!0},210:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return g}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),f=r,g=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return t?o.a.createElement(g,c(c({ref:n},l),{},{components:t})):o.a.createElement(g,c({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);