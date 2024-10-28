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

#### Background Worker

```text
Solution xxENSONOxx.xxSTACKSxx.BackgroundWorker
├── Shared
│  ├── xxENSONOxx.xxSTACKSxx.Shared.Messaging.Azure.ServiceBus
│  └── xxENSONOxx.xxSTACKSxx.Shared.Messaging.Azure.ServiceBus.Tests
├── xxEnsono.xxStacksxx.BackgroundWorker
└── xxEnsono.xxStacksxx.Backgroundworker.UnitTests
```

#### xxENSONOxx.xxSTACKSxx.Shared.Messaging.Azure.ServiceBus

Interacts with Azure Service Bus for messaging. Manages queues, topics, and messaging tasks.

#### xxENSONOxx.xxSTACKSxx.Shared.Messaging.Azure.ServiceBus.Tests

Contains unit tests for the messaging classes. Tests message processing, queue management, and other messaging tasks.

#### xxENSONOxx.xxSTACKSxx.BackgroundWorker

The BackgroundWorker project contains the worker service that processes messages from the Azure Service Bus. The worker service is responsible for processing messages from the Service Bus and executing the necessary business logic. The worker service is self-hosted and managed by the Program.cs class.

#### xxENSONOxx.xxSTACKSxx.BackgroundWorker.UnitTests

The BackgroundWorker.UnitTests project contains unit tests for the BackgroundWorker project. These tests cover the worker service's functionality, including message processing and business logic execution.

#### Listeners

```text
Solution xxENSONOxx.xxSTACKSxx.Listener
├── xxEnsono.xxStacksxx.Application.CQRS.Events
├── xxEnsono.xxStacksxx.Listener
└── xxEnsono.xxStacksxx.Listener.UnitTests
```

#### xxENSONOxx.xxSTACKSxx.Application.CQRS.Events

The Application.CQRS.Events project contains the events used by the Azure Function to process messages from the Azure Service Bus. The events are defined as classes with the necessary properties to represent the message data.

#### xxENSONOxx.xxSTACKSxx.Listener

The Listener project contains the Azure Function that listens for messages from the Azure Service Bus. The Azure Function is responsible for processing messages from the Service Bus or Event Hub and executing the necessary business logic. The Azure Function is self-hosted and managed by the Program.cs class.

#### xxENSONOxx.xxSTACKSxx.Listener.UnitTests

The Listener.UnitTests project contains unit tests for the Listener project. These tests cover the Azure Function's functionality, including message processing and business logic execution.
