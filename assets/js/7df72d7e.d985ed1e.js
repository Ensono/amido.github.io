"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[9600],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return t?i.createElement(h,o(o({ref:n},d),{},{components:t})):i.createElement(h,o({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},79:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var i=t(7462),a=t(3366),r=(t(7294),t(3905)),o=["components"],s={id:"api_definition_ssr",title:"Api Definition",sidebar_label:"Api Definition",hide_title:!1,hide_table_of_contents:!1,description:"SSR Application - Api Definition",keywords:["rest","api","ssr","application","definition","settings","side","rendering","server","server side rendering"]},l=void 0,p={unversionedId:"workloads/azure/frontend-archived/SSR/api_definition_ssr",id:"workloads/azure/frontend-archived/SSR/api_definition_ssr",title:"Api Definition",description:"SSR Application - Api Definition",source:"@site/docs/workloads/azure/frontend-archived/SSR/api_definition_ssr.md",sourceDirName:"workloads/azure/frontend-archived/SSR",slug:"/workloads/azure/frontend-archived/SSR/api_definition_ssr",permalink:"/docs/workloads/azure/frontend-archived/SSR/api_definition_ssr",draft:!1,tags:[],version:"current",frontMatter:{id:"api_definition_ssr",title:"Api Definition",sidebar_label:"Api Definition",hide_title:!1,hide_table_of_contents:!1,description:"SSR Application - Api Definition",keywords:["rest","api","ssr","application","definition","settings","side","rendering","server","server side rendering"]}},d={},c=[{value:"Internal APIs",id:"internal-apis",level:2},{value:"External APIs",id:"external-apis",level:2}],u={toc:c},m="wrapper";function h(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)(m,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The generated scaffolding can be quickly used make calls to external APIs\nmeaning another endpoint either within your system developed by another team or\na public endpoint of 3rd party provider e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"hotels.com")," etc..."),(0,r.kt)("p",null,"The backend (and frontend) uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"axios"),"\nlibrary as the HTTP Client."),(0,r.kt)("p",null,"It is on purpose left as a thin wrapper implementation so that the user can\nextend with additional parameters on top of the mandated ones; ",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"method")," -\ne.g. a header for authentication. As such it only returns an unopinionated axios\nInstance and not a method initialized implementation. the method parameter is\nmainly used as a type guard."),(0,r.kt)("p",null,"Sample implementation of an entire API can be found in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"../src/ssr/constants/apis/menu.ts"),", this demonstrates a business\nspecific implementation of talking to a data provider from node and exposing an\ninternal route within express for the FE to use for proxy."),(0,r.kt)("p",null,"The base implementation shouldn't be need to touch and it can be found in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"../src/ssr/constants/apis/index.ts"),"."),(0,r.kt)("p",null,"To extend and add more of your own custom implementation use menu as an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'/**\n * base interface used by all implementations e.g. `menu`\n */\nexport interface Api {\n  /**\n   *\n   * this is the external url - can be in the form of https://api.hotels.com/foo or when used inside a Kubernetes cluster\n   * talking to another service within the same namespace it can take the form of `http://service_name` or\n   * `http://service_name.namespace`\n   * NB: do not omit the protocol `http` or `https` otherwise axios will default to localhost:80 as it will not recognize it as a valid TLD.\n   *\n   */\n  baseURL: string;\n  /**\n   * this is the version that\'s appended to the baseUrl e.g. a value of `v2` => `https://api.hotels.com/foo/v2` || `http://service_name.namespace/v2`\n   */\n  version: string;\n  /**\n   * this is the internal base path for the application\n   * can be left empty in localhost but should be set at deploy time if your application is not run under the root of your domain\n   * e.g. https://app.example.com/web/ui\n   * you would set this value to `/web/ui`\n   */\n  internalBasePath: string;\n  endpoints: Endpoint;\n}\n\n/**\n * key map definition for endpoints\n */\nexport interface Endpoint {\n  [key: string]: {\n    /**\n     * internal route used by express i.e. relative to localhost:${PORT}/myroute\n     */\n    routeDefinition: string,\n    /**\n     * returns the built external URL for this endpoint\n     */\n\n    getExternalURL: (...params) => string,\n    /**\n     * returns the method for the endpoint called by NodeJS httpclient(axios)\n     * NB: should be done on a 1-2-1 parity with internal/external\n     * i.e. if an external method is a GET the internal proxy route should also be a GET\n     */\n\n    method: HTTPMethod,\n    /**\n     * returns the built internalUrl called by the client side code (axios) a.k.a BFF\n     * NB: when deployed under a CDN or proxied path within an K8s cluster this will be included\n     * e.g. /web/ui/myroute => when called from client it should look like this https://app.example.com/web/ui/myroute\n     * NB2: leave out the preceding slash => getInternalURL: (id: string) => `deletemenu/${id}`,\n     * that will be added in via the builder process which invokes a "private" method within the Api base class.\n     */\n\n    getInternalURL: (...params) => string,\n  };\n}\n')),(0,r.kt)("p",null,"baseURL and internalBasePath are rigged to be populated from the config\nobject see ",(0,r.kt)("a",{parentName:"p",href:"####config"},"below")),(0,r.kt)("h2",{id:"internal-apis"},"Internal APIs"),(0,r.kt)("p",null,"These are used by the front end hit the relevant proxied endpoint within node\n(behind an express route)."),(0,r.kt)("p",null,"An example of how this is implemented can be seen in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"../src/ssr/server/index.ts")," - again this file can be zero-touch and\nuser should focus only on extending the individual APIs - see\n",(0,r.kt)("inlineCode",{parentName:"p"},"../src/ssr/server/api/menu/index.ts"),"."),(0,r.kt)("p",null,"Sample implementation from a page can be seen in\n",(0,r.kt)("inlineCode",{parentName:"p"},"../src/ssr/components/ApiPane/index.tsx"),"."),(0,r.kt)("p",null,"Key things to note:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'import api from "constants/apis/menu";')),(0,r.kt)("li",{parentName:"ul"},"multiple APIs from constants can be instantiated"),(0,r.kt)("li",{parentName:"ul"},"e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},'import menuApi from "constants/apis/menu";'),(0,r.kt)("inlineCode",{parentName:"li"},'import categoryApi from "constants/apis/menu";'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const menu = menuApi("getMenuList"); // must correspond to a key in the Endpoints for that class\'s Api implementation\n\nconst res = await axios({\n  method: menu.method,\n  url: menu.internalEndpoint(),\n});\n')),(0,r.kt)("h2",{id:"external-apis"},"External APIs"),(0,r.kt)("p",null,"The application can use a mixture of environment variables and statically\ndefined values. Typically you would define an environment variable for things\nthat are likely to change on stage by stage basis - where stage is Dev, Test,\nProd commonly separated by a namespace in the cluster."),(0,r.kt)("p",null,"At application start a config object is created and used at runtime by various\nclasses that need to access it, the app code should not reference the\n",(0,r.kt)("inlineCode",{parentName:"p"},"process.env.*")," at any point instead creating a binding of these values in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"environment-variables.ts")," which are added into the final config object."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"baseURL")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"internalBasePath")," within the ",(0,r.kt)("inlineCode",{parentName:"p"},"Api")," subclassing should always\npoint to a config value e.g. see snippet below"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * potential replacement\n * import getConfig from 'next/config'\n * const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()\n */\nimport conf from \"../../config\"; //\nbaseURL = conf.MENU_API_URL;\ninternalBasePath = conf.APP_BASE_PATH;\n")))}h.isMDXComponent=!0}}]);