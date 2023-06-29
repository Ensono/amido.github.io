"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[5449],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return t?n.createElement(f,i(i({ref:r},s),{},{components:t})):n.createElement(f,i({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3919:function(e,r,t){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}t.d(r,{Z:function(){return a},b:function(){return n}})},4996:function(e,r,t){t.d(r,{C:function(){return o},Z:function(){return i}});var n=t(2263),a=t(3919);function o(){var e=(0,n.Z)().siteConfig,r=void 0===e?{}:e,t=r.baseUrl,o=void 0===t?"/":t,i=r.url;return{withBaseUrl:function(e,r){return function(e,r,t,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,l=void 0!==i&&i,u=o.absolute,c=void 0!==u&&u;if(!t)return t;if(t.startsWith("#"))return t;if((0,a.b)(t))return t;if(l)return r+t;var s=t.startsWith(r)?t:r+t.replace(/^\//,"");return c?e+s:s}(i,o,e,r)}}}function i(e,r){return void 0===r&&(r={}),(0,o().withBaseUrl)(e,r)}},396:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=t(4996),l=["components"],u={id:"infrastructure_ssr",title:"SSR Application - Azure Infrastructure",sidebar_label:"Infrastructure",hide_title:!1,hide_table_of_contents:!1,description:"SSR Application - Azure Infrastructure",keywords:["rest","api","ssr","application","azure","infrastructure","deploy","pipeline","side","rendering","server","server side rendering"]},c=void 0,s={unversionedId:"workloads/azure/frontend-archived/SSR/infrastructure_ssr",id:"workloads/azure/frontend-archived/SSR/infrastructure_ssr",isDocsHomePage:!1,title:"SSR Application - Azure Infrastructure",description:"SSR Application - Azure Infrastructure",source:"@site/docs/workloads/azure/frontend-archived/SSR/infrastructure_ssr.md",sourceDirName:"workloads/azure/frontend-archived/SSR",slug:"/workloads/azure/frontend-archived/SSR/infrastructure_ssr",permalink:"/docs/workloads/azure/frontend-archived/SSR/infrastructure_ssr",tags:[],version:"current",frontMatter:{id:"infrastructure_ssr",title:"SSR Application - Azure Infrastructure",sidebar_label:"Infrastructure",hide_title:!1,hide_table_of_contents:!1,description:"SSR Application - Azure Infrastructure",keywords:["rest","api","ssr","application","azure","infrastructure","deploy","pipeline","side","rendering","server","server side rendering"]}},p=[{value:"Overview",id:"overview",children:[{value:"Diagram",id:"diagram",children:[],level:3},{value:"Resource List",id:"resource-list",children:[],level:3}],level:2},{value:"Deploying",id:"deploying",children:[{value:"Pipelines",id:"pipelines",children:[],level:3},{value:"Running Locally",id:"running-locally",children:[],level:3}],level:2}],d={toc:p},m="wrapper";function f(e){var r=e.components,t=(0,a.Z)(e,l);return(0,o.kt)(m,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This page present the high level design of the reference implementation of the Stacks server-side rendering application."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This page assumes that the core infrastructure has already been provisioned. Instructions and additional information on the core infrastructure can be found ",(0,o.kt)("a",{parentName:"strong",href:"/docs/infrastructure/azure/core_infrastructure"},"here"))),(0,o.kt)("p",null,"Both the diagram and resource list below are for a single environment."),(0,o.kt)("h3",{id:"diagram"},"Diagram"),(0,o.kt)("img",{alt:"Azure SSR App Infrastructure",src:(0,i.Z)("img/azure_ssr_app_infrastructure.png")}),(0,o.kt)("h3",{id:"resource-list"},"Resource List"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Resource"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Resource Group - Core",(0,o.kt)("strong",{parentName:"td"},"*")),(0,o.kt)("td",{parentName:"tr",align:null},"Used to logically group core infrastructure")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"AKS",(0,o.kt)("strong",{parentName:"td"},"*")),(0,o.kt)("td",{parentName:"tr",align:null},"Azure Kubernetes Service")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Public DNS Record"),(0,o.kt)("td",{parentName:"tr",align:null},"DNS record pointing Ingress (via application gateway",(0,o.kt)("strong",{parentName:"td"},"*")," and internal load balancer",(0,o.kt)("strong",{parentName:"td"},"*"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ACR",(0,o.kt)("strong",{parentName:"td"},"*")),(0,o.kt)("td",{parentName:"tr",align:null},"Azure Container Registry")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Namespace: {env}-app"),(0,o.kt)("td",{parentName:"tr",align:null},"Kubernetes namespace for the environment")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,o.kt)("td",{parentName:"tr",align:null},"Kubernetes Ingress to handle routing to Service")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Service"),(0,o.kt)("td",{parentName:"tr",align:null},"Kubernetes Service to handle routing to Deployment Pods")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Deployment"),(0,o.kt)("td",{parentName:"tr",align:null},"Kubernetes Deployment for managing Pods")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Resource Group - APP"),(0,o.kt)("td",{parentName:"tr",align:null},"Used to logically group APP specific infrastructure")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Redis Cache"),(0,o.kt)("td",{parentName:"tr",align:null},"Azure managed Redis cache")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"*")," ",(0,o.kt)("em",{parentName:"p"},"Resource is created by the core infrastructure deployment.")),(0,o.kt)("h2",{id:"deploying"},"Deploying"),(0,o.kt)("h3",{id:"pipelines"},"Pipelines"),(0,o.kt)("p",null,"The following pipelines are currently supported for automating the deployment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/workloads/azure/frontend-archived/SSR/pipeline_ssr"},"Azure DevOps"))),(0,o.kt)("h3",{id:"running-locally"},"Running Locally"),(0,o.kt)("p",null,"Currently, vars.tf and provider configuration is not\nautomatically updated. Future iterations will include this."),(0,o.kt)("p",null,"The safest way to run and maintain this locally is to rely on Docker and environment\nvariables as that is the way the pipeline will trigger the\nexecutions of Terraform."),(0,o.kt)("p",null,"Sample commands with example environment vars:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Navigate to the infra directory\ncd ${YOUR_DIRECTORY_PATH}/deploy/azure/app\n\n# Run Amido Terraform Docker container\ndocker run -v $(pwd):/usr/data --rm -it amidostacks/ci-tf:0.0.4 /bin/bash\n\n###########################################################################\n# All commands from this point should be executed in the Docker container #\n###########################################################################\n\n# Navigate to /usr/data directory\ncd /usr/data\n\n# Export Azure Credentials. Replace the example values.\nexport ARM_CLIENT_ID=1111-2222-3333-444 \\\nARM_CLIENT_SECRET=1111-2222-3333-4444 \\\nARM_SUBSCRIPTION_ID=1111-2222-3333-444 \\\nARM_TENANT_ID=1111-2222-3333-444\n\n# Export Terraform variables. Replace the example values.\nexport TF_VAR_name_company=amido \\\nTF_VAR_name_project=example \\\nTF_VAR_name_domain=frontend \\\nTF_VAR_name_component=webapp \\\nTF_VAR_name_environment=dev \\\nTF_VAR_core_resource_group=amido-example-nonprod-uks-core \\\nTF_VAR_resource_group_location=uksouth \\\nTF_VAR_create_dns_record=true \\\nTF_VAR_dns_record=dev \\\nTF_VAR_dns_zone_name=nonprod.amidostacks.com \\\nTF_VAR_internal_dns_zone_name=nonprod.amidostacks.internal \\\nTF_VAR_app_gateway_frontend_ip_name=amido-example-nonprod-uks-core \\\nTF_VAR_app_insights_name=amido-example-nonprod-uks-core \\\nTF_VAR_create_cosmosdb=false \\\nTF_VAR_create_cache=true\n\n# Initial Terraform. Replace the example values.\nterraform init \\\n-backend-config="resource_group_name=amido-stacks-terraform" \\\n-backend-config="storage_account_name=amidostacksterraform" \\\n-backend-config="container_name=tfstate" \\\n-backend-config="key=example-frontend"\n\n# Select or create the "dev" workspace.\nterraform workspace select dev || terraform workspace new dev\n\n# Check the plan matches your expected changes.\nterraform plan\n')))}f.isMDXComponent=!0}}]);