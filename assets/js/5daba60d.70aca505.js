"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[9239,8689],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1332:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},8387:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),r=n(7294),l=n(2389),o=n(8578);var i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(7673),u=n(6010),s="tabItem_2kG2";function p(e){var t,n,a,l=e.lazy,o=e.block,p=e.defaultValue,d=e.values,m=e.groupId,h=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:k.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,c.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=k[0])?void 0:a.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=i(),y=g.tabGroupChoices,w=g.setTabGroupChoices,j=(0,r.useState)(b),N=j[0],T=j[1],C=[],_=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=y[m];null!=E&&E!==N&&f.some((function(e){return e.value===E}))&&T(E)}var O=function(e){var t=e.currentTarget,n=C.indexOf(t),a=f[n].value;a!==N&&(_(t),T(a),null!=m&&w(m,a))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":o},h)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,u.Z)("tabs__item",s,{"tabs__item--active":N===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:S,onFocus:O,onClick:O},null!=n?n:t)}))),l?(0,r.cloneElement)(k.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},8578:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},3697:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var a=n(7294),r=n(2004),l="playerSection_1ZCf",o="playerWrapper_166A",i="player_1MjL";var c=function(e){var t=e.url;return a.createElement("div",{className:l},a.createElement("div",{className:o},a.createElement(r.Z,{className:i,url:t,controls:!0,width:"100%",height:"100%",config:{}})))}},8173:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=n(3697),i=n(8387),c=n(1332),u=["components"],s={id:"create_project_netcore",title:"Create the project",hide_title:!0,sidebar_label:"Create the project",hide_table_of_contents:!0,description:"Create .NET Core REST API application from a template",keywords:[".net core","rest api","example","template","azure","application insights","build","run","application","configure","docker","tests","github"]},p=void 0,d={unversionedId:"workloads/azure/backend/netcore/quickstart/web_api/create_project_netcore",id:"workloads/azure/backend/netcore/quickstart/web_api/create_project_netcore",isDocsHomePage:!1,title:"Create the project",description:"Create .NET Core REST API application from a template",source:"@site/docs/workloads/azure/backend/netcore/quickstart/web_api/create_project_netcore.md",sourceDirName:"workloads/azure/backend/netcore/quickstart/web_api",slug:"/workloads/azure/backend/netcore/quickstart/web_api/create_project_netcore",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api/create_project_netcore",tags:[],version:"current",frontMatter:{id:"create_project_netcore",title:"Create the project",hide_title:!0,sidebar_label:"Create the project",hide_table_of_contents:!0,description:"Create .NET Core REST API application from a template",keywords:[".net core","rest api","example","template","azure","application insights","build","run","application","configure","docker","tests","github"]},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/workloads/azure/backend/netcore/introduction_netcore"},next:{title:"Build & Run the Project",permalink:"/docs/workloads/azure/backend/netcore/quickstart/web_api/build_and_run_project_netcore"}},m=[{value:"Create the project",id:"create-the-project",children:[{value:"Install the package",id:"install-the-package",children:[],level:3},{value:"Create a new  project",id:"create-a-new--project",children:[],level:3},{value:"Uninstalling a template",id:"uninstalling-a-template",children:[],level:3}],level:2},{value:"Pros and cons of each option",id:"pros-and-cons-of-each-option",children:[],level:2}],h={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"create-the-project"},"Create the project"),(0,l.kt)("p",null,"There are several ways to get your Stacks project."),(0,l.kt)("br",null),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Create a new project using the template"),(0,l.kt)("div",null,(0,l.kt)("h3",{id:"install-the-package"},"Install the package"),(0,l.kt)("p",null,"Access Amido.Stacks.Templates package page in Nuget ",(0,l.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Amido.Stacks.Templates/"},"here"),".",(0,l.kt)("br",null),"\nCopy and execute the command displayed in the page (if you want to get the latest version).",(0,l.kt)("br",null),"\nFor example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run the command to install the package"',title:'"Run',the:!0,command:!0,to:!0,install:!0,'package"':!0},"dotnet new --install Amido.Stacks.Templates\n")),(0,l.kt)(o.default,{url:"https://vimeo.com/640289104",mdxType:"ResponsivePlayer"}),(0,l.kt)("h3",{id:"create-a-new--project"},"Create a new  project"),(0,l.kt)("p",null,"Navigate to the folder where you wish to create a new project on."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run the command to create the project"',title:'"Run',the:!0,command:!0,to:!0,create:!0,'project"':!0},"dotnet new stacks-webapi -n Company.Project -d YourDomain\n")),(0,l.kt)("p",null,"The above command will create a folder called ",(0,l.kt)("inlineCode",{parentName:"p"},"Company.Project"),"."),(0,l.kt)("h3",{id:"uninstalling-a-template"},"Uninstalling a template"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="To uninstall the template pack you have to execute the following command"',title:'"To',uninstall:!0,the:!0,template:!0,pack:!0,you:!0,have:!0,to:!0,execute:!0,following:!0,'command"':!0},"dotnet new --uninstall Amido.Stacks.Templates\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Template parameter details")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"-n|--name"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Sets the project name"),(0,l.kt)("li",{parentName:"ul"},"Omitting it will result in the project name being the same as the folder where the command has been ran from"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"-d|--domain"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Sets the name of the aggregate root object. It is also the name of the collection within CosmosDB instance."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"-o|--output"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Sets the path to where the project is added"),(0,l.kt)("li",{parentName:"ul"},"Omitting the parameter will result in the creation of a new folder")))))))),(0,l.kt)("br",null),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Create the templates locally by cloning the GitHub repository (outdated)"),(0,l.kt)("div",null,(0,l.kt)("p",null,"Clone the .NET project to your local machine from here: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/amido/stacks-dotnet"},"stacks-dotnet repository")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run git clone repository command"',title:'"Run',git:!0,clone:!0,repository:!0,'command"':!0},"git clone git@github.com:amido/stacks-dotnet.git\n")))),(0,l.kt)("br",null),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Create the project using the Scaffolding CLI (in redevelopment)"),(0,l.kt)("div",null,(0,l.kt)("p",null,"The scaffolding CLI is being redeveloped to offer you more guided choices of Amido Stacks project flavour.\nBased on the answers, the ready-to-build project template will be produced."))),(0,l.kt)("br",null),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"pros-and-cons-of-each-option"},"Pros and cons of each option"),(0,l.kt)(i.Z,{defaultValue:"template",values:[{label:".NET Core Template",value:"template"},{label:"GitHub Repository Clone",value:"repository_clone"},{label:"Scaffolding  CLI",value:"scaffolding_cli"}],mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"template",mdxType:"TabItem"},(0,l.kt)("h4",null,"PROS"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"Has no dependencies."),(0,l.kt)("li",null,"Enables creation of .NET Core projects in Amido Stacks Suite."),(0,l.kt)("li",null,"Enables versioning and access to older versions of Stacks templates."),(0,l.kt)("li",null,"Removes out the content not needed from the GitHub repository.")),(0,l.kt)("h4",null,"CONS"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"Too many commands to run."))),(0,l.kt)(c.Z,{value:"repository_clone",mdxType:"TabItem"},(0,l.kt)("p",null,"Source code can be found [here](https://github.com/amido/stacks-dotnet)"),(0,l.kt)("h4",null,"PROS"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"Familiar approach."),(0,l.kt)("li",null,"Quick and easy to run (one command).")),(0,l.kt)("h4",null,"CONS"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"Requires ",(0,l.kt)("strong",null,"git")," installation."),(0,l.kt)("li",null,"Does not remove the files not needed in the repository which may create confusion."),(0,l.kt)("li",null,"Does not allow automated personalization of the project."),(0,l.kt)("li",null,"All Amido Stacks repositories links required to create all flavours of projects."))),(0,l.kt)(c.Z,{value:"scaffolding_cli",mdxType:"TabItem"},(0,l.kt)("p",null,"The Amido Stacks Scaffolding CLI will be used to create a fully-functional and deployable project from a template, in a variety of flavours."),(0,l.kt)("h4",null,"PROS"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"Provides a guided project creation when generating the preferred project flavour."),(0,l.kt)("li",null,"Enables the creation of all projects in Amido Stacks templates suite."),(0,l.kt)("li",null,"Allows automated personalization of project name, domain model, company name."),(0,l.kt)("li",null,"Removes out the content not needed from the GitHub repository.")),(0,l.kt)("h4",null,"CONS"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"Requires the installation of an extra application.")))),(0,l.kt)("br",null))}k.isMDXComponent=!0}}]);