<!-- markdownlint-disable MD041 -->
### @ensono-stacks/next:react-query

<details>
<summary>Add Next Authentication to your next application</summary>

The react-query generator will install and update `_app.tsx` into an existing Next application. It will update the `_app.tsx` file by adding the query provider and update the `.eslintrc` file with the react-query eslint plugin.


## Prerequisites

An existing [Next](https://nextjs.org/) application

## Usage

```bash
nx g @ensono-stacks/next:react-query
```

### Command line arguments

The following command line arguments are available:

| Option    | Description           | Type      | Accepted Values   |Default            |
| ---       | -------------------   | ---       | ---               | ---               |
| --project | The name of the project  | nameOfApplication   |  string       | N/A              |
| --provider | The provider to be installed  | string    | none/azureAd                   |none     |

### Generator Output

* updates nx.json
* updates apps/demo-01/pages/_app.tsx
* updates apps/demo-01/.eslintrc.json
* updates package.json

```json title="/package.json"
"dependencies": {
    ...otherDependencies
    "react-query": "4.32.0",
},
```

```json title=".eslintrc"
"plugins": [
    ...otherPlugins
    "@tanstack/eslint-plugin-query",
],
```

- Append the `_app.tsx` file with the creation of the query client
- Append the `_app.tsx` file with a query provider 

```typescript title="/apps/appName/_app.tsx"
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Welcome to testing!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
}
export default CustomApp;
```


For further information please see the [docs](https://tanstack.com/query/v4/docs/react/overview)
</details>
