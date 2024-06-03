"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[36],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||i;return n?a.createElement(m,o(o({ref:t},l),{},{components:n})):a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8143:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"contract_testing_pact",title:"API Contract Testing With Pact",sidebar_label:"API Contract Testing With Pact",description:"Contract testing with Pact",keywords:["contract testing","pact","consumer","provider","pact stub service","pact broker","example","java","dotnet"]},c=void 0,p={unversionedId:"testing/contract_testing_pact",id:"testing/contract_testing_pact",title:"API Contract Testing With Pact",description:"Contract testing with Pact",source:"@site/docs/testing/contract_testing_pact.md",sourceDirName:"testing",slug:"/testing/contract_testing_pact",permalink:"/docs/testing/contract_testing_pact",draft:!1,tags:[],version:"current",frontMatter:{id:"contract_testing_pact",title:"API Contract Testing With Pact",sidebar_label:"API Contract Testing With Pact",description:"Contract testing with Pact",keywords:["contract testing","pact","consumer","provider","pact stub service","pact broker","example","java","dotnet"]},sidebar:"docs",previous:{title:"Automated UI Visual Testing",permalink:"/docs/testing/visual_analysis"},next:{title:"Automated Accessibility Testing",permalink:"/docs/testing/accessibility_testing"}},l={},u=[{value:"Consumer-Driven contract testing with Pact",id:"consumer-driven-contract-testing-with-pact",level:2},{value:"<code>[Utils](./utils)</code>",id:"utilsutils",level:3},{value:"Pact stub service",id:"pact-stub-service",level:3},{value:"&#39;Can I Deploy&#39;",id:"can-i-deploy",level:3},{value:"Pact working example",id:"pact-working-example",level:3},{value:"Tests",id:"tests",level:4},{value:"Running &quot;PACT&quot; for Java Application",id:"running-pact-for-java-application",level:3}],h={toc:u},d="wrapper";function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(d,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"consumer-driven-contract-testing-with-pact"},"Consumer-Driven contract testing with Pact"),(0,i.kt)("p",null,"Consumer-Driven Contract (CDC) Testing is a pattern that allows a consumer (i.e:\na client) and a provider (i.e. an API provider) to communicate using an agreed\ncontract (a pact)."),(0,i.kt)("p",null,"The following documentation is an overview of the Pact implementation as part of the templated SSR web app."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeAll")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"afterAll")," hooks in Jest is not before all tests but\nbefore each file.")),(0,i.kt)("h3",{id:"utilsutils"},(0,i.kt)("inlineCode",{parentName:"h3"},"[Utils](./utils)")),(0,i.kt)("p",null,"These are reusable components that can be used for any Javascript consumer setup with pact-js."),(0,i.kt)("p",null,"We are using Jest to wrap pact-js to create the interactions and\ngenerate the Pacts for the web app as a consumer. Following the examples on\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pact-foundation/pact-js"},"pact-js"),"."),(0,i.kt)("p",null,"There is full documentation for how contract testing works available on the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.pact.io/how_pact_works"},"Pact website"),"."),(0,i.kt)("p",null,"A global 'provider' variable is set up in the ",(0,i.kt)("inlineCode",{parentName:"p"},"[pactSetup.ts](./utils/pactSetup.ts)"),"\nfile. Then the ",(0,i.kt)("inlineCode",{parentName:"p"},"[pactTestWrapper.ts](./utils/pactTestWrapper.ts)")," ensures each test\nfile will have the provider setup for them."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"pactFileWriteMode")," option been set to ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," in the provider that the\npacts append to. Please see\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.pact.io/implementation_guides/ruby/configuration#pactfile_write_mode"},"pactFileWriteMode")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Export the Consumer and Provider names when running locally, or define in Azure Pipelines Library"',title:'"Export',the:!0,Consumer:!0,and:!0,Provider:!0,names:!0,when:!0,running:!0,"locally,":!0,or:!0,define:!0,in:!0,Azure:!0,Pipelines:!0,'Library"':!0},"export PACT_CONSUMER= \\\nexport PACT_PROVIDER=\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Generate and verify pacts against mock"',title:'"Generate',and:!0,verify:!0,pacts:!0,against:!0,'mock"':!0},"npm run test:pact\n")),(0,i.kt)("p",null,"Due to the afterAll hooks in Jest not invoking after all tests, but before each\nfile, there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"[pactPublish](./utils/pactPublish.ts)")," script to publish the\npacts to the configured broker."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Export broker credentials for running locally, or define in Azure Pipelines Library"',title:'"Export',broker:!0,credentials:!0,for:!0,running:!0,"locally,":!0,or:!0,define:!0,in:!0,Azure:!0,Pipelines:!0,'Library"':!0},"export PACT_BROKER= \\\nexport PACT_BEARER_TOKEN= \\\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Publish the pacts to the configured broker"',title:'"Publish',the:!0,pacts:!0,to:!0,configured:!0,'broker"':!0},"npm run test:pact-publish\n")),(0,i.kt)("h3",{id:"pact-stub-service"},"Pact stub service"),(0,i.kt)("p",null,"Pact contracts are easily turned into locally running API stubs. They are great\nfor use as a simple service to run integration tests against, whether with\nJest, or with Cypress. This ensures that you can test your application without\nhitting the actual endpoint, and ensures the same response every time, without\nduplicating mock definitions."),(0,i.kt)("p",null,"If gives the consumer confidence that if the contract tests are passing with the\nprovider, then the mocks should suffice to test parts of their application\nagainst."),(0,i.kt)("p",null,"No more updating stub responses that go out of date. Hooray!"),(0,i.kt)("p",null,"The Pact files (.json) are generated when the Pact tests are run\n(",(0,i.kt)("inlineCode",{parentName:"p"},"npm run tests:pact"),"), and are published to the broker on succeeding. To get the latest pact file to generate the stub service from, you can either:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run the tests, which will output the Pact .json files to\n",(0,i.kt)("inlineCode",{parentName:"li"},"[**tests**/pacts](./__tests__/pacts)")),(0,i.kt)("li",{parentName:"ol"},"Pull down the latest passing contracts from the broker\n(",(0,i.kt)("inlineCode",{parentName:"li"},"https://PACT_BROKER/pacts/provider/PROVIDER/consumer/CONSUMER/latest"),")")),(0,i.kt)("p",null,"Once the files are sourced, it's as simple as starting the stub service either\nfrom the npm script in CI, or by calling the\n",(0,i.kt)("inlineCode",{parentName:"p"},"[pactStubServer.ts](./pact/packStubServer.ts)")," from your test."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="To start the Pact stub server"',title:'"To',start:!0,the:!0,Pact:!0,stub:!0,'server"':!0},"npm run test:pact-start-stub\n")),(0,i.kt)("p",null,"To test the server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="To test that the service is running and returning expected responses"',title:'"To',test:!0,that:!0,the:!0,service:!0,is:!0,running:!0,and:!0,returning:!0,expected:!0,'responses"':!0},'curl -v localhost:8389/v1/menu/e98583ad-0feb-4e48-9d4f-b20b09cb2633 -H "Accept: application/json"\n')),(0,i.kt)("p",null,"Please remember to always stop your server once done testing."),(0,i.kt)("h3",{id:"can-i-deploy"},"'Can I Deploy'"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pact.io/pact_broker/can_i_deploy"},"Can I Deploy")," tool ensures you are safe to deploy your application. Before deploying to a new environment, you need to know if the version is compatible with the provider version. Instead of checking the broker, we can poll the broker and check programmatically with the latest versions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run can I deploy using the pact-js SDK"',title:'"Run',can:!0,I:!0,deploy:!0,using:!0,the:!0,"pact-js":!0,'SDK"':!0},"npm run test:pact-can-i-deploy-ci\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The above command is called in the pipeline")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run can I deploy using the pact CLI"',title:'"Run',can:!0,I:!0,deploy:!0,using:!0,the:!0,pact:!0,'CLI"':!0},"npm run test:pact-can-i-deploy-cli\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example output:"),"\nThis demonstrates that the consumer is safe to deploy, and will return exit code 0 (this means yes!)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"INFO: Asking broker at https://amido-stacks.pact.dius.com.au if it is possible to deploy\n")),(0,i.kt)("h3",{id:"pact-working-example"},"Pact working example"),(0,i.kt)("p",null,"We have included a Pact test which will deploy to a PactFlow broker, and verify against the MenuAPI .NET API. This is to ensure that there is an example working test that can be used as a reference."),(0,i.kt)("p",null,"Example ENV_VARS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export PACT_BEARER_TOKEN=\nexport PACT_BROKER=https://amido-stacks.pact.dius.com.au\nexport PACT_CONSUMER=GenericMenuConsumer\nexport PACT_PROVIDER=MenuAPI\n")),(0,i.kt)("p",null,"Maintainers and contributors may obtain the ",(0,i.kt)("inlineCode",{parentName:"p"},"PACT_BEARER_TOKEN")," if they request access to the PactFlow instance. Else, this will be run in the Azure DevOps Pipeline."),(0,i.kt)("h4",{id:"tests"},"Tests"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"[get-menu-by-id.test.pact.ts](./get-menu-by-id.test.pact.ts)")," is an example test. This calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"[menuServive](./mocks/menuService.ts)")," Menu API when running locally."),(0,i.kt)("p",null,"When the tests pass, the contract will be written to ",(0,i.kt)("inlineCode",{parentName:"p"},"[pacts](./pacts/genericmenuconsumer-menuapi.json)"),", following the naming convention: ",(0,i.kt)("inlineCode",{parentName:"p"},"<PACT_CONSUMER>-<PACT_PROVIDER>"),"."),(0,i.kt)("p",null,"Some good practices:\n\u2705 Use Pact Matchers to ensure we account for state change, e.g. no hardcoded values for menus in the database, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pact.io/getting_started/matching"},"https://docs.pact.io/getting_started/matching")," for more information.\n\u2705 Ensure that the provider state has been configured by the Provider"),(0,i.kt)("p",null,"It's important to get the ",(0,i.kt)("inlineCode",{parentName:"p"},"PACT_CONSUMER")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"PACT_PROVIDER")," names correct, as these form the key for verify."),(0,i.kt)("p",null,"\u26a0\ufe0f /pacts: these are checked in for reference only. Please do not change the outputted .json files. They are created on successful test runs by Pact. These will be published to the broker upon successful run in the pipeline, with the corresponding version tags."),(0,i.kt)("h3",{id:"running-pact-for-java-application"},'Running "PACT" for Java Application'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Prerequisite:"),"\nPlease provide the Pact_Broker_URL and Pact_Broker_Token to the provider's pom"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"    <pactBrokerUrl>Pact_Broker_URL</pactBrokerUrl>\n    <pactBrokerToken>Pact_Broker_Token</pactBrokerToken>\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Steps:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"- Consumer: Creating the contract\n  Run the 'GenericMenuConsumer.java' class from the following path: api-tests/src/test/java/com/xxENSONOxx/xxSTACKSxx/api/pact/GenericMenuConsumer.java\n\n  Note: this step can be skipped in case the pact file already exists in .pact/pacts directory.\n- Execute mvn pact:publish from 'api-tests' directory to publish the consumer pact to broker.\n- Execute mvn pact:verify from the provider (java directory).\n- Execute mvn pact:publish from 'java' directory to publish this pact to broker.\n- Execute mvn pact:can-i-deploy -Dpacticipant=YOUR_CONSUMER_NAME -DpacticipantVersion=CONSUMER_VERSION -Dto=ENV_TO_DEPLOY from 'java' directory including this variables: to check if the versions of consumer and provider are compatible.\n")))}m.isMDXComponent=!0}}]);