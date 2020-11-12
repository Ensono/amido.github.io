(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),o=(n(0),n(210)),c=n(217),l=n(218),i={id:"requirements_java_cqrs",title:"Requirements",sidebar_label:"Requirements",hide_title:!1,hide_table_of_contents:!0,description:"Requirements for getting started with the Java Rest API application",keywords:["java","rest","api","cqrs","application","spring boot","swagger","settings","get started"]},s={unversionedId:"workloads/azure/backend/java_cqrs/requirements_java_cqrs",id:"workloads/azure/backend/java_cqrs/requirements_java_cqrs",isDocsHomePage:!1,title:"Requirements",description:"Requirements for getting started with the Java Rest API application",source:"@site/docs/workloads/azure/backend/java_cqrs/requirements_java_cqrs.md",slug:"/workloads/azure/backend/java_cqrs/requirements_java_cqrs",permalink:"/stacks/docs/workloads/azure/backend/java_cqrs/requirements_java_cqrs",version:"current",sidebar_label:"Requirements",sidebar:"docs",previous:{title:"Introduction to the Java REST API application",permalink:"/stacks/docs/workloads/azure/backend/java_cqrs/intro_java_cqrs"},next:{title:"Cosmos DB Emulator",permalink:"/stacks/docs/workloads/azure/backend/java_cqrs/setting_up_cosmos_db_locally_java_cqrs"}},u=[],b={rightToc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c.a,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"windows",mdxType:"TabItem"},Object(o.b)("details",{open:!0},Object(o.b)("summary",null,"Requirements for running the API locally"),Object(o.b)("div",null,Object(o.b)("h5",null,"Mandatory"),Object(o.b)("ul",null,Object(o.b)("li",null,Object(o.b)("a",{href:"https://adoptopenjdk.net/"},"Install Java 11")," and set JAVA_HOME environment variable to the directory java is installed and make sure MAVEN_HOME environment variable is not set"),Object(o.b)("li",null,Object(o.b)("a",{href:"https://aka.ms/cosmosdb-emulator"},"CosmosDB Emulator 2.4.5+")),Object(o.b)("li",null,"An IDE")),Object(o.b)("h5",null,"Optional"),Object(o.b)("ul",null,Object(o.b)("li",null,Object(o.b)("a",{href:"https://www.jetbrains.com/idea/download/#section=windows"},"Intellij"))))),Object(o.b)("br",null)),Object(o.b)(l.a,{value:"macos",mdxType:"TabItem"},Object(o.b)("details",{open:!0},Object(o.b)("summary",null,"Requirements for running the API locally"),Object(o.b)("div",null,Object(o.b)("h5",null,"Mandatory"),Object(o.b)("ul",null,Object(o.b)("li",null,"homebrew"),Object(o.b)("li",null,"azure-cli: brew install azure-cli"),Object(o.b)("li",null,Object(o.b)("a",{href:"https://adoptopenjdk.net/releases.html"},"Install Java 11:"),Object(o.b)("code",null," $ wget https://github.com/AdoptOpenJDK/openjdk11-binaries/releases/download/jdk-11.0.9%2B11.1/OpenJDK11U-jdk_x64_mac_hotspot_11.0.9_11.tar.gz")),Object(o.b)("li",null,"Move to the folder where you downloaded the file and extract it : ",Object(o.b)("code",null," $ tar -xf OpenJDK11U-jdk_x64_mac_hotspot_11.0.9_11.tar.gz")),Object(o.b)("li",null,"Add JAVA to you path: ",Object(o.b)("code",null," $ export PATH=$PWD/OpenJDK11U-jdk_x64/Contents/Home/bin:$PATH")),Object(o.b)("li",null,"An IDE"),Object(o.b)("li",null,"Make sure no environment variables set for MAVEN_HOME"),Object(o.b)("li",null,Object(o.b)("a",{href:"https://aka.ms/cosmosdb-emulator"},"CosmosDB Emulator 2.4.5+"),": Currently the Cosmos emulator can only be run on Windows. If you have an Azure subscription, you are able to use the Azure version instead")),Object(o.b)("h5",null,"Optional"),Object(o.b)("ul",null,Object(o.b)("li",null,"add this to the path to your dotfiles, .bash_profile or .zshrc depending on what shell you are running"),Object(o.b)("li",null,Object(o.b)("a",{href:"https://www.jetbrains.com/idea/download/download-thanks.html?platform=mac&code=IIC"},"Intellij"))))),Object(o.b)("br",null))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The current version of Amido Stacks is using Java 11 (Current LTS, recommended)."))))}d.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,p=b["".concat(c,".").concat(m)]||b[m]||d[m]||o;return n?r.a.createElement(p,l(l({ref:t},s),{},{components:n})):r.a.createElement(p,l({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},213:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},215:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},216:function(e,t,n){"use strict";var a=n(0),r=n(215);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},217:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(216),c=n(213),l=n(51),i=n.n(l),s=37,u=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,b=e.values,d=e.groupId,m=Object(o.a)(),p=m.tabGroupChoices,f=m.setTabGroupChoices,j=Object(a.useState)(l),v=j[0],O=j[1],h=Object(a.useState)(!1),w=h[0],y=h[1];if(null!=d){var g=p[d];null!=g&&g!==v&&b.some((function(e){return e.value===g}))&&O(g)}var _=function(e){O(e),null!=d&&f(d,e)},k=[],q=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},E=function(){y(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",q),window.addEventListener("mousedown",E)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":v===t}),style:w?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),q(e)},onFocus:function(){return _(t)},onClick:function(){_(t),y(!1)},onPointerDown:function(){return y(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},218:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);