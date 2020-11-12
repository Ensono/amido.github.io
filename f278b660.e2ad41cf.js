(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{195:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return f}));var r=t(2),a=t(6),o=(t(0),t(210)),i=t(217),l=t(218),c={id:"environment_variables_nodejs",title:"Environment Variables",sidebar_label:"Environment Variables",hide_title:!1,hide_table_of_contents:!1,description:"Environment Variables",keywords:["rest","api","application","environment variables","support"]},u={unversionedId:"workloads/azure/frontend/environment_variables_nodejs",id:"workloads/azure/frontend/environment_variables_nodejs",isDocsHomePage:!1,title:"Environment Variables",description:"Environment Variables",source:"@site/docs/workloads/azure/frontend/enviroment.md",slug:"/workloads/azure/frontend/environment_variables_nodejs",permalink:"/stacks/docs/workloads/azure/frontend/environment_variables_nodejs",version:"current",sidebar_label:"Environment Variables"},s=[{value:"Environment Variables",id:"environment-variables",children:[]}],b={rightToc:s};function f(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"environment-variables"},"Environment Variables"),Object(o.b)("p",null,"Before you can start developing you will need to replace your environment variables with the appropriated values.\nThis values will be automatically picked up and used by the underlying server and web client."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'##\n NODE_ENV=development\n PORT={PORT}\n APP_BASE_URL=http://localhost\n APP_BASE_PATH=""\n\n')),Object(o.b)(i.a,{defaultValue:"linux",values:[{label:"Linux/MacOS",value:"linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"windows",mdxType:"TabItem"},Object(o.b)("div",null,"set NODE_ENV=development ",Object(o.b)("br",null),"set PORT= #### ",Object(o.b)("br",null),"set APP_BASE_URL=http://localhost ",Object(o.b)("br",null),'set APP_BASE_PATH="" ',Object(o.b)("br",null),"set NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN= #### ",Object(o.b)("br",null),"set NEXT_PUBLIC_CONTENTFUL_PREVIEW_SECRET= #### ",Object(o.b)("br",null),"set NEXT_PUBLIC_CONTENTFUL_SPACE_ID= #### ",Object(o.b)("br",null),"set NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN= ### ",Object(o.b)("br",null))),Object(o.b)(l.a,{value:"linux",mdxType:"TabItem"},Object(o.b)("div",null,"export NODE_ENV=development ",Object(o.b)("br",null),"export PORT= #### ",Object(o.b)("br",null),"export APP_BASE_URL=http://localhost ",Object(o.b)("br",null),'export APP_BASE_PATH= "" ',Object(o.b)("br",null),"export NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN= #### ",Object(o.b)("br",null),"export NEXT_PUBLIC_CONTENTFUL_PREVIEW_SECRET= #### ",Object(o.b)("br",null),"export NEXT_PUBLIC_CONTENTFUL_SPACE_ID= #### ",Object(o.b)("br",null),"export NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN= ### ",Object(o.b)("br",null)))))}f.isMDXComponent=!0},210:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(t),p=r,d=b["".concat(i,".").concat(p)]||b[p]||f[p]||o;return t?a.a.createElement(d,l(l({ref:n},u),{},{components:t})):a.a.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},213:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},215:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},216:function(e,n,t){"use strict";var r=t(0),a=t(215);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},217:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(216),i=t(213),l=t(51),c=t.n(l),u=37,s=39;n.a=function(e){var n=e.block,t=e.children,l=e.defaultValue,b=e.values,f=e.groupId,p=Object(o.a)(),d=p.tabGroupChoices,v=p.setTabGroupChoices,O=Object(r.useState)(l),m=O[0],E=O[1],_=Object(r.useState)(!1),y=_[0],j=_[1];if(null!=f){var T=d[f];null!=T&&T!==m&&b.some((function(e){return e.value===T}))&&E(T)}var P=function(e){E(e),null!=f&&v(f,e)},w=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||j(!0)},N=function(){j(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",C),window.addEventListener("mousedown",N)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n})},b.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===n,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":m===n}),style:y?{}:{outline:"none"},key:n,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case s:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case u:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(w,e.target,e),C(e)},onFocus:function(){return P(n)},onClick:function(){P(n),j(!1)},onPointerDown:function(){return j(!1)}},t)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(e){return e.props.value===m}))[0]))}},218:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("div",null,e.children)}}}]);