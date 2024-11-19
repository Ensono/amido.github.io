"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[194],{9454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var s=n(4848),o=n(8453);const r={id:"project_structure_netcore_simple_api",title:"Simple Api Solution Structure",sidebar_label:"Simple Api Solution Structure",hide_title:!0,hide_table_of_contents:!0,description:".NET Simple REST API application - Solution Structure",keywords:[".net","rest api","example","template","repository","structure"]},i=void 0,c={id:"workloads/azure/backend/netcore/architecture/project_structure/project_structure_netcore_simple_api",title:"Simple Api Solution Structure",description:".NET Simple REST API application - Solution Structure",source:"@site/docs/workloads/azure/backend/netcore/architecture/project_structure/simple_api_netcore.md",sourceDirName:"workloads/azure/backend/netcore/architecture/project_structure",slug:"/workloads/azure/backend/netcore/architecture/project_structure/project_structure_netcore_simple_api",permalink:"/docs/workloads/azure/backend/netcore/architecture/project_structure/project_structure_netcore_simple_api",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"project_structure_netcore_simple_api",title:"Simple Api Solution Structure",sidebar_label:"Simple Api Solution Structure",hide_title:!0,hide_table_of_contents:!0,description:".NET Simple REST API application - Solution Structure",keywords:[".net","rest api","example","template","repository","structure"]},sidebar:"docs",previous:{title:"Repository Structure",permalink:"/docs/workloads/azure/backend/netcore/architecture/repository_overview_netcore"},next:{title:"CQRS Rest Api Solution Structure",permalink:"/docs/workloads/azure/backend/netcore/architecture/project_structure/project_structure_netcore_cqrs"}},a={},p=[{value:"Solution Structure",id:"solution-structure",level:2},{value:"Simple Web API",id:"simple-web-api",level:3},{value:"xxENSONOxx.xxSTACKSxx.API",id:"xxensonoxxxxstacksxxapi",level:4},{value:"xxENSONOxx.xxSTACKSxx.Models",id:"xxensonoxxxxstacksxxmodels",level:4},{value:"Company.Project.API.ComponentTests",id:"companyprojectapicomponenttests",level:4},{value:"Company.Project.API.UnitTests",id:"companyprojectapiunittests",level:4},{value:"xxENSONOxx.xxSTACKSxx.AppHost",id:"xxensonoxxxxstacksxxapphost",level:4}];function l(e){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"solution-structure",children:"Solution Structure"}),"\n",(0,s.jsx)(t.h3,{id:"simple-web-api",children:"Simple Web API"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"Solution xxENSONOxx.xxSTACKSxx.API\n\u251c\u2500\u2500 API\n\u2502   \u251c\u2500\u2500 xxENSONOxx.xxSTACKSxx.API\n\u2502   \u251c\u2500\u2500 xxENSONOxx.xxSTACKSxx.API.Models\n\u251c\u2500\u2500 TESTS\n\u2502   \u251c\u2500\u2500 xxENSONOxx.xxSTACKSxx.API.ComponentTests\n\u2502   \u251c\u2500\u2500 xxENSONOxx.xxSTACKSxx.API.UnitTests\n\u2514\u2500\u2500 xxENSONOxx.xxSTACKSxx.AppHost\n"})}),"\n",(0,s.jsx)(t.h4,{id:"xxensonoxxxxstacksxxapi",children:"xxENSONOxx.xxSTACKSxx.API"}),"\n",(0,s.jsx)(t.p,{children:"The API project contains controllers and OpenAPI documentation. It exposes the application via REST/HTTP endpoints and validates requests using DataAnnotations or FluentValidation (not included). The API is self-hosted, managed by the Program.cs class."}),"\n",(0,s.jsx)(t.h4,{id:"xxensonoxxxxstacksxxmodels",children:"xxENSONOxx.xxSTACKSxx.Models"}),"\n",(0,s.jsx)(t.p,{children:"The models have been separated from the API project for reusability. They use DataAnnotations for validation, avoiding dependencies on third-party libraries like FluentValidation unless necessary."}),"\n",(0,s.jsx)(t.p,{children:"This separation helps prevent code duplication in API.Models and TestModels, making it easier to package models as NuGet packages for QA Functional Tests."}),"\n",(0,s.jsx)(t.p,{children:"Additionally, it simplifies creating a Client SDK to communicate with the API without rewriting models whenever the API changes."}),"\n",(0,s.jsx)(t.h4,{id:"companyprojectapicomponenttests",children:"Company.Project.API.ComponentTests"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"ComponentTests"})," cover the entire service from the API endpoints to the last service layer before external dependencies. They mock resources like repositories and gateways to simulate various scenarios."]}),"\n",(0,s.jsx)(t.p,{children:"APIs should also be covered by Contract Tests. Component Tests might seem redundant but can skip API coverage and focus on the application layer to the service boundary. This approach requires an extra test to ensure API and Application integration."}),"\n",(0,s.jsx)(t.p,{children:"Component tests are similar to functional tests but with a key difference. Functional Tests check if an input produces the expected output without caring about the process. Component Tests ensure the input returns the expected output and that certain conditions are met, such as event raising, external service calls, and correct data formatting."}),"\n",(0,s.jsx)(t.h4,{id:"companyprojectapiunittests",children:"Company.Project.API.UnitTests"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"UnitTests"})," cover the API project, including controllers, services, and repositories. They mock external dependencies like databases and external services to ensure the API behaves as expected."]}),"\n",(0,s.jsx)(t.h4,{id:"xxensonoxxxxstacksxxapphost",children:"xxENSONOxx.xxSTACKSxx.AppHost"}),"\n",(0,s.jsx)(t.p,{children:"The AppHost project is responsible for hosting the API and uses Aspire. Aspire is a lightweight, high-performance framework for building and hosting .NET applications. It provides essential features like dependency injection, configuration management, and middleware support."}),"\n",(0,s.jsx)(t.p,{children:"The AppHost project contains the Program.cs class, which configures the API and starts the host. The AppHost project should be kept as simple as possible to avoid adding unnecessary dependencies or logic."})]})}function x(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var s=n(6540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);