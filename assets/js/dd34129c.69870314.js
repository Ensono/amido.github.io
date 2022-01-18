"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[1194],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1332:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},8387:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),r=n(7294),o=n(2389),i=n(8578);var s=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(7673),c=n(6010),u="tabItem_2kG2";function p(e){var t,n,a,o=e.lazy,i=e.block,p=e.defaultValue,d=e.values,m=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),f=(0,l.lx)(g,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=s(),x=b.tabGroupChoices,y=b.setTabGroupChoices,N=(0,r.useState)(k),C=N[0],w=N[1],S=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=x[m];null!=O&&O!==C&&g.some((function(e){return e.value===O}))&&w(O)}var A=function(e){var t=e.currentTarget,n=S.indexOf(t),a=g[n].value;a!==C&&(E(t),w(a),null!=m&&y(m,a))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=S.indexOf(e.currentTarget)+1;n=S[a]||S[0];break;case"ArrowLeft":var r=S.indexOf(e.currentTarget)-1;n=S[r]||S[S.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},h)},g.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":C===t}),key:t,ref:function(e){return S.push(e)},onKeyDown:_,onFocus:A,onClick:A},null!=n?n:t)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},8578:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},4283:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(8387),s=n(1332),l=["components"],c={id:"configure_project_netcore",title:"Configure REST API with CQRS project",hide_title:!0,sidebar_label:"Configure REST API with CQRS project",hide_table_of_contents:!0,description:"Configure, Build and run .NET Core REST API application with CQRS on local and docker container",keywords:[".net core","rest api","cqrs","azure","application insights","cosmos db","build","run","application","configure","docker"]},u=void 0,p={unversionedId:"workloads/azure/backend/netcore/quickstart/web_api_cqrs/configure_project_netcore",id:"workloads/azure/backend/netcore/quickstart/web_api_cqrs/configure_project_netcore",isDocsHomePage:!1,title:"Configure REST API with CQRS project",description:"Configure, Build and run .NET Core REST API application with CQRS on local and docker container",source:"@site/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/configure_project_netcore.md",sourceDirName:"workloads/azure/backend/netcore/quickstart/web_api_cqrs",slug:"/workloads/azure/backend/netcore/quickstart/web_api_cqrs/configure_project_netcore",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/configure_project_netcore",tags:[],version:"current",frontMatter:{id:"configure_project_netcore",title:"Configure REST API with CQRS project",hide_title:!0,sidebar_label:"Configure REST API with CQRS project",hide_table_of_contents:!0,description:"Configure, Build and run .NET Core REST API application with CQRS on local and docker container",keywords:[".net core","rest api","cqrs","azure","application insights","cosmos db","build","run","application","configure","docker"]},sidebar:"docs",previous:{title:"Create REST API with CQRS project",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/create_project_netcore"},next:{title:"Build & Run REST API with CQRS",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/build_and_run_project_netcore"}},d=[{value:"Configuring the project",id:"configuring-the-project",children:[{value:"Configuring Cosmos DB",id:"configuring-cosmos-db",children:[],level:3}],level:2},{value:"Using Powershell",id:"using-powershell",children:[],level:2},{value:"Using Visual Studio",id:"using-visual-studio",children:[],level:2},{value:"Using VSCode",id:"using-vscode",children:[],level:2},{value:"Using terminal",id:"using-terminal",children:[],level:2},{value:"Using Visual Studio Code",id:"using-visual-studio-code",children:[],level:2}],m={toc:d};function h(e){var t=e.components,c=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"configuring-the-project"},"Configuring the project"),(0,o.kt)("p",null,"All security sensitive information is passed as a secret in our configuration. We have a library called ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/amido/stacks-dotnet-packages-configuration"},"Amido.Stacks.Configuration")," that reads secrets from the environment before the application starts and makes the needed substitutions in the configuration files."),(0,o.kt)("h3",{id:"configuring-cosmos-db"},"Configuring Cosmos DB"),(0,o.kt)("p",null,"The project can be set to use Azure ",(0,o.kt)("strong",{parentName:"p"},"Cosmos DB")," or an ",(0,o.kt)("strong",{parentName:"p"},"InMemory")," database to store the example application data. The ",(0,o.kt)("strong",{parentName:"p"},"InMemory")," database works out of the box and no further setup is required aside from creating your project. Depending on your desired setup you'll have to provide some or all of the configuration in the ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," file section showed below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="<PROJECT-NAME>/src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json"',title:'"<PROJECT-NAME>/src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json"'},'"CosmosDb": {\n    "DatabaseAccountUri": "<Add CosmosDB Account URI here>",\n    "DatabaseName": "Stacks",\n    "SecurityKeySecret": {\n        "Identifier": "COSMOSDB_KEY",\n    ...\n    }\n}\n')),(0,o.kt)("br",null),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Using the Cosmos DB Emulator to run the database locally"),(0,o.kt)("div",null,(0,o.kt)("p",null,"For running on local environments (Windows/Linux/macOS) please follow the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator?tabs=ssl-netstd21"},"instructions provided by Microsoft.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the local Cosmos DB URL in your browser as indicated in the documentation given in the above link.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Identify the ",(0,o.kt)("strong",{parentName:"p"},"Primary Key"),". Please refer to the field in the screenshot below. ",(0,o.kt)("img",{alt:"CosmosDB",src:n(8141).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Cosmos DB has to contain a fixed structure depending on your project. Create a collection ",(0,o.kt)("inlineCode",{parentName:"p"},"Stacks")," (this corresponds to ",(0,o.kt)("inlineCode",{parentName:"p"},"DatabaseName")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"appsettings.json")," file) with a container id ",(0,o.kt)("inlineCode",{parentName:"p"},"Menu")," (name of domain object) and the partition key ",(0,o.kt)("inlineCode",{parentName:"p"},"/id"),". Keep in mind that if you've changed the domain (default being ",(0,o.kt)("inlineCode",{parentName:"p"},"Menu"),"), you have to supply your own domain when creating the container."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CosmosDB",src:n(2309).Z})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"CosmosDb environment variable")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To interact with CosmosDb there is a environment variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"COSMOSDB_KEY")," that needs to be set before running your application. This variable holds the value of the ",(0,o.kt)("strong",{parentName:"p"},"Primary Key")," you got from step 2. Please see the next section on details of how to set it on your machine."))))),(0,o.kt)("br",null),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Setting the COSMOSDB_KEY environment variable"),(0,o.kt)("div",null,(0,o.kt)(i.Z,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"Unix",value:"unix"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("p",null,"There are a couple of different ways to set the environment variable"),(0,o.kt)("h2",{id:"using-powershell"},"Using Powershell"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"Powershell")," with administrator privileges to execute the command below. Substitute ",(0,o.kt)("inlineCode",{parentName:"p"},"<PRIMARY-KEY-HERE>")," with your own key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="Run PS command to add the COSMOSDB_KEY system variable"',title:'"Run',PS:!0,command:!0,to:!0,add:!0,the:!0,COSMOSDB_KEY:!0,system:!0,'variable"':!0},'[Environment]::SetEnvironmentVariable("COSMOSDB_KEY", "<PRIMARY-KEY-HERE>", [EnvironmentVariableTarget]::Machine)\n')),(0,o.kt)("h2",{id:"using-visual-studio"},"Using Visual Studio"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the project in Visual Studio. The solution file is located at ",(0,o.kt)("inlineCode",{parentName:"p"},"src/api/xxAMIDOxx.xxSTACKSxx.API.sln"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add ",(0,o.kt)("strong",{parentName:"p"},"COSMOSDB_KEY")," environment variable to the ",(0,o.kt)("strong",{parentName:"p"},"launchSettings.json")," file generated by Visual Studio and add the Cosmos DB Primary Key value."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="src/api/xxAMIDOxx.xxSTACKSxx.API/properties/launchSettings.json"',title:'"src/api/xxAMIDOxx.xxSTACKSxx.API/properties/launchSettings.json"'},'{\n  ...\n  "profiles": {\n    "xxAMIDOxx.xxSTACKSxx.API": {\n      "environmentVariables": {\n        "ASPNETCORE_ENVIRONMENT": "Development",\n        "COSMOSDB_KEY": "<PRIMARY-KEY-HERE>"\n        ...\n      }\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"using-vscode"},"Using VSCode"),(0,o.kt)("p",null,"If you're using VSCode that means you'll have a ",(0,o.kt)("inlineCode",{parentName:"p"},"launch.json")," file generated when you try to run the project. In that file there's an ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," section where you can put environment variables for the current session."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="launch.json"',title:'"launch.json"'},'"env": {\n    ...\n    "COSMOSDB_KEY": "<PRIMARY-KEY-HERE>",\n    ...\n}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note on usage")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The variable is referenced in ",(0,o.kt)("strong",{parentName:"p"},"appsettings.json"),". As mentioned in the beginning section of this page this environment variable name will be substituted with the actual value on startup."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json"',title:'"src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json"'},'"CosmosDb": {\n    ...\n    "SecurityKeySecret": {\n        "Identifier": "COSMOSDB_KEY",\n        ...\n    }\n}\n'))))),(0,o.kt)(s.Z,{value:"unix",mdxType:"TabItem"},(0,o.kt)("p",null,"There are a couple of different ways to set the environment variable"),(0,o.kt)("h2",{id:"using-terminal"},"Using terminal"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"terminal")," to execute the command below. Substitute ",(0,o.kt)("inlineCode",{parentName:"p"},"<PRIMARY-KEY-HERE>")," with your own key. This will set the environment variable only for the current session of your terminal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Run terminal command to add the COSMOSDB_KEY system variable"',title:'"Run',terminal:!0,command:!0,to:!0,add:!0,the:!0,COSMOSDB_KEY:!0,system:!0,'variable"':!0},"export COSMOSDB_KEY=<PRIMARY-KEY-HERE>\n")),(0,o.kt)("p",null,"To set the environment variable permanently on your system you'll have to edit your ",(0,o.kt)("inlineCode",{parentName:"p"},"bash_profile")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".zshenv")," file depending on which shell are you using."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Example for setting env variable in .zchenv"',title:'"Example',for:!0,setting:!0,env:!0,variable:!0,in:!0,'.zchenv"':!0},"echo 'export COSMOSDB_KEY=<PRIMARY-KEY-HERE>' >> ~/.zshenv\n")),(0,o.kt)("h2",{id:"using-visual-studio-code"},"Using Visual Studio Code"),(0,o.kt)("p",null,"If you're using VSCode that means you'll have a ",(0,o.kt)("inlineCode",{parentName:"p"},"launch.json")," file generated when you try to run the project. In that file there's an ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," section where you can put environment variables for the current session."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="launch.json"',title:'"launch.json"'},'"env": {\n    ...\n    "COSMOSDB_KEY": "<PRIMARY-KEY-HERE>",\n    ...\n}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note on usage")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The variable is referenced in ",(0,o.kt)("strong",{parentName:"p"},"appsettings.json"),". As mentioned in the beginning section of this page this environment variable name will be substituted with the actual value on startup."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json"',title:'"src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json"'},'"CosmosDb": {\n    ...\n    "SecurityKeySecret": {\n        "Identifier": "COSMOSDB_KEY",\n        ...\n    }\n}\n')))))))),(0,o.kt)("br",null),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Connecting to deployed Cosmos DB instance"),(0,o.kt)("div",null,"When choosing not to run the CosmosDB locally via the emulator, further configuration needs to be changed in the `appsettings.json` file.",(0,o.kt)("p",null,"Aside from setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"COSMOSDB_KEY")," as an environment variable (described in the previous section), you'll have to set the CosmosDB URI parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"DatabaseAccountUri")," as well."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="<PROJECT-NAME>/src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json"',title:'"<PROJECT-NAME>/src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json"'},'"CosmosDb": {\n    "DatabaseAccountUri": "<Add CosmosDB Account URI here>",\n    "DatabaseName": "Stacks",\n    "SecurityKeySecret": {\n        "Identifier": "COSMOSDB_KEY",\n    ...\n    }\n}\n')))))}h.isMDXComponent=!0},2309:function(e,t,n){t.Z=n.p+"assets/images/cosmosdb_emulator_1-eb5c6355a0662db45234724a920edac3.png"},8141:function(e,t,n){t.Z=n.p+"assets/images/cosmosdb_emulator_3-ddb539bc14733fdf2bc3cb8dc022cf09.png"}}]);