---
id: security_netcore
title: Application Security
sidebar_label: Security
description: OAuth for .NET Core
keywords:
  - oauth
  - .net core
  - authentication
  - configuration
  - enable oauth
  - authorization url
  - authorization
---

## Overview

The .NET Core Ensono Stacks API template contains code which can easily be configured to integrate with any Identity provider via the standard OAuth 2.0 protocol.



## Authentication (Verification of JWT access tokens)

To verify the JWT bearer tokens we use the standard [.NET Core JWT bearer middleware](https://www.nuget.org/packages/Microsoft.AspNetCore.Authentication.JwtBearer).

By default this functionality is disabled but it can easily be enabled by changing the configuration settings.



### Configuration

JWT bearer authentication on API endpoints can be configured by changing settings in `JwtBearerAuthentication` section of the application configuration file `appsettings.json`.

This is the default section:

```json title="JWT Bearer Authentication Configuration settings"
"JwtBearerAuthentication": {
    "Audience": "<TODO>",
    "Authority": "<TODO>",
    "Enabled": false,
    "OpenApi": {
        "AuthorizationUrl": "<TODO>",
        "ClientId": "<TODO>",
        "TokenUrl": "<TODO>"
    }
```

By default the `Enabled` flag in the configuration section is set to false which means that all API endpoints can be consumed without any authentication (even if the endpoint has an `[Authorize]` attribute on it).

To enable authentication on all endpoints with an `[Authorize]` attribute set the Enabled flag to true and set the `Audience` and `Authority` values based on the values from your identity provider.

<table>
    <thead>
        <tr>
            <th>Settings</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Audience</td>
            <td>The expected value of the aud (audience) claim in the JWT bearer token. This is usually the identifier
                of the OAuth 2.0 authorization server from your identity provider. For Auth0 this is the identifier or
                the API.</td>
            <td><a href="https://api.stacks.com">https://api.stacks.com</a></td>
        </tr>
        <tr>
            <td>Authority</td>
            <td>The expected value of the iss (issuer) claim in the JWT bearer token. This is usually the domain of the
                OAuth 2.0 authorization server from your identity provider. <br /><br />This is also used by the JWT bearer
                middleware to retrieve the public key from the identity provider (via standard OAuth 2.0 .well-known
                endpoints) which was used to sign the token to check it was signed by the correct authority.</td>
            <td><a href="https://stacks-amido.eu.auth0.com/">https://stacks-amido.eu.auth0.com/</a></td>
        </tr>
    </tbody>
</table>

By setting the `Enabled`, `Audience` and `Authority` settings this will be enough to secure your API endpoints.

There are however some additional configuration settings and steps available to enable JWT authentication in Open API (Swagger documentation) and to allow component testing of the API endpoints using static test bearer tokens. These will be covered in the following sections.



## Authenticating via Open API (Swagger) documentation

To enable API users to authenticate on the Swagger documentation page via the Authorization Code with PKCE (recommended) and Implicit OAuth 2.0 flows the following settings need to be configured:

<table>
<thead>
  <tr>
    <th>Settings</th>
    <th>Description</th>
    <th>Example</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>OpenApi.AuthorizationUrl</td>
    <td>This url is used to authenticate the user to the authorization server.<br /><br />The user is redirected to this url where they login and are redirected back to the Swagger page.<br /><br />This is used for both the Authorization Code with PKCE and Implicit flows.<br /><br />For Authorization Code with PKCE flow a code is returned.<br /><br />For Implicit flow a token is returned.</td>
    <td>https://stacks-amido.eu.auth0.com/authorize?audience=https://api.stacks.com</td>
  </tr>
  <tr>
    <td>OpenApi.ClientId</td>
    <td>The Client ID of the application configured in the identity provider.</td>
    <td>C48xVvquFoi9KlgPc0JNBdmHVCJ5kxFL</td>
  </tr>
  <tr>
    <td>OpenApi.TokenUrl</td>
    <td>This url is used to retrieve a JWT access token for the user using the code returned from the AuthorizationUrl.<br /><br />This is used for the Authorization Code with PKCE flow only.</td>
    <td>https://stacks-amido.eu.auth0.com/oauth/token</td>
  </tr>
</tbody>
</table>

Once set, a padlock will appear on the Swagger UI next to any API endpoint secured with an [Authorize] attribute.

To Authenticate, click on the padlock and login using your chosen OAuth 2.0 flow.

Alternatively, if you already have a JWT bearer token you can use the "bearer (apiKey)" authorization in Swagger UI instead.

Once authenticated, any calls made to API endpoints from within the Swagger UI will pass a JWT bearer token for your user in the Authorization header of the request.

<br />

### Component testing secured API endpoints

JWT bearer authentication configuration of the API when being component tested can be found in class `CustomAutoDataAttribute`.

```csharp title="CustomAutoDataAttribute.cs"
// TODO - Set JWT authentication config settings if enabled
var jwtBearerAuthenticationConfiguration = new JwtBearerAuthenticationConfiguration
{
    AllowExpiredTokens = true,
    Audience = "<TODO>",
    Authority = "<TODO>",
    Enabled = false,
    OpenApi = new OpenApiJwtBearerAuthenticationConfiguration
    {
        AuthorizationUrl = "<TODO>",
        ClientId = "<TODO>",
        TokenUrl = "<TODO>"
    },
    UseStubbedBackChannelHandler = true
};
```

By default the component tests test the API with no authentication/authorization enabled.

To create component tests which test that a 401 (Unauthorized) response is returned when no JWT token is provided or that a 403 (Forbidden) response is returned when a JWT token with insufficient claims to fulfill the authorization policy is provided the Enabled, Audience and Authority settings must be set to match the JWT token used in the request (see Configuration section above).

The OpenApi settings are optional. It is up to you whether you want to set those for component testing.

There are some additional configuration settings available for component testing:


<table>
    <thead>
        <tr>
            <th>Settings</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>AllowExpiredTokens</td>
            <td>Allows expired tokens to be used when authenticating against the API endpoints.<br /><br />When set to
                true, this allows us to use static bearer tokens in the tests.</td>
            <td>true</td>
        </tr>
        <tr>
            <td>UseStubbedBackChannelHandler</td>
            <td>Allows us to use a handler in the tests to stub the calls to the OAuth 2.0 identity provider to retrieve
                the public key used to sign the JWT tokens.<br /><br />When set to true, the stubbed responses from the
                identity provider must be placed in the corresponding methods in file
                StubJwtBearerAuthenticationHttpMessageHandler.cs. The public key in the stubbed handler must match the
                key used to sign the test bearer tokens.<br /><br />When set to false, the JWT tokens will be verified as
                normal (i.e. the public key used to verify the token will be retrieved using the OAuth 2.0 identity
                providers .well-known endpoints). <br /><br />The benefits of using a stubbed handler to retrieve the
                public key are:<br />1. Component tests are more robust as they don't depend on OAuth 2.0 provider
                endpoints being available.<br />2. Component tests are faster.<br />3. When OAuth 2.0 provider
                public keys are rotated we don't need to regenerate the static bearer tokens we are using in component
                tests.</td>
            <td>true</td>
        </tr>
    </tbody>
</table>


The `AuthTokenFixture.cs` class has been provided for storing the static JWT bearer tokens used for component testing.


<br />

### Authorization

The Ensono Stacks template does not provide any functionality for complex authorization scenarios although this is simple enough to implement using .NET Core Authorization Policies and JWT token claims.
