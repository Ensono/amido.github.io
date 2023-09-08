<!-- markdownlint-disable MD041 -->
### @ensono-stacks/azure-node:app-insights-deployment

<details>
<summary>Configure Deployment & Infra for application insights</summary>

This generator will make sure your dockerfile is using the custom server, and your environment variable is set.

## Prerequisites


- Requires an existing application with deployment code already generated for it
- Requires the APPLICATIONINSIGHTS_CONNECTION_STRING secret to exist

## Usage

```bash
nx generate @ensono-stacks/azure-node:app-insights-deployment
```

### Command line arguments

The following command line arguments are available:

| Option                                 | Description                                                             | Type      | 
| ---                                    | ---------------------------------------------------------               | ---       | 
| --project                              | Target project name.                                                    | string    | 
| --applicationinsightsConnectionString  | The env variable that stores the app insights connection string.        | string    |

### Generator Output

- Updates `targets` in `project.json`.
- Updates `pipline stages` to make sure env variables are passed down
- Updates `Dockerfile` if necessary to make sure it uses the custom server

</details>
