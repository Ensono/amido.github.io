---
id: requirements_netcore
title: Requirements
sidebar_label: Requirements
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="windows"
values={[
{label: 'Windows', value: 'windows'},
{label: 'macOS', value: 'macos'}
]}>
<TabItem value="windows">
  <ul>
        <li>.NET Core SDKs and Runtime 3.1._ or superior (for .net core 3.1 template)</li>
        <li>Visual Studio Code 1.35+ with C# Extension from Microsoft (C# for Visual Studio Code (powered by OmniSharp))</li>
        <li>Visual Studio 2019 v16.4+</li>
        <li>WSL (Windows Subsystem for Linux: recommended v1, v2 is still in preview and has not been tested)
            <ul>
                <li>For running build, test and deployment scripts targeting Linux environment</li>
            </ul>
        </li>
        <li><a href="https://aka.ms/cosmosdb-emulator">CosmosDB Emulator 2.4.5+</a></li>
        <li>Docker Desktop(for Windows): Version 2.1.0.1 (37199) or superior</li>
        <li>Docker Engine 19.03.1+</li>
        <li>Enable:
            <ul>
                <li>Kubernetes 1.14</li>
                <li>Linux container (Not windows containers)</li>
            </ul>
        </li>
        <li>kubectl v1.14+ (provided with docker 2.1.0.1)
            <ul>
                <li>
                    Also <a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-windows">downloaded from k8s.io</a>
                </li>
            </ul>
        </li>
        <li>NGINX ingress controller
            <ul>
                <li>Install the ingress controller in you local cluster.</li>
                <li>Make sure you follow the process for Bare Metal deployment described in here</li>
            </ul>
        </li>
    </ul>
</TabItem>
<TabItem value="macos">
    <ul>
        <li>homebrew</li>
        <li>azure-cli: brew install azure-cli</li>
        <li>.NET Core SDKs 3.1.* or superior: brew cask install dotnet-sdk</li>
        <li>
            <a href="https://aka.ms/cosmosdb-emulator">CosmosDB Emulator 2.4.5+</a>: Currently the Cosmos emulator can only be run on Windows. If you have an Azure subscription, you are able to use the Azure version instead
        </li>
        <li>Docker</li>
        <li>kubectl: docker run --name kubectl bitnami/kubectl:latest</li>
    </ul>
</TabItem>
</Tabs>

:::note
The current version of Amido Stacks is a template for .Net Core 3.1 (Current LTS, recommended).
:::
