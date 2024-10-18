"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[7434],{8656:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(4848),o=r(8453);const a={id:"core_data_platform_deployment_azure",title:"Infrastructure Deployment",sidebar_label:"2. Infrastructure Deployment",hide_title:!1,hide_table_of_contents:!1,description:"Infrastructure deployment",keywords:["stacks cli","ensono","data","infrastructure","azure","template"]},i=void 0,s={id:"workloads/azure/data/getting_started/core_data_platform_deployment_azure",title:"Infrastructure Deployment",description:"Infrastructure deployment",source:"@site/docs/workloads/azure/data/getting_started/core_data_platform_deployment_azure.md",sourceDirName:"workloads/azure/data/getting_started",slug:"/workloads/azure/data/getting_started/core_data_platform_deployment_azure",permalink:"/docs/workloads/azure/data/getting_started/core_data_platform_deployment_azure",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"core_data_platform_deployment_azure",title:"Infrastructure Deployment",sidebar_label:"2. Infrastructure Deployment",hide_title:!1,hide_table_of_contents:!1,description:"Infrastructure deployment",keywords:["stacks cli","ensono","data","infrastructure","azure","template"]},sidebar:"docs",previous:{title:"1. Generate a data project",permalink:"/docs/workloads/azure/data/getting_started/generate_project"},next:{title:"3. Local Development Quickstart",permalink:"/docs/workloads/azure/data/getting_started/dev_quickstart_data_azure"}},d={},l=[{value:"Step 1: Create branch and set networking option",id:"step-1-create-branch-and-set-networking-option",level:2},{value:"Step 2: Add Infrastructure pipeline in Azure DevOps",id:"step-2-add-infrastructure-pipeline-in-azure-devops",level:2},{value:"Step 3: Deploy Infrastructure in non-production environment",id:"step-3-deploy-infrastructure-in-non-production-environment",level:2},{value:"Step 4: Deploy Infrastructure in further environments",id:"step-4-deploy-infrastructure-in-further-environments",level:2},{value:"Next steps",id:"next-steps",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This section provides an overview of configuring and deploying the core data platform infrastructure in Azure."}),"\n",(0,n.jsxs)(t.p,{children:["It assumes you have ",(0,n.jsx)(t.a,{href:"/docs/workloads/azure/data/getting_started/generate_project",children:"generated a new data project using Ensono Stacks"}),", and that the following ",(0,n.jsx)(t.a,{href:"/docs/workloads/azure/data/getting_started/requirements_data_azure",children:"requirements"})," are in place:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/docs/workloads/azure/data/getting_started/requirements_data_azure#azure-subscription",children:"Azure subscription and service principal"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["If you want to provision the infrastructure within a private network, this can be done as part of a ",(0,n.jsx)(t.a,{href:"../architecture/infrastructure_data_azure#networking",children:"Hub-Spoke network topology"}),". Spoke virtual network and subnet for private endpoints must be provisioned for each environment. The hub network must contain a self-hosted agent. See ",(0,n.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/hybrid-networking/hub-spoke?tabs=cli",children:"Microsoft documentation"})," for more details on implementing Hub-spoke network topology in Azure."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/docs/workloads/azure/data/getting_started/requirements_data_azure#azure-devops",children:"Azure DevOps project with Pipelines variable groups"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"step-1-create-branch-and-set-networking-option",children:"Step 1: Create branch and set networking option"}),"\n",(0,n.jsx)(t.p,{children:"Open the project locally and create a new feature branch e.g.:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"git checkout -b feat/infra-pipeline\n"})}),"\n",(0,n.jsx)(t.h2,{id:"step-2-add-infrastructure-pipeline-in-azure-devops",children:"Step 2: Add Infrastructure pipeline in Azure DevOps"}),"\n",(0,n.jsxs)(t.p,{children:["A YAML file containing a template Azure DevOps CI/CD pipeline for building and deploying the core infrastructure is provided in ",(0,n.jsx)(t.code,{children:"build/azDevOps/azure/air-infrastructure-data.yml"})," - this should be added as the definition for a new pipeline in Azure DevOps."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Sign-in to your Azure DevOps organization and go to your project"}),"\n",(0,n.jsxs)(t.li,{children:["Go to Pipelines, and then select ",(0,n.jsx)(t.strong,{children:"New pipeline"})]}),"\n",(0,n.jsxs)(t.li,{children:["Name the new pipeline, e.g. ",(0,n.jsx)(t.code,{children:"amido.stacks-data-infrastructure"})]}),"\n",(0,n.jsxs)(t.li,{children:["For the pipeline definition, specify the YAML file in the project repository feature branch (",(0,n.jsx)(t.code,{children:"air-infrastructure-data.yml"}),") and save"]}),"\n",(0,n.jsxs)(t.li,{children:["Make sure that the Enable Private Networks box is set to your preferred deployment method. If you want to provision infrastructure within a ",(0,n.jsx)(t.a,{href:"../architecture/infrastructure_data_azure#networking",children:"private network"}),", ensure this variable is ticked. Unticking the box will issue a public network deployment."]}),"\n",(0,n.jsx)(t.li,{children:"The new pipeline will require access to any Azure DevOps pipeline variable groups specified in the pipeline YAML. Under each variable group, go to 'Pipeline permissions' and add the pipeline."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"step-3-deploy-infrastructure-in-non-production-environment",children:"Step 3: Deploy Infrastructure in non-production environment"}),"\n",(0,n.jsx)(t.p,{children:"Run the pipeline configured in Step 2 to commence the build and deployment process."}),"\n",(0,n.jsx)(t.p,{children:"Running this pipeline in Azure DevOps will initiate the deployment of artifacts into the non-production (nonprod) environment. It's important to monitor the progress of this deployment to ensure its success. You can track the progress and status of the deployment within the Pipelines section of Azure DevOps."}),"\n",(0,n.jsxs)(t.p,{children:["If successful, the core infrastructure resources will now be available in the nonprod Ensono Stacks environment. To view these deployed resources, navigate to the ",(0,n.jsx)(t.a,{href:"https://portal.azure.com/",children:"Azure portal"})," and search for the resource group associated with the deployment. This resource group is named based upon values provided during step 1 in the pattern\n",(0,n.jsx)(t.code,{children:"companyname-projectname-stage-region-component"})," (for example: ",(0,n.jsx)(t.code,{children:"amido-stacks-dev-euw-de"}),"). Within the resource group, you'll find a list of the resources that were deployed."]}),"\n",(0,n.jsxs)(t.p,{children:["Once core infrasturcture resources are deployed in nonprod environment, values will need adding into the nonprod variable group to reflect the deployed resources (e.g. ",(0,n.jsx)(t.code,{children:"amido-stacks-de-pipeline-nonprod"}),"). For additional information, see ",(0,n.jsx)(t.a,{href:"/docs/workloads/azure/data/getting_started/requirements_data_azure#azure-pipelines-variable-groups",children:"Pipelines variable groups"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"step-4-deploy-infrastructure-in-further-environments",children:"Step 4: Deploy Infrastructure in further environments"}),"\n",(0,n.jsx)(t.p,{children:"By default Ensono Stacks provides a framework for managing the platform across two environments - nonprod and prod.\nThe template CI/CD pipelines provided are based upon these two platform environments (nonprod and prod) - but these may be amended depending upon the specific requirements of your project and organisation."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Deployment to the non-production (nonprod) environment is triggered on a feature branch when a pull request is open"}),"\n",(0,n.jsxs)(t.li,{children:["Deployment to the production (prod) environment is triggered on merging to the ",(0,n.jsx)(t.code,{children:"main"})," branch, followed by manual approval of the release step."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Once core infrastructure resources are deployed in prod environment, values will need adding into the prod variable group to reflect the deployed resources (e.g. ",(0,n.jsx)(t.code,{children:"amido-stacks-de-pipeline-prod"}),"). For additional information, see ",(0,n.jsx)(t.a,{href:"/docs/workloads/azure/data/getting_started/requirements_data_azure#azure-pipelines-variable-groups",children:"Pipelines variable groups"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,n.jsxs)(t.p,{children:["Now you have generated and deployed a new Ensono Stacks Data Platform, ",(0,n.jsx)(t.a,{href:"/docs/workloads/azure/data/getting_started/dev_quickstart_data_azure",children:"setup your local development environment"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var n=r(6540);const o={},a=n.createContext(o);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);