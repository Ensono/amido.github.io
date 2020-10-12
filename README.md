Issues In-Progress: [![Board Status](https://amido-dev.visualstudio.com/73884c9a-a68f-4f67-b2b5-b588c2eb8492/81e26c3a-a64e-456b-a0d7-9b4fc2df8cb0/_apis/work/boardbadge/b9d014a2-2eb4-4b90-bc2f-700be97f9e00)](https://amido-dev.visualstudio.com/73884c9a-a68f-4f67-b2b5-b588c2eb8492/_boards/board/t/81e26c3a-a64e-456b-a0d7-9b4fc2df8cb0/Microsoft.RequirementCategory)

[Documentation](https://amido.github.io/stacks/) Deployment Status: [![Build Status](https://dev.azure.com/amido-dev/Amido-Stacks/_apis/build/status/stacks-github-pages?branchName=master)](https://dev.azure.com/amido-dev/Amido-Stacks/_build/latest?definitionId=93&branchName=master)

# Stacks Project Portal

------------------

Welcome to Amido Stacks! This repository is your gateway to explore our repositories.

More importantly, it's a centralised location to raise ISSUES to:

- Ask for help
- Provide feedback
- Suggest Features

## Contributions

Thank you for considering contributing to [Amido](https://amido.com/) Stacks. Check out our [contribution guilelines](./.github/CONTRIBUTING.md) for more information.

## Code of Conduct

Please take the time to understand [Amido's core values](https://amido.com/about-us/), and our open-source [Code of Conduct](CODE_OF_CONDUCT.md). Remember, we are all human.

## Issue triaging

Check out our [issue triage guilelines](./.github/ISSUE-TRIAGE.md) for more information.

## Open-source

## Deployed Example Applications

|  Language | Framework | Cloud | Observability | Storage | Workload | Compute | Yumido Demo App | Source | Image | CI / CD Pipeline | Infrastructure as Code | Packages |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
|  C# | .NET Core 3.1 | Microsoft Azure | App Insights | CosmosDB | Microservice | AKS and Docker | https://api.demo.nonprod.amidostacks.com/api/menu/swagger/index.html | https://github.com/amido/stacks-dotnet |  | https://github.com/amido/stacks-pipeline-templates |  | https://www.nuget.org/profiles/amidostacks |
|  JavaScript | Node.JS, Next.JS and React | Microsoft Azure | App Insights |  | Server Side Rendered Web Application | AKS and Docker | https://app.nonprod.amidostacks.com/web/stacks | https://github.com/amido/stacks-webapp-template | https://hub.docker.com/u/amidostacks | https://github.com/amido/stacks-pipeline-templates | https://github.com/amido/stacks-terraform | https://www.npmjs.com/~amidostacker |
|   |  |  |  |  | Client Side Rendered Web Application | AKS and Docker | https://csr-app.nonprod.amidostacks.com/ | https://github.com/amido/stacks-webapp-template | https://hub.docker.com/u/amidostacks | https://github.com/amido/stacks-pipeline-templates | https://github.com/amido/stacks-terraform | https://www.npmjs.com/~amidostacker |
|   |  | GCP | App Insights |  | Server Side Rendered Web Application | GKE and Docker | https://app.gke.nonprod.amidostacks.com/ | https://github.com/amido/stacks-webapp-template | https://hub.docker.com/u/amidostacks | https://github.com/amido/stacks-pipeline-templates | https://github.com/amido/stacks-terraform | https://www.npmjs.com/~amidostacker |
|   |  |  |  |  | Client Side Rendered Web Application | GKE and Docker |  |  |  |  |  | https://www.npmjs.com/~amidostacker |

### Respositories

- https://github.com/amido/stacks-webapp-template
- https://github.com/amido/stacks-dotnet
- https://github.com/amido/stacks-java
- https://github.com/amido/stacks-pipeline-templates
- https://github.com/amido/stacks-terraform
- https://github.com/amido/stacks-testing-awesome

### Packages

- https://www.nuget.org/profiles/amidostacks
- https://www.npmjs.com/~amidostacker

### Images

- https://hub.docker.com/u/amidostacks

# Shared templates and files

We have created default [health templates and files](.github) that will be used for any public repository. 

> GitHub will use and display default files for any public repository owned by the account that does not have its own file of that type in any of the following places:
>
  > - the root of the repository
  > - the .github folder
  > - the docs folder
> For example, anyone who creates an issue or pull request in a public repository under [Amido](https://github.com/amido/) organisation that does not have its own CONTRIBUTING file will see a link to this repos [CONTRIBUTING.md](.github/CONTRIBUTING.md). If a repository has any files in its own .github/ISSUE_TEMPLATE folder, including issue templates or a config.yml file, none of the contents of the default [.github/ISSUE_TEMPLATE](.github/ISSUE_TEMPLATE) folder will be used.

  [Source](https://help.github.com/en/github/building-a-strong-community/creating-a-default-community-health-file)
