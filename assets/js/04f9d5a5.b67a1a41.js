"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[6654],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),g=s,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,r=new Array(a);r[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:s,r[1]=o;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2549:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var i=n(7462),s=n(3366),a=(n(7294),n(3905)),r=["components"],o={id:"frontend_testing_in_nx",title:"Frontend Testing in an Nx monorepo",sidebar_label:"Frontend Testing in an Nx monorepo",description:"Considerations for testing within an Nx monorepo",keywords:["Nx","testing","playwright","cypress","accessibility testing","visual regression testing","monorepo"]},l=void 0,c={unversionedId:"testing/testing_in_nx/frontend_testing_in_nx",id:"testing/testing_in_nx/frontend_testing_in_nx",isDocsHomePage:!1,title:"Frontend Testing in an Nx monorepo",description:"Considerations for testing within an Nx monorepo",source:"@site/docs/testing/testing_in_nx/frontend_testing_in_nx.md",sourceDirName:"testing/testing_in_nx",slug:"/testing/testing_in_nx/frontend_testing_in_nx",permalink:"/docs/testing/testing_in_nx/frontend_testing_in_nx",tags:[],version:"current",frontMatter:{id:"frontend_testing_in_nx",title:"Frontend Testing in an Nx monorepo",sidebar_label:"Frontend Testing in an Nx monorepo",description:"Considerations for testing within an Nx monorepo",keywords:["Nx","testing","playwright","cypress","accessibility testing","visual regression testing","monorepo"]},sidebar:"docs",previous:{title:"Stacks Testing Frameworks",permalink:"/docs/testing/cli_testing_frameworks"},next:{title:"Testing with playwright",permalink:"/docs/testing/testing_in_nx/testing_with_playwright"}},p=[{value:"Getting Started",id:"getting-started",children:[{value:"Selecting your test framework",id:"selecting-your-test-framework",children:[],level:3},{value:"Accessibility Testing",id:"accessibility-testing",children:[],level:3},{value:"Visual Regression Testing",id:"visual-regression-testing",children:[],level:3}],level:2}],d={toc:p},u="wrapper";function g(e){var t=e.components,n=(0,s.Z)(e,r);return(0,a.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Using ",(0,a.kt)("a",{parentName:"p",href:"https://nx.dev/"},"Nx")," provides many benefits when working with SSR or CSR frontend applications. When using ",(0,a.kt)("a",{parentName:"p",href:"/docs/nx/nx_stacks"},"stacks to scaffold an Nx monorepo")," you will be provided with several options to assure quality in your development process."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"To leverage stacks and accelerate your testing process within your Nx monorepo you need to have a preexisting Nx workspace. See the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/nx/nx_stacks#set-up-your-stacks-workspace"},'"Setting up your stacks workspace"'))," to get started!"),(0,a.kt)("h3",{id:"selecting-your-test-framework"},"Selecting your test framework"),(0,a.kt)("p",null,"We recommend and currently support Playwright within the stacks workflow, with it\u2019s Microsoft backing, extensive feature set and fast cross-browser web automation capability, it is our preferred tooling choice. Cypress is also a powerful testing framework which has a significant user base, as such this is also supported by ",(0,a.kt)("inlineCode",{parentName:"p"},"@ensono-stacks"),"."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Visit the ",(0,a.kt)("a",{parentName:"p",href:"/docs/nx/playwright/ensono-stacks-playwright"},(0,a.kt)("inlineCode",{parentName:"a"},"Playwright"))," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/nx/cypress/ensono-stacks-cypress"},(0,a.kt)("inlineCode",{parentName:"a"},"Cypress"))," Stacks plugins to start testing!"))),(0,a.kt)("h3",{id:"accessibility-testing"},"Accessibility Testing"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Why accessibility test?"),(0,a.kt)("div",null,(0,a.kt)("p",null,"Accessibility testing is a critical aspect of website and application development that ensures that everyone, including those with disabilities or impairments, can fully access and use the site or app. It is not only a legal requirement, but also a moral and ethical one, to ensure that digital products are inclusive and usable by all."),(0,a.kt)("p",null,"This type of testing identifies and addresses any barriers that would make it difficult or impossible for some users to access the site or app, such as poor contrast, small text, or lack of alternative text for images. By catching these issues early in the development process, developers can ensure that their website or application is user-friendly for everyone and compliant with the regulations like WCAG and Section 508 that are legally binding in certain regions."),(0,a.kt)("p",null,"Automated accessibility tooling can consistently and efficiently check for accessibility issues across different pages and sections of a website or application and identify potential accessibility issues. Integrating into Continuous Integration/Continuous Deployment (CI/CD) pipelines enables accessibility testing to be performed as part of the development process, ensuring that issues are identified and addressed early on."))),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/docs/nx/playwright/ensono-stacks-playwright#ensono-stacksplaywrightaccessibility"},(0,a.kt)("inlineCode",{parentName:"a"},"@ensono-stacks/playwright:accessibility"))," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/nx/cypress/ensono-stacks-cypress#ensono-stackscypressaccessibility"},(0,a.kt)("inlineCode",{parentName:"a"},"@ensono-stacks/cypress:accessibility"))," generators enable you to add Axe accessibility tests to your application, if you would prefer an alternative to axe, then simply use an alternative plugin within your workspace!"),(0,a.kt)("h3",{id:"visual-regression-testing"},"Visual Regression Testing"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Why visual regression test?"),(0,a.kt)("div",null,(0,a.kt)("p",null,"Visual regression testing is a crucial step in the website and application development process. It ensures that the visual elements of the site or app are functioning correctly and are consistent across different browsers, devices, and screen sizes. This type of testing involves taking screenshots of a website or application, and then comparing them to previous versions or reference screenshots to identify any differences. By catching visual bugs early on in the development process, visual regression testing helps to prevent costly and time-consuming rework, and ensures that the end user has a consistent and polished experience."),(0,a.kt)("p",null,"Visual regression testing can be automated which save a lot of time and effort compared to manual testing. Automated visual testing enables the developers to run many test cases in a very short time, which is not possible with manual testing."))),(0,a.kt)("p",null,"If you are considering adding visual regression tests to your application, then we provide two options with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/nx/playwright/ensono-stacks-playwright#ensono-stacksplaywrightvisual-regression"},(0,a.kt)("inlineCode",{parentName:"a"},"@ensono-stacks/playwright:visual-regression"))," generator:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Applitools eyes",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A powerful visual regression testing tool that detects visual changes, updates of browsers or OS, and integrates with popular testing frameworks and CI/CD pipelines, making it easy to automate visual regression testing and improve the quality and user-friendliness of digital products. Our community of experts recommend this software as the best approach, to decide if it is right for you, please visit ",(0,a.kt)("a",{parentName:"li",href:"https://applitools.com/platform/eyes/"},"Applitools Eyes!")))),(0,a.kt)("li",{parentName:"ul"},"Native",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A free alternative to cloud-based providers which enables developers to perform automated visual regression testing using the latest web platform features in their chosen testing framework.")))),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"We do not currently support visual testing with Stacks using our ",(0,a.kt)("inlineCode",{parentName:"p"},"@ensono-stacks/cypress")," plugin"))))}g.isMDXComponent=!0}}]);