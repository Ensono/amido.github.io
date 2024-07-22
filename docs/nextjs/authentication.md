---
id: authentication
title: Authentication and Session Management
sidebar_label: Overview
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

Auth.js supports a wide variety of custom authentication providers, making it easy to intergrate with any compliant OAuth2 or OpenID provider.
Ensono Stacks continually adds full support for industry leading providers that have a proven track record and meet Ensono's internal audit standards.

The current list of supported providers:

- Microsoft Entra Id (Azure AD)
- Auth0

For a full list of Auth.js providers, you can [review the list here](https://authjs.dev/reference/core/providers).

### Refresh Token Rotation

Ensono Stacks supports Refresh token rotation for any compliant OAuth2 or OpenID provider.

## Session Storage

Auth.js has two different strategies for holding session management, cookie based or database.

### Cookie-Based Sessions

Cookie-based sessions enables a quick start without the need for additional infrastructure. All session data is stored within an encrypted cookie as a secure JWT (JSON Web Token).

:::caution

Browsers impose a max cookie size limit of 4096 bytes. We recommend you also consult your infrastructure limits, as there could be restrictions imposed on total request header sizes.

:::

### Database-Based Sessions (Redis)

Auth.js supports adapters that transfer account, user and session data to a database. A Session cookie on the user's device links the relevant data and is composed on the server and sent back to the client.

Ensono Stacks supports Redis for session storage, as it is proven, fast in-memory cache solution, essential for efficient data fetching on each request.

## Guest Sessions

While Auth.js does not natively support guest or anonymous sessions, Ensono Stacks provides a configuration to enable this feature with full support for your chosen session storage.

By default, guest users are assigned a “guest” user role, allowing you to implement necessary role-based controls within Next.js.

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

Auth.js offers Next.js middleware capable of updating session expiry with each matching request. Auth.js core is fully supported in the edge runtime, so if you’re using cookie-based sessions, you should have no issues utilising this feature.

However, adapters like our Redis implementation are not supported in the edge runtime due to the need for built-in modules that are unavailable. For more information on Auth.js’ approach to edge runtime compatibility, you can [read more here](https://authjs.dev/guides/edge-compatibility).

To add Middleware to your Next.js application:

```ts title=/apps/nextApp/middleware.ts
export { auth as middleware } from "@my-stacks-workspace/auth";
```
