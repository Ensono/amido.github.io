"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[3830],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return r?a.createElement(m,i(i({ref:t},s),{},{components:r})):a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2398:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"intro_data_azure",title:"Stacks Azure Data Platform",sidebar_label:"Architecture Overview",hide_title:!1,hide_table_of_contents:!1,description:"Architecture overview for the deployed solution",keywords:["data","python","etl","databricks","azure","adf"]},u=void 0,c={unversionedId:"workloads/azure/data/intro_data_azure",id:"workloads/azure/data/intro_data_azure",isDocsHomePage:!1,title:"Stacks Azure Data Platform",description:"Architecture overview for the deployed solution",source:"@site/docs/workloads/azure/data/intro_data_azure.md",sourceDirName:"workloads/azure/data",slug:"/workloads/azure/data/intro_data_azure",permalink:"/docs/workloads/azure/data/intro_data_azure",tags:[],version:"current",frontMatter:{id:"intro_data_azure",title:"Stacks Azure Data Platform",sidebar_label:"Architecture Overview",hide_title:!1,hide_table_of_contents:!1,description:"Architecture overview for the deployed solution",keywords:["data","python","etl","databricks","azure","adf"]},sidebar:"docs",previous:{title:"Security",permalink:"/docs/workloads/azure/backend/netcore/security_netcore"},next:{title:"Repository",permalink:"/docs/workloads/azure/data/repository_data_azure"}},s=[{value:"High-level architecture",id:"high-level-architecture",children:[],level:3},{value:"Infrastructure deployed",id:"infrastructure-deployed",children:[],level:3}],d={toc:s},p="wrapper";function f(e){var t=e.components,l=(0,n.Z)(e,i);return(0,o.kt)(p,(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/amido/stacks-azure-data"},"Stacks Azure Data Platform")," solution provides\na template for deploying a production-ready data platform, including ",(0,o.kt)("strong",{parentName:"p"},"Azure Data Factory")," for data\ningestion and orchestration, ",(0,o.kt)("strong",{parentName:"p"},"Databricks")," for data processing and ",(0,o.kt)("strong",{parentName:"p"},"Azure Data Lake Storage Gen2"),"\nfor data lake storage. The solution's data workload naming convention originates from Databricks'\nMedallion Architecture, a system emphasising structured data transformation layers."),(0,o.kt)("p",null,"Key elements of the solution include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Infrastructure as code (IaC) for all infrastructure components (Terraform & ARM Templates);"),(0,o.kt)("li",{parentName:"ul"},"Azure Data Factory (ADF) resources and a sample ingest pipeline that transfers data from a sample\nsource into a landing (Bronze) data lake zone;"),(0,o.kt)("li",{parentName:"ul"},"Sample data processing pipelines named Silver and Gold. These are responsible for data\ntransformations from 'Bronze to Silver' layer and from 'Silver to Gold' layer, respectively;"),(0,o.kt)("li",{parentName:"ul"},"Data Quality validations;"),(0,o.kt)("li",{parentName:"ul"},"Deployment pipelines to enable CI/CD and DataOps for all components;"),(0,o.kt)("li",{parentName:"ul"},"Automated tests to ensure quality assurance and operational efficiency.")),(0,o.kt)("h3",{id:"high-level-architecture"},"High-level architecture"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"High-level architecture",src:r(3229).Z})),(0,o.kt)("h3",{id:"infrastructure-deployed"},"Infrastructure deployed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Resource Group"),(0,o.kt)("li",{parentName:"ul"},"Azure SQL Database"),(0,o.kt)("li",{parentName:"ul"},"Key Vault"),(0,o.kt)("li",{parentName:"ul"},"Azure Data Lake Storage Gen2"),(0,o.kt)("li",{parentName:"ul"},"Azure Blob Storage"),(0,o.kt)("li",{parentName:"ul"},"Databricks Workspace"),(0,o.kt)("li",{parentName:"ul"},"Azure Data Factory"),(0,o.kt)("li",{parentName:"ul"},"Log Analytics Workspace")),(0,o.kt)("p",null,"For details please see ",(0,o.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/components/infrastructure/core_data_platform_azure"},"Infrastructure"),"."))}f.isMDXComponent=!0},3229:function(e,t,r){t.Z=r.p+"assets/images/Stacks_Azure_Data_Platform-HLD-46ecbcba3e69eb2fe5fd1e354960ed5f.png"}}]);