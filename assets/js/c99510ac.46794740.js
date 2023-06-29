"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[2372],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return v}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,v=d["".concat(u,".").concat(p)]||d[p]||m[p]||o;return n?a.createElement(v,l(l({ref:t},c),{},{components:n})):a.createElement(v,l({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),o=n(2389),l=n(9443);var i=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(9521),s=n(6010),c={tabItem:"tabItem_vU9c"};function d(e){var t,n,a,o=e.lazy,l=e.block,d=e.defaultValue,m=e.values,p=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),h=(0,u.lx)(k,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=i(),y=w.tabGroupChoices,g=w.setTabGroupChoices,j=(0,r.useState)(b),_=j[0],O=j[1],E=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var T=y[p];null!=T&&T!==_&&k.some((function(e){return e.value===T}))&&O(T)}var I=function(e){var t=e.currentTarget,n=E.indexOf(t),a=k[n].value;a!==_&&(x(t),O(a),null!=p&&g(p,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},v)},k.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,className:(0,s.Z)("tabs__item",c.tabItem,{"tabs__item--active":_===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:D,onFocus:I,onClick:I},null!=n?n:t)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function m(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},5415:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=n(6396),i=n(8215),u=["components"],s={id:"requirements_java",title:"Requirements",sidebar_label:"Requirements",hide_title:!1,hide_table_of_contents:!0,description:"Requirements for getting started with the Java Rest API application",keywords:["java","rest","api","application","spring boot","swagger","settings","get started"]},c=void 0,d={unversionedId:"workloads/azure/backend/java/requirements_java",id:"workloads/azure/backend/java/requirements_java",isDocsHomePage:!1,title:"Requirements",description:"Requirements for getting started with the Java Rest API application",source:"@site/docs/workloads/azure/backend/java/requirements_java.md",sourceDirName:"workloads/azure/backend/java",slug:"/workloads/azure/backend/java/requirements_java",permalink:"/docs/workloads/azure/backend/java/requirements_java",tags:[],version:"current",frontMatter:{id:"requirements_java",title:"Requirements",sidebar_label:"Requirements",hide_title:!1,hide_table_of_contents:!0,description:"Requirements for getting started with the Java Rest API application",keywords:["java","rest","api","application","spring boot","swagger","settings","get started"]},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/workloads/common/backend/java/intro_java"},next:{title:"Cosmos DB Emulator",permalink:"/docs/workloads/azure/backend/java/setting_up_cosmos_db_locally_java"}},m=[],p={toc:m},v="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)(v,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("details",{open:!0},(0,o.kt)("summary",null,"Requirements for running the API locally"),(0,o.kt)("div",null,(0,o.kt)("h5",null,"Mandatory"),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("a",{href:"https://adoptopenjdk.net/"},"Install Java 11")," and set JAVA_HOME environment variable to the directory java is installed and make sure MAVEN_HOME environment variable is not set"),(0,o.kt)("li",null,(0,o.kt)("a",{href:"https://aka.ms/cosmosdb-emulator"},"CosmosDB Emulator 2.4.5+")),(0,o.kt)("li",null,"An IDE")),(0,o.kt)("h5",null,"Optional"),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("a",{href:"https://www.jetbrains.com/idea/download/#section=windows"},"IntelliJ IDEA"))))),(0,o.kt)("br",null)),(0,o.kt)(i.Z,{value:"macos",mdxType:"TabItem"},(0,o.kt)("details",{open:!0},(0,o.kt)("summary",null,"Requirements for running the API locally"),(0,o.kt)("div",null,(0,o.kt)("h5",null,"Mandatory"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"homebrew"),(0,o.kt)("li",null,"azure-cli: brew install azure-cli"),(0,o.kt)("li",null,(0,o.kt)("a",{href:"https://adoptopenjdk.net/releases.html"},"Install Java 11:")," ",(0,o.kt)("code",null," $ wget https://github.com/AdoptOpenJDK/openjdk11-binaries/releases/download/jdk-11.0.9%2B11.1/OpenJDK11U-jdk_x64_mac_hotspot_11.0.9_11.tar.gz")),(0,o.kt)("li",null,"Move to the folder where you downloaded the file and extract it :",(0,o.kt)("code",null," $ tar -xf OpenJDK11U-jdk_x64_mac_hotspot_11.0.9_11.tar.gz")),(0,o.kt)("li",null,"Add JAVA to you path: ",(0,o.kt)("code",null," export PATH=$PWD/OpenJDK11U-jdk_x64/Contents/Home/bin:$PATH")),(0,o.kt)("li",null,"An IDE"),(0,o.kt)("li",null,"Make sure no environment variables set for MAVEN_HOME"),(0,o.kt)("li",null,(0,o.kt)("a",{href:"https://aka.ms/cosmosdb-emulator"},"CosmosDB Emulator 2.4.5+"))),(0,o.kt)("h5",null,"Optional"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Add this to the path to your dotfiles: .bash_profile or .zshrc depending on what shell you are running"),(0,o.kt)("li",null,(0,o.kt)("a",{href:"https://www.jetbrains.com/idea/download/download-thanks.html?platform=mac&code=IIC"},"IntelliJ IDEA"))))),(0,o.kt)("br",null))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The current version of Amido Stacks is using Java 11 (Current LTS, recommended)."))))}f.isMDXComponent=!0}}]);