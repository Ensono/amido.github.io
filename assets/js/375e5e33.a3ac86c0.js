"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[6797],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var s=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,g=c["".concat(l,".").concat(h)]||c[h]||d[h]||o;return n?s.createElement(g,a(a({ref:t},u),{},{components:n})):s.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:i,a[1]=r;for(var p=2;p<o;p++)a[p]=n[p];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6652:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return u}});var s=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],r={id:"visual_analysis",title:"Automated UI Visual Testing With Applitools",sidebar_label:"Automated UI Visual Testing",description:"How to run tests with Applitools",keywords:["cypress","tests","testing","applitools","visual analysis"]},l=void 0,p={unversionedId:"testing/visual_analysis",id:"testing/visual_analysis",isDocsHomePage:!1,title:"Automated UI Visual Testing With Applitools",description:"How to run tests with Applitools",source:"@site/docs/testing/applitools_automated_ui_visual_testing.md",sourceDirName:"testing",slug:"/testing/visual_analysis",permalink:"/docs/testing/visual_analysis",tags:[],version:"current",frontMatter:{id:"visual_analysis",title:"Automated UI Visual Testing With Applitools",sidebar_label:"Automated UI Visual Testing",description:"How to run tests with Applitools",keywords:["cypress","tests","testing","applitools","visual analysis"]},sidebar:"docs",previous:{title:"Static Code Analysis",permalink:"/docs/testing/testing_static_analysis"},next:{title:"API Contract Testing With Pact",permalink:"/docs/testing/contract_testing_pact"}},u=[{value:"Visual Regression Testing with Applitools Eyes",id:"visual-regression-testing-with-applitools-eyes",children:[{value:"Pre-requisites",id:"pre-requisites",children:[],level:3}],level:2},{value:"Getting started",id:"getting-started",children:[{value:"Running Applitools in Cypress",id:"running-applitools-in-cypress",children:[],level:3},{value:"How to run the tests locally",id:"how-to-run-the-tests-locally",children:[],level:3},{value:"Where Applitools tests should be located",id:"where-applitools-tests-should-be-located",children:[],level:3}],level:2}],c={toc:u},d="wrapper";function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)(d,(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We recommend and already have support within ",(0,o.kt)("a",{parentName:"p",href:"/docs/testing/testing_in_nx/playwright_visual_testing_applitools_eyes"},"Playwright for Applitools"),"! Cypress support will also be moving to NX in the near future!"))),(0,o.kt)("p",null,"Visual Regression testing or Visual testing in software is a quality assurance activity of verifying if the visual aspects of the application\u2019s user interface seem appropriate to the user. It is also known as Visual Validation Testing."),(0,o.kt)("p",null,"Visual Regression testing can be implemented using a variety of tools and languages and is a fast way of checking defects of front end applications. For more information on Visual Regression testing you can look at this article ",(0,o.kt)("a",{parentName:"p",href:"https://www.softwaretestinghelp.com/visual-validation-testing/"},"Here")),(0,o.kt)("h2",{id:"visual-regression-testing-with-applitools-eyes"},"Visual Regression Testing with Applitools Eyes"),(0,o.kt)("h3",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("p",null,"An Applitools eyes account - ",(0,o.kt)("a",{parentName:"p",href:"https://applitools.com/"},"Applitools")),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"We are using ",(0,o.kt)("a",{parentName:"p",href:"https://applitools.com/"},"Applitools")," with Cypress for visual testing. For Stacks, we have configured the framework to use the free tier, which gives:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1 user (normally the pipeline)"),(0,o.kt)("li",{parentName:"ul"},"100 checkpoints per month")),(0,o.kt)("p",null,"Eyes-Cypress ships with official type declarations for TypeScript. This allows you to add eyes commands to your TypeScript tests."),(0,o.kt)("p",null,"The configuration file has been added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"[tsconfig.cypress.json](./tsconfig.cypress.json)"),"."),(0,o.kt)("h3",{id:"running-applitools-in-cypress"},"Running Applitools in Cypress"),(0,o.kt)("p",null,"In order run Cypress with Applitools, you will need an ",(0,o.kt)("a",{parentName:"p",href:"https://applitools.com/"},"Applitools")," account. Once signed up (there is a free tier), the API key can be used to create a connection with Applitools."),(0,o.kt)("p",null,"Please follow the nvm ",(0,o.kt)("a",{parentName:"p",href:"https://applitools.com/tutorials/cypress.html"},"Cypress Tutorial")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"`export APPLITOOLS_API_KEY=KEY_VALUE`\n")),(0,o.kt)("h3",{id:"how-to-run-the-tests-locally"},"How to run the tests locally"),(0,o.kt)("p",null,"To spin up the server locally, running Cypress headless, use:\n",(0,o.kt)("inlineCode",{parentName:"p"},"npm run test:cypress:eyes"),". This is the same for running in CI pipelines."),(0,o.kt)("h3",{id:"where-applitools-tests-should-be-located"},"Where Applitools tests should be located"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"*.test.eyes.cy.ts")," tests are located with the page compositions (a composition is several components that may come together to form a page)."))}h.isMDXComponent=!0}}]);