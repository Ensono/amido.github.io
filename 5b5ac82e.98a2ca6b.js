(window.webpackJsonp=window.webpackJsonp||[]).push([[52,86],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(210)),i=(n(212),n(217)),c=n(218),l=n(50),s={id:"getting_started_ssr",title:"Getting Started",sidebar_label:"Getting Started",hide_title:!1,hide_table_of_contents:!1,description:"Getting started with SSR",keywords:["rest","api","ssr","cms","integration","framework","configuration","side","rendering","server","server side rendering"]},u={unversionedId:"workloads/azure/frontend/SSR/getting_started_ssr",id:"workloads/azure/frontend/SSR/getting_started_ssr",isDocsHomePage:!1,title:"Getting Started",description:"Getting started with SSR",source:"@site/docs/workloads/azure/frontend/SSR/getting_started_ssr.md",slug:"/workloads/azure/frontend/SSR/getting_started_ssr",permalink:"/stacks/docs/workloads/azure/frontend/SSR/getting_started_ssr",version:"current",sidebar_label:"Getting Started",sidebar:"docs",previous:{title:"CSR Application - Azure DevOps Pipeline",permalink:"/stacks/docs/workloads/azure/frontend/CSR/pipeline_csr"},next:{title:"Contentful Integration",permalink:"/stacks/docs/workloads/azure/frontend/SSR/contentful_integration"}},b=[{value:"Bootstrap your framework",id:"bootstrap-your-framework",children:[{value:"Get developing in just a few questions",id:"get-developing-in-just-a-few-questions",children:[]}]},{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Configure Optional Features",id:"configure-optional-features",children:[]},{value:"Get developing",id:"get-developing",children:[{value:"Development",id:"development",children:[]},{value:"Production",id:"production",children:[]}]},{value:"Customising",id:"customising",children:[]},{value:"Feedback",id:"feedback",children:[]}],d={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Web applications require a lot of boilerplate. It's also hard to know how to get started without examples. We offer both server side rendered (SSR) and client side rendered (CSR) solutions that can be bootstrapped and tailored to your current project with just one command."),Object(o.b)("p",null,"Oh, and they come complete with infrastructure as code so you can deploy on your cloud of choice."),Object(o.b)("p",null,"Brilliant."),Object(o.b)("h2",{id:"bootstrap-your-framework"},"Bootstrap your framework"),Object(o.b)("p",null,"The best way to get started, is bootstrap the framework using the scaffolding-cli from Amido Stacks. By using it in interactive mode, you can simply answered 5 questions to get a bespoke framework, ready to go with an example test."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Run to start configuring your solution"',title:'"Run',to:!0,start:!0,configuring:!0,your:!0,'solution"':!0}),"npx @amidostacks/scaffolding-cli run -i\n")),Object(o.b)("h3",{id:"get-developing-in-just-a-few-questions"},"Get developing in just a few questions"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://asciinema.org/a/znvqsWhks970mYkUjGkwFoTKS"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://asciinema.org/a/znvqsWhks970mYkUjGkwFoTKS.svg",alt:"asciicast"})))),Object(o.b)("h2",{id:"environment-variables"},"Environment Variables"),Object(o.b)("p",null,"Before you can start developing you will need to replace your environment variables with the appropriated values.\nThis values will be automatically picked up and used by the underlying server and web client."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),' NODE_ENV=development\n PORT=3000\n APP_BASE_URL=http://localhost\n APP_BASE_PATH=""\n')),Object(o.b)(i.a,{defaultValue:"linux",values:[{label:"Linux/MacOS",value:"linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"windows",mdxType:"TabItem"},Object(o.b)("div",null,Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"set NODE_ENV=development\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"set PORT=3000\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"set APP_BASE_URL=http://localhost\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'set APP_BASE_PATH=""\n')))),Object(o.b)(c.a,{value:"linux",mdxType:"TabItem"},Object(o.b)("div",null,Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"export NODE_ENV=development\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"export PORT=3000\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"export APP_BASE_URL=http://localhost\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'export APP_BASE_PATH=""\n'))))),Object(o.b)("h2",{id:"configure-optional-features"},"Configure Optional Features"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/stacks/docs/workloads/azure/frontend/SSR/identity"}),"Auth0")," ",Object(o.b)("br",null),"\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/stacks/docs/workloads/azure/frontend/SSR/contentful_integration"}),"Contentful")," ",Object(o.b)("br",null),"\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/stacks/docs/workloads/azure/frontend/SSR/api_definition"}),"API")," ",Object(o.b)("br",null)),Object(o.b)("h2",{id:"get-developing"},"Get developing"),Object(o.b)("p",null,"At the end of bootstrapping your example framework, you will have an output that will contain all the:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"dependencies"),Object(o.b)("li",{parentName:"ul"},"scripts"),Object(o.b)("li",{parentName:"ul"},"example tests"),Object(o.b)("li",{parentName:"ul"},"pipelines"),Object(o.b)("li",{parentName:"ul"},"and information to start testing")),Object(o.b)("h3",{id:"development"},"Development"),Object(o.b)("p",null,"Move to the ",Object(o.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/src")," folder and run the next commands"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm run dev\n")),Object(o.b)("p",null,"This offers live reload of both server side - ",Object(o.b)("em",{parentName:"p"},"when using ssr")," - and client side code."),Object(o.b)("h3",{id:"production"},"Production"),Object(o.b)("p",null,"Move to the ",Object(o.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/src")," folder and run the next commands"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm run build\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm run start\n")),Object(o.b)("p",null,"This will start the app in production mode, so you can see how it would behave deployed!"),Object(o.b)("h2",{id:"customising"},"Customising"),Object(o.b)("p",null,"Since the frameworks provide real examples on deployed applications, we recommend using these as examples and then replacing them with your own applications under test."),Object(o.b)("h2",{id:"feedback"},"Feedback"),Object(o.b)("p",null,"As always, we only improve from the incredible feedback and contributions from people like you. To help us improve, see our contribution guide for more information."),Object(o.b)(l.default,{prev:!0,mdxType:"HideNavigation"}))}p.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,f=b["".concat(i,".").concat(p)]||b[p]||d[p]||o;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},211:function(e,t,n){"use strict";var r=n(0),a=n(19);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},212:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(211),a=n(214);function o(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,l=o.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},213:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},214:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},215:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},216:function(e,t,n){"use strict";var r=n(0),a=n(215);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},217:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(216),i=n(213),c=n(51),l=n.n(c),s=37,u=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,b=e.values,d=e.groupId,p=Object(o.a)(),f=p.tabGroupChoices,m=p.setTabGroupChoices,O=Object(r.useState)(c),v=O[0],g=O[1],j=Object(r.useState)(!1),h=j[0],y=j[1];if(null!=d){var w=f[d];null!=w&&w!==v&&b.some((function(e){return e.value===w}))&&g(w)}var N=function(e){g(e),null!=d&&m(d,e)},k=[],S=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},_=function(){y(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",S),window.addEventListener("mousedown",_)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===t}),style:h?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),S(e)},onFocus:function(){return N(t)},onClick:function(){N(t),y(!1)},onPointerDown:function(){return y(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},218:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},50:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r);t.default=function(e){var t=e.next,n=e.prev;return a.a.useEffect((function(){if(t){var e=document.querySelector("div.pagination-nav__item.pagination-nav__item--next>a");e&&e.style&&(e.style.display="none")}if(n){var r=document.querySelector("div.pagination-nav__item>a");r&&r.style&&(r.style.display="none")}})),a.a.createElement("div",null)}}}]);