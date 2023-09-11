"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[6915],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8021:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={},s=void 0,p={unversionedId:"getting_started/next/init",id:"getting_started/next/init",isDocsHomePage:!1,title:"init",description:"@ensono-stacks/next:init",source:"@site/docs/getting_started/next/init.md",sourceDirName:"getting_started/next",slug:"/getting_started/next/init",permalink:"/docs/getting_started/next/init",tags:[],version:"current",frontMatter:{}},c=[{value:"@ensono-stacks/next:init",id:"ensono-stacksnextinit",children:[],level:3},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Command line arguments",id:"command-line-arguments",children:[],level:3},{value:"Generator Output",id:"generator-output",children:[],level:3}],level:2}],u={toc:c},d="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"ensono-stacksnextinit"},"@ensono-stacks/next:init"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Adds custom config and developer tools to an existing next application"),(0,i.kt)("p",null,"The next init generator will add a custom ESlint config to an existing NextJs application, install ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint-plugin-testing-library")," to the project. as well as update project.json with a custom test config to allow coverage collection from ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"jest"),"."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"An existing ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next")," application"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nx g @ensono-stacks/next:init\n")),(0,i.kt)("h3",{id:"command-line-arguments"},"Command line arguments"),(0,i.kt)("p",null,"The following command line arguments are available:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--project"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the existing next application"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"nameOfApplication"),(0,i.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,i.kt)("h3",{id:"generator-output"},"Generator Output"),(0,i.kt)("p",null,"The following files will be updated."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"UPDATE apps/baseline-next-app/project.json #Updated with custom test config to allow for coverage collection\nUPDATE apps/baseline-next-app/.eslintrc.json #Ehanced with additional linting rules\nUPDATE apps/baseline-next-app/tsconfig.json #Minor enhancements\nUPDATE apps/baseline-next-app/tsconfig.spec.json #Updates for monorepo structure\nUPDATE apps/baseline-next-app/specs/index.spec.tsx #Formatting changes\n")),(0,i.kt)("p",null,"The generator will also add ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dequelabs/axe-core-npm/blob/develop/packages/react/README.md"},"react-axe")," (version 4.7.3) into the app via the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="...app.tsx"',title:'"...app.tsx"'},"// @ts-ignore\nif (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {\n    // eslint-disable-next-line global-require\n    const axe = require('@axe-core/react'); // eslint-disable-line @typescript-eslint/no-var-requires\n    // eslint-disable-next-line global-require\n    const React = require('react'); // eslint-disable-line @typescript-eslint/no-var-requires\n    // eslint-disable-next-line global-require\n    const ReactDOM = require('react-dom'); // eslint-disable-line @typescript-eslint/no-var-requires\n    // eslint-disable-next-line @typescript-eslint/no-floating-promises\n    axe(React, ReactDOM, 1000);\n}\n\n...\n")),(0,i.kt)("p",null,"react-axe has been added so your app can be tested for accessibility and results will show in the Chrome DevTools console."),(0,i.kt)("p",null,"A final message is provided if the developer would like to run the relevant deployment generator that supports this FE.\n",(0,i.kt)("inlineCode",{parentName:"p"},"@ensono-stacks/next:init-deployment"),".")))}m.isMDXComponent=!0}}]);