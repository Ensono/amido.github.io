"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[9803],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(k,i(i({ref:t},l),{},{components:r})):n.createElement(k,i({ref:t},l))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6437:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={id:"stacks_monorepo_csr",title:"Stacks Monorepo",sidebar_label:"Stacks Monorepo",description:"Stacks Monorepo",keywords:["rest","api","csr","ssr","stacks","monorepo"]},s=void 0,p={unversionedId:"workloads/azure/frontend-archived/CSR/stacks_monorepo_csr",id:"workloads/azure/frontend-archived/CSR/stacks_monorepo_csr",isDocsHomePage:!1,title:"Stacks Monorepo",description:"Stacks Monorepo",source:"@site/docs/workloads/azure/frontend-archived/CSR/monorepo_csr.md",sourceDirName:"workloads/azure/frontend-archived/CSR",slug:"/workloads/azure/frontend-archived/CSR/stacks_monorepo_csr",permalink:"/docs/workloads/azure/frontend-archived/CSR/stacks_monorepo_csr",tags:[],version:"current",frontMatter:{id:"stacks_monorepo_csr",title:"Stacks Monorepo",sidebar_label:"Stacks Monorepo",description:"Stacks Monorepo",keywords:["rest","api","csr","ssr","stacks","monorepo"]}},l=[{value:"Description",id:"description",children:[],level:2},{value:"Sample project directory structure",id:"sample-project-directory-structure",children:[],level:2},{value:"Approach",id:"approach",children:[],level:2}],u={toc:l},d="wrapper";function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"The Amido stacks webapp template is a monorepo managed with\n",(0,o.kt)("a",{parentName:"p",href:"https://lerna.js.org/"},"Lerna")),(0,o.kt)("p",null,"At the moment, the project is comprised of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[Webapp]("),"packages/webapp",(0,o.kt)("inlineCode",{parentName:"li"},")")," - SSR React, Node.js"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[UI_Library]("),"packages/UILib",(0,o.kt)("inlineCode",{parentName:"li"},")")," - TBC")),(0,o.kt)("h2",{id:"sample-project-directory-structure"},"Sample project directory structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 lerna.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 packages\n\u2502\xa0\xa0 \u251c\u2500\u2500 Webapp\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 __tests__\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 index.test.tsx\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 pages\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 index.tsx\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 package.json\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 README.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 task -> ../../scripts/task\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Dockerfile\n\u2502\xa0\xa0 \u251c\u2500\u2500 [sample Package]\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 README.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 __tests__\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 package.json\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 task -> ../../scripts/task\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 scripts\n\u2502\xa0\xa0 \u2514\u2500\u2500 task\n\u2514\u2500\u2500 package-lock.json\n")),(0,o.kt)("h2",{id:"approach"},"Approach"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"npm")," handles the dependencies."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Lerna")," handles tasks that affect multiple package (compile/test/lint all\nmodules)."),(0,o.kt)("li",{parentName:"ul"},"One folder per package inside ",(0,o.kt)("em",{parentName:"li"},"packages/"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"any new package should be added within the ",(0,o.kt)("inlineCode",{parentName:"li"},"packages")," directory and follow\nthe above structure."))),(0,o.kt)("li",{parentName:"ul"},"All packages share the similar structure."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Task")," script is used to define set of common tasks like ",(0,o.kt)("inlineCode",{parentName:"li"},"test"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"lint")," and\n",(0,o.kt)("inlineCode",{parentName:"li"},"dev"),". So any common task should be added in the script at the root level.")))}m.isMDXComponent=!0}}]);