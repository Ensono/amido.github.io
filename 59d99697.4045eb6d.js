(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{140:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(a),f=r,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return a?n.a.createElement(m,s(s({ref:t},l),{},{components:a})):n.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},80:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(6),o=(a(0),a(140)),c={id:"scaffolding_java_cqrs",title:"Using the Scaffolding CLI to create the Java Rest API project template",sidebar_label:"Using the Scaffolding CLI",hide_table_of_contents:!0},s={unversionedId:"workloads/azure/backend/java_cqrs/scaffolding_java_cqrs",id:"workloads/azure/backend/java_cqrs/scaffolding_java_cqrs",isDocsHomePage:!1,title:"Using the Scaffolding CLI to create the Java Rest API project template",description:"Create a custom Java REST API project template from the command line",source:"@site/docs/workloads/azure/backend/java_cqrs/scaffolding_java_cqrs.md",slug:"/workloads/azure/backend/java_cqrs/scaffolding_java_cqrs",permalink:"/stacks/docs/workloads/azure/backend/java_cqrs/scaffolding_java_cqrs",editUrl:"https://github.com/amido/stacks/docs/workloads/azure/backend/java_cqrs/scaffolding_java_cqrs.md",version:"current",sidebar_label:"Using the Scaffolding CLI",sidebar:"docs",previous:{title:"Getting started with the Java Rest API application",permalink:"/stacks/docs/workloads/azure/backend/java_cqrs/quickstart_java_cqrs"},next:{title:"IDE guidelines for the Java Rest API",permalink:"/stacks/docs/workloads/azure/backend/java_cqrs/ide_java_cqrs"}},i=[{value:"Create a custom Java REST API project template from the command line",id:"create-a-custom-java-rest-api-project-template-from-the-command-line",children:[]}],l={rightToc:i};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"create-a-custom-java-rest-api-project-template-from-the-command-line"},"Create a custom Java REST API project template from the command line"),Object(o.b)("p",null,"The Amido Stacks Scaffolding CLI can be used to create a fully-functional and deployable project from a template, in a variety of flavours.\nIt includes tests (unit, integration), together with infrastructure and deployment definitions. All by running from your CLI."),Object(o.b)("p",null,"We use npx to execute and create the\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@amidostacks/scaffolding-cli"}),"template-cli"),"\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/npx"}),"npx"),"."),Object(o.b)("p",null,"We are supporting and running ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org/en/about/releases/"}),"node@12"),".\nPlease ensure that your local environment has the correct version ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org/en/download/"}),"installed"),"."),Object(o.b)("p",null,"To run the Scaffolding CLI, use the following commands"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"npx @amidostacks/scaffolding-cli@latest run -i  \n")),Object(o.b)("p",null,"You will be asked a number of questions. Based on the answers, your ready-to-build project template will be produced."),Object(o.b)("p",null,"An example is shown in the video below."),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://asciinema.org/a/358208"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://asciinema.org/a/358208.svg",alt:"asciicast"})))))}p.isMDXComponent=!0}}]);