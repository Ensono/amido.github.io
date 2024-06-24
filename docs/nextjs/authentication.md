---
id: authentication
title: Authentication and Session Management
sidebar_label: Authentication and Session Management
description: Using Ensono Stacks with NextJs Authentication and Session Management
keywords:
  - Nx
  - monorepo
  - stacks
  - Generator
  - Executor
  - ensono
---

Authentication and Session Management is provided with a custom implementation of [Auth.js (Next-auth)](https://authjs.dev/). To configure Authentication into your Ensono Stacks workspace follow the Next.js plugin documentation for the [@ensono-stacks/next:next-auth generator](/docs/getting_started/next/ensono-stacks-next#ensono-stacksnextnext-auth).

:::info

Ensono Stacks is currently leveraging the v5 beta builds for Auth.js, to leverage full support with Next.js' App Router.

:::

## Authentication

Auth.js allows supports a variety of custom authentication providers, making it fairly trivial to support any compliant OAuth2 or OpenID provider.
Ensono Stacks continues to add full support for industry leading providers that have a proven track record and comply with Ensono's internal audits.

The current list of supported providers:

- Microsoft Entra Id (Azure AD)
- Auth0

For a full list of Auth.js providers, you can [review the list here](https://authjs.dev/reference/core/providers).

### Refresh Token Rotation

Ensono Stacks supports Refresh token rotation for any compliant OAuth2 or OpenID provider.

## Session Storage

Auth.js has two different strategies for holding session management, cookie based or database.

### Cookie Based Sessions

Cookie based sessions allows you get started quickly without the need for additional infrastructure. All session data is stored within an encrypted cookie as a secure JWT (JSON Web Token).

:::caution

Browsers impose a max cookie size limit of 4096 bytes. We recommend you also consult your infrastructure limits, as there could be restrictions imposed on total request header sizes.

:::

### Database Based Sessions (Redis)

Auth.js allows for adapters which can handoff account, user and session data to a database. A Session cookie is on the user's device links the relevant data and is composed on the server back to Next.js.

Ensono Stacks has support for Redis as a session storage, as it is proven to be a fast in-memory cache solution. Which is essential when data fetching is almost always required for each request.

## Guest Sessions

By default Auth.js does not yet provide Guest or Anonymous Sessions, however Ensono Stacks offers a configuration to enable this behaviour, with full support of your chosen Session Storage.

By default, Guest user's will have a user role of "guest" allowing you to craft the necessary role based controls within Next.js.

A basic Guest Session Component is added to the `/src/components` directory in your Next.js application. Including this client component will initiate the guest session.

```tsx
import { SessionProvider } from "next-auth/react";

import GuestSession from "../components/guest-session";

export default async function Index() {
  return (
    <SessionProvider>
      <GuestSession />
      ...
    </SessionProvider>
  );
}
```

Session Merging is available with the Redis Session Storage option, allowing the guest session data to be migrated to the Authenticated session.

:::caution

Cookie based sessions have limited functionality as all session data is stored on the user's device. Session merging is not currently possible for this storage as the previous session is removed after successfully authenticating with your provider.

:::

## Middleware

Auth.js provides Next.js middleware that is able to update session expiry with each matching request. Auth.js core is fully supported in edge runtime, so if you are using cookie based sessions you should have no issues leveraging this feature.

Adapters, like our Redis implementation, are not supported in the Edge Runtime as it requires built-in modules that are not available. To read more on Auth.js' approach to Edge Runtime compatability, you can [read more here](https://authjs.dev/guides/edge-compatibility).

To add Middleware to your Next.js application:

```ts title=/apps/nextApp/middleware.ts
export { auth as middleware } from "@my-stacks-workspace/auth";
```
