---
id: monorepo
title: Stacks Monorepo
sidebar_label: Stacks Monorepo
---

## Description

The Amido stacks webapp template is a monorepo managed with
[Lerna](https://lernajs.io/)

At the moment, the project is comprised of:

- [Webapp](`packages/webapp`) - SSR React, Node.js
- [UI_Library](`packages/UILib`) - TBC

## Sample Project Directory Structure:

```
├── .gitignore
├── lerna.json
├── package.json
├── packages
│   ├── Webapp
│   │   ├── __tests__
│   │   │   ├── index.test.tsx
│   │   ├── pages
│   │   │   └── index.tsx
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── task -> ../../scripts/task
│   │   └── Dockerfile
│   ├── [sample Package]
│   │   ├── README.md
│   │   ├── __tests__
│   │   ├── package.json
│   │   ├── task -> ../../scripts/task
│   │   └── Dockerfile
├── README.md
├── scripts
│   └── task
└── package-lock.json
```

## Approach

- _npm_ handles the dependencies.
- _Lerna_ handles tasks that affect multiple package (compile/test/lint all
  modules).
- One folder per package inside _packages/_.
  - any new package should be added within the `packages` directory and follow
    the above structure.
- All packages share the similar structure.
- _Task_ script is used to define set of common tasks like `test`, `lint` and
  `dev`. So any common task should be added in the script at the root level.
