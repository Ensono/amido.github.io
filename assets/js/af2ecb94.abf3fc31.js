"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[5072],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return y}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),k=n,y=c["".concat(s,".").concat(k)]||c[k]||d[k]||i;return r?a.createElement(y,l(l({ref:t},u),{},{components:r})):a.createElement(y,l({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},5951:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),l=["components"],o={id:"pysparkle_quickstart",title:"PySparkle",sidebar_label:"Quickstart",hide_title:!1,hide_table_of_contents:!1,description:"PySparkle library overview",keywords:["pysparkle","spark","pyspark","python","etl"]},s=void 0,p={unversionedId:"workloads/azure/data/etl_pipelines/pysparkle/pysparkle_quickstart",id:"workloads/azure/data/etl_pipelines/pysparkle/pysparkle_quickstart",isDocsHomePage:!1,title:"PySparkle",description:"PySparkle library overview",source:"@site/docs/workloads/azure/data/etl_pipelines/pysparkle/pysparkle_quickstart.md",sourceDirName:"workloads/azure/data/etl_pipelines/pysparkle",slug:"/workloads/azure/data/etl_pipelines/pysparkle/pysparkle_quickstart",permalink:"/docs/workloads/azure/data/etl_pipelines/pysparkle/pysparkle_quickstart",tags:[],version:"current",frontMatter:{id:"pysparkle_quickstart",title:"PySparkle",sidebar_label:"Quickstart",hide_title:!1,hide_table_of_contents:!1,description:"PySparkle library overview",keywords:["pysparkle","spark","pyspark","python","etl"]},sidebar:"docs",previous:{title:"Datastacks",permalink:"/docs/workloads/azure/data/etl_pipelines/datastacks"},next:{title:"Data Quality",permalink:"/docs/workloads/azure/data/etl_pipelines/pysparkle/pysparkle_data_quality"}},u=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Key components",id:"key-components",children:[],level:2}],c={toc:u},d="wrapper";function k(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ensono/stacks-azure-data/tree/main/pysparkle"},"PySparkle")," is a Python library built to streamline data processing workflows with Apache Spark, and is an integral part of the Stacks Data Platform."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To develop and test using Pysparkle:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install the ",(0,i.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/requirements_data_azure#local-development"},"local development requirements"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/getting_started/dev_quickstart_data_azure"},"Setup your local development environment"),".")),(0,i.kt)("h2",{id:"key-components"},"Key components"),(0,i.kt)("p",null,"PySparkle is designed to assist implementing a ",(0,i.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/etl_pipelines/etl_intro_data_azure#data-pipelines"},"medallion data lake"),".\nThe key components of PySparkle include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ETL Transformation Utilities")," which streamline Data Pipelines by:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Offering PySpark utility functions. They accept raw data in various formats (e.g. CSV, Parquet, JSON, Delta)\nand convert it into a structured Delta format. PySparkle also facilitates pre-defined or user-defined transformations\non dataframes."),(0,i.kt)("li",{parentName:"ul"},"Providing storage utilities that ensure smooth and secure interaction with Azure Data Lake and Blob storage."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/workloads/azure/data/etl_pipelines/pysparkle/pysparkle_data_quality"},"Data Quality")),": PySparkle performs data quality checks according to\nuser-provided configurations, ensuring the reliability and accuracy of the data.")))}k.isMDXComponent=!0}}]);