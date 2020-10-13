---
id: index
title: About Amido Stacks
sidebar_label: About Amido Stacks
slug: /
---

## Why we are developing Stacks

Stacks enables teams to gain momentum on digital transformation.
It helps de-risk project delivery, and enables project teams to focus on solving business challenges, rather than technical overheads.

## What Stacks is

It’s like a show house, built given what we know now, our skills, abilities, resources and tools available.

The internal layout of the house might change.
The house might move location.
It might not even need a roof!

With the solid foundations and structure built, the team can decorate and customise the house for their client.

## How we have approached Stacks

* Open source first
* Re-usable and configurable boilerplates
* Cloud first

Amido has been building solutions for over 10 years in varied industry segments to solve domain-specific problems. Most of these specialised solutions require lots of research and validation before it can become a viable product. Amido doesn't want to spend time re-inventing solutions for problems that are common on many projects.



To stay relevant and keep the focus on domain-specific problems, instead of technology implementations, Amido Stacks identifies the common requirements in new projects and contributes open-source resources to reduce risk and save time.



Behind each of our tooling and implementation choices, is an Architectural Decision Record (ADR). These records form a technique for capturing important architectural decisions along with their context and consequences. For each record, we have taken the time to research the offerings, obtain the most appropriate decision at the time, and support this with a proof of concept (POC).

The following list is a snapshot of all the records that have been taken into account. These are constantly being reviewed and added to overtime.

*Engineering:*

* Branching strategy
* Project Repository Layout
* CI/CD tool
* Aggregated Versioning
* Versioning Patter
* Pull Request gating
* Pull Request template
* Tagging container images and code
* Build step templates
* Variable substitution
* Application Deployment Strategy
* Application-specific Resource Provisioning
* Release Notes Information

*Security:*

* Container Vulnerability Scanning
* Use of Long-term Support Versions
* Baseline Security for HTTPS Endpoints

*Infrastructure:*

* Infrastructure templating
* Kubernetes
* Select Container Registry
* Kubernetes resource templating
* Service mesh tooling
* Deployment tool
* Kubernetes Policy Enforcement
* Kubernetes Network Policies

*Application - Front End:*

* Node JS Runtime
* Build & package tools
* React state management
* Static Code Analysis
* Shared Asset Infrastructure
* UI library
* NPM Package Management
* Monorepo structure
* Logging framework and associated middleware
* Internationalisation/localisation
* Javascript development language
* Authorization & Session Management
* Data fetching and pre-rendering

*Application - .NET API:*

* NuGet Template Release Strategy
* NuGet Package Publishing
* Secret Management

*Testing:*

* Performance Testing tools
* Security testing tools
* Contract testing tools
* Tools and Libraries used for unit tests
* Static code analysis coverage/tools
* BDD tool in automated tests
* Hosted or SaaS Contract Broker
* Functional Automation Test Framework
* Unit Testing Framework
* Integration, Component, and Snapshot Testing Framework
* Browser Support with Visual Regression Testing
* Automated Accessibility Testing
* Supported Browsers
* Testing localisation and internationalisation
* Web app quality profiling with SEO tests
* A/B Testing through multivariate Testing * Experimentation Platform
* Testing Strategy
* Consumer-Driven Contract Testing
* Testing Infrastructure
* WebApp Automated Security Testing
* Test artefact publishing

*Observability:*

* Logging Methodology
* Dashboards
* React and Node.js Monitoring, Logging and Alerting

*Open Source:*

* Contribution Model
* Contribution and maintenance approach
* GitHub Pull Request CI Triggers
* OpenSource Developer Documentation
* Content Management Systems

*Application - Java API:*

* JDK Version
* Container Image
* Web Framework
* Build and Package Management
* Data Access Layer
* Security
* API Documentation
* Logging
* Monitoring
* Code Coverage and Quality
* Message Bus & Streaming Integration
* Developer IDE
* Secrets and Configuration
* Template Scaffolding
* REST, CQRS, PubSub, Streaming
* Docker Containers for Builds

### Deployment concepts

The deployment principles of build once then deploy to multiple stages has been applied as best practice for the generated pipeline template.
Templated out pipeline will encompass the build, deploy dev, deploy prod stages. Each stage is comprised of tasks that the user can either enable or disable depending on their setup and currently available tooling such as SonarCloud or vulnerability scanning.

To read and understand more about testing your contributed changes please go to *[deployment](./infrastructure/deployment.md)*.
