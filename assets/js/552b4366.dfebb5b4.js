"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[4550],{7963:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(4848),a=t(8453),o=t(1470),l=t(9365);const i={id:"build_and_run_project_netcore",title:"Build & Run REST API",sidebar_label:"Build & Run REST API",hide_title:!0,hide_table_of_contents:!0,description:"Build and Run .NET Core REST API application",keywords:[".net core","rest api","azure","application insights","build","run","application"]},s=void 0,c={id:"workloads/azure/backend/netcore/quickstart/web_api/build_and_run_project_netcore",title:"Build & Run REST API",description:"Build and Run .NET Core REST API application",source:"@site/docs/workloads/azure/backend/netcore/quickstart/web_api/build_and_run_project_netcore.md",sourceDirName:"workloads/azure/backend/netcore/quickstart/web_api",slug:"/workloads/azure/backend/netcore/quickstart/web_api/build_and_run_project_netcore",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api/build_and_run_project_netcore",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"build_and_run_project_netcore",title:"Build & Run REST API",sidebar_label:"Build & Run REST API",hide_title:!0,hide_table_of_contents:!0,description:"Build and Run .NET Core REST API application",keywords:[".net core","rest api","azure","application insights","build","run","application"]},sidebar:"docs",previous:{title:"Create REST API project",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api/create_project_netcore"},next:{title:"Create REST API with CQRS project",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api_cqrs/create_project_netcore"}},u={},d=[{value:"Build and Run the application",id:"build-and-run-the-application",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"build-and-run-the-application",children:"Build and Run the application"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.p,{children:"The API generated consists of configuration to be run locally or on a docker container."}),"\n","\n",(0,r.jsxs)(t,{open:!0,children:[(0,r.jsx)("summary",{children:"Build and run locally"}),(0,r.jsx)("div",{children:(0,r.jsxs)(o.A,{groupId:"operating-systems",defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],children:[(0,r.jsxs)(l.A,{value:"windows",children:[(0,r.jsxs)(n.p,{children:["Move to the ",(0,r.jsx)(n.code,{children:"<PROJECT-NAME>/src/api"})," folder and run the next commands in ",(0,r.jsx)(n.strong,{children:"Command Prompt"})," or ",(0,r.jsx)(n.strong,{children:"Powershell"})]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"dotnet build\n"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Note that the template engine will rename your paths, so change the command accordingly\ndotnet run --project xxENSONOxx.xxSTACKSxx.API/xxENSONOxx.xxSTACKSxx.API.csproj\n"})})]}),(0,r.jsxs)(l.A,{value:"linux",children:[(0,r.jsxs)(n.p,{children:["Move to the ",(0,r.jsx)(n.code,{children:"<PROJECT-NAME>/src/api"})," folder and run the next commands in ",(0,r.jsx)(n.strong,{children:"terminal"}),"."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"dotnet build\n"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Note that the template engine will rename your paths, so change the command accordingly\ndotnet run --project xxENSONOxx.xxSTACKSxx.API/xxENSONOxx.xxSTACKSxx.API.csproj\n"})})]})]})})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Build and run in docker container"}),(0,r.jsxs)("div",{children:[(0,r.jsxs)(n.p,{children:["From the ",(0,r.jsx)(n.code,{children:"<PROJECT-NAME>/src/api"})," folder, build a Docker image using e.g. the command below:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="Build docker image"',children:"docker build -t dotnet-api .\n"})}),(0,r.jsxs)(n.p,{children:["This uses the ",(0,r.jsx)(n.strong,{children:"Dockerfile"})," in this folder to generate the Docker image."]}),(0,r.jsx)(n.p,{children:"After the creation of the Docker image, the Docker container can be run using the command below:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="Run docker container"',children:"docker run -p 5000:80 --mount type=bind,source=/path/to/PROJECT-NAME/src/api/xxENSONOxx.xxSTACKSxx.API/appsettings.json,target=/app/config/appsettings.json\n"})})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(t,{open:!0,children:[(0,r.jsx)("summary",{children:"Verify that the application has started"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(n.admonition,{title:"Relationship between domain and path",type:"note",children:(0,r.jsxs)(n.p,{children:["Keep in mind that if you've changed the domain (original being ",(0,r.jsx)(n.code,{children:"Menu"}),"), the path will reflect that. If your domain is ",(0,r.jsx)(n.code,{children:"Foo"}),". Then the path will be ",(0,r.jsx)(n.code,{children:"../v1/foo"})," instead of ",(0,r.jsx)(n.code,{children:"..v1/menu"})," etc."]})}),(0,r.jsxs)(n.p,{children:["Browse to ",(0,r.jsx)(n.a,{href:"http://localhost:5000/v1/menu",children:"http://localhost:5000/v1/menu"}),". This should return a valid JSON response."]}),(0,r.jsxs)(n.p,{children:["The application configuration uses Swagger/OAS3 to represent the API endpoints. The Swagger UI can be viewed by directing your\nbrowser to ",(0,r.jsx)(n.a,{href:"http://localhost:5000/swagger/index.html",children:"http://localhost:5000/swagger/index.html"}),"."]})]})]}),"\n",(0,r.jsx)("br",{})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var o=t(4848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(6540),a=t(4164),o=t(3104),l=t(6347),i=t(205),s=t(7485),c=t(1682),u=t(679);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=h(e),[l,s]=(0,r.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const a=null!=(n=r.find((e=>e.default)))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[c,d]=b({queryString:t,groupId:a}),[x,m]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[a,o]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),f=(()=>{const e=null!=c?c:x;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);s(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const n=e.currentTarget,t=s.indexOf(n),a=i[t].value;a!==r&&(c(n),l(a))},d=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var r;const n=s.indexOf(e.currentTarget)+1;t=null!=(r=s[n])?r:s[0];break}case"ArrowLeft":{var a;const n=s.indexOf(e.currentTarget)-1;t=null!=(a=s[n])?a:s[s.length-1];break}}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.A)("tabs__item",f.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===n}),children:null!=t?t:n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,g.jsx)(j,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function k(e){const n=(0,m.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var r=t(6540);const a={},o=r.createContext(a);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);