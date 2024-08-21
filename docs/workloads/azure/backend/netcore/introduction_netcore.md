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

Ensono Stacks is a collection of sample .NET 8 template projects that contain

- Simple Web API application
- A Web API application with CQRS functionality
- A Web API application with CQRS and event sourcing functionality

Ensono Stacks showcases best coding practices adopted throughout Ensono and helps bootstrap client projects faster with already proven and tested code.

All applications contain build and cloud infrastructure and are currently hosted on Azure. They use Application Insights for performance management, and different settings exist that can be set for cloud persistence.

The application base is designed as a restaurant menu application. Users can create a Menu.
Menus can hold one or more Categories, and a Category holds menu Items.
The API provides an interface for clients to create/update and delete any or all of the menu components.


:::tip Demo
**For a clearer understanding on the output, there is a demo API hosted [here](https://dev-netcore-api.nonprod.amidostacks.com/api/menu/swagger/index.html).**
:::

As an example below is a Json response to illustrate the structure defined by the model.

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

Even though the restaurant/menu context is used as the foundation for the templates, the .NET template engine provides us with the ability to change the domain with a simple command. The templates are highly customizable and modular, so a project can be generated with only what you need. Conditional compilation is used depending on the settings you provide to generate the minimal amount of code needed for your project.

<HideNavigation prev />

