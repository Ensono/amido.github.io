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

All infrastructure tooling is done with [Terraform](https://www.terraform.io/), as a method for implementing our infrastructure as code. Terraform uses workspaces as the main mechanism of segragating states.

## Terraform

## Bootstrap the Azure tenant

The first step is to create the Azure tenant and subscription by creating a SPN service account and a storage account for terraform state. This process only needs to be run once run once on an administrators workstation.

The administrator will need the following permissions:

- Azure AD "Global Administrator" role for the Azure AD Tenant
- IAM subscription owner

With owner priviledges:
1. Create a [Blob Storage instance](https://azure.microsoft.com/en-gb/services/storage/blobs/)
2. Take note of:
   1. storage account name
   2. blob name
   3. ClientID
   4. TenantID
   5. SubscriptionId
   6. ClientSecret

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

On success, exit code 0 to be retured.

## Azure Deveops Pipelines

See [Pipeline Templates](./pipeline_templates.md) for more information about our open sourced steps.
