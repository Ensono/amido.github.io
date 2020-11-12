(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(210)),i=n(217),s=n(218),c={id:"testing_java",title:"Pre-deployment tests and reports",sidebar_label:"Pre-deployment tests and reports",description:"Pre-deployment tests and reports for Java Rest API project",keywords:["java","rest","api","project","testing","test","unit","component","integration","report","mutation","parallel","owasp","code coverage","configuration","access token","dependency checker"]},l={unversionedId:"workloads/azure/backend/java/testing_java",id:"workloads/azure/backend/java/testing_java",isDocsHomePage:!1,title:"Pre-deployment tests and reports",description:"Pre-deployment tests and reports for Java Rest API project",source:"@site/docs/workloads/azure/backend/java/testing_java.md",slug:"/workloads/azure/backend/java/testing_java",permalink:"/stacks/docs/workloads/azure/backend/java/testing_java",version:"current",sidebar_label:"Pre-deployment tests and reports",sidebar:"docs",previous:{title:"Java REST API - Azure DevOps Pipeline",permalink:"/stacks/docs/workloads/azure/backend/java/pipeline_java"},next:{title:"Running API tests with Serenity",permalink:"/stacks/docs/workloads/azure/backend/java/execute_serenity_api_tests"}},u=[{value:"Running the tests",id:"running-the-tests",children:[]},{value:"Reports",id:"reports",children:[{value:"Test reports",id:"test-reports",children:[]},{value:"Code coverage report",id:"code-coverage-report",children:[]},{value:"Dependency checker report",id:"dependency-checker-report",children:[]},{value:"Optional: Mutation testing",id:"optional-mutation-testing",children:[]},{value:"Running tests in parallel threads - Using forks",id:"running-tests-in-parallel-threads---using-forks",children:[]},{value:"Access token configuration",id:"access-token-configuration",children:[]}]}],b={rightToc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"running-the-tests"},"Running the tests"),Object(o.b)("p",null,"Tests within the code are grouped using Tag annotations. There are three groups: 'Unit', 'Component' and 'Integration'. To just run the unit tests, for example, type:"),Object(o.b)(i.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"unix",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'./mvnw test -Dgroups="Unit"\n'))),Object(o.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'mvnw.cmd test -Dgroups="Unit"\n')))),Object(o.b)("p",null,"Similarly, for the Component tests, you should use:"),Object(o.b)(i.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"unix",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'./mvnw test -Dgroups="Component"\n'))),Object(o.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'mvnw.cmd test -Dgroups="Component"\n')))),Object(o.b)("p",null,"and the equivalent for running the Integration tests."),Object(o.b)("h2",{id:"reports"},"Reports"),Object(o.b)("h3",{id:"test-reports"},"Test reports"),Object(o.b)("p",null,"A test report may be created from the ",Object(o.b)("inlineCode",{parentName:"p"},"test")," package in Java using the Surefire Plugin.\nThe report file (as either XML or HTML) generated for each of the test classes can be found under ",Object(o.b)("inlineCode",{parentName:"p"},"./target/surefire-reports"),"."),Object(o.b)("p",null,"Run the following command to create the report:"),Object(o.b)(i.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"unix",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"./mvnw surefire:test\n"))),Object(o.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mvnw.cmd surefire:test\n")))),Object(o.b)("p",null,"To generate the Serenity report:"),Object(o.b)(i.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"unix",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"./mvnw clean verify\n"))),Object(o.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mvnw.cmd clean verify\n")))),Object(o.b)("p",null,"The report can be viewed under ",Object(o.b)("inlineCode",{parentName:"p"},"./api-tests/target/site/serenity/index.html"),"."),Object(o.b)("h3",{id:"code-coverage-report"},"Code coverage report"),Object(o.b)("p",null,"The JaCoCo Code Coverage tool allows identifying how much of the code is run during the test suite execution. It is by no means an identifier of code and test quality in its own right but can be helpful for checking if logic paths have test coverage, especially for code updates.\nThis library is run in the API pipeline, with output reports being made available to the CI tool being used."),Object(o.b)("p",null,"To generate the JaCoCo report, please execute the following command:"),Object(o.b)(i.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"unix",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"./mvnw jacoco:report\n"))),Object(o.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mvnw.cmd jacoco:report\n")))),Object(o.b)("p",null,"The generated report can be viewed under ",Object(o.b)("inlineCode",{parentName:"p"},"./target/site/jacoco/index.html"),"."),Object(o.b)("h3",{id:"dependency-checker-report"},"Dependency checker report"),Object(o.b)("p",null,"The The ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://owasp.org/www-project-dependency-check/"}),"OWASP Dependency-Check")," is a Software Composition Analysis tool that attempts to detect publicly disclosed vulnerabilities contained within a project\u2019s dependencies.\nDependency-check has a command line interface, a Maven plugin, an Ant task, and a Jenkins plugin. The core engine contains a series of analyzers that inspect the project dependencies, collect pieces of information about the dependencies (referred to as evidence within the tool).\nTo generate the dependency checker report please execute:"),Object(o.b)(i.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"unix",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"./mvnw clean install -Powasp-dependency-check\n"))),Object(o.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mvnw.cmd clean install -Powasp-dependency-check\n")))),Object(o.b)("p",null,"The generated report can be viewed under - ",Object(o.b)("inlineCode",{parentName:"p"},"./target/dependency-check.html"),"."),Object(o.b)("h3",{id:"optional-mutation-testing"},"Optional: Mutation testing"),Object(o.b)("p",null,"PIT mutation testing is used to generate mutation tests (see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://pitest.org/"}),"https://pitest.org/")," for details).\nThe mutation coverage goal analyses all classes in the codebase that match the target tests and target class filters.\nTo run it:"),Object(o.b)(i.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"unix",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"./mvnw org.pitest:pitest-maven:mutationCoverage\n"))),Object(o.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mvnw.cmd org.pitest:pitest-maven:mutationCoverage\n")))),Object(o.b)("p",null,"The generated report can be viewed under \u2013 ",Object(o.b)("inlineCode",{parentName:"p"},"./target/pit-reports/YYYYMMDDHHMI"),"."),Object(o.b)("h3",{id:"running-tests-in-parallel-threads---using-forks"},"Running tests in parallel threads - Using forks"),Object(o.b)("p",null,"Choosing the right forking strategy and parallel execution settings can have a substantial impact on the memory requirements, and the execution time of the build system.\nUsing multiple forks can be a good alternative to running all tests in a single JVM, and can reduce the risk of certain types of errors."),Object(o.b)("p",null,"Using Forked Test Execution, new JVM processes are spun up to execute the tests, up to a configurable maximum number of processes. This creates better separation between tests, which can improve their reliability."),Object(o.b)("p",null,"Maven is set to spawn new processes by the ",Object(o.b)("inlineCode",{parentName:"p"},"forkCount"),' configuration element, as shown here below. This can either be a number (the maximum number of forks) or a multiplier (the number of forks per CPU).\nThe current configuration uses the value of "2", which means 2 forked processes per CPU:'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"<plugin>\n    <artifactId>maven-failsafe-plugin</artifactId>\n    <version>2.22.2</version>\n    <configuration>\n        <parallel>classes</parallel>\n        <threadCount>2</threadCount>\n        <forkCount>2</forkCount>\n    </configuration>\n</plugin>\n")),Object(o.b)("h3",{id:"access-token-configuration"},"Access token configuration"),Object(o.b)("p",null,"In order to make the authenticated requests (pass Bearer Token into headers) for the functional tests, please change the value of ",Object(o.b)("inlineCode",{parentName:"p"},"generate.auth0.token")," from ",Object(o.b)("inlineCode",{parentName:"p"},"serenity.conf")," file config to 'true'.\nAlso, to get the right access token please provide values for following variables in the ",Object(o.b)("inlineCode",{parentName:"p"},"environment variables"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-properties"}),"- CLIENT_ID\n- CLIENT_SECRET\n- AUDIENCE\n- GRANT_TYPE\n- OAUTH_TOKEN_URL\n")),Object(o.b)("p",null,"In case the Authorization Token is not required the ",Object(o.b)("inlineCode",{parentName:"p"},"generate.auth0.token")," value is false"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The more threads are used, the higher the chances of sporadic, hard-to-reproduce test failures due to timeouts and other related issues. The added performance gain of each thread also tends to drop off for higher numbers of threads."))))}p.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},213:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},215:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},216:function(e,t,n){"use strict";var a=n(0),r=n(215);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},217:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(216),i=n(213),s=n(51),c=n.n(s),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,b=e.values,p=e.groupId,d=Object(o.a)(),m=d.tabGroupChoices,h=d.setTabGroupChoices,g=Object(a.useState)(s),f=g[0],v=g[1],j=Object(a.useState)(!1),O=j[0],w=j[1];if(null!=p){var y=m[p];null!=y&&y!==f&&b.some((function(e){return e.value===y}))&&v(y)}var T=function(e){v(e),null!=p&&h(p,e)},x=[],k=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},N=function(){w(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",k),window.addEventListener("mousedown",N)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===t}),style:O?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),k(e)},onFocus:function(){return T(t)},onClick:function(){T(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}},218:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);