"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[6752],{4463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(4848),o=n(8453);const s={id:"create_project_netcore",title:"Create REST API with CQRS project",hide_title:!0,sidebar_label:"Create REST API with CQRS project",hide_table_of_contents:!0,description:"Create .NET Core REST API application with CQRS from a template",keywords:[".net core","rest api","cqrs","example","template","azure","application insights","cosmos db","build","run","application","configure","docker","tests","github"]},a=void 0,i={id:"workloads/azure/backend/netcore/quickstart/web_api_cqrs/create_project_netcore",title:"Create REST API with CQRS project",description:"Create .NET Core REST API application with CQRS from a template",source:"@site/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/create_project_netcore.md",sourceDirName:"workloads/azure/backend/netcore/quickstart/web_api_cqrs",slug:"/workloads/azure/backend/netcore/quickstart/web_api_cqrs/create_project_netcore",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/create_project_netcore",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"create_project_netcore",title:"Create REST API with CQRS project",hide_title:!0,sidebar_label:"Create REST API with CQRS project",hide_table_of_contents:!0,description:"Create .NET Core REST API application with CQRS from a template",keywords:[".net core","rest api","cqrs","example","template","azure","application insights","cosmos db","build","run","application","configure","docker","tests","github"]},sidebar:"docs",previous:{title:"Build & Run REST API",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api/build_and_run_project_netcore"},next:{title:"Configure REST API with CQRS project",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/configure_project_netcore"}},l={},c=[{value:"Create a project",id:"create-a-project",level:2},{value:"Install the package",id:"install-the-package",level:3},{value:"stacks-cqrs-app",id:"stacks-cqrs-app",level:3},{value:"stacks-az-func-cosmosdb-worker",id:"stacks-az-func-cosmosdb-worker",level:3},{value:"stacks-az-func-asb-listener",id:"stacks-az-func-asb-listener",level:3},{value:"stacks-asb-worker",id:"stacks-asb-worker",level:3},{value:"Uninstalling the templates",id:"uninstalling-the-templates",level:3},{value:"Create a new project",id:"create-a-new-project",level:3},{value:"Setting the database option",id:"setting-the-database-option",level:3},{value:"Setting event publishing options",id:"setting-event-publishing-options",level:3},{value:"Add CQRS to an existing project",id:"add-cqrs-to-an-existing-project",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"create-a-project",children:"Create a project"}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Installing/uninstalling the package"}),(0,r.jsx)(t.h3,{id:"install-the-package",children:"Install the package"}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:[".NET 3.1 templates have been deprecated. If you want to use the 3.1 templates the latest version is ",(0,r.jsx)(t.a,{href:"https://www.nuget.org/packages/Amido.Stacks.CQRS.Templates/3.0.130",children:"3.0.130"})]})}),(0,r.jsxs)(t.p,{children:["Access Amido.Stacks.CQRS.Template package page in Nuget ",(0,r.jsx)(t.a,{href:"https://www.nuget.org/packages/Amido.Stacks.CQRS.Templates/",children:"here"}),"\nCopy and execute the command displayed in the page (if you want to get the latest version).\nFor example"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Run the command to install the package"',children:"dotnet new --install Amido.Stacks.CQRS.Templates\n"})}),(0,r.jsx)(t.p,{children:"Once installed, you obtain 6 templates that can be used"}),(0,r.jsx)(t.h3,{id:"stacks-cqrs-app",children:"stacks-cqrs-app"}),(0,r.jsx)("p",{children:"The full template containing API, functions, background worker and build infrastructure"}),(0,r.jsx)(t.p,{children:"Navigate to the folder where you wish to create a new project on."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Run the command to create the project"',children:"dotnet new stacks-cqrs-app -n Company.Project -do YourDomain -e MessagingProvider -db DatabaseOption -cp CloudProvider\n"})}),(0,r.jsxs)(t.p,{children:["The above command will create a folder and a repository called ",(0,r.jsx)(t.code,{children:"Company.Project"}),"."]}),(0,r.jsx)(t.h3,{id:"stacks-az-func-cosmosdb-worker",children:"stacks-az-func-cosmosdb-worker"}),(0,r.jsx)("p",{children:"A template for a Azure Function containing a CosmosDb change feed trigger. Upon a CosmosDb event, the worker reads it and publishes a message to Service Bus."}),(0,r.jsx)(t.p,{children:"Navigate to the folder where you wish to create a new project on."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Run the command to create the function"',children:"dotnet new stacks-az-func-cosmosdb-worker -n Company.Project\n"})}),(0,r.jsx)(t.h3,{id:"stacks-az-func-asb-listener",children:"stacks-az-func-asb-listener"}),(0,r.jsx)("p",{children:"A template containing an Azure Function project with a single function that has a Service Bus subscription trigger. The function receives the message and deserializes it."}),(0,r.jsx)(t.p,{children:"Navigate to the folder where you wish to create a new project on."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Run the command to create the function"',children:"dotnet new stacks-az-func-asb-listener -n Company.Project -do Menu\n"})}),(0,r.jsx)(t.h3,{id:"stacks-asb-worker",children:"stacks-asb-worker"}),(0,r.jsx)("p",{children:"A template contains a background worker application that reads and handles messages from a ServiceBus subscription."}),(0,r.jsx)(t.p,{children:"Navigate to the folder where you wish to create a new project on."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Run the command to create the function"',children:"dotnet new stacks-asb-worker -n Company.Project -do Menu\n"})}),(0,r.jsx)(t.admonition,{title:"Template parameter details (some templates may offer only a subset of the arguments shown)",type:"note",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"-n|--name"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Sets the project name"}),"\n",(0,r.jsx)(t.li,{children:"Omitting it will result in the project name being the same as the folder where the command has been ran from"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"-do|--domain"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Sets the name of the aggregate root object. It is also the name of the collection within CosmosDB instance."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"-db|--database"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Configures which database provider to be used"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"-e|--eventPublisher"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Configures the messaging service. Available services are:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"ServiceBus"}),"\n",(0,r.jsx)(t.li,{children:"EventHub"}),"\n",(0,r.jsx)(t.li,{children:"AwsSns"}),"\n",(0,r.jsx)(t.li,{children:"None"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsxs)(t.strong,{children:["-e",":fw","|--enableFunctionWorker"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Configures the messaging service"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsxs)(t.strong,{children:["-e",":fl","|--enableFunctionListener"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Configures the messaging service"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsxs)(t.strong,{children:["-e",":bw","|--enableBackgroundWorker"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Configures the messaging service"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"-o|--output"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Sets the path to where the project is added"}),"\n",(0,r.jsx)(t.li,{children:"Omitting the parameter will result in the creation of a new folder"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"-cp|--cloudProvider"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Configures which cloud provider to be used"}),"\n"]}),"\n"]}),"\n"]})}),(0,r.jsx)(t.p,{children:"Once installed you can either, create a new project or add CQRS to an existing project."}),(0,r.jsx)(t.h3,{id:"uninstalling-the-templates",children:"Uninstalling the templates"}),(0,r.jsx)(t.p,{children:"If you want to remove the templates from your system you'll have to uninstall the Nuget package."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="To uninstall package execute the following command"',children:"dotnet new --uninstall Amido.Stacks.CQRS.Templates\n"})})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Creating a new project"}),(0,r.jsx)(t.h3,{id:"create-a-new-project",children:"Create a new project"}),(0,r.jsx)(t.p,{children:"Navigate to the folder where you wish to create a new project in. Then run the following command."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Run the command to create the project"',children:"dotnet new stacks-cqrs-webapi -n Company.Project -do YourDomain -cp AzureCloud\n"})}),(0,r.jsxs)(t.p,{children:["The above command will create a folder and a repository called ",(0,r.jsx)(t.code,{children:"Company.Project"})," with DevOps build pipelines ready for Azure DevOps."]}),(0,r.jsx)(t.h3,{id:"setting-the-database-option",children:"Setting the database option"}),(0,r.jsx)(t.p,{children:"To create a project with CosmosDb as the database you can use the following command"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Run the command to create the project with database"',children:"dotnet new stacks-cqrs-webapi -n Company.Project -do YourDomain -db CosmosDb\n"})}),(0,r.jsx)(t.admonition,{title:"Template parameter details",type:"note",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"-n|--name"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Sets the project name"}),"\n",(0,r.jsx)(t.li,{children:"Omitting it will result in the project name being the same as the folder where the command has been ran from"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"-do|--domain"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Sets the name of the aggregate root object. It is also the name of the collection within CosmosDB instance."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"-db|--database"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Configures which database provider to be used."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"-o|--output"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Sets the path to where the project is added"}),"\n",(0,r.jsx)(t.li,{children:"Omitting the parameter will result in the creation of a new folder"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"-cp|--cloudProvider"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Configures which cloud provider to be used"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"-cicd|--cicdProvider"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Configures which cicd provider templates to be used"}),"\n"]}),"\n"]}),"\n"]})}),(0,r.jsx)(t.h3,{id:"setting-event-publishing-options",children:"Setting event publishing options"})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Adding CQRS to an existing project"}),(0,r.jsx)(t.h3,{id:"add-cqrs-to-an-existing-project",children:"Add CQRS to an existing project"}),(0,r.jsx)(t.p,{children:"Let's say you have a WebAPI solution and you want to add CQRS functionality to it."}),(0,r.jsxs)(t.p,{children:["In order for the template to generate correctly you'll need to execute it in the folder where your ",(0,r.jsx)(t.code,{children:".sln"})," file is located. Also for the purposes of this example we're assuming that in your solution the projects and namespaces have ",(0,r.jsx)(t.code,{children:"Foo.Bar"})," as a prefix."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:'% cd src\n\n% dotnet new stacks-add-cqrs -n Foo.Bar.CQRS -do Menu\nThe template "Ensono Stacks Web Api CQRS - Add to existing solution" was created successfully.\n'})}),(0,r.jsxs)(t.p,{children:["If all is well, in the output you'll see that projects are being added as references to your ",(0,r.jsx)(t.code,{children:".sln"})," file. The list of projects that you'll get by installing this template are as follows (please note the prefix provided with the ",(0,r.jsx)(t.code,{children:"-n"})," flag from above):"]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Foo.Bar.CQRS.Infrastructure"}),"\n",(0,r.jsx)(t.li,{children:"Foo.Bar.CQRS.API"}),"\n",(0,r.jsx)(t.li,{children:"Foo.Bar.CQRS.API.Models"}),"\n",(0,r.jsx)(t.li,{children:"Foo.Bar.CQRS.Application.CommandHandlers"}),"\n",(0,r.jsx)(t.li,{children:"Foo.Bar.CQRS.Application.Integration"}),"\n",(0,r.jsx)(t.li,{children:"Foo.Bar.CQRS.Application.QueryHandlers"}),"\n",(0,r.jsx)(t.li,{children:"Foo.Bar.CQRS.Domain"}),"\n",(0,r.jsx)(t.li,{children:"Foo.Bar.CQRS.Common"}),"\n",(0,r.jsx)(t.li,{children:"Foo.Bar.CQRS.CQRS"}),"\n",(0,r.jsx)(t.li,{children:"Foo.Bar.CQRS.Common.UnitTests"}),"\n",(0,r.jsx)(t.li,{children:"Foo.Bar.CQRS.CQRS.UnitTests"}),"\n",(0,r.jsx)(t.li,{children:"Foo.Bar.CQRS.Domain.UnitTests"}),"\n",(0,r.jsx)(t.li,{children:"Foo.Bar.CQRS.Infrastructure.IntegrationTests"}),"\n"]}),(0,r.jsxs)(t.p,{children:["As you see you get a new ",(0,r.jsx)(t.code,{children:"Foo.Bar.CQRS.API"})," folder which has controllers wired up with the CQRS command handlers. If you had provided ",(0,r.jsx)(t.code,{children:"-n Foo.Bar"})," as your name in the command above you would get an error stating the following:"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"Creating this template will make changes to existing files:\n  Overwrite   ./Foo.Bar.API.Models/Requests/CreateCategoryRequest.cs\n  Overwrite   ./Foo.Bar.API.Models/Requests/CreateItemRequest.cs\n  Overwrite   ./Foo.Bar.API.Models/Requests/CreateCarRequest.cs\n  Overwrite   ./Foo.Bar.API.Models/Requests/UpdateCategoryRequest.cs\n  Overwrite   ./Foo.Bar.API.Models/Requests/UpdateItemRequest.cs\n  Overwrite   ./Foo.Bar.API.Models/Requests/UpdateCarRequest.cs\n  Overwrite   ./Foo.Bar.API.Models/Responses/Category.cs\n  Overwrite   ./Foo.Bar.API.Models/Responses/Item.cs\n  Overwrite   ./Foo.Bar.API.Models/Responses/Car.cs\n  Overwrite   ./Foo.Bar.API.Models/Responses/ResourceCreatedResponse.cs\n  Overwrite   ./Foo.Bar.API.Models/Responses/SearchCarResponse.cs\n  Overwrite   ./Foo.Bar.API.Models/Responses/SearchCarResponseItem.cs\n  Overwrite   ./Foo.Bar.API.Models/Foo.Bar.API.Models.csproj\n  Overwrite   ./Foo.Bar.API/appsettings.json\n  Overwrite   ./Foo.Bar.API/Authentication/ConfigurationExtensions.cs\n  Overwrite   ./Foo.Bar.API/Authentication/JwtBearerAuthenticationConfiguration.cs\n  Overwrite   ./Foo.Bar.API/Authentication/JwtBearerAuthenticationConfigurationExtensions.cs\n  Overwrite   ./Foo.Bar.API/Authentication/JwtBearerAuthenticationOperationFilter.cs\n  Overwrite   ./Foo.Bar.API/Authentication/JwtBearerAuthenticationStartupExtensions.cs\n  Overwrite   ./Foo.Bar.API/Authentication/OpenApiJwtBearerAuthenticationConfiguration.cs\n  Overwrite   ./Foo.Bar.API/Authentication/OpenApiSecurityDefinitions.cs\n  Overwrite   ./Foo.Bar.API/Authentication/StubJwtBearerAuthenticationHttpMessageHandler.cs\n  Overwrite   ./Foo.Bar.API/Authentication/SwaggerGenOptionsExtensions.cs\n  Overwrite   ./Foo.Bar.API/Authorization/ConfigurableAuthorizationPolicyProvider.cs\n  Overwrite   ./Foo.Bar.API/Constants.cs\n  Overwrite   ./Foo.Bar.API/Controllers/ApiControllerBase.cs\n  Overwrite   ./Foo.Bar.API/Controllers/Category/AddCarCategoryController.cs\n  Overwrite   ./Foo.Bar.API/Controllers/Category/DeleteCategoryController.cs\n  Overwrite   ./Foo.Bar.API/Controllers/Category/UpdateCarCategoryController.cs\n  Overwrite   ./Foo.Bar.API/Controllers/Item/AddCarItemController.cs\n  Overwrite   ./Foo.Bar.API/Controllers/Item/DeleteCarItemController.cs\n  Overwrite   ./Foo.Bar.API/Controllers/Item/UpdateCarItemController.cs\n  Overwrite   ./Foo.Bar.API/Controllers/Car/CreateCarController.cs\n  Overwrite   ./Foo.Bar.API/Controllers/Car/DeleteCarController.cs\n  Overwrite   ./Foo.Bar.API/Controllers/Car/GetCarByIdController.cs\n  Overwrite   ./Foo.Bar.API/Controllers/Car/GetCarByIdV2Controller.cs\n  Overwrite   ./Foo.Bar.API/Controllers/Car/SearchCarController.cs\n  Overwrite   ./Foo.Bar.API/Controllers/Car/UpdateCarController.cs\n  Overwrite   ./Foo.Bar.API/Program.cs\n  Overwrite   ./Foo.Bar.API/Startup.cs\n  Overwrite   ./Foo.Bar.API/Foo.Bar.API.csproj\n\nRerun the command and pass --force to accept and create.\n"})}),(0,r.jsxs)(t.p,{children:["This will happen if the newly generated template project names collide with your existing structure. It's up to you to decide if you want to use the ",(0,r.jsx)(t.code,{children:"--force"})," flag and overwrite all collisions with the projects from the template. By doing so you might lose your custom logic in some places and you'll have to transfer things manually to the new projects by examining the diffs in your source control."]}),(0,r.jsx)(t.p,{children:"If you don't want to do that you can generate the new projects with a different namespace (what was shown above) and then copy/remove the things you don't need."})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(6540);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);