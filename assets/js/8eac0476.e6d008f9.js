"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[6637],{3913:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=i(4848),t=i(8453);const o={id:"requirements_netcore",title:"Requirements",sidebar_label:"Requirements",hide_title:!1,hide_table_of_contents:!0,description:"Detailed requirements to create .NET REST API application from a template",keywords:[".net","rest api","cqrs","example","template","azure","application insights","cosmos db","build","run","application","configure","docker","tests","github","scaffolding","cli"]},s=void 0,l={id:"workloads/azure/backend/netcore/requirements_netcore",title:"Requirements",description:"Detailed requirements to create .NET REST API application from a template",source:"@site/docs/workloads/azure/backend/netcore/requirments_netcore.md",sourceDirName:"workloads/azure/backend/netcore",slug:"/workloads/azure/backend/netcore/requirements_netcore",permalink:"/docs/workloads/azure/backend/netcore/requirements_netcore",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"requirements_netcore",title:"Requirements",sidebar_label:"Requirements",hide_title:!1,hide_table_of_contents:!0,description:"Detailed requirements to create .NET REST API application from a template",keywords:[".net","rest api","cqrs","example","template","azure","application insights","cosmos db","build","run","application","configure","docker","tests","github","scaffolding","cli"]},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/workloads/azure/backend/netcore/introduction_netcore"},next:{title:"Create REST API project",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api/create_project_netcore"}},a={},c=[{value:"Running the API Locally",id:"running-the-api-locally",level:2},{value:"Windows",id:"windows",level:3},{value:"Requirements for running the API locally (Windows)",id:"requirements-for-running-the-api-locally-windows",level:4},{value:"Mandatory (Locally)",id:"mandatory-locally",level:5},{value:"Optional",id:"optional",level:5},{value:"Additional requirements for running the API in Docker containers (Windows)",id:"additional-requirements-for-running-the-api-in-docker-containers-windows",level:4},{value:"Mandatory (Docker)",id:"mandatory-docker",level:5},{value:"Additional requirements for running the API in a Kubernetes cluster",id:"additional-requirements-for-running-the-api-in-a-kubernetes-cluster",level:4},{value:"MacOS",id:"macos",level:3},{value:"Requirements for running the API locally (MacOS)",id:"requirements-for-running-the-api-locally-macos",level:4},{value:"Additional requirements for running the API in Docker containers (MacOS)",id:"additional-requirements-for-running-the-api-in-docker-containers-macos",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"running-the-api-locally",children:"Running the API Locally"}),"\n",(0,r.jsx)(n.h3,{id:"windows",children:"Windows"}),"\n",(0,r.jsx)(n.h4,{id:"requirements-for-running-the-api-locally-windows",children:"Requirements for running the API locally (Windows)"}),"\n",(0,r.jsx)(n.h5,{id:"mandatory-locally",children:"Mandatory (Locally)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://dotnet.microsoft.com/en-us/download/dotnet/8.0",children:".NET 8 SDK"})," and Runtime 8.0.* or higher (for .NET 8 projects)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://aka.ms/cosmosdb-emulator",children:"CosmosDB Emulator 2.4.5+"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"optional",children:"Optional"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://visualstudio.microsoft.com/vs/",children:"Visual Studio 2022"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"})," 1.35+ with the C# extension."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"additional-requirements-for-running-the-api-in-docker-containers-windows",children:"Additional requirements for running the API in Docker containers (Windows)"}),"\n",(0,r.jsx)(n.h5,{id:"mandatory-docker",children:"Mandatory (Docker)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://desktop.docker.com/win/stable/Docker%20Desktop%20Installer.exe",children:"Docker Desktop for Windows"}),": Version 2.1.0.1 (or higher).","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Enable:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Kubernetes 1.14+."}),"\n",(0,r.jsx)(n.li,{children:"Linux containers (not Windows containers)."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Docker Engine 19.03.1+ (included with Docker)."}),"\n",(0,r.jsx)(n.li,{children:"Windows Subsystem for Linux (WSL) for running Linux environment scripts (recommended v1, v2 is still in testing)."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"kubectl"})," v1.14+ (included with Docker).","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["You can also ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-windows",children:"download it separately"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"additional-requirements-for-running-the-api-in-a-kubernetes-cluster",children:"Additional requirements for running the API in a Kubernetes cluster"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"NGINX Ingress Controller"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Install it in your local cluster."}),"\n",(0,r.jsxs)(n.li,{children:["Follow the ",(0,r.jsx)(n.a,{href:"https://kubernetes.github.io/ingress-nginx/deploy/",children:"Bare Metal deployment guide"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"macos",children:"MacOS"}),"\n",(0,r.jsx)(n.h4,{id:"requirements-for-running-the-api-locally-macos",children:"Requirements for running the API locally (MacOS)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Homebrew"}),": A package manager for macOS."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Azure CLI"}),": Install it via ",(0,r.jsx)(n.code,{children:"brew install azure-cli"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://dotnet.microsoft.com/en-us/download/dotnet/8.0",children:".NET 8 SDK"}),": Install it via ",(0,r.jsx)(n.code,{children:"brew install --cask dotnet-sdk"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://aka.ms/cosmosdb-emulator",children:"CosmosDB Emulator"}),": Only available for Windows. If you use Azure, you can run CosmosDB in the cloud."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"additional-requirements-for-running-the-api-in-docker-containers-macos",children:"Additional requirements for running the API in Docker containers (MacOS)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://desktop.docker.com/mac/stable/Docker.dmg",children:"Docker Desktop for Mac"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"kubectl"}),": Run ",(0,r.jsx)(n.code,{children:"docker run --name kubectl bitnami/kubectl:latest"})," to install."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.admonition,{title:"Note",type:"note",children:(0,r.jsx)(n.p,{children:"The current version of Ensono Stacks uses .NET 8 (the latest Long Term Support version, recommended)."})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var r=i(6540);const t={},o=r.createContext(t);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);