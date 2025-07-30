---
id: introduction
title: Infrastructure Introduction
sidebar_label: Introduction
hide_table_of_contents: true
description: Initial configuration for Ensono Stacks workloads
keywords:
  - terraform
  - configuration
  - cloud provider
  - documentation
---

import HideNavigation  from "../../src/components/HideNavigation/HideNavigation";


All Ensono Stacks workloads require initial configuration of the cloud provider and some core infrastructure.

## Terraform

All infrastructure tooling is done with [Terraform](https://www.terraform.io/), as a method for implementing infrastructure as code. Terraform uses workspaces as the main mechanism of segregating states.

All the modules used by Ensono Stacks are [documented and maintained](https://github.com/Ensono/stacks-terraform)

<HideNavigation next />
<HideNavigation prev />
