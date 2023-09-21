"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[1843],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},243:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"testing_java_serenity_bdd",title:"UI Browser Automation with Serenity BDD and Java",sidebar_label:"Java - Serenity BDD",description:"UI tests with Serenity BDD and Java",keywords:["serenity","tests","testing","ui","java","template","example","run the tests","run tests by tag","serenity report"]},l=void 0,p={unversionedId:"testing/testing_java_serenity_bdd",id:"testing/testing_java_serenity_bdd",title:"UI Browser Automation with Serenity BDD and Java",description:"UI tests with Serenity BDD and Java",source:"@site/docs/testing/java_testing_serenity_bdd.md",sourceDirName:"testing",slug:"/testing/testing_java_serenity_bdd",permalink:"/docs/testing/testing_java_serenity_bdd",draft:!1,tags:[],version:"current",frontMatter:{id:"testing_java_serenity_bdd",title:"UI Browser Automation with Serenity BDD and Java",sidebar_label:"Java - Serenity BDD",description:"UI tests with Serenity BDD and Java",keywords:["serenity","tests","testing","ui","java","template","example","run the tests","run tests by tag","serenity report"]},sidebar:"docs",previous:{title:"Accessibility Testing",permalink:"/docs/testing/testing_in_nx/cypress_accessibility_testing"},next:{title:"C# - Selenium .NET",permalink:"/docs/testing/testing_dotnet_selenium"}},u={},c=[{value:"Getting started",id:"getting-started",level:2},{value:"Configurations",id:"configurations",level:3},{value:"Browser Download Location",id:"browser-download-location",level:3},{value:"Configure the serenity.properties",id:"configure-the-serenityproperties",level:3},{value:"Run Tests Locally",id:"run-tests-locally",level:3},{value:"Test Report",id:"test-report",level:3},{value:"Manual Aggregation of the Test Report",id:"manual-aggregation-of-the-test-report",level:3},{value:"Running tests in parallel threads Using forks",id:"running-tests-in-parallel-threads-using-forks",level:3}],d={toc:c},m="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the Java world there are few tools that provide an easier experience with adding behaviour driven development to your automated testing better than ",(0,i.kt)("a",{parentName:"p",href:"http://serenity-bdd.info/#/"},"Serenity BDD"),".  Not only is it very easy to use but it also adds a rich layer of reporting to your automated testing framework which is crucial for project management and keeping your stakeholders informed."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"Serenity BDD provides excellent integrations with Selenium, which allows you to avoid a lot of the boilerplate and infrastructure code you normally need to deal with in automated web tests.\nIn particular, Serenity manages the driver lifecycle for you (so you don\u2019t need to create your own driver instances or close them at the end of the tests)."),(0,i.kt)("p",null,"Serenity can also be configured to automatically take screenshots throughout the tests, creating rich documentation of how each test played out."),(0,i.kt)("p",null,'When you write your tests in a fluent, readable manner, these screenshots become part of the "living documentation" of your application.'),(0,i.kt)("h3",{id:"configurations"},"Configurations"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Ensono/stacks-webapp-template/blob/master/packages/scaffolding-cli/templates/test/xxENSONOxx.xxSTACKSxx.E2E.Serenity/src/test/resources/serenity.conf"},"Serenity conf")," file need to be configured."),(0,i.kt)("p",null,"The following properties for different environments are required in the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/test/resources/serenity.conf")," configuration file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"webdriver.base.url\napi.base.url\n")),(0,i.kt)("h3",{id:"browser-download-location"},"Browser Download Location"),(0,i.kt)("p",null,"If you wish to use a local instance of Serenity Webdriver, make sure to download the correct WebDriver file for the desired browser."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/operasoftware/operachromiumdriver/releases"},"Opera")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mozilla/geckodriver/releases"},"Firefox")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://chromedriver.chromium.org/downloads"},"Chrome")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver"},"Internet Explorer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blogs.windows.com/msedgedev/2015/07/23/bringing-automated-testing-to-microsoft-edge-through-webdriver/"},"Microsoft Edge"))),(0,i.kt)("h3",{id:"configure-the-serenityproperties"},"Configure the serenity.properties"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"serenity.take.screenshots")," - Set this property to have more finer control on how screenshots are taken."),(0,i.kt)("p",null,"This property can take the following values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"FOR_EACH_ACTION"),": Saves a screenshot at every web element action (like click(), typeAndEnter(), type(), typeAndTab() etc.).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"BEFORE_AND_AFTER_EACH_STEP"),": Saves a screenshot before and after every step.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"AFTER_EACH_STEP"),": Saves a screenshot after every step")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"FOR_FAILURES"),": Saves screenshots only for failing steps.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"DISABLED"),": Does not save screenshots for any steps."))),(0,i.kt)("p",null,"The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"serenity.take.screenshots=BEFORE_AND_AFTER_EACH_STEP")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"webdriver.driver")," - The browser you want to run the tests in: firefox, chrome, phantomjs or iexplorer."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"webdriver.chrome.driver")," - Path to the Chrome driver, if it is not on the system path."),(0,i.kt)("p",null,"More properties here: ",(0,i.kt)("a",{parentName:"p",href:"https://serenity-bdd.github.io/theserenitybook/latest/serenity-system-properties.html"},"https://serenity-bdd.github.io/theserenitybook/latest/serenity-system-properties.html")),(0,i.kt)("h3",{id:"run-tests-locally"},"Run Tests Locally"),(0,i.kt)("p",null,"To run the web tests with a given driver, please provide the path to the webdriver file using the system property: ",(0,i.kt)("inlineCode",{parentName:"p"},"webdriver.driver_name.driver"),". For example, your serenity.properties file should contain the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"webdriver.driver=chrome\nwebdriver.chrome.driver=/path/to/my/chromedriver\n")),(0,i.kt)("p",null,"Open the project folder in the terminal and execute tests by running any one of the following commands:"),(0,i.kt)("p",null,"Run all tests on the default environment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mvn clean verify\n")),(0,i.kt)("p",null,"Run all tests on the specific environment e.g. staging:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mmvn clean verify -Denvironment=staging\n")),(0,i.kt)("p",null,"Run Smoke tests only:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'mvn clean verify -Dcucumber.options="--tags @Smoke"\n')),(0,i.kt)("p",null,"Run Functional tests only:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'mvn clean verify -Dcucumber.options="--tags @Functional"\n')),(0,i.kt)("p",null,"Run tests by other tags and ignore tests that contain @Ignore tags:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'mvn clean verify verify -Dcucumber.options="--tags ~@Ignore --tags @YourTag"\n')),(0,i.kt)("h3",{id:"test-report"},"Test Report"),(0,i.kt)("p",null,"As a result of the test execution - serenity-maven-plugin will automatically generate the test report with name - ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Test Report Location is: ..target/site/serenity/index.html\n")),(0,i.kt)("h3",{id:"manual-aggregation-of-the-test-report"},"Manual Aggregation of the Test Report"),(0,i.kt)("p",null,"Open the project folder in the terminal and execute:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mvn serenity:aggregate\n")),(0,i.kt)("h3",{id:"running-tests-in-parallel-threads-using-forks"},"Running tests in parallel threads Using forks"),(0,i.kt)("p",null,"Using multiple forks can be a good alternative to running all tests in a single JVM, and can reduce the risk of certain types of errors."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Choosing the right forking strategy and parallel execution settings can have a substantial impact on the memory requirements and the execution time of the build system.")),(0,i.kt)("p",null,"Using Forked Test Execution, new JVM processes are spun up to execute the tests, up to a configurable maximum number of processes."),(0,i.kt)("p",null,"This creates better separation between tests, which can improve their reliability."),(0,i.kt)("p",null,"Maven is set to spawn new processes by the forkCount configuration element, as shown here below."),(0,i.kt)("p",null,'This can either be a number (the maximum number of forks) or a multiplier (the number of forks per CPU). The current configuration uses the value of "2", which means 2 forked processes per CPU:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"}," <plugin>\n    <artifactId>maven-failsafe-plugin</artifactId>\n    <version>2.22.2</version>\n    <configuration>\n        <parallel>classes</parallel>\n        <threadCount>2</threadCount>\n        <forkCount>2</forkCount>\n    </configuration>\n</plugin>\n")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The more threads are used, the higher the chances of sporadic, hard-to-reproduce test failures due to timeouts and other related issues. The added performance gain of each thread also tends to drop off for higher numbers of threads.")))}h.isMDXComponent=!0}}]);