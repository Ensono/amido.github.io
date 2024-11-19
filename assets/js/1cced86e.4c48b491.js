"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[1800],{98:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(4848),n=t(8453);const o={id:"intro_data_azure",title:"Ensono Stacks Azure Data Platform",sidebar_label:"Introduction",hide_title:!1,hide_table_of_contents:!1,description:"Introduction to Ensono Stacks Azure Data Platform",keywords:["data","python","etl","databricks","azure","adf","template"]},s=void 0,i={id:"workloads/azure/data/intro_data_azure",title:"Ensono Stacks Azure Data Platform",description:"Introduction to Ensono Stacks Azure Data Platform",source:"@site/docs/workloads/azure/data/intro_data_azure.md",sourceDirName:"workloads/azure/data",slug:"/workloads/azure/data/intro_data_azure",permalink:"/docs/workloads/azure/data/intro_data_azure",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"intro_data_azure",title:"Ensono Stacks Azure Data Platform",sidebar_label:"Introduction",hide_title:!1,hide_table_of_contents:!1,description:"Introduction to Ensono Stacks Azure Data Platform",keywords:["data","python","etl","databricks","azure","adf","template"]},sidebar:"docs",previous:{title:"AWS SQS module",permalink:"/docs/workloads/aws/backend/java/architecture/dependency_sqs_java"},next:{title:"Architecture Overview",permalink:"/docs/workloads/azure/data/architecture/architecture_data_azure"}},d={},l=[{value:"High-level architecture",id:"high-level-architecture",level:3},{value:"Infrastructure deployed",id:"infrastructure-deployed",level:3},{value:"Data Engineering workloads",id:"data-engineering-workloads",level:3}];function c(e){const a={a:"a",em:"em",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:["The ",(0,r.jsx)(a.a,{href:"https://github.com/ensono/stacks-azure-data",children:"Ensono Stacks Azure Data Platform"})," solution provides\na framework for accelerating the deployment of a production-ready modern data platform in Azure."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Ensono Stacks Data Overview",src:t(3357).A+"",width:"1651",height:"1524"})}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsxs)(a.li,{children:["Use the ",(0,r.jsx)(a.a,{href:"/docs/stackscli/about",children:"Ensono Stacks CLI"})," to generate a new data platform project."]}),"\n",(0,r.jsx)(a.li,{children:"Build and deploy the data platform infrastructure into your Azure environment."}),"\n",(0,r.jsxs)(a.li,{children:["Accelerate development of data workloads and ELT pipelines with the ",(0,r.jsx)(a.a,{href:"/docs/workloads/azure/data/data_engineering/datastacks",children:"Datastacks CLI"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["The Ensono Stacks Data Platform delivers a modern ",(0,r.jsx)(a.em,{children:"Lakehouse"})," solution, based upon the ",(0,r.jsx)(a.a,{href:"/docs/workloads/azure/data/data_engineering/data_engineering_intro_azure#medallion-architecture",children:"medallion architecture"}),", with Bronze, Silver and Gold layers for various stages of data preparation. The platform utilises tools including ",(0,r.jsx)(a.strong,{children:"Azure Data Factory"})," for data ingestion and orchestration, ",(0,r.jsx)(a.strong,{children:"Databricks"})," for data processing and ",(0,r.jsx)(a.strong,{children:"Azure Data Lake Storage Gen2"})," for data lake storage. It provides a foundation for data analytics and reporting through ",(0,r.jsx)(a.strong,{children:"Microsoft Fabric"})," and ",(0,r.jsx)(a.strong,{children:"Power BI"}),"."]}),"\n",(0,r.jsx)(a.p,{children:"Key elements of the solution include:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Infrastructure as code (IaC) for all infrastructure components (Terraform)."}),"\n",(0,r.jsx)(a.li,{children:"Deployment pipelines to enable CI/CD and DataOps for the platform and all data workloads."}),"\n",(0,r.jsxs)(a.li,{children:["Sample ",(0,r.jsx)(a.a,{href:"/docs/workloads/azure/data/data_engineering/ingest_data_azure",children:"data ingest pipelines"})," that transfer data from a source into the landing (Bronze) data lake zone."]}),"\n",(0,r.jsxs)(a.li,{children:["Sample ",(0,r.jsx)(a.a,{href:"/docs/workloads/azure/data/data_engineering/data_processing",children:"data processing pipelines"})," performing data transformations from Bronze to Silver and Silver to Gold layers."]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["The solution utilises the ",(0,r.jsx)(a.a,{href:"/docs/workloads/azure/data/data_engineering/stacks_data_utilities",children:"Stacks Data Python library"}),", which offers a suite of utilities to support:"]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Data transformations using PySpark."}),"\n",(0,r.jsxs)(a.li,{children:["Frameworks for ",(0,r.jsx)(a.a,{href:"/docs/workloads/azure/data/data_engineering/data_quality_azure",children:"data quality validations"})," and ",(0,r.jsx)(a.a,{href:"/docs/workloads/azure/data/data_engineering/testing_data_azure",children:"automated testing"}),"."]}),"\n",(0,r.jsxs)(a.li,{children:["The ",(0,r.jsx)(a.a,{href:"/docs/workloads/azure/data/data_engineering/datastacks",children:"Datastacks CLI"})," - a tool enabling developers to quickly generate new data workloads."]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"high-level-architecture",children:"High-level architecture"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"High-level architecture",src:t(2706).A+"",width:"2559",height:"1435"})}),"\n",(0,r.jsx)(a.h3,{id:"infrastructure-deployed",children:"Infrastructure deployed"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Resource Group"}),"\n",(0,r.jsx)(a.li,{children:"Key Vault"}),"\n",(0,r.jsx)(a.li,{children:"Azure Data Lake Storage Gen2"}),"\n",(0,r.jsx)(a.li,{children:"Azure Blob Storage"}),"\n",(0,r.jsx)(a.li,{children:"Azure Data Factory"}),"\n",(0,r.jsx)(a.li,{children:"Log Analytics Workspace"}),"\n",(0,r.jsx)(a.li,{children:"Databricks Workspace"}),"\n",(0,r.jsx)(a.li,{children:"Azure SQL Database (optional, for testing the platform)"}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["The deployed platform can ",(0,r.jsx)(a.a,{href:"/docs/workloads/azure/data/data_engineering/data_engineering_intro_azure#fabric-lakehouse",children:"integrate with Microsoft Fabric"})," to provide a suite of analytics tools and capabilities."]}),"\n",(0,r.jsxs)(a.p,{children:["The solution is designed to be deployed within a secure private network - for details see ",(0,r.jsx)(a.a,{href:"/docs/workloads/azure/data/architecture/infrastructure_data_azure",children:"infrastructure and networking"}),"."]}),"\n",(0,r.jsx)(a.h3,{id:"data-engineering-workloads",children:"Data Engineering workloads"}),"\n",(0,r.jsx)(a.p,{children:"Example data engineering workloads are provided, based upon the Datastacks templates:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"/docs/workloads/azure/data/data_engineering/ingest_data_azure",children:"Ingest"})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"/docs/workloads/azure/data/data_engineering/data_processing",children:"Bronze to Silver"})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"/docs/workloads/azure/data/data_engineering/data_processing",children:"Silver to Gold"})}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["Each of the ingest and data processing workloads may optionally include ",(0,r.jsx)(a.a,{href:"/docs/workloads/azure/data/data_engineering/data_quality_azure",children:"data quality checks"}),"."]})]})}function u(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},2706:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/Stacks_Azure_Data_Platform-HLD-bd0d72d342d7cf2bf95c3c4384fe160d.png"},3357:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/stacks-data-overview-a179ba5ce75d215026d7ea9eefcd0e1d.png"},8453:(e,a,t)=>{t.d(a,{R:()=>s,x:()=>i});var r=t(6540);const n={},o=r.createContext(n);function s(e){const a=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(o.Provider,{value:a},e.children)}}}]);