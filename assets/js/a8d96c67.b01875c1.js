"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[34],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),h=i,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||s;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6565:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(7462),i=n(3366),s=(n(7294),n(3905)),a=["components"],o={id:"functional_testing_netcore",title:"Testing the application",sidebar_label:"Testing the API",hide_title:!1,hide_table_of_contents:!1,description:"Dotnet API tests examples using bddfy",keywords:["dotnet api tests","rest","api","bddfy","xunit","shouldly","csharp","dotnet","testing"]},l=void 0,u={unversionedId:"workloads/azure/backend/netcore/testing/functional_testing_netcore",id:"workloads/azure/backend/netcore/testing/functional_testing_netcore",isDocsHomePage:!1,title:"Testing the application",description:"Dotnet API tests examples using bddfy",source:"@site/docs/workloads/azure/backend/netcore/testing/functional_testing_netcore.md",sourceDirName:"workloads/azure/backend/netcore/testing",slug:"/workloads/azure/backend/netcore/testing/functional_testing_netcore",permalink:"/docs/workloads/azure/backend/netcore/testing/functional_testing_netcore",tags:[],version:"current",frontMatter:{id:"functional_testing_netcore",title:"Testing the application",sidebar_label:"Testing the API",hide_title:!1,hide_table_of_contents:!1,description:"Dotnet API tests examples using bddfy",keywords:["dotnet api tests","rest","api","bddfy","xunit","shouldly","csharp","dotnet","testing"]},sidebar:"docs",previous:{title:"Requirements",permalink:"/docs/workloads/azure/backend/netcore/requirements_netcore"},next:{title:"Infrastructure",permalink:"/docs/workloads/azure/backend/netcore/infrastructure_netcore"}},c=[{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Running Tests",id:"running-tests",children:[],level:2},{value:"Test Folder structure",id:"test-folder-structure",children:[],level:2},{value:"Builders",id:"builders",children:[{value:"Http",id:"http",children:[],level:3}],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Models",id:"models",children:[],level:2},{value:"Tests",id:"tests",children:[],level:2},{value:"Fixtures",id:"fixtures",children:[],level:2},{value:"Stories",id:"stories",children:[],level:2},{value:"Steps",id:"steps",children:[],level:2}],d={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The Automated Functional Tests is a sample project demonstrating functional testing created using BDDfy and XUnit."),(0,s.kt)("p",null,"The project contains the framework for testing API's and a number of test cases to demonstrate usage of the framework."),(0,s.kt)("h2",{id:"dependencies"},"Dependencies"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"xUnit (Test adapter)"),(0,s.kt)("li",{parentName:"ul"},"BDDfy (BDD tool)"),(0,s.kt)("li",{parentName:"ul"},"HttpClient (For API requests)"),(0,s.kt)("li",{parentName:"ul"},"Shouldly (Assertions)")),(0,s.kt)("h2",{id:"running-tests"},"Running Tests"),(0,s.kt)("p",null,"Navigate to ",(0,s.kt)("inlineCode",{parentName:"p"},"API.FunctionalTests")," folder and run the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet test\n")),(0,s.kt)("h2",{id:"test-folder-structure"},"Test Folder structure"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 Builders\n|   \u2514\u2500\u2500 Http\n\u251c\u2500\u2500 Configuration\n\u251c\u2500\u2500 Models\n\u2514\u2500\u2500 Tests\n    \u251c\u2500\u2500 Fixtures\n    \u251c\u2500\u2500 Stories\n    \u2514\u2500\u2500 Steps\n")),(0,s.kt)("h2",{id:"builders"},"Builders"),(0,s.kt)("p",null,"This folder contains builder classes that are used to create POCO's (Plain Old CLR Object) for objects used in API requests. Ideally there should be a model for every request and response that is used within the tests. The aim of these classes is to make it as easy as possible for developers to generate the data required by API's."),(0,s.kt)("p",null,"All Builder classes should inherit from ",(0,s.kt)("inlineCode",{parentName:"p"},"IBuilder.cs")),(0,s.kt)("h3",{id:"http"},"Http"),(0,s.kt)("p",null,"This folder contains a builder and factory for managing HttpClients within the tests."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"HttpRequestBuilder.cs")," manages creating the HttpRequest and also the HttpClient. This is only used within ",(0,s.kt)("inlineCode",{parentName:"li"},"HttpRequestFactory.cs"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"HttpRequestFactory.cs")," orchestrates the creation of the HttpRequest for each REST method.")),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"This contains classes used to manage the configuration for the tests."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"ConfigModel.cs")," is a POCO representation of the json in ",(0,s.kt)("inlineCode",{parentName:"li"},"appsettings.json")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"ConfigAccessor.cs")," contains the logic required to obtain the JSON from ",(0,s.kt)("inlineCode",{parentName:"li"},"appsettings.json")," and bind it to the ",(0,s.kt)("inlineCode",{parentName:"li"},"ConfigModel.cs")," object. This allows the configuration to be used as a simple object.\nThe ConfigAccessor will automatically replace any configuration setting values with the values set in the Environment Variables on the machine running the tests.")),(0,s.kt)("p",null,"Example: In ",(0,s.kt)("inlineCode",{parentName:"p"},"appsettings.json"),' we are using the configuration setting (key-value pair) "BaseUrl":"',(0,s.kt)("a",{parentName:"p",href:"http://dev.azure.amidostacks.com/api/menu/%22"},'http://dev.azure.amidostacks.com/api/menu/"'),". If there is an Environment Variable set on the current machine/build agent using ",(0,s.kt)("inlineCode",{parentName:"p"},"BaseUrl")," key, the value in ",(0,s.kt)("inlineCode",{parentName:"p"},"appsettings.json")," will be replaced."),(0,s.kt)("h2",{id:"models"},"Models"),(0,s.kt)("p",null,"These are POCO representations of entities that are used in API requests (E.g. Request body, response body). The builder classes are used to create instances of these models."),(0,s.kt)("h2",{id:"tests"},"Tests"),(0,s.kt)("p",null,"This is the parent folder for all test code"),(0,s.kt)("h2",{id:"fixtures"},"Fixtures"),(0,s.kt)("p",null,'The "Fixtures" folder contains xUnit class fixtures. These class fixtures are used to create test context for the tests. The fixture is where you can put fixture setup (via constructor) and teardown (Via ',(0,s.kt)("inlineCode",{parentName:"p"},"Dispose()"),")"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"https://xunit.net/docs/shared-context"},"xUnit documentation")," for information on different fixtures and how to use them."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"AuthFixture.cs")," contains methods for getting authentication tokens required in the test cases."),(0,s.kt)("h2",{id:"stories"},"Stories"),(0,s.kt)("p",null,"The Stories folder contains all the test cases (I.e. the BDDfy stories). Each class should represent a new test story, and within each class/story, there will be a number of test cases which test a specific feature."),(0,s.kt)("p",null,"Test cases within a story are defined using xUnit ",(0,s.kt)("inlineCode",{parentName:"p"},"Facts"),". BDDfy is used to describe and orchestrate the tests."),(0,s.kt)("p",null,"The solution tags tests as smoke tests using xUnit ",(0,s.kt)("inlineCode",{parentName:"p"},"Traits"),". I.e. ",(0,s.kt)("inlineCode",{parentName:"p"},'[Trait("Category", "SmokeTest")]')),(0,s.kt)("h2",{id:"steps"},"Steps"),(0,s.kt)("p",null,"This is where all the step definitions are created. The definitions contain the logic behind the tests and these steps are called from within the test cases found within the ",(0,s.kt)("inlineCode",{parentName:"p"},"TestCases")," folder."))}p.isMDXComponent=!0}}]);