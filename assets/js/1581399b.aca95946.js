"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[1497],{6743:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=i(4848),r=i(8453);const s={id:"azure-container-apps",title:"Azure Container Apps",sidebar_label:"Getting started with Azure Container Apps",description:"How to get started with Azure Container Apps in Stacks",keywords:["Infrastructure","azure","Azure Container Apps","stacks","ensono"]},a=void 0,o={id:"getting_started/azure-container-app/azure-container-apps",title:"Azure Container Apps",description:"How to get started with Azure Container Apps in Stacks",source:"@site/docs/getting_started/azure-container-app/ACA.md",sourceDirName:"getting_started/azure-container-app",slug:"/getting_started/azure-container-app/azure-container-apps",permalink:"/docs/getting_started/azure-container-app/azure-container-apps",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"azure-container-apps",title:"Azure Container Apps",sidebar_label:"Getting started with Azure Container Apps",description:"How to get started with Azure Container Apps in Stacks",keywords:["Infrastructure","azure","Azure Container Apps","stacks","ensono"]},sidebar:"docs",previous:{title:"Azure DevOps",permalink:"/docs/infrastructure/azure/pipelines/azure_devops"},next:{title:"Core Infrastructure",permalink:"/docs/infrastructure/aws/core_infrastructure_aws"}},l={},c=[{value:"Azure Container Apps Components / Infrastucture Overview",id:"azure-container-apps-components--infrastucture-overview",level:2},{value:"Azure Container Options Comparison",id:"azure-container-options-comparison",level:2},{value:"Notes",id:"notes",level:3},{value:"CICD Strategy",id:"cicd-strategy",level:2},{value:"Option 1 - Container App Enviornment and Container App deployment via Infrastructure pipeline",id:"option-1---container-app-enviornment-and-container-app-deployment-via-infrastructure-pipeline",level:3},{value:"Option 2 - Container App Environment deployment via Infrastructure pipeline, Container App deployment via Application pipeline",id:"option-2---container-app-environment-deployment-via-infrastructure-pipeline-container-app-deployment-via-application-pipeline",level:3},{value:"Recommendation",id:"recommendation",level:3},{value:"ACA vs AKS: A Comparative Analysis",id:"aca-vs-aks-a-comparative-analysis",level:2},{value:"Upgrade Path: Azure Container Apps to Azure Kubernetes Service",id:"upgrade-path-azure-container-apps-to-azure-kubernetes-service",level:2}];function d(e){const n={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Azure Container Apps(ACA) is a fully managed serverless container service for building and deploying modern apps at scale - without managing infrastructure. It is builds on top of Kubernetes, offering a fully managed experience for deploying containerized applications without requiring direct access to Kubernetes APIs or cluster management."}),"\n",(0,t.jsx)(n.p,{children:"Common uses of Azure Container Apps include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Deploying API endpoints"}),"\n",(0,t.jsx)(n.li,{children:"Hosting background processing jobs"}),"\n",(0,t.jsx)(n.li,{children:"Handling event-driven processing"}),"\n",(0,t.jsx)(n.li,{children:"Running microservices"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"aca-usecase.png",src:i(1729).A+"",width:"2416",height:"907"})}),"\n",(0,t.jsx)(n.h2,{id:"azure-container-apps-components--infrastucture-overview",children:"Azure Container Apps Components / Infrastucture Overview"}),"\n",(0,t.jsx)(n.p,{children:"Azure Container Apps consists of two primary components:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Container Apps Environment"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This component allows you to specify the infrastructure for deploying your container app."}),"\n",(0,t.jsx)(n.li,{children:"A secure boundary around one or more container apps and jobs."}),"\n",(0,t.jsx)(n.li,{children:"Defines shared settings for networking, logging, and other services."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Container App"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A Container App hosts a single, independent microservice and includes its desired state configuration."}),"\n",(0,t.jsx)(n.li,{children:"Utilizes containers from public registries (e.g., Docker Hub) or private registries (e.g., Azure Container Registry)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"aca-components.png",src:i(5086).A+"",width:"1512",height:"962"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"More settings"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ingress"}),": Azure Container Apps supports both HTTP and HTTPS ingress. The ingress controls how external traffic reaches your container apps and allows you to configure custom domains, SSL/TLS certificates, authentication, and authorization."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Networking rules"}),": You can define networking rules to manage how your application communicates internally and with the outside world. This includes securing connections and integrating with private networks for enhanced security."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Persistent storage"}),": Azure Container Apps allows you to attach Azure Storage accounts as volumes in your containers, enabling your application to access persistent storage for data that needs to be preserved across container instances or revisions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Secrets management"}),": If your application uses secrets, you can inject them into your containers either from Azure Key Vault or defined directly in the Container App settings. This ensures secure storage and access to sensitive information."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Managed identity"}),": You can assign a managed identity to your container app, allowing it to securely access other Azure services without the need for explicit credentials."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Logging and monitoring"}),": Azure Container Apps integrates with Azure Monitor for logging and monitoring. You can configure log collection and set up alerts to gain insights into your application's performance and health."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Health probes"}),": You can define liveness and readiness probes to monitor the health of your containers. These probes help ensure that your application is functioning correctly and can handle incoming requests."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"azure-container-options-comparison",children:"Azure Container Options Comparison"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Feature/Service"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Azure Container Apps"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Azure App Service"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Azure Container Instances"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Azure Kubernetes Service"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Azure Functions"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Primary Use Case"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Serverless microservices and jobs"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Web applications and APIs"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Single pod of containers on demand"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Full Kubernetes orchestration"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Event-driven functions"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Kubernetes-based"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes (abstracted)"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes (full access)"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Serverless"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Partially"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Event-driven scaling"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Limited"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Manual/custom"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Direct K8s API access"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Microservices support"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Strong"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Limited"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Limited"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Strong"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Limited"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Web-optimized"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Can be configured"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Partially"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Container support"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes (as option)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Managed service"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Fully managed"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Fully managed"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Fully managed"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Managed control plane"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Fully managed"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Best for"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"General-purpose containers, microservices"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Web apps, APIs"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Low-level container instances"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Teams requiring full K8s control"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"FaaS, event-driven apps"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This table provides a high-level comparison of the main features and use cases for each Azure container service."}),"\n",(0,t.jsx)(n.li,{children:"For detailed information on each service, refer to the official Azure documentation."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"cicd-strategy",children:"CICD Strategy"}),"\n",(0,t.jsx)(n.p,{children:"The deployment strategy can be segmented into two parts:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Infrastructure Deployment"}),"\n",(0,t.jsx)(n.li,{children:"App Deployment"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"option-1---container-app-enviornment-and-container-app-deployment-via-infrastructure-pipeline",children:"Option 1 - Container App Enviornment and Container App deployment via Infrastructure pipeline"}),"\n",(0,t.jsx)(n.p,{children:"This approach involves deploying both the Container App Environment and Container App through the infrastructure pipeline, with application code deployed to the Container App via a separate application deployment pipeline."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"cicd-option1.png",src:i(6930).A+"",width:"2196",height:"861"})}),"\n",(0,t.jsx)(n.p,{children:"STACKS-INFRASTRUCTURE-ACA\n\u251c\u2500\u2500 .github              # GitHub-specific configurations and workflows\n\u251c\u2500\u2500 cicd\n\u2502   \u2514\u2500\u2500 build            # CI/CD build configurations\n\u2502       \u251c\u2500\u2500 azDevOps     # Azure DevOps specific build configurations\n\u2502       \u251c\u2500\u2500 config       # Configuration files for the build process\n\u2502       \u251c\u2500\u2500 scripts      # Build-related scripts\n\u2502       \u2514\u2500\u2500 taskctl      # TaskCTL configurations for the build process\n\u251c\u2500\u2500 deploy\n\u2502   \u2514\u2500\u2500 azure            # Terraform configurations for the Core Infra deployment including Container App\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 app              # Application source code\n\u2502   \u2514\u2500\u2500 aca-vars.yml     # Variables specific to Azure Container App\n\u2502   \u2514\u2500\u2500 deploy-aca.yml   # Deployment configuration for Azure Container App\n\u251c\u2500\u2500 .gitattributes       # Git attributes file\n\u251c\u2500\u2500 .gitignore           # Git ignore file\n\u251c\u2500\u2500 LICENSE              # License file for the project\n\u251c\u2500\u2500 README.md            # Main readme file with project documentation\n\u2514\u2500\u2500 taskctl.yaml         # TaskCTL configuration file"}),"\n",(0,t.jsx)(n.p,{children:"Pro's"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Centralized infrastructure code management."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Con's"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Requires initial Container App provisioning with a public image, creating an unnecessary first revision"}),"\n",(0,t.jsx)(n.li,{children:"Potential discrepancies between infrastructure-defined image tags and application deployment updates"}),"\n",(0,t.jsx)(n.li,{children:"Additional maintenance overhead to keep infrastructure and application deployment configurations in sync"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"option-2---container-app-environment-deployment-via-infrastructure-pipeline-container-app-deployment-via-application-pipeline",children:"Option 2 - Container App Environment deployment via Infrastructure pipeline, Container App deployment via Application pipeline"}),"\n",(0,t.jsx)(n.p,{children:"This approach separates the deployment of the Container App Environment and the Container App itself:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Infrastructure Deployment Pipeline:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Deploys Container App Environment and other required resources."}),"\n",(0,t.jsx)(n.li,{children:"Does not provision the Container App at this stage."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Application Deployment Pipeline:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Builds application code and publishes the image to the container registry."}),"\n",(0,t.jsx)(n.li,{children:"Provisions the Container App using Terraform with the newly created image."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"cicd-option2.png",src:i(1465).A+"",width:"1880",height:"953"})}),"\n",(0,t.jsx)(n.p,{children:"STACKS-INFRASTRUCTURE-ACA\n\u251c\u2500\u2500 .github              # GitHub-specific configurations and workflows\n\u251c\u2500\u2500 cicd\n\u2502   \u2514\u2500\u2500 build            # CI/CD build configurations\n\u2502       \u251c\u2500\u2500 azDevOps     # Azure DevOps specific build configurations\n\u2502       \u251c\u2500\u2500 config       # Configuration files for the build process\n\u2502       \u251c\u2500\u2500 scripts      # Build-related scripts\n\u2502       \u2514\u2500\u2500 taskctl      # TaskCTL configurations for the build process\n\u251c\u2500\u2500 deploy\n\u2502   \u2514\u2500\u2500 azure            # Terraform configurations for the Core Infra deployment excluding Container App\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 app              # Application source code\n\u2502   \u2514\u2500\u2500 terraform        # Terraform configurations for the application (Container App)\n\u2502   \u2514\u2500\u2500 aca-vars.yml     # Variables specific to Azure Container App\n\u2502   \u2514\u2500\u2500 deploy-aca.yml   # Deployment configuration for Azure Container App\n\u251c\u2500\u2500 .gitattributes       # Git attributes file\n\u251c\u2500\u2500 .gitignore           # Git ignore file\n\u251c\u2500\u2500 LICENSE              # License file for the project\n\u251c\u2500\u2500 README.md            # Main readme file with project documentation\n\u2514\u2500\u2500 taskctl.yaml         # TaskCTL configuration file"}),"\n",(0,t.jsx)(n.p,{children:"Pro's"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Eliminates the need for initial Container App provisioning with a public image."}),"\n",(0,t.jsx)(n.li,{children:"Avoids unnecessary revisions in the Container App."}),"\n",(0,t.jsx)(n.li,{children:"Facilitates easier maintenance and version control of container images."}),"\n",(0,t.jsx)(n.li,{children:"Provides loose coupling in Container App deployment."}),"\n",(0,t.jsx)(n.li,{children:"Allows for more precise control over image versions used in deployments."}),"\n",(0,t.jsx)(n.li,{children:"Aligns infrastructure provisioning more closely with application lifecycle."}),"\n",(0,t.jsx)(n.li,{children:"Enables application-specific configurations: Each individual Container App can have different liveness and readiness probes, scaling rules, and ingress settings (such as ingress port) that are more closely aligned with application requirements. This allows each Container App team to define these settings independently in their application deployment pipeline, providing greater flexibility and customization."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Con's"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Requires separate management of Terraform code for each individual Container App"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"recommendation",children:"Recommendation"}),"\n",(0,t.jsx)(n.p,{children:"We recommend implementing Option 2: Container App Environment deployment via Infrastructure pipeline and Container App deployment via Application pipeline. This approach provides the flexibility to manage infrastructure and application deployments separately while optimizing the deployment process for Azure Container Apps.\nThis recommendation will result in a more streamlined deployment process, eliminating unnecessary Container App revisions and allowing for tighter integration between application builds and deployments."}),"\n",(0,t.jsxs)(n.p,{children:["However, it's important to note that this approach will require additional effort in managing separate Terraform configurations for each Container App. To mitigate this challenge, we will utilize the existing Azure Container Apps Terraform module developed by Ensono, which is available ",(0,t.jsx)(n.a,{href:"https://registry.terraform.io/modules/Ensono/aca/azurerm/latest",children:"here"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This pre-built module will help reduce duplication and ease maintenance across multiple Container Apps, standardizing our Container App deployments and reducing the overhead of managing individual Terraform configurations.\nBy leveraging this existing module in our recommended approach, we can achieve a more efficient and manageable deployment strategy for our Azure Container Apps while maintaining the flexibility to evolve both infrastructure and applications independently."}),"\n",(0,t.jsx)(n.h2,{id:"aca-vs-aks-a-comparative-analysis",children:"ACA vs AKS: A Comparative Analysis"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Feature"}),(0,t.jsxs)(n.th,{children:["Azure Kubernetes Service (AKS)",(0,t.jsx)("br",{}),"Infrastructure focus, higher flexibility"]}),(0,t.jsxs)(n.th,{children:["Azure Container Apps (ACA)",(0,t.jsx)("br",{}),"Application focus, infrastructure abstraction"]})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Primary Offering"}),(0,t.jsx)(n.td,{children:"Azure-managed Kubernetes environment with comprehensive API access and granular cluster management, utilizing a node-centric pricing structure"}),(0,t.jsx)(n.td,{children:"Fully-managed serverless abstraction on top of Kubernetes infrastructure, purpose built for managing and scaling event-driven microservices with a consumption-based pricing model"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Key Strengths"}),(0,t.jsxs)(n.td,{children:["\u2022 Aligned with upstream Kubernetes, offering managed control plane",(0,t.jsx)("br",{}),"\u2022 Operations flexibility with advanced customization",(0,t.jsx)("br",{}),"\u2022 Ideal for teams with Kubernetes expertise"]}),(0,t.jsxs)(n.td,{children:["\u2022 Platform-as-a-Service experience with serverless scale",(0,t.jsx)("br",{}),"\u2022 Enhanced developer efficiency through reduced operational complexity",(0,t.jsx)("br",{}),"\u2022 Optimized for Linux-based, general-purpose stateless container deployments"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Deployment Approach"}),(0,t.jsxs)(n.td,{children:["\u2022 Admins set up node-based AKS clusters via Azure Portal, CLI, or IaC",(0,t.jsx)("br",{}),"\u2022 Developers use Kubernetes manifests or Helm for container deployment in isolated namespaces"]}),(0,t.jsxs)(n.td,{children:["\u2022 Direct container deployment as Container Apps through Azure Portal, CLI, or IaC",(0,t.jsx)("br",{}),"\u2022 No Kubernetes manifest knowledge required",(0,t.jsx)("br",{}),"\u2022 Apps grouped in shared environments, similar to Kubernetes namespaces"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Open Source Tools"}),(0,t.jsxs)(n.td,{children:["\u2022 Extendable with various cluster add-ons (e.g., Dapr, KEDA, Service Mesh)",(0,t.jsx)("br",{}),"\u2022 Supports custom component installation using Kubernetes manifests"]}),(0,t.jsxs)(n.td,{children:["Includes opinionated platform capabilities powered by CNCF projects including Dapr, KEDA and Envoy which are fully platform-managed and supported",(0,t.jsx)("br",{}),"\u2022 Envoy: managed ingress and traffic splitting",(0,t.jsx)("br",{}),"\u2022 KEDA: managed, event-driven autoscale",(0,t.jsx)("br",{}),"\u2022 Dapr: codified best practices for microservices"]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"upgrade-path-azure-container-apps-to-azure-kubernetes-service",children:"Upgrade Path: Azure Container Apps to Azure Kubernetes Service"}),"\n",(0,t.jsx)(n.p,{children:"High-level upgrade path from Azure Container Apps to Azure Kubernetes Service."}),"\n",(0,t.jsx)(n.p,{children:"Application code and container images remain largely unchanged in this migration. The primary focus is on the infrastructure and deployment mechanisms, not the application internals. Minor adjustments to application configurations may be needed to align with Kubernetes-specific environment variables or service discovery methods."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Assessment and Planning"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Review current microservices architecture and ACA-specific features in use"}),"\n",(0,t.jsx)(n.li,{children:"Identify necessary Kubernetes features for AKS migration"}),"\n",(0,t.jsx)(n.li,{children:"Plan changes for CI/CD pipelines"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Infrastructure Preparation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Set up AKS cluster (using Terraform or Azure CLI)"}),"\n",(0,t.jsx)(n.li,{children:"Configure networking (VNets, subnets)"}),"\n",(0,t.jsx)(n.li,{children:"Set up or integrate existing Azure Container Registry (ACR)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Kubernetes Manifest Creation / Service migration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Begin with non-critical services"}),"\n",(0,t.jsx)(n.li,{children:"Convert ACA configurations to Kubernetes manifests (Deployments, Services, Ingress)"}),"\n",(0,t.jsx)(n.li,{children:"Set up Dapr on AKS if previously used in ACA"}),"\n",(0,t.jsx)(n.li,{children:"Translate ACA scaling rules to Kubernetes Horizontal Pod Autoscaler (HPA)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"CI/CD Pipeline Updates"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Update pipelines to deploy to AKS"}),"\n",(0,t.jsx)(n.li,{children:"Implement Kubernetes-specific deployment strategies (rolling updates, blue-green deployments)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Testing"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Thoroughly test each migrated service in AKS environment"}),"\n",(0,t.jsx)(n.li,{children:"Perform load testing to ensure performance"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Gradual Transition and Decommissioning"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Decommission ACA environment after successful migration and stabilization"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Additional points to consider during upgrade/ migration:-"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Networking and Service Discovery"}),"\n",(0,t.jsx)(n.li,{children:"State and Data Migration"}),"\n",(0,t.jsx)(n.li,{children:"Monitoring and Logging"}),"\n",(0,t.jsx)(n.li,{children:"Security"}),"\n",(0,t.jsx)(n.li,{children:"Secrets Management"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," This upgrade path is a high-level guide. The actual process may vary based on specific implementation details and requirements. Thorough planning, gradual migration, and extensive testing at each step are crucial for a successful transition."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5086:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/aca-components-2343d062a3e31be5d05b23dc189227f4.png"},1729:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/aca-usecase-f867030eb1aa5d3e43f119091c39ea97.png"},6930:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/cicd-option1-7e175556020409e782524f639c7b51a5.png"},1465:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/cicd-option2-f65c2e90f9f55d51ee0bd1c6f85ac152.png"},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(6540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);