"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[9273,4422,8689],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),p=o,m=d["".concat(u,".").concat(p)]||d[p]||f[p]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3697:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var n=r(7294),o=r(2004),a="playerSection_1ZCf",i="playerWrapper_166A",c="player_1MjL";var u=function(e){var t=e.url;return n.createElement("div",{className:a},n.createElement("div",{className:i},n.createElement(o.Z,{className:c,url:t,controls:!0,width:"100%",height:"100%",config:{}})))}},3602:function(e,t,r){r.r(t);var n=r(7294);t.default=function(e){var t=e.next,r=e.prev;return n.useEffect((function(){if(t){var e=document.querySelector("div.pagination-nav__item.pagination-nav__item--next>a");e&&e.style&&(e.style.display="none")}if(r){var n=document.querySelector("div.pagination-nav__item>a");n&&n.style&&(n.style.display="none")}})),n.createElement("div",null)}},2815:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return f},toc:function(){return d},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=r(3602),c=r(3697),u=["components"],l={id:"introduction",title:"Infrastructure Introduction",sidebar_label:"Introduction",hide_table_of_contents:!0,description:"Initial configuration for Stacks workloads",keywords:["terraform","configuration","cloud provider","documentation"]},s=void 0,f={unversionedId:"infrastructure/introduction",id:"infrastructure/introduction",isDocsHomePage:!1,title:"Infrastructure Introduction",description:"Initial configuration for Stacks workloads",source:"@site/docs/infrastructure/introduction.md",sourceDirName:"infrastructure",slug:"/infrastructure/introduction",permalink:"/docs/infrastructure/introduction",tags:[],version:"current",frontMatter:{id:"introduction",title:"Infrastructure Introduction",sidebar_label:"Introduction",hide_table_of_contents:!0,description:"Initial configuration for Stacks workloads",keywords:["terraform","configuration","cloud provider","documentation"]},sidebar:"docs",previous:{title:"Workloads on AWS",permalink:"/docs/workloads/aws/workloads_aws_readme"},next:{title:"Core Infrastructure",permalink:"/docs/infrastructure/azure/core_infrastructure"}},d=[{value:"Terraform",id:"terraform",children:[],level:2}],p={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All Stacks workloads require initial configuration of the cloud provider and some core infrastructure."),(0,a.kt)(c.default,{url:"https://vimeo.com/486755365",mdxType:"ResponsivePlayer"}),(0,a.kt)("h2",{id:"terraform"},"Terraform"),(0,a.kt)("p",null,"All infrastructure tooling is done with ",(0,a.kt)("a",{parentName:"p",href:"https://www.terraform.io/"},"Terraform"),", as a method for implementing infrastructure as code. Terraform uses workspaces as the main mechanism of segregating states."),(0,a.kt)("p",null,"All the modules used by stacks are documented and maintained ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/amido/stacks-terraform"},"here")),(0,a.kt)(i.default,{next:!0,mdxType:"HideNavigation"}),(0,a.kt)(i.default,{prev:!0,mdxType:"HideNavigation"}))}m.isMDXComponent=!0}}]);