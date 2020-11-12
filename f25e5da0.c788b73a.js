(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{194:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var a=r(2),n=r(6),i=(r(0),r(210)),l=r(212),o={id:"pipeline_netcore",title:".NET Core - Azure DevOps Pipeline",sidebar_label:"Pipeline",description:"How to configure Azure DevOps Pipeline for .NET Core",keywords:[".net core","azure devops","configure","pipeline","setting up","template","build"]},c={unversionedId:"workloads/azure/backend/netcore/pipeline_netcore",id:"workloads/azure/backend/netcore/pipeline_netcore",isDocsHomePage:!1,title:".NET Core - Azure DevOps Pipeline",description:"How to configure Azure DevOps Pipeline for .NET Core",source:"@site/docs/workloads/azure/backend/netcore/pipeline_netcore.md",slug:"/workloads/azure/backend/netcore/pipeline_netcore",permalink:"/stacks/docs/workloads/azure/backend/netcore/pipeline_netcore",version:"current",sidebar_label:"Pipeline",sidebar:"docs",previous:{title:".NET Core - Azure Infrastructure",permalink:"/stacks/docs/workloads/azure/backend/netcore/infrastructure_netcore"},next:{title:"Logging with Serilog and Application Insights",permalink:"/stacks/docs/workloads/azure/backend/netcore/logging_netcore"}},p=[{value:"Pipeline Diagram",id:"pipeline-diagram",children:[]},{value:"Setting up Azure DevOps",id:"setting-up-azure-devops",children:[{value:"Variable group",id:"variable-group",children:[]},{value:"Update pipeline template placeholders",id:"update-pipeline-template-placeholders",children:[]},{value:"Create the pipeline",id:"create-the-pipeline",children:[]}]}],b={rightToc:p};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The pipeline will automate provisioning and updating the .NET Core REST API with CQRS infrastructure in Azure."),Object(i.b)("p",null,"Where possible, we are creating reusable steps (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/amido/stacks-pipeline-templates"}),"stacks-pipeline-templates"),") that can be pulled into any base pipeline. Reusable steps can include tasks to deploy, build, test and more."),Object(i.b)("h2",{id:"pipeline-diagram"},"Pipeline Diagram"),Object(i.b)("img",{alt:".NET Core REST API - Azure DevOps Pipeline",src:Object(l.a)("img/azure_netcore_azure_devops_pipeline.png")}),Object(i.b)("h2",{id:"setting-up-azure-devops"},"Setting up Azure DevOps"),Object(i.b)("h3",{id:"variable-group"},"Variable group"),Object(i.b)("p",null,"A variable group will need creating for storing variables to be used for testing steps. Instructions for creating a variable group can be found ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups?view=azure-devops&tabs=classic#create-a-variable-group"}),"here"),". Give the variable group a name and description and make sure the ",Object(i.b)("strong",{parentName:"p"},"Allow access to all pipelines")," option is checked."),Object(i.b)("p",null,"Add the following variables:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Variable Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required for"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Note"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"COSMOSDB_KEY_DEV"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Integration Test"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Output from infrastructure deployment. Should be enabled after first pipeline run")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"COSMOSDB_NAME_DEV"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Integration Test"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Output from infrastructure deployment. Should be enabled after first pipeline run")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"COSMOSDB_ACCOUNT_URI_DEV"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Integration Test"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Output from infrastructure deployment. Should be enabled after first pipeline run")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SONAR_ORGANIZATION"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Static Code Analysis"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"from ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://sonarcloud.io/"}),"sonarcloud"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SONAR_PROJECT_KEY"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Static Code Analysis"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"from ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://sonarcloud.io/"}),"sonarcloud"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SONAR_PROJECT_NAME"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Static Code Analysis"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"from ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://sonarcloud.io/"}),"sonarcloud"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SONAR_TOKEN"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Static Code Analysis"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"from ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://sonarcloud.io/"}),"sonarcloud"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"PACT_BEARER_TOKEN"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Contract Test"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"from ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://docs.pact.io/"}),"pact"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"PACT_BROKER"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Contract Test"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"from ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://docs.pact.io/"}),"pact"))))),Object(i.b)("img",{alt:"Azure .NET Core Variable Group",src:Object(l.a)("img/azure_netcore_variable_group.png")}),Object(i.b)("h3",{id:"update-pipeline-template-placeholders"},"Update pipeline template placeholders"),Object(i.b)("p",null,"Where possible, the scaffolding CLI will have populated the correct values in the pipeline template file ",Object(i.b)("inlineCode",{parentName:"p"},"build/azDevops/azure/api-pipeline.yml"),". The values that need to be manually configured, such as the variable group name setup previously, will have placeholders using the prefix ",Object(i.b)("inlineCode",{parentName:"p"},"%REPLACE_ME_FOR"),". We very much recommend that you go through the whole template to make sure that values are correct for your project. Once you are happy with the template, commit the changes to your repository."),Object(i.b)("h3",{id:"create-the-pipeline"},"Create the pipeline"),Object(i.b)("p",null,"Follow the steps below to create the pipeline and trigger the initial run."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"In the pipelines section of Azure DevOps, select ",Object(i.b)("strong",{parentName:"li"},"New Pipeline"),"."),Object(i.b)("li",{parentName:"ol"},"Select your repository."),Object(i.b)("li",{parentName:"ol"},"Select the ",Object(i.b)("strong",{parentName:"li"},"Existing Azure Pipelines YAML files")," option and enter the path ",Object(i.b)("inlineCode",{parentName:"li"},"build/azDevops/azure/api-pipeline.yml")),Object(i.b)("li",{parentName:"ol"},"Click run and wait for the pipeline to complete."),Object(i.b)("li",{parentName:"ol"},"Update the API variable group with the Cosmos DB details."),Object(i.b)("li",{parentName:"ol"},"Enable Integration Tests in ",Object(i.b)("inlineCode",{parentName:"li"},"build/azDevops/azure/api-pipeline.yml")),Object(i.b)("li",{parentName:"ol"},"Commit changes to trigger the pipeline again.")))}u.isMDXComponent=!0},210:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),b=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=b(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(r),d=a,O=u["".concat(l,".").concat(d)]||u[d]||s[d]||i;return r?n.a.createElement(O,o(o({ref:t},p),{},{components:r})):n.a.createElement(O,o({ref:t},p))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},211:function(e,t,r){"use strict";var a=r(0),n=r(19);t.a=function(){var e=Object(a.useContext)(n.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},212:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return l}));var a=r(211),n=r(214);function i(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,a){var i=void 0===a?{}:a,l=i.forcePrependBaseUrl,o=void 0!==l&&l,c=i.absolute,p=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if(Object(n.b)(r))return r;if(o)return t+r;var b=r.startsWith(t)?r:t+r.replace(/^\//,"");return p?e+b:b}(i,r,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},214:function(e,t,r){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!a(e)}r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return n}))}}]);