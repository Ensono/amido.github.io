(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[530],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1262:function(e,t,n){"use strict";var r=n(7294),a=n(2389);t.Z=function(e){var t=e.children,n=e.fallback;return(0,a.Z)()&&null!=t?r.createElement(r.Fragment,null,t()):n||null}},3948:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Pe}});var r=n(7294),a=n(3905),o=n(6291),l=n(8926),c=n(6010),i=n(7673),s=n(5492),u=n(4400),d=n(7462),p=function(e){return r.createElement("svg",(0,d.Z)({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},m=n(5999),f=n(3366),h=n(9960),y=n(3919),v=n(9514),b="menuLinkText_1DFL",g=["items"],k=["item"],E=["item","onItemClick","activePath","level"],Z=["item","onItemClick","activePath","level"],T=function e(t,n){return"link"===t.type?(0,i.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},C=(0,r.memo)((function(e){var t=e.items,n=(0,f.Z)(e,g);return r.createElement(r.Fragment,null,t.map((function(e,t){return r.createElement(S,(0,d.Z)({key:t,item:e},n))})))}));function S(e){var t=e.item,n=(0,f.Z)(e,k);return"category"===t.type?0===t.items.length?null:r.createElement(N,(0,d.Z)({item:t},n)):r.createElement(_,(0,d.Z)({item:t},n))}function N(e){var t,n=e.item,a=e.onItemClick,o=e.activePath,l=e.level,s=(0,f.Z)(e,E),u=n.items,p=n.label,m=n.collapsible,h=n.className,y=T(n,o),v=(0,i.uR)({initialState:function(){return!!m&&(!y&&n.collapsed)}}),g=v.collapsed,k=v.setCollapsed,Z=v.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,a=e.setCollapsed,o=(0,i.D9)(t);(0,r.useEffect)((function(){t&&!o&&n&&a(!1)}),[t,o,n,a])}({isActive:y,collapsed:g,setCollapsed:k}),r.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":g},h)},r.createElement("a",(0,d.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":m,"menu__link--active":m&&y},t[b]=!m,t)),onClick:m?function(e){e.preventDefault(),Z()}:void 0,href:m?"#":void 0},s),p),r.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},r.createElement(C,{items:u,tabIndex:g?-1:0,onItemClick:a,activePath:o,level:l+1})))}function _(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=e.level,l=(0,f.Z)(e,Z),s=t.href,u=t.label,p=t.className,m=T(t,a);return r.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",p),key:u},r.createElement(h.Z,(0,d.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":m}),"aria-current":m?"page":void 0,to:s},(0,y.Z)(s)&&{onClick:n},l),(0,y.Z)(s)?u:r.createElement("span",null,u,r.createElement(v.Z,null))))}var j="sidebar_1tWv",x="sidebarWithHideableNavbar_3srT",O="sidebarHidden_1xTt",P="sidebarLogo_28Z7",I="menu_1Iah",w="menuWithAnnouncementBar_3acx",B="collapseSidebarButton_3YaP",L="collapseSidebarButtonIcon_V-RG";function M(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",B),onClick:t},r.createElement(p,{className:L}))}function D(e){var t,n,a=e.path,o=e.sidebar,l=e.onCollapse,s=e.isHidden,d=function(){var e=(0,i.nT)().isActive,t=(0,r.useState)(e),n=t[0],a=t[1];return(0,i.RF)((function(t){var n=t.scrollY;e&&a(0===n)}),[e]),e&&n}(),p=(0,i.LU)(),m=p.navbar.hideOnScroll,f=p.hideableSidebar;return r.createElement("div",{className:(0,c.Z)(j,(t={},t[x]=m,t[O]=s,t))},m&&r.createElement(u.Z,{tabIndex:-1,className:P}),r.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",I,(n={},n[w]=d,n))},r.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},r.createElement(C,{items:o,activePath:a,level:1}))),f&&r.createElement(M,{onClick:l}))}var A=function(e){var t=e.toggleSidebar,n=e.sidebar,a=e.path;return r.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},r.createElement(C,{items:n,activePath:a,onItemClick:function(){return t()},level:1}))};function R(e){return r.createElement(i.Cv,{component:A,props:e})}var F=r.memo(D),z=r.memo(R);function W(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(F,e),a&&r.createElement(z,e))}var H=n(2859),U={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},V={Prism:n(7410).default,theme:U};function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function X(){return X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X.apply(this,arguments)}var Y=/\r\n|\r|\n/,J=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},K=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},q=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=X({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=X({},n,{backgroundColor:null}),a};function G(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var Q=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),$(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?q(e.theme,e.language):void 0;return t.themeDict=n})),$(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=X({},G(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?X({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),$(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),$(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=X({},G(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?X({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),$(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,u=t[l],d=n[l][o];if("string"==typeof d?(u=l>0?u:["plain"],s=d):(u=K(u,d.type),d.alias&&(u=K(u,d.alias)),s=d.content),"string"==typeof s){var p=s.split(Y),m=p.length;c.push({types:u,content:p[0]});for(var f=1;f<m;f++)J(c),i.push(c=[]),c.push({types:u,content:p[f]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return J(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),ee=Q;var te=n(2877),ne=n.n(te),re={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},ae=n(7356),oe=function(){var e=(0,i.LU)().prism,t=(0,ae.Z)().isDarkTheme,n=e.theme||re,r=e.darkTheme||n;return t?r:n},le="codeBlockContainer_21wf",ce="codeBlockContent_1izB",ie="codeBlockTitle_3oXa",se="codeBlock_1uaJ",ue="copyButton_3XUZ",de="codeBlockLines_3_dS",pe=/{([\d,-]+)}/,me=["js","jsBlock","jsx","python","html"],fe={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},he=["highlight-next-line","highlight-start","highlight-end"],ye=function(e){void 0===e&&(e=me);var t=e.map((function(e){var t=fe[e],n=t.start,r=t.end;return"(?:"+n+"\\s*("+he.join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")};function ve(e){var t=e.children,n=e.className,a=e.metastring,o=e.title,l=(0,i.LU)().prism,s=(0,r.useState)(!1),u=s[0],p=s[1],f=(0,r.useState)(!1),h=f[0],y=f[1];(0,r.useEffect)((function(){y(!0)}),[]);var v=(0,i.bc)(a)||o,b=(0,r.useRef)(null),g=[],k=oe(),E=Array.isArray(t)?t.join(""):t;if(a&&pe.test(a)){var Z=a.match(pe)[1];g=ne()(Z).filter((function(e){return e>0}))}var T=null==n?void 0:n.split(" ").find((function(e){return e.startsWith("language-")})),C=null==T?void 0:T.replace(/language-/,"");!C&&l.defaultLanguage&&(C=l.defaultLanguage);var S=E.replace(/\n$/,"");if(0===g.length&&void 0!==C){for(var N,_="",j=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return ye(["js","jsBlock"]);case"jsx":case"tsx":return ye(["js","jsBlock","jsx"]);case"html":return ye(["js","jsBlock","html"]);case"python":case"py":return ye(["python"]);default:return ye()}}(C),x=E.replace(/\n$/,"").split("\n"),O=0;O<x.length;){var P=O+1,I=x[O].match(j);if(null!==I){switch(I.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":_+=P+",";break;case"highlight-start":N=P;break;case"highlight-end":_+=N+"-"+(P-1)+","}x.splice(O,1)}else O+=1}g=ne()(_),S=x.join("\n")}var w=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),c=!1;l.rangeCount>0&&(c=l.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}a.remove(),c&&(l.removeAllRanges(),l.addRange(c)),o&&o.focus()}(S),p(!0),setTimeout((function(){return p(!1)}),2e3)};return r.createElement(ee,(0,d.Z)({},V,{key:String(h),theme:k,code:S,language:C}),(function(e){var t=e.className,a=e.style,o=e.tokens,l=e.getLineProps,i=e.getTokenProps;return r.createElement("div",{className:(0,c.Z)(le,null==n?void 0:n.replace(/language-[^ ]+/,""))},v&&r.createElement("div",{style:a,className:ie},v),r.createElement("div",{className:(0,c.Z)(ce,C)},r.createElement("pre",{tabIndex:0,className:(0,c.Z)(t,se,"thin-scrollbar"),style:a},r.createElement("code",{className:de},o.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=l({line:e,key:t});return g.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,d.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,d.Z)({key:t},i({token:e,key:t})))})),r.createElement("br",null))})))),r.createElement("button",{ref:b,type:"button","aria-label":(0,m.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,c.Z)(ue,"clean-btn"),onClick:w},u?r.createElement(m.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(m.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var be=n(6941),ge="details_14Wx";function ke(e){var t=Object.assign({},e);return r.createElement(i.PO,(0,d.Z)({},t,{className:(0,c.Z)("alert alert--info",ge,t.className)}))}var Ee=["mdxType","originalType"];var Ze={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,o=(a.mdxType,a.originalType,(0,f.Z)(a,Ee));return r.createElement(e.props.originalType,o)}return e}(e)}));return r.createElement(H.Z,e,t)},code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(ve,e):r.createElement("code",e)},a:function(e){return r.createElement(h.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(n)&&(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:r.createElement(ve,(0,r.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(ke,(0,d.Z)({},e,{summary:n}),a)},h1:(0,be.Z)("h1"),h2:(0,be.Z)("h2"),h3:(0,be.Z)("h3"),h4:(0,be.Z)("h4"),h5:(0,be.Z)("h5"),h6:(0,be.Z)("h6")},Te=n(4204),Ce="backToTopButton_DkI0",Se="backToTopButtonShow_3KsQ";function Ne(){var e=(0,r.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var _e=function(){var e,t=(0,r.useState)(!1),n=t[0],a=t[1],o=(0,r.useRef)(!1),l=Ne(),s=l.smoothScrollTop,u=l.cancelScrollToTop;return(0,i.RF)((function(e,t){var n=e.scrollY,r=null==t?void 0:t.scrollY;if(r)if(o.current)o.current=!1;else{var l=n<r;if(l||u(),n<300)a(!1);else if(l){var c=document.documentElement.scrollHeight;n+window.innerHeight<c&&a(!0)}else a(!1)}})),(0,i.SL)((function(e){e.location.hash&&(o.current=!0,a(!1))})),r.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",i.kM.common.backToTopButton,Ce,(e={},e[Se]=n,e)),type:"button",onClick:function(){return s()}})},je=n(6775),xe={docPage:"docPage_3zOJ",docMainContainer:"docMainContainer_3Zec",docSidebarContainer:"docSidebarContainer_G8MK",docMainContainerEnhanced:"docMainContainerEnhanced_3hdE",docSidebarContainerHidden:"docSidebarContainerHidden_nSSO",collapsedDocSidebar:"collapsedDocSidebar_1Qfl",expandSidebarButtonIcon:"expandSidebarButtonIcon_1eUB",docItemWrapperEnhanced:"docItemWrapperEnhanced_1NqF"};function Oe(e){var t,n,o,s=e.currentDocRoute,u=e.versionMetadata,d=e.children,f=u.pluginId,h=u.version,y=s.sidebar,v=y?u.docsSidebars[y]:void 0,b=(0,r.useState)(!1),g=b[0],k=b[1],E=(0,r.useState)(!1),Z=E[0],T=E[1],C=(0,r.useCallback)((function(){Z&&T(!1),k((function(e){return!e}))}),[Z]);return r.createElement(l.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadatas:{version:h,tag:(0,i.os)(f,h)}},r.createElement("div",{className:xe.docPage},r.createElement(_e,null),v&&r.createElement("aside",{className:(0,c.Z)(xe.docSidebarContainer,(t={},t[xe.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(xe.docSidebarContainer)&&g&&T(!0)}},r.createElement(W,{key:y,sidebar:v,path:s.path,onCollapse:C,isHidden:Z}),Z&&r.createElement("div",{className:xe.collapsedDocSidebar,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:C,onClick:C},r.createElement(p,{className:xe.expandSidebarButtonIcon}))),r.createElement("main",{className:(0,c.Z)(xe.docMainContainer,(n={},n[xe.docMainContainerEnhanced]=g||!v,n))},r.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",xe.docItemWrapper,(o={},o[xe.docItemWrapperEnhanced]=g,o))},r.createElement(a.Zo,{components:Ze},d)))))}var Pe=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,l=t.find((function(e){return(0,je.LX)(a.pathname,e)}));return l?r.createElement(r.Fragment,null,r.createElement(H.Z,null,r.createElement("html",{className:n.className})),r.createElement(Oe,{currentDocRoute:l,versionMetadata:n},(0,o.Z)(t,{versionMetadata:n}))):r.createElement(Te.default,null)}},6941:function(e,t,n){"use strict";n.d(t,{N:function(){return p},Z:function(){return m}});var r=n(3366),a=n(7462),o=n(7294),l=n(6010),c=n(5999),i=n(7673),s="anchorWithStickyNavbar_1iPN",u="anchorWithHideOnScrollNavbar_10J4",d=["id"],p=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,a.Z)({},t,{id:void 0}),t.children))},m=function(e){return"h1"===e?p:(t=e,function(e){var n,p=e.id,m=(0,r.Z)(e,d),f=(0,i.LU)().navbar.hideOnScroll;return p?o.createElement(t,(0,a.Z)({},m,{className:(0,l.Z)("anchor",(n={},n[u]=f,n[s]=!f,n)),id:p}),m.children,o.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+p,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,m)});var t}},2877:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);