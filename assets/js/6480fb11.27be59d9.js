"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[2364],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),r=n(7294),o=n(2389),l=n(9443);var i=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(9521),u=n(6010),d={tabItem:"tabItem_vU9c"};function p(e){var t,n,a,o=e.lazy,l=e.block,p=e.defaultValue,c=e.values,m=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=c?c:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,s.lx)(k,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=i(),x=b.tabGroupChoices,w=b.setTabGroupChoices,N=(0,r.useState)(g),y=N[0],j=N[1],T=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var _=x[m];null!=_&&_!==y&&k.some((function(e){return e.value===_}))&&j(_)}var S=function(e){var t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==y&&(C(t),j(a),null!=m&&w(m,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},h)},k.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,u.Z)("tabs__item",d.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:E,onFocus:S,onClick:S},null!=n?n:t)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}function c(e){var t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},8882:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=n(6396),i=n(8215),s=["components"],u={id:"nextjs_plugin",title:"Stacks with NextJs Module Federation",sidebar_label:"Stacks Module Federation",description:"Using stacks with NextJs Module Federation",keywords:["Nx","monorepo","stacks","Generator","Executor"]},d=void 0,p={unversionedId:"module_federation/nextjs_plugin",id:"module_federation/nextjs_plugin",isDocsHomePage:!1,title:"Stacks with NextJs Module Federation",description:"Using stacks with NextJs Module Federation",source:"@site/docs/module_federation/nextjs_plugin.md",sourceDirName:"module_federation",slug:"/module_federation/nextjs_plugin",permalink:"/docs/module_federation/nextjs_plugin",tags:[],version:"current",frontMatter:{id:"nextjs_plugin",title:"Stacks with NextJs Module Federation",sidebar_label:"Stacks Module Federation",description:"Using stacks with NextJs Module Federation",keywords:["Nx","monorepo","stacks","Generator","Executor"]},sidebar:"docs",previous:{title:"Stacks with Nx",permalink:"/docs/nx/nx_stacks"},next:{title:"Stacks Linting",permalink:"/docs/linting/eslint"}},c=[{value:"Module Federation with NextJs",id:"module-federation-with-nextjs",children:[],level:4},{value:"NextJs Module Federation with Stacks",id:"nextjs-module-federation-with-stacks",children:[{value:"Prerequisites",id:"prerequisites",children:[{value:"Nx",id:"nx",children:[],level:4},{value:"Node",id:"node",children:[],level:4}],level:3},{value:"Get Started",id:"get-started",children:[{value:"Create a new Stacks and Nx workspace",id:"create-a-new-stacks-and-nx-workspace",children:[],level:4}],level:3}],level:2}],m={toc:c},h="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)(h,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Microfrontends are an architectural pattern for building frontend applications by breaking them down into smaller, loosely coupled, and independently deployable parts called "micro-frontends." Each microfrontend corresponds to a distinct feature or functionality of the application and is developed and deployed independently of the others.'),(0,o.kt)("h4",{id:"module-federation-with-nextjs"},"Module Federation with NextJs"),(0,o.kt)("p",null,"Module Federation is a feature introduced in Webpack 5, it enables developers to share code dynamically across different applications at runtime. This feature is particularly beneficial when building microfrontends or decoupled frontend architectures."),(0,o.kt)("p",null,"@module-federation/nextjs-mf is a plugin that leverages Webpack 5\u2019s Module Federation features, allowing developers to implement Module Federation in NextJs applications."),(0,o.kt)("p",null,"It aims to enable a federated modules architecture in NextJs, enabling you to split a monolithic NextJs application into smaller, independently deployable parts."),(0,o.kt)("p",null,"The following guide details the steps of how to set up Module Federation with a Stacks NextJs application. You can also visit this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/amido/stacks-nextjs-federated-modules-example"},"GitHub repo")," to view an existing example application"),(0,o.kt)("h2",{id:"nextjs-module-federation-with-stacks"},"NextJs Module Federation with Stacks"),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("h4",{id:"nx"},"Nx"),(0,o.kt)("p",null,"We recommend installing Nx globally, all Nx based commands in this guide are based upon a globally installed Nx package."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g nx\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add nx\n")))),(0,o.kt)("h4",{id:"node"},"Node"),(0,o.kt)("p",null,"We recommend using the latest LTS version of Node, you can find the latest LTS version ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"here"),"."),(0,o.kt)("h3",{id:"get-started"},"Get Started"),(0,o.kt)("h4",{id:"create-a-new-stacks-and-nx-workspace"},"Create a new Stacks and Nx workspace"),(0,o.kt)("p",null,"You can scaffold a brand-new Stacks and Nx workspace using the ",(0,o.kt)("strong",{parentName:"p"},"@ensono-stacks/create-stacks-workspace")," package."),(0,o.kt)("p",null,"Follow the interactive questions creating a new NextJs application named ",(0,o.kt)("b",null,"host"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @ensono-stacks/create-stacks-workspace@latest\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Visit the ",(0,o.kt)("a",{parentName:"p",href:"/docs/nx/create-stacks-workspace/ensono-stacks-create-stacks-workspace"},"@ensono-stacks/create-stacks-workspace")," docs for more information and setup instructions!"))),(0,o.kt)("p",null,"This will generate a new Stacks Nx workspace containing a NextJs ",(0,o.kt)("b",null,"host")," application "),(0,o.kt)("p",null,"First We need to install the NextJs federated modules plugin"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm add @module-federation/nextjs-mf\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @module-federation/nextjs-mf\n")))),(0,o.kt)("p",null,"Create a new ",(0,o.kt)("b",null,"header")," application which will be our remote module, we can do this manually or by using the Nx CLI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nx g @nx/next:app header\n")),(0,o.kt)("p",null,"Now we have both our ",(0,o.kt)("b",null,"host")," and ",(0,o.kt)("b",null,"header")," modules, we need to update various config in each application to enable module federation."),(0,o.kt)("p",null,"Let's update the header ",(0,o.kt)("inlineCode",{parentName:"p"},"next.config")," with details of our remote ",(0,o.kt)("b",null,"header")," module."),(0,o.kt)("b",null,"header/next.config"),":",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const path = require('node:path');\nconst NextFederationPlugin = require('@module-federation/nextjs-mf');\nconst { withNx } = require('@nrwl/next/plugins/with-nx');\n\nmodule.exports = withNx({\n    output: 'standalone',\n    experimental: {\n        outputFileTracingRoot: path.join(__dirname, '../../')\n    },\n    webpack(config) {\n        config.plugins.push(\n            new NextFederationPlugin({\n                name: 'header',\n                filename: 'static/chunks/remoteEntry.js',\n                exposes: {\n                    './index': './pages/index.tsx'\n                },\n            }),\n        );\n        return config;\n    }\n});\n")),(0,o.kt)("p",null,"Create an new env file for the ",(0,o.kt)("b",null,"header")," app with the addresses of our ",(0,o.kt)("b",null,"host")," and ",(0,o.kt)("b",null,"header")," modules."),(0,o.kt)("b",null,"header/.env.development"),":",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dotenv"},'STACKS_PUBLIC_HOST_URL="http://localhost:4200"\nSTACKS_PUBLIC_HEADER_URL="http://localhost:4300"\n')),(0,o.kt)("p",null,"Then update the header modules ",(0,o.kt)("inlineCode",{parentName:"p"},"project.json")," with the port on which the header module will be hosted"),(0,o.kt)("b",null,"header/project.json"),":",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "serve": {\n        "executor": "@nrwl/next:server",\n        "defaultConfiguration": "development",\n        "options": {\n            "buildTarget": "header:build",\n            "dev": true,\n            "port": 4300\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Now we need to update the host modules ",(0,o.kt)("inlineCode",{parentName:"p"},"next.config.ts")," with details of the ",(0,o.kt)("b",null,"host")," and any remote modules."),(0,o.kt)("b",null,"host/next.config.t s"),":",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const NextFederationPlugin = require('@module-federation/nextjs-mf');\nconst { withNx } = require('@nrwl/next/plugins/with-nx');\nconst path = require('node:path');\n\nconst remotes = isServer => {\n    const location = isServer ? 'ssr' : 'chunks';\n\n    return {\n        header: `header@${process.env.STACKS_PUBLIC_HEADER_URL}/_next/static/${location}/remoteEntry.js`,\n    };\n};\n\nmodule.exports = withNx({\n    output: 'standalone',\n    experimental: {\n        outputFileTracingRoot: path.join(__dirname, '../../'),\n        scrollRestoration: true\n    },\n    webpack(config, options) {\n        config.plugins.push(\n            new NextFederationPlugin({\n                name: 'host',\n                filename: 'static/chunks/remoteEntry.js',\n                remotes: remotes(options.isServer),\n            }),\n        );\n\n        return config;\n    }\n});\n")),(0,o.kt)("p",null,"As with the ",(0,o.kt)("b",null,"header")," module, we also need to add a new env file to the ",(0,o.kt)("b",null,"host")," application"),(0,o.kt)("b",null,"host/.env.development"),":",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dotenv"},'STACKS_PUBLIC_HOST_URL="http://localhost:4200"\nSTACKS_PUBLIC_HEADER_URL="http://localhost:4300"\n')),(0,o.kt)("p",null,"Also updating the ",(0,o.kt)("b",null,"host")," modules ",(0,o.kt)("inlineCode",{parentName:"p"},"project.json")," with the correct port number"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "serve": {\n        "executor": "@nrwl/next:server",\n        "defaultConfiguration": "development",\n        "options": {\n            "buildTarget": "header:build",\n            "dev": true,\n            "port": 4200\n        }\n    }\n}\n')),(0,o.kt)("p",null,"We can then import the ",(0,o.kt)("b",null,"header")," module into the ",(0,o.kt)("b",null,"host")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"_app.tsx")," file"),(0,o.kt)("b",null,"host/pages/_app.tsx"),":",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { AppProps } from 'next/app';\nimport Head from 'next/head';\nimport Header from 'header/index';\nimport './styles.css';\n\nfunction CustomApp({ Component, pageProps }: AppProps) {\n    return (\n        <>\n            <Head>\n                <title>Welcome to host!</title>\n            </Head>\n            <Header />\n            <main className=\"app\">\n                <Component {...pageProps} />\n            </main>\n        </>\n    );\n}\n\nexport default CustomApp;\n")),(0,o.kt)("p",null,"Now run the app with the following command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nx run-many --target=serve\n")),(0,o.kt)("p",null,"We can then visit ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:4200/"},"localhost:4200")," and see the ",(0,o.kt)("b",null,"header")," module running inside the ",(0,o.kt)("b",null,"host")," application.\nOr we can visit ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:4300/"},"localhost:4300")," and see the ",(0,o.kt)("b",null,"header")," module hosted independently."))}f.isMDXComponent=!0}}]);