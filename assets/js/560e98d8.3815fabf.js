"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[1514],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1619:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.next,r=e.prev;return n.useEffect((function(){if(t){var e=document.querySelector("div.pagination-nav__item.pagination-nav__item--next>a");e&&e.style&&(e.style.display="none")}if(r){var n=document.querySelector("div.pagination-nav__item>a");n&&n.style&&(n.style.display="none")}})),n.createElement("div",null)}},8861:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=r(1619),p=r(4996),l=["components"],u={id:"azure_devops",title:"Azure DevOps Pipeline",sidebar_label:"Azure DevOps",description:"How do you set up a pipeline in Azure DevOps",keywords:["workload","pipeline","Azure DevOps","pipeline template"]},s=void 0,c={unversionedId:"infrastructure/azure/pipelines/azure_devops",id:"infrastructure/azure/pipelines/azure_devops",title:"Azure DevOps Pipeline",description:"How do you set up a pipeline in Azure DevOps",source:"@site/docs/infrastructure/azure/pipelines/azure_devops.md",sourceDirName:"infrastructure/azure/pipelines",slug:"/infrastructure/azure/pipelines/azure_devops",permalink:"/docs/infrastructure/azure/pipelines/azure_devops",draft:!1,tags:[],version:"current",frontMatter:{id:"azure_devops",title:"Azure DevOps Pipeline",sidebar_label:"Azure DevOps",description:"How do you set up a pipeline in Azure DevOps",keywords:["workload","pipeline","Azure DevOps","pipeline template"]},sidebar:"docs",previous:{title:"Core Infrastructure",permalink:"/docs/infrastructure/azure/core_infrastructure"},next:{title:"Stacks Testing Frameworks",permalink:"/docs/testing/cli_testing_frameworks"}},d={},m=[{value:"Pipeline Diagram",id:"pipeline-diagram",level:2},{value:"Setting up Azure DevOps",id:"setting-up-azure-devops",level:2},{value:"Service connection",id:"service-connection",level:3},{value:"Variable groups",id:"variable-groups",level:3},{value:"Update pipeline template placeholders",id:"update-pipeline-template-placeholders",level:3},{value:"Create the pipeline",id:"create-the-pipeline",level:3}],f={toc:m},h="wrapper";function v(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)(h,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The pipeline will automate provisioning and updating the core infrastructure in Azure. This page assumes you have already completed the steps on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/infrastructure/azure/core_infrastructure"},"core infrastructure page"),"."),(0,i.kt)("p",null,"Where possible, we are creating reusable steps (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Ensono/stacks-pipeline-templates"},"stacks-pipeline-templates"),") that can be pulled into any base pipeline. Reusable steps can include tasks to deploy, build, test and more.\nAzure infrastructure source code can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Ensono/stacks-infrastructure-aks"},"here"),"."),(0,i.kt)("h2",{id:"pipeline-diagram"},"Pipeline Diagram"),(0,i.kt)("img",{alt:"Azure Core - Azure DevOps Pipeline",src:(0,p.Z)("img/azure_core_azure_devops_pipeline.png")}),(0,i.kt)("h2",{id:"setting-up-azure-devops"},"Setting up Azure DevOps"),(0,i.kt)("h3",{id:"service-connection"},"Service connection"),(0,i.kt)("p",null,"A service connection will need to be configured to ensure you can pull in pipeline templates form the public repo. The service connection will need a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/settings/tokens"},"Github Personal Access Token")," (or credentials) to pull in the code. At a minimum, the access token will need to include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"read:repo")),(0,i.kt)("p",null,"Once a token is generated, the service connection can be configured for the project. Instructions can be found ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/library/service-endpoints?view=azure-devops&tabs=yaml#create-a-service-connection"},"here"),"."),(0,i.kt)("p",null,"Finally, the repository resource endpoint value will need to be updated in the ",(0,i.kt)("inlineCode",{parentName:"p"},"build/azDevops/azure/infra-pipeline.yml")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"resources:\n  repositories:\n  - repository: templates\n    type: github\n    name: amido/stacks-pipeline-templates\n    ref: refs/tags/v1.1.0 # Ensure the correct tag is referenced here to ensure version control\n    endpoint: amidostacks # Name of the service account created for the connection to GitHub from Azure DevOps\n")),(0,i.kt)("h3",{id:"variable-groups"},"Variable groups"),(0,i.kt)("p",null,"Variable groups will need creating for storing Azure Credentials to be used with the pipeline. Instructions for creating a variable group can be found ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups?view=azure-devops&tabs=classic#create-a-variable-group"},"here"),"."),(0,i.kt)("p",null,"Create a variable group for the nonprod infrastructure. Give the variable group a name and description and make sure the ",(0,i.kt)("strong",{parentName:"p"},"Allow access to all pipelines")," option is checked. Add the following variables using the Service Connection details from ",(0,i.kt)("a",{parentName:"p",href:"/docs/infrastructure/azure/core_infrastructure#bootstrap-the-azure-tenant"},"bootstrapping the Azure tenant"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"azure_tenant_id"),(0,i.kt)("li",{parentName:"ul"},"azure_subscription_id"),(0,i.kt)("li",{parentName:"ul"},"azure_client_id"),(0,i.kt)("li",{parentName:"ul"},"azure_client_secret")),(0,i.kt)("img",{alt:"Azure Core Variable Group",src:(0,p.Z)("img/azure_core_variable_group.png")}),(0,i.kt)("p",null,"Repeat this to create a prod infrastructure variable group with the variables below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"prod_azure_tenant_id"),(0,i.kt)("li",{parentName:"ul"},"prod_azure_subscription_id"),(0,i.kt)("li",{parentName:"ul"},"prod_azure_client_id"),(0,i.kt)("li",{parentName:"ul"},"prod_azure_client_secret")),(0,i.kt)("h3",{id:"update-pipeline-template-placeholders"},"Update pipeline template placeholders"),(0,i.kt)("p",null,"Where possible, the scaffolding CLI will have populated the correct values in the pipeline template file ",(0,i.kt)("inlineCode",{parentName:"p"},"build/azDevops/azure/infra-pipeline.yml"),". The values that need to be manually configured, such as the variable group name setup previously, will have placeholders using the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"%REPLACE_ME_FOR"),". We very much recommend that you go through the whole template to make sure that values are correct for your project. Once you are happy with the template, commit the changes to your repository."),(0,i.kt)("h3",{id:"create-the-pipeline"},"Create the pipeline"),(0,i.kt)("p",null,"Follow the steps below to create the pipeline and trigger the initial run."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Please note that pipeline will create DNS zones for both nonprod and prod (by default, ",(0,i.kt)("inlineCode",{parentName:"em"},"nonprod.${BASE_DOMAIN}")," and ",(0,i.kt)("inlineCode",{parentName:"em"},"prod.${BASE_DOMAIN}"),"). These will need NS records adding to the base domain and will cause the pipeline to fail on the initial run.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the pipelines section of Azure DevOps, select ",(0,i.kt)("strong",{parentName:"li"},"New Pipeline"),"."),(0,i.kt)("li",{parentName:"ol"},"Select your repository."),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Existing Azure Pipelines YAML files")," option and enter the path ",(0,i.kt)("inlineCode",{parentName:"li"},"build/azDevops/azure/infra-pipeline.yml")),(0,i.kt)("li",{parentName:"ol"},"Click run and wait for the pipeline to run. The ",(0,i.kt)("inlineCode",{parentName:"li"},"Terraform: Apply")," step is expected to fail with an error containing: ",(0,i.kt)("inlineCode",{parentName:"li"},"One or more domains had a problem"),"."),(0,i.kt)("li",{parentName:"ol"},"In the Azure Portal, located the DNS zone created and make note of the NS values."),(0,i.kt)("li",{parentName:"ol"},"Add an NS record set to the base domain DNS using the same name as the newly created DNS zone and the NS values noted."),(0,i.kt)("li",{parentName:"ol"},"Re-run the pipeline in Azure DevOps."),(0,i.kt)("li",{parentName:"ol"},"Repeat steps 5, 6 & 7 for the prod DNS zone.")),(0,i.kt)(o.Z,{next:!0,mdxType:"HideNavigation"}))}v.isMDXComponent=!0}}]);