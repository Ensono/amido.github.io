---
id: getting_started_demo
title: Using the scaffolding-cli to build an application
sidebar_label: Using the scaffolding-cli to build an application
---

[![npm](https://img.shields.io/npm/dt/@amidostacks/scaffolding-cli)](https://www.npmjs.com/package/@amidostacks/scaffolding-cli)

Please refer to the [scaffolding-cli](https://github.com/amido/stacks-webapp-template/tree/master/packages/scaffolding-cli) package for more information.

## Scaffolding-cli

Templates out a fully functional and deployable project in a variety of flavours. 
Including tests (unit, integration), and infrastructure and deployment definitions. 
All from your CLI.

## Getting Started

We are using npx to execute and create the
[template-cli](https://www.npmjs.com/package/@amidostacks/scaffolding-cli)
[npx](https://www.npmjs.com/package/npx).

We are supporting and running [node@12](https://nodejs.org/en/about/releases/).
Please ensure that your local environment has the correct version
[installed](https://nodejs.org/en/download/).

## Prerequisites
Below are the pre-requisites to get off the ground

### Public Cloud
You will need a public cloud account with one of the following providers. 

you can find more information around the infrastructure bootstrapping and requirements [here](./infrastructure_code.md).

#### Azure 
You will need to create, or ask your admin for Azure to create for you, an [SPN account](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal) within a new or existing subscription, that will have the owner privileges. Optionally, you can create 2 to follow security best practice [here](./infrastructure_code.md####Azure).

This SPN will be used throughout to create and manage resources within the cloud via terraform. You can find additional info on how to use these locally along with recommnded usage.

#### GCP
Coming soon


#### AWS 
Coming soon


### CI/CD  Tooling
You will need access to CI/CD tooling with YAML based input. 

#### AzureDevOps
You will require TFS library - MS speak for environment variables that are scoped to your jobs/stages within the pipeline as a bare minimum, instructions on how to create it can be found [here](https://docs.microsoft.com/en-us/azure/devops/pipelines/library/?view=azure-devops)

You will use the credentials from your SPN created above to place the values here:

![infra_vars](https://i.ibb.co/jT8Hf7q/image-4.png "Infra variables")

In this instance it is important that they are named as per above: 
 - azure_client_id
 - azure_client_secret
 - azure_subscription_id
 - azure_tenant_id

As these are used downstream in all interactions with the Azure API to create any kind of infrastructure using Terraform within both shared-services and application layer.

You can name it whatever you choose, and ensure that your yaml definitions corresponds to it for all pipelines dealing with infrastructure - e.g. infra-pipeline and app/api-pipelines in the `Infra$Stage` jobs.

Similarly you can/should create a set of variables for application level variables that will be used at pipeline runtime to configure your application. By default you will have all tests and anything requiring external tooling disabled.

![app_vars](https://i.ibb.co/52KX3c2/image-5.png "App Vars")

Please ensure these are scoped correctly you can find it in the YAML under 
`  - group: REPLACE_ME_FOR_LIBRARY_NAME`

where `REPLACE_ME_FOR_LIBRARY_NAME` in this example would correspond to `amido-stacks-demo-infra` || `amido-stacks-demo-app`


#### Jenkins
Coming soon

#### Gitlab
Coming soon

### Variables and Secrets
#### TODO
<!-- TODO -->

## What you get
At a high level each of the options within the CLI will roughly provide the same outcome, with tailored code for specific cloud platform and deployement tool combination.

CSR being the only exception where the infrastructure doesn't cover K8s infrastructure as it is not required.

### OOTB template
Includes a full SDLC for a chosen template app (API/UI/tests) on a specified deployment (CI/CD) platform with the below conceptiual stages. However as the output is entirely modular it allows for easy extension by user in deploy steps of either k8s or terraform - user should be able to enrich the generated output with their specific needs.

applications:
  - CI
    - Unit test
    - Tests...
    - Build (Transpile/compile)
    - Generate Docker Image (except for CSR)
    - Publish Image (Largely relying on Cloud Registries Scanning capabilities)
        - If you are publishing to registries other than ACR/ECR/GCR
        - Enable vulnerability scans in the YAML
  - Stage (Dev/test/prod)
    - [Infra](###Infrastructure\ \template)
        - Terraform lib

        - Coming soon... Kubernetes operators
    - Deploy
        - kubectl apply || Blob update with React app
    - Smoke test
        - Lighthouse/selenium/testcafe

infrastructure:
  - Stage (nonprod/prod - this is subjective to user preference, can be dev/test/prod)
      - infra:
          - K8s (AKS/GKE/EKS)
          - Network + subnets
          - BLOB like storage (blob/S3)
          - Vault solution
          - SSL termination (AppGateway)
          - DNS zone
      - k8s configuration:
          - ingress controller - with automatic IP binding and AppGateway intgeration
          - pod level identity management (addpodidentity/fargate-profile)
          - gatekeeper

tests (in standalone mode):
  - LOTS OF STUFF TO GO HERE

<!-- ### Infrastructure template

  - Sharedservices layer:
   

  - Application layer: -->


### Business Source code

#### Azure
An UI app in react (SSR/CSR flavour):
  - SSR
    - express mware for authentication using passport 
    - routing set up within nextjs from client to server proxying out to defined endpoints (sample using the yumido sample )
    - ...
  - CSR:
    - PKCE integration
    - API integration
    - ...

An API in Java (springboot) and .netcore flavours with: 
  - CosmosDB integration (deploy/infra/yaml)
  - swagger generation

Coming soon crednetialless auth within azure using podidentity


## Examples
Below are some examples of how to use the CLI for specific outcomes. Please read the [advanced usage](###Advanced\ \Usage) section on how to apply the output in more complex scenarios.

### Basic
A generated outcome is a fully functioning folder that can be used as an entire repo on a SCM provider of your choice.

#### Create a SSR webapp from template

Creates an amidostacks template in your local directory much like
express-generate with an addition of `build/, deploy/, docs/, src/` folders as
per the Amido Stacks standards.

```bash
npx @amidostacks/scaffolding-cli@latest run -i
```

1. Follow the CLI prompts to create a templated app with user defined
   configuration: ssr this is why t - Project Name: _default_: current directory
   (will create a directory with this name)

   - Project Type: _default_: SSR (server side rendering)
   - Platform: _default_: AKS (Azure Kubernetes Service)
   - CI/CD Tooling: _default_: AzureDevOps

2. Navigate to the created project directory to install template dependencies:
   e.g. ${SELECTED_DIR}/$PROJECT_NAME

```bash
$ cd ${SELECTED_DIR}/$PROJECT_NAME/src/
$ npm install
```

6. Build and run the app:

```bash
$ npm run build
$ npm run start
```

Open Browser and hit [http://localhost:3000](http://localhost:3000)

<!-- MORE examples here Test only? Infra Only? -->

### Advanced Usage
Whilst the basic examples are fine for small projects and get you off the ground quickly to have a deployed application securly behind a domain of your choice. 

#### Using Monorepo?
When you work within a monorepo, you will have to do a few minor adjustments to the generated output. 

Simply `cd` into the root directory of your monorepo and run  the cli as many times as you want to create the desired service components, e.g. a UI (using either CSR/SSR), some APIs and you may want a separate infrastructure and blackbox test directories - to end up with below sample.

You will want to merge the .gitignore files from each component and place in the root - or if you have an existing one make sure it covers all your application types. 

Since you will probably want to have a shared services type infrastructure controlled from a central place you can ignore or remove  `deploy/$cloud/infra` folders (ensure the yaml files are also not used within your pipeline tool). IT IS IMPORTANT HOWEVER TO understand within your project what infrastructure should live with the application - [Amido Infra libs](https://github.com/amido/stacks-webapp-template/tree/master/libs/orchestration) has a variety of OSS libraries you can use within your components e.g. CosmosDB, Blob, Qeueu, Topic managers for all 3 major clouds. You can also choose to use cloud's own provided templates, always better to opt for a library with a predefined interface  rather than building your definitions for application layer infra. it can be re-used by other components without copy/pasta.

When a project gets big you will want to have an E2E type tests to ensure regressions aren't introduced and UX is preserved. whilst all components have their own tests that cover units/regressions/etc... a black box test is often (if not always) required in projects of distributed nature.

<!-- TODO: this diagram needs cleaning up -->

├── menu-api
│   ├── aux_scripts
│   ├── build
│   │   └── azDevops
│   │       └── azure
│   ├── deploy
│   │   ├── azure
│   │   │   ├── app
│   │   │   └── infra
│   │   └── k8s
│   │       └── app
│   ├── docs
│   ├── src
│   │   ├── api
│   │   │   ├── Company.Project.API
│   │   │   ├── Company.Project.API.ComponentTests
│   │   │   ├── Company.Project.API.ContractTests
│   │   │   ├── Company.Project.API.Models
│   │   │   ├── Company.Project.Application.CommandHandlers
│   │   │   ├── Company.Project.Application.Integration
│   │   │   ├── Company.Project.Application.QueryHandlers
│   │   │   ├── Company.Project.CQRS
│   │   │   ├── Company.Project.CQRS.UnitTests
│   │   │   ├── Company.Project.Common
│   │   │   ├── Company.Project.Common.UnitTests
│   │   │   ├── Company.Project.Domain
│   │   │   ├── Company.Project.Domain.UnitTests
│   │   │   ├── Company.Project.Infrastructure
│   │   │   └── Company.Project.Infrastructure.IntegrationTests
│   │   ├── tests
│   │   │   ├── Functional
│   │   │   └── Performance
│   │   └── ui
│   └── test
│       ├── Company.Project.E2E.Selenium
│       │   ├── Api
│       │   ├── Configuration
│       │   ├── Selenium
│       │   └── Tests
│       └── testcafe
│           ├── api
│           ├── fixtures
│           └── utils
└── node-ssr
    ├── aux_scripts
    ├── build
    │   └── azDevops
    │       └── azure
    ├── deploy
    │   ├── azure
    │   │   ├── app
    │   │   └── infra
    │   └── k8s
    │       └── app
    ├── docs
    ├── src
    │   ├── __mocks__
    │   │   └── next
    │   ├── __tests__
    │   │   ├── axe
    │   │   ├── cypress
    │   │   ├── fixtures
    │   │   └── pact
    │   ├── components
    │   │   ├── ApiPane
    │   │   ├── CreateForm
    │   │   ├── Header
    │   │   ├── Layout
    │   │   ├── Link
    │   │   ├── Notifier
    │   │   ├── RestaurantList
    │   │   ├── RestaurantListItem
    │   │   └── Search
    │   ├── compositions
    │   │   ├── create
    │   │   └── home
    │   ├── config
    │   ├── constants
    │   │   └── apis
    │   ├── ducks
    │   │   ├── add-menu
    │   │   └── get-menus
    │   ├── environment-configuration
    │   ├── interfaces
    │   ├── pages
    │   ├── public
    │   │   └── static
    │   ├── server
    │   │   ├── api
    │   │   ├── core
    │   │   └── middlewares
    │   ├── services
    │   │   └── menus
    │   ├── state-management
    │   └── utils
    └── test
        ├── testcafe
        │   ├── api
        │   ├── fixtures
        │   └── utils
        └── xxAMIDOxx.xxSTACKSxx.E2E.Selenium
            ├── Api
            ├── Configuration
            ├── Selenium
            └── Tests
<!-- test_selenium -->
<!-- infra only -->
── node-ssr.bootstrap-config.json
── menu-api.bootstrap-config.json


