---
id: introduction
title: Infrastructure Introduction
sidebar_label: Introduction
hide_table_of_contents: true
description: Initial configuration for Stacks workloads
keywords:
  - terraform
  - configuration
  - cloud provider
  - documentation
---

import HideNavigation  from "../../src/pages/HideNavigation";
import ResponsivePlayer from "../../src/pages/Components/ResponsivePlayer/ResponsivePlayer";



All Stacks workloads require initial configuration of the cloud provider and some core infrastructure.

<ResponsivePlayer url="https://vimeo.com/486755365" />

## Terraform

All infrastructure tooling is done with [Terraform](https://www.terraform.io/), as a method for implementing infrastructure as code. Terraform uses workspaces as the main mechanism of segregating states.

All the modules used by stacks are documented and maintained [here](https://github.com/amido/stacks-terraform)

<HideNavigation next />
<HideNavigation prev />
