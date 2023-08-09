"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[910],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(f,s(s({ref:t},c),{},{components:a})):n.createElement(f,s({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1669:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),s=["components"],o={id:"datastacks",title:"Datastacks overview",sidebar_label:"Datastacks",hide_title:!1,hide_table_of_contents:!1,description:"Overview of the Datastacks utility",keywords:["data","python","etl","cli","azure","template"]},l=void 0,d={unversionedId:"workloads/azure/data/etl_pipelines/datastacks",id:"workloads/azure/data/etl_pipelines/datastacks",isDocsHomePage:!1,title:"Datastacks overview",description:"Overview of the Datastacks utility",source:"@site/docs/workloads/azure/data/etl_pipelines/datastacks.md",sourceDirName:"workloads/azure/data/etl_pipelines",slug:"/workloads/azure/data/etl_pipelines/datastacks",permalink:"/docs/workloads/azure/data/etl_pipelines/datastacks",tags:[],version:"current",frontMatter:{id:"datastacks",title:"Datastacks overview",sidebar_label:"Datastacks",hide_title:!1,hide_table_of_contents:!1,description:"Overview of the Datastacks utility",keywords:["data","python","etl","cli","azure","template"]},sidebar:"docs",previous:{title:"Data Quality",permalink:"/docs/workloads/azure/data/etl_pipelines/data_quality_azure"},next:{title:"Quickstart",permalink:"/docs/workloads/common/data/pysparkle/pysparkle_quickstart"}},c=[{value:"Using the Datastacks CLI",id:"using-the-datastacks-cli",children:[],level:2},{value:"Generating data workloads",id:"generating-data-workloads",children:[{value:"Commands",id:"commands",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"Required config file",id:"required-config-file",children:[],level:3}],level:2}],p={toc:c},u="wrapper";function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Datastacks is a utility built to support various functions within the Ensono Stacks Data Platform. The library and its associated Python-based CLI is intended to assist developers working within a deployed Stacks Data Platform, supporting common tasks such as generating new data engineering workloads and running Spark jobs."),(0,i.kt)("h2",{id:"using-the-datastacks-cli"},"Using the Datastacks CLI"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/getting_started/dev_quickstart_data_azure"},"Setup project environment"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Initiate Datastacks using poetry:\npoetry run datastacks\n\n# Run Datastacks from the command line\ndatastacks --help\n\n# Alternatively, run using entrypoint script\npython datastacks/datastacks_cli.py --help\n")),(0,i.kt)("h2",{id:"generating-data-workloads"},"Generating data workloads"),(0,i.kt)("p",null,"Datastacks can be used to generate all the resources required for a new data engineering workload - for example a data ingest pipeline. This will create all resources required for the workload, based upon templates within the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/amido/stacks-azure-data/tree/main/de_templates"},"de_templates")," directory."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/architecture/architecture_data_azure#data-engineering-workloads"},"deployment architecture")," section shows the workflow for using Datastacks to generate a new workload.\nSee ",(0,i.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/getting_started/etl_pipelines_deployment_azure"},"ETL Pipeline Deployment")," for a step-by-step guide on deploying a new workload using Datastacks."),(0,i.kt)("h3",{id:"commands"},"Commands"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"generate")),": This command contains subcommands which generate components for the data platform given a config file."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ingest")),": This subcommand utilises the template for ingest data pipelines, and uses a given config file to generate the required code for a new ingest pipeline ready for use. A flag can be included to specify whether or not to include data quality components in the pipeline.")))),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Generate resources for an ingest pipeline\ndatastacks generate ingest --config="de_templates/test_config_ingest.yaml"\n\n# Generate resources for an ingest pipeline, with added Data Quality steps\ndatastacks generate ingest --config="de_templates/test_config_ingest.yaml" --data-quality\n')),(0,i.kt)("h3",{id:"required-config-file"},"Required config file"),(0,i.kt)("p",null,"In order to generate a new data engineering workload the Datastacks CLI takes a path to a config file. This config file should be a yaml file and have the below format. A sample config file is included in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/amido/stacks-azure-data/tree/main/de_templates"},"de_templates")," folder."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# `dataset_name` parameter is used to determine names of the following ADF resources:\n# - pipeline: Ingest_<dataset_name>\n# - dataset: ds_<dataset_name>\n# - linked service: ls_<dataset_name>\ndataset_name: AzureSql_Generated_Example\npipeline_description: "Ingest from demo Azure SQL database using ingest config file."\ndata_source_type: azure_sql\n\nkey_vault_linked_service_name: ls_KeyVault\ndata_source_password_key_vault_secret_name: sql-password\ndata_source_connection_string_variable_name: sql_connection\n\n# Azure DevOps configurations\n\nado_variable_groups_nonprod:\n  - amido-stacks-de-pipeline-nonprod\n  - amido-stacks-infra-credentials-nonprod\n  - stacks-credentials-nonprod-kv\n\nado_variable_groups_prod:\n  - amido-stacks-de-pipeline-prod\n  - amido-stacks-infra-credentials-prod\n  - stacks-credentials-prod-kv\n\n# Datalake containers\n\nbronze_container: raw\nsilver_container: staging\ngold_container: curated\n\n#######################\n# Optional parameters #\n#######################\n\n# Deployment mode for terraform; if not set, the default is Incremental\ndefault_arm_deployment_mode: Incremental\n\n# Workload config; if not set, the default values are 2020-01-01 and 2020-01-31 resp.\n# These are used to set the default time window in the pipeline and in the corresponding e2e tests\nwindow_start_default: 2020-01-01\nwindow_end_default: 2020-01-31\n')))}m.isMDXComponent=!0}}]);