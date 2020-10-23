---
id: introduction
title: Infrastructure Introduction
sidebar_label: Introduction
---

All Stacks workloads require initial configuration of the cloud provider and some core infrastructure.

## Terraform

All infrastructure tooling is done with [Terraform](https://www.terraform.io/), as a method for implementing infrastructure as code. Terraform uses workspaces as the main mechanism of segregating states.

All the modules used by stacks are documented and maintained [here](https://github.com/amido/stacks-terraform)