(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{118:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return a})),t.d(r,"default",(function(){return p}));var n=t(2),o=t(6),i=(t(0),t(210)),s={id:"repository_overview_netcore",title:"Repository Overview",sidebar_label:"Repository Structure",hide_title:!1,hide_table_of_contents:!0,description:".NET Core REST API application - Repository Overview",keywords:[".net core","rest api","cqrs","example","template","repository","structure"]},c={unversionedId:"workloads/azure/backend/netcore/architecture/repository_overview_netcore",id:"workloads/azure/backend/netcore/architecture/repository_overview_netcore",isDocsHomePage:!1,title:"Repository Overview",description:".NET Core REST API application - Repository Overview",source:"@site/docs/workloads/azure/backend/netcore/architecture/repository_overview_netcore.md",slug:"/workloads/azure/backend/netcore/architecture/repository_overview_netcore",permalink:"/stacks/docs/workloads/azure/backend/netcore/architecture/repository_overview_netcore",version:"current",sidebar_label:"Repository Structure",sidebar:"docs",previous:{title:"Architecture Overview",permalink:"/stacks/docs/workloads/azure/backend/netcore/architecture/architecture_overview_netcore"},next:{title:"Solution Structure",permalink:"/stacks/docs/workloads/azure/backend/netcore/architecture/project_structure_netcore"}},a=[],u={rightToc:a};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"\u251c\u2500\u2500 build\n\u2502   \u251c\u2500\u2500 azDevOps: stores configuration, build steps and scripts used by azure dev ops only\n\u2502   \u251c\u2500\u2500 jenkins: stores configuration, build steps and scripts used by jenkins only\n\u2502   \u2514\u2500\u2500 scripts: stores scripts used by build steps that can be reused by multiple\n|                tools without changes. ie: Docker script for Container Image creation\n\u251c\u2500\u2500 deploy\n|  \u251c\u2500\u2500 k8s: stores yaml files for k8s deployments. i.e: deployments, services,\n|  |  |    configMap and related dependencies for each service in an application\n|  |  \u251c\u2500\u2500 ui: stores yaml for ui service\n|  |  \u2514\u2500\u2500 api: stores yaml for the api service and configuration files\n\u2502  \u2502     \u251c\u2500\u2500 base: store raw yaml used by k8s\n\u2502  \u2502     \u251c\u2500\u2500 kustomization: store kustomize files(for kubectl apply -k)\n\u2502  \u2502     \u2502   \u251c\u2500\u2500 dev: configuration files for dev environment\n\u2502  \u2502     \u2502   \u2514\u2500\u2500 test: configuration files for test environment\n\u2502  \u2502     \u2514\u2500\u2500 helm-chart: store helm chart files(if helm used)\n\u2502  \u2502         \u2514\u2500\u2500 templates\n|  \u251c\u2500\u2500 serviceFabric: scripts used to deploy applications on serviceFabric\n|  \u251c\u2500\u2500 terraform: terraform scripts used to provision dependencies\n|  |              only needed by this application\n|  \u2514\u2500\u2500 scripts: deployment scripts shared by multiple tools. ie: Variable substitution\n\u251c\u2500\u2500 contracts: stores swagger specs, ui mocks and other documents describing\n|              the overall solution\n\u2514\u2500\u2500 src\n   \u251c\u2500\u2500 services (i.e: apis, queue listener, scheduled jobs)\n   \u251c\u2500\u2500 tests: stores tests not built in other services solutions (functional tests,\n   |          performance, etc)\n   \u2514\u2500\u2500 ui: stores the front end service and components\n")))}p.isMDXComponent=!0},210:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=p(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=p(t),f=n,b=l["".concat(s,".").concat(f)]||l[f]||d[f]||i;return t?o.a.createElement(b,c(c({ref:r},u),{},{components:t})):o.a.createElement(b,c({ref:r},u))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=f;var c={};for(var a in r)hasOwnProperty.call(r,a)&&(c[a]=r[a]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var u=2;u<i;u++)s[u]=t[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);