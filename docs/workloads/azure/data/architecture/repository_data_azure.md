---
id: repository_data_azure
title: Repository Structure
sidebar_label: Repository Structure
hide_title: false
hide_table_of_contents: false
description: Repository structure explained
keywords:
  - data
  - python
  - repository
---

Structure of [stacks-azure-data](https://github.com/amido/stacks-azure-data) repository:

```md
stacks-azure-data
├── build           # Deployment pipeline configuration for building and deploying the core infrastructure
├── datastacks      # Python library and CLI to accelerate the development of data engineering workloads
├── de_build        # Deployment pipeline configuration for building and deploying data engineering resources
├── de_templates    # Data engineering workload templates, including data pipelines, tests and deployment configuration
├── de_workloads    # Data engineering workload resources, including data pipelines, tests and deployment configuration
│   ├── data_processing         # Data processing and transformation workloads
│   ├── ingest                  # Data ingestion workloads
│   ├── shared_resources        # Shared resources used across data engineering workloads
├── deploy          # TF modules to deploy core Azure resources (used by `build` directory)
├── docs            # Documentation
├── pysparkle       # Python library built to streamline data processing; packaged and uploaded to DBFS
├── utils           # Python utilities package used across solution for local testing
├── .pre-commit-config.yaml         # Configuration for pre-commit hooks
├── Makefile        # Includes commands for environment setup
├── pyproject.toml  # Project dependencies
├── README.md       # This file
├── stackscli.yml   # Tells the Stacks CLI what operations to perform when the project is scaffolded
├── taskctl.yaml    # Controls the independent runner
└── yamllint.conf   # Linter configuration for YAML files used by the independent runner
```
