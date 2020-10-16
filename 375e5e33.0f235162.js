(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{123:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var s=n(0),r=n.n(s);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=s,h=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(h,a(a({ref:t},c),{},{components:n})):r.a.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var s=n(2),r=n(6),o=(n(0),n(123)),i={id:"visual_analysis",title:"Automated UI Visual Testing With Applitools",sidebar_label:"Automated UI Visual Testing"},a={unversionedId:"testing/visual_analysis",id:"testing/visual_analysis",isDocsHomePage:!1,title:"Automated UI Visual Testing With Applitools",description:"Applitools: Visual tests",source:"@site/docs/testing/applitools_automated_ui_visual_testing.md",slug:"/testing/visual_analysis",permalink:"/stacks/docs/testing/visual_analysis",editUrl:"https://github.com/amido/stacks/docs/testing/applitools_automated_ui_visual_testing.md",version:"current",sidebar_label:"Automated UI Visual Testing",sidebar:"docs",previous:{title:"Testing - Static Code Analysis",permalink:"/stacks/docs/testing/testing_static"},next:{title:"Automated Accessibility Testing With Axe",permalink:"/stacks/docs/testing/accessibility_testing"}},l=[{value:"Applitools: Visual tests",id:"applitools-visual-tests",children:[{value:"Getting started",id:"getting-started",children:[]},{value:"How to run the tests locally",id:"how-to-run-the-tests-locally",children:[]},{value:"Where Applitools tests should be located",id:"where-applitools-tests-should-be-located",children:[]}]}],c={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(s.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"applitools-visual-tests"},"Applitools: Visual tests"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Keywords: visual regression testing, browser support, cross-browser")),Object(o.b)("p",null,"We are using the ",Object(o.b)("a",Object(s.a)({parentName:"p"},{href:"https://applitools.com/"}),"Applitools")," with Cypress for visual testing. For Stacks, we are just using the free tier. But we suggest discussing your requirements and what this means for your team. The free tier only gives:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"1 user (normally the pipeline)"),Object(o.b)("li",{parentName:"ul"},"100 checkpoints per month")),Object(o.b)("p",null,"Eyes-Cypress ships with official type declarations for TypeScript. This allows\nyou to add eyes commands to your TypeScript tests. The configuration file has\nbeen added to the ",Object(o.b)("inlineCode",{parentName:"p"},"[tsconfig.cypress.json](./tsconfig.cypress.json)"),"."),Object(o.b)("h3",{id:"getting-started"},"Getting started"),Object(o.b)("p",null,"In order run Cypress with Applitools, you will need an ",Object(o.b)("a",Object(s.a)({parentName:"p"},{href:"https://applitools.com/"}),"Applitools")," account. Once signed up (there is a free tier), the API key can be used to create a connection with Applitools."),Object(o.b)("p",null,"Please follow the incredible ",Object(o.b)("a",Object(s.a)({parentName:"p"},{href:"https://applitools.com/tutorials/cypress.html"}),"Cypress Tutorial")," for how Applitools and Cypress go together like pumpkin and pie."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"export APPLITOOLS_API_KEY=")),Object(o.b)("h3",{id:"how-to-run-the-tests-locally"},"How to run the tests locally"),Object(o.b)("p",null,"To spin up the server locally, running Cypress headless, use:\n",Object(o.b)("inlineCode",{parentName:"p"},"npm run test:cypress:eyes"),". This is the same for running in CI pipelines."),Object(o.b)("h3",{id:"where-applitools-tests-should-be-located"},"Where Applitools tests should be located"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"*.test.eyes.cy.ts")," tests are located with the page compositions (a composition is several components that may come together to form a page)."))}p.isMDXComponent=!0}}]);