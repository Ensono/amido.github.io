"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[5281],{7829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=n(4848),r=n(8453);n(1470),n(9365);const a={id:"ensono-stacks-create-stacks-workspace",title:"@ensono-stacks/create-stacks-workspace",sidebar_label:"@ensono-stacks/create-stacks-workspace",description:"Using the create-stacks-workspace with Ensono Stacks!",keywords:["NX","monorepo","stacks","ensono","create-stacks-workspace","generator","executor"]},c=void 0,i={id:"getting_started/create-stacks-workspace/ensono-stacks-create-stacks-workspace",title:"@ensono-stacks/create-stacks-workspace",description:"Using the create-stacks-workspace with Ensono Stacks!",source:"@site/docs/getting_started/create-stacks-workspace/plugin-information.md",sourceDirName:"getting_started/create-stacks-workspace",slug:"/getting_started/create-stacks-workspace/ensono-stacks-create-stacks-workspace",permalink:"/docs/getting_started/create-stacks-workspace/ensono-stacks-create-stacks-workspace",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"ensono-stacks-create-stacks-workspace",title:"@ensono-stacks/create-stacks-workspace",sidebar_label:"@ensono-stacks/create-stacks-workspace",description:"Using the create-stacks-workspace with Ensono Stacks!",keywords:["NX","monorepo","stacks","ensono","create-stacks-workspace","generator","executor"]},sidebar:"docs",previous:{title:"Ensono Stacks Storybook",permalink:"/docs/storybook/storybook_stacks"},next:{title:"@ensono-stacks/workspace",permalink:"/docs/getting_started/workspace/ensono-stacks-workspace"}},o={},l=[{value:"Setting up @ensono-stacks/create-stacks-workspace",id:"setting-up-ensono-stackscreate-stacks-workspace",level:2},{value:"Execution",id:"execution",level:3},{value:"Presets",id:"presets",level:3},{value:"Command line arguments",id:"command-line-arguments",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Create a new Ensono Stacks Nx workspace. Using the create-stacks-workspace script will quickly allow you to initialize a new NX workspace with the Ensono Stacks recommended plugins, packages and configuration to get started on a new project quickly."}),"\n",(0,s.jsxs)(t.p,{children:["The Ensono Stacks ",(0,s.jsx)(t.code,{children:"create-stacks-workspace"})," script will"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Run Nx ",(0,s.jsx)(t.a,{href:"https://nx.dev/packages/nx/documents/create-nx-workspace",children:"create-nx-workspace"})," command to setup a new NX workspace passing along any command line arguments provided"]}),"\n",(0,s.jsxs)(t.li,{children:["Install any recommended plugin/generators/executors from Ensono Stacks. If the ",(0,s.jsx)(t.code,{children:"next"})," preset is selected the ",(0,s.jsx)(t.a,{href:"/docs/getting_started/next/ensono-stacks-next",children:"Ensono Next plugin"})," will be installed. With all presets the ",(0,s.jsx)(t.a,{href:"/docs/getting_started/workspace/ensono-stacks-workspace",children:"Ensono Workspace Plugin"})," will be installed. (see ",(0,s.jsx)(t.a,{href:"/docs/getting_started/create-stacks-workspace/ensono-stacks-create-stacks-workspace#presets",children:"presets"}),")"]}),"\n",(0,s.jsx)(t.li,{children:"Configure the NX workspace. This will involve updating the NX.json file with any information provided from the command line arguments"}),"\n",(0,s.jsx)(t.li,{children:"Execute recommended generators from Ensono Stacks to initialize the workspace/projects depending on the options provided."}),"\n",(0,s.jsx)(t.li,{children:"Create an e2e test project if this option was selected"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"setting-up-ensono-stackscreate-stacks-workspace",children:"Setting up @ensono-stacks/create-stacks-workspace"}),"\n",(0,s.jsx)(t.h3,{id:"execution",children:"Execution"}),"\n",(0,s.jsxs)(t.p,{children:["Run the @ensono-stacks/create-stacks-workspace with the following command including any options see ",(0,s.jsx)(t.a,{href:"/docs/getting_started/create-stacks-workspace/ensono-stacks-create-stacks-workspace#command-line-arguments",children:"command line arguments"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npx @ensono-stacks/create-stacks-workspace@latest\n"})}),"\n",(0,s.jsx)(t.h3,{id:"presets",children:"Presets"}),"\n",(0,s.jsx)(t.p,{children:"On running the script you will be asked for a monorepo preset with the following options"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"apps              [an empty monorepo with no plugins with a layout that works best for building apps]\nnext.js           [a monorepo with a single Next.js application]\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Each preset will install, configure and run any recommended plugins for that specific preset. For example the next.js preset will run the ",(0,s.jsx)(t.a,{href:"https://nx.dev/packages/next",children:"NX NextJS"})," plugin application generator as well as the ",(0,s.jsx)(t.a,{href:"/docs/getting_started/next/ensono-stacks-next",children:"Ensonso Stacks NextJS"})," init plugin generator."]}),"\n",(0,s.jsx)(t.p,{children:"We do not support react and currently only support nextjs, therefore if you want to create a nextjs workspace with a client side rendered application, you must use Nx and not Ensono Stacks."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"You will then be asked which test runner to include for e2e testing:"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"none: Creates your application without an e2e test project"}),"\n",(0,s.jsxs)(t.li,{children:["playwright: Installs the ",(0,s.jsx)(t.a,{href:"/docs/getting_started/playwright/ensono-stacks-playwright",children:"@ensono-stacks/playwright"})," plugin and creates an e2e test project for your application using playwright."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"command-line-arguments",children:"Command line arguments"}),"\n",(0,s.jsx)(t.p,{children:"The following command line arguments are available:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Option"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Example Accepted Values"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"--name"}),(0,s.jsx)(t.td,{children:"Workspace name (e.g. org name)"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"nameOfWorkspace"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"--preset"}),(0,s.jsx)(t.td,{children:"Customizes the initial content of your workspace"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"apps/ts/next/react-monorepo"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"--dir"}),(0,s.jsx)(t.td,{children:"The directory to install to"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"/path/to/dir"}),(0,s.jsx)(t.td,{children:"./"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"--appName"}),(0,s.jsx)(t.td,{children:"The name of the application when a preset with pre-generated app is selected"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"nameOfApplication"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"--e2eTestRunner"}),(0,s.jsx)(t.td,{children:"Test runner to use in generating an e2e test project"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:'["none", "playwright"]'}),(0,s.jsx)(t.td,{children:"none"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"--nxVersion"}),(0,s.jsx)(t.td,{children:"Set the version of Nx you want installed"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"latest"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"--packageManager"}),(0,s.jsx)(t.td,{children:"Package manager to use"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"pnpm/npm/yarn"}),(0,s.jsx)(t.td,{children:"npm"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"--interactive"}),(0,s.jsx)(t.td,{children:"Enable interactive mode"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"true/false"}),(0,s.jsx)(t.td,{children:"true"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"--overwrite"}),(0,s.jsx)(t.td,{children:"Overwrite the target directory on install"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"true/false"}),(0,s.jsx)(t.td,{children:"false"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"--cloud.platform"}),(0,s.jsx)(t.td,{children:"Name of the cloud provider"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"azure"}),(0,s.jsx)(t.td,{children:"azure"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"--cloud.region"}),(0,s.jsx)(t.td,{children:"Region name where resources should be created"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"euw"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"--pipeline"}),(0,s.jsx)(t.td,{children:"Name of the pipeline provider"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"azdo"}),(0,s.jsx)(t.td,{children:"azdo"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"--business.company"}),(0,s.jsx)(t.td,{children:"Company Name"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"--business.domain"}),(0,s.jsx)(t.td,{children:"Company Scope or area"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"--business.component"}),(0,s.jsx)(t.td,{children:"Company component being worked on"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"--domain.internal"}),(0,s.jsx)(t.td,{children:"Internal domain for nonprod resources"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"--domain.external"}),(0,s.jsx)(t.td,{children:"External domain for prod resources"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"--terraform.group"}),(0,s.jsx)(t.td,{children:"Terraform state group name"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"--terraform.container"}),(0,s.jsx)(t.td,{children:"Terraform storage container name"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"--terraform.storage"}),(0,s.jsx)(t.td,{children:"Terraform storage name"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"--vcs.type"}),(0,s.jsx)(t.td,{children:"Version control provider"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"azdo/github"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"--vcs.url"}),(0,s.jsx)(t.td,{children:"Version control remote url"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var s=n(4164);const r={tabItem:"tabItem_Ymn6"};var a=n(4848);function c(e){let{children:t,hidden:n,className:c}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,c),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>v});var s=n(6540),r=n(4164),a=n(3104),c=n(6347),i=n(205),o=n(7485),l=n(1682),d=n(679);function h(e){var t,n;return null!=(t=null==(n=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function u(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=null!=t?t:function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const r=(0,c.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,o.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function j(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=u(e),[c,o]=(0,s.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+s.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!=(t=s.find((e=>e.default)))?t:s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[l,h]=x({queryString:n,groupId:r}),[j,g]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[r,a]=(0,d.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),m=(()=>{const e=null!=l?l:j;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{m&&o(m)}),[m]);return{selectedValue:c,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);o(e),h(e),g(e)}),[h,g,a]),tabValues:a}}var g=n(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=n(4848);function f(e){let{className:t,block:n,selectedValue:s,selectValue:c,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),r=i[n].value;r!==s&&(l(t),c(r))},h=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var s;const t=o.indexOf(e.currentTarget)+1;n=null!=(s=o[t])?s:o[0];break}case"ArrowLeft":{var r;const t=o.indexOf(e.currentTarget)-1;n=null!=(r=o[t])?r:o[o.length-1];break}}null==(t=n)||t.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:h,onClick:d,...a,className:(0,r.A)("tabs__item",m.tabItem,null==a?void 0:a.className,{"tabs__item--active":s===t}),children:null!=n?n:t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function b(e){const t=j(e);return(0,k.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,k.jsx)(f,{...t,...e}),(0,k.jsx)(w,{...t,...e})]})}function v(e){const t=(0,g.A)();return(0,k.jsx)(b,{...e,children:h(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var s=n(6540);const r={},a=s.createContext(r);function c(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);