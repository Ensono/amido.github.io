"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[8419],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=s,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9568:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),s=n(3366),a=(n(7294),n(3905)),o=["components"],i={},c="Docusaurus assets",l={unversionedId:"assets/README",id:"assets/README",isDocsHomePage:!1,title:"Docusaurus assets",description:"As per the Docusaursus documentation, static assets used in documents and blogs should go into docs/assets and website/blog/assets respectively.",source:"@site/docs/assets/README.md",sourceDirName:"assets",slug:"/assets/README",permalink:"/docs/assets/README",tags:[],version:"current",frontMatter:{}},u=[{value:"Amido Maintainers",id:"amido-maintainers",children:[],level:2},{value:"External Contributors",id:"external-contributors",children:[],level:2},{value:"Example: Embedding images in markdown",id:"example-embedding-images-in-markdown",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docusaurus-assets"},"Docusaurus assets"),(0,a.kt)("p",null,"As per the ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/en/doc-markdown#linking-to-images-and-other-assets"},"Docusaursus documentation"),", static assets used in documents and blogs should go into ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/assets")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"website/blog/assets")," respectively."),(0,a.kt)("p",null,"To reduce the size of the monorepo, we instead insist on ALL assets to be hosted publically."),(0,a.kt)("h2",{id:"amido-maintainers"},"Amido Maintainers"),(0,a.kt)("p",null,"If you have access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Amido.Stacks")," subscription in Azure, under the ",(0,a.kt)("inlineCode",{parentName:"p"},"amido-stacks-assets")," resource group there is a Storage Account named ",(0,a.kt)("inlineCode",{parentName:"p"},"amidostacksassets"),". This contains ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," a ",(0,a.kt)("em",{parentName:"p"},"public read only storage container")," under which you may upload all static assets to the ",(0,a.kt)("inlineCode",{parentName:"p"},"assets")," folder."),(0,a.kt)("p",null,"These are then available via URL to insert into the documentation as markdown assets."),(0,a.kt)("h2",{id:"external-contributors"},"External Contributors"),(0,a.kt)("p",null,"Please upload and host the static assets from a secure location and reference it in the documentation."),(0,a.kt)("h2",{id:"example-embedding-images-in-markdown"},"Example: Embedding images in markdown"),(0,a.kt)("p",null,"Inline-style:\n",(0,a.kt)("img",{parentName:"p",src:"https://amidostacksassets.blob.core.windows.net/docs/assets/axe_cypress_good_quality.gif",alt:"example gif",title:"Example gif"})),(0,a.kt)("p",null,"Reference-style:\n",(0,a.kt)("img",{parentName:"p",src:"https://amidostacksassets.blob.core.windows.net/docs/assets/axe_cypress_good_quality.gif",alt:"example gif",title:"Example gif"})))}d.isMDXComponent=!0}}]);