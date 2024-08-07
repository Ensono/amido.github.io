<!-- markdownlint-disable MD041 -->
### @ensono-stacks/playwright:visual-regression-deployment

<details>
<summary>Configure visual regression testing within your deployment pipeline</summary>

The _visual-regression-deployment_ generator configures your pipeline to enable visual regression testing either natively, or through a cloud based provider.

## Usage

```bash
nx g @ensono-stacks/playwright:visual-regression-deployment
```

Upon calling the _visual-regression-deployment_ generator you will be presented with a number of options:

- What type of visual regression tests would you like to use?
    - native
    - applitools

You should select the type of visual regression tests which you created through the [@ensono-stacks/playwright:visual-regression](../playwright/plugin-information.md#ensono-stacksplaywrightvisual-regression) generator.

### Command line arguments

The following command line arguments are available:

| Option                | Description                                                       | Type      | Accepted Values                           |Default    |
| ---------------       | --------------------------------------------------------------    | ---       | ---                                       | ---       |
| --type, -t   | Method used to conduct visual testing                            | string    | [choices: "native", "applitools"] | none      |

### Generator Output

#### Playwright with native visual comparisons

Opting to scaffold **native** visual testing will make a number of amendments to your test projects configuration:

```text title="Generated files"
.
├── build
│   ├── azDevOps
│   │   ├── azuredevops-updatesnapshots.yaml #Pipeline to capture and update baseline images within the CI
└──────────
```

```yaml title="build/taskctl/tasks.yaml"
# New update snapshots task definition to update snapshots for all affected projects
e2e:updatesnapshots:
    description: Run e2e snapshot updates in ci
    command:
      - npx nx affected --base="$BASE_SHA" --target=e2e --parallel=1
        --skip-nx-cache --update-snapshots --grep @visual-regression
```

```yaml title="taskctl.yaml"
# Update snapshots task added to taskctl.yaml which can be called by adding a comment to pull requests
updatesnapshots:
    - task: e2e:updatesnapshots
```

:::note

Visit the [Updating your baseline images​](../../testing/testing_in_nx/playwright_visual_testing#updating-your-baseline-images) documentation for further details!

:::

#### Playwright with Applitools Eyes

Opting to scaffold visual testing with **applitools** will make a small change your test projects configuration:

```yaml title="build/azDevOps/azuredevops-stages.yaml"
- task: AzureCLI@2
    displayName: build_deployment_${{ parameters.environment }}
        env:
            GH_TOKEN: $(GH_TOKEN)
            APPLITOOLS_API_KEY: $(APPLITOOLS_API_KEY) # API key for applitools api added
```

:::note

Visit the [`Playwright with Applitools Eyes`](../../testing/testing_in_nx/playwright_visual_testing_applitools.md) documentation for further details!

:::

</details>
