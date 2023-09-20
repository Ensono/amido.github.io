---
id: workloads
title: Introduction to workloads
sidebar_label: Introduction
hide_title: false
hide_table_of_contents: true
description: What are the workload options
keywords:
  - workload
  - scaffolding
  - scaffolding cli
---

import HideNavigation  from "../../src/components/HideNavigation/HideNavigation";

What you can do with Stacks is described in the [About Stacks](../) section.

Workload options cover all the supported options around what type of cloud infrastructure to provision for a project.

The key difference between workload and package options is when architectural decisions around their adoption are made on a project. Decisions around which workload options to use are made up front in a project’s life cycle while the high level solution architecture is being agreed (this usually occurs during a project’s discovery phase). Package Options may be decided on or implemented at any point during a project’s life cycle.

Adopting Stacks for your project is not an all or nothing decision; every part of the Stacks menu can be independently used and reused. For example, a project may choose to run a different compute workload than Stacks currently supports, but still adopt the Stacks Packages and supported workloads around testing.

## Workload options

Workload options are enacted in Stacks using the scaffolding CLI as a “run once” activity to provision a workload.

A chosen workload option generates a scaffolded workload to deploy into the cloud, such as a Web API or a Web Application.

Workload options are broken down into the following types of workload:

* Workloads for compute, which covers all the workload options that run in the cloud for compute, such as Web Applications and Web APIs;
* Workloads for test, which covers all the workload options that run automated tests in the cloud;
* Workloads for storage, which covers all the workload options that run in the cloud storage, such as relational and non-relational storage options.

## Workload cloud capabilities

One of the primary functions of Stacks is to demonstrate the use of different technologies across multiple cloud providers.

Some aspects of stacks are shared and cloud-agnostic and as such are provided by common modules, whilst other capabilities are relevant to a specific cloud platform.

This exhibits itself through the use of Cloud capability modules that provide the functionality pertaining to that provided by a specific cloud platform.

Examples of this is the use of CosmosDB as persistence for Azure and DynamodDB for AWS; capabilities are more often than not provided as specific modules that can be selected at runtime.  

<HideNavigation next />
<HideNavigation prev />
