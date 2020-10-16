(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{123:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,f=u["".concat(o,".").concat(b)]||u[b]||d[b]||a;return n?i.a.createElement(f,c(c({ref:t},p),{},{components:n})):i.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),i=n(6),a=(n(0),n(123)),o={id:"deployment",title:"Deployment",sidebar_label:"Deployment"},c={unversionedId:"infrastructure/deployment",id:"infrastructure/deployment",isDocsHomePage:!1,title:"Deployment",description:"Templated pipelines",source:"@site/docs/infrastructure/deployment.md",slug:"/infrastructure/deployment",permalink:"/stacks/docs/infrastructure/deployment",editUrl:"https://github.com/amido/stacks/docs/infrastructure/deployment.md",version:"current",sidebar_label:"Deployment"},l=[{value:"Templated pipelines",id:"templated-pipelines",children:[{value:"Basic guide",id:"basic-guide",children:[]},{value:"Build container definitions",id:"build-container-definitions",children:[]}]}],p={rightToc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"templated-pipelines"},"Templated pipelines"),Object(a.b)("p",null,"Whilst there is a full CI/CD process for contributed changes to ensure existing functionality doesn't break if you want to ensure your PR passes, please follow the steps in the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/stacks/docs/packages/packages"}),"templated-cli")," docs to create a templated out app with and *-pipeline.yml and point to your own CI/CD tooling."),Object(a.b)("p",null,"All changes need to be made inside the ",Object(a.b)("inlineCode",{parentName:"p"},"packages/scaffolding-cli/templates/build/*"),"."),Object(a.b)("p",null,"Azure Devops (TFS) ONLY:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The generated pipeline yaml is only comprised of steps and jobs templated out from other repo ")),Object(a.b)("h3",{id:"basic-guide"},"Basic guide"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"See ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/stacks/docs/packages/npm/publishing"}),"publishing")," for how to publish changes to packages")),Object(a.b)("h3",{id:"build-container-definitions"},"Build container definitions"),Object(a.b)("p",null,"All build containers used by the pipelines are stored and managed from ",Object(a.b)("inlineCode",{parentName:"p"},"libs/images/*"),", should you need to change or create an additional one, please follow the existing structure and create a folder for your specific use case."),Object(a.b)("p",null,"These are meant to be used for public consumption and should not include any secrets or keys left in the container."),Object(a.b)("p",null,"DO NOT use ",Object(a.b)("inlineCode",{parentName:"p"},"COPY")," or ",Object(a.b)("inlineCode",{parentName:"p"},"ADD")," commands."),Object(a.b)("p",null,"e.g. create a folder called ",Object(a.b)("inlineCode",{parentName:"p"},"pip-cypress")," and within it include a Dockerfile and a README."))}s.isMDXComponent=!0}}]);