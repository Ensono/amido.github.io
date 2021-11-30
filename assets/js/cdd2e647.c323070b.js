"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[2094],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),g=i,f=p["".concat(c,".").concat(g)]||p[g]||d[g]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},838:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],s={id:"logging_and_instrumentation_csr",title:"Logging and Instrumentation",sidebar_label:"Logging and Instrumentation",hide_title:!1,hide_table_of_contents:!0,description:"CSR Application - Logging and Instrumentation",keywords:["rest","api","csr","application","template","logging","instrumentation","client","side","rendering","client side rendering"]},c=void 0,l={unversionedId:"workloads/azure/frontend/CSR/logging_and_instrumentation_csr",id:"workloads/azure/frontend/CSR/logging_and_instrumentation_csr",isDocsHomePage:!1,title:"Logging and Instrumentation",description:"CSR Application - Logging and Instrumentation",source:"@site/docs/workloads/azure/frontend/CSR/logging_and_instrumentation_csr.md",sourceDirName:"workloads/azure/frontend/CSR",slug:"/workloads/azure/frontend/CSR/logging_and_instrumentation_csr",permalink:"/docs/workloads/azure/frontend/CSR/logging_and_instrumentation_csr",tags:[],version:"current",frontMatter:{id:"logging_and_instrumentation_csr",title:"Logging and Instrumentation",sidebar_label:"Logging and Instrumentation",hide_title:!1,hide_table_of_contents:!0,description:"CSR Application - Logging and Instrumentation",keywords:["rest","api","csr","application","template","logging","instrumentation","client","side","rendering","client side rendering"]},sidebar:"docs",previous:{title:"Api Definition",permalink:"/docs/workloads/azure/frontend/CSR/api_definition_csr"},next:{title:"Infrastructure",permalink:"/docs/workloads/azure/frontend/CSR/infrastructure_csr"}},u=[{value:"Utility Functions",id:"utility-functions",children:[],level:2}],d={toc:u};function p(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview"},"Application insights"),"\nis used to monitor both the node(express) instance and the NextJS client code\nrunning on the browser. "),(0,o.kt)("p",null,"AppInsights is configured with the ",(0,o.kt)("inlineCode",{parentName:"p"},"instrumentationKey"),"\n(or ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.APPINSIGHTS_INSTRUMENTATIONKEY"),") provided from the environment\nvariables. "),(0,o.kt)("p",null," By default this will add telemetry to the Redux Reducers, and track all the dispatched actions!"),(0,o.kt)("p",null," Awesome!"),(0,o.kt)("h2",{id:"utility-functions"},"Utility Functions"),(0,o.kt)("p",null," There is also a set of utility functions to handle custom telemetry:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"   trackError(error :  Error)\n\n   customTrace(error :  Error)\n")),(0,o.kt)("p",null," You can find those in ",(0,o.kt)("inlineCode",{parentName:"p"},"utility/telemetry.ts")," file."))}p.isMDXComponent=!0}}]);