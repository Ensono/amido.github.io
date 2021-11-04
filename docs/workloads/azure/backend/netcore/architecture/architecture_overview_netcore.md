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


## DDD Architecture Overview

![Solution Diagram](/img/cqrs_diagram.png)


### Bounded Context

In DDD, when we start mapping the business domain into objects, we have to identify their relation to each other on a wide scope, at start we identify them as a big and indivisible context to have a clear view of its relationships.

When their relationships are identified we have to identify the smallest cohesive scope where they fit together on its own context. This boundary is given the name of bounded context.

A domain object might belong to multiple bounded contexts, but on each of them will have a different set of attributes that are only relevant to the context they are within.

In some cases, a domain object might change it's name to make more sense within the context it is located.

**Example:**
A property management business might have a person as a customer for the business, but when the person is in the context of a rental department, you are a tenant on their respective, even though you are a customer in other context of the business.
For more information see [Bounded Context, by Martin Fowler](https://martinfowler.com/bliki/BoundedContext.html)

<br />

### Entities

An entity is a domain object that represents a thread of continuity, it is a business object that has an unique identity even though their attributes are the same, an identity makes the object unique, that means two objects with same attribute values are not considered the same.

Because entities are not defined by it's attributes, all the attributes might change, but the identity keeps the same.

**Example:**
Two people with same name (John Smith) and born on same day may have the same attributes but in respect to the system they are independent domain objects.
When a person get married, they might change their names, but the identity stay the same.

<br />

### Value Objects

Value Objects are domain objects that does not have a conceptual identity within the context, they are just needed for it's attributes and two object with same attributes should be considered the same.

In some scenarios, we might have value objects representing entities in other contexts, these value objects will likely have ids as attributes, even though they have unique ids they should still be values objects because they are not a primary object within the bounded context and are just representing external dependencies.

Different from entities, value objects can be duplicated within the domain, but entities are unique.

<br />

### Aggregates

Is an entity that aggregates a set of objects that are bound together by same parent. Aggregate holds control of the aggregated objects and control it's accessibility and lifetime.

For more information see:

- [DDD Aggregate, by Martin Fowler](https://martinfowler.com/bliki/DDD_Aggregate.html)

<br />

### AggregateRoot

Aggregate root is similar to aggregates with a simple difference, it is a single root entity that allow external operations interact with entities within the context, when referenced outside of the domain, the AggregateRoot is the reference that should be used, to avoid coupling the application to the domain and making it flexible to evolve with littler application changes. Let's say we have objects A, B and C(either entities or Value objects), A contains B and B contains C. In this case A is the root, to modify C, the external elements should pass through A first and A decides how the operation is handled, if the application were to talk to B direct by passing A, would make the application coupled to B, and a change in the structure would make harder to refactor the domain.

Also, AggregateRoot is the persistence boundary used to track changes and state of the domain.

<br />

### Domain Events

Domain events are an indicator that something happened inside an object in the domain and should broadcasted to other objects to react on it's occurrence.

**Example:**
A checkout cart can have products the customer want to buy, when product is added to the cart the total should be updated.

In simple terms we could just make call to recalculate the total and it is all done. With this approach, we have a coupling between the operation add item and Calculate totals

In DDD, we could just raise an event of type ItemAddedToCartEvent and implement an event handler to calculate the totals outside of the AddItem operation but within the same context.

This approach makes both operations decoupled and flexible for extension, when we add new operations that need to calculate the total, we just need to extend the event handler to catch all events that triggers the Totals recalculation.

Another usage for events is EventSourcing, where we gather these events to identify what happened when we persist the changes caused by the operation.

<br />

### Domain Exceptions

Domain exceptions, sometimes called business rule violation, are exceptions raised within the domain when an operation or object fail to meet business rules.

**Example:**
When an employee raises a purchase order, if the purchase order value is above a certain limit, the domain will raise an exception telling that the operation can't be completed, this exception will interrupt the processing and tell the application about the error.

Because domain exceptions does not know about the environment it's running in, the Application have to handle these exceptions and wrap it with an exception containing the environment context details like: Which operation raised the exception, who triggered the exception, correlation-id of the trigger and so on.

<br />

### Repository

To make it possible to execute operations against a domain, we require a component that prepare the domain object to last known state before the operation is executed.

The repository is the component that lives between the application and the domain, it is responsible to Load **aggregate roots** from the database or the materialize the domain from a chain of events when using EventSourcing.

It is also the responsible to persist the changes and events that occurred to an AggregateRoot after an operation is executed.

