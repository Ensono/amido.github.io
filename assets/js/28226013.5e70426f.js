"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[2415],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return g}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=u(n),m=a,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(g,i(i({ref:e},s),{},{components:n})):r.createElement(g,i({ref:e},s))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[c]="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1922:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},p=void 0,u={unversionedId:"nx/rest-client/client-endpoint",id:"nx/rest-client/client-endpoint",isDocsHomePage:!1,title:"client-endpoint",description:"@ensono-stacks/rest-client:client-endpoint",source:"@site/docs/nx/rest-client/client-endpoint.md",sourceDirName:"nx/rest-client",slug:"/nx/rest-client/client-endpoint",permalink:"/docs/nx/rest-client/client-endpoint",tags:[],version:"current",frontMatter:{}},s=[{value:"@ensono-stacks/rest-client:client-endpoint",id:"ensono-stacksrest-clientclient-endpoint",children:[],level:3},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Command line arguments",id:"command-line-arguments",children:[],level:3},{value:"Generator Output",id:"generator-output",children:[],level:3}],level:2}],c={toc:s},d="wrapper";function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)(d,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"ensono-stacksrest-clientclient-endpoint"},"@ensono-stacks/rest-client:client-endpoint"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Add Axios HTTP methods to your existing application"),(0,l.kt)("p",null,"This plugin gives you choice of selecting from the HTTP methods using Axios as the provider for setting up the initial building blocks of your new endpoint."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"This generator requires a ",(0,l.kt)("em",{parentName:"p"},"http-client")," project to be available."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nx g @ensono-stacks/rest-client:client-endpoint\n")),(0,l.kt)("h3",{id:"command-line-arguments"},"Command line arguments"),(0,l.kt)("p",null,"The following command line arguments are available:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--name"),(0,l.kt)("td",{parentName:"tr",align:null},"Library name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--httpClient"),(0,l.kt)("td",{parentName:"tr",align:null},"The import path of the previously generated http-client used in the application"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--envVar"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the API url environment variable"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"API_URL"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--endpointVersion"),(0,l.kt)("td",{parentName:"tr",align:null},"The version of the endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--methods"),(0,l.kt)("td",{parentName:"tr",align:null},"List of HTTP methods to be generated. Choose from get, post, patch, put, delete, head, options"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"get, post, patch, put, delete, head, options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--directory"),(0,l.kt)("td",{parentName:"tr",align:null},"Subdirectory inside libs/ where the generated library placed"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--tags"),(0,l.kt)("td",{parentName:"tr",align:null},"Add tags to the project (used for linting)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"generator-output"},"Generator Output"),(0,l.kt)("p",null,"The client-endpoint will create a new library within your libs folder, using your answer to the 'What is the import path of your previously generated http-client library?' to import the previously created http-client into your client endpoint: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example of files being generated"',title:'"Example',of:!0,files:!0,being:!0,'generated"':!0},"\n\u2514\u2500\u2500 libs\n\u2502   \u251c\u2500\u2500 client-endpoint\n\u2502   \u2502   \u251c\u2500\u2500 V1\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 README.md\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 src\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.ts\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.test.ts\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.types.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 tsconfig.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 tsconfig.lib.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 project.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 .eslintrc.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 jest.config.ts\n\u2514\u2500\u2500\u2500\u2514\u2500\u2500\u2500\u2514\u2500\u2500\u2500\u2514\u2500\u2500 tsconfig.spec.json\n\u2514\u2500\u2500 .env.local\n")),(0,l.kt)("p",null,"Be sure to add the API_URL as an environment variable to the created .env.local file for local development "),(0,l.kt)("p",null,'In order to import the client-endpoint into your application a new entry for the client is added to the tsconfig.base.json "paths"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"paths": {\n      "@<workspace-name>/client-endpoint/v1": [\n        "libs/client-endpoint/v1/src/index.ts"\n      ]\n    }\n'))))}m.isMDXComponent=!0}}]);