"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[8668],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3331:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s=void 0,p={unversionedId:"nx/azure-node/app-insights-deployment",id:"nx/azure-node/app-insights-deployment",isDocsHomePage:!1,title:"app-insights-deployment",description:"@ensono-stacks/azure-node:app-insights-deployment",source:"@site/docs/nx/azure-node/app-insights-deployment.md",sourceDirName:"nx/azure-node",slug:"/nx/azure-node/app-insights-deployment",permalink:"/docs/nx/azure-node/app-insights-deployment",tags:[],version:"current",frontMatter:{}},u=[{value:"@ensono-stacks/azure-node:app-insights-deployment",id:"ensono-stacksazure-nodeapp-insights-deployment",children:[],level:3},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Command line arguments",id:"command-line-arguments",children:[],level:3},{value:"Generator Output",id:"generator-output",children:[],level:3}],level:2}],c={toc:u},d="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"ensono-stacksazure-nodeapp-insights-deployment"},"@ensono-stacks/azure-node:app-insights-deployment"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Configure Deployment & Infra for application insights"),(0,i.kt)("p",null,"This generator will make sure your dockerfile is using the custom server, and your environment variable is set."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Requires an existing application with deployment code already generated for it"),(0,i.kt)("li",{parentName:"ul"},"Requires the APPLICATIONINSIGHTS_CONNECTION_STRING secret to exist")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nx generate @ensono-stacks/azure-node:app-insights-deployment\n")),(0,i.kt)("h3",{id:"command-line-arguments"},"Command line arguments"),(0,i.kt)("p",null,"The following command line arguments are available:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--project"),(0,i.kt)("td",{parentName:"tr",align:null},"Target project name."),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--applicationinsightsConnectionString"),(0,i.kt)("td",{parentName:"tr",align:null},"The env variable that stores the app insights connection string."),(0,i.kt)("td",{parentName:"tr",align:null},"string")))),(0,i.kt)("h3",{id:"generator-output"},"Generator Output"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Updates ",(0,i.kt)("inlineCode",{parentName:"li"},"targets")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"project.json"),"."),(0,i.kt)("li",{parentName:"ul"},"Updates ",(0,i.kt)("inlineCode",{parentName:"li"},"pipline stages")," to make sure env variables are passed down"),(0,i.kt)("li",{parentName:"ul"},"Updates ",(0,i.kt)("inlineCode",{parentName:"li"},"Dockerfile")," if necessary to make sure it uses the custom server"))))}m.isMDXComponent=!0}}]);