"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[1661,4422],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(o,".").concat(f)]||d[f]||c[f]||a;return n?r.createElement(m,p(p({ref:t},s),{},{components:n})):r.createElement(m,p({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var u=2;u<a;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return p}});var r=n(2263),i=n(3919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,p=a.forcePrependBaseUrl,l=void 0!==p&&p,o=a.absolute,u=void 0!==o&&o;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(l)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+s:s}(a,n,e,t)}}}function p(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},3602:function(e,t,n){n.r(t);var r=n(7294);t.default=function(e){var t=e.next,n=e.prev;return r.useEffect((function(){if(t){var e=document.querySelector("div.pagination-nav__item.pagination-nav__item--next>a");e&&e.style&&(e.style.display="none")}if(n){var r=document.querySelector("div.pagination-nav__item>a");r&&r.style&&(r.style.display="none")}})),r.createElement("div",null)}},1967:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),p=n(3602),l=n(4996),o=["components"],u={id:"pipeline_csr",title:"CSR Application - Azure DevOps Pipeline",sidebar_label:"Pipeline",hide_title:!1,hide_table_of_contents:!1,description:"CSR Application - Azure DevOps Pipeline",keywords:["rest","api","csr","application","template","azure","devops","pipeline","settings","client","side","rendering","client side rendering"]},s=void 0,c={unversionedId:"workloads/azure/frontend/CSR/pipeline_csr",id:"workloads/azure/frontend/CSR/pipeline_csr",isDocsHomePage:!1,title:"CSR Application - Azure DevOps Pipeline",description:"CSR Application - Azure DevOps Pipeline",source:"@site/docs/workloads/azure/frontend/CSR/pipeline_csr.md",sourceDirName:"workloads/azure/frontend/CSR",slug:"/workloads/azure/frontend/CSR/pipeline_csr",permalink:"/docs/workloads/azure/frontend/CSR/pipeline_csr",tags:[],version:"current",frontMatter:{id:"pipeline_csr",title:"CSR Application - Azure DevOps Pipeline",sidebar_label:"Pipeline",hide_title:!1,hide_table_of_contents:!1,description:"CSR Application - Azure DevOps Pipeline",keywords:["rest","api","csr","application","template","azure","devops","pipeline","settings","client","side","rendering","client side rendering"]},sidebar:"docs",previous:{title:"Infrastructure",permalink:"/docs/workloads/azure/frontend/CSR/infrastructure_csr"},next:{title:"Browser Support",permalink:"/docs/workloads/azure/frontend/CSR/browser_support_csr"}},d=[{value:"Pipeline Diagram",id:"pipeline-diagram",children:[],level:2},{value:"Setting up Azure DevOps",id:"setting-up-azure-devops",children:[{value:"Update pipeline template placeholders",id:"update-pipeline-template-placeholders",children:[],level:3},{value:"Create the pipeline",id:"create-the-pipeline",children:[],level:3}],level:2}],f={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The pipeline will automate provisioning and updating the client-side rendering infrastructure and application in Azure."),(0,a.kt)("p",null,"Where possible, we are creating reusable steps (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/amido/stacks-pipeline-templates"},"stacks-pipeline-templates"),") that can be pulled into any base pipeline. Reusable steps can include tasks to deploy, build, test and more."),(0,a.kt)("h2",{id:"pipeline-diagram"},"Pipeline Diagram"),(0,a.kt)("img",{alt:"CSR Application - Azure DevOps Pipeline",src:(0,l.Z)("img/azure_csr_azure_devops_pipeline.png")}),(0,a.kt)("h2",{id:"setting-up-azure-devops"},"Setting up Azure DevOps"),(0,a.kt)("h3",{id:"update-pipeline-template-placeholders"},"Update pipeline template placeholders"),(0,a.kt)("p",null,"Where possible, the scaffolding CLI will have populated the correct values in the pipeline template file ",(0,a.kt)("inlineCode",{parentName:"p"},"build/azDevops/azure/app-pipeline.yml"),". The values that need to be manually configured, such as the variable group name setup previously, will have placeholders using the prefix ",(0,a.kt)("inlineCode",{parentName:"p"},"%REPLACE_ME_FOR"),". We very much recommend that you go through the whole template to make sure that values are correct for your project. Once you are happy with the template, commit the changes to your repository."),(0,a.kt)("h3",{id:"create-the-pipeline"},"Create the pipeline"),(0,a.kt)("p",null,"Follow the steps below to create the pipeline and trigger the initial run."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the pipelines section of Azure DevOps, select ",(0,a.kt)("strong",{parentName:"li"},"New Pipeline"),"."),(0,a.kt)("li",{parentName:"ol"},"Select your repository."),(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("strong",{parentName:"li"},"Existing Azure Pipelines YAML files")," option and enter the path ",(0,a.kt)("inlineCode",{parentName:"li"},"build/azDevops/azure/app-pipeline.yml")),(0,a.kt)("li",{parentName:"ol"},"Click run and wait for the pipeline to complete.")),(0,a.kt)(p.default,{next:!0,mdxType:"HideNavigation"}))}m.isMDXComponent=!0}}]);