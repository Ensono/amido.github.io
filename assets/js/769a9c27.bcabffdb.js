"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[3315],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return f}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=i,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8077:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],l={id:"data_quality_azure",title:"Data Quality",sidebar_label:"Data Quality",hide_title:!1,hide_table_of_contents:!1,description:"Approach to DQ validations",keywords:["data quality","great expectations"]},s=void 0,p={unversionedId:"workloads/azure/data/etl_pipelines/data_quality_azure",id:"workloads/azure/data/etl_pipelines/data_quality_azure",title:"Data Quality",description:"Approach to DQ validations",source:"@site/docs/workloads/azure/data/etl_pipelines/data_quality_azure.md",sourceDirName:"workloads/azure/data/etl_pipelines",slug:"/workloads/azure/data/etl_pipelines/data_quality_azure",permalink:"/docs/workloads/azure/data/etl_pipelines/data_quality_azure",draft:!1,tags:[],version:"current",frontMatter:{id:"data_quality_azure",title:"Data Quality",sidebar_label:"Data Quality",hide_title:!1,hide_table_of_contents:!1,description:"Approach to DQ validations",keywords:["data quality","great expectations"]},sidebar:"docs",previous:{title:"Data Processing Workloads",permalink:"/docs/workloads/azure/data/etl_pipelines/data_processing"},next:{title:"Datastacks",permalink:"/docs/workloads/azure/data/etl_pipelines/datastacks"}},d={},c=[{value:"ADF Pipelines with DQ",id:"adf-pipelines-with-dq",level:2},{value:"Ingest",id:"ingest",level:3},{value:"Silver",id:"silver",level:3},{value:"Usage",id:"usage",level:2},{value:"JSON Configuration File for Great Expectations",id:"json-configuration-file-for-great-expectations",level:2},{value:"Example",id:"example",level:3},{value:"Using environment variables in configuration files",id:"using-environment-variables-in-configuration-files",level:3}],u={toc:c},m="wrapper";function f(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)(m,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ensono Stacks data workloads can be deployed with additional Data Quality checks. These checks validate that the outputs of\na data pipeline meet specified requirements, expressed in a simple, human-readable language. It allows\nyou to assert expectations about your data, which can help catch any discrepancies, anomalies, or\nerrors in your data as early in the pipeline as possible."),(0,r.kt)("p",null,"Data Quality checks are executed as Python Databricks jobs with the quality validation logic\npackaged within our ",(0,r.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/etl_pipelines/pysparkle"},"PySparkle")," library.\nInternally, PySparkle leverages the capabilities of the ",(0,r.kt)("a",{parentName:"p",href:"https://greatexpectations.io/"},"Great Expectations"),"\nlibrary, an open-source Python-based library, to perform these checks."),(0,r.kt)("p",null,"The design of the Data Quality processing is outlined in the following diagram."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ADF_Ingest_AzureSql_Example_DQ.png",src:a(7252).Z,width:"3337",height:"1084"})),(0,r.kt)("h2",{id:"adf-pipelines-with-dq"},"ADF Pipelines with DQ"),(0,r.kt)("h3",{id:"ingest"},"Ingest"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ADF_Ingest_AzureSql_Example_DQ.png",src:a(5094).Z,width:"1046",height:"285"})),(0,r.kt)("h3",{id:"silver"},"Silver"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ADF_silver_dq.png",src:a(5614).Z,width:"667",height:"162"})),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To perform data quality checks against a workload interactively, you can use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/etl_pipelines/datastacks"},"Datastacks")," CLI. Note, this also requires that the ",(0,r.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/etl_pipelines/pysparkle#pysparkle-environment-variables"},"Pysparkle environment variables")," are set:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'datastacks dq --help\ndatastacks dq --config-path "ingest/Ingest_AzureSql_Example/data_quality/ingest_dq.json" --container config\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"config-path")," is a path to a JSON config inside the Azure Blob container, ",(0,r.kt)("inlineCode",{parentName:"p"},"container")," is name of the container. The storage account used will be based upon the ",(0,r.kt)("inlineCode",{parentName:"p"},"BLOB_ACCOUNT")," environment variable."),(0,r.kt)("h2",{id:"json-configuration-file-for-great-expectations"},"JSON Configuration File for Great Expectations"),(0,r.kt)("p",null,"This section describes the structure of the JSON configuration file used in our system.\nThe configuration is defined using Python's Pydantic library for data validation."),(0,r.kt)("p",null,"Here is the description of the main elements:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"gx_directory_path"),": Path to the Great Expectations metadata store."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"dataset_name"),": Name of the dataset that is being processed."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"datasource_config"),": Configuration for the dataset being tested.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"datasource_name"),": Name of the data asset, e.g. table or file name."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"datasource_type"),": Data type of the asset - this can be any type that Spark can read from, e.g. table, parquet, csv, delta."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"data_location"),": Location of the given data asset. It can either be a path to files in the data lake\nor a fully qualified table name, depending on the data source:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the data is stored in a file, like a Parquet file on ADLS, you should\nprovide the complete path to the file. Examples:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"abfss://raw@accountname.dfs.core.windows.net/myfolder/mysubfolder/myfile.parquet"'),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"abfss://raw@accountname.dfs.core.windows.net/myfolder/mysubfolder/*"'),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"abfss://staging@{ADLS_ACCOUNT}.dfs.core.windows.net/myfolder/mysubfolder/*"'),"."))),(0,r.kt)("li",{parentName:"ul"},"For tables with metadata managed by a data catalog, you should provide\nthe database schema and the table name. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"staging.table_name"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"expectation_suite_name"),": Name of the expectation suite associated with this data source."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"validation_config"),": A list of validation configurations where each configuration contains the following fields:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"column_name"),": Name of the validated column."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"expectations"),": List of expectations where each expectation has the following fields:"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"expectation_type"),": Name of the Great Expectations expectation class to use."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"expectation_kwargs"),": The keyword arguments to pass to the expectation class.")))))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Here's a minimal example of a configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "gx_directory_path": "/dbfs/great_expectations/",\n    "dataset_name": "movies",\n    "dq_output_path": "abfss://raw@{ADLS_ACCOUNT}.dfs.core.windows.net/Ingest_AzureSql_Example/",\n    "datasource_config": [\n        {\n            "datasource_name": "movies.movies_metadata",\n            "datasource_type": "parquet",\n            "data_location": "abfss://raw@{ADLS_ACCOUNT}.dfs.core.windows.net/Ingest_AzureSql_Example/movies.movies_metadata/v1/*/*/*",\n            "expectation_suite_name": "movies.movies_metadata_suite",\n            "validation_config": [\n                {\n                    "column_name": "status",\n                    "expectations": [\n                        {\n                            "expectation_type": "expect_column_values_to_be_in_set",\n                            "expectation_kwargs": {"value_set": ["Canceled", "In Production", "Planned", "Post Production", "Released", "Rumored"]}\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}\n')),(0,r.kt)("h3",{id:"using-environment-variables-in-configuration-files"},"Using environment variables in configuration files"),(0,r.kt)("p",null,"It is possible to use environment variables in a configuration file for Data Quality.\nPlaceholders in the form of ",(0,r.kt)("inlineCode",{parentName:"p"},"{ENV_VAR_NAME}")," will be replaced with the corresponding environment\nvariable values. For example, you can pass the ADLS name using an environment variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data_location": "abfss://raw@{ADLS_ACCOUNT}.dfs.core.windows.net/example_azuresql_1/SalesLT.Product/v1/*/*/*"\n}\n')))}f.isMDXComponent=!0},7252:function(e,t,a){t.Z=a.p+"assets/images/ADF_DataQualityDesign-dd10d4958d37b1136716ef1d27c0002e.png"},5094:function(e,t,a){t.Z=a.p+"assets/images/ADF_Ingest_AzureSql_Example_DQ-0984cf1a527965a42d99441f40ca98fd.png"},5614:function(e,t,a){t.Z=a.p+"assets/images/ADF_silver_dq-d96cf8d92fecbad74202efecb01f5510.png"}}]);