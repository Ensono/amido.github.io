"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[2749],{9741:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>x,metadata:()=>c,toc:()=>a});var t=r(4848),n=r(8453);const x={id:"project_structure_netcore_function_worker",title:"Functions And Worker Solution Structure",sidebar_label:"Functions And Worker Solution Structure",hide_title:!0,hide_table_of_contents:!0,description:".NET Functions and Worker - Solution Structure",keywords:[".net","example","template","repository","structure"]},o=void 0,c={id:"workloads/azure/backend/netcore/architecture/project_structure/project_structure_netcore_function_worker",title:"Functions And Worker Solution Structure",description:".NET Functions and Worker - Solution Structure",source:"@site/docs/workloads/azure/backend/netcore/architecture/project_structure/functions_and_worker_netcore.md",sourceDirName:"workloads/azure/backend/netcore/architecture/project_structure",slug:"/workloads/azure/backend/netcore/architecture/project_structure/project_structure_netcore_function_worker",permalink:"/docs/workloads/azure/backend/netcore/architecture/project_structure/project_structure_netcore_function_worker",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"project_structure_netcore_function_worker",title:"Functions And Worker Solution Structure",sidebar_label:"Functions And Worker Solution Structure",hide_title:!0,hide_table_of_contents:!0,description:".NET Functions and Worker - Solution Structure",keywords:[".net","example","template","repository","structure"]},sidebar:"docs",previous:{title:"CQRS Rest Api Solution Structure",permalink:"/docs/workloads/azure/backend/netcore/architecture/project_structure/project_structure_netcore_cqrs"},next:{title:"Data Storage - CosmosDB",permalink:"/docs/workloads/azure/backend/netcore/architecture/data_storage_cosmosdb_netcore"}},i={},a=[{value:"Solution Structure",id:"solution-structure",level:2},{value:"Functions and Worker Services",id:"functions-and-worker-services",level:3},{value:"Background Worker",id:"background-worker",level:4},{value:"xxENSONOxx.xxSTACKSxx.Shared.Messaging.Azure.ServiceBus",id:"xxensonoxxxxstacksxxsharedmessagingazureservicebus",level:4},{value:"xxENSONOxx.xxSTACKSxx.Shared.Messaging.Azure.ServiceBus.Tests",id:"xxensonoxxxxstacksxxsharedmessagingazureservicebustests",level:4},{value:"xxENSONOxx.xxSTACKSxx.BackgroundWorker",id:"xxensonoxxxxstacksxxbackgroundworker",level:4},{value:"xxENSONOxx.xxSTACKSxx.BackgroundWorker.UnitTests",id:"xxensonoxxxxstacksxxbackgroundworkerunittests",level:4},{value:"Listeners",id:"listeners",level:4},{value:"xxENSONOxx.xxSTACKSxx.Application.CQRS.Events",id:"xxensonoxxxxstacksxxapplicationcqrsevents",level:4},{value:"xxENSONOxx.xxSTACKSxx.Listener",id:"xxensonoxxxxstacksxxlistener",level:4},{value:"xxENSONOxx.xxSTACKSxx.Listener.UnitTests",id:"xxensonoxxxxstacksxxlistenerunittests",level:4}];function u(e){const s={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"solution-structure",children:"Solution Structure"}),"\n",(0,t.jsx)(s.h3,{id:"functions-and-worker-services",children:"Functions and Worker Services"}),"\n",(0,t.jsx)(s.h4,{id:"background-worker",children:"Background Worker"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-text",children:"Solution xxENSONOxx.xxSTACKSxx.BackgroundWorker\n\u251c\u2500\u2500 Shared\n\u2502  \u251c\u2500\u2500 xxENSONOxx.xxSTACKSxx.Shared.Messaging.Azure.ServiceBus\n\u2502  \u2514\u2500\u2500 xxENSONOxx.xxSTACKSxx.Shared.Messaging.Azure.ServiceBus.Tests\n\u251c\u2500\u2500 xxEnsono.xxStacksxx.BackgroundWorker\n\u2514\u2500\u2500 xxEnsono.xxStacksxx.Backgroundworker.UnitTests\n"})}),"\n",(0,t.jsx)(s.h4,{id:"xxensonoxxxxstacksxxsharedmessagingazureservicebus",children:"xxENSONOxx.xxSTACKSxx.Shared.Messaging.Azure.ServiceBus"}),"\n",(0,t.jsx)(s.p,{children:"Interacts with Azure Service Bus for messaging. Manages queues, topics, and messaging tasks."}),"\n",(0,t.jsx)(s.h4,{id:"xxensonoxxxxstacksxxsharedmessagingazureservicebustests",children:"xxENSONOxx.xxSTACKSxx.Shared.Messaging.Azure.ServiceBus.Tests"}),"\n",(0,t.jsx)(s.p,{children:"Contains unit tests for the messaging classes. Tests message processing, queue management, and other messaging tasks."}),"\n",(0,t.jsx)(s.h4,{id:"xxensonoxxxxstacksxxbackgroundworker",children:"xxENSONOxx.xxSTACKSxx.BackgroundWorker"}),"\n",(0,t.jsx)(s.p,{children:"The BackgroundWorker project contains the worker service that processes messages from the Azure Service Bus. The worker service is responsible for processing messages from the Service Bus and executing the necessary business logic. The worker service is self-hosted and managed by the Program.cs class."}),"\n",(0,t.jsx)(s.h4,{id:"xxensonoxxxxstacksxxbackgroundworkerunittests",children:"xxENSONOxx.xxSTACKSxx.BackgroundWorker.UnitTests"}),"\n",(0,t.jsx)(s.p,{children:"The BackgroundWorker.UnitTests project contains unit tests for the BackgroundWorker project. These tests cover the worker service's functionality, including message processing and business logic execution."}),"\n",(0,t.jsx)(s.h4,{id:"listeners",children:"Listeners"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-text",children:"Solution xxENSONOxx.xxSTACKSxx.Listener\n\u251c\u2500\u2500 xxEnsono.xxStacksxx.Application.CQRS.Events\n\u251c\u2500\u2500 xxEnsono.xxStacksxx.Listener\n\u2514\u2500\u2500 xxEnsono.xxStacksxx.Listener.UnitTests\n"})}),"\n",(0,t.jsx)(s.h4,{id:"xxensonoxxxxstacksxxapplicationcqrsevents",children:"xxENSONOxx.xxSTACKSxx.Application.CQRS.Events"}),"\n",(0,t.jsx)(s.p,{children:"The Application.CQRS.Events project contains the events used by the Azure Function to process messages from the Azure Service Bus. The events are defined as classes with the necessary properties to represent the message data."}),"\n",(0,t.jsx)(s.h4,{id:"xxensonoxxxxstacksxxlistener",children:"xxENSONOxx.xxSTACKSxx.Listener"}),"\n",(0,t.jsx)(s.p,{children:"The Listener project contains the Azure Function that listens for messages from the Azure Service Bus. The Azure Function is responsible for processing messages from the Service Bus or Event Hub and executing the necessary business logic. The Azure Function is self-hosted and managed by the Program.cs class."}),"\n",(0,t.jsx)(s.h4,{id:"xxensonoxxxxstacksxxlistenerunittests",children:"xxENSONOxx.xxSTACKSxx.Listener.UnitTests"}),"\n",(0,t.jsx)(s.p,{children:"The Listener.UnitTests project contains unit tests for the Listener project. These tests cover the Azure Function's functionality, including message processing and business logic execution."})]})}function d(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>c});var t=r(6540);const n={},x=t.createContext(n);function o(e){const s=t.useContext(x);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(x.Provider,{value:s},e.children)}}}]);