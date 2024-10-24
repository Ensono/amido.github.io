<!-- markdownlint-disable MD041 -->
### @ensono-stacks/cypress:init-deployment

<details>
<summary>Add cypress E2E tests to your deployment pipelines</summary>

The _init-deployment_ generator adds e2e testing to pre-existing deployment pipelines, including test reporting and artefact uploads.

## Prerequisites

1. The [@ensono-stacks/workspace:init-deployment](../workspace/plugin-information.md#ensono-stacksworkspaceinit-deployment) has been executed, producing the required deployment files for the workspace

## Usage

```bash
nx g @ensono-stacks/cypress:init-deployment
```

### Generator Output

```yaml title=build/taskctl/tasks.yaml
# New e2e:ci task definition will be added to the tasks.yaml, defining what target should be ran for projects when executing the e2e task
e2e:ci:
    description: Run e2e tests in ci
    command:
      - npx nx affected --base="$BASE_SHA" --target=e2e --parallel=1
```

```yaml title=taskctl.yaml
# New e2e:ci task will be added to the taskctl pipeline, adding e2e tests following unit testing
- task: e2e:ci
    depends_on: test:ci
```

```yaml build/azDevOps/azuredevops-stages.yaml
# Generate HTML report for all affected projects
- task: Bash@3
            condition: and(succeededOrFailed(),eq(variables.HASTESTRESULTS, 'true'))
            displayName: Generate Reports
            inputs:
              targetType: inline
              script: npx nx affected --base="$BASE_SHA" --target=html-report
                --configuration=ci --parallel=1
# New test reporting steps will be added to the azuredevops pipeline
- task: PublishTestResults@2
    # Configuration for publishing test results
- task: PublishPipelineArtifact@1
    # Configuration for publishing pipeline artefacts
```


</details>