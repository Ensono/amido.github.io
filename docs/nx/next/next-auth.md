### @ensono-stacks/next:next-auth

<details>
<summary>Add Next Authentication to your next application</summary>

The next-auth generator will install and configure [NextAuth.js](https://next-auth.js.org/) into an existing Next application. It will add the initial configuration, add the session provider, setup an API endpoint and add local environmental variables. It will also configure provider specific setup.


## Prerequisites

An existing [Next](https://nextjs.org/) application

## Usage

```
nx @ensono-stacks/next:next-auth --project nameOfExistingNextProject --provider azureAdB2C --skipPackageJson false
```

### Command line arguments

The following command line arguments are available:

| Option    | Description           | Type      | Accepted Values   |Default            |
| ---       | -------------------   | ---       | ---               | ---               |
| --project | The name of the project  | nameOfApplication   |  string       | projectName              |
| --provider | The provider to be installed  | string    | none/azureAd/azureAdB2C                   |none     |
| --skipPackageJson | Do not add dependencies to `package.json`  | boolean    |  true/false                 |false     |

### Generator Output
##### The next auth plugin will 

- Create a new Next API endpoint with the file name `[...nextauth].ts`. This contains the dynamic route handler for NextAuth.js which will also contain all of your global NextAuth.js configurations. If you have specified a provider when running the generator this will be added to the providers array
```
import NextAuth from 'next-auth';
import AzureADProvider from 'next-auth/providers/azure-ad';

const nextAuth = NextAuth({
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
      tenantId: process.env.AZURE_AD_TENANT_ID,
    }),
  ],
});

export default nextAuth;
```
`/apps/appName/pages/api/[...nextauth].ts`


- Install the next-auth package and add to package.json, unless the `--skipPackageJson` option was used
```
"dependencies": {
    ...otherDependencies
    "next-auth": "4.18.8",
},
```
`/package.json`

- Create or append an `.env.local` file. Adding required next auth environmental variables. These will vary depending on the provider chosen. Be sure to update these values with the values provided by your provider
```
NEXTAUTH_URL=http://localhost:4200
NEXTAUTH_SECRET=secretValue
AZURE_AD_CLIENT_ID=
AZURE_AD_CLIENT_SECRET=
AZURE_AD_TENANT_ID=
```
`/.env.local`

- Append the `_app.tsx` file with a [session provider](https://next-auth.js.org/getting-started/client#sessionprovider) 
```
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { SessionProvider } from 'next-auth/react';

function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Welcome to testing!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}

export default CustomApp;
```
`/apps/appName/_app.tsx`

From here with the configuration complete it is now possible to access the [useSession](https://next-auth.js.org/getting-started/client#usesession) hook from next auth. For further information please see the [Getting Started Guide to Next Auth](https://next-auth.js.org/getting-started/example#frontend---add-react-hook)
</details>