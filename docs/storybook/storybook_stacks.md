---
id: storybook_stacks
title: Stacks Storybook
sidebar_label: Stacks Storybook
description: Using stacks with Storybook
keywords:
  - Nx
  - monorepo
  - stacks
  - Generator
  - Executor
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[Storybook](https://storybook.js.org/) is an open-source tool used to build, test, and showcase individual components or UI elements in isolation.

The primary purpose of Storybook is to facilitate the development and documentation of UI components in a sandboxed environment. Instead of integrating components into a full application, developers can create separate stories for each component, which are essentially individual test cases or scenarios that demonstrate the component's behaviour in different states and use cases.

Some of the benefits of Storybook include:

#### Component Isolation

Storybook allows developers to work on a single UI component in isolation, without the need to navigate through the whole application. This isolation helps in quicker development, debugging, and testing of components.

#### Visual Testing

Storybook provides a way to visually test components, making it simpler to catch UI-related bugs and regressions during development.

#### Interactive Documentation

Documentation, usage examples, and interactive demos can be added for each component, which helps in onboarding new team members and maintaining a comprehensive living style guide.

## Storybook with Stacks

Storybook can be added to Stacks using the Nx Storybook generator documented [here](https://nx.dev/packages/storybook)

## Storybook Addons

Storybook has a large ecosystem of addons that extend its core functionality. These addons can be used for things like showing component props, testing, accessibility and theming.

#### storybook-addon-a11y

One of the addons we recommend using with Stacks is [storybook-addon-a11y](https://storybook.js.org/addons/@storybook/addon-a11y), this addon helps developers and designers identify and address accessibility issues in their UI components during the development and testing phase.

It integrates with Storybook to provide a user-friendly interface for testing the accessibility of individual UI components or stories within your Storybook project.

Some other addons we recommend using with Stacks are:

[storybook/addon-links](https://storybook.js.org/addons/@storybook/addon-links)

[storybook/addon-actions](https://storybook.js.org/docs/react/essentials/actions)

[storybook/addon-jest](https://storybook.js.org/addons/@storybook/addon-jest)

[storybook/theming](https://storybook.js.org/docs/react/configure/theming)
