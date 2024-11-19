"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[5880],{2416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=n(4848),r=n(8453);const a={id:"provider_contract_testing_dotnet",title:"Contract Testing - .Net Provider",sidebar_label:"Contract Testing",hide_title:!1,hide_table_of_contents:!1,description:"Dotnet provider contract tests",keywords:["dotnet api tests","rest","api","contract","pact","pactflow","pipeline","dotnet","testing"]},o=void 0,c={id:"workloads/azure/backend/netcore/testing/provider_contract_testing_dotnet",title:"Contract Testing - .Net Provider",description:"Dotnet provider contract tests",source:"@site/docs/workloads/azure/backend/netcore/testing/provider_contract_testing.md",sourceDirName:"workloads/azure/backend/netcore/testing",slug:"/workloads/azure/backend/netcore/testing/provider_contract_testing_dotnet",permalink:"/docs/workloads/azure/backend/netcore/testing/provider_contract_testing_dotnet",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"provider_contract_testing_dotnet",title:"Contract Testing - .Net Provider",sidebar_label:"Contract Testing",hide_title:!1,hide_table_of_contents:!1,description:"Dotnet provider contract tests",keywords:["dotnet api tests","rest","api","contract","pact","pactflow","pipeline","dotnet","testing"]},sidebar:"docs",previous:{title:"Functionally Testing the API",permalink:"/docs/workloads/azure/backend/netcore/testing/functional_testing_netcore"},next:{title:"Infrastructure",permalink:"/docs/workloads/azure/backend/netcore/infrastructure_netcore"}},s={},l=[{value:"Contract Testing the API",id:"contract-testing-the-api",level:2},{value:"What is Bi-Directional Contract Testing",id:"what-is-bi-directional-contract-testing",level:3},{value:"Getting Started",id:"getting-started",level:3},{value:"Pipeline Overview",id:"pipeline-overview",level:3},{value:"Publish OpenAPI specification",id:"publish-openapi-specification",level:4},{value:"Execute <code>can-i-deploy</code>",id:"execute-can-i-deploy",level:4},{value:"Register a deployment",id:"register-a-deployment",level:4}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"contract-testing-the-api",children:"Contract Testing the API"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"../../netcore/introduction_netcore",children:"Ensono.Stacks.Templates"})," included templates for a ",(0,i.jsx)(t.a,{href:"../../netcore/quickstart/web_api/create_project_netcore",children:"WebAPI"})," and a ",(0,i.jsx)(t.a,{href:"../../netcore/quickstart/web_api_cqrs/create_project_netcore",children:"WebAPI with CQRS"}),". Each of these templates will include a Provider implementation of Bi-Directional Contract Testing to accelerate teams getting started with contract testing."]}),"\n",(0,i.jsx)(t.h3,{id:"what-is-bi-directional-contract-testing",children:"What is Bi-Directional Contract Testing"}),"\n",(0,i.jsx)(t.p,{children:"Bi-Directional Contract Testing is a type of static contract testing where two contracts - one representing consumer expectations, and another representing the provider's capability - are compared to ensure they are compatible."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Bi-Directional contract testing replaces Consumer-Driven contract testing which is a more complicated but more thorough version of contract testing. Bi-Directional contract testing allows a provider to publish their OpenAPI specification instead of a Pact contract. When the provider and/or the consumer publish their contract, PactFlow will verify that the two contracts (consumer Pact and provider OpenAPI spec) are compatible."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The general steps for a ",(0,i.jsx)(t.strong,{children:"Provider"})," in Bi-Directional contract testing are as follows:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Create the provider contract (i.e. OpenAPI specification) either manually or generated by code"}),"\n",(0,i.jsx)(t.li,{children:"(Optional) The provider contract is tested against the provider itself to ensure the API satisfies the contract"}),"\n",(0,i.jsx)(t.li,{children:"The contract is published to PactFlow"}),"\n",(0,i.jsx)(t.li,{children:"Run can-i-deploy to check the compatibility with its consumers"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In .Net WebAPI Stack, the OpenAPI specification is generated based upon the code, so there is no requirement for it to include verification tests (step 2) as we know the implementation and specification match."}),"\n",(0,i.jsx)(t.p,{children:"The following diagram shows an example flow of a Bi-Directional contract testing implementation with 1 provider and 1 consumer."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Bi-Directional Contract Testing",src:n(7661).A+"",width:"2380",height:"2197"})}),"\n",(0,i.jsx)(t.h3,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsxs)(t.p,{children:["When creating an API project using the ",(0,i.jsx)(t.a,{href:"../../netcore/introduction_netcore",children:"Ensono.Stacks.Templates"}),", the created ",(0,i.jsx)(t.code,{children:"ci.yml"})," pipeline will include the steps required for Contract Testing as a provider."]}),"\n",(0,i.jsxs)(t.p,{children:["Within the contract testing steps, there are a number of variables that are required. In order for the pipeline to work as expected, the variable values will need to be updated before executing the pipeline.\nVariables can be found within ",(0,i.jsx)(t.code,{children:"./build/azDevOps/azure/ci-vars.yml"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"    # Pact Contract Tests\n  - name: PACT_BROKER_BASE_URL\n    value: 'https://ensono-stacks.pactflow.io'\n  - name: PACTICIPANT_NAME\n    value: 'stacks-provider'\n  - name: OAS_FILE\n    value: ./src/simple-api/contracts/openapi-v1.yaml\n  - name: run_contract_tests\n    value: flag\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"PACT_BROKER_BASE_URL"})," needs to be updated to use a new instance of PactFlow. Details on creating a PactFlow instance can be found ",(0,i.jsx)(t.a,{href:"https://pactflow.io/pricing/",children:"here"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"PACTICIPANT_NAME"})," should be the name of your application"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"OAS_FILE"})," is the relative path to the generated OpenAPI specification"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"run_contract_tests"})," is a flag to enable/disable all contract testing steps. This is false by default and should only be set to true once users have a new PactFlow instance."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["In addition to these variables, the pipeline steps require a ",(0,i.jsx)(t.code,{children:"PACT_BROKER_TOKEN"}),". This is a secret value and should be added to your pipeline as a secret environment variable.\nYou can get the value of this from within the Settings of your PactFlow broker instance."]}),"\n",(0,i.jsx)(t.h3,{id:"pipeline-overview",children:"Pipeline Overview"}),"\n",(0,i.jsx)(t.h4,{id:"publish-openapi-specification",children:"Publish OpenAPI specification"}),"\n",(0,i.jsxs)(t.p,{children:["In order to publish Pacts, we need to first install the Docker image. Once we have the image, we can run the ",(0,i.jsx)(t.code,{children:"publish-provider-contract"})," command."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:'          - task: Bash@3\n            displayName: \'Contract Tests: Pull Pact CLI Docker image\'\n            condition: eq(variables.run_contract_test, true)\n            inputs:\n              targetType: inline\n              script: |\n                docker pull pactfoundation/pact-cli:latest\n\n          - task: Bash@3\n            displayName: \'Contract Tests: Publish OpenAPI spec to PactFlow\'\n            condition: eq(variables.run_contract_test, true)\n            inputs:\n              targetType: inline\n              script: |\n                docker run --rm \\\n                  -w ${PWD} \\\n                  -v ${PWD}:${PWD} \\\n                  -e PACT_BROKER_BASE_URL=$(PACT_BROKER_BASE_URL) \\\n                  -e PACT_BROKER_TOKEN=$(PACT_BROKER_TOKEN) \\\n                  pactfoundation/pact-cli:latest \\\n                  pactflow publish-provider-contract \\\n                  $(OAS_FILE) \\\n                  --provider $(PACTICIPANT_NAME) \\\n                  --provider-app-version $(version_number) \\\n                  --branch $(Build.SourceBranchName) \\\n                  --verification-results $(OAS_FILE) \\\n                  --verifier "Verification not necessary when the OpenAPI spec is generated by the API code" \\\n                  --tag $(version_number) $(Build.SourceBranchName) \\\n                  --content-type "application/yaml" \\\n                  --verification-exit-code 0 \\\n                  --verification-results-content-type "application/yaml" \\\n                  --verification-results-format "yaml"\n            env:\n              PACTFLOW_TOKEN: $(PACT_BROKER_TOKEN)\n'})}),"\n",(0,i.jsxs)(t.p,{children:["When the pact is being published, attributes including the branch name, version and tags are added to the command. These all help identify contracts within the PactFlow broker. These are essential to allow consumers to target the correct version of the provider contract in PactFlow when running ",(0,i.jsx)(t.code,{children:"can-i-deploy"}),"."]}),"\n",(0,i.jsxs)(t.h4,{id:"execute-can-i-deploy",children:["Execute ",(0,i.jsx)(t.code,{children:"can-i-deploy"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"can-i-deploy"})," is a command provided by PactFlow that checks the state of relationships between consumers and providers registered in PactFlow. If the contracts are compatible, ",(0,i.jsx)(t.code,{children:"can-i-deploy"})," will succeed, otherwise it will return a failure.\nThe docker image needs to be pulled here again as this is executed on a new build agent within Azure DevOps."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"      - job: canideploy_dev\n        condition: eq(variables.run_contract_test, true)\n        steps:\n          - task: Bash@3\n            displayName: 'Pull Pact CLI Docker image'\n            inputs:\n              targetType: inline\n              script: |\n                docker pull pactfoundation/pact-cli:latest\n\n          - task: Bash@3\n            displayName: 'Contract Tests: can-i-deploy to dev'\n            inputs:\n              targetType: inline\n              script: |\n                docker run --rm \\\n                  -e PACT_BROKER_BASE_URL=$(PACT_BROKER_BASE_URL) \\\n                  -e PACT_BROKER_TOKEN=$(PACT_BROKER_TOKEN) \\\n                  pactfoundation/pact-cli:latest \\\n                  broker can-i-deploy \\\n                  --pacticipant $(PACTICIPANT_NAME) \\\n                  --version $(version_number) \\\n                  --to-environment $(Environment.ShortName)\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Arguments provided identify which provider and version of the contract is being validated against the registered consumer contracts. This will check the against contracts on the environment we are trying to deploy to (set in ",(0,i.jsx)(t.code,{children:"--to-environment"}),")."]}),"\n",(0,i.jsx)(t.h4,{id:"register-a-deployment",children:"Register a deployment"}),"\n",(0,i.jsxs)(t.p,{children:["After we have deployed our API (with a new OpenAPI specification version), we need to let PactFlow know what environment that specification has been deployed to. This is essential when ",(0,i.jsx)(t.strong,{children:"consumers"})," are running ",(0,i.jsx)(t.code,{children:"can-i-deploy"})," as they will need to confirm when they deploy to that environment, the contracts are compatible."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"                - task: Bash@3\n                  displayName: 'Contract Tests: Record-deployment to dev'\n                  condition: and(succeeded(), eq(variables.run_contract_test, true))\n                  inputs:\n                    targetType: inline\n                    script: |\n                      docker run --rm \\\n                        -e PACT_BROKER_BASE_URL=$(PACT_BROKER_BASE_URL) \\\n                        -e PACT_BROKER_TOKEN=$(PACT_BROKER_TOKEN) \\\n                        pactfoundation/pact-cli:latest \\\n                        broker record-deployment \\\n                        --pacticipant $(PACTICIPANT_NAME) \\\n                        --version $(version_number) \\\n                        --environment $(Environment.ShortName)\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},7661:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/StacksQA_Bi-Directional-Contract-Testing-4a0f5d039b8f9f2f0debbff318b09a7d.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var i=n(6540);const r={},a=i.createContext(r);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);