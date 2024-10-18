"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[2681],{7528:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(4848),i=t(8453);const r={id:"performance_testing_gatling",title:"Performance Testing - Gatling",sidebar_label:"Gatling Performance Testing",description:"Performance tests with gatling",keywords:["gatling","tests","testing","performance","template","example","run performance tests","gatling report"]},l=void 0,a={id:"testing/performance_testing_gatling",title:"Performance Testing - Gatling",description:"Performance tests with gatling",source:"@site/docs/testing/performance_testing_gatling.md",sourceDirName:"testing",slug:"/testing/performance_testing_gatling",permalink:"/docs/testing/performance_testing_gatling",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"performance_testing_gatling",title:"Performance Testing - Gatling",sidebar_label:"Gatling Performance Testing",description:"Performance tests with gatling",keywords:["gatling","tests","testing","performance","template","example","run performance tests","gatling report"]},sidebar:"docs",previous:{title:"Automated Accessibility Testing",permalink:"/docs/testing/accessibility_testing"}},o={},c=[{value:"Getting started",id:"getting-started",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Quick run",id:"quick-run",level:2},{value:"Environment settings",id:"environment-settings",level:2},{value:"Run all simulations",id:"run-all-simulations",level:2},{value:"Run a single simulation",id:"run-a-single-simulation",level:2},{value:"Deleting menu resources",id:"deleting-menu-resources",level:2},{value:"References",id:"references",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The Ensono Stacks Performance Tests is a sample project demonstrating performance testing (Load testing) using the ",(0,s.jsx)(n.a,{href:"https://gatling.io/",children:"Gatling"})," tool."]}),"\n",(0,s.jsx)(n.p,{children:"The tests within this repository have been written against the Ensono Stacks APIs."}),"\n",(0,s.jsx)(n.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,s.jsxs)(n.p,{children:["To get started with performance testing, first clone the ",(0,s.jsx)(n.a,{href:"https://github.com/Ensono/stacks-performance-tests",children:"Ensono Stacks Performance Tests"})," repo:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"git@github.com:amido/stacks-performance-tests.git"})}),"\n",(0,s.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Java version 11"}),"\n",(0,s.jsx)(n.li,{children:"Maven"}),"\n",(0,s.jsx)(n.li,{children:"IDE for Scala development. I.e. IntelliJ IDEA"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"quick-run",children:"Quick run"}),"\n",(0,s.jsx)(n.p,{children:"Once the project has been cloned locally, tests can be run using the following command:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"mvn clean gatling:test -Denv=dev"})}),"\n",(0,s.jsx)(n.p,{children:"By default, this will run a load test against all simulations with 1 user with a ramp up duration of 1 second."}),"\n",(0,s.jsx)(n.p,{children:"There are optional parameters that can be added to change the load test:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-DrampUsers=X"})," - This allows you to set the number of users that will be simulated in the tests."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-DrampDuration=X"})," - This sets the amount of seconds the test will ramp the test load from 0 users to X users in the test."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-DatOnceUsers=X"})," - Injects a given number of users at once."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-DconstantUsersPerSec=X -DconstUsersDuration=X"})," - Injects users at a constant rate, defined in users per second, during a given duration. Users will be injected at regular intervals."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"environment-settings",children:"Environment settings"}),"\n",(0,s.jsx)(n.p,{children:"There are 4 environment contexts that you can run the performance tests in. These are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"local, dev, test, perf"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You must set the system property ",(0,s.jsx)(n.code,{children:"-Denv"})," to point to one of the above environment variables."]}),"\n",(0,s.jsxs)(n.p,{children:["For example: ",(0,s.jsx)(n.code,{children:"mvn clean gatling:test -Denv=test"})]}),"\n",(0,s.jsx)(n.p,{children:"Each environment variable will programmatically point to its respective properties files."}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"local - local.application.properties"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"dev - dev.application.properties"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To a local environment of your choice, then set the ",(0,s.jsx)(n.code,{children:"env"})," arg to ",(0,s.jsx)(n.code,{children:"local"})," and amend the url accordingly in the ",(0,s.jsx)(n.code,{children:"local.application.properties"})," file."]}),"\n",(0,s.jsx)(n.h2,{id:"run-all-simulations",children:"Run all simulations"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"mvn clean gatling:test -Denv=dev -DrampUsers=10 -DrampDuration=5 -DatOnceUsers=4"})}),"\n",(0,s.jsx)(n.h2,{id:"run-a-single-simulation",children:"Run a single simulation"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"mvn clean gatling:test -Denv=dev -Dgatling.simulationClass=com.amido.simulations.menu.GetMenuSimulation -DrampUsers=2 -DrampDuration=2"})}),"\n",(0,s.jsx)(n.h2,{id:"deleting-menu-resources",children:"Deleting menu resources"}),"\n",(0,s.jsx)(n.p,{children:"As expected, performance tests can create a lot of resources. It is essential that at the end of the test executions, we delete all the resources that were created as part of the tests."}),"\n",(0,s.jsx)(n.p,{children:"To delete the resources, run the following command from the root project folder and passing the base uri as an argument."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"cd src/test/scala/com/amido/utils"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"sh tearDownDeleteMenuItems.sh http://localhost:9000"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://gatling.io/docs/current",children:"Gatling docs"}),"\n",(0,s.jsx)(n.a,{href:"https://devqa.io/gatling-maven-performance-test-framework/",children:"Performance Testing Framework with Gatling and Maven"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var s=t(6540);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);