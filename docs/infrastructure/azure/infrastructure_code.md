---
id: infrastructure_code
title: Infrastructure
sidebar_label: Infrastructure
---

<!--
Ensure we put in lots of information about our Infrastructure. Including:

> What is the data flow through configuration? Beginning to end. Hierarchical model.
** Compile time
** Run time
** Server only
** Client only
-->

All infrastructure tooling is done with [Terraform](https://www.terraform.io/), as a method for implementing our infrastructure as code. Terraform uses workspaces as the main mechanism of segregating states.

## Terraform

### Recommended Usage 

workspaces... 

Optionally create feature based environments by passing...



## Bootstrap the Azure tenant

The first step is to create the Azure tenant and subscription by creating a SPN service account and a storage account for terraform state. This process only needs to be run once run once on an administrators workstation.

The administrator will need the following permissions:

- Azure AD "Global Administrator" role for the Azure AD Tenant
- IAM subscription owner

With owner privileges:

1. Create a [Blob Storage instance](https://azure.microsoft.com/en-gb/services/storage/blobs/)
2. Take note of:
   1. storage account name
   2. blob name
   3. ClientID
   4. TenantID
   5. SubscriptionId
   6. ClientSecret

### Security best practice recommendations

#### Azure

Terraform state - blob storage can be in a different subscription to your solution subscription - which is where your applications and their infra will live
The terraform state subscription should be locked to normal users (developers).

Users (AAD users) should have only a read-only access to the solution subscription dashboard.

When initialising terraform's backend you will use the tf state subscription credentials and for the provider you will use the solution credentials - this will be an SPN account's (`client/tenant/subscription_id and client_secret)


### Resolving lock state

Either locally, or in the pipeline, if an error occurs like the following:

```log
Error: Error loading state: failed to lock azure state: storage: service returned error: StatusCode=409, ErrorCode=LeaseAlreadyPresent, ErrorMessage=There is already a lease present.
RequestId:REQUEST_ID
Time:0000-00-00T00:00:00.0000000Z, RequestInitiated=Weekday, Day Month YYYY 00:00:00 GMT, RequestId=0000000-0000-0000-0000-000000000000, API Version=YYYY-MM-DD, QueryParameterName=, QueryParameterValue=
Lock Info:
  ID:        0000000-0000-0000-0000-000000000000
  Path:      tfstate/amido-stacks-menuenv:amido-stacks-menu-test
  Operation: OperationTypeApply
  Who:       vsts@fv-az692
  Version:   0.00.00
  Created:   0000-00-00T00:00:00.0000000 +0000 UTC
  Info:      
```

We recommend resolving this through the CLI rather than the Portal interface.

   ```bash
   az storage blob lease break -b $KEY_NAME -c $BLOB_NAME \
    --account-name $STORAGE_ACC_NAME --account-key $STORAGE_ACC_KEY
  ```

On success, exit code 0 to be returned.

## Azure Devops Pipelines

See [Pipeline Templates](./pipeline_templates.md) for more information about our open sourced steps.

### Contributing


#### Running Locally

To test the deploy folder has been correctly provisioned prior to checking
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
cd ${YOUR_GIT_STACKS_WEB_APP_PATH}/deploy/terraform/azure
terraform init -backend-config=./backend.local.tfvars
terraform plan
```
