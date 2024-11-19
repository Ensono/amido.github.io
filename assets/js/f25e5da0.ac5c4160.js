"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[7097],{4319:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var n=r(4848),t=r(8453),l=r(6025),s=r(2017);const a={id:"pipeline_netcore",title:".NET - Azure DevOps Pipeline",sidebar_label:"Pipeline",description:"How to configure Azure DevOps Pipeline for .NET",keywords:[".net","azure devops","configure","pipeline","setting up","template","build"]},c=void 0,d={id:"workloads/azure/backend/netcore/pipeline_netcore",title:".NET - Azure DevOps Pipeline",description:"How to configure Azure DevOps Pipeline for .NET",source:"@site/docs/workloads/azure/backend/netcore/pipeline_netcore.md",sourceDirName:"workloads/azure/backend/netcore",slug:"/workloads/azure/backend/netcore/pipeline_netcore",permalink:"/docs/workloads/azure/backend/netcore/pipeline_netcore",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"pipeline_netcore",title:".NET - Azure DevOps Pipeline",sidebar_label:"Pipeline",description:"How to configure Azure DevOps Pipeline for .NET",keywords:[".net","azure devops","configure","pipeline","setting up","template","build"]},sidebar:"docs",previous:{title:"Infrastructure",permalink:"/docs/workloads/azure/backend/netcore/infrastructure_netcore"},next:{title:"AWS Infrastructure",permalink:"/docs/workloads/azure/backend/netcore/infrastructure_aws_netcore"}},o={},p=[{value:"Pipeline Diagram",id:"pipeline-diagram",level:2},{value:"Feature branch -&gt; Dev sequence",id:"feature-branch---dev-sequence",level:3},{value:"Main branch -&gt; Production sequence",id:"main-branch---production-sequence",level:3},{value:"Setting up Azure DevOps",id:"setting-up-azure-devops",level:2},{value:"Variables",id:"variables",level:3},{value:"Azure Credentials",id:"azure-credentials",level:4},{value:"Application Specific",id:"application-specific",level:4},{value:"Create the pipeline",id:"create-the-pipeline",level:3}];function h(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"The pipeline will automate provisioning and updating the .NET REST API with CQRS infrastructure in Azure."}),"\n",(0,n.jsx)(s.A,{url:"https://www.youtube.com/watch?v=6ND-8YVohT4"}),"\n",(0,n.jsx)(i.h2,{id:"pipeline-diagram",children:"Pipeline Diagram"}),"\n",(0,n.jsx)(i.h3,{id:"feature-branch---dev-sequence",children:"Feature branch -> Dev sequence"}),"\n",(0,n.jsx)("img",{alt:"Dev .NET REST API - Azure DevOps Pipeline",src:(0,l.Ay)("img/netcore_pipeline_dev.png")}),"\n",(0,n.jsx)(i.h3,{id:"main-branch---production-sequence",children:"Main branch -> Production sequence"}),"\n",(0,n.jsx)("img",{alt:"Prod .NET REST API - Azure DevOps Pipeline",src:(0,l.Ay)("img/netcore_pipeline_prod.png")}),"\n",(0,n.jsx)(i.h2,{id:"setting-up-azure-devops",children:"Setting up Azure DevOps"}),"\n",(0,n.jsx)(i.h3,{id:"variables",children:"Variables"}),"\n",(0,n.jsxs)(i.p,{children:["A variable file located at ",(0,n.jsx)(i.code,{children:"build/azDevOps/azure/ci-vars.yml"})," will contain the majority of the variables required for the pipeline. ",(0,n.jsx)(i.strong,{children:"This file should be manually checked and updated where required before first deployment"}),". If the project was generated using the Stacks CLI then the file will be updated with the information provided."]}),"\n",(0,n.jsxs)(i.p,{children:["Variable groups will need creating for storing some sensitive variables to be used by the pipeline. Instructions for creating a variable group can be found ",(0,n.jsx)(i.a,{href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups?view=azure-devops&tabs=classic#create-a-variable-group",children:"here"}),". Two variable groups are used by default, one for Azure credentials and one for any application specific variables."]}),"\n",(0,n.jsx)(i.h4,{id:"azure-credentials",children:"Azure Credentials"}),"\n",(0,n.jsxs)(i.p,{children:["Create a variable group called ",(0,n.jsx)(i.code,{children:"azure-sp-creds"}),", add a description and make sure the ",(0,n.jsx)(i.strong,{children:"Allow access to all pipelines"})," option is checked."]}),"\n",(0,n.jsx)(i.p,{children:"Add the following variables:"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Variable Name"}),(0,n.jsx)(i.th,{children:"Description"}),(0,n.jsx)(i.th,{children:"Required for"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"ARM_CLIENT_ID"}),(0,n.jsx)(i.td,{children:"Azure Service Principal Client ID"}),(0,n.jsx)(i.td,{children:"Terraform and application deployment"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"ARM_CLIENT_SECRET"}),(0,n.jsx)(i.td,{children:"Azure Service Principal Client Secret"}),(0,n.jsx)(i.td,{children:"Terraform and application deployment"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"ARM_SUBSCRIPTION_ID"}),(0,n.jsx)(i.td,{children:"Azure Subscription ID"}),(0,n.jsx)(i.td,{children:"Terraform and application deployment"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"ARM_TENANT_ID"}),(0,n.jsx)(i.td,{children:"Azure Tenant ID"}),(0,n.jsx)(i.td,{children:"Terraform and application deployment"})]})]})]}),"\n",(0,n.jsx)(i.h4,{id:"application-specific",children:"Application Specific"}),"\n",(0,n.jsxs)(i.p,{children:["Create a the variable group, add a description and make sure the ",(0,n.jsx)(i.strong,{children:"Allow access to all pipelines"})," option is checked. Update the ",(0,n.jsx)(i.code,{children:"- group: replaceme"})," in the ",(0,n.jsx)(i.code,{children:"build/azDevOps/azure/ci-vars.yml"})," file to match the name of your variable group."]}),"\n",(0,n.jsx)(i.p,{children:"Add the following variables:"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Variable Name"}),(0,n.jsx)(i.th,{children:"Description"}),(0,n.jsx)(i.th,{children:"Required for"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"SONAR_TOKEN"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"https://sonarcloud.io/",children:"SonarCloud Token"})}),(0,n.jsx)(i.td,{children:"Static Code Analysis"})]})})]}),"\n",(0,n.jsx)(i.h3,{id:"create-the-pipeline",children:"Create the pipeline"}),"\n",(0,n.jsx)(i.p,{children:"Follow the steps below to create the pipeline and trigger the initial run."}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["In the pipelines section of Azure DevOps, select ",(0,n.jsx)(i.strong,{children:"New Pipeline"}),"."]}),"\n",(0,n.jsx)(i.li,{children:"Select your repository."}),"\n",(0,n.jsxs)(i.li,{children:["Select the ",(0,n.jsx)(i.strong,{children:"Existing Azure Pipelines YAML files"})," option and enter the path ",(0,n.jsx)(i.code,{children:"build/azDevops/azure/ci.yml"})]}),"\n",(0,n.jsx)(i.li,{children:"Click run and wait for the pipeline to complete."}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},2017:(e,i,r)=>{r.d(i,{A:()=>d});r(6540);var n=r(3554),t=r.n(n);const l="playerSection_SVZU",s="playerWrapper_cclc",a="player_oSQx";var c=r(4848);const d=function(e){let{url:i}=e;return(0,c.jsx)("div",{className:l,children:(0,c.jsx)("div",{className:s,children:(0,c.jsx)(t(),{className:a,url:i,controls:!0,width:"100%",height:"100%",config:{}})})})}},8453:(e,i,r)=>{r.d(i,{R:()=>s,x:()=>a});var n=r(6540);const t={},l=n.createContext(t);function s(e){const i=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(l.Provider,{value:i},e.children)}}}]);