(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(210)),c=n(217),i=n(218),s={id:"configure_project_netcore",title:"Configure the project",hide_title:!0,sidebar_label:"Configure the project",hide_table_of_contents:!0,description:"Configure, Build and run .NET Core REST API application with CQRS on local and docker container",keywords:[".net core","rest api","cqrs","azure","application insights","cosmos db","build","run","application","configure","docker"]},l={unversionedId:"workloads/azure/backend/netcore/quickstart/configure_project_netcore",id:"workloads/azure/backend/netcore/quickstart/configure_project_netcore",isDocsHomePage:!1,title:"Configure the project",description:"Configure, Build and run .NET Core REST API application with CQRS on local and docker container",source:"@site/docs/workloads/azure/backend/netcore/quickstart/configure_project_netcore.md",slug:"/workloads/azure/backend/netcore/quickstart/configure_project_netcore",permalink:"/stacks/docs/workloads/azure/backend/netcore/quickstart/configure_project_netcore",version:"current",sidebar_label:"Configure the project",sidebar:"docs",previous:{title:"Create the project",permalink:"/stacks/docs/workloads/azure/backend/netcore/quickstart/create_project_netcore"},next:{title:"Build & Run",permalink:"/stacks/docs/workloads/azure/backend/netcore/quickstart/build_and_run_project_netcore"}},u=[{value:"Configure the project",id:"configure-the-project",children:[]}],b={rightToc:u};function p(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"configure-the-project"},"Configure the project"),Object(o.b)("p",null,"It uses an Azure ",Object(o.b)("strong",{parentName:"p"},"CosmosDB")," database to store the example application data.\nThere is a corresponding environment variable that needs to be set to interact with CosmosDB."),Object(o.b)("br",null),Object(o.b)("details",{open:!0},Object(o.b)("summary",null,"Using the Cosmos DB Emulator to run the database locally"),Object(o.b)("div",null,Object(o.b)("p",null,"For running on local environments, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator?tabs=ssl-netstd21"}),"Cosmos DB emulator")," can be used in a Windows environment."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install Cosmos DB Emulator")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Identify the ",Object(o.b)("strong",{parentName:"p"},"Primary key")))),Object(o.b)("p",null,Object(o.b)("img",{alt:"CosmosDB",src:n(223).default})))),Object(o.b)("br",null),Object(o.b)("details",null,Object(o.b)("summary",null,"Not using the Cosmos DB Emulator"),Object(o.b)("div",null,"When choosing not to run the CosmosDB locally, further configuration needs to be changed.",Object(o.b)("p",null,"Set the CosmosDB URI parameter ",Object(o.b)("strong",{parentName:"p"},"DatabaseAccountUri")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'{2} title="<PROJECT-NAME>/src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json"',"{2}":!0,title:'"<PROJECT-NAME>/src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json"'}),'"CosmosDb": {\n    "DatabaseAccountUri": "<Add CosmosDB Account URI here>",\n    ...\n}\n')))),Object(o.b)("br",null),Object(o.b)("details",{open:!0},Object(o.b)("summary",null,"Create the Cosmos DB structure"),Object(o.b)("div",null,Object(o.b)("p",null,"Based on the solution template the Cosmos DB has to contain a fixed structure."),Object(o.b)("p",null,"Create a collection ",Object(o.b)("strong",{parentName:"p"},"Stacks")," with a container id ",Object(o.b)("strong",{parentName:"p"},"menu")," (name of domain object) and the partition key ",Object(o.b)("strong",{parentName:"p"},"/id"),"."),Object(o.b)("p",null,Object(o.b)("img",{alt:"CosmosDB",src:n(224).default})))),Object(o.b)("br",null),Object(o.b)("p",null,"For the project just created to connect to the Cosmos Db database, the primary key has to be provided as a environment variable. To add this variable perform one of the next two steps."),Object(o.b)("details",{open:!0},Object(o.b)("summary",null,"Setting the key as a system property"),Object(o.b)("div",null,Object(o.b)(c.a,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"Unix",value:"unix"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"windows",mdxType:"TabItem"},Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Replace the Cosmos DB Primary key in the command.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run the command in powershell with administrator privileges."))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-powershell",metastring:'title="Run command to add the COSMOSDB_KEY system variable"',title:'"Run',command:!0,to:!0,add:!0,the:!0,COSMOSDB_KEY:!0,system:!0,'variable"':!0}),'[Environment]::SetEnvironmentVariable("COSMOSDB_KEY", "Cosmos DB Primary key", [EnvironmentVariableTarget]::Machine)\n'))),Object(o.b)(i.a,{value:"unix",mdxType:"TabItem"},"Set as additional variable within e.g. ",Object(o.b)("code",null,"~/.profile")," or ",Object(o.b)("code",null,"/etc/profile"),".")))),Object(o.b)("br",null),Object(o.b)("details",null,Object(o.b)("summary",null,"Set the variable specific to Visual Studio"),Object(o.b)("div",null,Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open the project in Visual Studio. The solution file is located at ",Object(o.b)("inlineCode",{parentName:"p"},"src/api/xxAMIDOxx.xxSTACKSxx.API.sln"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add ",Object(o.b)("strong",{parentName:"p"},"COSMOSDB_KEY")," environment variable to the ",Object(o.b)("strong",{parentName:"p"},"launchSettings.json")," file generated by Visual Studio and add the Cosmos DB Primary key value."))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'{4} title="src/api/xxAMIDOxx.xxSTACKSxx.API/properties/launchSettings.json"',"{4}":!0,title:'"src/api/xxAMIDOxx.xxSTACKSxx.API/properties/launchSettings.json"'}),'"xxAMIDOxx.xxSTACKSxx.API": {\n    ...\n    "ASPNETCORE_ENVIRONMENT": "Development",\n        "COSMOSDB_KEY": "<Add Cosmos DB Primary Key here>"\n    },\n    ...\n}\n')),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The variable is referenced in ",Object(o.b)("strong",{parentName:"p"},"appsettings.json"),"."),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'{4} title="src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json"',"{4}":!0,title:'"src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json"'}),'"CosmosDb": {\n    ...\n    "SecurityKeySecret": {\n        "Identifier": "COSMOSDB_KEY",\n        ...\n    }\n}\n')))))),Object(o.b)("br",null))}p.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},213:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},215:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},216:function(e,t,n){"use strict";var r=n(0),a=n(215);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},217:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(216),c=n(213),i=n(51),s=n.n(i),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,b=e.values,p=e.groupId,d=Object(o.a)(),m=d.tabGroupChoices,O=d.setTabGroupChoices,j=Object(r.useState)(i),f=j[0],g=j[1],h=Object(r.useState)(!1),v=h[0],x=h[1];if(null!=p){var y=m[p];null!=y&&y!==f&&b.some((function(e){return e.value===y}))&&g(y)}var C=function(e){g(e),null!=p&&O(p,e)},w=[],N=function(e){e.metaKey||e.altKey||e.ctrlKey||x(!0)},S=function(){x(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",N),window.addEventListener("mousedown",S)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===t}),style:v?{}:{outline:"none"},key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e),N(e)},onFocus:function(){return C(t)},onClick:function(){C(t),x(!1)},onPointerDown:function(){return x(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}},218:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},223:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cosmosdb_emulator_3-ddb539bc14733fdf2bc3cb8dc022cf09.png"},224:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cosmosdb_emulator_1-eb5c6355a0662db45234724a920edac3.png"}}]);