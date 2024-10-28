---
id: project_structure_netcore_function_worker
title: Functions And Worker Solution Structure
sidebar_label: Functions And Worker Solution Structure
hide_title: true
hide_table_of_contents: true
description: .NET Functions and Worker - Solution Structure
keywords:
  - .net
  - example
  - template
  - repository
  - structure
---

## Solution Structure

### Functions and Worker Services

```text
├── Functions
│  ├── function-aeh-listener
│  │   ├── xxENSONOxx.xxSTACKSxx.Listener
│  │   └── xxENSONOxx.xxSTACKSxx.Listener.UnitTests
│  ├── function-asb-listener
│  │   ├── xxENSONOxx.xxSTACKSxx.Listener
│  │   └── xxENSONOxx.xxSTACKSxx.Listener.UnitTests
│  ├── function-cosmosdb-worker
│  │   ├── xxENSONOxx.xxSTACKSxx.Worker
│  │   └── xxENSONOxx.xxSTACKSxx.Worker.UnitTests
├── Worker
│  └── xxENSONOxx.xxSTACKSxx.BackgroundWorker
```
