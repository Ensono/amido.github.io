### @ensono-stacks/next:infrastructure

<details>
<summary>Configure Infrastructure for your Next project</summary>

The infrastructure generator will provide all the necessary tools and setup ready to configure your pipeline.

## Prerequisites

An existing [Next](https://nextjs.org/) application. This may already exist if you agreed to install the infra during next:init generator.

## Usage

```bash
nx g @ensono-stacks/next:infrastructure
```

### Command line arguments

The following command line arguments are available:

| Option    | Description             | Type              | Accepted Values | Default |
| --------- | ----------------------- | ----------------- | --------------- | ------- |
| --project | The name of the project | nameOfApplication | string          | N/A     |

### Generator Output

```
├── workspace root
    ├── apps
        ├── myapp
            ├── build
                ├── helm
                ├── terraform
```

##### The next auth plugin will

- Create numerous files under the two folders, helm and terraform. You can then go in and update relevant parts for your use case.

- Adds following files to .gitignore

```
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

```
@nx-tools/nx-container
@nx-tools/container-metadata
@jscutlery/semver
```

- Adds `stacks` object to nx.json which is populated via interactive and pulled in various stages of the infra journey

```
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

Here you will find the actions for triggering the pipelines. Basically, creating a PR will build as a non prod artefact and merging into main branch will build as a prod artefact, with the relevant paramater specified.

`azuredevops-stages.yaml`

This is of course the actual stages of the pipeline that are configured. Most of the detail is done via taskctl, which can found as the last task in the build job.

### taskctl

[taskctl](https://github.com/taskctl/taskctl) has been used to enable across different environments and builds. Cross platform, one single syntax.

As a rule of thumb, each task here references a target execution via Nx defined inside project.json. The flag --target is used to pass in the appropriate value.

`build/taskctl/tasks.yaml`

```
helm:
    description: Lint Helm Charts
    command:
      - npx nx affected --base="$BASE_SHA" --target=helm-lint
```

`apps/myapp/project.json`

```
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

```
npx nx affected --base="$BASE_SHA" --target=helm-lint
```

Following on from this, we can see various steps such as linting, building, running helm, versioning and terraform are subsequently executed.

### Helm

The configuration files for Helm Charts live inside the build folder under directory for your app, within the project

`myproject/apps/myapp/build/helm`

In the infra pipeline, the steps for Helm will being by linting, then upgrade existing instance before installaing the new chart. The remaining tasks are then carried out post versioning, covered in the next section.

### Versioning

[jscutlery:semver](https://github.com/jscutlery/semver) is an Nx plugin which has been configured to automate semantic versioning and release in these projects. It follow conventional commits and is also applied to proceeding pipeline targets such as Helm charts.

### Package & Push

After versioning, our build is containerised using Docker and pushed to the set Azure registry.

Likewise, the Helm Charts are also packaged and pushed to their respective place in the Azure registry.

Finally a Github release is tagged with relevant notes using jscutlery.

### Terraform

This is the last group of tasks to run as part of the infrastructure. See `myproject/apps/myapp/build/terraform` for configuration files.

</details>
