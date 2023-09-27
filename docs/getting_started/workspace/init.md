<!-- markdownlint-disable MD041 -->

### @ensono-stacks/workspace:init

<details>
<summary>Set up libraries to manage code & commit quality</summary>
Set up libraries to manage code & commit quality, keeping projects consistent and will generally be useful in any workspace.

## Prerequisites

To scaffold your workspace with FE and deployment/infrastructure there is a dependency on the `stacks` -> `config` & `executedGenerators` fields within `nx.json`.
If you have already run the Ensono Stacks CLI these fields will be automatically populated. Alternatively, if you created your workspace with `create-stacks-workspace`, these fields will have been populated if you passed in the relevant CLI arguments.
If you are Stackifying an existing Nx workspace, this must be added manually - an example `stacks` field can be seen here:

```json
{
  "stacks": {
    "config": {
      "business": {
        "company": "Ensono",
        "domain": "stacks",
        "component": "nx"
      },
      "domain": {
        "internal": "test.com",
        "external": "test.dev"
      },
      "cloud": {
        "platform": "azure",
        "region": "euw"
      },
      "pipeline": "azdo",
      "terraform": {
        "group": "terraform-group",
        "storage": "terraform-storage",
        "container": "terraform-container"
      },
      "vcs": {
        "type": "github",
        "url": "remote.git"
      }
    },
    "executedGenerators": {
      "project": {},
      "workspace": []
    }
  }
}
```

Please see the [Ensono Stacks CLI documentation](/docs/stackscli/about) for information on each of these values.

## Usage

Initialise your NX workspace with Ensono Stacks with the following command:

```bash
nx g @ensono-stacks/workspace:init
```

### Command line arguments

Interactive options can instead be passed via the command line:

| Option       | Description                    | Type    | Accepted Values | Default |
| ------------ | ------------------------------ | ------- | --------------- | ------- |
| --husky      | Install & configure husky      | boolean | [true, false]   | true    |
| --commitizen | Install & configure commitizen | boolean | [true, false]   | true    |
| --eslint     | Install & configure eslint     | boolean | [true, false]   | true    |

### Generator Output

Files updated: package.json

Files created:

```cs
├── workspace root
│   ├── .husky
│   ├── ├── commit-msg
│   ├── ├── pre-commit
│   ├── ├── prepare-commit-msg
│   ├── .eslintrc.json
│   ├── commitlint.config.js
│   ├── tsconfig.base.json
```

#### Commit management

Keeping commits well-structured and clear is key to enabling collaboration on a project. This generator initialises three tools to empower consistent commits:

- [Commitizen](https://www.npmjs.com/package/commitizen) - Interactive tool that helps to build constructive messages on commit. The generator adds commitizen config to the package.json:

```json title="Commitizen config"
"config": {
    "commitizen": {
        "path": "@commitlint/cz-commit-lint"
    }
  }
```

- [Commitlint](https://commitlint.js.org/) - Standardised commit message format to make reading commit history easy. The generator installs Commitlint and uses it for commitizen config.
- [Husky](https://typicode.github.io/husky/#/) - Git hook management tool. The generator adds a `prepare` script to ensure husky is always installed:

```json title="Husky install script"
"scripts": {
    "prepare": "husky install"
  },
```

It also adds commitizen to the git `prepare-commit-msg` script, and Commitlint to the `commit-msg`. This means that you can simply run `git commit` and get the benefits of both tools.

#### Code quality management

Ensono Stacks projects use ESLint and Typescript to help maintain code quality. Using the same config in every Ensono Stacks project ensures consistency and allows developers to more easily onboard onto new projects.

This generator creates config files for both Typescript and ESLint and installs the relevant dependencies.

</details>
