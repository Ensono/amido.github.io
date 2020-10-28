---
id: create_project_netcore
title: Create the project
hide_title: true
sidebar_label: Create the project
hide_table_of_contents: true
---

## Create the project

To create the project there are three different options available.

<br />

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
    defaultValue="scaffolding_cli"
    values={[
        {label: "Scaffolding  CLI", value: 'scaffolding_cli'},
        {label: 'GitHub Repository Clone', value: 'repository_clone'},
        {label: '.Net Core Template', value: 'template'}
    ]}>
    <TabItem value="scaffolding_cli">
        <h4>PROS</h4>
        <ul>
            <li>Guided project creation in creating the preferred project flavour.</li>
            <li>Enables the creation of all projects in Amido Stacks templates suite.</li>
            <li>Allows personalization of project name, domain model, company name.</li>
            <li>Removes out the content not needed from the GitHub repository.</li>
        </ul>
        <h4>CONS</h4>
        <ul>
            <li>Requires <strong>npm</strong> and <strong>npx</strong> installation.</li>
        </ul>
    </TabItem>
    <TabItem value="repository_clone">
        <h4>PROS</h4>
        <ul>
            <li>Familiar approach</li>
            <li>Quick and easy to run (one command)</li>
        </ul>
        <h4>CONS</h4>
        <ul>
            <li>Does not remove the files not needed in the repository which may create confusion.</li>
            <li>Does not allow automated personalization of the project.</li>
            <li>All Amido Stacks repositories links required to create all flavours of projects</li>
        </ul>
    </TabItem>
    <TabItem value="template">
        <h4>PROS</h4>
        <ul>
            <li>Has no dependencies</li>
            <li>Enables creation of .NET Core projects in Amido Stacks Suite.</li>
        </ul>
        <h4>CONS</h4>
        <ul>
            <li>Does not allow the generation of all projects in Amido Stacks templates suite.</li>
            <li>Does not allow automated personalization of the project.</li>
        </ul>
    </TabItem>
</Tabs>

<br />

<details open>
<summary>Create the project using the Scaffolding CLI</summary>

<div>
The Amido Stacks Scaffolding CLI can be used to create a fully-functional and deployable project from a template, in a variety of flavours.
It includes tests (unit, integration), together with infrastructure and deployment definitions. All by running from your CLI.

We use [npx](https://www.npmjs.com/package/npx) to execute the [scaffolding-cli](https://www.npmjs.com/package/@amidostacks/scaffolding-cli).

```bash title="Run the next command to install npx"
npm install -g npx
```

We are supporting and running [node@12](https://nodejs.org/en/about/releases/).
Please ensure that your local environment has the correct version [installed](https://nodejs.org/en/download/).

```bash title="Run Scaffolding-CLI command to create the project"
npx @amidostacks/scaffolding-cli@latest run -i
```

You will be asked a number of questions. Based on the answers, your ready-to-build project template will be produced.
</div>
</details>

<br />

<details>
<summary>Create the project by cloning GitHub repository</summary>
<div>

Clone the Dotnet project to your local machine from here: [stacks-dotnet repository](https://github.com/amido/stacks-dotnet)

```bash title="Run git clone repository command"
git clone git@github.com:amido/stacks-dotnet.git
```

</div>
</details>

<br />

<details>
<summary>Create the project using the template</summary>

<div>

1. Install the package

    Download the [stacks-app-template.1.0.0.nupkg template package](https://github.com/amido/stacks-dotnet/releases/tag/1.0.0)
    (.Net Core 3.1, current LTS release) to a temporary folder.

    ```bash title="Run the next command to install the package"
    dotnet new -i /path/to/stacks-app-template.1.0.0.nupkg
    ```

2. Create the project

    ```bash title="Run the next command to create the project"
    dotnet new stacks-app -n Company.Project -d DomainName
    ```

    The above command will create a folder and a repository called `Company.Project`.

:::note Template parameter details

* **-n**
    * Sets the project name
    * Omitting it will result in the project name being the same as the folder where the command has been ran from
* **-o**
    * Sets the path to where the project is added
    * Omitting the parameter will result in the creation of a new folder
* **-d**, **-Domain**
    * Sets the name of the aggregate root object. It is also the name of the collection within CosmosDB instance.
:::

</div>
</details>




