---
id: ensono-stacks-[plugin-name]-[generator-executor-name]
title: "@ensono-stacks/[plugin-name]:[generator/executor name]"
sidebar_label: "[generator/executor name]"
description: "Using the [plugin-name] with stacks!"
keywords:
  - "[plugin-name]"
  - "[generator/executor-name]"
  - "[generator/executor]"
---

What does the generator/executor do?

## Usage
```bash
nx @ensono-stacks/[plugin-name]:generator/executor --Option1 Option1Value --Option2 Option2Value
```

### Command line arguments

The following command line arguments are available:

| Option    | Description                           | Type      | Accepted Values   |Default   |
| ---       | ---------------------------------     | ---       | ---               | ---   |
| --Option1 | Option 1 description/possible values  | boolean   |  true/false       | true             |
| --Option2 | Option 2 description/possible values  | string    |                   |default-string    |

### Generator Output
##### What is the output of the above commands?
Will it create new files, will it manipulate existing ones?


```text title="Example of files being generated"
.
├── main folder created
│   ├── file which gets created
│   ├── second file which gets created
└── second folder created
```