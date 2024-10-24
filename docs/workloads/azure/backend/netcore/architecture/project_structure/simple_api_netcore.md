---
id: project_structure_netcore
title: Simple Api Solution Structure
sidebar_label: Simple Api Solution Structure
hide_title: true
hide_table_of_contents: true
description: .NET Simple REST API application - Solution Structure
keywords:
  - .net
  - rest api
  - example
  - template
  - repository
  - structure
---

## Solution Structure

### Simple Web API

```text
Solution xxENSONOxx.xxSTACKSxx.API
├── API
│   ├── xxENSONOxx.xxSTACKSxx.API
│   ├── xxENSONOxx.xxSTACKSxx.API.Models
├── TESTS
│   ├── xxENSONOxx.xxSTACKSxx.API.ComponentTests
│   ├── xxENSONOxx.xxSTACKSxx.API.UnitTests
└── xxENSONOxx.xxSTACKSxx.AppHost
```

#### xxENSONOxx.xxSTACKSxx.API

The API project contains controllers and OpenAPI documentation. It exposes the application via REST/HTTP endpoints and validates requests using DataAnnotations or FluentValidation (not included). The API is self-hosted, managed by the Program.cs class.
