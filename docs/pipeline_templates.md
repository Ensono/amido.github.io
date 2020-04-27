---
id: pipeline_templates
title: Pipeline Templates
sidebar_label: Pipeline Templates
---

Where possible, we are creating reusable steps that can be pulled into any base pipeline. Resuable steps can inlude tasks to deploy, build, test and more.

## Azure DevOps: Pipelines

The [stacks-pipeline-templates](https://github.com/amido/stacks-pipeline-templates) are provided as a base standard process for deploying stacks infrastructure, see `stacks-infrastructure` and `stacks-dotnet` pipeline files under the `./build/AzDevOps/` folders for their specific usage.

### Service Connections

Assuming that you will be consuming the templates from the public [repo](https://github.com/amido/stacks-pipeline-templates), a service connection will need to be configured to ensure we can pull in the source code. The service connection will need a [Github Personal Access Token](https://github.com/settings/tokens) (or credentials) to pull in the code. At a minimum, the access token will need to include:
*  read:repo

 Once a token is generated, the service connection can be configured for the project. Instructions can be found at [Manage Service Connections](https://docs.microsoft.com/en-us/azure/devops/pipelines/library/service-endpoints?view=azure-devops&tabs=yaml#create-a-service-connection).

 ![service_connections](https://amidostacksassets.blob.core.windows.net/docs/assets/service_connection_adding.gif)

```yaml
resources:
  repositories:
  - repository: templates
    type: github
    name: amido/stacks-pipeline-templates
    ref: refs/tags/v1.1.0 # Ensure the correct tag is referenced here to ensure version control
    endpoint: amidostacks # Name of the service account created for the connection to GitHub from Azure DevOps
```

### Example Usage

The below shows an example of how to reference the resource, and pull in the step template.

```yaml
pool:
  vmImage: windows-2019

resources:
  repositories:
    - repository: templates
      type: github
      name: amido/stacks-pipeline-templates
      ref: refs/tags/v1.1.0
      endpoint: 'GitHub Service Connection'

steps:
  # Functional tests running on deployed webapp
  - template: azDevOps/azure/templates/v2/steps/test-functional-testcafe.yml@templates
    parameters:
      env_vars:
        APP_BASE_URL: "https://www.google.com"
      workingDirectory: './src/'
      testcafe_browser_list: "chrome,firefox,ie,edge"
```

This is an example of a step template being used, but with parameters passed in:
```yaml
  # Functional tests running on locally built and hosted (undeployed)
  - ${{ if eq(parameters.cypress_e2e_test, true) }}:
      - template: azDevOps/azure/templates/v2/steps/test-functional-cypress.yml@templates
        parameters:
          env_vars: ${{ parameters.cypress_e2e_env_vars}}
          workingDirectory: ${{ parameters.project_root_dir }}
```
