<!-- markdownlint-disable MD041 -->
### @ensono-stacks/next:react-query

<details>
<summary>Add state management to your next application with React Query</summary>

The React Query generator updates your existing next application by wrapping the app with [React Query](https://tanstack.com/query/latest/). In addition, the application's linting rules will be updated with the addition of the [ESLint Plugin Query](https://tanstack.com/query/v4/docs/react/eslint/eslint-plugin-query) to enforce best practices when using react-query.


## Prerequisites

An existing [Next](https://nextjs.org/) Pages Router application

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

- Append the `_app.tsx` file with the creation of the React Query's query client
- Append the `_app.tsx` file with React Query's query client provider 

```typescript title="/apps/appName/_app.tsx"
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// highlight-next-line
const queryClient = new QueryClient()

function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    // highlight-next-line
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Welcome to testing!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    // highlight-next-line
    </QueryClientProvider>
  );
}
export default CustomApp;
```

_The above is needed in order to use React Query_

For further information please see the [docs](https://tanstack.com/query/v4/docs/react/overview)
</details>
