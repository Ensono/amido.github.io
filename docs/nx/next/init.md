### @ensono-stacks/next:init

<details>
<summary>Adds custom config and developer tools to an existing next application</summary>

The next init generator will add a custom ESlint config to an existing NextJs application, install `eslint-plugin-testing-library` to the project. as well as update project.json with a custom test config to allow coverage collection from [jest](https://jestjs.io/). 

## Prerequisites

An existing [Next](https://nextjs.org/) application

## Usage

```bash
nx g @ensono-stacks/next:init
```

### Command line arguments

The following command line arguments are available:

| Option    | Description           | Type      | Accepted Values   |Default            |
| ---       | -------------------   | ---       | ---               | ---               |
| --project | Name of the existing next application  | string   |  nameOfApplication       | N/A              |

### Generator Output
##### The next init plugin will 

- Update ESLint config with Ensono Stacks best practices


- Install [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library) to allow best practices and anticipate common mistakes when writing tests with Testing Library
```json title="/package.json"
"dependencies": {
    ...otherDependencies
    "eslint-plugin-testing-library": "5.9.1",
},
```

- Update `project.json` NX test command with a custom test config to allow for coverage collection


</details>