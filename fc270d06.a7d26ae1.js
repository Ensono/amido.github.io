(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(140)),i={id:"getting_started_dev",title:"Dev [Node.js] - Using the repo to build the Node.js application",sidebar_label:"Dev [Node.js]- Using the repo to build the Node.js application"},c={unversionedId:"getting_started_dev",id:"getting_started_dev",isDocsHomePage:!1,title:"Dev [Node.js] - Using the repo to build the Node.js application",description:"Getting started",source:"@site/docs/getting_started_dev.md",slug:"/getting_started_dev",permalink:"/stacks/docs/getting_started_dev",editUrl:"https://github.com/amido/stacks/docs/getting_started_dev.md",version:"current",sidebar_label:"Dev [Node.js]- Using the repo to build the Node.js application"},p=[{value:"Getting started",id:"getting-started",children:[]},{value:"Bootstrapping a WebApp",id:"bootstrapping-a-webapp",children:[]}],l={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"getting-started"},"Getting started"),Object(o.b)("h2",{id:"bootstrapping-a-webapp"},"Bootstrapping a WebApp"),Object(o.b)("p",null,"As a general rule the steps to get one of our npm environments up and running are"),Object(o.b)("p",null,"For local execution:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Clone the project and navigate to the relevant path.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"run the following commands in the following order"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install\nnpm run build\nnpm run build:watch\nnpm npm run start\n")))),Object(o.b)("p",null,"All of our packages, including the ",Object(o.b)("inlineCode",{parentName:"p"},"@amidostacks/scaffolding-cli")," are available on ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@amidostacks/scaffolding-cli"}),"npm"),"."),Object(o.b)("p",null,"See the README for more information on generating the templates from the CLI: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/amido/stacks-webapp-template/blob/master/packages/scaffolding-cli/README.md"}),"packages/scaffolding-cli/README.md")),Object(o.b)("p",null,"Once built, when starting the server and webapp, a browser window should open up and automatically navigate you to the local instance, but if not the default URLS is ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:3000"),"."))}s.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,g=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?a.a.createElement(g,c(c({ref:t},l),{},{components:n})):a.a.createElement(g,c({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);