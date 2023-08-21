"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[3830],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),f=n,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},2398:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],l={id:"intro_data_azure",title:"Stacks Azure Data Platform",sidebar_label:"Introduction",hide_title:!1,hide_table_of_contents:!1,description:"Introduction to Stacks Azure Data Platform",keywords:["data","python","etl","databricks","azure","adf","template"]},s=void 0,u={unversionedId:"workloads/azure/data/intro_data_azure",id:"workloads/azure/data/intro_data_azure",isDocsHomePage:!1,title:"Stacks Azure Data Platform",description:"Introduction to Stacks Azure Data Platform",source:"@site/docs/workloads/azure/data/intro_data_azure.md",sourceDirName:"workloads/azure/data",slug:"/workloads/azure/data/intro_data_azure",permalink:"/docs/workloads/azure/data/intro_data_azure",tags:[],version:"current",frontMatter:{id:"intro_data_azure",title:"Stacks Azure Data Platform",sidebar_label:"Introduction",hide_title:!1,hide_table_of_contents:!1,description:"Introduction to Stacks Azure Data Platform",keywords:["data","python","etl","databricks","azure","adf","template"]},sidebar:"docs",previous:{title:"Security",permalink:"/docs/workloads/azure/backend/netcore/security_netcore"},next:{title:"Architecture Overview",permalink:"/docs/workloads/azure/data/architecture/architecture_data_azure"}},c=[{value:"High-level architecture",id:"high-level-architecture",children:[],level:3},{value:"Infrastructure deployed",id:"infrastructure-deployed",children:[],level:3},{value:"Data Engineering workloads",id:"data-engineering-workloads",children:[],level:3}],d={toc:c},p="wrapper";function f(e){var t=e.components,l=(0,n.Z)(e,i);return(0,o.kt)(p,(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/amido/stacks-azure-data"},"Stacks Azure Data Platform")," solution provides\na template for deploying a production-ready data platform, including ",(0,o.kt)("strong",{parentName:"p"},"Azure Data Factory")," for data\ningestion and orchestration, ",(0,o.kt)("strong",{parentName:"p"},"Databricks")," for data processing and ",(0,o.kt)("strong",{parentName:"p"},"Azure Data Lake Storage Gen2"),"\nfor data lake storage. The solution's data workload naming convention originates from Databricks'\nMedallion Architecture, a system emphasising structured data transformation layers."),(0,o.kt)("p",null,"Key elements of the solution include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Infrastructure as code (IaC) for all infrastructure components (Terraform);"),(0,o.kt)("li",{parentName:"ul"},"A sample ingest pipeline that transfers data from a source into a landing (Bronze) data lake zone;"),(0,o.kt)("li",{parentName:"ul"},"Sample data processing pipelines named Silver and Gold. Silver is responsible for data transformations from Bronze\nto Silver layer, while Gold handles transformations from Silver to Gold layer;"),(0,o.kt)("li",{parentName:"ul"},"Data Quality validations;"),(0,o.kt)("li",{parentName:"ul"},"Datastacks CLI and templates, which allow generation of new ingestion or data processing pipelines based\non the provided configuration;"),(0,o.kt)("li",{parentName:"ul"},"Deployment pipelines to enable CI/CD and DataOps for all components;"),(0,o.kt)("li",{parentName:"ul"},"Automated tests to ensure quality assurance and operational efficiency;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/etl_pipelines/datastacks"},"Datastacks")," - a library and CLI built to accelerate the development of data engineering\nworkloads in the data platform;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/workloads/common/data/pysparkle/pysparkle_quickstart"},"Pysparkle")," - a library built to streamline data processing activities running in Apache Spark.")),(0,o.kt)("h3",{id:"high-level-architecture"},"High-level architecture"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"High-level architecture.png",src:a(3229).Z})),(0,o.kt)("h3",{id:"infrastructure-deployed"},"Infrastructure deployed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Resource Group"),(0,o.kt)("li",{parentName:"ul"},"Key Vault"),(0,o.kt)("li",{parentName:"ul"},"Azure Data Lake Storage Gen2"),(0,o.kt)("li",{parentName:"ul"},"Azure Blob Storage"),(0,o.kt)("li",{parentName:"ul"},"Azure Data Factory"),(0,o.kt)("li",{parentName:"ul"},"Log Analytics Workspace"),(0,o.kt)("li",{parentName:"ul"},"Databricks Workspace (optional)"),(0,o.kt)("li",{parentName:"ul"},"Azure SQL Database (optional)")),(0,o.kt)("p",null,"For details please see ",(0,o.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/infrastructure_data_azure"},"Infrastructure"),"."),(0,o.kt)("h3",{id:"data-engineering-workloads"},"Data Engineering workloads"),(0,o.kt)("p",null,"Example data engineering workloads are provided, which run within a deployed Stacks Azure Data Platform.\nThese are categorised as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/etl_pipelines/ingest_data_azure"},"Ingest")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/etl_pipelines/silver_data_azure"},"Bronze to Silver"))),(0,o.kt)("p",null,"Each of the ingest and data processing workloads may optionally include ",(0,o.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/etl_pipelines/data_quality_azure"},"Data Quality checks"),"."))}f.isMDXComponent=!0},3229:function(e,t,a){t.Z=a.p+"assets/images/Stacks_Azure_Data_Platform-HLD-46ecbcba3e69eb2fe5fd1e354960ed5f.png"}}]);