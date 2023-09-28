"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[3556],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return k}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6931:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),o=["components"],i={id:"etl_intro_data_azure",title:"ETL Overview",sidebar_label:"ETL Overview",hide_title:!1,hide_table_of_contents:!1,description:"Introduction to ETL Pipelines",keywords:["ingest","silver","gold","bronze","databricks","etl","medallion"]},s=void 0,d={unversionedId:"workloads/azure/data/etl_pipelines/etl_intro_data_azure",id:"workloads/azure/data/etl_pipelines/etl_intro_data_azure",title:"ETL Overview",description:"Introduction to ETL Pipelines",source:"@site/docs/workloads/azure/data/etl_pipelines/etl_intro_data_azure.md",sourceDirName:"workloads/azure/data/etl_pipelines",slug:"/workloads/azure/data/etl_pipelines/etl_intro_data_azure",permalink:"/docs/workloads/azure/data/etl_pipelines/etl_intro_data_azure",draft:!1,tags:[],version:"current",frontMatter:{id:"etl_intro_data_azure",title:"ETL Overview",sidebar_label:"ETL Overview",hide_title:!1,hide_table_of_contents:!1,description:"Introduction to ETL Pipelines",keywords:["ingest","silver","gold","bronze","databricks","etl","medallion"]},sidebar:"docs",previous:{title:"Infrastructure",permalink:"/docs/workloads/azure/data/infrastructure_data_azure"},next:{title:"Datastacks",permalink:"/docs/workloads/azure/data/etl_pipelines/datastacks"}},p={},u=[{value:"Medallion architecture",id:"medallion-architecture",level:2},{value:"Datastacks",id:"datastacks",level:2},{value:"Quality assurance",id:"quality-assurance",level:2},{value:"Sample dataset",id:"sample-dataset",level:2}],c={toc:u},m="wrapper";function k(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Ensono Stacks Data Platform solution accelerates the generation of production-ready ETL / ELT pipelines and workloads. New data engineering workloads can be generated through the ",(0,l.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/etl_pipelines/datastacks"},"Datastacks")," utility, while a range of example data workloads and pipelines are also provided. These workloads cover all stages from ingesting data from source, applying data transformations across data lake layers, ultimately enabling end-user data visualisations and analytics."),(0,l.kt)("h2",{id:"medallion-architecture"},"Medallion architecture"),(0,l.kt)("p",null,"The data lake structure and approach used in Ensono Stacks is based upon the\n",(0,l.kt)("a",{parentName:"p",href:"https://www.databricks.com/glossary/medallion-architecture"},"medallion architecture")," design pattern. This approach\ndelivers a lakehouse solution, with the following structured data transformation layers:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data lake layer"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default container name"),(0,l.kt)("th",{parentName:"tr",align:null},"Data format"),(0,l.kt)("th",{parentName:"tr",align:null},"Stacks workload type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bronze"),(0,l.kt)("td",{parentName:"tr",align:null},"The initial landing area where data is stored as per its original source, prior to any transformations."),(0,l.kt)("td",{parentName:"tr",align:null},"raw"),(0,l.kt)("td",{parentName:"tr",align:null},"Parquet"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/workloads/azure/data/etl_pipelines/ingest_data_azure"},"Data ingest"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Silver"),(0,l.kt)("td",{parentName:"tr",align:null},"The data has been cleansed, validated and stored in an optimal format to support downstream analytic use-cases."),(0,l.kt)("td",{parentName:"tr",align:null},"staging"),(0,l.kt)("td",{parentName:"tr",align:null},"Delta"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/workloads/azure/data/etl_pipelines/data_processing"},"Data processing"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Gold"),(0,l.kt)("td",{parentName:"tr",align:null},"Reliable data entities prepared for specific use-cases. These typically combine and aggregate datasets from the silver layer."),(0,l.kt)("td",{parentName:"tr",align:null},"conformance"),(0,l.kt)("td",{parentName:"tr",align:null},"Delta"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/workloads/azure/data/etl_pipelines/data_processing"},"Data processing"))))),(0,l.kt)("h2",{id:"datastacks"},"Datastacks"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/etl_pipelines/datastacks"},"Datastacks")," is a library and CLI built to accelerate the development of data engineering workloads in the data platform. It features a range of utilities to enhance the process for developing and deploying production-ready data pipelines and workloads."),(0,l.kt)("h2",{id:"quality-assurance"},"Quality assurance"),(0,l.kt)("p",null,"Quality and reliability of data workloads are at the core of Ensono Stacks data platform. This is ensured through frameworks for ",(0,l.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/etl_pipelines/data_quality_azure"},"data quality")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/etl_pipelines/testing_data_azure"},"automated testing"),"."),(0,l.kt)("h2",{id:"sample-dataset"},"Sample dataset"),(0,l.kt)("p",null,"The example workloads included in the solution are based upon an\n",(0,l.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/getting_started/example_data_source"},"example Azure SQL data source and dataset"),". This data source may optionally\nbe deployed as part of the data platform, to allow full demonstration testing of these example workloads."))}k.isMDXComponent=!0}}]);