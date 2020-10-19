(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{140:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,b=u["".concat(i,".").concat(f)]||u[f]||p[f]||a;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(2),o=n(6),a=(n(0),n(140)),i={id:"intro_node_js",title:"Introduction",sidebar_label:"Introduction"},c={unversionedId:"workloads/azure/frontend/intro_node_js",id:"workloads/azure/frontend/intro_node_js",isDocsHomePage:!1,title:"Introduction",description:"What",source:"@site/docs/workloads/azure/frontend/intro_node_js.md",slug:"/workloads/azure/frontend/intro_node_js",permalink:"/stacks/docs/workloads/azure/frontend/intro_node_js",editUrl:"https://github.com/amido/stacks/docs/workloads/azure/frontend/intro_node_js.md",version:"current",sidebar_label:"Introduction",sidebar:"docs",previous:{title:"Introduction to workloads",permalink:"/stacks/docs/workloads/workloads"},next:{title:"IDE Setup",permalink:"/stacks/docs/workloads/azure/frontend/ide_node_js"}},s=[{value:"What",id:"what",children:[]},{value:"Why",id:"why",children:[]},{value:"CSR vs SSR",id:"csr-vs-ssr",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"what"},"What"),Object(a.b)("p",null,"The frontend consists of either CSR or SSR React application, showcasing best coding practices and tooling to develop a fast, scalable frontend application."),Object(a.b)("h2",{id:"why"},"Why"),Object(a.b)("p",null,"Every new project exists to solve a unique challenge but requires common\nbuilding blocks to get up and running."),Object(a.b)("p",null,"Traditional approaches require clients to use a single, specific templating\nmodel that is quick to set up but too rigid to allow development of the ideal\nsolution."),Object(a.b)("p",null,"Amido Stacks brings 10 years of client expertise to every project, providing\nfast, flexible, bespoke value in an accelerated environment."),Object(a.b)("h2",{id:"csr-vs-ssr"},"CSR vs SSR"),Object(a.b)("p",null,"Picking on wether to go CSR and SSR will depend on the project at hand, usually if SEO is of high priority (Ecommerce for example) using SSR is the recomended aproach."))}d.isMDXComponent=!0}}]);