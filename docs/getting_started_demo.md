---
id: getting_started_demo
title: Demo - Using the scaffolding-cli to build an application
sidebar_label: Demo - Using the scaffolding-cli to build an application
---

[![npm](https://img.shields.io/npm/dt/@amidostacks/scaffolding-cli)](https://www.npmjs.com/package/@amidostacks/scaffolding-cli)

Please refer to the [scaffolding-cli](https://github.com/amido/stacks-webapp-template/tree/master/packages/scaffolding-cli) package for more information.

## Scaffolding-cli

Builds a Node.js with React Server Side Rendered Webapp Template, with
accompanying infrastruce code. All from your CLI.

## Getting Started

We are using npx to execute and create the
[template-cli](./packages/scaffolding-cli)
[npx](https://www.npmjs.com/package/npx).

We are supporting and running [node@12](https://nodejs.org/en/about/releases/).
Please ensure that your local environment has the correct version
[installed](https://nodejs.org/en/download/).

## Create a SSR webapp from template

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

7. To test the deploy folder has been correctly provisioned prior to checking
   you need to at this point in time copy over a sample backend-config and
   terraform vars. Currently vars.tf and provider configuration is not
   automatically updated. Future iterations will include this.

The safest way to run and maintain this going forward is to rely on environment
variables for credentials as that is the way the pipeline will trigger the
executions of terraform.

Sample export script with correct environment vars:

```bash
#WINDOWS: comment out the lines below
$ export ARM_CLIENT_ID= \
ARM_CLIENT_SECRET= \
ARM_SUBSCRIPTION_ID= \
ARM_TENANT_ID=
##########################################################

#WINDOWS: uncomment the following lines and fill in values
# Set-Variable -Name "ARM_CLIENT_ID" -Value ""
# Set-Variable -Name "ARM_CLIENT_SECRET" -Value ""
# Set-Variable -Name "ARM_SUBSCRIPTION_ID" -Value ""
# Set-Variable -Name "ARM_TENANT_ID" -Value ""
##########################################################

$ echo "
vnet_id                 = \"amido-stacks-vnet-uks-dev\"
rg_name                 = \"amido-stacks-rg-uks-dev\"
resource_group_location = \"uksouth\"
name_company            = \"amido\"
name_project            = \"stacks\"
name_component          = \"spa\"
name_environment        = \"dev\"
" > ${YOUR_GIT_STACKS_WEB_APP_PATH}/stacks-webapp-template/deploy/terraform/azure/backend.local.tfvars
```

```bash
$ cd ${YOUR_GIT_STACKS_WEB_APP_PATH}/deploy/terraform/azure
$ terraform init -backend-config=./backend.local.tfvars
$ terraform plan
```
