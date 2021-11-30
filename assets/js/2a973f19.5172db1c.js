"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[3567,8689],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1332:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},8387:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7462),r=a(7294),o=a(2389),l=a(8578);var i=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(7673),c=a(6010),u="tabItem_2kG2";function p(e){var t,a,n,o=e.lazy,l=e.block,p=e.defaultValue,d=e.values,m=e.groupId,k=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,s.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=h[0])?void 0:n.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=i(),w=g.tabGroupChoices,y=g.setTabGroupChoices,N=(0,r.useState)(b),j=N[0],C=N[1],_=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=w[m];null!=S&&S!==j&&f.some((function(e){return e.value===S}))&&C(S)}var E=function(e){var t=e.currentTarget,a=_.indexOf(t),n=f[a].value;n!==j&&(T(t),C(n),null!=m&&y(m,n))},O=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=_.indexOf(e.currentTarget)+1;a=_[n]||_[0];break;case"ArrowLeft":var r=_.indexOf(e.currentTarget)-1;a=_[r]||_[_.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},k)},f.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":j===t}),key:t,ref:function(e){return _.push(e)},onKeyDown:O,onFocus:E,onClick:E},null!=a?a:t)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function d(e){var t=(0,o.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},8578:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},3697:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var n=a(7294),r=a(2004),o="playerSection_1ZCf",l="playerWrapper_166A",i="player_1MjL";var s=function(e){var t=e.url;return n.createElement("div",{className:o},n.createElement("div",{className:l},n.createElement(r.Z,{className:i,url:t,controls:!0,width:"100%",height:"100%",config:{}})))}},5258:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return h}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=a(3697),i=a(8387),s=a(1332),c=["components"],u={id:"create_project_netcore",title:"Create the project",hide_title:!0,sidebar_label:"Create the project",hide_table_of_contents:!0,description:"Create .NET Core REST API application with CQRS from a template",keywords:[".net core","rest api","cqrs","example","template","azure","application insights","cosmos db","build","run","application","configure","docker","tests","github"]},p=void 0,d={unversionedId:"workloads/azure/backend/netcore/quickstart/web_api_cqrs_events/create_project_netcore",id:"workloads/azure/backend/netcore/quickstart/web_api_cqrs_events/create_project_netcore",isDocsHomePage:!1,title:"Create the project",description:"Create .NET Core REST API application with CQRS from a template",source:"@site/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs_events/create_project_netcore.md",sourceDirName:"workloads/azure/backend/netcore/quickstart/web_api_cqrs_events",slug:"/workloads/azure/backend/netcore/quickstart/web_api_cqrs_events/create_project_netcore",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs_events/create_project_netcore",tags:[],version:"current",frontMatter:{id:"create_project_netcore",title:"Create the project",hide_title:!0,sidebar_label:"Create the project",hide_table_of_contents:!0,description:"Create .NET Core REST API application with CQRS from a template",keywords:[".net core","rest api","cqrs","example","template","azure","application insights","cosmos db","build","run","application","configure","docker","tests","github"]},sidebar:"docs",previous:{title:"Build & Run the Project",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/build_and_run_project_netcore"},next:{title:"Configure the project",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs_events/configure_project_netcore"}},m=[{value:"Create the project",id:"create-the-project",children:[],level:2},{value:"Install the package",id:"install-the-package",children:[{value:"stacks-cqrs-events-app",id:"stacks-cqrs-events-app",children:[],level:3},{value:"stacks-cqrs-events-webapi",id:"stacks-cqrs-events-webapi",children:[],level:3},{value:"stacks-az-func-cosmosdb-worker",id:"stacks-az-func-cosmosdb-worker",children:[],level:3},{value:"stacks-az-func-asb-listener",id:"stacks-az-func-asb-listener",children:[],level:3},{value:"stacks-asb-worker",id:"stacks-asb-worker",children:[],level:3}],level:2},{value:"Pros and cons of each option",id:"pros-and-cons-of-each-option",children:[],level:2}],k={toc:m};function h(e){var t=e.components,a=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"create-the-project"},"Create the project"),(0,o.kt)("p",null,"There are several ways to get your Stacks project, or to get parts of it as well as a couple of configuration options."),(0,o.kt)("br",null),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Create a new project using the template or add code to an existing project"),(0,o.kt)("div",null,(0,o.kt)("h2",{id:"install-the-package"},"Install the package"),(0,o.kt)("p",null,"Access Amido.Stacks.CQRS.Events.Template package page in Nuget ",(0,o.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Amido.Stacks.CQRS.Events.Templates/"},"here"),"\nCopy and execute the command displayed in the page (if you want to get the latest version).\nFor example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run the command to install the package"',title:'"Run',the:!0,command:!0,to:!0,install:!0,'package"':!0},"dotnet new --install Amido.Stacks.CQRS.Events.Templates\n")),(0,o.kt)(l.default,{url:"https://vimeo.com/640289104",mdxType:"ResponsivePlayer"}),(0,o.kt)("p",null,"Once installed, you obtain 6 templates that can be used"),(0,o.kt)("h3",{id:"stacks-cqrs-events-app"},"stacks-cqrs-events-app"),(0,o.kt)("p",null,"The full template containing API, functions, background worker and build infrastructure"),(0,o.kt)("p",null,"Navigate to the folder where you wish to create a new project on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run the command to create the project"',title:'"Run',the:!0,command:!0,to:!0,create:!0,'project"':!0},"dotnet new stacks-cqrs-events-app -n Company.Project -d YourDomain -e MessagingProvider -db DatabaseOption\n")),(0,o.kt)("p",null,"The above command will create a folder and a repository called ",(0,o.kt)("inlineCode",{parentName:"p"},"Company.Project"),"."),(0,o.kt)("h3",{id:"stacks-cqrs-events-webapi"},"stacks-cqrs-events-webapi"),(0,o.kt)("p",null,"A template for the api project. If you need a CQRS WebAPI that can publish messages, this is the template to use."),(0,o.kt)("p",null,"Navigate to the folder where you wish to create a new project on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run the command to create the project"',title:'"Run',the:!0,command:!0,to:!0,create:!0,'project"':!0},"dotnet new stacks-cqrs-events-webapi -n Company.Project -d YourDomain -e MessagingProvider\n")),(0,o.kt)("p",null,"The above command will create a folder and a repository called ",(0,o.kt)("inlineCode",{parentName:"p"},"Company.Project"),"."),(0,o.kt)("h3",{id:"stacks-az-func-cosmosdb-worker"},"stacks-az-func-cosmosdb-worker"),(0,o.kt)("p",null,"A template for a Azure Function containing a CosmosDb change feed trigger. Upon a CosmosDb event, the worker reads it and publishes a message to Service Bus."),(0,o.kt)("p",null,"Navigate to the folder where you wish to create a new project on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run the command to create the function"',title:'"Run',the:!0,command:!0,to:!0,create:!0,'function"':!0},"dotnet new stacks-az-func-cosmosdb-worker -n Company.Project\n")),(0,o.kt)("h3",{id:"stacks-az-func-asb-listener"},"stacks-az-func-asb-listener"),(0,o.kt)("p",null,"A template containing an Azure Function project with a single function that has a Service Bus subscription trigger. The function receives the message and deserializes it."),(0,o.kt)("p",null,"Navigate to the folder where you wish to create a new project on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run the command to create the function"',title:'"Run',the:!0,command:!0,to:!0,create:!0,'function"':!0},"dotnet new stacks-az-func-asb-listener -n Company.Project -d Menu\n")),(0,o.kt)("h3",{id:"stacks-asb-worker"},"stacks-asb-worker"),(0,o.kt)("p",null,"A template contains a background worker application that reads and handles messages from a ServiceBus subscription."),(0,o.kt)("p",null,"Navigate to the folder where you wish to create a new project on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run the command to create the function"',title:'"Run',the:!0,command:!0,to:!0,create:!0,'function"':!0},"dotnet new stacks-asb-worker -n Company.Project -d Menu\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Template parameter details (some templates may offer only a subset of the arguments shown)")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"-n|--name"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Sets the project name"),(0,o.kt)("li",{parentName:"ul"},"Omitting it will result in the project name being the same as the folder where the command has been ran from"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"-d|--domain"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Sets the name of the aggregate root object. It is also the name of the collection within CosmosDB instance."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"-db|--database"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Configures which database provider to be used"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"-e|--eventPublisher"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Configures the messaging service"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"-e:fw|--enableFunctionWorker"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Configures the messaging service"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"-e:fl|--enableFunctionListener"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Configures the messaging service"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"-e:bw|--enableBackgroundWorker"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Configures the messaging service"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"-o|--output"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Sets the path to where the project is added"),(0,o.kt)("li",{parentName:"ul"},"Omitting the parameter will result in the creation of a new folder")))))),(0,o.kt)(l.default,{url:"https://vimeo.com/640289070",mdxType:"ResponsivePlayer"}))),(0,o.kt)("br",null),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Create the templates locally by cloning the GitHub repository (outdated)"),(0,o.kt)("div",null,(0,o.kt)("p",null,"Clone the .NET project to your local machine from here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/amido/stacks-dotnet-cqrs-events"},"stacks-dotnet-cqrs-events repository")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run git clone repository command"',title:'"Run',git:!0,clone:!0,repository:!0,'command"':!0},"git clone git@github.com:amido/stacks-dotnet-cqrs-events.git\n")))),(0,o.kt)("br",null),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Create the project using the Scaffolding CLI (in redevelopment)"),(0,o.kt)("div",null,(0,o.kt)("p",null,"The scaffolding CLI is being redeveloped to offer you more guided choices of Amido Stacks project flavour.\nBased on the answers, the ready-to-build project template will be produced."))),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"pros-and-cons-of-each-option"},"Pros and cons of each option"),(0,o.kt)(i.Z,{defaultValue:"template",values:[{label:".NET Core Template",value:"template"},{label:"GitHub Repository Clone",value:"repository_clone"},{label:"Scaffolding  CLI",value:"scaffolding_cli"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"template",mdxType:"TabItem"},(0,o.kt)("h4",null,"PROS"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Has no dependencies."),(0,o.kt)("li",null,"Enables creation of .NET Core projects in Amido Stacks Suite."),(0,o.kt)("li",null,"Can pick some parts of the whole suite (just a function, just a worker, etc)."),(0,o.kt)("li",null,"Enables versioning and access to older versions of Stacks templates"),(0,o.kt)("li",null,"Removes out the content not needed from the GitHub repository.")),(0,o.kt)("h4",null,"CONS"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Too many commands to run."))),(0,o.kt)(s.Z,{value:"repository_clone",mdxType:"TabItem"},(0,o.kt)("p",null,"source code can be found [here](https://github.com/amido/stacks-dotnet-cqrs-events)"),(0,o.kt)("h4",null,"PROS"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Familiar approach."),(0,o.kt)("li",null,"Quick and easy to run (one command).")),(0,o.kt)("h4",null,"CONS"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Requires ",(0,o.kt)("strong",null,"git")," installation."),(0,o.kt)("li",null,"Does not remove the files not needed in the repository which may create confusion."),(0,o.kt)("li",null,"Does not allow automated personalization of the project."),(0,o.kt)("li",null,"All Amido Stacks repositories links required to create all flavours of projects."))),(0,o.kt)(s.Z,{value:"scaffolding_cli",mdxType:"TabItem"},(0,o.kt)("p",null,"The Amido Stacks Scaffolding CLI will be used to create a fully-functional and deployable project from a template, in a variety of flavours."),(0,o.kt)("h4",null,"PROS"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Provides a guided project creation when generating the preferred project flavour."),(0,o.kt)("li",null,"Enables the creation of all projects in Amido Stacks templates suite."),(0,o.kt)("li",null,"Allows automated personalization of project name, domain model, company name."),(0,o.kt)("li",null,"Removes out the content not needed from the GitHub repository.")),(0,o.kt)("h4",null,"CONS"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Requires the installation of an extra application.")))),(0,o.kt)("br",null))}h.isMDXComponent=!0}}]);