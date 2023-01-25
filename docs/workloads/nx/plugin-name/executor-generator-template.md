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

import Highlight from '@site/src/pages/Components/Highlight';

What does the generator/executor do?

### Usage
```bash
nx @ensono-stacks/[plugin-name]:generator/executor --Option1 Option1Value --Option2 Option2Value
```

#### Command line arguments

##### option1

<Highlight color="#25c2a0">boolean</Highlight>

Default: default value if applicable
Accepted values: option1 possible values
Option 1 description


The following command line arguments are available:

| Option    | Description                           | Type      | Default           |
| ---       | ---------------------------------     | ---       | ---               |
| --Option1 | Option 1 description/possible values  | boolean   |  true             |
| --Option2 | Option 2 description/possible values  | string    | default-string    |

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