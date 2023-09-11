"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[2410,4422],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),v=o,f=d["".concat(l,".").concat(v)]||d[v]||u[v]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=v;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},3602:function(e,t,r){r.r(t);var n=r(7294);t.default=function(e){var t=e.next,r=e.prev;return n.useEffect((function(){if(t){var e=document.querySelector("div.pagination-nav__item.pagination-nav__item--next>a");e&&e.style&&(e.style.display="none")}if(r){var n=document.querySelector("div.pagination-nav__item>a");n&&n.style&&(n.style.display="none")}})),n.createElement("div",null)}},6029:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=(r(3602),["components"]),c={id:"developer_patterns_readme",title:"Development Patterns",sidebar_label:"Development Patterns",description:"Development Patterns",keywords:["development","java","backend","server-side"]},l=void 0,p={unversionedId:"developer/developer_patterns_readme",id:"developer/developer_patterns_readme",isDocsHomePage:!1,title:"Development Patterns",description:"Development Patterns",source:"@site/docs/developer/developer_patterns_readme.md",sourceDirName:"developer",slug:"/developer/developer_patterns_readme",permalink:"/docs/developer/developer_patterns_readme",tags:[],version:"current",frontMatter:{id:"developer_patterns_readme",title:"Development Patterns",sidebar_label:"Development Patterns",description:"Development Patterns",keywords:["development","java","backend","server-side"]},sidebar:"docs",previous:{title:"Architecture Overview",permalink:"/docs/workloads/azure/backend/architecture-overview"},next:{title:"Separation of Concerns",permalink:"/docs/developer/java/patterns/java_app_layering"}},s=[],d={toc:s},u="wrapper";function v(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following pages describe in detail how Stacks is developed (see relevant sections for .Net or Java). "),(0,a.kt)("p",null,'As with any active project third party libraries are depended upon to enhance functionality, standardise approaches across the wider community and to reduce boilerplate code or "re-inventing the wheel"; these pages describe how they are used within the context of Stacks.'),(0,a.kt)("p",null,"In addition to this as part of ongoing refactoring activities, code is often reworked to address performance or readability concerns and this too is outlined."))}v.isMDXComponent=!0}}]);