(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{147:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),i=(r(0),r(170)),a={id:"deploy_project_netcore",title:"Deploying the application",hide_title:!0,sidebar_label:"Deployment",hide_table_of_contents:!0},c={unversionedId:"workloads/azure/backend/netcore/quickstart/deploy_project_netcore",id:"workloads/azure/backend/netcore/quickstart/deploy_project_netcore",isDocsHomePage:!1,title:"Deploying the application",description:"Deploying the application",source:"@site/docs/workloads/azure/backend/netcore/quickstart/deploy_project_netcore.md",slug:"/workloads/azure/backend/netcore/quickstart/deploy_project_netcore",permalink:"/stacks/docs/workloads/azure/backend/netcore/quickstart/deploy_project_netcore",version:"current",sidebar_label:"Deployment",sidebar:"docs",previous:{title:"Build & Run",permalink:"/stacks/docs/workloads/azure/backend/netcore/quickstart/build_and_run_project_netcore"},next:{title:"Configure Swagger",permalink:"/stacks/docs/workloads/azure/backend/netcore/quickstart/swagger_configuration/configure_swagger_netcore"}},l=[{value:"Deploying the application",id:"deploying-the-application",children:[{value:"Deployment files",id:"deployment-files",children:[]}]}],p={rightToc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"deploying-the-application"},"Deploying the application"),Object(i.b)("p",null,"This solution has two build pipelines files one each for Azure DevOps and Jenkins, located under ",Object(i.b)("inlineCode",{parentName:"p"},"./build/azDevOps/azure")," and ",Object(i.b)("inlineCode",{parentName:"p"},"./build/Jenkins/")," respectively. To deploy this application, fork it into your desired source control system and point your Jenkins or Azure DevOps instance at those pipeline files. There are a number of prerequisite variables (such as credentials) and various paths that must be populated, all of which are listed at the head of the file (if global) or in the relevant environment section (if per-environment). Please refer to the ",Object(i.b)("inlineCode",{parentName:"p"},"stacks-infrastructure")," repository for more information around the provisioning of the underlying infrastructure."),Object(i.b)("h3",{id:"deployment-files"},"Deployment files"),Object(i.b)("p",null,"When deployed to a kubernetes cluster, ensure the following requirements are satisfied:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The yaml files for the resources are created in the folder ",Object(i.b)("inlineCode",{parentName:"li"},"/deploy/k8s/api/base")),Object(i.b)("li",{parentName:"ul"},"The yaml files for kustomization are created for each environment. i.e: ",Object(i.b)("inlineCode",{parentName:"li"},"/deploy/k8s/api/kustomization/dev")),Object(i.b)("li",{parentName:"ul"},"The kustomization files apply the changes required to the environment"),Object(i.b)("li",{parentName:"ul"},"The required secrets are deployed to the cluster (do not check in secrets or certificates to the repository)")))}s.isMDXComponent=!0},170:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,b=u["".concat(a,".").concat(f)]||u[f]||d[f]||i;return r?o.a.createElement(b,c(c({ref:t},p),{},{components:r})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);