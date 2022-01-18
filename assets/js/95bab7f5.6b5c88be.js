"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[9950,8689],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3697:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var r=a(7294),n=a(2004),o="playerSection_1ZCf",i="playerWrapper_166A",l="player_1MjL";var s=function(e){var t=e.url;return r.createElement("div",{className:o},r.createElement("div",{className:i},r.createElement(n.Z,{className:l,url:t,controls:!0,width:"100%",height:"100%",config:{}})))}},6219:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=a(3697),l=["components"],s={id:"create_project_netcore",title:"Create REST API with CQRS project",hide_title:!0,sidebar_label:"Create REST API with CQRS project",hide_table_of_contents:!0,description:"Create .NET Core REST API application with CQRS from a template",keywords:[".net core","rest api","cqrs","example","template","azure","application insights","cosmos db","build","run","application","configure","docker","tests","github"]},c=void 0,p={unversionedId:"workloads/azure/backend/netcore/quickstart/web_api_cqrs/create_project_netcore",id:"workloads/azure/backend/netcore/quickstart/web_api_cqrs/create_project_netcore",isDocsHomePage:!1,title:"Create REST API with CQRS project",description:"Create .NET Core REST API application with CQRS from a template",source:"@site/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/create_project_netcore.md",sourceDirName:"workloads/azure/backend/netcore/quickstart/web_api_cqrs",slug:"/workloads/azure/backend/netcore/quickstart/web_api_cqrs/create_project_netcore",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/create_project_netcore",tags:[],version:"current",frontMatter:{id:"create_project_netcore",title:"Create REST API with CQRS project",hide_title:!0,sidebar_label:"Create REST API with CQRS project",hide_table_of_contents:!0,description:"Create .NET Core REST API application with CQRS from a template",keywords:[".net core","rest api","cqrs","example","template","azure","application insights","cosmos db","build","run","application","configure","docker","tests","github"]},sidebar:"docs",previous:{title:"Build & Run REST API",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api/build_and_run_project_netcore"},next:{title:"Configure REST API with CQRS project",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/configure_project_netcore"}},u=[{value:"Create a project",id:"create-a-project",children:[{value:"Install the package",id:"install-the-package",children:[],level:3},{value:"Uninstalling the templates",id:"uninstalling-the-templates",children:[],level:3},{value:"Create a new project",id:"create-a-new-project",children:[],level:3},{value:"Setting the database option",id:"setting-the-database-option",children:[],level:3},{value:"Add CQRS to an existing project",id:"add-cqrs-to-an-existing-project",children:[],level:3}],level:2}],d={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"create-a-project"},"Create a project"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Installing/uninstalling the package"),(0,o.kt)("h3",{id:"install-the-package"},"Install the package"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},".NET 3.1 templates have been deprecated. If you want to use the 3.1 templates the latest version is ",(0,o.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Amido.Stacks.CQRS.Templates/3.0.130"},"3.0.130")))),(0,o.kt)("p",null,"Access Amido.Stacks.CQRS.Template package page in Nuget ",(0,o.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Amido.Stacks.CQRS.Templates/"},"here"),". Copy and execute the command displayed in the page (if you want to get the latest version). For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run command to install the package"',title:'"Run',command:!0,to:!0,install:!0,the:!0,'package"':!0},"    dotnet new --install Amido.Stacks.CQRS.Templates\n")),(0,o.kt)(i.default,{url:"https://vimeo.com/640289104",mdxType:"ResponsivePlayer"}),(0,o.kt)("p",null,"Once installed you can either, create a new project or add CQRS to an existing project."),(0,o.kt)("h3",{id:"uninstalling-the-templates"},"Uninstalling the templates"),(0,o.kt)("p",null,"If you want to remove the templates from your system you'll have to uninstall the Nuget package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="To uninstall package execute the following command"',title:'"To',uninstall:!0,package:!0,execute:!0,the:!0,following:!0,'command"':!0},"dotnet new --uninstall Amido.Stacks.CQRS.Templates\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Creating a new project"),(0,o.kt)("h3",{id:"create-a-new-project"},"Create a new project"),(0,o.kt)("p",null,"Navigate to the folder where you wish to create a new project in. Then run the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run the command to create the project"',title:'"Run',the:!0,command:!0,to:!0,create:!0,'project"':!0},"dotnet new stacks-cqrs-webapi -n Company.Project -do YourDomain\n")),(0,o.kt)("p",null,"The above command will create a folder and a repository called ",(0,o.kt)("inlineCode",{parentName:"p"},"Company.Project"),"."),(0,o.kt)("h3",{id:"setting-the-database-option"},"Setting the database option"),(0,o.kt)("p",null,"To create a project with CosmosDb as the database you can use the following command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run the command to create the project with database"',title:'"Run',the:!0,command:!0,to:!0,create:!0,project:!0,with:!0,'database"':!0},"dotnet new stacks-cqrs-webapi -n Company.Project -do YourDomain -db CosmosDb\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Template parameter details")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"-n|--name"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Sets the project name"),(0,o.kt)("li",{parentName:"ul"},"Omitting it will result in the project name being the same as the folder where the command has been ran from"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"-do|--domain"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Sets the name of the aggregate root object. It is also the name of the collection within CosmosDB instance."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"-db|--database"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Configures which database provider to be used."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"-o|--output"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Sets the path to where the project is added"),(0,o.kt)("li",{parentName:"ul"},"Omitting the parameter will result in the creation of a new folder")))))),(0,o.kt)(i.default,{url:"https://vimeo.com/640289034",mdxType:"ResponsivePlayer"})),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Adding CQRS to an existing project"),(0,o.kt)("h3",{id:"add-cqrs-to-an-existing-project"},"Add CQRS to an existing project"),(0,o.kt)("p",null,"Let's say you have a WebAPI solution and you want to add CQRS functionality to it."),(0,o.kt)("p",null,"In order for the template to generate correctly you'll need to execute it in the folder where your ",(0,o.kt)("inlineCode",{parentName:"p"},".sln")," file is located. Also for the purposes of this example we're assuming that in your solution the projects and namespaces have ",(0,o.kt)("inlineCode",{parentName:"p"},"Foo.Bar")," as a prefix."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'% cd src\n\n% dotnet new stacks-add-cqrs -n Foo.Bar.CQRS -do Menu\nThe template "Amido Stacks Web Api CQRS - Add to existing solution" was created successfully.\n')),(0,o.kt)("p",null,"If all is well, in the output you'll see that projects are being added as references to your ",(0,o.kt)("inlineCode",{parentName:"p"},".sln")," file. The list of projects that you'll get by installing this template are as follows (please note the prefix provided with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-n")," flag from above):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Foo.Bar.CQRS.Infrastructure"),(0,o.kt)("li",{parentName:"ul"},"Foo.Bar.CQRS.API"),(0,o.kt)("li",{parentName:"ul"},"Foo.Bar.CQRS.API.Models"),(0,o.kt)("li",{parentName:"ul"},"Foo.Bar.CQRS.Application.CommandHandlers"),(0,o.kt)("li",{parentName:"ul"},"Foo.Bar.CQRS.Application.Integration"),(0,o.kt)("li",{parentName:"ul"},"Foo.Bar.CQRS.Application.QueryHandlers"),(0,o.kt)("li",{parentName:"ul"},"Foo.Bar.CQRS.Domain"),(0,o.kt)("li",{parentName:"ul"},"Foo.Bar.CQRS.Common"),(0,o.kt)("li",{parentName:"ul"},"Foo.Bar.CQRS.CQRS"),(0,o.kt)("li",{parentName:"ul"},"Foo.Bar.CQRS.Common.UnitTests"),(0,o.kt)("li",{parentName:"ul"},"Foo.Bar.CQRS.CQRS.UnitTests"),(0,o.kt)("li",{parentName:"ul"},"Foo.Bar.CQRS.Domain.UnitTests"),(0,o.kt)("li",{parentName:"ul"},"Foo.Bar.CQRS.Infrastructure.IntegrationTests")),(0,o.kt)("p",null,"As you see you get a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Foo.Bar.CQRS.API")," folder which has controllers wired up with the CQRS command handlers. If you had provided ",(0,o.kt)("inlineCode",{parentName:"p"},"-n Foo.Bar")," as your name in the command above you would get an error stating the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Creating this template will make changes to existing files:\n  Overwrite   ./Foo.Bar.API.Models/Requests/CreateCategoryRequest.cs\n  Overwrite   ./Foo.Bar.API.Models/Requests/CreateItemRequest.cs\n  Overwrite   ./Foo.Bar.API.Models/Requests/CreateCarRequest.cs\n  Overwrite   ./Foo.Bar.API.Models/Requests/UpdateCategoryRequest.cs\n  Overwrite   ./Foo.Bar.API.Models/Requests/UpdateItemRequest.cs\n  Overwrite   ./Foo.Bar.API.Models/Requests/UpdateCarRequest.cs\n  Overwrite   ./Foo.Bar.API.Models/Responses/Category.cs\n  Overwrite   ./Foo.Bar.API.Models/Responses/Item.cs\n  Overwrite   ./Foo.Bar.API.Models/Responses/Car.cs\n  Overwrite   ./Foo.Bar.API.Models/Responses/ResourceCreatedResponse.cs\n  Overwrite   ./Foo.Bar.API.Models/Responses/SearchCarResponse.cs\n  Overwrite   ./Foo.Bar.API.Models/Responses/SearchCarResponseItem.cs\n  Overwrite   ./Foo.Bar.API.Models/Foo.Bar.API.Models.csproj\n  Overwrite   ./Foo.Bar.API/appsettings.json\n  Overwrite   ./Foo.Bar.API/Authentication/ConfigurationExtensions.cs\n  Overwrite   ./Foo.Bar.API/Authentication/JwtBearerAuthenticationConfiguration.cs\n  Overwrite   ./Foo.Bar.API/Authentication/JwtBearerAuthenticationConfigurationExtensions.cs\n  Overwrite   ./Foo.Bar.API/Authentication/JwtBearerAuthenticationOperationFilter.cs\n  Overwrite   ./Foo.Bar.API/Authentication/JwtBearerAuthenticationStartupExtensions.cs\n  Overwrite   ./Foo.Bar.API/Authentication/OpenApiJwtBearerAuthenticationConfiguration.cs\n  Overwrite   ./Foo.Bar.API/Authentication/OpenApiSecurityDefinitions.cs\n  Overwrite   ./Foo.Bar.API/Authentication/StubJwtBearerAuthenticationHttpMessageHandler.cs\n  Overwrite   ./Foo.Bar.API/Authentication/SwaggerGenOptionsExtensions.cs\n  Overwrite   ./Foo.Bar.API/Authorization/ConfigurableAuthorizationPolicyProvider.cs\n  Overwrite   ./Foo.Bar.API/Constants.cs\n  Overwrite   ./Foo.Bar.API/Controllers/ApiControllerBase.cs\n  Overwrite   ./Foo.Bar.API/Controllers/Category/AddCarCategoryController.cs\n  Overwrite   ./Foo.Bar.API/Controllers/Category/DeleteCategoryController.cs\n  Overwrite   ./Foo.Bar.API/Controllers/Category/UpdateCarCategoryController.cs\n  Overwrite   ./Foo.Bar.API/Controllers/Item/AddCarItemController.cs\n  Overwrite   ./Foo.Bar.API/Controllers/Item/DeleteCarItemController.cs\n  Overwrite   ./Foo.Bar.API/Controllers/Item/UpdateCarItemController.cs\n  Overwrite   ./Foo.Bar.API/Controllers/Car/CreateCarController.cs\n  Overwrite   ./Foo.Bar.API/Controllers/Car/DeleteCarController.cs\n  Overwrite   ./Foo.Bar.API/Controllers/Car/GetCarByIdController.cs\n  Overwrite   ./Foo.Bar.API/Controllers/Car/GetCarByIdV2Controller.cs\n  Overwrite   ./Foo.Bar.API/Controllers/Car/SearchCarController.cs\n  Overwrite   ./Foo.Bar.API/Controllers/Car/UpdateCarController.cs\n  Overwrite   ./Foo.Bar.API/Program.cs\n  Overwrite   ./Foo.Bar.API/Startup.cs\n  Overwrite   ./Foo.Bar.API/Foo.Bar.API.csproj\n\nRerun the command and pass --force to accept and create.\n")),(0,o.kt)("p",null,"This will happen if the newly generated template project names collide with your existing structure. It's up to you to decide if you want to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--force")," flag and overwrite all collisions with the projects from the template. By doing so you might lose your custom logic in some places and you'll have to transfer things manually to the new projects by examining the diffs in your source control."),(0,o.kt)("p",null,"If you don't want to do that you can generate the new projects with a different namespace (what was shown above) and then copy/remove the things you don't need."),(0,o.kt)(i.default,{url:"https://vimeo.com/640287397",mdxType:"ResponsivePlayer"})))}m.isMDXComponent=!0}}]);