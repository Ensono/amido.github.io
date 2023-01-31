### @ensono-stacks/next:init

<details>
<summary>Adds custom config and developer tools to an existing next application</summary>
What does the generator/executor do?

## Prerequisites

An existing [Next](https://nextjs.org/) application

## Usage

```bash
nx @ensono-stacks/next:init --project nameOfExistingNextProject
```

### Command line arguments

The following command line arguments are available:

| Option    | Description           | Type      | Accepted Values   |Default            |
| ---       | -------------------   | ---       | ---               | ---               |
| --project | Name of the existing next application  | string   |  nameOfApplication       | N/A              |

### Generator Output
##### The next auth plugin will 

- Update ESLint config with Ensono Stacks best practices


- Install [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library) to allow best practices and anticipate common mistakes when writing tests with Testing Library
```
"dependencies": {
    ...otherDependencies
    "eslint-plugin-testing-library": "5.9.1",
},
```
`/package.json`


- Update `package.json` NX test command with a custom test config to allow for coverage collection

```text title="Example of files being generated"
.
├── main folder created
│   ├── file which gets created
│   ├── second file which gets created
└── second folder created
```

</details>