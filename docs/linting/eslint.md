---
id: eslint
title: Ensono Stacks Linting
sidebar_label: Ensono Stacks Linting
description: Using Ensono Stacks with ESlint
keywords:
  - Nx
  - monorepo
  - stacks
  - Generator
  - Executor
  - ensono
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Code linting is the process of using automated tools called linters to analyse source code for potential errors, stylistic inconsistencies, and violations of coding standards or best practices. Linters are designed to assist developers in identifying issues within their codebase without executing the code

By using code linting tools, development teams can catch errors early, maintain coding standards, and produce high-quality, consistent code. This leads to more efficient development, easier collaboration, and reduced chances of introducing bugs and other issues into the codebase.

:::info

Linting tools in Ensono Stacks are setup and configured by the [@ensono-stacks/workspace:init](/docs/getting_started/workspace/ensono-stacks-workspace#ensono-stacksworkspaceinit) generator. Linting in CI/CD is configured by the [@ensono-stacks/workspace:init-deployment](/docs/getting_started/workspace/ensono-stacks-workspace#ensono-stacksworkspaceinit-deployment) generator.

:::

## ESlint

Ensono Stacks Nx applications use ESlint to analyse our code and find potential issues, errors, and stylistic problems. This helps developers identify and fix issues in the code by enforcing a set of coding rules and conventions.

ESLint can catch a wide range of issues, such as syntax errors, common programming mistakes, code style violations, and more. It helps ensure code quality and consistency within a project, especially in team environments where multiple developers will be contributing code.

ESLint also supports various plugins that provide additional rules, configurations, and functionalities to the ESLint linting tool.

These plugins allow developers to enforce specific coding standards, best practices, and conventions beyond what is included in ESLint's core rule set.

### Formatting

Ensono Stacks uses Prettier which focuses solely on code formatting and style, ensuring that your code is aesthetically pleasing, consistent and easy to read without needing to configure numerous formatting rules.

Prettier runs as an ESLint rule and reports differences as individual ESLint issues.

### Typescript

Along side ESlints standard linting rules Ensono Stacks also provides ESLint support for TypeScript.

It includes a set of ESLint rules that use TypeScript's type information and provides a large list of lint rules that are specific to TypeScript and/or use that type information.

### Testing

Ensono Stacks also supports linting for both React Testing Library and Jest.

It extends ESLint's capabilities to include rules that are tailored for test files written with Jest and React Testing Library.
These rules help users follow best practices and anticipate common mistakes when writing tests.

### Security

Ensono Stacks includes plugins that help find security issues with both NodeJs and browser based code.
These help identify potential security hotspots and provide a set of rules to disallow unsafe coding practices that may result in security vulnerabilities.

### Usage

Ensono Stacks linting rules can be used in a couple of ways.

ESlint can be picked up by your IDE and flag various rule violations during development.

Ensono Stacks also uses Husky which enables us to create pre-commit hooks that run ESlint on every commit.
This can ensure all linting issues are flagged before committing code.
