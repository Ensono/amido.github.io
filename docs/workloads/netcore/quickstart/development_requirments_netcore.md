---
id: development_requirements_netcore
title: Requirements
sidebar_label: Requirements
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
  groupId="operating-systems"
  defaultValue="windows"
  values={[
  {label: 'Windows', value: 'windows'},
  {label: 'macOS', value: 'macos'},
  ]}>
  <TabItem value="windows">
    <ul>
        <li>.NET&nbsp;Core&nbsp;SDKs&nbsp;and&nbsp;Runtime&nbsp;2.2._&nbsp;or&nbsp;superior&nbsp;(for&nbsp;.net&nbsp;core&nbsp;2.2&nbsp;template)
        </li>
        <li>.NET&nbsp;Core&nbsp;SDKs&nbsp;and&nbsp;Runtime&nbsp;3.1._&nbsp;or&nbsp;superior&nbsp;(for&nbsp;.net&nbsp;core&nbsp;3.1&nbsp;template)&nbsp;&nbsp;&nbsp;
        </li>
        <li>Visual&nbsp;Studio&nbsp;Code&nbsp;1.35+&nbsp;with&nbsp;C#&nbsp;Extension&nbsp;from&nbsp;Microsoft&nbsp;(C#&nbsp;for&nbsp;Visual&nbsp;Studio&nbsp;Code&nbsp;(powered&nbsp;by&nbsp;OmniSharp))
        </li>
        <li>Visual&nbsp;Studio&nbsp;2019&nbsp;v16.4+</li>
        <li>WSL&nbsp;(Windows&nbsp;Subsystem&nbsp;for&nbsp;Linux:&nbsp;recommended&nbsp;v1,&nbsp;v2&nbsp;is&nbsp;still&nbsp;in&nbsp;preview&nbsp;and&nbsp;has&nbsp;not&nbsp;been&nbsp;tested)
            <ul>
                <li>For&nbsp;running&nbsp;build,&nbsp;test&nbsp;and&nbsp;deployment&nbsp;scripts&nbsp;targeting&nbsp;Linux&nbsp;environment
                </li>
            </ul>
        </li>
        <li><a href="https://aka.ms/cosmosdb-emulator">CosmosDB&nbsp;Emulator&nbsp;2.4.5+</a></li>
        <li>Docker&nbsp;Desktop(for&nbsp;Windows):&nbsp;Version&nbsp;2.1.0.1&nbsp;(37199)&nbsp;or&nbsp;superior</li>
        <li>Docker&nbsp;Engine&nbsp;19.03.1+</li>
        <li>Enable:
            <ul>
                <li>Kubernetes&nbsp;1.14</li>
                <li>Linux&nbsp;container&nbsp;(Not&nbsp;windows&nbsp;containers)</li>
            </ul>
        </li>
        <li>kubectl&nbsp;v1.14+&nbsp;(provided&nbsp;with&nbsp;docker&nbsp;2.1.0.1)
            <ul>
                <li>Also <a
                        href="https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-windows">downloaded&nbsp;from&nbsp;k8s.io</a>&nbsp;
                </li>
            </ul>
        </li>
        <li>NGINX&nbsp;ingress&nbsp;controller
            <ul>
                <li>Install&nbsp;the&nbsp;ingress&nbsp;controller&nbsp;in&nbsp;you&nbsp;local&nbsp;cluster.</li>
                <li>Make&nbsp;sure&nbsp;you&nbsp;follow&nbsp;the&nbsp;process&nbsp;for&nbsp;Bare&nbsp;Metal&nbsp;deployment&nbsp;described&nbsp;in&nbsp;here
                </li>
            </ul>
        </li>
    </ul>
  </TabItem>

  <TabItem value="macos">
    <div>
        <ul>
            <li>homebrew</li>
            <li>azure-cli:&nbsp;brew&nbsp;install&nbsp;azure-cli</li>
            <li>.NET&nbsp;Core&nbsp;SDKs&nbsp;3.1.*&nbsp;or&nbsp;superior:&nbsp;&nbsp;brew&nbsp;cask&nbsp;install&nbsp;dotnet-sdk
            </li>
            <li><a
                    href="https://aka.ms/cosmosdb-emulator">CosmosDB&nbsp;Emulator&nbsp;2.4.5+</a>:&nbsp;Currently&nbsp;the&nbsp;Cosmos&nbsp;emulator&nbsp;can&nbsp;only&nbsp;be&nbsp;run&nbsp;on&nbsp;Windows.&nbsp;If&nbsp;you&nbsp;have&nbsp;an&nbsp;Azure&nbsp;subscription,&nbsp;you&nbsp;are&nbsp;able&nbsp;to&nbsp;use&nbsp;the&nbsp;Azure&nbsp;version&nbsp;instead
            </li>
            <li>Docker
                <ul>
                    <li>kubectl:&nbsp;docker&nbsp;run&nbsp;--name&nbsp;kubectl&nbsp;bitnami/kubectl:latest</li>
                </ul>
            </li>
        </ul>
    </div>
  </TabItem>
</Tabs>

:::note
The current version of Amido Stacks does not support .net core 3.0, there is a template for .Net Core 2.2 (Obsolete) and .Net Core 3.1 (Current LTS, recommended). Upgrade from 2.2 to 3.1 is being tracker in the following github issue.
:::
