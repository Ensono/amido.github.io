"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[1225],{62:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=s(4848),i=s(8453);const r={id:"functional_testing_netcore",title:"Functionally testing the application",sidebar_label:"Functionally Testing the API",hide_title:!1,hide_table_of_contents:!1,description:"Dotnet API tests examples using bddfy",keywords:["dotnet api tests","rest","api","bddfy","xunit","shouldly","csharp","dotnet","testing"]},o=void 0,l={id:"workloads/azure/backend/netcore/testing/functional_testing_netcore",title:"Functionally testing the application",description:"Dotnet API tests examples using bddfy",source:"@site/docs/workloads/azure/backend/netcore/testing/functional_testing_netcore.md",sourceDirName:"workloads/azure/backend/netcore/testing",slug:"/workloads/azure/backend/netcore/testing/functional_testing_netcore",permalink:"/docs/workloads/azure/backend/netcore/testing/functional_testing_netcore",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"functional_testing_netcore",title:"Functionally testing the application",sidebar_label:"Functionally Testing the API",hide_title:!1,hide_table_of_contents:!1,description:"Dotnet API tests examples using bddfy",keywords:["dotnet api tests","rest","api","bddfy","xunit","shouldly","csharp","dotnet","testing"]},sidebar:"docs",previous:{title:"Swagger UI",permalink:"/docs/workloads/azure/backend/netcore/architecture/swagger_configuration/configure_swagger_ui_netcore"},next:{title:"Infrastructure",permalink:"/docs/workloads/azure/backend/netcore/infrastructure_netcore"}},d={},c=[{value:"Automated Functional Tests Overview",id:"automated-functional-tests-overview",level:2},{value:"Tools Used in the Project",id:"tools-used-in-the-project",level:3},{value:"How to Run the Tests",id:"how-to-run-the-tests",level:3},{value:"Test Folder Structure",id:"test-folder-structure",level:2},{value:"What Each Folder Does",id:"what-each-folder-does",level:3},{value:"Builders",id:"builders",level:4},{value:"Configuration",id:"configuration",level:4},{value:"Models",id:"models",level:4},{value:"Tests Folder",id:"tests-folder",level:4},{value:"Fixtures",id:"fixtures",level:4},{value:"Stories",id:"stories",level:4},{value:"Steps",id:"steps",level:4}];function a(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"automated-functional-tests-overview",children:"Automated Functional Tests Overview"}),"\n",(0,n.jsxs)(t.p,{children:["This is a sample project that shows how to do ",(0,n.jsx)(t.strong,{children:"functional testing"})," using ",(0,n.jsx)(t.strong,{children:"BDDfy"})," and ",(0,n.jsx)(t.strong,{children:"xUnit"}),". Functional testing checks if an API behaves correctly by running different tests."]}),"\n",(0,n.jsx)(t.h3,{id:"tools-used-in-the-project",children:"Tools Used in the Project"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"xUnit"}),": The testing framework used to write and run the tests."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"BDDfy"}),": A tool to write tests in a behavior-driven development (BDD) style, making the tests easy to read."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"HttpClient"}),": Used to send API requests."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Shouldly"}),": A tool to check if the result of the tests matches what's expected."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"how-to-run-the-tests",children:"How to Run the Tests"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Open a terminal or command prompt."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Navigate to the ",(0,n.jsx)(t.code,{children:"API.FunctionalTests"})," folder."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Run this command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"dotnet test\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"This will run all the tests in the project."}),"\n",(0,n.jsx)(t.h2,{id:"test-folder-structure",children:"Test Folder Structure"}),"\n",(0,n.jsx)(t.p,{children:"Here is what the test folder looks like:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",children:"\u251c\u2500\u2500 Builders\n|   \u2514\u2500\u2500 Http\n\u251c\u2500\u2500 Configuration\n\u251c\u2500\u2500 Models\n\u2514\u2500\u2500 Tests\n    \u251c\u2500\u2500 Fixtures\n    \u251c\u2500\u2500 Stories\n    \u2514\u2500\u2500 Steps\n"})}),"\n",(0,n.jsx)(t.h3,{id:"what-each-folder-does",children:"What Each Folder Does"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Builders"}),": Contains helper classes to create the data you need for API requests."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Configuration"}),": Manages settings needed for the tests."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Models"}),": Defines the data structures used in API requests and responses."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Tests"}),": Contains all the test logic."]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"builders",children:"Builders"}),"\n",(0,n.jsx)(t.p,{children:"This folder helps create data for API requests."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"HttpRequestBuilder.cs"}),": Helps create HTTP requests (the actual request you send to the API)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"HttpRequestFactory.cs"}),": Coordinates creating the HTTP requests for different API methods (like GET, POST, etc.)."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["All builder classes should inherit from the interface ",(0,n.jsx)(t.code,{children:"IBuilder.cs"}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(t.p,{children:"This folder handles the settings for the tests."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"ConfigModel.cs"}),": Represents the settings (like URLs) in the ",(0,n.jsx)(t.code,{children:"appsettings.json"})," file."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"ConfigAccessor.cs"}),": Reads the settings from ",(0,n.jsx)(t.code,{children:"appsettings.json"})," and makes them usable in the tests. If the machine running the tests has specific environment variables (like a different URL), it will replace the settings in the file."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For example, if the appsettings.json contains the base API URL ",(0,n.jsx)(t.code,{children:'"BaseUrl":"http://dev.azure.amidostacks.com/api/menu/"'}),", but the environment variable on your computer uses a different URL, the environment variable will be used instead."]}),"\n",(0,n.jsx)(t.h4,{id:"models",children:"Models"}),"\n",(0,n.jsx)(t.p,{children:"These represent the data used in API requests and responses. For example, the request body or response body. The Builders use these models to create the data for the tests."}),"\n",(0,n.jsx)(t.h4,{id:"tests-folder",children:"Tests Folder"}),"\n",(0,n.jsx)(t.p,{children:"This folder contains all the test code."}),"\n",(0,n.jsx)(t.h4,{id:"fixtures",children:"Fixtures"}),"\n",(0,n.jsx)(t.p,{children:"The Fixtures folder contains setup and cleanup code for the tests."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"AuthFixture.cs"}),": Contains methods to get authentication tokens that are needed for some test cases."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Fixtures in xUnit allow setting up a shared context for tests. For more info on xUnit fixtures, see the ",(0,n.jsx)(t.a,{href:"https://xunit.net/docs/shared-context",children:"xUnit documentation"}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"stories",children:"Stories"}),"\n",(0,n.jsx)(t.p,{children:"The Stories folder contains the actual test cases, written using BDDfy."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Each file in this folder represents a test story."}),"\n",(0,n.jsx)(t.li,{children:"Inside each story, there are multiple test cases that test specific API features."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Test cases are written using xUnit's Facts. Each test is described using BDDfy, which helps organize the test steps in a readable way."}),"\n",(0,n.jsxs)(t.p,{children:["Some tests are marked as smoke tests using ",(0,n.jsx)(t.code,{children:'[Trait("Category", "SmokeTest")]'}),". Smoke tests are quick checks to make sure everything works."]}),"\n",(0,n.jsx)(t.h4,{id:"steps",children:"Steps"}),"\n",(0,n.jsx)(t.p,{children:"The Steps folder contains the logic behind each test."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"These are the steps that are executed within each test case. For example, sending a request to the API, checking the response, etc."}),"\n",(0,n.jsx)(t.li,{children:"The test cases in the Stories folder call these steps."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>l});var n=s(6540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);