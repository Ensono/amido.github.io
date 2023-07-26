"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[4635],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),k=n,m=p["".concat(l,".").concat(k)]||p[k]||d[k]||i;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},9804:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],s={id:"infrastructure_data_azure",title:"Infrastructure",sidebar_label:"Infrastructure",hide_title:!1,hide_table_of_contents:!1,description:"Infrastructure overview",keywords:["azure","resource group","adf","adls","blob","databricks","key vault"]},l=void 0,u={unversionedId:"workloads/azure/data/infrastructure_data_azure",id:"workloads/azure/data/infrastructure_data_azure",isDocsHomePage:!1,title:"Infrastructure",description:"Infrastructure overview",source:"@site/docs/workloads/azure/data/infrastructure_data_azure.md",sourceDirName:"workloads/azure/data",slug:"/workloads/azure/data/infrastructure_data_azure",permalink:"/docs/workloads/azure/data/infrastructure_data_azure",tags:[],version:"current",frontMatter:{id:"infrastructure_data_azure",title:"Infrastructure",sidebar_label:"Infrastructure",hide_title:!1,hide_table_of_contents:!1,description:"Infrastructure overview",keywords:["azure","resource group","adf","adls","blob","databricks","key vault"]},sidebar:"docs",previous:{title:"Requirements",permalink:"/docs/workloads/azure/data/requirements_data_azure"},next:{title:"Data Ingestion",permalink:"/docs/workloads/azure/data/etl_pipelines/ingest_data_azure"}},c=[{value:"Infra",id:"infra",children:[],level:2},{value:"Networking",id:"networking",children:[{value:"Databricks secure cluster connectivity",id:"databricks-secure-cluster-connectivity",children:[],level:3}],level:2}],p={toc:c},d="wrapper";function k(e){var t=e.components,s=(0,n.Z)(e,o);return(0,i.kt)(d,(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Core data platform resources are defined within Terraform templates and grouped inside\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/amido/stacks-azure-data/tree/main/deploy/azure"},"deploy/azure")," directory.\nThere are two subfolders in this directory:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"infra")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"networking"))),(0,i.kt)("h2",{id:"infra"},"Infra"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"infra")," subfolder contains the following definitions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Resource Group")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Azure SQL Database")," sample instance with database schemas"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Key Vault")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Key Vault Secrets"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Connection strings for the created SQL databases"),(0,i.kt)("li",{parentName:"ul"},"Passwords to the SQL Databases"),(0,i.kt)("li",{parentName:"ul"},"Service Principal Secret"),(0,i.kt)("li",{parentName:"ul"},"Azure Tenant ID \u2013 Directory ID for Azure Active Directory application"),(0,i.kt)("li",{parentName:"ul"},"Azure Client ID \u2013 Application ID for Azure Active Directory application"),(0,i.kt)("li",{parentName:"ul"},"Databricks access token & host"),(0,i.kt)("li",{parentName:"ul"},"Other secret names with empty values to be replaced manually. Existing secrets are not\noverwritten."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Azure Data Lake Storage Gen2")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Azure Blob Storage")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Databricks Workspace")," including:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Key Vault-backed secret scope")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Azure Data Factory")," including:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Managed identity")," for the service instance;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Managed virtual network")," enabled by default. Creating an integration runtime within\na managed virtual network ensures the data integration process is isolated and secure."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Managed private endpoints")," created in the Data Factory managed virtual network, these\nestablish private links to Azure resources, such as:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Blob Storage"),(0,i.kt)("li",{parentName:"ul"},"Azure Data Lake Storage"),(0,i.kt)("li",{parentName:"ul"},"Key Vault"),(0,i.kt)("li",{parentName:"ul"},"SQL Database"),(0,i.kt)("li",{parentName:"ul"},"Databricks Workspace"),(0,i.kt)("li",{parentName:"ul"},"Databricks Browser Authentication Page"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Role assignments")," that assign ADF managed identity roles to access the resources linked by\nthe private endpoints."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Log Analytics Workspace"))),(0,i.kt)("h2",{id:"networking"},"Networking"),(0,i.kt)("p",null,"Using a private network is the default behaviour in Stacks Azure Data Platform. ",(0,i.kt)("inlineCode",{parentName:"p"},"networking"),"\nsubfolder contains configurations for the created network and subnetworks, at its core using\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/amido/stacks-terraform/tree/master/azurerm/modules/azurerm-hub-spoke"},"azurerm-hub-spoke"),"\nStacks Terraform module."),(0,i.kt)("p",null,"The following diagram shows network configuration for the two default environments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hub network (",(0,i.kt)("inlineCode",{parentName:"li"},"is_hub: true"),")"),(0,i.kt)("li",{parentName:"ul"},"Nonprod (",(0,i.kt)("inlineCode",{parentName:"li"},"is_hub: false"),")"),(0,i.kt)("li",{parentName:"ul"},"Prod (",(0,i.kt)("inlineCode",{parentName:"li"},"is_hub: false"),")")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"network_hub_spoke.png",src:r(2299).Z})),(0,i.kt)("h3",{id:"databricks-secure-cluster-connectivity"},"Databricks secure cluster connectivity"),(0,i.kt)("p",null,"Stacks Azure Data Platform uses VNet injection to deploy Databricks into a custom virtual network."),(0,i.kt)("p",null,"In most scenarios, we recommend that Azure Databricks is deployed in a fully secure manner, using\nsecure cluster connectivity and disabling public workspace access. This means that Databricks\ncan only be accessed over a private endpoint from within the private network. This also means that\nprojects would need to have networking prerequisites such as ExpressRoute or VPNs in order to access\nthe workspace. If this is not possible, then a virtual machine will need to be set up within the\ntransit subnet. Users will then need to RDP into the VM and access the workspace via that."),(0,i.kt)("p",null,"Even without public IPs and with the data plane deployed into our VNet, there is still the option\nto toggle access to the Workspace UI via public networks. The default configuration disallows access\nto the Databricks workspace over the public internet in production environments, while leaving it\nopen in development environments. This approach enhances the developer experience in case there is\nno properly configured networking/VPN set up in the target subscription."),(0,i.kt)("p",null,"Enabling public workspace access only opens access to the UI via public internet. Access is still\nrestricted based on the IAM policy."),(0,i.kt)("p",null,"The following diagram depicts the Databricks network configuration."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"network_databricks.png",src:r(7329).Z})))}k.isMDXComponent=!0},7329:function(e,t,r){t.Z=r.p+"assets/images/network_databricks-58bef66a170ba0a4b6644c3c20dc0afa.png"},2299:function(e,t,r){t.Z=r.p+"assets/images/network_hub_spoke-8f920bb21582cdf8cb4d776649649bf8.png"}}]);