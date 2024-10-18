---
id: requirements_netcore
title: Requirements
sidebar_label: Requirements
hide_title: false
hide_table_of_contents: true
description: Detailed requirements to create .NET REST API application from a template
keywords:
  - .net
  - rest api
  - cqrs
  - example
  - template
  - azure
  - application insights
  - cosmos db
  - build
  - run
  - application
  - configure
  - docker
  - tests
  - github
  - scaffolding
  - cli
---

# Running the API Locally

## Windows

### Requirements for running the API locally

#### Mandatory
- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) and Runtime 8.0.* or higher (for .NET 8 projects).
- [CosmosDB Emulator 2.4.5+](https://aka.ms/cosmosdb-emulator).

#### Optional
- [Visual Studio 2022](https://visualstudio.microsoft.com/vs/).
- [Visual Studio Code](https://code.visualstudio.com/) 1.35+ with the C# extension.

### Additional requirements for running the API in Docker containers

#### Mandatory
- [Docker Desktop for Windows](https://desktop.docker.com/win/stable/Docker%20Desktop%20Installer.exe): Version 2.1.0.1 (or higher).
  - Enable:
    - Kubernetes 1.14+.
    - Linux containers (not Windows containers).
  - Docker Engine 19.03.1+ (included with Docker).
  - Windows Subsystem for Linux (WSL) for running Linux environment scripts (recommended v1, v2 is still in testing).
  - `kubectl` v1.14+ (included with Docker).
    - You can also [download it separately](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-windows).

### Additional requirements for running the API in a Kubernetes cluster

- **NGINX Ingress Controller**:
  - Install it in your local cluster.
  - Follow the [Bare Metal deployment guide](https://kubernetes.github.io/ingress-nginx/deploy/).

## macOS

### Requirements for running the API locally

- **Homebrew**: A package manager for macOS.
- **Azure CLI**: Install it via `brew install azure-cli`.
- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0): Install it via `brew install --cask dotnet-sdk`.
- [CosmosDB Emulator](https://aka.ms/cosmosdb-emulator): Only available for Windows. If you use Azure, you can run CosmosDB in the cloud.

### Additional requirements for running the API in Docker containers

- [Docker Desktop for Mac](https://desktop.docker.com/mac/stable/Docker.dmg).
- `kubectl`: Run `docker run --name kubectl bitnami/kubectl:latest` to install.

---

**Note**: The current version of Ensono Stacks uses .NET 8 (the latest Long Term Support version, recommended).