---
id: requirements_java
title: Requirements
sidebar_label: Requirements
hide_title: false
hide_table_of_contents: true
description: Requirements for getting started with the Java Rest API application
keywords:
  - java
  - rest 
  - api
  - application
  - spring boot
  - swagger
  - settings
  - get started
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
                <li><a href="https://adoptopenjdk.net/">Install Java 11</a> and set JAVA_HOME environment variable to the directory java is installed and make sure MAVEN_HOME environment variable is not set</li>
                <li><a href="https://aka.ms/cosmosdb-emulator">CosmosDB Emulator 2.4.5+</a></li>
                <li>An IDE</li>
            </ul>
            <h5>Optional</h5>
            <ul>
                <li><a href="https://www.jetbrains.com/idea/download/#section=windows">IntelliJ IDEA</a></li>
            </ul>
        </div>
    </details>
    <br />
</TabItem>

<TabItem value="macos">
    <details open>
        <summary>Requirements for running the API locally</summary>
        <div>
            <h5>Mandatory</h5>
            <ul>
                <li>homebrew</li>
                <li>azure-cli: brew install azure-cli</li>
                <li><a href="https://adoptopenjdk.net/releases.html">Install Java 11:</a> <code> $ wget https://github.com/AdoptOpenJDK/openjdk11-binaries/releases/download/jdk-11.0.9%2B11.1/OpenJDK11U-jdk_x64_mac_hotspot_11.0.9_11.tar.gz</code></li>
                <li>Move to the folder where you downloaded the file and extract it :<code> $ tar -xf OpenJDK11U-jdk_x64_mac_hotspot_11.0.9_11.tar.gz</code></li>
                <li>Add JAVA to you path: <code> export PATH=$PWD/OpenJDK11U-jdk_x64/Contents/Home/bin:$PATH</code></li>
                <li>An IDE</li>
                <li>Make sure no environment variables set for MAVEN_HOME</li>
                <li>
                    <a href="https://aka.ms/cosmosdb-emulator">CosmosDB Emulator 2.4.5+</a>
                </li>
            </ul>
            <h5>Optional</h5>
            <ul>
              <li>Add this to the path to your dotfiles: .bash_profile or .zshrc depending on what shell you are running</li>
              <li><a href="https://www.jetbrains.com/idea/download/download-thanks.html?platform=mac&code=IIC">IntelliJ IDEA</a></li>
            </ul>
      </div>
    </details>
    <br />
</TabItem>

</Tabs>

:::note
The current version of Amido Stacks is using Java 11 (Current LTS, recommended).
:::
