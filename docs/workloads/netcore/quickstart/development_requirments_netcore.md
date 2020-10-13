---
id: development_requirements_netcore
title: Requirements
sidebar_label: Requirements
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="operating-systems"
  defaultValue="windows"
  values={[
    {label: 'Windows', value: 'windows'},
    {label: 'macOS', value: 'macos'},
  ]}>
  <TabItem value="windows">

    .NET Core SDKs and Runtime 2.2.* or superior (for .net core 2.2 template)

    .NET Core SDKs and Runtime 3.1.* or superior (for .net core 3.1 template)

    Visual Studio Code 1.35+ with C# Extension from Microsoft (C# for Visual Studio Code (powered by OmniSharp))

    Visual Studio 2019 v16.4+

    WSL (Windows Subsystem for Linux: recommended v1, v2 is still in preview and has not been tested)

        For running build, test and deployment scripts targeting Linux environment

    [CosmosDB Emulator 2.4.5+](https://aka.ms/cosmosdb-emulator)

    Docker Desktop(for Windows): Version 2.1.0.1 (37199) or superior

    Docker Engine 19.03.1+

    
    Enable:

        Kubernetes 1.14

        Linux container (Not windows containers)

    kubectl v1.14+ (provided with docker 2.1.0.1)

        Also [downloaded from k8s.io](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-windows) 

    NGINX ingress controller

        Install the ingress controller in you local cluster.

        Make sure you follow the process for Bare Metal deployment described in here

  </TabItem>

  <TabItem value="macos">

    homebrew

    azure-cli: brew install azure-cli

    .NET Core SDKs 3.1.* or superior:  brew cask install dotnet-sdk

    [CosmosDB Emulator 2.4.5+](https://aka.ms/cosmosdb-emulator): Currently the Cosmos emulator can only be run on Windows. If you have an Azure subscription, you are able to use the Azure version instead

    Docker

        kubectl: docker run --name kubectl bitnami/kubectl:latest

  </TabItem>
</Tabs>

:::note
The current version of Amido Stacks does not support .net core 3.0, there is a template for .Net Core 2.2 (Obsolete) and .Net Core 3.1 (Current LTS, recommended). Upgrate from 2.2 to 3.1 is being tracker in the following github issue.
:::