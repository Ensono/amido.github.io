(window.webpackJsonp=window.webpackJsonp||[]).push([[78,111],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),i=(n(0),n(200)),s=n(206),o=n(207),c=n(53),l={id:"execute_serenity_api_tests",title:"Running API tests with Serenity",sidebar_label:"REST API testing with Serenity",description:"How to test rest api application with serenity bdd and serenity rest assured",keywords:["java","rest","api","serenity","serenity bdd","rest assured","run serenity tests","serenity test example","test runner","serenity test report","execute parallel tests","framework","testing","test"]},u={unversionedId:"workloads/azure/backend/java/testing/execute_serenity_api_tests",id:"workloads/azure/backend/java/testing/execute_serenity_api_tests",isDocsHomePage:!1,title:"Running API tests with Serenity",description:"How to test rest api application with serenity bdd and serenity rest assured",source:"@site/docs/workloads/azure/backend/java/testing/execute_serenity_api_tests.md",slug:"/workloads/azure/backend/java/testing/execute_serenity_api_tests",permalink:"/docs/workloads/azure/backend/java/testing/execute_serenity_api_tests",version:"current",sidebar_label:"REST API testing with Serenity",sidebar:"docs",previous:{title:"Pre-deployment tests and reports",permalink:"/docs/workloads/azure/backend/java/testing/testing_java"},next:{title:"Running API tests with Karate",permalink:"/docs/workloads/azure/backend/java/testing/execute_karate_api_tests"}},b=[{value:"Getting Started",id:"getting-started",children:[{value:"Prerequisites",id:"prerequisites",children:[]}]},{value:"Running the tests",id:"running-the-tests",children:[{value:"Note",id:"note",children:[]}]}],p={rightToc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://serenity-bdd.github.io/theserenitybook/latest/index.html"}),"Serenity BDD")," is an open source library that aims to make the idea of living documentation a reality.\nIt also uses the test results to produce illustrated, narrative reports that document and describe what your application does and how it works."),Object(i.b)("h2",{id:"getting-started"},"Getting Started"),Object(i.b)("p",null,"This page explains how to setup the API testing framework built with Java and Serenity BDD."),Object(i.b)(c.default,{url:"https://vimeo.com/486755397",mdxType:"ResponsivePlayer"}),Object(i.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"Set an environment variable ",Object(i.b)("inlineCode",{parentName:"p"},"BASE_URL")," (e.g. if testing locally set it to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:9000"}),"http://localhost:9000"),") or use the ",Object(i.b)("inlineCode",{parentName:"p"},"export BASE_URL=http://localhost:9000")," command."),Object(i.b)("h2",{id:"running-the-tests"},"Running the tests"),Object(i.b)("p",null,"To run all tests please navigate to ",Object(i.b)("inlineCode",{parentName:"p"},"./api-tests")," path and execute the following command:"),Object(i.b)(s.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"unix",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"./mvnw clean verify\n"))),Object(i.b)(o.a,{value:"windows",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mvnw.cmd clean verify\n")))),Object(i.b)("p",null,"To run the Smoke tests independently, use:"),Object(i.b)(s.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"unix",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'./mvnw clean verify -Dcucumber.options="--tags @Smoke"\n'))),Object(i.b)(o.a,{value:"windows",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'mvnw.cmd clean verify -Dcucumber.options="--tags @Smoke"\n')))),Object(i.b)("p",null,"To run the Functional tests independently, use:"),Object(i.b)(s.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"unix",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'./mvnw clean verify -Dcucumber.options="--tags @Functional"\n'))),Object(i.b)(o.a,{value:"windows",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'mvnw.cmd clean verify -Dcucumber.options="--tags @Functional"\n')))),Object(i.b)("p",null,"To run tests by other tags and ignore tests that contain @Ignore tags use:"),Object(i.b)(s.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"unix",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'./mvnw clean verify -Dcucumber.options="--tags ~@Ignore --tags @YourTag"\n'))),Object(i.b)(o.a,{value:"windows",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'mvnw.cmd clean verify -Dcucumber.options="--tags ~@Ignore --tags @YourTag"\n')))),Object(i.b)("h3",null," Test Report "),Object(i.b)("p",null,"As a result of the test execution - ",Object(i.b)("inlineCode",{parentName:"p"},"serenity-maven-plugin")," will automatically generate the test report - ",Object(i.b)("inlineCode",{parentName:"p"},"./api-tests/target/site/serenity/index.html"),"."),Object(i.b)("h3",{id:"note"},"Note"),Object(i.b)("p",null,"To manually aggregate the Serenity report execute the following command under ",Object(i.b)("inlineCode",{parentName:"p"},"./api-tests")," directory:"),Object(i.b)(s.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"unix",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," ./mvnw serenity:aggregate\n"))),Object(i.b)(o.a,{value:"windows",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mvnw.cmd serenity:aggregate\n")))))}d.isMDXComponent=!0},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(s,".").concat(d)]||b[d]||p[d]||i;return n?r.a.createElement(m,o(o({ref:t},l),{},{components:n})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},202:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},204:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},205:function(e,t,n){"use strict";var a=n(0),r=n(204);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},206:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(205),s=n(202),o=n(52),c=n.n(o),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,b=e.values,p=e.groupId,d=Object(i.a)(),m=d.tabGroupChoices,f=d.setTabGroupChoices,y=Object(a.useState)(o),g=y[0],v=y[1],O=Object(a.useState)(!1),j=O[0],w=O[1];if(null!=p){var h=m[p];null!=h&&h!==g&&b.some((function(e){return e.value===h}))&&v(h)}var x=function(e){v(e),null!=p&&f(p,e)},T=[],N=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},k=function(){w(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",N),window.addEventListener("mousedown",k)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===t}),style:j?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),N(e)},onFocus:function(){return x(t)},onClick:function(){x(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},207:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(211),s=n.n(i),o=n(54),c=n.n(o);t.default=function(e){var t=e.url;return r.a.createElement("div",{className:c.a.playerSection},r.a.createElement("div",{className:c.a.playerWrapper},r.a.createElement(s.a,{className:c.a.player,url:t,controls:!0,width:"100%",height:"100%",config:{}})))}}}]);