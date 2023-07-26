"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[9946],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return t?n.createElement(f,o(o({ref:r},p),{},{components:t})):n.createElement(f,o({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3046:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={id:"requirements_data_azure",title:"Requirements",sidebar_label:"Requirements",hide_title:!1,hide_table_of_contents:!1,description:"Requirements",keywords:["requirements"]},u=void 0,s={unversionedId:"workloads/azure/data/requirements_data_azure",id:"workloads/azure/data/requirements_data_azure",isDocsHomePage:!1,title:"Requirements",description:"Requirements",source:"@site/docs/workloads/azure/data/requirements_data_azure.md",sourceDirName:"workloads/azure/data",slug:"/workloads/azure/data/requirements_data_azure",permalink:"/docs/workloads/azure/data/requirements_data_azure",tags:[],version:"current",frontMatter:{id:"requirements_data_azure",title:"Requirements",sidebar_label:"Requirements",hide_title:!1,hide_table_of_contents:!1,description:"Requirements",keywords:["requirements"]},sidebar:"docs",previous:{title:"Deployment Workflow",permalink:"/docs/workloads/azure/data/architecture/deployment_arch_data_azure"},next:{title:"Infrastructure",permalink:"/docs/workloads/azure/data/infrastructure_data_azure"}},p=[{value:"Local development",id:"local-development",children:[],level:2},{value:"Azure",id:"azure",children:[{value:"Azure Pipelines variable groups",id:"azure-pipelines-variable-groups",children:[],level:3}],level:2}],c={toc:p},d="wrapper";function m(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)(d,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"local-development"},"Local development"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Python 3.9+"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://python-poetry.org/docs/"},"Poetry")),(0,i.kt)("li",{parentName:"ul"},"(Windows users) A Linux distribution, e.g. ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/install"},"WSL2"))),(0,i.kt)("h2",{id:"azure"},"Azure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Azure subscription - for deploying the solution into"),(0,i.kt)("li",{parentName:"ul"},"Azure service principal - needs permissions to deploy and configure all required resources into the target subscription"),(0,i.kt)("li",{parentName:"ul"},"Azure DevOps project - for running CI/CD pipelines and storing project variables")),(0,i.kt)("h3",{id:"azure-pipelines-variable-groups"},"Azure Pipelines variable groups"),(0,i.kt)("p",null,"Our blueprint solution expects the following ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups?view=azure-devops&tabs=yaml"},"variable groups"),"\nto exist in your Azure DevOps project's Pipelines Library:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Nonprod Environment:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"amido-stacks-de-pipeline-nonprod"),(0,i.kt)("li",{parentName:"ul"},"amido-stacks-infra-credentials-nonprod"),(0,i.kt)("li",{parentName:"ul"},"stacks-credentials-nonprod-kv"))),(0,i.kt)("li",{parentName:"ul"},"Prod Environment:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"amido-stacks-de-pipeline-prod"),(0,i.kt)("li",{parentName:"ul"},"amido-stacks-infra-credentials-prod"),(0,i.kt)("li",{parentName:"ul"},"stacks-credentials-prod-kv")))),(0,i.kt)("p",null,"Please see ",(0,i.kt)("a",{parentName:"p",href:"https://stacks.amido.com/docs/infrastructure/azure/pipelines/azure_devops"},"Azure DevOps Pipelines"),"\nfor details on using Azure Pipelines in Stacks."))}m.isMDXComponent=!0}}]);