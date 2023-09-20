"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[5008],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8929:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={},u=void 0,s={unversionedId:"getting_started/next/next-auth-redis-deployment",id:"getting_started/next/next-auth-redis-deployment",title:"next-auth-redis-deployment",description:"@ensono-stacks/next:next-auth-redis-deployment",source:"@site/docs/getting_started/next/next-auth-redis-deployment.md",sourceDirName:"getting_started/next",slug:"/getting_started/next/next-auth-redis-deployment",permalink:"/docs/getting_started/next/next-auth-redis-deployment",draft:!1,tags:[],version:"current",frontMatter:{}},p={},d=[{value:"@ensono-stacks/next:next-auth-redis-deployment",id:"ensono-stacksnextnext-auth-redis-deployment",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Command line arguments",id:"command-line-arguments",level:3},{value:"Generator Output",id:"generator-output",level:3}],c={toc:d},m="wrapper";function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"ensono-stacksnextnext-auth-redis-deployment"},"@ensono-stacks/next:next-auth-redis-deployment"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Configure Deployment & Infra to support Redis in your Next application"),(0,o.kt)("p",null,"The next-auth-redis-deployment generator will add required Redis config into your existing Next app with Next-auth."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"An existing ",(0,o.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next")," application with Next-auth. Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@ensono-stacks/next:next-auth")," generator to add this into your application"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nx g @ensono-stacks/next:next-auth-redis-deployment\n")),(0,o.kt)("h3",{id:"command-line-arguments"},"Command line arguments"),(0,o.kt)("p",null,"The following command line arguments are available:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--project"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the project"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,o.kt)("h3",{id:"generator-output"},"Generator Output"),(0,o.kt)("p",null,"When infrastructure is detected for the application, these files will be enhanced to cater for Redis:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"app-name"/build/values',"[-prod]",".yaml files will have 3 new entries added for redis")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'redisURL: ""\nnextAuthSecret: ""\nnextAuthURL: <app-name>.<internal/external domain>\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"app-name"/terraform/main.tf will have a new azurerm_redis_cache resource added. The variables.tf file will have these corresponding variables defined')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'resource "azurerm_redis_cache" "default_primary" {\n  name                = var.redis_name\n  location            = var.redis_resource_group_location\n  resource_group_name = var.redis_resource_group_name\n  capacity            = var.redis_capacity\n  family              = var.redis_family\n  sku_name            = var.redis_sku_name\n  minimum_tls_version = var.minimum_tls_version\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"app-name"/terraform/',"[prod/nonprod]",".tfvars will have additional variables added.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'redis_name =\n  "<company>-<domain>-<prod/nonprod>-<cloud region>-<business component>";\nredis_resource_group_location = "%REPLACE%";\nredis_resource_group_name =\n  "<company>-<domain>-<prod/nonprod>-<cloud region>-<business component>";\n')),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Be sure to update the redis_resource_group_location value")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"app-name"/terraform/outputs.tf will have the redis_connection_string added')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'output "redis_connection_string" {\n  sensitive = true\n  value     = "rediss://:${azurerm_redis_cache.default_primary.primary_access_key}@${azurerm_redis_cache.default_primary.hostname}:${azurerm_redis_cache.default_primary.ssl_port}"\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"app-name"/.env.local will have the REDIS_URL env variable added and set')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"REDIS_URL=localhost:6379\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"app-name"/project.json will have the helm-upgrade commands updated to use the NEXTAUTH_SECRET')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'"helm-upgrade": {\n      "executor": "nx:run-commands",\n      "options": {\n        "commands": [\n          {\n            "command": "helm upgrade [... unchanged ...] --set nextAuthSecret=\\\\\\"$NEXTAUTH_SECRET\\\\\\"",\n            "forwardAllArgs": false\n          }\n        ],\n        "cwd": "apps/baseline-next-app/build/terraform"\n      },\n      "configurations": {\n        "prod": {\n          "commands": [\n            {\n              "command": "helm upgrade [... unchanged ...] --set nextAuthSecret=\\\\\\"$NEXTAUTH_SECRET\\\\\\"",\n              "forwardAllArgs": false\n            }\n          ]\n        }\n      }\n')),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"For Azure DevOps, the ",(0,o.kt)("strong",{parentName:"p"},"NEXTAUTH_SECRET")," needs to be added to the <company",">","-<component",">","-<domain",">","-nonprod and <company",">","-<component",">","-<domain",">","-prod' variable groups"))))}g.isMDXComponent=!0}}]);