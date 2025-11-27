---
id: architecture_overview_netcore
title: Architecture Overview
sidebar_label: Architecture Overview
hide_title: true
hide_table_of_contents: false
description: .NET Core REST API application - Architecture Overview
keywords:
  - .net core
  - rest api
  - template
  - architecture overview
  - aggregate
  - AggregateRoot
  - domain
  - events
  - repository
  - stacks
---

## Domain-Driven Design (DDD) Overview

For a comprehensive understanding of Domain-Driven Design, refer to Martin Fowler's notes on [Domain-Driven Design](https://martinfowler.com/bliki/DomainDrivenDesign.html).

### Bounded Context

In Domain-Driven Design (DDD), we start by mapping the business domain into objects and identifying their relationships. Initially, we view them as a big, indivisible context. Then, we identify the smallest cohesive scope where they fit together, called a bounded context.

A domain object might belong to multiple bounded contexts but will have different attributes relevant to each context. Sometimes, a domain object might change its name to make more sense within a specific context.

**Example:**
In a property management business, a person might be a customer in one context but a tenant in the rental department context.

### Entities

An entity is a domain object with a unique identity, even if its attributes are the same as another object. The identity makes the object unique, meaning two objects with the same attributes are not considered the same.

**Example:**
Two people named John Smith, born on the same day, have the same attributes but are independent domain objects. If a person changes their name after marriage, their identity remains the same.

### Value Objects

Value objects are domain objects without a conceptual identity. They are defined by their attributes, and two objects with the same attributes are considered the same. Value objects can represent entities in other contexts but are not primary objects within the bounded context.

### Aggregates

An aggregate is an entity that groups a set of objects bound together by the same parent. The aggregate controls the accessibility and lifetime of these objects.

#### Aggregate Root

An aggregate root is a single root entity that allows external operations to interact with entities within the context. It prevents coupling the application to the domain, making it flexible to evolve with minimal changes. The aggregate root is also the persistence boundary used to track changes and the state of the domain.

#### Domain Events

Domain events indicate that something happened inside an object in the domain and should be broadcasted to other objects to react.

**Example:**
When a product is added to a checkout cart, the total should be updated. Instead of directly recalculating the total, we raise an event (e.g., `ItemAddedToCartEvent`) and handle it outside the `AddItem` operation. This decouples the operations and makes them flexible for extension.

#### Domain Exceptions

Domain exceptions, or business rule violations, are exceptions raised within the domain when an operation or object fails to meet business rules.

**Example:**
If an employee raises a purchase order above a certain limit, the domain raises an exception, interrupting the process and informing the application about the error.

#### Repository

The repository is a component that prepares the domain object to its last known state before executing an operation. It loads aggregate roots from the database or materializes the domain from a chain of events when using EventSourcing. It also persists changes and events that occurred to an AggregateRoot after an operation.

