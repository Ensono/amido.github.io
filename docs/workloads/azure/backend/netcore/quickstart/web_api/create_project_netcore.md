---
id: create_project_netcore
title: Create the project
hide_title: true
sidebar_label: Create the project
hide_table_of_contents: true
description: Create .NET Core REST API application from a template
keywords:
  - .net core
  - rest api
  - example
  - template
  - azure
  - application insights
  - build
  - run
  - application
  - configure
  - docker
  - tests
  - github
---

## Create the project

There are several ways to get your Stacks project.

<br />


<details>
<summary>Create a new project using the template</summary>

<div>

1. Install the package

    Access Amido.Stacks.Templates package page in Nuget [here](https://www.nuget.org/packages/Amido.Stacks.Templates/).<br/>
    Copy and execute the command displayed in the page (if you want to get the latest version).<br/>
    For example,

    ```bash title="Run the command to install the package"
    dotnet new --install Amido.Stacks.Templates::0.0.92
    ```


2. Create a new  project

    Navigate to the folder where you wish to create a new project on.

    ```bash title="Run the command to create the project"
    dotnet new stacks-webapi -n Company.Project -d YourDomain
    ```

    The above command will create a folder called `Company.Project`.

:::note Template parameter details

* **-n**, **--name**
    * Sets the project name
    * Omitting it will result in the project name being the same as the folder where the command has been ran from
* **-d**, **--domain**
    * Sets the name of the aggregate root object. It is also the name of the collection within CosmosDB instance.
* **-o**
    * Sets the path to where the project is added
    * Omitting the parameter will result in the creation of a new folder
:::

</div>
</details>

<br />

<details>
<summary>Create the project by cloning GitHub repository</summary>
<div>

Clone the .NET project to your local machine from here: [stacks-dotnet repository](https://github.com/amido/stacks-dotnet)

```bash title="Run git clone repository command"
git clone git@github.com:amido/stacks-dotnet.git
```

</div>
</details>

<br/>

<details>
<summary>Create the project using the Scaffolding CLI (in redevelopment)</summary>

<div>

The scaffolding CLI is being redeveloped to offer you more guided choices of Amido Stacks project flavour.
Based on the answers, the ready-to-build project template will be produced.

</div>
</details>

<br/><hr/>

## Pros and cons of each option

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
    defaultValue="template"
    values={[
        {label: '.NET Core Template', value: 'template'},
        {label: 'GitHub Repository Clone', value: 'repository_clone'},
        {label: "Scaffolding  CLI", value: 'scaffolding_cli'}
    ]}>
    <TabItem value="template">
        <h4>PROS</h4>
        <ul>
            <li>Has no dependencies.</li>
            <li>Enables creation of .NET Core projects in Amido Stacks Suite.</li>
            <li>Enables versioning and access to older versions of Stacks templates.</li>
            <li>Removes out the content not needed from the GitHub repository.</li>
        </ul>
        <h4>CONS</h4>
        <ul>
            <li>Too many commands to run.</li>
        </ul>
    </TabItem>
    <TabItem value="repository_clone">
    <p>Source code can be found [here](https://github.com/amido/stacks-dotnet)</p>
        <h4>PROS</h4>
        <ul>
            <li>Familiar approach.</li>
            <li>Quick and easy to run (one command).</li>
        </ul>
        <h4>CONS</h4>
        <ul>
            <li>Requires <strong>git</strong> installation.</li>
            <li>Does not remove the files not needed in the repository which may create confusion.</li>
            <li>Does not allow automated personalization of the project.</li>
            <li>All Amido Stacks repositories links required to create all flavours of projects.</li>
        </ul>
    </TabItem>
    <TabItem value="scaffolding_cli">
        <p>The Amido Stacks Scaffolding CLI will be used to create a fully-functional and deployable project from a template, in a variety of flavours.</p>
        <h4>PROS</h4>
        <ul>
            <li>Provides a guided project creation when generating the preferred project flavour.</li>
            <li>Enables the creation of all projects in Amido Stacks templates suite.</li>
            <li>Allows automated personalization of project name, domain model, company name.</li>
            <li>Removes out the content not needed from the GitHub repository.</li>
        </ul>
        <h4>CONS</h4>
        <ul>
            <li>Requires the installation of an extra application.</li>
        </ul>
    </TabItem>
</Tabs>

<br />
