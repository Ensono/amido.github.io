"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[7573],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1330:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={},s=void 0,u={unversionedId:"getting_started/rest-client/bump-version",id:"getting_started/rest-client/bump-version",title:"bump-version",description:"@ensono-stacks/rest-client:bump-version",source:"@site/docs/getting_started/rest-client/bump-version.md",sourceDirName:"getting_started/rest-client",slug:"/getting_started/rest-client/bump-version",permalink:"/docs/getting_started/rest-client/bump-version",draft:!1,tags:[],version:"current",frontMatter:{}},p={},c=[{value:"@ensono-stacks/rest-client:bump-version",id:"ensono-stacksrest-clientbump-version",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Command line arguments",id:"command-line-arguments",level:3},{value:"Generator Output",id:"generator-output",level:3}],d={toc:c},m="wrapper";function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"ensono-stacksrest-clientbump-version"},"@ensono-stacks/rest-client:bump-version"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Creates new version(s) for an existing client endpoint"),"This plugin reads any existing endpoints and creates a new directory for the specified new version with the files contained within the previous version.",(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"This generator requires a ",(0,i.kt)("em",{parentName:"p"},"client-endpoint")," project to be available."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nx g @ensono-stacks/rest-client:bump-version\n")),(0,i.kt)("h3",{id:"command-line-arguments"},"Command line arguments"),(0,i.kt)("p",null,"The following command line arguments are available:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--name"),(0,i.kt)("td",{parentName:"tr",align:null},"The endpoint name you want to bump"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--directory"),(0,i.kt)("td",{parentName:"tr",align:null},"Subdirectory inside libs/ where the generated endpoint is placed"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--endpointVersion"),(0,i.kt)("td",{parentName:"tr",align:null},"The version you want to bump your endpoint. Omitting this value will bump latest version + 1."),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"generator-output"},"Generator Output"),(0,i.kt)("p",null,"The generator will take a copy of your ",(0,i.kt)("strong",{parentName:"p"},"latest")," endpoint and bump it to the next version (unless overridden through the --endpointVersion argument)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="V1 endpoint"',title:'"V1','endpoint"':!0},"\n\u251c\u2500\u2500 client-endpoint\n\u2502   \u251c\u2500\u2500 v1\n\u2502   \u2502   \u251c\u2500\u2500 README.md\n\u2502   \u2502   \u2502   \u251c\u2500\u2500  src\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.ts\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.test.ts\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.types.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 tsconfig.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 tsconfig.lib.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 project.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 .eslintrc.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 jest.config.ts\n\u2514\u2500\u2500\u2500\u2514\u2500\u2500\u2500\u2514\u2500\u2500\u2500\u2514\u2500\u2500 tsconfig.spec.json\n")),(0,i.kt)("p",null,"Once the ",(0,i.kt)("inlineCode",{parentName:"p"},"bump-version")," generator has been used, your library structure will look similar to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Bumped endpoint structure"',title:'"Bumped',endpoint:!0,'structure"':!0},"\n\u251c\u2500\u2500 client-endpoint\n\u2502   \u251c\u2500\u2500 v1\n\u2502   \u2502   \u251c\u2500\u2500 [...]\n\u2502   \u251c\u2500\u2500 v2\n\u2502   \u2502   \u251c\u2500\u2500 README.md\n\u2502   \u2502   \u2502   \u251c\u2500\u2500  src\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.ts\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.test.ts\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.types.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 tsconfig.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 tsconfig.lib.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 project.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 .eslintrc.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 jest.config.ts\n\u2514\u2500\u2500\u2500\u2514\u2500\u2500\u2500\u2514\u2500\u2500\u2500\u2514\u2500\u2500 tsconfig.spec.json\n")),(0,i.kt)("p",null,'In order to import the bumped client-endpoint into your application a new entry for the client is added to the tsconfig.base.json "paths"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"paths": {\n      "@<workspace-name>/client-endpoint/v2": [\n        "libs/client-endpoint/v2/src/index.ts"\n      ]\n    }\n'))))}g.isMDXComponent=!0}}]);