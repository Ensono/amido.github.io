"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[8220],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1408:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=t(4996),l=["components"],c={id:"infrastructure_csr",title:"CSR Application - Azure Infrastructure",sidebar_label:"Infrastructure",hide_title:!1,hide_table_of_contents:!1,description:"CSR Application - Azure Infrastructure",keywords:["rest","api","csr","application","template","azure","infrastructure","client","side","rendering","client side rendering"]},u=void 0,s={unversionedId:"workloads/azure/frontend-archived/CSR/infrastructure_csr",id:"workloads/azure/frontend-archived/CSR/infrastructure_csr",title:"CSR Application - Azure Infrastructure",description:"CSR Application - Azure Infrastructure",source:"@site/docs/workloads/azure/frontend-archived/CSR/infrastructure_csr.md",sourceDirName:"workloads/azure/frontend-archived/CSR",slug:"/workloads/azure/frontend-archived/CSR/infrastructure_csr",permalink:"/docs/workloads/azure/frontend-archived/CSR/infrastructure_csr",draft:!1,tags:[],version:"current",frontMatter:{id:"infrastructure_csr",title:"CSR Application - Azure Infrastructure",sidebar_label:"Infrastructure",hide_title:!1,hide_table_of_contents:!1,description:"CSR Application - Azure Infrastructure",keywords:["rest","api","csr","application","template","azure","infrastructure","client","side","rendering","client side rendering"]}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Diagram",id:"diagram",level:3},{value:"Resource List",id:"resource-list",level:3},{value:"Deploying",id:"deploying",level:2},{value:"Pipelines",id:"pipelines",level:3},{value:"Running Locally",id:"running-locally",level:3}],f={toc:d},m="wrapper";function g(e){var r=e.components,t=(0,a.Z)(e,l);return(0,o.kt)(m,(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This page present the high level design of the reference implementation of the Stacks client-side rendering application."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This page assumes that the core infrastructure has already been provisioned. Instructions and additional information on the core infrastructure can be found ",(0,o.kt)("a",{parentName:"strong",href:"/docs/infrastructure/azure/core_infrastructure"},"here"))),(0,o.kt)("p",null,"Both the diagram and resource list below are for a single environment."),(0,o.kt)("h3",{id:"diagram"},"Diagram"),(0,o.kt)("img",{alt:"Azure CSR App Infrastructure",src:(0,i.Z)("img/azure_csr_app_infrastructure.png")}),(0,o.kt)("h3",{id:"resource-list"},"Resource List"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Resource"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Resource Group - APP"),(0,o.kt)("td",{parentName:"tr",align:null},"Used to logically group app specific infrastructure")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Public DNS Record"),(0,o.kt)("td",{parentName:"tr",align:null},"DNS record pointing to the CDN")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CDN Profile"),(0,o.kt)("td",{parentName:"tr",align:null},"Azure Content Delivery Network with storage account origin")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Storage Account"),(0,o.kt)("td",{parentName:"tr",align:null},"Azure Storage containing application")))),(0,o.kt)("h2",{id:"deploying"},"Deploying"),(0,o.kt)("h3",{id:"pipelines"},"Pipelines"),(0,o.kt)("p",null,"The following pipelines are currently supported for automating the deployment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/workloads/azure/frontend-archived/CSR/pipeline_csr"},"Azure DevOps"))),(0,o.kt)("h3",{id:"running-locally"},"Running Locally"),(0,o.kt)("p",null,"Currently, vars.tf and provider configuration is not\nautomatically updated. Future iterations will include this."),(0,o.kt)("p",null,"The safest way to run and maintain this locally is to rely on Docker and environment\nvariables as that is the way the pipeline will trigger the\nexecutions of Terraform."),(0,o.kt)("p",null,"Sample commands with example environment vars:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Navigate to the infra directory\ncd ${YOUR_DIRECTORY_PATH}/deploy/azure/app\n\n# Run Ensono Terraform Docker container\ndocker run -v $(pwd):/usr/data --rm -it amidostacks/ci-tf:0.0.4 /bin/bash\n\n###########################################################################\n# All commands from this point should be executed in the Docker container #\n###########################################################################\n\n# Navigate to /usr/data directory\ncd /usr/data\n\n# Export Azure Credentials. Replace the example values.\nexport ARM_CLIENT_ID=1111-2222-3333-444 \\\nARM_CLIENT_SECRET=1111-2222-3333-4444 \\\nARM_SUBSCRIPTION_ID=1111-2222-3333-444 \\\nARM_TENANT_ID=1111-2222-3333-444\n\n# Export Terraform variables. Replace the example values.\nexport TF_VAR_name_company=amido \\\nTF_VAR_name_project=example \\\nTF_VAR_name_component=frontend \\\nTF_VAR_name_environment=dev \\\nTF_VAR_name_stage=dev \\\nTF_VAR_dns_resource_group=amido-example-nonprod-uks-core \\\nTF_VAR_resource_group_location=uksouth \\\nTF_VAR_dns_zone=nonprod.amidostacks.com \\\nTF_VAR_dns_record=dev \\\nTF_VAR_app_insights_name=amido-example-nonprod-uks-core\n\n# Initial Terraform. Replace the example values.\nterraform init \\\n-backend-config="resource_group_name=amido-stacks-terraform" \\\n-backend-config="storage_account_name=amidostacksterraform" \\\n-backend-config="container_name=tfstate" \\\n-backend-config="key=example-frontend"\n\n# Select or create the "dev" workspace.\nterraform workspace select dev || terraform workspace new dev\n\n# Check the plan matches your expected changes.\nterraform plan\n')))}g.isMDXComponent=!0}}]);