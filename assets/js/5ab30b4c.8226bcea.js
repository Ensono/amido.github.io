"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[9780],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var i=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=i.createContext({}),s=function(t){var e=i.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=s(t.components);return i.createElement(u.Provider,{value:e},t.children)},d="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=s(n),p=o,k=d["".concat(u,".").concat(p)]||d[p]||h[p]||r;return n?i.createElement(k,a(a({ref:e},c),{},{components:n})):i.createElement(k,a({ref:e},c))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,a=new Array(r);a[0]=p;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l[d]="string"==typeof t?t:o,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4101:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=["components"],l={id:"security_netcore",title:"Application Security",sidebar_label:"Security",description:"OAuth for .NET Core",keywords:["oauth",".net core","authentication","configuration","enable oauth","authorization url","authorization"]},u=void 0,s={unversionedId:"workloads/azure/backend/netcore/security_netcore",id:"workloads/azure/backend/netcore/security_netcore",isDocsHomePage:!1,title:"Application Security",description:"OAuth for .NET Core",source:"@site/docs/workloads/azure/backend/netcore/security_netcore.md",sourceDirName:"workloads/azure/backend/netcore",slug:"/workloads/azure/backend/netcore/security_netcore",permalink:"/docs/workloads/azure/backend/netcore/security_netcore",tags:[],version:"current",frontMatter:{id:"security_netcore",title:"Application Security",sidebar_label:"Security",description:"OAuth for .NET Core",keywords:["oauth",".net core","authentication","configuration","enable oauth","authorization url","authorization"]},sidebar:"docs",previous:{title:"Logging",permalink:"/docs/workloads/azure/backend/netcore/logging_netcore"},next:{title:"Introduction",permalink:"/docs/workloads/azure/data/intro_data_azure"}},c=[{value:"Overview",id:"overview",children:[],level:2},{value:"Authentication (Verification of JWT access tokens)",id:"authentication-verification-of-jwt-access-tokens",children:[{value:"Configuration",id:"configuration",children:[],level:3}],level:2},{value:"Authenticating via Open API (Swagger) documentation",id:"authenticating-via-open-api-swagger-documentation",children:[{value:"Component testing secured API endpoints",id:"component-testing-secured-api-endpoints",children:[],level:3},{value:"Authorization",id:"authorization",children:[],level:3}],level:2}],d={toc:c},h="wrapper";function p(t){var e=t.components,n=(0,o.Z)(t,a);return(0,r.kt)(h,(0,i.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The .NET Core Stacks API template contains code which can easily be configured to integrate with any Identity provider via the standard OAuth 2.0 protocol."),(0,r.kt)("h2",{id:"authentication-verification-of-jwt-access-tokens"},"Authentication (Verification of JWT access tokens)"),(0,r.kt)("p",null,"To verify the JWT bearer tokens we use the standard ",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Microsoft.AspNetCore.Authentication.JwtBearer"},".NET Core JWT bearer middleware"),"."),(0,r.kt)("p",null,"By default this functionality is disabled but it can easily be enabled by changing the configuration settings."),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"JWT bearer authentication on API endpoints can be configured by changing settings in ",(0,r.kt)("inlineCode",{parentName:"p"},"JwtBearerAuthentication")," section of the application configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"appsettings.json"),"."),(0,r.kt)("p",null,"This is the default section:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JWT Bearer Authentication Configuration settings"',title:'"JWT',Bearer:!0,Authentication:!0,Configuration:!0,'settings"':!0},'"JwtBearerAuthentication": {\n    "Audience": "<TODO>",\n    "Authority": "<TODO>",\n    "Enabled": false,\n    "OpenApi": {\n        "AuthorizationUrl": "<TODO>",\n        "ClientId": "<TODO>",\n        "TokenUrl": "<TODO>"\n    }\n')),(0,r.kt)("p",null,"By default the ",(0,r.kt)("inlineCode",{parentName:"p"},"Enabled")," flag in the configuration section is set to false which means that all API endpoints can be consumed without any authentication (even if the endpoint has an ",(0,r.kt)("inlineCode",{parentName:"p"},"[Authorize]")," attribute on it)."),(0,r.kt)("p",null,"To enable authentication on all endpoints with an ",(0,r.kt)("inlineCode",{parentName:"p"},"[Authorize]")," attribute set the Enabled flag to true and set the ",(0,r.kt)("inlineCode",{parentName:"p"},"Audience")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Authority")," values based on the values from your identity provider."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Settings"),(0,r.kt)("th",null,"Description"),(0,r.kt)("th",null,"Example"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Audience"),(0,r.kt)("td",null,"The expected value of the aud (audience) claim in the JWT bearer token. This is usually the identifier of the OAuth 2.0 authorization server from your identity provider. For Auth0 this is the identifier or the API."),(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://api.stacks.com"},"https://api.stacks.com"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Authority"),(0,r.kt)("td",null,"The expected value of the iss (issuer) claim in the JWT bearer token. This is usually the domain of the OAuth 2.0 authorization server from your identity provider. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"This is also used by the JWT bearer middleware to retrieve the public key from the identity provider (via standard OAuth 2.0 .well-known endpoints) which was used to sign the token to check it was signed by the correct authority."),(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://stacks-amido.eu.auth0.com/"},"https://stacks-amido.eu.auth0.com/"))))),(0,r.kt)("p",null,"By setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"Enabled"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Audience")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Authority")," settings this will be enough to secure your API endpoints."),(0,r.kt)("p",null,"There are however some additional configuration settings and steps available to enable JWT authentication in Open API (Swagger documentation) and to allow component testing of the API endpoints using static test bearer tokens. These will be covered in the following sections."),(0,r.kt)("h2",{id:"authenticating-via-open-api-swagger-documentation"},"Authenticating via Open API (Swagger) documentation"),(0,r.kt)("p",null,"To enable API users to authenticate on the Swagger documentation page via the Authorization Code with PKCE (recommended) and Implicit OAuth 2.0 flows the following settings need to be configured:"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Settings"),(0,r.kt)("th",null,"Description"),(0,r.kt)("th",null,"Example"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"OpenApi.AuthorizationUrl"),(0,r.kt)("td",null,"This url is used to authenticate the user to the authorization server.",(0,r.kt)("br",null),(0,r.kt)("br",null),"The user is redirected to this url where they login and are redirected back to the Swagger page.",(0,r.kt)("br",null),(0,r.kt)("br",null),"This is used for both the Authorization Code with PKCE and Implicit flows.",(0,r.kt)("br",null),(0,r.kt)("br",null),"For Authorization Code with PKCE flow a code is returned.",(0,r.kt)("br",null),(0,r.kt)("br",null),"For Implicit flow a token is returned."),(0,r.kt)("td",null,"https://stacks-amido.eu.auth0.com/authorize?audience=https://api.stacks.com")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"OpenApi.ClientId"),(0,r.kt)("td",null,"The Client ID of the application configured in the identity provider."),(0,r.kt)("td",null,"C48xVvquFoi9KlgPc0JNBdmHVCJ5kxFL")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"OpenApi.TokenUrl"),(0,r.kt)("td",null,"This url is used to retrieve a JWT access token for the user using the code returned from the AuthorizationUrl.",(0,r.kt)("br",null),(0,r.kt)("br",null),"This is used for the Authorization Code with PKCE flow only."),(0,r.kt)("td",null,"https://stacks-amido.eu.auth0.com/oauth/token")))),(0,r.kt)("p",null,"Once set, a padlock will appear on the Swagger UI next to any API endpoint secured with an ","[Authorize]"," attribute."),(0,r.kt)("p",null,"To Authenticate, click on the padlock and login using your chosen OAuth 2.0 flow."),(0,r.kt)("p",null,'Alternatively, if you already have a JWT bearer token you can use the "bearer (apiKey)" authorization in Swagger UI instead.'),(0,r.kt)("p",null,"Once authenticated, any calls made to API endpoints from within the Swagger UI will pass a JWT bearer token for your user in the Authorization header of the request."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"component-testing-secured-api-endpoints"},"Component testing secured API endpoints"),(0,r.kt)("p",null,"JWT bearer authentication configuration of the API when being component tested can be found in class ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomAutoDataAttribute"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="CustomAutoDataAttribute.cs"',title:'"CustomAutoDataAttribute.cs"'},'// TODO - Set JWT authentication config settings if enabled\nvar jwtBearerAuthenticationConfiguration = new JwtBearerAuthenticationConfiguration\n{\n    AllowExpiredTokens = true,\n    Audience = "<TODO>",\n    Authority = "<TODO>",\n    Enabled = false,\n    OpenApi = new OpenApiJwtBearerAuthenticationConfiguration\n    {\n        AuthorizationUrl = "<TODO>",\n        ClientId = "<TODO>",\n        TokenUrl = "<TODO>"\n    },\n    UseStubbedBackChannelHandler = true\n};\n')),(0,r.kt)("p",null,"By default the component tests test the API with no authentication/authorization enabled."),(0,r.kt)("p",null,"To create component tests which test that a 401 (Unauthorized) response is returned when no JWT token is provided or that a 403 (Forbidden) response is returned when a JWT token with insufficient claims to fulfill the authorization policy is provided the Enabled, Audience and Authority settings must be set to match the JWT token used in the request (see Configuration section above)."),(0,r.kt)("p",null,"The OpenApi settings are optional. It is up to you whether you want to set those for component testing."),(0,r.kt)("p",null,"There are some additional configuration settings available for component testing:"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Settings"),(0,r.kt)("th",null,"Description"),(0,r.kt)("th",null,"Example"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"AllowExpiredTokens"),(0,r.kt)("td",null,"Allows expired tokens to be used when authenticating against the API endpoints.",(0,r.kt)("br",null),(0,r.kt)("br",null),"When set to true, this allows us to use static bearer tokens in the tests."),(0,r.kt)("td",null,"true")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"UseStubbedBackChannelHandler"),(0,r.kt)("td",null,"Allows us to use a handler in the tests to stub the calls to the OAuth 2.0 identity provider to retrieve the public key used to sign the JWT tokens.",(0,r.kt)("br",null),(0,r.kt)("br",null),"When set to true, the stubbed responses from the identity provider must be placed in the corresponding methods in file StubJwtBearerAuthenticationHttpMessageHandler.cs. The public key in the stubbed handler must match the key used to sign the test bearer tokens.",(0,r.kt)("br",null),(0,r.kt)("br",null),"When set to false, the JWT tokens will be verified as normal (i.e. the public key used to verify the token will be retrieved using the OAuth 2.0 identity providers .well-known endpoints). ",(0,r.kt)("br",null),(0,r.kt)("br",null),"The benefits of using a stubbed handler to retrieve the public key are:",(0,r.kt)("br",null),"1. Component tests are more robust as they don't depend on OAuth 2.0 provider endpoints being available.",(0,r.kt)("br",null),"2. Component tests are faster.",(0,r.kt)("br",null),"3. When OAuth 2.0 provider public keys are rotated we don't need to regenerate the static bearer tokens we are using in component tests."),(0,r.kt)("td",null,"true")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthTokenFixture.cs")," class has been provided for storing the static JWT bearer tokens used for component testing."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"authorization"},"Authorization"),(0,r.kt)("p",null,"The Stacks template does not provide any functionality for complex authorization scenarios although this is simple enough to implement using .NET Core Authorization Policies and JWT token claims."))}p.isMDXComponent=!0}}]);