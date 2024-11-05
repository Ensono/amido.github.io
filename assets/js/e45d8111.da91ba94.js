"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[1616],{9948:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var t=n(4848),s=n(8453),i=n(6025);const c={id:"infrastructure_aws_netcore",title:".NET - AWS Infrastructure",sidebar_label:"AWS Infrastructure",description:"High level design of the reference implementation of the .NET Ensono Stacks REST API with CQRS.",keywords:[".net","rest api","cqrs","pipeline","aws","elastic container registry","elastic kubernetes service","dynamodb","deployment"]},o=void 0,d={id:"workloads/azure/backend/netcore/infrastructure_aws_netcore",title:".NET - AWS Infrastructure",description:"High level design of the reference implementation of the .NET Ensono Stacks REST API with CQRS.",source:"@site/docs/workloads/azure/backend/netcore/infrastructure_aws_netcore.md",sourceDirName:"workloads/azure/backend/netcore",slug:"/workloads/azure/backend/netcore/infrastructure_aws_netcore",permalink:"/docs/workloads/azure/backend/netcore/infrastructure_aws_netcore",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"infrastructure_aws_netcore",title:".NET - AWS Infrastructure",sidebar_label:"AWS Infrastructure",description:"High level design of the reference implementation of the .NET Ensono Stacks REST API with CQRS.",keywords:[".net","rest api","cqrs","pipeline","aws","elastic container registry","elastic kubernetes service","dynamodb","deployment"]},sidebar:"docs",previous:{title:"Pipeline",permalink:"/docs/workloads/azure/backend/netcore/pipeline_netcore"},next:{title:"AWS/GHA Pipeline",permalink:"/docs/workloads/azure/backend/netcore/pipeline_gha_netcore"}},l={},a=[{value:"Overview",id:"overview",level:2},{value:"Diagram",id:"diagram",level:3},{value:"Resource List",id:"resource-list",level:3},{value:"Deploying",id:"deploying",level:2},{value:"Pipelines",id:"pipelines",level:3}];function h(e){const r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(r.p,{children:"This page present the high level design of the reference implementation of the .NET Ensono Stacks REST API with CQRS."}),"\n",(0,t.jsx)(r.p,{children:"Both the diagram and resource list below are for a single environment."}),"\n",(0,t.jsx)(r.h3,{id:"diagram",children:"Diagram"}),"\n",(0,t.jsx)("img",{alt:"AWS .NET API Infrastructure",src:(0,i.Ay)("img/aws_rest_api_infrastructure.png")}),"\n",(0,t.jsx)(r.h3,{id:"resource-list",children:"Resource List"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Resource"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["EKS ",(0,t.jsx)(r.strong,{children:"*"})]}),(0,t.jsx)(r.td,{children:"Amazon Elastic Kubernetes Service"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Public DNS Record"}),(0,t.jsxs)(r.td,{children:["DNS record pointing Ingress (via application load balancer ",(0,t.jsx)(r.strong,{children:"*"})," and internal load balancer ",(0,t.jsx)(r.strong,{children:"*"}),")"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["ECR ",(0,t.jsx)(r.strong,{children:"*"})]}),(0,t.jsx)(r.td,{children:"Elastic Container Registry"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["Namespace: ",(0,t.jsx)(r.code,{children:"{env}-api"})]}),(0,t.jsx)(r.td,{children:"Kubernetes namespace for the environment"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Ingress"}),(0,t.jsx)(r.td,{children:"Kubernetes Ingress to handle routing to Service"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Service"}),(0,t.jsx)(r.td,{children:"Kubernetes Service to handle routing to Deployment Pods"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Deployment"}),(0,t.jsx)(r.td,{children:"Kubernetes Deployment for managing Pods"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"DynamoDB"}),(0,t.jsx)(r.td,{children:"Amazon managed NoSQL database"})]})]})]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"*"})," ",(0,t.jsx)(r.em,{children:"Resource is created by the core infrastructure deployment."})]}),"\n",(0,t.jsx)(r.h2,{id:"deploying",children:"Deploying"}),"\n",(0,t.jsxs)(r.p,{children:["All infrastructure is deployed using ",(0,t.jsx)(r.a,{href:"https://www.terraform.io/",children:"Terraform"})," that is included with the generated code."]}),"\n",(0,t.jsx)(r.h3,{id:"pipelines",children:"Pipelines"}),"\n",(0,t.jsx)(r.p,{children:"The following pipelines are currently supported for automating the deployment:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/workloads/azure/backend/netcore/pipeline_gha_netcore",children:"GitHub Action"})}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>o});var t=n(6540);const s={},i=t.createContext(s);function c(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);