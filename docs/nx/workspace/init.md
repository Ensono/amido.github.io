### @ensono-stacks/workspace:init

<details>
<summary>Set up libraries to manage code & commit quality</summary>
Set up libraries to manage code & commit quality, keeping projects consistent and will generally be useful in any workspace.

Allows you to choose your recommended 3rd party provider options.

## Usage

Initialise your NX workspace with stacks with the following command:
```bash
nx g @ensono-stacks/workspace:init
```

### Command line arguments

Interactive options can instead be passed via the command line:

| Option           | Description                    | Type    | Accepted Values | Default |
|------------------|--------------------------------|---------|-----------------|---------|
| --husky          | Install & configure husky      | boolean | [true, false]   | true    |
| --commitizen     | Install & configure commitizen | boolean | [true, false]   | true    |
| --eslint         | Install & configure eslint     | boolean | [true, false]   | true    | 
| --pipelineRunner | Which pipeline runner to use   | enum    | [taskctl, none] | taskctl | 

### Generator Output
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
│   ├── tsconfig.base.json
```

If `--pipelineRunner=true` is passed, the generator will also create a `build` directory:

```
├── workspace root
│   ├── build
│   ├── ├── azDevOps
│   ├── ├── ├── azuredevops-runner.yaml - Azure Devops pipeline definition. Consumes `stages` and `vars` files in this directory
│   ├── ├── ├── azuredevops-stages.yaml - Azure Devops pipeline stages
│   ├── ├── ├── azuredevops-vars.yaml - Azure Devops variable definitions required by the pipeline
│   ├── ├── taskctl
│   ├── ├── ├── contexts.yaml - Context definitions for taskctl
│   ├── ├── ├── tasks.yaml - Task definitions for taskctl to be consumed by the pipeline
```

This sets up a CI/CD pipeline to provide a smooth collaborative workflow.

Currently supported pipeline tools are [Azure Devops](https://azure.microsoft.com/en-gb/products/devops/) and [taskctl](https://github.com/taskctl/taskctl).

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
Stacks projects use ESLint and Typescript to help maintain code quality. Using the same config in every Stacks project ensures consistency and allows developers to more easily onboard onto new projects.

This generator creates config files for both Typescript and ESLint and installs the relevant dependencies.


</details>