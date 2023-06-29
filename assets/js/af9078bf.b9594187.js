"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[9666],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2695:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],s={},o=void 0,p={unversionedId:"nx/playwright/visual-regression-deployment",id:"nx/playwright/visual-regression-deployment",isDocsHomePage:!1,title:"visual-regression-deployment",description:"@ensono-stacks/playwright:visual-regression-deployment",source:"@site/docs/nx/playwright/visual-regression-deployment.md",sourceDirName:"nx/playwright",slug:"/nx/playwright/visual-regression-deployment",permalink:"/docs/nx/playwright/visual-regression-deployment",tags:[],version:"current",frontMatter:{}},u=[{value:"@ensono-stacks/playwright:visual-regression-deployment",id:"ensono-stacksplaywrightvisual-regression-deployment",children:[],level:3},{value:"Usage",id:"usage",children:[{value:"Command line arguments",id:"command-line-arguments",children:[],level:3},{value:"Generator Output",id:"generator-output",children:[{value:"Playwright with native visual comparisons",id:"playwright-with-native-visual-comparisons",children:[],level:4},{value:"Playwright with Applitools Eyes",id:"playwright-with-applitools-eyes",children:[],level:4}],level:3}],level:2}],c={toc:u},d="wrapper";function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"ensono-stacksplaywrightvisual-regression-deployment"},"@ensono-stacks/playwright:visual-regression-deployment"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Configure visual regression testing within your deployment pipeline"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"visual-regression-deployment")," generator configures your pipeline to enable visual regression testing either natively, or through a cloud based provider."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nx g @ensono-stacks/playwright:visual-regression-deployment\n")),(0,i.kt)("p",null,"Upon calling the ",(0,i.kt)("em",{parentName:"p"},"visual-regression-deployment")," generator you will be presented with a number of options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What type of visual regression tests would you like to use?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"native"),(0,i.kt)("li",{parentName:"ul"},"applitools")))),(0,i.kt)("p",null,"You should select the type of visual regression tests which you created through the ",(0,i.kt)("a",{parentName:"p",href:"/docs/nx/playwright/ensono-stacks-playwright#ensono-stacksplaywrightvisual-regression"},"@ensono-stacks/playwright:visual-regression")," generator."),(0,i.kt)("h3",{id:"command-line-arguments"},"Command line arguments"),(0,i.kt)("p",null,"The following command line arguments are available:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--type, -t"),(0,i.kt)("td",{parentName:"tr",align:null},"Method used to conduct visual testing"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},'[choices: "native", "applitools"]'),(0,i.kt)("td",{parentName:"tr",align:null},"none")))),(0,i.kt)("h3",{id:"generator-output"},"Generator Output"),(0,i.kt)("h4",{id:"playwright-with-native-visual-comparisons"},"Playwright with native visual comparisons"),(0,i.kt)("p",null,"Opting to scaffold ",(0,i.kt)("strong",{parentName:"p"},"native")," visual testing will make a number of amendments to your test projects configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Generated files"',title:'"Generated','files"':!0},".\n\u251c\u2500\u2500 build\n\u2502   \u251c\u2500\u2500 azDevOps\n\u2502   \u2502   \u251c\u2500\u2500 azuredevops-updatesnapshots.yaml #Pipeline to capture and update baseline images within the CI\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="build/taskctl/tasks.yaml"',title:'"build/taskctl/tasks.yaml"'},'# New update snapshots task definition to update snapshots for all affected projects\ne2e:updatesnapshots:\n    description: Run e2e snapshot updates in ci\n    command:\n      - npx nx affected --base="$BASE_SHA" --target=e2e --parallel=1\n        --skip-nx-cache --update-snapshots --grep @visual-regression\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="taskctl.yaml"',title:'"taskctl.yaml"'},"# Update snapshots task added to taskctl.yaml which can be called by adding a comment to pull requests\nupdatesnapshots:\n    - task: e2e:updatesnapshots\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Visit the ",(0,i.kt)("a",{parentName:"p",href:"../../testing/testing_in_nx/playwright_visual_testing#updating-your-baseline-images"},"Updating your baseline images\u200b")," documentation for further details!"))),(0,i.kt)("h4",{id:"playwright-with-applitools-eyes"},"Playwright with Applitools Eyes"),(0,i.kt)("p",null,"Opting to scaffold visual testing with ",(0,i.kt)("strong",{parentName:"p"},"applitools")," will make a small change your test projects configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="build/azDevOps/azuredevops-stages.yaml"',title:'"build/azDevOps/azuredevops-stages.yaml"'},"- task: AzureCLI@2\n    displayName: build_deployment_${{ parameters.environment }}\n        env:\n            GH_TOKEN: $(GH_TOKEN)\n            APPLITOOLS_API_KEY: $(APPLITOOLS_API_KEY) # API key for applitools api added\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Visit the ",(0,i.kt)("a",{parentName:"p",href:"/docs/testing/testing_in_nx/playwright_visual_testing_applitools_eyes"},(0,i.kt)("inlineCode",{parentName:"a"},"Playwright with Applitools Eyes"))," documentation for further details!")))))}m.isMDXComponent=!0}}]);