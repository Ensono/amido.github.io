---
id: architecture_java_cqrs
title: Java Rest API Architecture
sidebar_label: Architecture overview
description: Spring Boot Rest API Architecture
keywords:
  - java
  - rest 
  - api
  - architecture
  - spring boot
  - cqrs
  - event
  - controller
  - logs
  - monitoring
  - query service
  - repository
  - azure cosmos db
  - event handler
  - event listener
  - event dispatcher
  - authorisation
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Spring Boot Rest API Architecture

The diagram below represents the architecture of the Command Query Responsibility Segregation (CQRS) pattern, as it has been applied
to this project.

<img alt="Project architecture CQRS" src={useBaseUrl('img/java-cqrs.png')} />

The CQRS pattern separates read and update operations for a data store. Commands are defined for operations that
are responsible for changing the date stored (i.e. inserts, updates or delete operations). Each command
has a corresponding handler, and it is this which coordinates the repository update and the
sending of the associated event details. Queries, which do not change the data stored, are handled through
a query service.

Upon successful execution of a command (database update), the microservice publishes one or more events
describing how the persistence state has changed e.g. if a “Create Category” event is successful,
then a “Menu Updated” event and a “Category Created” event will be published.

Application Events contain the following basic information:

| Event Attribute | Description  |
| ------------- |-------------|
| id     | Unique id of the event instance (format: uuid) |
| eventCode    | Code identifying the type of event      |
| correlationId | Transaction identifier. This attribute is also returned as a response header if the command was received via the REST API and can also be found in all log entries relating to the transaction. CorrelationID can either be supplied by the input event/request or generated when not supplied.      |
| operationCode | Code identifying the operation which generated the event      |
| creationDate | When the event was created     |
| Custom Attribute(s) | e.g. menuId      |
