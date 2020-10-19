(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),c=(n(0),n(140)),o={id:"testing_java_cqrs",title:"Testing the Java Rest API",sidebar_label:"Testing the application"},s={unversionedId:"workloads/azure/backend/java_cqrs/testing_java_cqrs",id:"workloads/azure/backend/java_cqrs/testing_java_cqrs",isDocsHomePage:!1,title:"Testing the Java Rest API",description:"Testing the application",source:"@site/docs/workloads/azure/backend/java_cqrs/testing_java_cqrs.md",slug:"/workloads/azure/backend/java_cqrs/testing_java_cqrs",permalink:"/stacks/docs/workloads/azure/backend/java_cqrs/testing_java_cqrs",editUrl:"https://github.com/amido/stacks/docs/workloads/azure/backend/java_cqrs/testing_java_cqrs.md",version:"current",sidebar_label:"Testing the application",sidebar:"docs",previous:{title:"IDE guidelines for the Java Rest API",permalink:"/stacks/docs/workloads/azure/backend/java_cqrs/ide_java_cqrs"},next:{title:"Java Rest API Architecture",permalink:"/stacks/docs/workloads/azure/backend/java_cqrs/architecture_java_cqrs"}},i=[{value:"Testing the application",id:"testing-the-application",children:[{value:"Running Tests",id:"running-tests",children:[]},{value:"Reports",id:"reports",children:[]},{value:"Running API tests",id:"running-api-tests",children:[]}]}],l={rightToc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"testing-the-application"},"Testing the application"),Object(c.b)("h3",{id:"running-tests"},"Running Tests"),Object(c.b)("p",null,"Tests within the code are grouped using Tag annotations. There are three groups: 'Unit', 'Component' and 'Integration'. To just run the unit tests, for example, type:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),'./mvnw test -Dgroups="Unit"\n')),Object(c.b)("p",null,"Similarly, for the Component tests, you should use:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),'./mvnw test -Dgroups="Component"\n')),Object(c.b)("p",null,"and the equivalent for running the Integration tests."),Object(c.b)("h3",{id:"reports"},"Reports"),Object(c.b)("h4",{id:"test-reports"},"Test reports"),Object(c.b)("p",null,"A test report may be created from the ",Object(c.b)("inlineCode",{parentName:"p"},"test")," package in Java using the Surefire Plugin.\nThe report file (as either XML or HTML) generated for each of the test classes can be found under ",Object(c.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/target/surefire-reports"),"."),Object(c.b)("p",null,"Run the following command to create the report:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"./mvnw surefire:test\n")),Object(c.b)("p",null,"To generate the Serenity report:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"./mvnw clean verify\n")),Object(c.b)("p",null,"The report can be viewed under ",Object(c.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/api-tests/target/site/serenity/index.html"),"."),Object(c.b)("h4",{id:"code-coverage-and-dependency-check-reports"},"Code coverage and dependency check reports"),Object(c.b)("p",null,"Run the following command:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"./mvnw jacoco:report\n")),Object(c.b)("p",null,"The generated report can be viewed under ",Object(c.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/target/site/jacoco/index.html"),"."),Object(c.b)("p",null,"For the dependency checker report, run:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"./mvnw clean install -Powasp-dependency-check\n")),Object(c.b)("p",null,"The generated report can be viewed under ",Object(c.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/target/dependency-check.html"),"."),Object(c.b)("h4",{id:"mutation-testing"},"Mutation testing"),Object(c.b)("p",null,"PIT mutation testing is used to generate mutation tests (see ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://pitest.org/"}),"https://pitest.org/")," for details).\nThe mutation coverage goal analyses all classes in the codebase that match the target tests and target class filters.\nTo run it:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"./mvnw org.pitest:pitest-maven:mutationCoverage\n")),Object(c.b)("p",null,"The generated report can be viewed under \u2013 ",Object(c.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/target/pit-reports/YYYYMMDDHHMI")),Object(c.b)("h3",{id:"running-api-tests"},"Running API tests"),Object(c.b)("p",null,"Set an environment variable ",Object(c.b)("inlineCode",{parentName:"p"},"BASE_URL")," (e.g. if testing locally set it to ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:9000"}),"http://localhost:9000"),")"),Object(c.b)("p",null,"From project path ",Object(c.b)("inlineCode",{parentName:"p"},"<>PROJECT-NAME>/api-tests")," to run all tests, use"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"./mvnw clean verify\n")),Object(c.b)("p",null,"To run the Smoke tests independently, use"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),'mvn clean verify -Dcucumber.options="--tags @Smoke"\n')),Object(c.b)("p",null,"and to run the Functional tests independently, use"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),'mvn clean verify -Dcucumber.options="--tags @Functional"\n')))}p.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,g=b["".concat(o,".").concat(d)]||b[d]||u[d]||c;return n?r.a.createElement(g,s(s({ref:t},l),{},{components:n})):r.a.createElement(g,s({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<c;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);