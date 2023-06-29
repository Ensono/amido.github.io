"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[1447],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,d=u["".concat(p,".").concat(g)]||u[g]||m[g]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},714:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},p=void 0,c={unversionedId:"nx/playwright/init",id:"nx/playwright/init",isDocsHomePage:!1,title:"init",description:"@ensono-stacks/playwright:init",source:"@site/docs/nx/playwright/init.md",sourceDirName:"nx/playwright",slug:"/nx/playwright/init",permalink:"/docs/nx/playwright/init",tags:[],version:"current",frontMatter:{}},s=[{value:"@ensono-stacks/playwright:init",id:"ensono-stacksplaywrightinit",children:[],level:3},{value:"Usage",id:"usage",children:[{value:"Command line arguments",id:"command-line-arguments",children:[],level:3},{value:"Generator Output",id:"generator-output",children:[],level:3}],level:2}],u={toc:s},m="wrapper";function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"ensono-stacksplaywrightinit"},"@ensono-stacks/playwright:init"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Create a playwright test project for your chosen application"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"init")," generator creates a playwright project for the application you choose."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nx g @ensono-stacks/playwright:init\n")),(0,i.kt)("p",null,"Upon calling the ",(0,i.kt)("em",{parentName:"p"},"init")," generator you will be presented with the following question:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What app would you like to generate a test project for?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The name of the existing application to generate a test project for (named <app-name",">","-e2e)")))),(0,i.kt)("h3",{id:"command-line-arguments"},"Command line arguments"),(0,i.kt)("p",null,"The following command line arguments are available:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--project"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the application to generate a test project for"),(0,i.kt)("td",{parentName:"tr",align:null},"string")))),(0,i.kt)("h3",{id:"generator-output"},"Generator Output"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"init")," generator will create a new test project for your chosen application containing an example test and predefined configuration for the monorepo and the individual test projects.\nBy default the ",(0,i.kt)("em",{parentName:"p"},"init")," generator will configure both a baseline playwright configuration and an individual project base playwright configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Generated files"',title:'"Generated','files"':!0},".\n\u251c\u2500\u2500 apps\n\u2502   \u251c\u2500\u2500 <app-name>-e2e\n\u2502   \u2502   \u251c\u2500\u2500 src\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 example.spec.ts #Example tests using playwright\n\u2502   \u2502   \u251c\u2500\u2500 playwright.config.ts #Example playwright configuration catering for multiple browsers and devices\n\u2502   \u2502   \u251c\u2500\u2500 project.json #Configuration for the project, including various NX targets\n\u2502   \u2502   \u251c\u2500\u2500 tsconfig.e2e.json #E2E typscript config file\n\u2502   \u2502   \u251c\u2500\u2500 tsconfig.json #typscript config file\n\u2502   \u2502   \u251c\u2500\u2500 .eslintrc.json #Linting configuration for the e2e project\n\u2514\u2500\u2500 playwright.config.base.ts\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Visit the ",(0,i.kt)("a",{parentName:"p",href:"/docs/testing/testing_in_nx/testing_with_playwright"},(0,i.kt)("inlineCode",{parentName:"a"},"Testing with Playwright"))," documentation for further details!")))))}g.isMDXComponent=!0}}]);