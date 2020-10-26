---
id: deploy_project_netcore
title: Deploying the application
hide_title: true
sidebar_label: Deployment
hide_table_of_contents: true
---

## Deploying the application

This solution has two build pipelines files one each for Azure DevOps and Jenkins, located under `./build/azDevOps/azure` and `./build/Jenkins/` respectively. To deploy this application, fork it into your desired source control system and point your Jenkins or Azure DevOps instance at those pipeline files. There are a number of prerequisite variables (such as credentials) and various paths that must be populated, all of which are listed at the head of the file (if global) or in the relevant environment section (if per-environment). Please refer to the `stacks-infrastructure` repository for more information around the provisioning of the underlying infrastructure.



### Deployment files

When deployed to a kubernetes cluster, ensure the following requirements are satisfied:

* The yaml files for the resources are created in the folder `/deploy/k8s/api/base`
* The yaml files for kustomization are created for each environment. i.e: `/deploy/k8s/api/kustomization/dev`
* The kustomization files apply the changes required to the environment
* The required secrets are deployed to the cluster (do not check in secrets or certificates to the repository)
