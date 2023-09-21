"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[6971],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return k}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,k=p["".concat(c,".").concat(h)]||p[h]||d[h]||s;return n?o.createElement(k,a(a({ref:t},l),{},{components:n})):o.createElement(k,a({ref:t},l))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var u=2;u<s;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1269:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var o=n(7462),r=n(3366),s=(n(7294),n(3905)),a=["components"],i={id:"index",title:"About Ensono Stacks",sidebar_label:"About Ensono Stacks",slug:"/",description:"What is Ensono Stacks and how does it work",keywords:["ensono","stacks","open-source","solution","template"]},c=void 0,u={unversionedId:"index",id:"index",title:"About Ensono Stacks",description:"What is Ensono Stacks and how does it work",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,tags:[],version:"current",frontMatter:{id:"index",title:"About Ensono Stacks",sidebar_label:"About Ensono Stacks",slug:"/",description:"What is Ensono Stacks and how does it work",keywords:["ensono","stacks","open-source","solution","template"]},sidebar:"docs",next:{title:"New Contributions",permalink:"/docs/contributions"}},l={},p=[{value:"What is Ensono Stacks",id:"what-is-ensono-stacks",level:2},{value:"What can you do with Ensono Stacks?",id:"what-can-you-do-with-ensono-stacks",level:2},{value:"Why use Ensono Stacks",id:"why-use-ensono-stacks",level:2},{value:"How does it work",id:"how-does-it-work",level:2}],d={toc:p},h="wrapper";function k(e){var t=e.components,n=(0,r.Z)(e,a);return(0,s.kt)(h,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"what-is-ensono-stacks"},"What is Ensono Stacks"),(0,s.kt)("p",null,"Stacks is an Ensono open-source project that automates the setup of software development projects. Stacks is for software engineers of all kinds who want to create projects quickly."),(0,s.kt)("p",null,"Setting up the infrastructure and frameworks necessary to deliver a software project takes time. A team might spend the first two weeks (sprint 0) making technical decisions, provisioning and configuring environments, pipelines, compute, test frameworks, and more. Stacks automates this setup using infrastructure-as-code to shrink your project's sprint 0 from two weeks to an hour or less."),(0,s.kt)("h2",{id:"what-can-you-do-with-ensono-stacks"},"What can you do with Ensono Stacks?"),(0,s.kt)("p",null,"Most software delivery projects start with a series of technical decisions:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Which cloud provider should I use?"),(0,s.kt)("li",{parentName:"ul"},"What solution architecture do I need to build?"),(0,s.kt)("li",{parentName:"ul"},"What language should I code in?"),(0,s.kt)("li",{parentName:"ul"},"What test framework should I use?"),(0,s.kt)("li",{parentName:"ul"},"What about the CI/CD pipeline?"),(0,s.kt)("li",{parentName:"ul"},"What compute solution should I use?")),(0,s.kt)("p",null,"Your tech choices in these six areas are what Stacks calls a ",(0,s.kt)("em",{parentName:"p"},"Workload"),". For example:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"On Azure (cloud provider)"),(0,s.kt)("li",{parentName:"ul"},"I want to build a REST API (solution architecture)"),(0,s.kt)("li",{parentName:"ul"},"written in Java (language)"),(0,s.kt)("li",{parentName:"ul"},"using JUnit as the test framework"),(0,s.kt)("li",{parentName:"ul"},"and GitLab as the CI/CD pipeline"),(0,s.kt)("li",{parentName:"ul"},"and Alpine for the compute")),(0,s.kt)("p",null,"When you run Ensono Stacks, it presents you with options in each of these six areas. Then, it instantly generates your chosen workload, complete with sample applications and cloud provisioning, if that's what you've selected. Ensono Stacks covers all the technical overhead, so you're ready to start coding. Ensono Stacks currently offers 15 unique workload variations with another 40 planned. Explore ",(0,s.kt)("a",{parentName:"p",href:"../#stacks-selector"},"What can you do with Ensono Stacks?")," to find out more."),(0,s.kt)("h2",{id:"why-use-ensono-stacks"},"Why use Ensono Stacks"),(0,s.kt)("p",null,"Massively shrinking sprint 0 Ensono Stacks gets you productive very quickly. First-time users should be up and running in an hour. Familiar users, with all the required software installed and cloud accounts set up, can get a boiler-plated solution up and running in the cloud in five minutes."),(0,s.kt)("p",null,"But there's more to Ensono Stacks than saving time. Ensono has thought deeply about the technology choices Ensono Stacks offers. Our long experience delivering successful projects means we know which technologies work well and best together. This experience has informed our choices of platforms, services and functions that Ensono Stacks offers, which means that using Ensono Stacks reduces risk. You can be confident that the test frameworks Ensono Stacks offers when building a REST API in Java, the CI/ CD pipelines for your C# event listener, or the compute options for your Node SSR web app will work well."),(0,s.kt)("h2",{id:"how-does-it-work"},"How does it work"),(0,s.kt)("p",null,"Select a workload using the What Can You Do with Ensono Stacks element on the home page to see detailed documentation on how to get started. For a more detailed section on Workloads, please see ",(0,s.kt)("a",{parentName:"p",href:"/docs/workloads/"},"Introduction to workloads"),"."))}k.isMDXComponent=!0}}]);