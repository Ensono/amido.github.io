---
id: azure_devops
title: Azure DevOps Pipeline
sidebar_label: Azure DevOps
description: How do you set up a pipeline in Azure DevOps
keywords:
  - workload
  - pipeline
  - Azure DevOps
  - pipeline template
---

import HideNavigation  from "../../../../src/pages/HideNavigation";
import useBaseUrl from '@docusaurus/useBaseUrl';

The pipeline will automate provisioning and updating the core infrastructure in Azure. This page assumes you have already completed the steps on the [core infrastructure page](../core_infrastructure.md).

Where possible, we are creating reusable steps ([stacks-pipeline-templates](https://github.com/amido/stacks-pipeline-templates)) that can be pulled into any base pipeline. Reusable steps can include tasks to deploy, build, test and more.
Azure infrastructure source code can be found [here](https://github.com/amido/stacks-infrastructure-aks).

## Pipeline Diagram

<img alt="Azure Core - Azure DevOps Pipeline" src={useBaseUrl('img/azure_core_azure_devops_pipeline.png')} />

## Setting up Azure DevOps

### Service connection

A service connection will need to be configured to ensure you can pull in pipeline templates form the public repo. The service connection will need a [Github Personal Access Token](https://github.com/settings/tokens) (or credentials) to pull in the code. At a minimum, the access token will need to include:

* read:repo

Once a token is generated, the service connection can be configured for the project. Instructions can be found [here](https://docs.microsoft.com/en-us/azure/devops/pipelines/library/service-endpoints?view=azure-devops&tabs=yaml#create-a-service-connection).

Finally, the repository resource endpoint value will need to be updated in the `build/azDevops/azure/infra-pipeline.yml` file.

```yaml
resources:
  repositories:
  - repository: templates
    type: github
    name: amido/stacks-pipeline-templates
    ref: refs/tags/v1.1.0 # Ensure the correct tag is referenced here to ensure version control
    endpoint: amidostacks # Name of the service account created for the connection to GitHub from Azure DevOps
```

### Variable groups

Variable groups will need creating for storing Azure Credentials to be used with the pipeline. Instructions for creating a variable group can be found [here](https://docs.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups?view=azure-devops&tabs=classic#create-a-variable-group).

Create a variable group for the nonprod infrastructure. Give the variable group a name and description and make sure the **Allow access to all pipelines** option is checked. Add the following variables using the Service Connection details from [bootstrapping the Azure tenant](../core_infrastructure.md#bootstrap-the-azure-tenant):

* azure_tenant_id
* azure_subscription_id
* azure_client_id
* azure_client_secret

<img alt="Azure Core Variable Group" src={useBaseUrl('img/azure_core_variable_group.png')} />

Repeat this to create a prod infrastructure variable group with the variables below:

* prod_azure_tenant_id
* prod_azure_subscription_id
* prod_azure_client_id
* prod_azure_client_secret

### Update pipeline template placeholders

Where possible, the scaffolding CLI will have populated the correct values in the pipeline template file `build/azDevops/azure/infra-pipeline.yml`. The values that need to be manually configured, such as the variable group name setup previously, will have placeholders using the prefix `%REPLACE_ME_FOR`. We very much recommend that you go through the whole template to make sure that values are correct for your project. Once you are happy with the template, commit the changes to your repository.

### Create the pipeline

Follow the steps below to create the pipeline and trigger the initial run.

*Please note that pipeline will create DNS zones for both nonprod and prod (by default, `nonprod.${BASE_DOMAIN}` and `prod.${BASE_DOMAIN}`). These will need NS records adding to the base domain and will cause the pipeline to fail on the initial run.*

1. In the pipelines section of Azure DevOps, select **New Pipeline**.
2. Select your repository.
3. Select the **Existing Azure Pipelines YAML files** option and enter the path `build/azDevops/azure/infra-pipeline.yml`
4. Click run and wait for the pipeline to run. The `Terraform: Apply` step is expected to fail with an error containing: `One or more domains had a problem`.
5. In the Azure Portal, located the DNS zone created and make note of the NS values.
6. Add an NS record set to the base domain DNS using the same name as the newly created DNS zone and the NS values noted.
7. Re-run the pipeline in Azure DevOps.
8. Repeat steps 5, 6 & 7 for the prod DNS zone.

<HideNavigation next />
