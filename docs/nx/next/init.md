### @ensono-stacks/next:init

<details>
<summary>Adds custom config and developer tools to an existing next application</summary>

The next init generator will add a custom ESlint config to an existing NextJs application, install `eslint-plugin-testing-library` to the project. as well as update project.json with a custom test config to allow coverage collection from [jest](https://jestjs.io/).

If infrastructure already exists for the workspace, this plugin will also call `@ensono-stacks/next:infrastructure` to add build & deploy infrastructure to the Next project.

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
| --infra | Add build & deploy infrastructure to the Next project | boolean | true/false | true |

### Generator Output

The following files will be updated if no workspace infrastructure information is present, or if the `--infra` flag is set to false

```bash
UPDATE apps/baseline-next-app/project.json #Updated with custom test config to allow for coverage collection
UPDATE apps/baseline-next-app/.eslintrc.json #Ehanced with additional linting rules
UPDATE apps/baseline-next-app/tsconfig.json #Minor enhancements
UPDATE apps/baseline-next-app/tsconfig.spec.json #Updates for monorepo structure
UPDATE apps/baseline-next-app/specs/index.spec.tsx #Formatting changes 
```

Otherwise, the `@ensono-stacks/next:infrastructure` will have also added build & deploy infrastructure to the Next project.

</details>