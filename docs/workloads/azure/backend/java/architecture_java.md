---
id: architecture_java
title: Java Rest API Architecture
sidebar_label: Architecture overview
hide_title: false
hide_table_of_contents: true
description: Spring Boot Rest API Architecture
keywords:
  - java
  - rest 
  - api
  - architecture
  - spring boot
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

The diagram below represents the architecture used in the project.

<img alt="Project architecture CQRS" src={useBaseUrl('img/java-non-cqrs.png')} />

Upon successful execution of a database update, the microservice publishes one or more events
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
