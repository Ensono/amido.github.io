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
UPDATED: package.json

// Add more information on these
Generator adds husky and commitizen to package.json:
```json title="Husky install script"
"scripts": {
    "prepare": "husky install"
  },
```  
```json title="Commitizen config"
"config": {
    "commitizen": {
        "path": "@commitlint/cz-commit-lint"
    }
  }
```  

Generator creates config files for workspace management libraries:

```text title="Files created"
.
├── workspace root
│   ├── .husky
│   ├── ├── commit-msg
│   ├── ├── pre-commit
│   ├── ├── prepare-commit-msg
│   ├── .eslintrc.json
│   ├── commitlint.config.js
│   ├── tsconfig.base.json__template__
```

</details>