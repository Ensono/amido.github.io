"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[2060,9527,3061,9021,7573],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return g}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=u(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(g,i(i({ref:e},p),{},{components:n})):a.createElement(g,i({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(t,e,n){n.d(e,{Z:function(){return i}});var a=n(7294),r=n(6010),l={tabItem:"tabItem_Ymn6"};function i(t){var e=t.children,n=t.hidden,i=t.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},e)}},4866:function(t,e,n){n.d(e,{Z:function(){return y}});var a=n(7462),r=n(7294),l=n(6010),i=n(2466),o=n(6550),s=n(1980),u=n(7392),p=n(12);function c(t){return function(t){var e,n;return null!=(e=null==(n=r.Children.map(t,(function(t){if(!t||(0,r.isValidElement)(t)&&(e=t.props)&&"object"==typeof e&&"value"in e)return t;var e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?e:[]}(t).map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes,default:e.default}}))}function d(t){var e=t.values,n=t.children;return(0,r.useMemo)((function(){var t=null!=e?e:c(n);return function(t){var e=(0,u.l)(t,(function(t,e){return t.value===e.value}));if(e.length>0)throw new Error('Docusaurus error: Duplicate values "'+e.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(t),t}),[e,n])}function m(t){var e=t.value;return t.tabValues.some((function(t){return t.value===e}))}function g(t){var e=t.queryString,n=void 0!==e&&e,a=t.groupId,l=(0,o.k6)(),i=function(t){var e=t.queryString,n=void 0!==e&&e,a=t.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((function(t){if(i){var e=new URLSearchParams(l.location.search);e.set(i,t),l.replace(Object.assign({},l.location,{search:e.toString()}))}}),[i,l])]}function k(t){var e,n,a,l,i=t.defaultValue,o=t.queryString,s=void 0!==o&&o,u=t.groupId,c=d(t),k=(0,r.useState)((function(){return function(t){var e,n=t.defaultValue,a=t.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(e=a.find((function(t){return t.default})))?e:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:c})})),f=k[0],h=k[1],N=g({queryString:s,groupId:u}),b=N[0],v=N[1],y=(e=function(t){return t?"docusaurus.tab."+t:null}({groupId:u}.groupId),n=(0,p.Nk)(e),a=n[0],l=n[1],[a,(0,r.useCallback)((function(t){e&&l.set(t)}),[e,l])]),w=y[0],T=y[1],x=function(){var t=null!=b?b:w;return m({value:t,tabValues:c})?t:null}();return(0,r.useLayoutEffect)((function(){x&&h(x)}),[x]),{selectedValue:f,selectValue:(0,r.useCallback)((function(t){if(!m({value:t,tabValues:c}))throw new Error("Can't select invalid tab value="+t);h(t),v(t),T(t)}),[v,T,c]),tabValues:c}}var f=n(2389),h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(t){var e=t.className,n=t.block,o=t.selectedValue,s=t.selectValue,u=t.tabValues,p=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(t){var e=t.currentTarget,n=p.indexOf(e),a=u[n].value;a!==o&&(c(e),s(a))},m=function(t){var e,n=null;switch(t.key){case"Enter":d(t);break;case"ArrowRight":var a,r=p.indexOf(t.currentTarget)+1;n=null!=(a=p[r])?a:p[0];break;case"ArrowLeft":var l,i=p.indexOf(t.currentTarget)-1;n=null!=(l=p[i])?l:p[p.length-1]}null==(e=n)||e.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},e)},u.map((function(t){var e=t.value,n=t.label,i=t.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===e?0:-1,"aria-selected":o===e,key:e,ref:function(t){return p.push(t)},onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",h.tabItem,null==i?void 0:i.className,{"tabs__item--active":o===e})}),null!=n?n:e)})))}function b(t){var e=t.lazy,n=t.children,a=t.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){var i=l.find((function(t){return t.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==a})})))}function v(t){var e=k(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(N,(0,a.Z)({},t,e)),r.createElement(b,(0,a.Z)({},t,e)))}function y(t){var e=(0,f.Z)();return r.createElement(v,(0,a.Z)({key:String(e)},t))}},1330:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={},s=void 0,u={unversionedId:"getting_started/rest-client/bump-version",id:"getting_started/rest-client/bump-version",title:"bump-version",description:"@ensono-stacks/rest-client:bump-version",source:"@site/docs/getting_started/rest-client/bump-version.md",sourceDirName:"getting_started/rest-client",slug:"/getting_started/rest-client/bump-version",permalink:"/docs/getting_started/rest-client/bump-version",draft:!1,tags:[],version:"current",frontMatter:{}},p={},c=[{value:"@ensono-stacks/rest-client:bump-version",id:"ensono-stacksrest-clientbump-version",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Command line arguments",id:"command-line-arguments",level:3},{value:"Generator Output",id:"generator-output",level:3}],d={toc:c},m="wrapper";function g(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)(m,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"ensono-stacksrest-clientbump-version"},"@ensono-stacks/rest-client:bump-version"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Creates new version(s) for an existing client endpoint"),"This plugin reads any existing endpoints and creates a new directory for the specified new version with the files contained within the previous version.",(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"This generator requires a ",(0,l.kt)("em",{parentName:"p"},"client-endpoint")," project to be available."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nx g @ensono-stacks/rest-client:bump-version\n")),(0,l.kt)("h3",{id:"command-line-arguments"},"Command line arguments"),(0,l.kt)("p",null,"The following command line arguments are available:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--name"),(0,l.kt)("td",{parentName:"tr",align:null},"The endpoint name you want to bump"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--directory"),(0,l.kt)("td",{parentName:"tr",align:null},"Subdirectory inside libs/ where the generated endpoint is placed"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--endpointVersion"),(0,l.kt)("td",{parentName:"tr",align:null},"The version you want to bump your endpoint. Omitting this value will bump latest version + 1."),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"generator-output"},"Generator Output"),(0,l.kt)("p",null,"The generator will take a copy of your ",(0,l.kt)("strong",{parentName:"p"},"latest")," endpoint and bump it to the next version (unless overridden through the --endpointVersion argument)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="V1 endpoint"',title:'"V1','endpoint"':!0},"\n\u251c\u2500\u2500 client-endpoint\n\u2502   \u251c\u2500\u2500 v1\n\u2502   \u2502   \u251c\u2500\u2500 README.md\n\u2502   \u2502   \u2502   \u251c\u2500\u2500  src\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.ts\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.test.ts\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.types.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 tsconfig.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 tsconfig.lib.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 project.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 .eslintrc.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 jest.config.ts\n\u2514\u2500\u2500\u2500\u2514\u2500\u2500\u2500\u2514\u2500\u2500\u2500\u2514\u2500\u2500 tsconfig.spec.json\n")),(0,l.kt)("p",null,"Once the ",(0,l.kt)("inlineCode",{parentName:"p"},"bump-version")," generator has been used, your library structure will look similar to the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Bumped endpoint structure"',title:'"Bumped',endpoint:!0,'structure"':!0},"\n\u251c\u2500\u2500 client-endpoint\n\u2502   \u251c\u2500\u2500 v1\n\u2502   \u2502   \u251c\u2500\u2500 [...]\n\u2502   \u251c\u2500\u2500 v2\n\u2502   \u2502   \u251c\u2500\u2500 README.md\n\u2502   \u2502   \u2502   \u251c\u2500\u2500  src\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.ts\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.test.ts\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.types.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 tsconfig.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 tsconfig.lib.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 project.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 .eslintrc.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 jest.config.ts\n\u2514\u2500\u2500\u2500\u2514\u2500\u2500\u2500\u2514\u2500\u2500\u2500\u2514\u2500\u2500 tsconfig.spec.json\n")),(0,l.kt)("p",null,'In order to import the bumped client-endpoint into your application a new entry for the client is added to the tsconfig.base.json "paths"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"paths": {\n      "@<workspace-name>/client-endpoint/v2": [\n        "libs/client-endpoint/v2/src/index.ts"\n      ]\n    }\n'))))}g.isMDXComponent=!0},3990:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={},s=void 0,u={unversionedId:"getting_started/rest-client/client-endpoint",id:"getting_started/rest-client/client-endpoint",title:"client-endpoint",description:"@ensono-stacks/rest-client:client-endpoint",source:"@site/docs/getting_started/rest-client/client-endpoint.md",sourceDirName:"getting_started/rest-client",slug:"/getting_started/rest-client/client-endpoint",permalink:"/docs/getting_started/rest-client/client-endpoint",draft:!1,tags:[],version:"current",frontMatter:{}},p={},c=[{value:"@ensono-stacks/rest-client:client-endpoint",id:"ensono-stacksrest-clientclient-endpoint",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Command line arguments",id:"command-line-arguments",level:3},{value:"Generator Output",id:"generator-output",level:3}],d={toc:c},m="wrapper";function g(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)(m,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"ensono-stacksrest-clientclient-endpoint"},"@ensono-stacks/rest-client:client-endpoint"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Add Axios HTTP methods to your existing application"),(0,l.kt)("p",null,"This plugin gives you choice of selecting from the HTTP methods using Axios as the provider for setting up the initial building blocks of your new endpoint."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"This generator requires a ",(0,l.kt)("em",{parentName:"p"},"http-client")," project to be available."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nx g @ensono-stacks/rest-client:client-endpoint\n")),(0,l.kt)("h3",{id:"command-line-arguments"},"Command line arguments"),(0,l.kt)("p",null,"The following command line arguments are available:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--name"),(0,l.kt)("td",{parentName:"tr",align:null},"Library name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--httpClient"),(0,l.kt)("td",{parentName:"tr",align:null},"The import path of the previously generated http-client used in the application"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--envVar"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the API url environment variable"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"API_URL"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--endpointVersion"),(0,l.kt)("td",{parentName:"tr",align:null},"The version of the endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--methods"),(0,l.kt)("td",{parentName:"tr",align:null},"List of HTTP methods to be generated. Choose from get, post, patch, put, delete, head, options"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"get, post, patch, put, delete, head, options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--directory"),(0,l.kt)("td",{parentName:"tr",align:null},"Subdirectory inside libs/ where the generated library placed"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--tags"),(0,l.kt)("td",{parentName:"tr",align:null},"Add tags to the project (used for linting)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"generator-output"},"Generator Output"),(0,l.kt)("p",null,"The client-endpoint will create a new library within your libs folder, using your answer to the 'What is the import path of your previously generated http-client library?' to import the previously created http-client into your client endpoint: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Example of files being generated"',title:'"Example',of:!0,files:!0,being:!0,'generated"':!0},"\n\u2514\u2500\u2500 libs\n\u2502   \u251c\u2500\u2500 client-endpoint\n\u2502   \u2502   \u251c\u2500\u2500 V1\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 README.md\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 src\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.ts\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.test.ts\n\u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.types.ts\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 tsconfig.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 tsconfig.lib.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 project.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 .eslintrc.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 jest.config.ts\n\u2514\u2500\u2500\u2500\u2514\u2500\u2500\u2500\u2514\u2500\u2500\u2500\u2514\u2500\u2500 tsconfig.spec.json\n\u2514\u2500\u2500 .env.local\n")),(0,l.kt)("p",null,"Be sure to add the API_URL as an environment variable to the created .env.local file for local development "),(0,l.kt)("p",null,'In order to import the client-endpoint into your application a new entry for the client is added to the tsconfig.base.json "paths"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"paths": {\n      "@<workspace-name>/client-endpoint/v1": [\n        "libs/client-endpoint/v1/src/index.ts"\n      ]\n    }\n'))))}g.isMDXComponent=!0},4522:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={},s=void 0,u={unversionedId:"getting_started/rest-client/http-client",id:"getting_started/rest-client/http-client",title:"http-client",description:"@ensono-stacks/rest-client:http-client",source:"@site/docs/getting_started/rest-client/http-client.md",sourceDirName:"getting_started/rest-client",slug:"/getting_started/rest-client/http-client",permalink:"/docs/getting_started/rest-client/http-client",draft:!1,tags:[],version:"current",frontMatter:{}},p={},c=[{value:"@ensono-stacks/rest-client:http-client",id:"ensono-stacksrest-clienthttp-client",level:3},{value:"Usage",id:"usage",level:2},{value:"Command line arguments",id:"command-line-arguments",level:3},{value:"Generator Output",id:"generator-output",level:3}],d={toc:c},m="wrapper";function g(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)(m,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"ensono-stacksrest-clienthttp-client"},"@ensono-stacks/rest-client:http-client"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Installs and creates a new instance of Axios, ready to generate a client with custom configuration"),(0,l.kt)("p",null,"This plugin installs Axios and configures a new instance of the provider ready to be customised and consumed via your project."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nx g @ensono-stacks/rest-client:http-client\n")),(0,l.kt)("h3",{id:"command-line-arguments"},"Command line arguments"),(0,l.kt)("p",null,"The following command line arguments are available:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--name"),(0,l.kt)("td",{parentName:"tr",align:null},"Library name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--directory"),(0,l.kt)("td",{parentName:"tr",align:null},"Subdirectory inside libs/ where the generated library is placed"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--importPath"),(0,l.kt)("td",{parentName:"tr",align:null},"What import path would you like to use for the library"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--tags"),(0,l.kt)("td",{parentName:"tr",align:null},"Add tags to the library (used for linting)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--skipFormat"),(0,l.kt)("td",{parentName:"tr",align:null},"Skip formatting files"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"generator-output"},"Generator Output"),(0,l.kt)("p",null,"The http-client will create a new library within your libs folder for the axios http client:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Generated files"',title:'"Generated','files"':!0},"\n\u251c\u2500\u2500 http-client\n\u2502   \u251c\u2500\u2500  src\n\u2502   \u2502   \u251c\u2500\u2500 index.ts\n\u2502   \u2502   \u251c\u2500\u2500 index.test.ts\n\u2502   \u251c\u2500\u2500  README.md\n\u2502   \u251c\u2500\u2500 tsconfig.json\n\u2502   \u251c\u2500\u2500 tsconfig.lib.json\n\u2502   \u251c\u2500\u2500 project.json\n\u2502   \u251c\u2500\u2500 .eslintrc.json\n\u2502   \u251c\u2500\u2500 jest.config.ts\n\u2514\u2500\u2500 \u2514\u2500\u2500 tsconfig.spec.json\n")),(0,l.kt)("p",null,"Additionally, the package.json will be updated with the axios dependency."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Modified files"',title:'"Modified','files"':!0},"\u251c\u2500\u2500 root\n\u2502   \u251c\u2500\u2500 tsconfig.base.json\n\u2514\u2500\u2500 \u2514\u2500\u2500package.json\n")),(0,l.kt)("p",null,'In order to import the http-client into your application a new entry for the client is added to the tsconfig.base.json "paths"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"paths": {\n      "@<workspace-name>/http-client": [\n        "libs/http-client/src/index.ts"\n      ]\n    }\n'))))}g.isMDXComponent=!0},6596:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={},s=void 0,u={unversionedId:"getting_started/rest-client/openapi-client",id:"getting_started/rest-client/openapi-client",title:"openapi-client",description:"@ensono-stacks/rest-client:openapi-client",source:"@site/docs/getting_started/rest-client/openapi-client.md",sourceDirName:"getting_started/rest-client",slug:"/getting_started/rest-client/openapi-client",permalink:"/docs/getting_started/rest-client/openapi-client",draft:!1,tags:[],version:"current",frontMatter:{}},p={},c=[{value:"@ensono-stacks/rest-client:openapi-client",id:"ensono-stacksrest-clientopenapi-client",level:3},{value:"Usage",id:"usage",level:2},{value:"Command line arguments",id:"command-line-arguments",level:3},{value:"Generator Output",id:"generator-output",level:3}],d={toc:c},m="wrapper";function g(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)(m,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"ensono-stacksrest-clientopenapi-client"},"@ensono-stacks/rest-client:openapi-client"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Generates boilerplate configuration of types, client, stubs and validation using from your openapi schema using Orval."),(0,l.kt)("p",null,"Utilising ",(0,l.kt)("a",{parentName:"p",href:"https://orval.dev/"},"Orval"),", this plugin generates various files based off your openapi schema to enable quick acceleration from definition to implementation."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nx g @ensono-stacks/rest-client:openapi-client\n")),(0,l.kt)("h3",{id:"command-line-arguments"},"Command line arguments"),(0,l.kt)("p",null,"The following command line arguments are available:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--name"),(0,l.kt)("td",{parentName:"tr",align:null},"Library name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--schema"),(0,l.kt)("td",{parentName:"tr",align:null},"The relative path to your openapi schema"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--zod"),(0,l.kt)("td",{parentName:"tr",align:null},"Validation for your openapi schema"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--tags"),(0,l.kt)("td",{parentName:"tr",align:null},"Add tags to the library (used for linting)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--directory"),(0,l.kt)("td",{parentName:"tr",align:null},"Subdirectory inside libs/ where the generated library is placed"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"generator-output"},"Generator Output"),(0,l.kt)("p",null,"The openapi-client will create a new library within your libs folder for the various files generated:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Generated files"',title:'"Generated','files"':!0},"\n\u251c\u2500\u2500 openapi-client\n\u2502   \u251c\u2500\u2500  src\n\u2502   \u2502   \u251c\u2500\u2500  model\n|   \u2502   \u2502   \u251c\u2500\u2500 ...\n\u2502   \u2502   \u251c\u2500\u2500 <libraryName>.msw.ts\n\u2502   \u2502   \u251c\u2500\u2500 <libraryName>.ts\n\u2502   \u2502   \u251c\u2500\u2500 <libraryName>.zod.ts\n\u2502   \u2502   \u251c\u2500\u2500 index.ts\n\u2502   \u251c\u2500\u2500 .eslintrc.json\n\u2502   \u251c\u2500\u2500 jest.config.ts\n\u2502   \u251c\u2500\u2500 orval.config.js\n\u2502   \u251c\u2500\u2500 orval.zod.config.js\n\u2502   \u251c\u2500\u2500 openapi-schema.(json/yaml)\n\u2502   \u251c\u2500\u2500 project.json\n\u2502   \u251c\u2500\u2500 README.md\n\u2502   \u251c\u2500\u2500 tsconfig.json\n\u2502   \u251c\u2500\u2500 tsconfig.lib.json\n\u2514\u2500\u2500 \u2514\u2500\u2500 tsconfig.spec.json\n")),(0,l.kt)("p",null,"Key things to highlight about the generated files are as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The generator first creates the orval config files ",(0,l.kt)("inlineCode",{parentName:"li"},"orval.config.js")," ",(0,l.kt)("inlineCode",{parentName:"li"},"orval.zod.config.js")," which are used to set the options for orval to be executed against. These options determine what files to generate and how."),(0,l.kt)("li",{parentName:"ul"},"Once the config files are generated, we execute the Orval generator. The 3 ",(0,l.kt)("inlineCode",{parentName:"li"},"<libraryName>...")," files are created along wih the model folder with its contents. This generation consists of the end result following the openapi definition being converted into code implementation; types, client, stubs and validation.")),(0,l.kt)("p",null,"The relevant dependencies ",(0,l.kt)("inlineCode",{parentName:"p"},"(orval, msw, @faker-js/faker, zod)")," are also installed in order for the generation to take place and to resolve the relevant syntax/prettier errors.")))}g.isMDXComponent=!0},5443:function(t,e,n){n.r(e),n.d(e,{assets:function(){return f},contentTitle:function(){return g},default:function(){return v},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return h}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=n(4522),o=n(3990),s=n(1330),u=n(6596),p=n(4866),c=n(5162),d=["components"],m={id:"ensono-stacks-rest-client",title:"@ensono-stacks/rest-client",sidebar_label:"@ensono-stacks/rest-client",description:"Using the rest-client with stacks!",keywords:["NX","monorepo","stacks","ensono","rest-client","generator","executor"]},g=void 0,k={unversionedId:"getting_started/rest-client/ensono-stacks-rest-client",id:"getting_started/rest-client/ensono-stacks-rest-client",title:"@ensono-stacks/rest-client",description:"Using the rest-client with stacks!",source:"@site/docs/getting_started/rest-client/plugin-information.md",sourceDirName:"getting_started/rest-client",slug:"/getting_started/rest-client/ensono-stacks-rest-client",permalink:"/docs/getting_started/rest-client/ensono-stacks-rest-client",draft:!1,tags:[],version:"current",frontMatter:{id:"ensono-stacks-rest-client",title:"@ensono-stacks/rest-client",sidebar_label:"@ensono-stacks/rest-client",description:"Using the rest-client with stacks!",keywords:["NX","monorepo","stacks","ensono","rest-client","generator","executor"]},sidebar:"docs",previous:{title:"@ensono-stacks/azure-node",permalink:"/docs/getting_started/azure-node/ensono-stacks-azure-node"},next:{title:"@ensono-stacks/playwright",permalink:"/docs/getting_started/playwright/ensono-stacks-playwright"}},f={},h=[{value:"Setting up @ensono-stacks/rest-client",id:"setting-up-ensono-stacksrest-client",level:2},{value:"Executors and Generators",id:"executors-and-generators",level:2},{value:"Generators",id:"generators",level:3}],N={toc:h},b="wrapper";function v(t){var e=t.components,n=(0,r.Z)(t,d);return(0,l.kt)(b,(0,a.Z)({},N,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This plugin provides the ability to quickly get up and running with http clients and endpoints. One can generate the basic HTTP methods required to start building out a project."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"What benefits does it give you?")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Helps track versioning and easily bump versions of endpoints using one of the plugins."),(0,l.kt)("li",{parentName:"ul"},"Ensure solid foundational syntax accuracy"),(0,l.kt)("li",{parentName:"ul"},"Promote best practice in generated code")),(0,l.kt)("h2",{id:"setting-up-ensono-stacksrest-client"},"Setting up @ensono-stacks/rest-client"),(0,l.kt)("p",null,"Install the @ensono-stacks/rest-client with the following command:"),(0,l.kt)(p.Z,{mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @ensono-stacks/rest-client@latest\n"))),(0,l.kt)(c.Z,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @ensono-stacks/rest-client\n")))),(0,l.kt)("h2",{id:"executors-and-generators"},"Executors and Generators"),(0,l.kt)("p",null,"To see a list of the plugin capabilities run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nx list @ensono-stacks/rest-client\n")),(0,l.kt)("p",null,"View additional information about a plugin capability through the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nx g @ensono-stacks/rest-client:[generator-executor-name] --help\n")),(0,l.kt)("h3",{id:"generators"},"Generators"),(0,l.kt)(i.default,{mdxType:"HttpClient"}),(0,l.kt)(o.default,{mdxType:"ClientEndpoint"}),(0,l.kt)(s.default,{mdxType:"BumpVersion"}),(0,l.kt)(u.default,{mdxType:"OpenapiClient"}))}v.isMDXComponent=!0}}]);