"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[7500],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(k,s(s({ref:t},p),{},{components:a})):n.createElement(k,s({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},6396:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7462),r=a(7294),o=a(2389),s=a(9443);var i=function(){var e=(0,r.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(9521),c=a(6010),p={tabItem:"tabItem_vU9c"};function u(e){var t,a,n,o=e.lazy,s=e.block,u=e.defaultValue,d=e.values,m=e.groupId,k=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,l.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===u?u:null!=(t=null!=u?u:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=h[0])?void 0:n.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=i(),y=N.tabGroupChoices,w=N.setTabGroupChoices,b=(0,r.useState)(g),x=b[0],C=b[1],j=[],S=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=y[m];null!=O&&O!==x&&f.some((function(e){return e.value===O}))&&C(O)}var T=function(e){var t=e.currentTarget,a=j.indexOf(t),n=f[a].value;n!==x&&(S(t),C(n),null!=m&&w(m,n))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=j.indexOf(e.currentTarget)+1;a=j[n]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;a=j[r]||j[j.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":s},k)},f.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,c.Z)("tabs__item",p.tabItem,{"tabs__item--active":x===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:E,onFocus:T,onClick:T},null!=a?a:t)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,o.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},8475:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=a(6396),i=a(8215),l=["components"],c={id:"nx_stacks",title:"Stacks with Nx",sidebar_label:"Stacks with Nx",description:"Using stacks with Nx",keywords:["Nx","monorepo","stacks","Generator","Executor"]},p=void 0,u={unversionedId:"nx/nx_stacks",id:"nx/nx_stacks",isDocsHomePage:!1,title:"Stacks with Nx",description:"Using stacks with Nx",source:"@site/docs/nx/nx_monorepo.md",sourceDirName:"nx",slug:"/nx/nx_stacks",permalink:"/docs/nx/nx_stacks",tags:[],version:"current",frontMatter:{id:"nx_stacks",title:"Stacks with Nx",sidebar_label:"Stacks with Nx",description:"Using stacks with Nx",keywords:["Nx","monorepo","stacks","Generator","Executor"]},sidebar:"docs",previous:{title:"Project structure",permalink:"/docs/workloads/common/backend/java/architecture/java_cqrs/structure_java_cqrs"},next:{title:"@ensono-stacks/create-stacks-workspace",permalink:"/docs/nx/create-stacks-workspace/ensono-stacks-create-stacks-workspace"}},d=[{value:"Why should you use the Nx build system",id:"why-should-you-use-the-nx-build-system",children:[],level:4},{value:"Set up your stacks workspace",id:"set-up-your-stacks-workspace",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"Get Started",id:"get-started",children:[],level:3},{value:"Option 1: Stacks CLI",id:"option-1-stacks-cli",children:[],level:3},{value:"Option 2: Create stacks workspace generator",id:"option-2-create-stacks-workspace-generator",children:[],level:3},{value:"Option 3: &#39;Stackify&#39; your existing Nx monorepo",id:"option-3-stackify-your-existing-nx-monorepo",children:[],level:3}],level:2},{value:"Stacks Plugins",id:"stacks-plugins",children:[{value:"Further Notes",id:"further-notes",children:[],level:3}],level:2}],m={toc:d},k="wrapper";function h(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)(k,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ideologies of Stacks and ",(0,o.kt)("a",{parentName:"p",href:"https://nx.dev/"},(0,o.kt)("inlineCode",{parentName:"a"},"Nx"))," are aligned in their focus on providing businesses with a framework that accelerates development, allowing you to focus on business objectives with best practice code. Leveraging Nx allows us to build upon that work and to fill the gaps with infrastructure, pipelines and the integration with other Stacks subsystems. Leveraging Nx allows a common developer experience, global communities of support, and an enterprise ready base."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"What is Nx?"),(0,o.kt)("p",null,"The Nx framework is a powerful tool that allows developers to easily build, test, and automate their applications. It is built on top of the popular open-source Node.js platform, and provides a streamlined and efficient workflow for building apps. With Nx, developers can easily manage their dependencies, automate tasks, and quickly test their applications."),(0,o.kt)("p",null,"Additionally, Nx provides powerful features such as code-sharing, optimized builds, and real-time feedback, making it an ideal choice for any developer looking to streamline their development process and improve their productivity."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Find out more!")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Find out more about Nx through their official ",(0,o.kt)("a",{parentName:"p",href:"https://nx.dev/getting-started/intro"},"documentation"),"!")))),(0,o.kt)("p",null,"For the reasons listed above we have chosen to use Nx within Stacks for CSR and SSR frontend web applications, capitalising on Nx generators and executors to streamline your development and testing processes."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"What are Nx Generators and Executors?"),(0,o.kt)("p",null,"Nx generators and executors are two powerful features of the Nx build system that allow developers to quickly and easily generate new code and files for their projects, as well as to automate common tasks."),(0,o.kt)("p",null,"Nx generators are templates that can be used to quickly generate new code and files for different types of projects, such as Angular applications, React components, and Node.js services. Developers can use these generators to quickly create the code and files they need, based on pre-defined templates, saving them time and effort."),(0,o.kt)("p",null,"Nx executors, on the other hand, are scripts that can be used to automate common tasks, such as building, testing, and deploying code. Developers can use these executors to automate repetitive tasks and to streamline their workflow. Executors can also be customized to suit the specific needs of a project, making them a highly versatile tool.")),(0,o.kt)("h4",{id:"why-should-you-use-the-nx-build-system"},"Why should you use the Nx build system"),(0,o.kt)("p",null,"Nx makes scaling easy. Modern techniques such as distributed task execution and computation caching make sure your CI times remain fast, even as you keep adding projects to your workspace."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Never rebuild the same code twice",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Nx is smart! It can figure out whether the same computation has run before and can restore the files and the terminal output from its cache."))),(0,o.kt)("li",{parentName:"ul"},"Distributed task execution (DTE)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Smart, automated, dynamic distribution of tasks across multiple machines to get maximum parallelization and CPU efficient CI runs."))),(0,o.kt)("li",{parentName:"ul"},"Remote caching",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Share your local computation cache with team mates and your CI system for maximum efficiency."))),(0,o.kt)("li",{parentName:"ul"},"Only run what changed",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Nothing is faster than not running a task. Nx analyses your project graph and can diff it against a baseline to determine which projects changed and what tasks need to be re-run."))),(0,o.kt)("li",{parentName:"ul"},"Large community",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Nx is built on top of the popular Node.js platform, which has a large and active community of developers. This means that developers using Nx can easily find support and resources online."))),(0,o.kt)("li",{parentName:"ul"},"Better code-sharing",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Nx provides powerful features for sharing code between different applications, which can help teams collaborate more effectively and reduce duplication of effort.")))),(0,o.kt)("h2",{id:"set-up-your-stacks-workspace"},"Set up your stacks workspace"),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"We recommend installing Nx globally, all Nx based commands in this guide are based upon a globally installed Nx package."),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g nx\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add nx\n")))),(0,o.kt)("h3",{id:"get-started"},"Get Started"),(0,o.kt)("p",null,"There are three ways to get started with building a ",(0,o.kt)("strong",{parentName:"p"},"CSR (React)")," or ",(0,o.kt)("strong",{parentName:"p"},"SSR (Next JS)")," frontend web application with stacks, we recommend using our ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"/docs/stackscli/about"},"Stacks CLI"))," for the best experience!"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"CSR support is currently limited however we are actively working on this!"))),(0,o.kt)("h3",{id:"option-1-stacks-cli"},"Option 1: Stacks CLI"),(0,o.kt)("p",null,"Once the Stacks CLI has been installed you can scaffold a brand new Stacks and Nx workspace through answering a set of interactive questions. Launch the Stacks CLI with the following command to get started:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"stacks-cli interactive\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Ensure you have the Stacks CLI installed!")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Visit the ",(0,o.kt)("a",{parentName:"p",href:"/docs/stackscli/about"},"Stacks CLI")," docs for more information and setup instructions!"))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Visit the ",(0,o.kt)("a",{parentName:"p",href:"/docs/stackscli/about"},"NX Example")," for the complete instructions/example on using NX with the Stacks CLI!"))),(0,o.kt)("h3",{id:"option-2-create-stacks-workspace-generator"},"Option 2: Create stacks workspace generator"),(0,o.kt)("p",null,"You can scaffold a brand new Stacks and Nx workspace through the ",(0,o.kt)("strong",{parentName:"p"},"@ensono-stacks/create-stacks-workspace")," package."),(0,o.kt)("p",null,"Follow the interactive questions with the below command to get started:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @ensono-stacks/create-stacks-workspace@latest\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Visit the ",(0,o.kt)("a",{parentName:"p",href:"/docs/nx/create-stacks-workspace/ensono-stacks-create-stacks-workspace"},"@ensono-stacks/create-stacks-workspace")," docs for more information and setup instructions!"))),(0,o.kt)("h3",{id:"option-3-stackify-your-existing-nx-monorepo"},"Option 3: 'Stackify' your existing Nx monorepo"),(0,o.kt)("p",null,"If you already have an Nx monorepo, you can still utilise stacks!"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Visit the ",(0,o.kt)("a",{parentName:"p",href:"/docs/nx/workspace/ensono-stacks-workspace"},"@ensono-stacks/workspace")," docs for more information and setup instructions!"))),(0,o.kt)("h2",{id:"stacks-plugins"},"Stacks Plugins"),(0,o.kt)("p",null,"To accelerate your project development and ensure consistency across those projects, we have several stacks plugins available!"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Plugin"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/nx/create-stacks-workspace/ensono-stacks-create-stacks-workspace"},(0,o.kt)("inlineCode",{parentName:"a"},"@ensono-stacks/create-stacks-workspace"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Create an Nx workspace using stacks!",(0,o.kt)("li",null,"Create an Nx workspace for a Next application with your choice of testing framework!"),(0,o.kt)("li",null,"Create a testing project for the generated Next application. Supported: Playwright & Cypress"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/nx/workspace/ensono-stacks-workspace"},(0,o.kt)("inlineCode",{parentName:"a"},"@ensono-stacks/workspace"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"'Stackify' your existing Nx workspace",(0,o.kt)("li",null,"Add build and deploy infrastructure to your workspace"),(0,o.kt)("li",null,"Set up libraries to manage code & commit quality"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/nx/next/ensono-stacks-next"},(0,o.kt)("inlineCode",{parentName:"a"},"@ensono-stacks/next"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Enhance your Next.js project with Stacks!",(0,o.kt)("li",null,"Add stacks configuration and developer tools to an existing next application"),(0,o.kt)("li",null,"Add NextAuth.js to your next application"),(0,o.kt)("li",null,"Add build and deploy infrastructure to your next application"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/nx/azure-node/ensono-stacks-azure-node"},(0,o.kt)("inlineCode",{parentName:"a"},"@ensono-stacks/azure-node"))),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("li",null,"Add Azure app insights to a node project in your stacks workspace"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"@ensono-stacks/azure-react")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("li",null,(0,o.kt)("b",null,"Coming soon!")),(0,o.kt)("li",null,"Install and configure a ReactJS library with app insights"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/nx/rest-client/ensono-stacks-rest-client"},(0,o.kt)("inlineCode",{parentName:"a"},"@ensono-stacks/rest-client"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Add a rest client to a project in your stacks workspace",(0,o.kt)("li",null,"Create an Axios http-client with custom configuration"),(0,o.kt)("li",null,"Create a client endpoint with Axios HTTP methods for your application"),(0,o.kt)("li",null,"Bump existing endpoints to new versions"),(0,o.kt)("li",null,"Create code implementation from an OpenApi schema using Orval"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/nx/playwright/ensono-stacks-playwright"},(0,o.kt)("inlineCode",{parentName:"a"},"@ensono-stacks/playwright"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Add the playwright testing library and much more to your project!",(0,o.kt)("li",null,"Create a playwright testing project for your application"),(0,o.kt)("li",null,"Add accessibility testing to your test project"),(0,o.kt)("li",null,"Add native visual testing with playwright"),(0,o.kt)("li",null,"Add visual testing with Applitools eyes"),(0,o.kt)("li",null,"Add playwright testing and reporting automatically to your build pipelines"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/nx/cypress/ensono-stacks-cypress"},(0,o.kt)("inlineCode",{parentName:"a"},"@ensono-stacks/cypress"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Add the cypress testing library and much more to your project!",(0,o.kt)("li",null,"Add accessibility testing to your test project"),(0,o.kt)("li",null,"Add cypress testing and reporting automatically to your build pipelines"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/nx/logger/ensono-stacks-logger"},(0,o.kt)("inlineCode",{parentName:"a"},"@ensono-stacks/logger"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Add industry standard logging capabilities to your project",(0,o.kt)("li",null,"Add Winston to your project"))))),(0,o.kt)("h3",{id:"further-notes"},"Further Notes"),(0,o.kt)("p",null,"Quite a few of our generators have a safeguard of sorts to prevent running them subsequent times. This has been implemented to prevent accidental overwriting of further developed custom code following an understanding that most likely multiple runs would not be required anyway. However, if for your own reasons you would like to re-run such a generator, then you are simply required to remove the relevant project/generator or workspace/generator name entry within the ",(0,o.kt)("inlineCode",{parentName:"p"},"stacks")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"executedGenerators")," fields within ",(0,o.kt)("inlineCode",{parentName:"p"},"nx.json"),"."))}h.isMDXComponent=!0}}]);