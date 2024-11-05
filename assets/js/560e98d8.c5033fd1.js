"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[2444],{872:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var i=n(4848),t=n(8453),s=n(9557),a=n(6025);const l={id:"azure_devops",title:"Azure DevOps Pipeline",sidebar_label:"Azure DevOps",description:"How do you set up a pipeline in Azure DevOps",keywords:["workload","pipeline","Azure DevOps","pipeline template"]},o=void 0,d={id:"infrastructure/azure/pipelines/azure_devops",title:"Azure DevOps Pipeline",description:"How do you set up a pipeline in Azure DevOps",source:"@site/docs/infrastructure/azure/pipelines/azure_devops.md",sourceDirName:"infrastructure/azure/pipelines",slug:"/infrastructure/azure/pipelines/azure_devops",permalink:"/docs/infrastructure/azure/pipelines/azure_devops",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"azure_devops",title:"Azure DevOps Pipeline",sidebar_label:"Azure DevOps",description:"How do you set up a pipeline in Azure DevOps",keywords:["workload","pipeline","Azure DevOps","pipeline template"]},sidebar:"docs",previous:{title:"Core Infrastructure",permalink:"/docs/infrastructure/azure/core_infrastructure"},next:{title:"Getting started with Azure Container Apps",permalink:"/docs/getting_started/azure-container-app/azure-container-apps"}},p={},c=[{value:"Pipeline Diagram",id:"pipeline-diagram",level:2},{value:"Feature branch -&gt; Non-Prod sequence",id:"feature-branch---non-prod-sequence",level:3},{value:"Main branch -&gt; Prod sequence",id:"main-branch---prod-sequence",level:3},{value:"Setting up Azure DevOps",id:"setting-up-azure-devops",level:2},{value:"Variable groups",id:"variable-groups",level:3},{value:"Update pipeline template placeholders",id:"update-pipeline-template-placeholders",level:3},{value:"Create the pipeline",id:"create-the-pipeline",level:3}];function u(e){const r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:["The pipeline will automate provisioning and updating the core infrastructure in Azure. This page assumes you have already completed the steps on the ",(0,i.jsx)(r.a,{href:"/docs/infrastructure/azure/core_infrastructure",children:"core infrastructure page"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["The Azure infrastructure source code can be found ",(0,i.jsx)(r.a,{href:"https://github.com/Ensono/stacks-infrastructure-aks",children:"here"}),"."]}),"\n",(0,i.jsx)(r.h2,{id:"pipeline-diagram",children:"Pipeline Diagram"}),"\n",(0,i.jsx)(r.h3,{id:"feature-branch---non-prod-sequence",children:"Feature branch -> Non-Prod sequence"}),"\n",(0,i.jsx)("img",{alt:"Azure Core - Azure DevOps Pipeline",src:(0,a.Ay)("img/core_pipeline_nonprod.png")}),"\n",(0,i.jsx)(r.h3,{id:"main-branch---prod-sequence",children:"Main branch -> Prod sequence"}),"\n",(0,i.jsx)("img",{alt:"Azure Core - Azure DevOps Pipeline",src:(0,a.Ay)("img/core_pipeline_prod.png")}),"\n",(0,i.jsx)(r.h2,{id:"setting-up-azure-devops",children:"Setting up Azure DevOps"}),"\n",(0,i.jsx)(r.h3,{id:"variable-groups",children:"Variable groups"}),"\n",(0,i.jsxs)(r.p,{children:["Variable groups will need creating for storing Azure Credentials to be used with the pipeline. Instructions for creating a variable group can be found ",(0,i.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups?view=azure-devops&tabs=classic#create-a-variable-group",children:"here"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["Create a variable group called ",(0,i.jsx)(r.code,{children:"azure-sp-creds"}),", add a description and make sure the ",(0,i.jsx)(r.strong,{children:"Allow access to all pipelines"})," option is checked. Add the following variables using the Service Connection details from ",(0,i.jsx)(r.a,{href:"/docs/infrastructure/azure/core_infrastructure#bootstrap-the-azure-tenant",children:"bootstrapping the Azure tenant"}),":"]}),"\n",(0,i.jsx)(r.p,{children:"Add the following variables:"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Variable Name"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Required for"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ARM_CLIENT_ID"}),(0,i.jsx)(r.td,{children:"Azure Service Principal Client ID"}),(0,i.jsx)(r.td,{children:"Terraform and Helm deployments"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ARM_CLIENT_SECRET"}),(0,i.jsx)(r.td,{children:"Azure Service Principal Client Secret"}),(0,i.jsx)(r.td,{children:"Terraform and Helm deployments"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ARM_SUBSCRIPTION_ID"}),(0,i.jsx)(r.td,{children:"Azure Subscription ID"}),(0,i.jsx)(r.td,{children:"Terraform and Helm deployments"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ARM_TENANT_ID"}),(0,i.jsx)(r.td,{children:"Azure Tenant ID"}),(0,i.jsx)(r.td,{children:"Terraform and Helm deployments"})]})]})]}),"\n",(0,i.jsx)(r.h3,{id:"update-pipeline-template-placeholders",children:"Update pipeline template placeholders"}),"\n",(0,i.jsxs)(r.p,{children:["Where possible, the Stacks CLI will have populated the correct values in the pipeline template file ",(0,i.jsx)(r.code,{children:"build/azDevOps/azure/pipeline-vars.yml"}),". We very much recommend that you go through the whole template to make sure that values are correct for your project. Once you are happy with the template, commit the changes to your repository."]}),"\n",(0,i.jsx)(r.h3,{id:"create-the-pipeline",children:"Create the pipeline"}),"\n",(0,i.jsx)(r.p,{children:"Follow the steps below to create the pipeline and trigger the initial run."}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsxs)(r.em,{children:["Please note that pipeline will create DNS zones for both nonprod and prod (by default, ",(0,i.jsx)(r.code,{children:"nonprod.${BASE_DOMAIN}"})," and ",(0,i.jsx)(r.code,{children:"prod.${BASE_DOMAIN}"}),"). These will need NS records adding to the base domain and will cause the pipeline to fail on the initial run."]})}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["In the pipelines section of Azure DevOps, select ",(0,i.jsx)(r.strong,{children:"New Pipeline"}),"."]}),"\n",(0,i.jsx)(r.li,{children:"Select your repository."}),"\n",(0,i.jsxs)(r.li,{children:["Select the ",(0,i.jsx)(r.strong,{children:"Existing Azure Pipelines YAML files"})," option and enter the path ",(0,i.jsx)(r.code,{children:"build/azDevops/azure/infra-pipeline.yml"})]}),"\n",(0,i.jsxs)(r.li,{children:["Click run and wait for the pipeline to run. The ",(0,i.jsx)(r.code,{children:"Terraform: Apply"})," step is expected to fail with an error containing: ",(0,i.jsx)(r.code,{children:"One or more domains had a problem"}),"."]}),"\n",(0,i.jsx)(r.li,{children:"In the Azure Portal, located the DNS zone created and make note of the NS values."}),"\n",(0,i.jsx)(r.li,{children:"Add an NS record set to the base domain DNS using the same name as the newly created DNS zone and the NS values noted."}),"\n",(0,i.jsx)(r.li,{children:"Re-run the pipeline in Azure DevOps."}),"\n",(0,i.jsx)(r.li,{children:"Repeat steps 5, 6 & 7 for the prod DNS zone."}),"\n"]}),"\n",(0,i.jsx)(s.A,{next:!0})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},9557:(e,r,n)=>{n.d(r,{A:()=>s});var i=n(6540),t=n(4848);const s=e=>{let{next:r,prev:n}=e;return i.useEffect((()=>{if(r){const e=document.querySelector("div.pagination-nav__item.pagination-nav__item--next>a");e&&e.style&&(e.style.display="none")}if(n){const e=document.querySelector("div.pagination-nav__item>a");e&&e.style&&(e.style.display="none")}})),(0,t.jsx)("div",{})}},8453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>l});var i=n(6540);const t={},s=i.createContext(t);function a(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);