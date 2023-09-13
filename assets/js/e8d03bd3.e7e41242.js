"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[7794],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(o),k=r,m=d["".concat(l,".").concat(k)]||d[k]||p[k]||a;return o?n.createElement(m,s(s({ref:t},u),{},{components:o})):n.createElement(m,s({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}k.displayName="MDXCreateElement"},8215:function(e,t,o){var n=o(7294);t.Z=function(e){var t=e.children,o=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:o,className:r},t)}},6396:function(e,t,o){o.d(t,{Z:function(){return p}});var n=o(7462),r=o(7294),a=o(2389),s=o(9443);var i=function(){var e=(0,r.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=o(9521),c=o(6010),u={tabItem:"tabItem_vU9c"};function d(e){var t,o,n,a=e.lazy,s=e.block,d=e.defaultValue,p=e.values,k=e.groupId,m=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:b.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),y=(0,l.lx)(f,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(t=null!=d?d:null==(o=b.find((function(e){return e.props.default})))?void 0:o.props.value)?t:null==(n=b[0])?void 0:n.props.value;if(null!==h&&!f.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=i(),g=v.tabGroupChoices,w=v.setTabGroupChoices,S=(0,r.useState)(h),O=S[0],x=S[1],j=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var T=g[k];null!=T&&T!==O&&f.some((function(e){return e.value===T}))&&x(T)}var N=function(e){var t=e.currentTarget,o=j.indexOf(t),n=f[o].value;n!==O&&(E(t),x(n),null!=k&&w(k,n))},I=function(e){var t,o=null;switch(e.key){case"ArrowRight":var n=j.indexOf(e.currentTarget)+1;o=j[n]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;o=j[r]||j[j.length-1]}null==(t=o)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":s},m)},f.map((function(e){var t=e.value,o=e.label;return r.createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:(0,c.Z)("tabs__item",u.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:I,onFocus:N,onClick:N},null!=o?o:t)}))),a?(0,r.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function p(e){var t=(0,a.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},9443:function(e,t,o){var n=(0,o(7294).createContext)(void 0);t.Z=n},1279:function(e,t,o){o.r(t),o.d(t,{contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),s=(o(6396),o(8215),["components"]),i={id:"storybook_stacks",title:"Stacks Storybook",sidebar_label:"Stacks Storybook",description:"Using stacks with Storybook",keywords:["Nx","monorepo","stacks","Generator","Executor"]},l=void 0,c={unversionedId:"storybook/storybook_stacks",id:"storybook/storybook_stacks",isDocsHomePage:!1,title:"Stacks Storybook",description:"Using stacks with Storybook",source:"@site/docs/storybook/storybook_stacks.md",sourceDirName:"storybook",slug:"/storybook/storybook_stacks",permalink:"/docs/storybook/storybook_stacks",tags:[],version:"current",frontMatter:{id:"storybook_stacks",title:"Stacks Storybook",sidebar_label:"Stacks Storybook",description:"Using stacks with Storybook",keywords:["Nx","monorepo","stacks","Generator","Executor"]},sidebar:"docs",previous:{title:"Stacks Linting",permalink:"/docs/linting/eslint"},next:{title:"Getting Started",permalink:"/docs/getting_started/setup"}},u=[{value:"Component Isolation",id:"component-isolation",children:[],level:4},{value:"Visual Testing",id:"visual-testing",children:[],level:4},{value:"Interactive Documentation",id:"interactive-documentation",children:[],level:4},{value:"Storybook with Stacks",id:"storybook-with-stacks",children:[],level:2},{value:"Storybook Addons",id:"storybook-addons",children:[{value:"storybook-addon-a11y",id:"storybook-addon-a11y",children:[],level:3}],level:2}],d={toc:u},p="wrapper";function k(e){var t=e.components,o=(0,r.Z)(e,s);return(0,a.kt)(p,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://storybook.js.org/"},"Storybook")," is an open-source tool used to build, test, and showcase individual components or UI elements in isolation."),(0,a.kt)("p",null,"The primary purpose of Storybook is to facilitate the development and documentation of UI components in a sandboxed environment. Instead of integrating components into a full application, developers can create separate stories for each component, which are essentially individual test cases or scenarios that demonstrate the component's behaviour in different states and use cases."),(0,a.kt)("p",null,"Some of the benefits of Storybook include:"),(0,a.kt)("h4",{id:"component-isolation"},"Component Isolation"),(0,a.kt)("p",null,"Storybook allows developers to work on a single UI component in isolation, without the need to navigate through the whole application. This isolation helps in quicker development, debugging, and testing of components."),(0,a.kt)("h4",{id:"visual-testing"},"Visual Testing"),(0,a.kt)("p",null,"Storybook provides a way to visually test components, making it simpler to catch UI-related bugs and regressions during development."),(0,a.kt)("h4",{id:"interactive-documentation"},"Interactive Documentation"),(0,a.kt)("p",null,"Documentation, usage examples, and interactive demos can be added for each component, which helps in onboarding new team members and maintaining a comprehensive living style guide."),(0,a.kt)("h2",{id:"storybook-with-stacks"},"Storybook with Stacks"),(0,a.kt)("p",null,"Storybook can be added to Stacks using the Nx Storybook generator documented ",(0,a.kt)("a",{parentName:"p",href:"https://nx.dev/packages/storybook"},"here")),(0,a.kt)("h2",{id:"storybook-addons"},"Storybook Addons"),(0,a.kt)("p",null,"Storybook has a large ecosystem of addons that extend its core functionality. These addons can be used for things like showing component props, testing, accessibility and theming."),(0,a.kt)("h3",{id:"storybook-addon-a11y"},"storybook-addon-a11y"),(0,a.kt)("p",null,"One of the addons we recommend using with Stacks is ",(0,a.kt)("a",{parentName:"p",href:"https://storybook.js.org/addons/@storybook/addon-a11y"},"storybook-addon-a11y"),", this addon helps developers and designers identify and address accessibility issues in their UI components during the development and testing phase."),(0,a.kt)("p",null,"It integrates with Storybook to provide a user-friendly interface for testing the accessibility of individual UI components or stories within your Storybook project."),(0,a.kt)("p",null,"Some other addons we recommend using with Stacks are:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://storybook.js.org/addons/@storybook/addon-links"},"storybook/addon-links")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/essentials/actions"},"storybook/addon-actions")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://storybook.js.org/addons/@storybook/addon-jest"},"storybook/addon-jest")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/configure/theming"},"storybook/theming")))}k.isMDXComponent=!0}}]);