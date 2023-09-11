"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[4999],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||s;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<s;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),r=n(7294),s=n(2389),l=n(9443);var i=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(9521),u=n(6010),c={tabItem:"tabItem_vU9c"};function p(e){var t,n,a,s=e.lazy,l=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,o.lx)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=h[0])?void 0:a.props.value;if(null!==v&&!b.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=i(),w=k.tabGroupChoices,y=k.setTabGroupChoices,N=(0,r.useState)(v),T=N[0],E=N[1],_=[],C=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=w[m];null!=x&&x!==T&&b.some((function(e){return e.value===x}))&&E(x)}var P=function(e){var t=e.currentTarget,n=_.indexOf(t),a=b[n].value;a!==T&&(C(t),E(a),null!=m&&y(m,a))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=_.indexOf(e.currentTarget)+1;n=_[a]||_[0];break;case"ArrowLeft":var r=_.indexOf(e.currentTarget)-1;n=_[r]||_[_.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},f)},b.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,u.Z)("tabs__item",c.tabItem,{"tabs__item--active":T===t}),key:t,ref:function(e){return _.push(e)},onKeyDown:A,onFocus:P,onClick:P},null!=n?n:t)}))),s?(0,r.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,s.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},5830:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),l=n(6396),i=n(8215),o=["components"],u={id:"testcafe_functional_testing",title:"Functional Testing with TestCafe",sidebar_label:"TestCafe - Functional Testing",description:"How to create functional tests with TestCafe",keywords:["TestCafe","tests","testing","functional","template","example","run TestCafe tests","TestCafe report"]},c=void 0,p={unversionedId:"testing/testcafe_functional_testing",id:"testing/testcafe_functional_testing",isDocsHomePage:!1,title:"Functional Testing with TestCafe",description:"How to create functional tests with TestCafe",source:"@site/docs/testing/testcafe_functional_testing.md",sourceDirName:"testing",slug:"/testing/testcafe_functional_testing",permalink:"/docs/testing/testcafe_functional_testing",tags:[],version:"current",frontMatter:{id:"testcafe_functional_testing",title:"Functional Testing with TestCafe",sidebar_label:"TestCafe - Functional Testing",description:"How to create functional tests with TestCafe",keywords:["TestCafe","tests","testing","functional","template","example","run TestCafe tests","TestCafe report"]},sidebar:"docs",previous:{title:"Cypress - Functional Testing",permalink:"/docs/testing/cypress_functional_testing"},next:{title:"Static Code Analysis",permalink:"/docs/testing/testing_static_analysis"}},d=[{value:"TestCafe: Functional tests",id:"testcafe-functional-tests",children:[{value:"Running tests locally",id:"running-tests-locally",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:4},{value:"Example",id:"example",children:[],level:4}],level:3},{value:"Run Tests",id:"run-tests",children:[],level:3}],level:2},{value:"Running tests in Docker",id:"running-tests-in-docker",children:[{value:"Build",id:"build",children:[],level:3},{value:"Run",id:"run",children:[],level:3}],level:2},{value:"Optional: Running tests with Lambdatest",id:"optional-running-tests-with-lambdatest",children:[{value:"Dependencies",id:"dependencies",children:[],level:3},{value:"Settings",id:"settings",children:[],level:3},{value:"Running E2E tests with LambdaTest",id:"running-e2e-tests-with-lambdatest",children:[],level:3}],level:2}],m={toc:d},f="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"TestCafe is no longer supported by stacks. However this is still part of the scaffolding cli for testing and may be removed at a later date"))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://devexpress.github.io/testcafe/"},"TestCafe")," is a Node.js end-to-end open source automation tool that is used to test web applications. It can run your tests on any browser without having to download separate drivers for each browser.\nIt is easy to install, configure and get started without any external libraries or plugins required."),(0,s.kt)("h2",{id:"testcafe-functional-tests"},"TestCafe: Functional tests"),(0,s.kt)("p",null,"Templated sample TestCafe automation framework for PROJECT_NAME, bootstrapped using ",(0,s.kt)("inlineCode",{parentName:"p"},"@amidostacks/scaffolding-cli"),"."),(0,s.kt)("h3",{id:"running-tests-locally"},"Running tests locally"),(0,s.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Ensure that ",(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," and ",(0,s.kt)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npm")," are installed with the versions specified in ",(0,s.kt)("inlineCode",{parentName:"li"},"./package.json")," file."),(0,s.kt)("li",{parentName:"ul"},"Execute the following command to install all dependencies:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Configure your browser:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Ensure you have at least one browser installed on your operating system e.g. Chrome."),(0,s.kt)("li",{parentName:"ul"},"Include the browser name  in  the ",(0,s.kt)("inlineCode",{parentName:"li"},"./.testcaferc.json")," file. e.g.:")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'  "browsers": [\n    "chrome:headless",\n    "firefox:headless"\n  ]\n')),(0,s.kt)("p",null,"At the moment, Chrome is set as the default web browser."),(0,s.kt)("p",null,"To bypass the browser config in the ",(0,s.kt)("inlineCode",{parentName:"p"},"./.testcaferc.json")," config file, simply run passing in the browser arg:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm run test:e2e --chrome\n")),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"https://devexpress.github.io/testcafe/documentation/using-testcafe/common-concepts/browsers/"},"browsers")," for more information."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Configure Environment Variables")),(0,s.kt)("p",null,"TestCafe functional tests are configured to run after successful deployment, so environment variables need to be set."),(0,s.kt)("p",null,"Export the following environment variables."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"- NODE_ENV, \n- APP_BASE_URL: base url to the environment where the web app is deployed,\n- APP_BASE_PATH: path to main page, \n- MENU_API_URL: base url to rest api.\n")),(0,s.kt)("h4",{id:"example"},"Example"),(0,s.kt)(l.Z,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"unix",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"export APP_BASE_PATH=/web/stacks\n"))),(0,s.kt)(i.Z,{value:"windows",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"set APP_BASE_PATH=/web/stacks\n")))),"or use the `./.env` file to specify the default values instead of exporting them locally.",(0,s.kt)("h3",{id:"run-tests"},"Run Tests"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm run test:e2e\n")),(0,s.kt)("p",null,"Run tests in a specific browser:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm run test:e2e --chrome\n")),(0,s.kt)("p",null,"This should launch TestCafe and run the tests in the browsers specified in ",(0,s.kt)("inlineCode",{parentName:"p"},"./.testcaferc.json")," in the headless mode."),(0,s.kt)("h2",{id:"running-tests-in-docker"},"Running tests in Docker"),(0,s.kt)("p",null,"In order to be able to run these tests across environments and as part of CI, we need to use Docker to run them."),(0,s.kt)("h3",{id:"build"},"Build"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,s.kt)("h3",{id:"run"},"Run"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull testcafe/testcafe:latest\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -e APP_BASE_URL=$APP_BASE_URL -e APP_BASE_PATH=$APP_BASE_PATH -e MENU_API_URL=$MENU_API_URL -e NODE_ENV=$NODE_ENV -it -v $(pwd):/tests testcafe/testcafe chromium /**/*.test.cf.ts   \n")),(0,s.kt)("h2",{id:"optional-running-tests-with-lambdatest"},"Optional: Running tests with Lambdatest"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.lambdatest.com"},"Lambdatest")," is a cloud-based cross browser testing tool that allows to check the web application functionality and other dependencies across various browsers over the internet."),(0,s.kt)("h3",{id:"dependencies"},"Dependencies"),(0,s.kt)("p",null,"An active ",(0,s.kt)("a",{parentName:"p",href:"https://accounts.lambdatest.com/dashboard"},"Lambdatest")," Account"),(0,s.kt)("h3",{id:"settings"},"Settings"),(0,s.kt)("p",null,"Export ",(0,s.kt)("a",{parentName:"p",href:"https://www.lambdatest.com/support/docs/npm-plugin-for-testcafe-integration-with-lambdatest/"},"Lambdatest Credentials")," as following: "),(0,s.kt)(l.Z,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"unix",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"export LT_USERNAME= {your lambdatest username}\nexport LT_ACCESS_KEY= {your lambdatest access_key}\n"))),(0,s.kt)(i.Z,{value:"windows",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"set LT_USERNAME= {your lambdatest username}\nset LT_ACCESS_KEY= {your lambdatest access_key}\n")))),(0,s.kt)("h3",{id:"running-e2e-tests-with-lambdatest"},"Running E2E tests with LambdaTest"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'npm run test:e2e -- "lambdatest:IE@11.0:Windows 10"\n')),(0,s.kt)("p",null,"Lambdatest will create a tunnel to run the tests and automatically record videos."),(0,s.kt)("br",null),"The full list of browser configuration available can be found by running the following in the root:",(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"node_modules/.bin/testcafe -b lambdatest\n")))}h.isMDXComponent=!0}}]);