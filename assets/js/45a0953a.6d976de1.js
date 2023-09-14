"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[3139],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||s;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<s;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5079:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),i=["components"],o={id:"testing_data_azure",title:"Testing",sidebar_label:"Testing",hide_title:!1,hide_table_of_contents:!1,description:"Testing",keywords:["testing"]},l=void 0,d={unversionedId:"workloads/azure/data/etl_pipelines/testing_data_azure",id:"workloads/azure/data/etl_pipelines/testing_data_azure",isDocsHomePage:!1,title:"Testing",description:"Testing",source:"@site/docs/workloads/azure/data/etl_pipelines/testing_data_azure.md",sourceDirName:"workloads/azure/data/etl_pipelines",slug:"/workloads/azure/data/etl_pipelines/testing_data_azure",permalink:"/docs/workloads/azure/data/etl_pipelines/testing_data_azure",tags:[],version:"current",frontMatter:{id:"testing_data_azure",title:"Testing",sidebar_label:"Testing",hide_title:!1,hide_table_of_contents:!1,description:"Testing",keywords:["testing"]},sidebar:"docs",previous:{title:"PySparkle",permalink:"/docs/workloads/azure/data/etl_pipelines/pysparkle"},next:{title:"Getting Started",permalink:"/docs/workloads/azure/data/getting_started/getting_started"}},u=[{value:"Unit tests",id:"unit-tests",children:[],level:2},{value:"End-to-end tests",id:"end-to-end-tests",children:[],level:2},{value:"Code quality and linting",id:"code-quality-and-linting",children:[],level:2}],p={toc:u},c="wrapper";function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Data workloads generated in Stacks feature a framework for testing. Automated tests are essential at every stage of a data pipeline for reasons including:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Early detection of issues: Catch errors and issues early in the data pipeline development process."),(0,s.kt)("li",{parentName:"ul"},"Regression testing: As new code is added, ensure that changes do not introduce regressions or break existing functionality."),(0,s.kt)("li",{parentName:"ul"},"Support CI/CD: Running automated tests are an essential part of the CI/CD process."),(0,s.kt)("li",{parentName:"ul"},"Collaboration: A shared set of expectations and a common framework for testing can help collaboration between developers and end users.")),(0,s.kt)("p",null,"In addition to the automated tests below, Stacks also has a framework for ",(0,s.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/etl_pipelines/data_quality_azure"},"data quality testing"),"."),(0,s.kt)("h2",{id:"unit-tests"},"Unit tests"),(0,s.kt)("p",null,"Unit tests are implemented throughout the Stacks solution and recommended for all data workloads. Python code is tested using ",(0,s.kt)("a",{parentName:"p",href:"https://docs.pytest.org/en/7.2.x/"},"Pytest"),"."),(0,s.kt)("p",null,"Within a data workload generated through ",(0,s.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/etl_pipelines/datastacks"},"Datastacks"),", a placeholder for unit tests is found under ",(0,s.kt)("inlineCode",{parentName:"p"},"tests/unit"),". These tests will be executed as part of its Azure DevOps CI/CD pipeline."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/getting_started/dev_quickstart_data_azure#unit-tests"},"Run unit tests locally"),".")),(0,s.kt)("h2",{id:"end-to-end-tests"},"End-to-end tests"),(0,s.kt)("p",null,"Template end-to-end tests are implemented for data workloads in Stacks. These tests are implemented in a behaviour-driven-development (BDD) style using ",(0,s.kt)("a",{parentName:"p",href:"https://behave.readthedocs.io/en/stable/"},"behave"),"."),(0,s.kt)("p",null,"This framework allows test cases to be written in a natural language style. Data workloads generated through Datastacks will have placeholder end-to-end BDD tests under ",(0,s.kt)("inlineCode",{parentName:"p"},"tests/end_to_end"),". The ",(0,s.kt)("inlineCode",{parentName:"p"},".feature")," file located here contains the test cases in BDD style. The tests provided perform a number of actions to prepare a test scenario, execute the workload, check the results, and clean up."),(0,s.kt)("p",null,"Example content of a ",(0,s.kt)("inlineCode",{parentName:"p"},".feature")," file is shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'Feature:Azure Data Ingest\n  I want to ingest data\n  so that it is available in Azure data lake storage\n\n  Scenario Outline: Data Factory Ingest SQL Database into ADLS with Data Quality\n    Given the ADF pipeline Ingest_AzureSql_Example_DQ has been triggered with <parameters>\n    And I poll the pipeline every 10 seconds until it has completed\n    And the ADF pipeline Ingest_AzureSql_Example_DQ has finished with state Succeeded\n    And the ADF pipeline completed in less than 900 seconds\n    Then the files <output_files> are present in the ADLS container raw in the directory Ingest_AzureSql_Example\n\n    Examples: Output files\n    |parameters|output_files|\n    |{"window_start" : "2010-01-01", "window_end": "2010-01-31"}|["movies.keywords", "movies.keywords_dq", "movies.links", "movies.movies_metadata", "movies.movies_metadata_dq", "movies.ratings_small"]|\n')),(0,s.kt)("p",null,"The tests will be executed as part of the workload's Azure DevOps CI/CD pipeline. You may extend or change the test cases dependent on the particular requirements of you workload."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/getting_started/dev_quickstart_data_azure#unit-tests"},"Run end-to-end tests locally"),".")),(0,s.kt)("h2",{id:"code-quality-and-linting"},"Code quality and linting"),(0,s.kt)("p",null,"Code quality and linting checks are also included as part of workload's CI/CD pipeline. This ensures consistent standards are maintained across the project."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pre-commit.com/"},"Pre-commit")," is used to assist developers in this process. The ",(0,s.kt)("inlineCode",{parentName:"p"},".pre-commit-config.yaml")," file in the project defines the checks and standards used."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/getting_started/dev_quickstart_data_azure#code-quality-checks"},"Run code quality checks"))))}m.isMDXComponent=!0}}]);