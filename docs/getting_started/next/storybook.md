<!-- markdownlint-disable MD041 -->

### @ensono-stacks/next:storybook {#ensono-stacks-next-storybook}

<details>
<summary>Add Storybook to your next application</summary>

The storybook generator will install and configure [Storybook](https://storybook.js.org/) into an existing Next application.
It will add storybook configuration, a custom component command and storybook extensions. The following extensions are:

```json
        {
            "@storybook/addon-essentials": "7.4.5",
            "@storybook/addon-actions": "7.4.5",
            "@storybook/addon-links": "7.4.5",
            "@storybook/manager-api": "7.4.5",
            "@storybook/preview-api": "7.4.5",
            "@storybook/addon-a11y": "7.4.5",
            "@storybook/addon-jest": "7.4.5",
            "@storybook/theming": "7.4.5",
        },
```

## Prerequisites

An existing [Next](https://nextjs.org/) application

## Usage

```bash
nx g @ensono-stacks/next:storybook
```

### Command line arguments

The following command line arguments are available:

| Option            | Description                               | Type              | Accepted Values | Default |
| ----------------- | ----------------------------------------- | ----------------- | --------------- | ------- |
| --project         | The name of the project                   | nameOfApplication | string          | N/A     |
| --skipPackageJson | Do not add dependencies to `package.json` | boolean           | true/false      | false   |

### Generator Output

The generator creates the following:

- creates a new folder `.storybook`. This contains information for the storybook package.
    - main.js file is created
    - preview.js file is created
- creates a new file `tsconfig.storybook.json` to store configuration for storybook

The generator updates the following:

- updates the `project.json` file to add the `custom-component` command

The generator installs the follow dependencies unless the `--skipPackageJson` option was used:

```json title="/package.json"
{
  "dependencies": {
    "@storybook/core-server": "7.4.5"
  },
  "devDependencies": {
    "@nx/storybook": "16.9.1",
    "@storybook/nextjs": "7.4.5",
    "@storybook/addon-essentials": "7.4.5",
    "@storybook/addon-actions": "7.4.5",
    "@storybook/addon-links": "7.4.5",
    "@storybook/manager-api": "7.4.5",
    "@storybook/preview-api": "7.4.5",
    "@storybook/addon-a11y": "7.4.5",
    "@storybook/addon-jest": "7.4.5",
    "@storybook/theming": "7.4.5",
    "eslint-plugin-storybook": "0.6.15"
  }
}
```

### Custom command for app

After the Storybook generator has been installed you can now run the new command `custom-component` that will add the following:

- creates a component under a specified name
- creates a test for the new component
- creates a story for the new component

:::note

`my-app` is an example of your app's name.

:::

```bash
nx run my-app:custom-component --name=component-x --folderPath=components
```

The flags are the following:

- name: name of the component
- folderPath: path of the new component folder (based on the app as the root of the path)

</details>
