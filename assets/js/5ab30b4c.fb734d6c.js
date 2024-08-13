"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[3805],{5495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(4848),o=n(8453);const r={id:"security_netcore",title:"Application Security",sidebar_label:"Security",description:"OAuth for .NET Core",keywords:["oauth",".net core","authentication","configuration","enable oauth","authorization url","authorization"]},s=void 0,a={id:"workloads/azure/backend/netcore/security_netcore",title:"Application Security",description:"OAuth for .NET Core",source:"@site/docs/workloads/azure/backend/netcore/security_netcore.md",sourceDirName:"workloads/azure/backend/netcore",slug:"/workloads/azure/backend/netcore/security_netcore",permalink:"/docs/workloads/azure/backend/netcore/security_netcore",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"security_netcore",title:"Application Security",sidebar_label:"Security",description:"OAuth for .NET Core",keywords:["oauth",".net core","authentication","configuration","enable oauth","authorization url","authorization"]},sidebar:"docs",previous:{title:"Logging",permalink:"/docs/workloads/azure/backend/netcore/logging_netcore"},next:{title:"Introduction",permalink:"/docs/workloads/common/backend/java/intro_java"}},h={},c=[{value:"Overview",id:"overview",level:2},{value:"Authentication (Verification of JWT access tokens)",id:"authentication-verification-of-jwt-access-tokens",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Authenticating via Open API (Swagger) documentation",id:"authenticating-via-open-api-swagger-documentation",level:2},{value:"Component testing secured API endpoints",id:"component-testing-secured-api-endpoints",level:3},{value:"Authorization",id:"authorization",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"The .NET Core Ensono Stacks API template contains code which can easily be configured to integrate with any Identity provider via the standard OAuth 2.0 protocol."}),"\n",(0,i.jsx)(t.h2,{id:"authentication-verification-of-jwt-access-tokens",children:"Authentication (Verification of JWT access tokens)"}),"\n",(0,i.jsxs)(t.p,{children:["To verify the JWT bearer tokens we use the standard ",(0,i.jsx)(t.a,{href:"https://www.nuget.org/packages/Microsoft.AspNetCore.Authentication.JwtBearer",children:".NET Core JWT bearer middleware"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"By default this functionality is disabled but it can easily be enabled by changing the configuration settings."}),"\n",(0,i.jsx)(t.h3,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["JWT bearer authentication on API endpoints can be configured by changing settings in ",(0,i.jsx)(t.code,{children:"JwtBearerAuthentication"})," section of the application configuration file ",(0,i.jsx)(t.code,{children:"appsettings.json"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"This is the default section:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",metastring:'title="JWT Bearer Authentication Configuration settings"',children:'"JwtBearerAuthentication": {\n    "Audience": "<TODO>",\n    "Authority": "<TODO>",\n    "Enabled": false,\n    "OpenApi": {\n        "AuthorizationUrl": "<TODO>",\n        "ClientId": "<TODO>",\n        "TokenUrl": "<TODO>"\n    }\n'})}),"\n",(0,i.jsxs)(t.p,{children:["By default the ",(0,i.jsx)(t.code,{children:"Enabled"})," flag in the configuration section is set to false which means that all API endpoints can be consumed without any authentication (even if the endpoint has an ",(0,i.jsx)(t.code,{children:"[Authorize]"})," attribute on it)."]}),"\n",(0,i.jsxs)(t.p,{children:["To enable authentication on all endpoints with an ",(0,i.jsx)(t.code,{children:"[Authorize]"})," attribute set the Enabled flag to true and set the ",(0,i.jsx)(t.code,{children:"Audience"})," and ",(0,i.jsx)(t.code,{children:"Authority"})," values based on the values from your identity provider."]}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Settings"}),(0,i.jsx)("th",{children:"Description"}),(0,i.jsx)("th",{children:"Example"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Audience"}),(0,i.jsx)("td",{children:"The expected value of the aud (audience) claim in the JWT bearer token. This is usually the identifier\nof the OAuth 2.0 authorization server from your identity provider. For Auth0 this is the identifier or\nthe API."}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"https://api.stacks.com",children:(0,i.jsx)(t.a,{href:"https://api.stacks.com",children:"https://api.stacks.com"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Authority"}),(0,i.jsxs)("td",{children:["The expected value of the iss (issuer) claim in the JWT bearer token. This is usually the domain of the\nOAuth 2.0 authorization server from your identity provider. ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"This is also used by the JWT bearer\nmiddleware to retrieve the public key from the identity provider (via standard OAuth 2.0 .well-known\nendpoints) which was used to sign the token to check it was signed by the correct authority."]}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"https://stacks-amido.eu.auth0.com/",children:(0,i.jsx)(t.a,{href:"https://stacks-amido.eu.auth0.com/",children:"https://stacks-amido.eu.auth0.com/"})})})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["By setting the ",(0,i.jsx)(t.code,{children:"Enabled"}),", ",(0,i.jsx)(t.code,{children:"Audience"})," and ",(0,i.jsx)(t.code,{children:"Authority"})," settings this will be enough to secure your API endpoints."]}),"\n",(0,i.jsx)(t.p,{children:"There are however some additional configuration settings and steps available to enable JWT authentication in Open API (Swagger documentation) and to allow component testing of the API endpoints using static test bearer tokens. These will be covered in the following sections."}),"\n",(0,i.jsx)(t.h2,{id:"authenticating-via-open-api-swagger-documentation",children:"Authenticating via Open API (Swagger) documentation"}),"\n",(0,i.jsx)(t.p,{children:"To enable API users to authenticate on the Swagger documentation page via the Authorization Code with PKCE (recommended) and Implicit OAuth 2.0 flows the following settings need to be configured:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Settings"}),(0,i.jsx)("th",{children:"Description"}),(0,i.jsx)("th",{children:"Example"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"OpenApi.AuthorizationUrl"}),(0,i.jsxs)("td",{children:["This url is used to authenticate the user to the authorization server.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"The user is redirected to this url where they login and are redirected back to the Swagger page.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"This is used for both the Authorization Code with PKCE and Implicit flows.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"For Authorization Code with PKCE flow a code is returned.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"For Implicit flow a token is returned."]}),(0,i.jsx)("td",{children:(0,i.jsx)(t.a,{href:"https://stacks-amido.eu.auth0.com/authorize?audience=https://api.stacks.com",children:"https://stacks-amido.eu.auth0.com/authorize?audience=https://api.stacks.com"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"OpenApi.ClientId"}),(0,i.jsx)("td",{children:"The Client ID of the application configured in the identity provider."}),(0,i.jsx)("td",{children:"C48xVvquFoi9KlgPc0JNBdmHVCJ5kxFL"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"OpenApi.TokenUrl"}),(0,i.jsxs)("td",{children:["This url is used to retrieve a JWT access token for the user using the code returned from the AuthorizationUrl.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"This is used for the Authorization Code with PKCE flow only."]}),(0,i.jsx)("td",{children:(0,i.jsx)(t.a,{href:"https://stacks-amido.eu.auth0.com/oauth/token",children:"https://stacks-amido.eu.auth0.com/oauth/token"})})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"Once set, a padlock will appear on the Swagger UI next to any API endpoint secured with an [Authorize] attribute."}),"\n",(0,i.jsx)(t.p,{children:"To Authenticate, click on the padlock and login using your chosen OAuth 2.0 flow."}),"\n",(0,i.jsx)(t.p,{children:'Alternatively, if you already have a JWT bearer token you can use the "bearer (apiKey)" authorization in Swagger UI instead.'}),"\n",(0,i.jsx)(t.p,{children:"Once authenticated, any calls made to API endpoints from within the Swagger UI will pass a JWT bearer token for your user in the Authorization header of the request."}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.h3,{id:"component-testing-secured-api-endpoints",children:"Component testing secured API endpoints"}),"\n",(0,i.jsxs)(t.p,{children:["JWT bearer authentication configuration of the API when being component tested can be found in class ",(0,i.jsx)(t.code,{children:"CustomAutoDataAttribute"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",metastring:'title="CustomAutoDataAttribute.cs"',children:'// TODO - Set JWT authentication config settings if enabled\nvar jwtBearerAuthenticationConfiguration = new JwtBearerAuthenticationConfiguration\n{\n    AllowExpiredTokens = true,\n    Audience = "<TODO>",\n    Authority = "<TODO>",\n    Enabled = false,\n    OpenApi = new OpenApiJwtBearerAuthenticationConfiguration\n    {\n        AuthorizationUrl = "<TODO>",\n        ClientId = "<TODO>",\n        TokenUrl = "<TODO>"\n    },\n    UseStubbedBackChannelHandler = true\n};\n'})}),"\n",(0,i.jsx)(t.p,{children:"By default the component tests test the API with no authentication/authorization enabled."}),"\n",(0,i.jsx)(t.p,{children:"To create component tests which test that a 401 (Unauthorized) response is returned when no JWT token is provided or that a 403 (Forbidden) response is returned when a JWT token with insufficient claims to fulfill the authorization policy is provided the Enabled, Audience and Authority settings must be set to match the JWT token used in the request (see Configuration section above)."}),"\n",(0,i.jsx)(t.p,{children:"The OpenApi settings are optional. It is up to you whether you want to set those for component testing."}),"\n",(0,i.jsx)(t.p,{children:"There are some additional configuration settings available for component testing:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Settings"}),(0,i.jsx)("th",{children:"Description"}),(0,i.jsx)("th",{children:"Example"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"AllowExpiredTokens"}),(0,i.jsxs)("td",{children:["Allows expired tokens to be used when authenticating against the API endpoints.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"When set to\ntrue, this allows us to use static bearer tokens in the tests."]}),(0,i.jsx)("td",{children:"true"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"UseStubbedBackChannelHandler"}),(0,i.jsxs)("td",{children:["Allows us to use a handler in the tests to stub the calls to the OAuth 2.0 identity provider to retrieve\nthe public key used to sign the JWT tokens.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"When set to true, the stubbed responses from the\nidentity provider must be placed in the corresponding methods in file\nStubJwtBearerAuthenticationHttpMessageHandler.cs. The public key in the stubbed handler must match the\nkey used to sign the test bearer tokens.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"When set to false, the JWT tokens will be verified as\nnormal (i.e. the public key used to verify the token will be retrieved using the OAuth 2.0 identity\nproviders .well-known endpoints). ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"The benefits of using a stubbed handler to retrieve the\npublic key are:",(0,i.jsx)("br",{}),"1. Component tests are more robust as they don't depend on OAuth 2.0 provider\nendpoints being available.",(0,i.jsx)("br",{}),"2. Component tests are faster.",(0,i.jsx)("br",{}),"3. When OAuth 2.0 provider\npublic keys are rotated we don't need to regenerate the static bearer tokens we are using in component\ntests."]}),(0,i.jsx)("td",{children:"true"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"AuthTokenFixture.cs"})," class has been provided for storing the static JWT bearer tokens used for component testing."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.h3,{id:"authorization",children:"Authorization"}),"\n",(0,i.jsx)(t.p,{children:"The Ensono Stacks template does not provide any functionality for complex authorization scenarios although this is simple enough to implement using .NET Core Authorization Policies and JWT token claims."})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(6540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);