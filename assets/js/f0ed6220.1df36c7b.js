"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[8842],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),k=n,f=c["".concat(s,".").concat(k)]||c[k]||d[k]||i;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},1608:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],l={id:"pyspark_utilities",title:"PySpark utilities",sidebar_label:"PySpark utilities",hide_title:!1,hide_table_of_contents:!1,description:"PySpark utilities overview",keywords:["pyspark","spark","pyspark","python","etl"]},s=void 0,u={unversionedId:"workloads/azure/data/data_engineering/pyspark_utilities",id:"workloads/azure/data/data_engineering/pyspark_utilities",title:"PySpark utilities",description:"PySpark utilities overview",source:"@site/docs/workloads/azure/data/data_engineering/pyspark_utilities.md",sourceDirName:"workloads/azure/data/data_engineering",slug:"/workloads/azure/data/data_engineering/pyspark_utilities",permalink:"/docs/workloads/azure/data/data_engineering/pyspark_utilities",draft:!1,tags:[],version:"current",frontMatter:{id:"pyspark_utilities",title:"PySpark utilities",sidebar_label:"PySpark utilities",hide_title:!1,hide_table_of_contents:!1,description:"PySpark utilities overview",keywords:["pyspark","spark","pyspark","python","etl"]},sidebar:"docs",previous:{title:"Data Quality",permalink:"/docs/workloads/azure/data/data_engineering/data_quality_azure"},next:{title:"Testing",permalink:"/docs/workloads/azure/data/data_engineering/testing_data_azure"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:3}],d={toc:c},k="wrapper";function f(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)(k,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/data_engineering/datastacks"},"Datastacks")," Python library contains utilities built to streamline data processing workflows with Apache Spark, and is an integral part of data workloads in Ensono Stacks."),(0,i.kt)("p",null,"Datastacks also provides the foundation for the ",(0,i.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/data_engineering/data_quality_azure"},"Data Quality framework")," in Stacks."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To develop and test using PySpark with Datastacks, the following setup is required:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install the ",(0,i.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/getting_started/requirements_data_azure#local-development"},"local development requirements"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/getting_started/dev_quickstart_data_azure"},"Setup your local development environment"),".")),(0,i.kt)("p",null,"To interact with Azure resources, the following additional environment variables are currently required:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AZURE_TENANT_ID"),": Directory ID for Azure Active Directory application."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AZURE_CLIENT_ID"),": Application ID for Azure Active Directory application."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AZURE_CLIENT_SECRET"),": Service Principal Secret."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ADLS_ACCOUNT"),": ADLS account name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BLOB_ACCOUNT"),": Blob Storage account name.")),(0,i.kt)("p",null,"These are defined in Databricks clusters - see ",(0,i.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/getting_started/dev_quickstart_data_azure#optional-pyspark-development-in-databricks"},"development in Databricks")," for further details."))}f.isMDXComponent=!0}}]);