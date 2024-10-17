---
id: security_netcore
title: Application Security
sidebar_label: Security
description: OAuth for .NET
keywords:
  - oauth
  - .net
  - authentication
  - configuration
  - enable oauth
  - authorization url
  - authorization
---

## Overview

This project template for building APIs using .NET can be easily set up to use OAuth 2.0 authentication. This means it can work with services that handle user login (like Google, Auth0, or Microsoft).

## Authentication (Checking JWT Access Tokens)

In this project, we check if a user is logged in using **JWT tokens**. A JWT token is like a badge someone gets after they log in. They show this badge whenever they want to access parts of your API that require authentication.

To check the JWT tokens, we use a built-in .NET tool called the **JWT Bearer middleware**. This tool automatically handles the process of checking if the token is valid.

By default, the code doesn't require any login to access your API, but you can easily change this by updating some settings.

### How to Set Up Authentication

To turn on authentication (so that users need to log in), you need to update the settings in the `appsettings.json` file. This file is where all your API's important settings are kept.

In this section:

```json
"JwtBearerAuthentication": {
    "Audience": "<insert-audience-here>",
    "Authority": "<insert-authority-here>",
    "Enabled": false,
    "OpenApi": {
        "AuthorizationUrl": "<insert-authorization-url-here>",
        "ClientId": "<insert-client-id-here>",
        "TokenUrl": "<insert-token-url-here>"
    }
}
```

The important parts to focus on are:

1. `Enabled`: This is set to `false` by default, which means anyone can access your API without logging in. You should change this to `true` to require login.
2. `Audience`: This tells the API who the token (badge) is meant for. For example, if you're using a login service like Auth0, this will be the identifier for your API.
3. `Authority`: This is the place where the token was issued (who gave the badge). Usually, this is the URL of the service you're using to log users in (like `https://your-auth-service.com`).
 
Once you fill in the `Audience`, `Authority`, and set `Enabled` to `true`, your API is secured. Now, only users with a valid login token can access certain parts of it.

### Making Login Work in Swagger (Your API Documentation)

Swagger is a tool that lets you document and test your API. You can also use it to test if users can log in. To make this work, you need to add some extra details to the `appsettings.json` file in the `OpenApi` section:

- **`AuthorizationUrl`**: This is the page users will go to when they need to log in.
- **`ClientId`**: This is a special ID that identifies your API in the login system (like a username for your API).
- **`TokenUrl`**: After the user logs in, this is the URL used to get the token.

When you set these, users will see a little lock icon next to protected endpoints in the Swagger documentation. Clicking the lock will let them log in and try out the API.

If they already have a token, they can also use it directly by selecting "bearer (apiKey)" in Swagger.

### Testing Your API with JWT Tokens

When you write tests for your API, you can also set up JWT authentication for those tests. This lets you check that your API behaves correctly when users try to access it with or without a valid login.

You can configure these settings in a file called `CustomAutoDataAttribute.cs`. Here's an example of how it might look:

```csharp
var jwtBearerAuthenticationConfiguration = new JwtBearerAuthenticationConfiguration
{
    AllowExpiredTokens = true,  // Lets you use expired tokens for testing
    Audience = "<insert-audience-here>",
    Authority = "<insert-authority-here>",
    Enabled = false,
    OpenApi = new OpenApiJwtBearerAuthenticationConfiguration
    {
        AuthorizationUrl = "<insert-authorization-url-here>",
        ClientId = "<insert-client-id-here>",
        TokenUrl = "<insert-token-url-here>"
    },
    UseStubbedBackChannelHandler = true  // Pretends to communicate with the login system to make tests faster
};
```
- **AllowExpiredTokens**: Normally, expired tokens are rejected, but for testing, you can allow them. This makes it easier to use pre-made tokens.
  
- **UseStubbedBackChannelHandler**: This simulates communication with the login system, so you don't have to wait for real requests. It speeds up tests and makes sure they run even if the login system is down.

### Checking If Authentication Works Correctly in Tests

When testing, you might want to check these scenarios:

1. **If no token is provided**, your API should return a `401 Unauthorized` error, meaning the user is not logged in.
2. **If a token is provided but it doesn't have the right permissions**, your API should return a `403 Forbidden` error, meaning the user is logged in but not allowed to do certain things.

To make sure your tests cover these cases, the `Audience` and `Authority` settings in your test code need to match the values used in your JWT tokens.

You can also store test tokens in a special file called `AuthTokenFixture.cs`.

### Authorization (Who Can Do What)

This template only handles basic login (authentication), not complex rules about what each user can do (authorization). However, you can add these rules yourself by using .NET's built-in tools, like **Authorization Policies**. This lets you decide what actions different types of users can take based on the information (claims) in their JWT token.