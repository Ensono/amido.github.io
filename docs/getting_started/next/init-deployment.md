<!-- markdownlint-disable MD041 -->

### @ensono-stacks/next:init-deployment

<details>
<summary>Configure Deployment & Infra for your Next project</summary>

The deployment generator will provide all the necessary tools and setup ready to host your application in a Kubernetes Cluster.

## Prerequisites

An existing [Next](https://nextjs.org/) application. This may already exist if you agreed to install the infra during next:init generator.

## Usage

```bash
nx g @ensono-stacks/next:init-deployment
```

### Command line arguments

The following command line arguments are available:

| Option          | Description                            | Type              | Accepted Values | Default |
| --------------- | -------------------------------------- | ----------------- | --------------- | ------- |
| --project       | The name of the project                | nameOfApplication | string          | N/A     |

### Generator Output

```text
├── workspace root
    ├── apps
        ├── myapp
            ├── deploy
                ├── helm
                ├── terraform
            ├── Dockerfile
    ├── libs
        ├── next-helm-chart
```

- Creates numerous files; main helm config as a library `next-helm-chart` under libs and terraform config under the `deploy` folder within the app. You can then go in and update relevant parts for your use case.

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
    - npx nx affected --base="$BASE_SHA" --target=lint
```

`apps/myapp/project.json`

```yaml
"lint":
  {
    "executor": "nx:run-commands",
    "options":
      {
        "commands": [{ "command": "helm lint", "forwardAllArgs": false }],
        "cwd": "libs/next-helm-chart/build/helm",
      },
  }
```

### Helm

The configuration files for Helm Charts live inside the libs folder under directory for your app, contained as its own library

`myproject/apps/myapp/libs/next-helm-chart/build/helm`

As a rule of thumb, target execution is defined via Nx inside project.json. The flag --target is used to pass in the appropriate values for each intended target run.

`libs/next-helm-chart/project.json`

Hence, running the following will trigger the intended execution. The pipeline takes care of this for us.

```bash
npx nx affected --base="$BASE_SHA" --target=lint
```

In the infra pipeline, the steps for Helm will begin by linting, followed by either an upgrade or install. If the Helm chart is already installed, then an upgrade occurs based on the given command. If it isn't installed, then an installation occurs instead. The command accepts a `--atomic` flag which will allow Helm to roll back to the previous release should a failure during upgrade occur. On install, this would cause the installation to fail if there were any issues.

The remaining tasks are then carried out post versioning, covered in the next section.

### Versioning

[jscutlery:semver](https://github.com/jscutlery/semver) is an Nx plugin which has been configured to automate semantic versioning and release in these projects. It follow conventional commits and is also applied to proceeding pipeline targets such as Helm charts.

### Package & Push

After versioning, our build is containerised using Docker and pushed to the set Azure registry.

Likewise, the Helm Charts are also packaged and pushed to their respective place in the Azure registry.

Finally a Github release is tagged with relevant notes using jscutlery.

### Terraform

This is the last group of tasks to run as part of the infrastructure. See `myproject/apps/myapp/deploy/terraform` for configuration files.

One thing to highlight is that once the Terraform apply task is completed, a Helm install will also be executed. As mentioned earlier, the default behaviour is to deploy a non-production instance when a PR is created and once the PR is merged, then the deployment is made to production.

</details>
