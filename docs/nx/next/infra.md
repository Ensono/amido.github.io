<!-- markdownlint-disable MD041 -->
### @ensono-stacks/next:infrastructure

<details>
<summary>Configure Infrastructure for your Next project</summary>

The infrastructure generator will provide all the necessary tools and setup ready to host your application in a Kubernetes Cluster. You can also choose to opt in to OpenTelemetry auto instrumentation.

## Prerequisites

An existing [Next](https://nextjs.org/) application. This may already exist if you agreed to install the infra during next:init generator.

## Usage

```bash
nx g @ensono-stacks/next:infrastructure
```

### Command line arguments

The following command line arguments are available:

| Option          | Description                            | Type              | Accepted Values | Default |
| --------------- | -------------------------------------- | ----------------- | --------------- | ------- |
| --project       | The name of the project                | nameOfApplication | string          | N/A     |
| --openTelemetry | Add OpenTelemetry auto instrumentation | boolean           | true/false      | false   |

### Generator Output

```text
├── workspace root
    ├── apps
        ├── myapp
            ├── build
                ├── helm
                ├── terraform
```

- Creates numerous files under the two folders, helm and terraform. You can then go in and update relevant parts for your use case.

- Adds following files to .gitignore

```text
'**/.terraform/*',
'*.tfstate',
'*.tfstate.*',
'crash.log',
'crash.*.log',
'override.tf',
'override.tf.json',
'*_override.tf',
'*_override.tf.json',
'.terraformrc',
'terraform.rc',
```

- installs following dev dependencies

```text
@nx-tools/nx-container
@nx-tools/container-metadata
@jscutlery/semver
```

- It is a requirement for the `stacks` object to exist inside `nx.json`, as this is read to know how to scaffold the infrastructure as code values. This object will already be populated by this point via the previous project scaffolding steps.

```json
"stacks": {
    "business": {
      "company": "Amido",
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
  }
```

## Understanding the Infrastructure

Azure devops configuration exists within the build folder for each new generated app project. This folder lives at root.

### build/azDevOps

`azuredevops-runner.yaml`

Here you will find the actions for triggering the pipelines. Basically, creating a PR will build as a non prod artefact and merging into main branch will build as a prod artefact, with the relevant parameter specified.

`azuredevops-stages.yaml`

This is of course the actual stages of the pipeline that are configured. Most of the detail is done via taskctl, which can found as the last task in the build job.

### taskctl

[taskctl](https://github.com/taskctl/taskctl) has been used to enable across different environments and builds. Cross platform, one single syntax.

As a rule of thumb, each task here references a target execution via Nx defined inside project.json. The flag --target is used to pass in the appropriate value.

`build/taskctl/tasks.yaml`

```yaml
helm:
    description: Lint Helm Charts
    command:
      - npx nx affected --base="$BASE_SHA" --target=helm-lint
```

`apps/myapp/project.json`

```yaml
"helm-lint": {
    "executor": "nx:run-commands",
    "options": {
        "commands": [
            {
                "command": "helm lint",
                "forwardAllArgs": false
            }
        ],
        "cwd": "apps/myapp/build/helm"
    }
}
```

Hence, running the following will trigger the intended execution. The pipeline takes care of this for us.

```bash
npx nx affected --base="$BASE_SHA" --target=helm-lint
```

Following on from this, we can see various steps such as linting, building, running helm, versioning and terraform are subsequently executed.

### Helm

The configuration files for Helm Charts live inside the build folder under directory for your app, within the project

`myproject/apps/myapp/build/helm`

In the infra pipeline, the steps for Helm will begin by linting, followed by either an upgrade or install. If the Helm chart is already installed, then an upgrade occurs based on the given command. If it isn't installed, then an installation occurs instead. The command accepts a `--atomic` flag which will allow Helm to roll back to the previous release should a failure during upgrade occur. On install, this would cause the installation to fail if there were any issues.

The remaining tasks are then carried out post versioning, covered in the next section.

### Versioning

[jscutlery:semver](https://github.com/jscutlery/semver) is an Nx plugin which has been configured to automate semantic versioning and release in these projects. It follow conventional commits and is also applied to proceeding pipeline targets such as Helm charts.

### Package & Push

After versioning, our build is containerised using Docker and pushed to the set Azure registry.

Likewise, the Helm Charts are also packaged and pushed to their respective place in the Azure registry.

Finally a Github release is tagged with relevant notes using jscutlery.

### Terraform

This is the last group of tasks to run as part of the infrastructure. See `myproject/apps/myapp/build/terraform` for configuration files.

One thing to highlight is that once the Terraform apply task is completed, a Helm install will also be executed. As mentioned earlier, the default behaviour is to deploy a non-production instance when a PR is created and once the PR is merged, then the deployment is made to production.

### OpenTelemetry

OpenTelemetry is a collection of tools, APIs, and SDKs. Use it to instrument, generate, collect, and export telemetry data (metrics, logs, and traces) to help you analyse your software’s performance and behaviour.

If the generator is used with the openTelemetry option it will add auto instrumentation to the pods, and the application will start exporting default node metrics and traces.

```yaml
podAnnotations:
    instrumentation.opentelemetry.io/inject-nodejs: 'true'
```

:::caution
OpenTelemetry logs are in an experimental phase, this means there is no node support at the moment, and there is no known ETA either.
:::

</details>
