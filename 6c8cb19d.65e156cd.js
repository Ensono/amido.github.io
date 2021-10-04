(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(200)),c=n(206),i=n(207),l={id:"build_and_run_project_netcore",title:"Build & Run",sidebar_label:"Build & Run the Project",hide_title:!0,hide_table_of_contents:!0,description:"Build and Run .NET Core REST API application with CQRS",keywords:[".net core","rest api","cqrs","azure","application insights","cosmos db","build","run","application"]},u={unversionedId:"workloads/azure/backend/netcore/quickstart/web_api_cqrs_events/build_and_run_project_netcore",id:"workloads/azure/backend/netcore/quickstart/web_api_cqrs_events/build_and_run_project_netcore",isDocsHomePage:!1,title:"Build & Run",description:"Build and Run .NET Core REST API application with CQRS",source:"@site/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs_events/build_and_run_project_netcore.md",slug:"/workloads/azure/backend/netcore/quickstart/web_api_cqrs_events/build_and_run_project_netcore",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs_events/build_and_run_project_netcore",version:"current",sidebar_label:"Build & Run the Project",sidebar:"docs",previous:{title:"Configure the project",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs_events/configure_project_netcore"},next:{title:"Architecture Overview",permalink:"/docs/workloads/azure/backend/netcore/architecture/architecture_overview_netcore"}},s=[{value:"Build and Run the application",id:"build-and-run-the-application",children:[]}],b={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"build-and-run-the-application"},"Build and Run the application"),Object(o.b)("br",null),Object(o.b)("p",null,"The API generated consists of configuration to be run locally or on a docker container."),Object(o.b)("details",{open:!0},Object(o.b)("summary",null,"Build and run locally"),Object(o.b)("div",null,Object(o.b)(c.a,{groupId:"operating-systems",defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"windows",mdxType:"TabItem"},Object(o.b)("p",null,"Move to the ",Object(o.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/src/api")," folder and run the next commands in ",Object(o.b)("strong",{parentName:"p"},"Command Prompt")," or ",Object(o.b)("strong",{parentName:"p"},"Powershell")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"dotnet restore\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"dotnet clean\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"dotnet build\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"dotnet run --project xxAMIDOxx.xxSTACKSxx.API/xxAMIDOxx.xxSTACKSxx.API.csproj\n"))),Object(o.b)(i.a,{value:"linux",mdxType:"TabItem"},Object(o.b)("p",null,"Move to the ",Object(o.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/src/api")," folder and run the next commands in ",Object(o.b)("strong",{parentName:"p"},"terminal"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"export COSMOSDB_KEY=<COSMOSDB_KEY value here>\nexport SERVICEBUS_CONNECTIONSTRING=<Your Service Bus connection string here>\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"dotnet restore\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"dotnet clean\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"dotnet build\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"dotnet run --project xxAMIDOxx.xxSTACKSxx.API/xxAMIDOxx.xxSTACKSxx.API.csproj\n")))))),Object(o.b)("br",null),Object(o.b)("details",null,Object(o.b)("summary",null,"Build and run in docker container"),Object(o.b)("div",null,Object(o.b)("p",null,"From the ",Object(o.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/src/api")," folder, build a Docker image using e.g. the command below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Build docker image"',title:'"Build',docker:!0,'image"':!0}),"docker build -t dotnet-api .\n")),Object(o.b)("p",null,"This uses the ",Object(o.b)("strong",{parentName:"p"},"Dockerfile")," in this folder to generate the Docker image."),Object(o.b)("p",null,"After the creation of the Docker image, the Docker container can be run using the command below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Run docker container"',title:'"Run',docker:!0,'container"':!0}),"docker run -p 5000:80 --mount type=bind,source=/path/to/PROJECT-NAME/src/api/xxAMIDOxx.xxSTACKSxx.API/appsettings.json,target=/app/config/appsettings.json -e COSMOSDB_KEY=your-key -e SERVICEBUS_CONNECTIONSTRING=your-connection-string  dotnet-api:latest`\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("strong",{parentName:"p"},"COSMOSDB_KEY")," and ",Object(o.b)("strong",{parentName:"p"},"SERVICEBUS_CONNECTIONSTRING")," described in the command above has to be passed when running the container. Note that the ",Object(o.b)("strong",{parentName:"p"},"appsettings.json")," value is mounted here for running locally,\nbut not if the full project is deployed to Azure, where the build process will perform the substitution."))))),Object(o.b)("br",null),Object(o.b)("details",{open:!0},Object(o.b)("summary",null,"Verify that the application has started"),Object(o.b)("div",null,Object(o.b)("p",null,"Browse to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:5000/v1/menu"}),"http://localhost:5000/v1/menu"),". This should return a valid JSON response."),Object(o.b)("p",null,"The application configuration uses Swagger/OAS3 to represent the API endpoints. The Swagger UI can be viewed by directing your\nbrowser to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:5000/swagger/index.html"}),"http://localhost:5000/swagger/index.html"),"."))),Object(o.b)("br",null))}p.isMDXComponent=!0},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,O=b["".concat(c,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(O,i(i({ref:t},u),{},{components:n})):a.a.createElement(O,i({ref:t},u))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},202:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},204:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},205:function(e,t,n){"use strict";var r=n(0),a=n(204);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},206:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(205),c=n(202),i=n(52),l=n.n(i),u=37,s=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,b=e.values,p=e.groupId,d=Object(o.a)(),O=d.tabGroupChoices,m=d.setTabGroupChoices,j=Object(r.useState)(i),f=j[0],h=j[1],g=Object(r.useState)(!1),v=g[0],w=g[1];if(null!=p){var y=O[p];null!=y&&y!==f&&b.some((function(e){return e.value===y}))&&h(y)}var N=function(e){h(e),null!=p&&m(p,e)},x=[],_=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},k=function(){w(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",_),window.addEventListener("mousedown",k)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===t}),style:v?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),_(e)},onFocus:function(){return N(t)},onClick:function(){N(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}},207:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);