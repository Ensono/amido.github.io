"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[2693,4422,8689],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{Z:function(){return r},b:function(){return a}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var a=n(2263),r=n(3919);function i(){var e=(0,a.Z)().siteConfig,t=void 0===e?{}:e,n=t.baseUrl,i=void 0===n?"/":n,o=t.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,l=void 0!==o&&o,s=i.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(o,i,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),r=n(7294),i=n(2389),o=n(9443);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(9521),u=n(6010),c={tabItem:"tabItem_vU9c"};function p(e){var t,n,a,i=e.lazy,o=e.block,p=e.defaultValue,d=e.values,m=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,s.lx)(k,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==v&&!k.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),y=b.tabGroupChoices,w=b.setTabGroupChoices,N=(0,r.useState)(v),_=N[0],S=N[1],T=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=y[m];null!=x&&x!==_&&k.some((function(e){return e.value===x}))&&S(x)}var P=function(e){var t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==_&&(E(t),S(a),null!=m&&w(m,a))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":o},h)},k.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,className:(0,u.Z)("tabs__item",c.tabItem,{"tabs__item--active":_===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:O,onFocus:P,onClick:P},null!=n?n:t)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function d(e){var t=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},613:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var a=n(7294),r=n(2004),i="playerSection_9Es-",o="playerWrapper_yguh",l="player_P6CU";var s=function(e){var t=e.url;return a.createElement("div",{className:i},a.createElement("div",{className:o},a.createElement(r.Z,{className:l,url:t,controls:!0,width:"100%",height:"100%",config:{}})))}},3602:function(e,t,n){n.r(t);var a=n(7294);t.default=function(e){var t=e.next,n=e.prev;return a.useEffect((function(){if(t){var e=document.querySelector("div.pagination-nav__item.pagination-nav__item--next>a");e&&e.style&&(e.style.display="none")}if(n){var a=document.querySelector("div.pagination-nav__item>a");a&&a.style&&(a.style.display="none")}})),a.createElement("div",null)}},5270:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return h}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=(n(4996),n(6396)),l=n(8215),s=n(3602),u=n(613),c=["components"],p={id:"getting_started_ssr",title:"Getting Started",sidebar_label:"Getting Started",hide_title:!1,hide_table_of_contents:!1,description:"Getting started with SSR",keywords:["rest","api","ssr","cms","integration","framework","configuration","side","rendering","server","server side rendering"]},d=void 0,m={unversionedId:"workloads/azure/frontend-archived/SSR/getting_started_ssr",id:"workloads/azure/frontend-archived/SSR/getting_started_ssr",isDocsHomePage:!1,title:"Getting Started",description:"Getting started with SSR",source:"@site/docs/workloads/azure/frontend-archived/SSR/getting_started_ssr.md",sourceDirName:"workloads/azure/frontend-archived/SSR",slug:"/workloads/azure/frontend-archived/SSR/getting_started_ssr",permalink:"/docs/workloads/azure/frontend-archived/SSR/getting_started_ssr",tags:[],version:"current",frontMatter:{id:"getting_started_ssr",title:"Getting Started",sidebar_label:"Getting Started",hide_title:!1,hide_table_of_contents:!1,description:"Getting started with SSR",keywords:["rest","api","ssr","cms","integration","framework","configuration","side","rendering","server","server side rendering"]}},h=[{value:"Bootstrap your framework",id:"bootstrap-your-framework",children:[{value:"Get developing in just a few questions",id:"get-developing-in-just-a-few-questions",children:[],level:3}],level:2},{value:"Environment Variables",id:"environment-variables",children:[],level:2},{value:"Configure Optional Features",id:"configure-optional-features",children:[],level:2},{value:"Get developing",id:"get-developing",children:[{value:"Development",id:"development",children:[],level:3},{value:"Production",id:"production",children:[],level:3}],level:2},{value:"Implementation details",id:"implementation-details",children:[],level:2},{value:"To build and run using Docker",id:"to-build-and-run-using-docker",children:[{value:"Dockerfile Notes",id:"dockerfile-notes",children:[],level:3}],level:2},{value:"Testing",id:"testing",children:[{value:"Unit, Component and Snapshot Testing",id:"unit-component-and-snapshot-testing",children:[],level:3},{value:"Visual Testing",id:"visual-testing",children:[],level:3},{value:"Accessibility Testing",id:"accessibility-testing",children:[],level:3},{value:"Static Testing",id:"static-testing",children:[],level:3},{value:"Consumer driven contract testing with Pact",id:"consumer-driven-contract-testing-with-pact",children:[],level:3}],level:2},{value:"Customizing",id:"customizing",children:[],level:2},{value:"Feedback",id:"feedback",children:[],level:2}],f={toc:h},k="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)(k,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Web applications require a lot of boilerplate. It's also hard to know how to get started without examples. We offer both server side rendered (SSR) and client side rendered (CSR) solutions that can be bootstrapped and tailored to your current project with just one command."),(0,i.kt)("p",null,"Oh, and they come complete with infrastructure as code so you can deploy on your cloud of choice."),(0,i.kt)("p",null,"Brilliant."),(0,i.kt)(u.default,{url:"https://vimeo.com/486755394",mdxType:"ResponsivePlayer"}),(0,i.kt)("h2",{id:"bootstrap-your-framework"},"Bootstrap your framework"),(0,i.kt)("p",null,"The best way to get started, is bootstrap the framework using the scaffolding-cli from Amido Stacks. By using it in interactive mode, you can simply answered 5 questions to get a bespoke framework, ready to go with an example test."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run to start configuring your solution"',title:'"Run',to:!0,start:!0,configuring:!0,your:!0,'solution"':!0},"npx @amidostacks/scaffolding-cli run -i\n")),(0,i.kt)("h3",{id:"get-developing-in-just-a-few-questions"},"Get developing in just a few questions"),(0,i.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,i.kt)("p",null,"Before you can start developing you will need to replace your environment variables with the appropriated values.\nThis values will be automatically picked up and used by the underlying server and web client."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},' NODE_ENV=development\n PORT=3000\n APP_BASE_URL=http://localhost\n APP_BASE_PATH=""\n')),(0,i.kt)(o.Z,{defaultValue:"linux",values:[{label:"Linux/MacOS",value:"linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"set NODE_ENV=development\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"set PORT=3000\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"set APP_BASE_URL=http://localhost\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'set APP_BASE_PATH=""\n')))),(0,i.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export NODE_ENV=development\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export PORT=3000\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export APP_BASE_URL=http://localhost\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export APP_BASE_PATH=""\n'))))),(0,i.kt)("h2",{id:"configure-optional-features"},"Configure Optional Features"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/workloads/azure/frontend-archived/SSR/identity"},"Auth0")," ",(0,i.kt)("br",null),"\n",(0,i.kt)("a",{parentName:"p",href:"/docs/workloads/azure/frontend-archived/SSR/contentful_integration"},"Contentful")," ",(0,i.kt)("br",null),"\n",(0,i.kt)("a",{parentName:"p",href:"/docs/workloads/azure/frontend-archived/SSR/api_definition_ssr"},"API")," ",(0,i.kt)("br",null)),(0,i.kt)("h2",{id:"get-developing"},"Get developing"),(0,i.kt)("p",null,"Install dependencies (this may take a while, please be patient):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,i.kt)("p",null,"Compile the app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,i.kt)("p",null,"At the end of bootstrapping your example framework, you will have an output that will contain all the:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"dependencies"),(0,i.kt)("li",{parentName:"ul"},"scripts"),(0,i.kt)("li",{parentName:"ul"},"example tests"),(0,i.kt)("li",{parentName:"ul"},"pipelines"),(0,i.kt)("li",{parentName:"ul"},"and information to start testing")),(0,i.kt)("h3",{id:"development"},"Development"),(0,i.kt)("p",null,"If you like to view the github repository , the source code can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/amido/stacks-typescript-ssr"},"here"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/amido/stacks-webapp-template/tree/master/packages/scaffolding-cli/templates/src/ssr"},"https://github.com/amido/stacks-webapp-template/tree/master/packages/scaffolding-cli/templates/src/ssr")),(0,i.kt)("p",null,"Move to the ",(0,i.kt)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/src")," folder and run the next commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="To run locally"',title:'"To',run:!0,'locally"':!0},"npm run start\n")),(0,i.kt)("p",null,"This offers live reload of both server side - ",(0,i.kt)("em",{parentName:"p"},"when using ssr")," - and client side code."),(0,i.kt)("h3",{id:"production"},"Production"),(0,i.kt)("p",null,"Move to the ",(0,i.kt)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/src")," folder and run the next commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start\n")),(0,i.kt)("p",null,"This will start the app in production mode, so you can see how it would behave deployed!"),(0,i.kt)("h2",{id:"implementation-details"},"Implementation details"),(0,i.kt)("p",null,"The template is a Server Side Rendered (SSR) implementation using:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reactjs.org/"},"React.js")," for the user interface (UI)"),(0,i.kt)("li",{parentName:"ul"},"React SSR framework ",(0,i.kt)("a",{parentName:"li",href:"https://nextjs.org/"},"Next.js")),(0,i.kt)("li",{parentName:"ul"},"Nextjs using a\n",(0,i.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/advanced-features/custom-server"},"Custom Server")," with\nNode.js ",(0,i.kt)("a",{parentName:"li",href:"https://expressjs.com/"},"Express.js"))),(0,i.kt)("h2",{id:"to-build-and-run-using-docker"},"To build and run using Docker"),(0,i.kt)("p",null,"  In order to be able to build and run the webapp template, across environments\nand as part of CI, we need to use ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"Docker"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Build from the webapp directory"',title:'"Build',from:!0,the:!0,webapp:!0,'directory"':!0},"docker build ../ -f ./Dockerfile -t stacks-app\n")),(0,i.kt)("p",null,"  Run it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it -p 3000:3000 stacks-app\ndocker run --rm -it -v $(pwd):/app/deployed/src stacks-app:latest /bin/sh\ndocker run --rm -it -v $(pwd):/usr/src sonarsource/sonar-scanner-cli\ndocker run --rm -it -p 3000:3000 stacks-app:latest /bin/sh\n")),(0,i.kt)("p",null,"  Alternatives to running in a container"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'CMD ["pm2-runtime", "--json", "./ecosystem.yml", "--exp-backoff-restart-delay=500", "-a", "--update-env"]\n')),(0,i.kt)("h3",{id:"dockerfile-notes"},"Dockerfile Notes"),(0,i.kt)("p",null,"  Best practice guidelines:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Do not run app under root",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"To maximise cache layer capacity we should copy over package.json into /tmp\nand build there")))),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("h3",{id:"unit-component-and-snapshot-testing"},"Unit, Component and Snapshot Testing"),(0,i.kt)("p",null,"  We are using ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," for running all unit, component,\nintegration and snapshot tests. Jest supports TypeScript via Babel. Because\nTypeScript support in Babel is transpilation, to ensure that Jest will\ntype-check the tests as they are run we use\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kulshekhar/ts-jest"},"ts-jest"),"."),(0,i.kt)("p",null,"  To help that encourage good testing practices for React DOM testing, we are\nleveraging a helper library ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"react-testing-library"),"."),(0,i.kt)("p",null,"  ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run test"),": To run all unit tests. This will also run any snapshot tests.\nSnapshots are to be checked in and are found under the source code.\n",(0,i.kt)("inlineCode",{parentName:"p"},"__tests__/__snapshots__")),(0,i.kt)("p",null,"For more information using Cypress, see:\n","[Testing and Quality]",(0,i.kt)("a",{parentName:"p",href:"https://stacks.amido.com/docs/testing/cypress_functional_testing"},"https://stacks.amido.com/docs/testing/cypress_functional_testing"),")."),(0,i.kt)("h3",{id:"visual-testing"},"Visual Testing"),(0,i.kt)("p",null,"For more information using Applitools with Cypress, see:\n",(0,i.kt)("a",{parentName:"p",href:"https://stacks.amido.com/docs/testing/visual_analysis"},"Testing and Quality"),"."),(0,i.kt)("h3",{id:"accessibility-testing"},"Accessibility Testing"),(0,i.kt)("p",null,"For more information using Axe with Jest and Cypress, see:\n",(0,i.kt)("a",{parentName:"p",href:"https://stacks.amido.com/docs/testing/accessibility_testing"},"Testing and Quality"),"."),(0,i.kt)("h3",{id:"static-testing"},"Static Testing"),(0,i.kt)("p",null,"For more information about the running using amidostacks/ci-sonarscanner, please\nrefer to:\n",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/amidostacks/ci-sonarscanner"},"amidostacks/ci-sonarscanner")),(0,i.kt)("p",null,"For general information about setting up and using SonarQube for static\nanalysis, please refer to the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/amido/stacks-webapp-template/tree/master/docstest_static_code.md"},"docs/test_static_code")),(0,i.kt)("h3",{id:"consumer-driven-contract-testing-with-pact"},"Consumer driven contract testing with Pact"),(0,i.kt)("p",null,"Please refer to the very verbose documentation in\n",(0,i.kt)("inlineCode",{parentName:"p"},"/__tests__/pact/README.md")),(0,i.kt)("h2",{id:"customizing"},"Customizing"),(0,i.kt)("p",null,"Since the frameworks provide real examples on deployed applications, we recommend using these as examples and then replacing them with your own applications under test."),(0,i.kt)("h2",{id:"feedback"},"Feedback"),(0,i.kt)("p",null,"As always, we only improve from the incredible feedback and contributions from people like you. To help us improve, see our contribution guide for more information."),(0,i.kt)(s.default,{prev:!0,mdxType:"HideNavigation"}))}g.isMDXComponent=!0}}]);