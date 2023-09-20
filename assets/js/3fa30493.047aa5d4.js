"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[5769],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||s;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<s;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(6010),s={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:a},t)}},4866:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(7462),r=a(7294),s=a(6010),l=a(2466),i=a(6550),o=a(1980),u=a(7392),c=a(12);function p(e){return function(e){var t,a;return null!=(t=null==(a=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,s=(0,i.k6)(),l=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(s.location.search);t.set(l,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[l,s])]}function h(e){var t,a,n,s,l=e.defaultValue,i=e.queryString,o=void 0!==i&&i,u=e.groupId,p=d(e),h=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:p})})),v=h[0],g=h[1],k=f({queryString:o,groupId:u}),b=k[0],y=k[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,c.Nk)(t),n=a[0],s=a[1],[n,(0,r.useCallback)((function(e){t&&s.set(e)}),[t,s])]),T=w[0],x=w[1],_=function(){var e=null!=b?b:T;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){_&&g(_)}),[_]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),x(e)}),[y,x,p]),tabValues:p}}var v=a(2389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){var t=e.className,a=e.block,i=e.selectedValue,o=e.selectValue,u=e.tabValues,c=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(p(t),o(n))},m=function(e){var t,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,r=c.indexOf(e.currentTarget)+1;a=null!=(n=c[r])?n:c[0];break;case"ArrowLeft":var s,l=c.indexOf(e.currentTarget)-1;a=null!=(s=c[l])?s:c[c.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},u.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},l,{className:(0,s.Z)("tabs__item",g.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=a?a:t)})))}function b(e){var t=e.lazy,a=e.children,n=e.selectedValue,s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var l=s.find((function(e){return e.props.value===n}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function y(e){var t=h(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",g.tabList)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function w(e){var t=(0,v.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},1619:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.next,a=e.prev;return n.useEffect((function(){if(t){var e=document.querySelector("div.pagination-nav__item.pagination-nav__item--next>a");e&&e.style&&(e.style.display="none")}if(a){var n=document.querySelector("div.pagination-nav__item>a");n&&n.style&&(n.style.display="none")}})),n.createElement("div",null)}},5699:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return f}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),l=a(1619),i=a(4866),o=a(5162),u=["components"],c={id:"execute_karate_api_tests",title:"Running API tests with Karate",sidebar_label:"REST API testing with Karate",description:"How to test rest api application with karate",keywords:["java","rest","api","karate","run karate tests","karate test example","test runner","karate test report","execute parallel tests","framework","testing","test"]},p=void 0,d={unversionedId:"workloads/azure/backend/java/testing/execute_karate_api_tests",id:"workloads/azure/backend/java/testing/execute_karate_api_tests",title:"Running API tests with Karate",description:"How to test rest api application with karate",source:"@site/docs/workloads/azure/backend/java/testing/execute_karate_api_tests.md",sourceDirName:"workloads/azure/backend/java/testing",slug:"/workloads/azure/backend/java/testing/execute_karate_api_tests",permalink:"/docs/workloads/azure/backend/java/testing/execute_karate_api_tests",draft:!1,tags:[],version:"current",frontMatter:{id:"execute_karate_api_tests",title:"Running API tests with Karate",sidebar_label:"REST API testing with Karate",description:"How to test rest api application with karate",keywords:["java","rest","api","karate","run karate tests","karate test example","test runner","karate test report","execute parallel tests","framework","testing","test"]},sidebar:"docs",previous:{title:"REST API testing with Serenity",permalink:"/docs/workloads/azure/backend/java/testing/execute_serenity_api_tests"},next:{title:"Introduction",permalink:"/docs/workloads/azure/backend/netcore/introduction_netcore"}},m={},f=[{value:"Getting Started",id:"getting-started",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Running the tests",id:"running-the-tests",level:2},{value:"Run the specific feature by tag option",id:"run-the-specific-feature-by-tag-option",level:3},{value:"Switching the Environment",id:"switching-the-environment",level:3},{value:"Running tests in parallel",id:"running-tests-in-parallel",level:2},{value:"@parallel=false",id:"parallelfalse",level:3},{value:"Parallel Stats",id:"parallel-stats",level:3},{value:"Note",id:"note",level:4},{value:"Test Reports",id:"test-reports",level:3}],h={toc:f},v="wrapper";function g(e){var t=e.components,a=(0,r.Z)(e,u);return(0,s.kt)(v,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'Karate is an open-source general-purpose test-automation framework that can script calls to HTTP end-points and assert that the JSON or XML responses are as expected. Karate also has support for service-virtualization where it can bring up "mock" (or stub) servers which can substitute for web-services that need to participate in an integration-test. Karate\'s capabilities include being able to run tests in parallel, HTML reports and compatibility with Continuous Integration tools.'),(0,s.kt)("h2",{id:"getting-started"},"Getting Started"),(0,s.kt)("p",null,"This page explains how to setup the API testing framework built with Java and Karate."),(0,s.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"Set an environment variable named ",(0,s.kt)("inlineCode",{parentName:"p"},"BASE_URL")," (e.g. if testing locally set it to ",(0,s.kt)("a",{parentName:"p",href:"http://localhost:9000"},"http://localhost:9000"),") or use the ",(0,s.kt)("inlineCode",{parentName:"p"},"export BASE_URL=http://localhost:9000")," command."),(0,s.kt)("h2",{id:"running-the-tests"},"Running the tests"),(0,s.kt)("p",null,"To run all functional tests please navigate to ",(0,s.kt)("inlineCode",{parentName:"p"},"./api-tests-karate")," path and execute the following command:"),(0,s.kt)(i.Z,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"unix",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"./mvnw test -Dtest=RunFunctionalTests\n"))),(0,s.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mvnw.cmd test -Dtest=RunFunctionalTests\n")))),(0,s.kt)("p",null," To run the Smoke tests independently, use:"),(0,s.kt)(i.Z,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"unix",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"./mvnw test -Dtest=RunSmokeTests\n"))),(0,s.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mvnw.cmd test -Dtest=RunSmokeTests\n")))),(0,s.kt)("p",null," Run Functional tests on the specific environment, use:"),(0,s.kt)(i.Z,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"unix",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"./mvnw test -Dtest=RunFunctionalTests -Dkarate.env=local\n"))),(0,s.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mvnw.cmd test -Dtest=RunFunctionalTests -Dkarate.env=local\n")))),(0,s.kt)("h3",{id:"run-the-specific-feature-by-tag-option"},"Run the specific feature by tag option"),(0,s.kt)("p",null,"Karate allows running tests by a ",(0,s.kt)("a",{parentName:"p",href:"https://intuit.github.io/karate/#tags"},"specific tag"),". To do that please set your tag to the specific feature or test, and then specify it in the Runner Class as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'    @Karate.Test\n    Karate testFullPath() {\n        return Karate.run("classpath:PATH_TO_THE_FEATURE/FEATURE_NAME.feature").tags("@TAG");\n    }\n')),(0,s.kt)("h3",{id:"switching-the-environment"},"Switching the Environment"),(0,s.kt)("p",null,"There is only one thing you need to do to switch the environment - which is to set a Java system property.\nBy default, the value of karate.env when you access it within karate-config.js - is base_url value taken from the environment variables"),(0,s.kt)("h2",{id:"running-tests-in-parallel"},"Running tests in parallel"),(0,s.kt)("p",null,"Choosing the right forking strategy and parallel execution settings can have a substantial impact on the memory requirements and the execution time of the build system.\nThe tests can be easily grouped in features and tags to run and compose test-suites in a very flexible manner."),(0,s.kt)("h3",{id:"parallelfalse"},"@parallel=false"),(0,s.kt)("p",null,"In rare cases you may want to suppress the default of Scenario-s executing in parallel and the special tag @parallel=false can be used. If you place it above the Feature keyword, it will apply to all Scenario-s. And if you just want one or two Scenario-s to NOT run in parallel, you can place this tag above only those Scenario-s."),(0,s.kt)("h3",{id:"parallel-stats"},"Parallel Stats"),(0,s.kt)("p",null,"For convenience, some stats are logged to the console when execution completes, which should look something like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"======================================================\nelapsed:   2.35 | threads:    5 | thread time: 4.98\nfeatures:    54 | ignored:   25 | efficiency: 0.42\nscenarios:  145 | passed:   145 | failed: 0\n======================================================\n")),(0,s.kt)("h4",{id:"note"},"Note"),(0,s.kt)("p",null,' Any *.feature file tagged as @ignore will be skipped - as the ~ prefix means a "NOT" operation.\nYou can also specify tags on the command-line. The tags() method from test runner class also takes multiple arguments,for e.g.'),(0,s.kt)("p",null," ",(0,s.kt)("inlineCode",{parentName:"p"},'this is an "AND" operation: tags("@customer", "@smoke", "~@ignoredTags")')),(0,s.kt)("p",null," ",(0,s.kt)("inlineCode",{parentName:"p"},'and this is an "OR" operation: tags("@customer, @smoke, ~@ignoredTags")')),(0,s.kt)("p",null," The more threads are used, the higher the chances of sporadic, hard-to-reproduce test failures due to timeouts, test data clean up, and other related issues.\nThe added performance gain of each thread also tends to drop off for higher numbers of threads."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'class Runner {\n    @Test\n    void run() {\n        Results results = Runner.path("classpath:PATH_TO_FUTURE_OR_PACKAGE").tags("~@ignoredTags", "@YourTag").parallel(1);\n        assertEquals(0, results.getFailCount(), results.getErrorMessages());\n    }\n}\n')),(0,s.kt)("h3",{id:"test-reports"},"Test Reports"),(0,s.kt)("p",null," As a result of the test execution - karate will automatically generate the test report - ",(0,s.kt)("inlineCode",{parentName:"p"},"target/surefire-reports/karate-summary.html"),"."),(0,s.kt)(l.Z,{next:!0,mdxType:"HideNavigation"}))}g.isMDXComponent=!0}}]);