---
id: infrastructure_java
title: Infrastructure
sidebar_label: Infrastructure
hide_table_of_contents: true
---

## Infrastructure details for the Spring Boot REST API

### Overview

This page present the high level design of the reference implementation of the Java Stacks
application which is based on Spring Boot Rest API.
Will need an infrastructure diagram.

Infrastructure Components

<table>
    <thead>
        <tr>
            <th>Component</th>
            <th>Purpose</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Docker containers</td>
            <td>Packaged applications</td>
        </tr>
        <tr>
            <td>Ingress NGINX controller</td>
            <td>Manages external access to the services in the K8S cluster</td>
        </tr>
        <tr>
            <td>Service Bus</td>
            <td>Managed enterprise integration message broker</td>
        </tr>
        <tr>
            <td>Cosmos DB</td>
            <td>Managed NoSQL database</td>
        </tr>
        <tr>
            <td>Application Insights</td>
            <td>Log tracing, performance management and monitoring</td>
        </tr>
        <tr>
            <td>AKS</td>
            <td>Azure Kubernetes Service for cluster management</td>
        </tr>
    </tbody>
</table>
