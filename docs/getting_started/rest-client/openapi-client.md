<!-- markdownlint-disable MD041 -->

### @ensono-stacks/rest-client:openapi-client

<details>
<summary>Generates boilerplate configuration of types, client, stubs and validation using from your openapi schema using Orval.</summary>

Utilising [Orval](https://orval.dev/), this plugin generates various files based off your openapi schema to enable quick acceleration from definition to implementation.

## Usage

```bash
nx g @ensono-stacks/rest-client:openapi-client
```

### Command line arguments

The following command line arguments are available:

| Option      | Description                                                     | Type    | Accepted Values | Default | Required |
| ----------- | --------------------------------------------------------------- | ------- | --------------- | ------- | -------- |
| --name      | Library name                                                    | string  |                 |         | true     |
| --schema    | The relative path to your openapi schema                        | string  |                 |         | true     |
| --zod       | Validation for your openapi schema                              | boolean |                 | false   | true     |
| --tags      | Add tags to the library (used for linting)                      | string  |                 |         |          |
| --directory | Subdirectory inside libs/ where the generated library is placed | string  |                 |         |          |

### Generator Output

The openapi-client will create a new library within your libs folder for the various files generated:

```text title="Generated files"

├── openapi-client
│   ├──  src
│   │   ├──  model
|   │   │   ├── ...
│   │   ├── <libraryName>.msw.ts
│   │   ├── <libraryName>.ts
│   │   ├── <libraryName>.zod.ts
│   │   ├── index.ts
│   ├── .eslintrc.json
│   ├── jest.config.ts
│   ├── orval.config.js
│   ├── orval.zod.config.js
│   ├── openapi-schema.(json/yaml)
│   ├── project.json
│   ├── README.md
│   ├── tsconfig.json
│   ├── tsconfig.lib.json
└── └── tsconfig.spec.json
```

Key things to highlight about the generated files are as follows:

- The generator first creates the orval config files `orval.config.js` `orval.zod.config.js` which are used to set the options for orval to be executed against. These options determine what files to generate and how.
- Once the config files are generated, we execute the Orval generator. The 3 `<libraryName>...` files are created along wih the model folder with its contents. This generation consists of the end result following the openapi definition being converted into code implementation; types, client, stubs and validation.

The relevant dependencies `(orval, msw, @faker-js/faker, zod)` are also installed in order for the generation to take place and to resolve the relevant syntax/prettier errors.

</details>
