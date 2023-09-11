"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[5613],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,h=p["".concat(o,".").concat(d)]||p[d]||g[d]||s;return n?i.createElement(h,r(r({ref:t},u),{},{components:n})):i.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<s;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var i=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return g}});var i=n(7462),a=n(7294),s=n(2389),r=n(9443);var l=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(9521),c=n(6010),u={tabItem:"tabItem_vU9c"};function p(e){var t,n,i,s=e.lazy,r=e.block,p=e.defaultValue,g=e.values,d=e.groupId,h=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),m=null!=g?g:y.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,o.lx)(m,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===p?p:null!=(t=null!=p?p:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=y[0])?void 0:i.props.value;if(null!==f&&!m.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+m.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),w=b.tabGroupChoices,x=b.setTabGroupChoices,k=(0,a.useState)(f),A=k[0],_=k[1],N=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=w[d];null!=E&&E!==A&&m.some((function(e){return e.value===E}))&&_(E)}var P=function(e){var t=e.currentTarget,n=N.indexOf(t),i=m[n].value;i!==A&&(T(t),_(i),null!=d&&x(d,i))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i=N.indexOf(e.currentTarget)+1;n=N[i]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.currentTarget)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":r},h)},m.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,className:(0,c.Z)("tabs__item",u.tabItem,{"tabs__item--active":A===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:P,onClick:P},null!=n?n:t)}))),s?(0,a.cloneElement)(y.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function g(e){var t=(0,s.Z)();return a.createElement(p,(0,i.Z)({key:String(t)},e))}},9443:function(e,t,n){var i=(0,n(7294).createContext)(void 0);t.Z=i},8453:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return g}});var i=n(7462),a=n(3366),s=(n(7294),n(3905)),r=n(6396),l=n(8215),o=["components"],c={id:"playwright_accessibility_testing",title:"Accessibility Testing with Playwright",sidebar_label:"Accessibility Testing",description:"Accessibility Testing with Playwright using Axe!",keywords:["NX","axe","tests","testing","playwright","accessibility testing"]},u=void 0,p={unversionedId:"testing/testing_in_nx/playwright_accessibility_testing",id:"testing/testing_in_nx/playwright_accessibility_testing",isDocsHomePage:!1,title:"Accessibility Testing with Playwright",description:"Accessibility Testing with Playwright using Axe!",source:"@site/docs/testing/testing_in_nx/playwright_accessibility_testing.md",sourceDirName:"testing/testing_in_nx",slug:"/testing/testing_in_nx/playwright_accessibility_testing",permalink:"/docs/testing/testing_in_nx/playwright_accessibility_testing",tags:[],version:"current",frontMatter:{id:"playwright_accessibility_testing",title:"Accessibility Testing with Playwright",sidebar_label:"Accessibility Testing",description:"Accessibility Testing with Playwright using Axe!",keywords:["NX","axe","tests","testing","playwright","accessibility testing"]},sidebar:"docs",previous:{title:"Testing with playwright",permalink:"/docs/testing/testing_in_nx/testing_with_playwright"},next:{title:"Playwright with Visual Comparisons",permalink:"/docs/testing/testing_in_nx/playwright_visual_testing"}},g=[{value:"Axe: Accessibility testing",id:"axe-accessibility-testing",children:[{value:"Scaffolded Example",id:"scaffolded-example",children:[],level:3},{value:"Running your accessibility tests",id:"running-your-accessibility-tests",children:[],level:3}],level:2},{value:"Viewing your test results",id:"viewing-your-test-results",children:[],level:2}],d={toc:g},h="wrapper";function y(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)(h,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Accessibility testing with Playwright is very simple and ensures that everyone, including those with disabilities or impairments can fully access and use the site or app. It is not only a legal requirement, but also a moral and ethical one, to ensure that digital products are inclusive and usable by all."),(0,s.kt)("h2",{id:"axe-accessibility-testing"},"Axe: Accessibility testing"),(0,s.kt)("p",null,"From the Dequeue family of products, we are using ",(0,s.kt)("a",{parentName:"p",href:"https://www.deque.com/axe/"},"aXe")," for accessibility testing, specifically their Node.js plugin, ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md"},(0,s.kt)("inlineCode",{parentName:"a"},"@axe-core/playwright")),", for integration into the Playwright testing framework."),(0,s.kt)("h3",{id:"scaffolded-example"},"Scaffolded Example"),(0,s.kt)("p",null,"When accessibility tests are scaffolded into your project you will see the following example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="axe-accessibility.spec.ts"',title:'"axe-accessibility.spec.ts"'},"import { test, expect } from '@playwright/test';\nimport AxeBuilder from '@axe-core/playwright';\nimport { prettyPrintAxeReport } from 'axe-result-pretty-print';\n\ntest.describe('NextJs example accessibility tests @accessibility', () => {\n  \n  test('should not have any automatically detectable WCAG A or AA violations', async ({\n    page,\n  }) => {\n    await page.goto('/');\n    await new AxeBuilder({ page })\n      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])\n      .analyze()\n      .then((results) => {\n        prettyPrintAxeReport({\n          violations: results.violations,\n          passes: results.passes,\n        });\n        expect(results.violations,'No violations should be present, see console log').toHaveLength(0)\n      });\n  });\n});\n")),(0,s.kt)("p",null,"Using the AxeBuilder, a chainable API for playwright, we automatically inject axe into all frames. Using the optional ",(0,s.kt)("inlineCode",{parentName:"p"},"withTags()")," function we can specify the WCAG guidelines we want to verify our application conforms to. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"// highlight-next-line\nawait new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze()\n      .then((results) => {\n        prettyPrintAxeReport({\n          violations: results.violations,\n          passes: results.passes,\n        });\n        expect(results.violations,'No violations should be present, see console log').toHaveLength(0)\n      });\n")),(0,s.kt)("p",null,"Upon axe analysis we then pass the results object to the ",(0,s.kt)("inlineCode",{parentName:"p"},"then()")," function. In here we use the axe-result-pretty-print to view the accessibility test results in a readable format."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze()\n      .then((results) => {\n        // highlight-start\n        prettyPrintAxeReport({\n          violations: results.violations,\n          passes: results.passes,\n        });\n        // highlight-end\n        expect(results.violations,'No violations should be present, see console log').toHaveLength(0)\n      });\n")),(0,s.kt)("p",null,"The violations array within the results object detail any elements of the application which have breached the specified/default web content accessibility guidelines. As such, we assert that there are no entries in the array, if there are more than one elements then the test will fail."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze()\n      .then((results) => {\n        // highlight-start\n        prettyPrintAxeReport({\n          violations: results.violations,\n          passes: results.passes,\n        });\n        // highlight-next-line\n        expect(results.violations,'No violations should be present, see console log').toHaveLength(0)\n      });\n")),(0,s.kt)("h3",{id:"running-your-accessibility-tests"},"Running your accessibility tests"),(0,s.kt)("p",null,"We recommend tagging your Playwright accessibility tests so that you can target these specific tests if required. In the below examples we have tagged the tests with ",(0,s.kt)("strong",{parentName:"p"},"@accessibility")," which enables us to target them through ",(0,s.kt)("strong",{parentName:"p"},"grep")," as seen in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/testing/testing_in_nx/testing_with_playwright#run-specific-tests"},"'Run specific tests'")," example"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"grouped",label:"Grouped",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"//multiple tests grouped in a describe block\ntest.describe('Example test group @accessibility', () => {\n           \n   test('accessibility test 1', async ({ page }) => {\n       //test code\n   });\n\n   test('accessibility test 2', async ({ page }) => {\n       //test code\n   });\n}\n"))),(0,s.kt)(l.Z,{value:"individual",label:"Individual",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"test('Example individual test @accessibility', async ({ page }) => {\n   //Accessibility test with AxeBuilder\n});\n")))),(0,s.kt)("h2",{id:"viewing-your-test-results"},"Viewing your test results"),(0,s.kt)("p",null,"Further to the explanation given in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/testing/testing_in_nx/testing_with_playwright#running-your-playwright-tests"},"'Testing with Playwright'")," page, accessibility test results can also be found in the console output post execution."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Sample AXE report"',title:'"Sample',AXE:!0,'report"':!0},"\nPage passed 16 axe rules: aria-allowed-attr, aria-hidden-body, aria-required-attr, aria-roles, aria-valid-attr-value, aria-valid-attr, avoid-inline-spacing, bypass, color-contrast, document-title, duplicate-id-active, duplicate-id, link-name, meta-viewport, nested-interactive, svg-img-alt\nAxe core library found 3 violations\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (index) \u2502                                                description                                                \u2502        id        \u2502        wcag         \u2502  impact   \u2502 nodes \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502    0    \u2502 'Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds' \u2502 'color-contrast' \u2502 'WCAG 2.0 Level AA' \u2502 'serious' \u2502   1   \u2502\n\u2502    1    \u2502                            'Ensures every HTML document has a lang attribute'                             \u2502 'html-has-lang'  \u2502 'WCAG 2.0 Level A'  \u2502 'serious' \u2502   1   \u2502\n\u2502    2    \u2502  'Ensures <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text'  \u2502  'svg-img-alt'   \u2502 'WCAG 2.0 Level A'  \u2502 'serious' \u2502   1   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1. id: 'color-contrast' learn more: https://dequeuniversity.com/rules/axe/4.6/color-contrast?application=playwright\n   name: Elements must have sufficient color contrast\n   description: Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds\n   WCAG: 'WCAG 2.0 Level AA'\n   Affected elements:\n        Selector: \"#love\"Source code: <p id=\"love\">\n\n2. id: 'html-has-lang' learn more: https://dequeuniversity.com/rules/axe/4.6/html-has-lang?application=playwright\n   name: <html> element must have a lang attribute\n   description: Ensures every HTML document has a lang attribute\n   WCAG: 'WCAG 2.0 Level A'\n\n")))}y.isMDXComponent=!0}}]);