<!-- markdownlint-disable MD041 -->

### @ensono-stacks/workspace:init-deployment

<details>
<summary>Set up deployment infrastructure for existing workspace</summary>
Set up configuration for deployment & infra for the workspace.

Allows you to choose your recommended 3rd party provider options.

## Prerequisites

Workspace FE scaffolded using the `@ensono-stack/workspace:init` generator.

## Usage

Scaffold your NX workspace with deployment config using the following command:

```bash
nx g @ensono-stacks/workspace:init-deployment
```

### Command line arguments

Interactive options can instead be passed via the command line:

| Option           | Description                  | Type | Accepted Values | Default |
| ---------------- | ---------------------------- | ---- | --------------- | ------- |
| --pipelineRunner | Which pipeline runner to use | enum | [taskctl, none] | taskctl |

### Generator Output

If `--pipelineRunner=taskctl` is passed, the generator will also create a `build` directory:

```cs
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

`nx.json` is also updated with the pipeline runner entry

```json
"@ensono-stacks/workspace": {
    "init": {
        "pipelineRunner": "taskctl"
    }
}
```

This sets up a CI/CD pipeline to provide a smooth collaborative workflow.

Currently supported pipeline tools are [Azure Devops](https://azure.microsoft.com/en-gb/products/devops/) and [taskctl](https://github.com/taskctl/taskctl).

:::caution

The `build` files will only be generated if required project values have been collected from the [Stacks CLI](../nx_monorepo.md#option-1-stacks-cli) or through the [@ensono-stacks/create-stacks-workspace](../nx_monorepo.md#option-2-create-stacks-workspace-generator) plugin.

:::

</details>
