---
id: introduction_netcore
title: Introduction to the .NET 8 REST API application
sidebar_label: Introduction
hide_title: false
hide_table_of_contents: true
description: Introduction to .NET 8 REST API application with CQRS
keywords:
  - .net core
  - rest api
  - cqrs
  - showcase
  - azure
  - application insights
  - cosmos db
---

import HideNavigation  from "../../../../../src/components/HideNavigation/HideNavigation";

## Introduction to the .NET 8 REST API Application

This document introduces a sample .NET 8 REST API project. It uses a simple restaurant menu app as an example to demonstrate important concepts.

### What is This Project?

The project is part of **Ensono Stacks**, a collection of sample applications built in .NET 8. These examples help you get started quickly with common scenarios in building web APIs. There are three types of projects you can choose from:

1. **Simple Web API**: A basic setup to create APIs that respond to requests.
2. **Web API with CQRS**: A more advanced API setup to handle data in a more structured way.
3. **ServiceBus Worker**: A simple project that sends messages to a Service Bus (a system used to pass messages between different apps).
4. **ServiceBus Listener**: A simple project that receives messages from a Service Bus.
5. **CosmosDb Worker**: A project that tracks changes in a **Cosmos DB** (a cloud database) and sends updates to a Service Bus.
6. **EventHub Listener**: A project that receives messages from an **Event Hub** (a system used for handling streams of data).

These projects use good coding practices to help developers build their apps faster and more efficiently.

### What Does the API Do?

In this example, the API is for a **restaurant menu system**. Users can:

- **Create**, **update**, or **delete** a **Menu**.
- Each Menu contains **Categories** (like "Main Course", "Drinks", etc.).
- Each Category has **Items** (like "Lasagna", "Pasta", etc.).

The API gives an interface for doing all these operations through HTTP requests.

### How is the Project Hosted?

The project is hosted on **Azure** and uses **Application Insights** to monitor performance. This means the project is set up to run in the cloud and can be easily scaled.

### Example JSON Response

Here's an example of what the API might return when you ask for menu details:

```json
{
    "id": "296b3d1e-c8f0-4958-8138-bf191f633cbc",
    "restaurantId": "a6f6a3e0-7a4c-4c0a-b7cf-6115b624c2e7",
    "name": "Restaurant Menu",
    "description": "Restaurant Menu Description",
    "categories": [
        {
            "id": "ab6df204-572b-46ef-b5b5-75a6a6b47882",
            "name": "Main Menus",
            "description": "Main meals",
            "items": [
                {
                    "id": "5a63d477-11a6-454b-902e-f3794b723f0e",
                    "name": "Lasagna",
                    "description": "Pasta Item",
                    "price": 13.56,
                    "available": true
                }
            ]
        }
    ],
    "enabled": true
}
```

In this example:

- The menu has categories like "Main Menus".
- Inside each category, there are items, like "Lasagna" with details like price and availability.

### Try It Yourself

You can try out a demo version of this API [here](<insert-link-here>).

### Customizing the Template

Although this example uses a restaurant, you can easily change the project to suit other types of data. The project templates are modular, meaning you can add or remove parts depending on what your project needs.

<HideNavigation prev />
