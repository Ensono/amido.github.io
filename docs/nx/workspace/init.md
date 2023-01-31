### @ensono-stacks/workspace:init

<details>
<summary>Initialise workspace</summary>
Set up libraries to manage code & commit quality. These will help keep projects consistent and will generally be useful in any workspace.

Choose your 3rd party provider options.

## Usage

```bash
nx g @ensono-stacks/workspace:init

Follow interactive options:

Which cloud provider should the workspace use? 
- Azure

Which CI/CD provider should the workspace use?
- Azure Pipelines
```

### Command line arguments

Interactive options can instead be passed via the command line:

| Option             | Description    | Type   | Accepted Values | Default |
|--------------------|----------------|--------|-----------------|---------|
| --cloudProvider    | Cloud provider | string | azure           | azure   |
| --pipelineProvider | CI/CD provider | string | azdo            | azdo    |

### Generator Output
##### What is the output of the above commands?
Files updated: package.json

Files created:

```
├── workspace root
│   ├── .husky
│   ├── ├── commit-msg
│   ├── ├── pre-commit
│   ├── ├── prepare-commit-msg
│   ├── .eslintrc.json
│   ├── commitlint.config.js
│   ├── tsconfig.base.json__template__
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

- [Commitlint](https://commitlint.js.org/) - Standardised commit message format to make reading commit history easy. The generator installs commitlint and uses it for commitizen config.
- [Husky](https://typicode.github.io/husky/#/) - Git hook management tool. The generator adds a `prepare` script to ensure husky is always installed:
```json title="Husky install script"
"scripts": {
    "prepare": "husky install"
  },
```  
It also adds commitizen to the git `prepare-commit-msg` script, and commitlint to the `commit-msg`. This means that you can simply run `git commit` and get the benefits of both tools.

#### Code quality management
Stacks projects use ESLint and Typescript to help maintain code quality. Using the same config in every Stacks project ensures consistency and allows developers to more easily onboard onto new projects.

This generator creates config files for both Typescript and ESLint and installs the relevant dependencies.


</details>