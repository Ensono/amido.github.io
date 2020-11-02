---
id: requirements_netcore
title: Requirements
sidebar_label: Requirements
hide_title: false
hide_table_of_contents: true
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
    <details open>
        <summary>Requirements for running the API locally</summary>
        <div>
            <h5>Mandatory</h5>
            <ul>
                <li><a href="https://dotnet.microsoft.com/download/dotnet-core/thank-you/sdk-3.1.403-windows-x64-installer">.NET Core SDK</a> and Runtime 3.1._ or superior (for .NET Core 3.1 template)</li>
                <li><a href="https://aka.ms/cosmosdb-emulator">CosmosDB Emulator 2.4.5+</a></li>
            </ul>
            <h5>Optional</h5>
            <ul>
                <li><a href="https://code.visualstudio.com/">Visual Studio Code</a> 1.35+ with C# Extension from Microsoft (C# for Visual Studio Code (powered by OmniSharp))</li>
                <li><a href="https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&rel=16">Visual Studio 2019 v16.4+</a></li>
            </ul>
        </div>
    </details>
    <br />
    <details>
        <summary>Additional requirements for running the API in docker containers</summary>
        <div>
            <h5>Mandatory</h5>
            <ul>
                <li><a href="https://desktop.docker.com/win/stable/Docker%20Desktop%20Installer.exe">Docker Desktop(for Windows)</a>: Version 2.1.0.1 (37199) or superior
                    <ul>
                        <li>Enable:
                            <ul>
                                <li>Kubernetes 1.14+</li>
                                <li>Linux container (Not windows containers)</li>
                            </ul>
                        </li>
                        <li>Docker Engine 19.03.1+ (provided with docker)</li>
                        <li>WSL (Windows Subsystem for Linux: recommended v1, v2 is still in preview and has not been tested) (provided with docker)
                            <ul>
                                <li>For running build, test and deployment scripts targeting Linux environment</li>
                            </ul>
                        </li>
                        <li>kubectl v1.14+ (provided with docker)
                            <ul>
                                <li>Also <a
                                        href="https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-windows">downloaded
                                        from k8s.io</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </details>
    <br />
    <details>
        <summary>Additional requirements for running the API in a kubernetes cluster</summary>
        <div>
            <ul>
                <li>NGINX ingress controller
                    <ul>
                        <li>Install the ingress controller in you local cluster.</li>
                        <li>Make sure you follow the process for Bare Metal deployment described <a href="https://kubernetes.github.io/ingress-nginx/deploy/">here</a>.</li>
                    </ul>
                </li>
            </ul>
        </div>
    </details>
</TabItem>
<TabItem value="macos">
    <details open>
        <summary>Requirements for running the API locally</summary>
        <div>
            <ul>
                <li>homebrew</li>
                <li>azure-cli: brew install azure-cli</li>
                <li><a href="https://dotnet.microsoft.com/download/dotnet-core/thank-you/sdk-3.1.403-macos-x64-installer">.NET Core SDK</a> 3.1.* or superior: brew cask install dotnet-sdk</li>
                <li>
                    <a href="https://aka.ms/cosmosdb-emulator">CosmosDB Emulator 2.4.5+</a>: Currently the Cosmos emulator can only be run on Windows. If you have an Azure subscription, you are able to use the Azure version instead
                </li>
            </ul>
        </div>
    </details>
    <br />
    <details>
        <summary>Additional requirements for running the API in docker containers</summary>
        <div>
            <ul>
                <li><a href="https://desktop.docker.com/mac/stable/Docker.dmg">Docker Desktop for Mac</a></li>
                <li>kubectl: docker run --name kubectl bitnami/kubectl:latest</li>
            </ul>
        </div>
    </details>
</TabItem>
</Tabs>

:::note
The current version of Amido Stacks is a template for .NET Core 3.1 (Current LTS, recommended).
:::
