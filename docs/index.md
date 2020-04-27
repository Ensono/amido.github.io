---
id: index
title: About Amido Stacks
sidebar_label: About Amido Stacks
---

[Amido](https://amido.com) is a independent technical consultancy delivering intelligent solutions that drive growth, innovation, and operational efficiency.

### Values

We have four key values in which we stand by:
1. **Start with the problem**: Working together to make sure that technology choices are business outcome-driven and not tech for tech’s sake. The magic is understanding what your users want, knowing what technology is out there and gluing these technologies together in the most effective way.
2. **Technology agnostic**: We are independent and not aligned to any product or solution (including the ones we open-source), allowing us to recommend what is right for our clients. With a plethora of cloud services in the marketplace, we will find the right mix of available solutions from the rich PaaS and SaaS market.
3. **People-first**: As a people business, we place your customers and employees at the centre of any digital project or transformation. People are at the heart of everything we design and deliver.
4. **Pragmatic**: All technology has its strengths but also its limitations. We focus on delivering solutions that work and on creating technology ecosystems that make the most of the technologies within them. We are honest about the value that can be delivered now but also work to ensure our solutions have the agility and scalability built in to meet the challenges of tomorrow.

## Why Stacks?

Stacks enables teams to gain momentum on digital transformation.
Stacks helps de-risk project delivery.
Stacks enables project teams to focus on solving business challanges rather than technical overheads. 

## What is Stacks?

It’s like a show home, built given what we know now,  our skills and abilities, and the resources and tools available.

The internal layout might change.
The house might move location.
The project might not need a roof.

Now the team can decorate and customise for their client.

## How have we produced Stacks?

* Open source first
* Re-usable and configurable boilerplates
* Cloud first

### Amido Stacks Webapp

The entire project is built around the generation of a completely useable scaffolding to get project teams started, quicker. The showcase of a react app, either SSR or CSR being deployed into an existing or brand new K8s cluster - depending on the choices that were made during the bootstrap CLI process.

More details around the internal layout and how to contribute and extend the CLI process can be found at *[monorepo](./monorepo.md)*.

### Deployment Concepts

The deployment principles of build ones and deploy to multiple stages has been applied as best practice for the generated pipeline template.
Templated out pipeline will encompass the build, deploy dev, deploy prod stages. Each stage is comprised of tasks that the user can either enable or disable depending on their setup and currently available tooling such as SonarCloud or vulnerability scanning. 

To read and understand more about testing your contributed changes please go to *[deployment](./deployment.md)*.

### Infrastructure concepts

All infrastructure tooling is done with Terraform, and uses workspaces as the main mechanism of segragating states:

Current limitations:
  - SSR Only
  - AKS Only

