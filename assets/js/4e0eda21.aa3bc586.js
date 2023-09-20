"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[6732],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9617:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"stacks_monorepo_ssr",title:"Stacks Monorepo",sidebar_label:"Stacks Monorepo"},c=void 0,l={unversionedId:"workloads/azure/frontend-archived/SSR/stacks_monorepo_ssr",id:"workloads/azure/frontend-archived/SSR/stacks_monorepo_ssr",title:"Stacks Monorepo",description:"Description",source:"@site/docs/workloads/azure/frontend-archived/SSR/monorepo_ssr.md",sourceDirName:"workloads/azure/frontend-archived/SSR",slug:"/workloads/azure/frontend-archived/SSR/stacks_monorepo_ssr",permalink:"/docs/workloads/azure/frontend-archived/SSR/stacks_monorepo_ssr",draft:!1,tags:[],version:"current",frontMatter:{id:"stacks_monorepo_ssr",title:"Stacks Monorepo",sidebar_label:"Stacks Monorepo"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Sample project directory structure",id:"sample-project-directory-structure",level:2},{value:"Approach",id:"approach",level:2}],d={toc:u},m="wrapper";function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"The Ensono Stacks webapp template is a monorepo managed with\n",(0,o.kt)("a",{parentName:"p",href:"https://lerna.js.org/"},"Lerna")),(0,o.kt)("p",null,"At the moment, the project is comprised of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[Webapp]("),"packages/webapp",(0,o.kt)("inlineCode",{parentName:"li"},")")," - SSR React, Node.js"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[UI_Library]("),"packages/UILib",(0,o.kt)("inlineCode",{parentName:"li"},")")," - TBC")),(0,o.kt)("h2",{id:"sample-project-directory-structure"},"Sample project directory structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 lerna.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 packages\n\u2502\xa0\xa0 \u251c\u2500\u2500 Webapp\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 __tests__\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 index.test.tsx\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 pages\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 index.tsx\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 package.json\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 README.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 task -> ../../scripts/task\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Dockerfile\n\u2502\xa0\xa0 \u251c\u2500\u2500 [sample Package]\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 README.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 __tests__\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 package.json\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 task -> ../../scripts/task\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 scripts\n\u2502\xa0\xa0 \u2514\u2500\u2500 task\n\u2514\u2500\u2500 package-lock.json\n")),(0,o.kt)("h2",{id:"approach"},"Approach"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"npm")," handles the dependencies."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Lerna")," handles tasks that affect multiple package (compile/test/lint all\nmodules)."),(0,o.kt)("li",{parentName:"ul"},"One folder per package inside ",(0,o.kt)("em",{parentName:"li"},"packages/"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"any new package should be added within the ",(0,o.kt)("inlineCode",{parentName:"li"},"packages")," directory and follow\nthe above structure."))),(0,o.kt)("li",{parentName:"ul"},"All packages share the similar structure."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Task")," script is used to define set of common tasks like ",(0,o.kt)("inlineCode",{parentName:"li"},"test"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"lint")," and\n",(0,o.kt)("inlineCode",{parentName:"li"},"dev"),". So any common task should be added in the script at the root level.")))}k.isMDXComponent=!0}}]);