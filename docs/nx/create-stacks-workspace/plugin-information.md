---
id: ensono-stacks-create-stacks-workspace
title: "@ensono-stacks/create-stacks-workspace"
sidebar_label: "@ensono-stacks/create-stacks-workspace"
description: "Using the create-stacks-workspace with stacks!"
keywords:
  - NX
  - monorepo
  - stacks
  - ensono
  - "create-stacks-workspace"
  - generator
  - executor
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Create a new Stacks Nx workspace. Using the create-stacks-workspace script will quickly allow you to initialize a new NX workspace with the Stacks recommended plugins, packages and configuration to get started on a new project quickly.

The Stacks `create-stacks-workspace` script will 
- Run Nx [create-nx-workspace](https://nx.dev/packages/nx/documents/create-nx-workspace) command to setup a new NX workspace passing along any command line arguments provided 
- Install any recommended plugin/generators/executors from Stacks. If the `next` preset is selected the [Ensono Next plugin](/docs/nx/next/ensono-stacks-next) will be installed. With all presets the [Ensono Workspace Plugin](/docs/nx/workspace/ensono-stacks-workspace) will be installed. (see [presets](/docs/nx/create-stacks-workspace/ensono-stacks-create-stacks-workspace#presets))
- Configure the NX workspace. This will involve updating the NX.json file with any information provided from the command line arguments
- Execute recommended generators from Stacks to initialize the workspace/projects depending on the options provided. 
- Create an e2e test project if this option was selected

## Setting up @ensono-stacks/create-stacks-workspace

### Execution 
Run the @ensono-stacks/create-stacks-workspace with the following command including any options see [command line arguments](/docs/nx/create-stacks-workspace/ensono-stacks-create-stacks-workspace#command-line-arguments):

 ```bash
 npx @ensono-stacks/create-stacks-workspace@latest
  ```

### Presets
On running the script you will be asked for a monorepo preset with the following options

```
apps              [an empty monorepo with no plugins with a layout that works best for building apps]
react             [a monorepo with a single React application]
next.js           [a monorepo with a single Next.js application]
```

Each preset will install, configure and run any recommended plugins for that specific preset. For example the next.js preset will run the [NX NextJS](https://nx.dev/packages/next) plugin application generator as well as the [Ensonso stacks NextJS](/docs/nx/next/ensono-stacks-next) init plugin generator.

**You will then be asked which test runner to include for e2e testing:**
1. none: Creates your application without an e2e test project     
2. playwright: Installs the [@ensono-stacks/playwright](../playwright/plugin-information.md) plugin and creates an e2e test project for your application using playwright.

### Command line arguments

The following command line arguments are available:

| Option    | Description           | Type      | Example Accepted Values   |Default            |
| ---       | -------------------   | ---       | ---               | ---               |
| --name | Workspace name (e.g. org name)  | string   |  nameOfWorkspace       |               |
| --preset | Customizes the initial content of your workspace  | string    | apps/ts/next/react-monorepo                   |     |
| --dir | The directory to install to  | string   |  /path/to/dir       | ./              |
| --appName | The name of the application when a preset with pre-generated app is selected  | string    | nameOfApplication                  |      |
| --e2eTestRunner | Test runner to use in generating an e2e test project | string | ["none", "playwright"] | none | 
| --nxVersion | Set the version of Nx you want installed  | string    |                   |latest    |
| --packageManager | Package manager to use  | string    | pnpm/npm/yarn                  | npm     |
| --interactive | Enable interactive mode  | boolean    |  true/false                 | true     |
| --overwrite | Overwrite the target directory on install  | boolean    |  true/false                 | false     |
| --cloud.platform | Name of the cloud provider  | string    | azure                  | azure     |
| --cloud.region | Region name where resources should be created  | string    | string                  | euw     |
| --pipeline | Name of the pipeline provider  | string    | azdo                  | azdo     |
| --business.company | Company Name  | string    | string                  |     |
| --business.domain | Company Scope or area  | string    | string                  |     |
| --business.component | Company component being worked on  | string    | string                  |     |
| --domain.internal | Internal domain for nonprod resources  | string    |  string                 |    |
| --domain.external | External domain for prod resources  | string    |  string                 |    |
| --terraform.group | Terraform state group name  | string    |  string                 |     |
| --terraform.container | Terraform storage container name  | string    |  string                 |     |
| --terraform.storage | Terraform storage name  | string    |  string                 |     |
| --vcs.type | Version control provider  | string    | azdo/github                  |     |
| --vcs.url | Version control remote url  | string    |  string                 |     |




