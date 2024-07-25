"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[6954],{6993:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=s(4848),i=s(8453),a=s(1470),r=s(9365);const l={id:"playwright_visual_testing_applitools_eyes",title:"Visual Regression Testing with Applitools Eyes",sidebar_label:"Playwright with Applitools Eyes",description:"Visual regression testing with Playwrights and Applitools Eyes",keywords:["NX","axe","tests","testing","playwright","visual","regression","applitools","eyes"]},o=void 0,u={id:"testing/testing_in_nx/playwright_visual_testing_applitools_eyes",title:"Visual Regression Testing with Applitools Eyes",description:"Visual regression testing with Playwrights and Applitools Eyes",source:"@site/docs/testing/testing_in_nx/playwright_visual_testing_applitools.md",sourceDirName:"testing/testing_in_nx",slug:"/testing/testing_in_nx/playwright_visual_testing_applitools_eyes",permalink:"/docs/testing/testing_in_nx/playwright_visual_testing_applitools_eyes",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"playwright_visual_testing_applitools_eyes",title:"Visual Regression Testing with Applitools Eyes",sidebar_label:"Playwright with Applitools Eyes",description:"Visual regression testing with Playwrights and Applitools Eyes",keywords:["NX","axe","tests","testing","playwright","visual","regression","applitools","eyes"]},sidebar:"docs",previous:{title:"Playwright with Visual Comparisons",permalink:"/docs/testing/testing_in_nx/playwright_visual_testing"},next:{title:"Testing with cypress",permalink:"/docs/testing/testing_in_nx/testing_with_cypress"}},c={},p=[{value:"Applitools eyes with Playwright",id:"applitools-eyes-with-playwright",level:2},{value:"Sample tests",id:"sample-tests",level:3},{value:"Running your visual regression tests",id:"running-your-visual-regression-tests",level:2},{value:"Locally",id:"locally",level:3},{value:"CI",id:"ci",level:3},{value:"Viewing your test results and updating baseline images",id:"viewing-your-test-results-and-updating-baseline-images",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Applitools Eyes is a powerful tool that provides a number of benefits over using Playwright's native visual comparison capabilities. Applitools Eyes automatically manages the baseline images for visual tests, making it easy to keep track of changes over time. It also automatically compares screenshots of your website or application, highlighting any differences and making it easy to identify visual bugs."}),"\n",(0,n.jsx)(t.p,{children:"Applitools Eyes supports a wide range of browsers and devices, so you can test your website or application across a greater range of platforms and ensure that it looks and behaves correctly. Additionally, Applitools Eyes provides detailed reports and analytics that can help you identify trends and patterns in your visual testing results, making it easier to understand and fix issues. With Applitools Eyes, teams can work together and identify issues quickly and efficiently."}),"\n",(0,n.jsx)(t.p,{children:"Overall, Applitools Eyes is a more powerful and flexible solution for visual testing and monitoring that can help you catch more visual bugs and improve your development process."}),"\n",(0,n.jsx)(t.h2,{id:"applitools-eyes-with-playwright",children:"Applitools eyes with Playwright"}),"\n",(0,n.jsxs)(t.p,{children:["When scaffolding your application with Applitools Eyes the ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@applitools/eyes-playwright",children:"@applitools/eyes-playwright"})," plugin will be added to your dependency list, additionally the following updates will be applied to the playwright configuration file:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",metastring:'title="playwright.config.ts"',children:"  grepInvert: /.*@visual-regression/,\n  projects: [\n    {\n      name: 'applitools',\n      grep: /.*@visual-regression/,\n      grepInvert: null,\n      retries: 0,\n    },\n    ...\n"})}),"\n",(0,n.jsxs)(t.p,{children:["As playwright executes each test once per project and the ",(0,n.jsx)(t.em,{children:"playwright.config.ts"})," contains multiple project definitions this would result in the visual regression tests being ran multiple times within the Applitools cloud."]}),"\n",(0,n.jsxs)(t.p,{children:["As browser/device requirements are specified within the eyes ",(0,n.jsx)(t.code,{children:"Configuration()"})," object this would result in redundant tests runs, unnecessarily consuming your snapshot allowance. To mitigate this we make use of ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"grep"})})," and ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"grepInvert"})})," to isolate Applitools visual regression tests into their own project with unique configuration."]}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["Tests using Applitools Eyes ",(0,n.jsx)(t.strong,{children:"MUST"})," be tagged with ",(0,n.jsx)(t.strong,{children:"@visual-regression"})," to avoid duplicate test runs"]})}),"\n",(0,n.jsx)(t.h3,{id:"sample-tests",children:"Sample tests"}),"\n",(0,n.jsx)(t.p,{children:"Upon scaffolding your application with Playwright and Applitools eyes a sample test file will also be provided, demonstrating/describing how visual regression tests can be ran on the Applitools Eyes Grid."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",metastring:'title="applitools-eyes-grid.spec.ts"',children:"import { test } from '@playwright/test';\nimport {\n  BatchInfo,\n  Configuration,\n  VisualGridRunner,\n  BrowserType,\n  DeviceName,\n  ScreenOrientation,\n  Eyes,\n  Target,\n} from '@applitools/eyes-playwright';\n\nexport let Batch: BatchInfo;\nexport let Config: Configuration;\nexport let Runner: VisualGridRunner;\n\n// This method sets up the configuration for running visual tests in the Ultrafast Grid.\n// The configuration is shared by all tests in a test suite, so it belongs in a `beforeAll` method.\n// If you have more than one test class, then you should abstract this configuration to avoid duplication.\ntest.beforeAll(async () => {\n  // Concurrency refers to the number of visual checkpoints Applitools will perform in parallel.\n  // Warning: If you have a free account, then concurrency will be limited to 1.\n  Runner = new VisualGridRunner({ testConcurrency: 5 });\n\n  // Create a new batch for tests.\n  // A batch is the collection of visual checkpoints for a test suite.\n  // Batches are displayed in the dashboard, so use meaningful names.\n  Batch = new BatchInfo({\n    name: 'Example: Playwright TypeScript with the Ultrafast Grid',\n  });\n\n  // Create a configuration for Applitools Eyes.\n  Config = new Configuration();\n\n  // Set the batch for the config.\n  Config.setBatch(Batch);\n\n  // Add desktop browsers with different viewports for cross-browser testing in the Ultrafast Grid.\n  Config.addBrowser(1920, 1080, BrowserType.CHROME);\n  // Config.addBrowser(1366, 768, BrowserType.FIREFOX);\n  // Config.addBrowser(3840, 2160, BrowserType.SAFARI);\n\n  // Add mobile emulation devices with different orientations for cross-browser testing in the Ultrafast Grid.\n  Config.addDeviceEmulation(\n    DeviceName.iPhone_11_Pro_Max,\n    ScreenOrientation.LANDSCAPE\n  );\n  // Config.addDeviceEmulation(DeviceName.Galaxy_S22, ScreenOrientation.PORTRAIT);\n});\n\n// This \"describe\" method contains related test cases with per-test setup and cleanup.\n// In this example, there is only one test.\ntest.describe('Applitools-eyes - ultrafast grid - @visual-regression', () => {\n  let eyes: Eyes;\n\n  // This method sets up each test with its own Applitools Eyes object.\n  test.beforeEach(async ({ page }) => {\n    //Navigate to the base page of the NextJs app\n    await page.goto('/');\n    // Create the Applitools Eyes object connected to the VisualGridRunner and set its configuration.\n    eyes = new Eyes(Runner, Config);\n\n    // Open Eyes to start visual testing.\n    // Each test should open its own Eyes for its own snapshots.\n    // It is a recommended practice to set all four inputs below:\n    await eyes.open(\n      page, // The Playwright page object to \"watch\"\n      'next-js-app', // The name of the app under test\n      test.info().title, // The name of the test case\n      { width: 1920, height: 1080 } // The viewport size for the local browser\n    );\n  });\n\n  // This test performs a simple visual regression test, capturing/comparing a screenshot of the full window.\n  // If the page ever changes, then Applitools will detect the changes and highlight them in the dashboard.\n  test('Check the main page', async () => {\n    // This snapshot uses STRICT match level to verify that the page content matches the baseline image closely enough that the human eye would not see any difference.\n    await eyes.check('Main page', Target.window().fully().strict());\n  });\n\n  test.afterEach(async () => {\n    // Close Eyes to tell the server it should display the results.\n    await eyes.close();\n  });\n});\n\ntest.afterAll(async () => {\n  // Close the batch and report visual differences to the console.\n  // Note that it forces Playwright to wait synchronously for all visual checkpoints to complete.\n  // If any visual regressions are detected, the playwright test will fail\n  const results = await Runner.getAllTestResults();\n  console.log('Visual test results', results);\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"running-your-visual-regression-tests",children:"Running your visual regression tests"}),"\n",(0,n.jsxs)(t.p,{children:["As a prerequisite to running Applitools Eyes tests, the API key must be set. The API key can be found by following ",(0,n.jsx)(t.a,{href:"https://applitools.com/docs/topics/overview/obtain-api-key.html",children:"'How to retrieve your API key'"})," guide."]}),"\n",(0,n.jsx)(t.h3,{id:"locally",children:"Locally"}),"\n",(0,n.jsxs)(t.p,{children:["As mentioned ",(0,n.jsx)(t.a,{href:"#applitools-eyes-with-playwright",children:"above"}),", Applitools Eyes tests should be tagged with ",(0,n.jsx)(t.strong,{children:"@visual-regression"})," to ensure that we do not accidentally duplicate test runs, this also enables us to target these tests through ",(0,n.jsx)(t.strong,{children:"grep"})," as seen in the ",(0,n.jsx)(t.a,{href:"/docs/testing/testing_in_nx/testing_with_playwright#run-specific-tests",children:"'Run specific tests'"})," example."]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(r.A,{value:"grouped",label:"Grouped",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"//multiple tests grouped in a describe block\ntest.describe('Applitools-eyes - ultrafast grid - @visual-regression', () => {   \n   test('visual test 1', async ({ page }) => {\n       //test code\n   });\n\n   test('visual test 2', async ({ page }) => {\n       //test code\n   });\n}\n"})})}),(0,n.jsx)(r.A,{value:"individual",label:"Individual",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"test('Example applitools eyes test @visual-regression', async ({ page }) => {\n   //test code\n});\n"})})})]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["You must set your runner key API before running Applitools Eyes tests locally by following ",(0,n.jsx)(t.a,{href:"https://help.applitools.com/hc/en-us/articles/360006914732-The-runner-key-API-Key-",children:"this guide"}),".\nIt is recommended to restart your machine to ensure that environment variable changes are registered!"]})}),"\n",(0,n.jsx)(t.h3,{id:"ci",children:"CI"}),"\n",(0,n.jsx)(t.p,{children:"Using the preconfigured pipelines your playwright visual comparison tests will be ran automatically as part of the deployment process (As long as the API key has been set as an environment variable in the CI)."}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Visit the ",(0,n.jsx)(t.a,{href:"/docs/testing/testing_in_nx/testing_with_playwright#output-in-ci",children:"CI docs"})," for more information"]})}),"\n",(0,n.jsx)(t.h2,{id:"viewing-your-test-results-and-updating-baseline-images",children:"Viewing your test results and updating baseline images"}),"\n",(0,n.jsxs)(t.p,{children:["Similar to ",(0,n.jsx)(t.a,{href:"/docs/testing/testing_in_nx/testing_with_playwright#viewing-your-test-results",children:"viewing your test results"})," for standard tests, Applitools Eyes will also output test results to the console in the following format:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"Visual test results TestResultsSummaryData {\n  _summary: {\n    results: [ [Object], [Object] ],\n    passed: 2,\n    unresolved: 0,\n    failed: 0,\n    exceptions: 0,\n    mismatches: 0,\n    missing: 0,\n    matches: 2\n  },\n  _deleteTest: [Function: deleteTest]\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"If any test failures occur you should see the following message, allowing you to review the test failure and either accept or reject the difference(s) by navigating to the provided URL:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"Error: Test 'Check the main page' of 'next-js-app' detected differences! See details at: https://eyes.applitools.com/app/batches/XXXXXXXXXXXXXXXXXXXX/XXXXXXXXXXXXXXXXXXXX?accountId=XXXXXXXXXXXXXXXXXXXXX\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Take a look at '",(0,n.jsx)(t.a,{href:"https://applitools.com/docs/topics/overview/overview-reviewing-test-results.html",children:"Reviewing test results and updating the baseline"}),"' for a detailed guide."]})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},9365:(e,t,s)=>{s.d(t,{A:()=>r});s(6540);var n=s(4164);const i={tabItem:"tabItem_Ymn6"};var a=s(4848);function r(e){let{children:t,hidden:s,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,r),hidden:s,children:t})}},1470:(e,t,s)=>{s.d(t,{A:()=>j});var n=s(6540),i=s(4164),a=s(3104),r=s(6347),l=s(205),o=s(7485),u=s(1682),c=s(679);function p(e){var t,s;return null!=(t=null==(s=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:s.filter(Boolean))?t:[]}function h(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:function(e){return p(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:i}}=e;return{value:t,label:s,attributes:n,default:i}}))}(s);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,s])}function d(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:s}=e;const i=(0,r.W6)(),a=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:t,groupId:s});return[(0,o.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function y(e){const{defaultValue:t,queryString:s=!1,groupId:i}=e,a=h(e),[r,o]=(0,n.useState)((()=>function(e){var t;let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!d({value:s,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+s+'" but none of its children has the corresponding value. Available values are: '+n.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return s}const i=null!=(t=n.find((e=>e.default)))?t:n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:a}))),[u,p]=g({queryString:s,groupId:i}),[y,f]=function(e){let{groupId:t}=e;const s=function(e){return e?"docusaurus.tab."+e:null}(t),[i,a]=(0,c.Dv)(s);return[i,(0,n.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:i}),m=(()=>{const e=null!=u?u:y;return d({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{m&&o(m)}),[m]);return{selectedValue:r,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);o(e),p(e),f(e)}),[p,f,a]),tabValues:a}}var f=s(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=s(4848);function v(e){let{className:t,block:s,selectedValue:n,selectValue:r,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const t=e.currentTarget,s=o.indexOf(t),i=l[s].value;i!==n&&(u(t),r(i))},p=e=>{var t;let s=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var n;const t=o.indexOf(e.currentTarget)+1;s=null!=(n=o[t])?n:o[0];break}case"ArrowLeft":{var i;const t=o.indexOf(e.currentTarget)-1;s=null!=(i=o[t])?i:o[o.length-1];break}}null==(t=s)||t.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":s},t),children:l.map((e=>{let{value:t,label:s,attributes:a}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:p,onClick:c,...a,className:(0,i.A)("tabs__item",m.tabItem,null==a?void 0:a.className,{"tabs__item--active":n===t}),children:null!=s?s:t},t)}))})}function b(e){let{lazy:t,children:s,selectedValue:i}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function x(e){const t=y(e);return(0,w.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,w.jsx)(v,{...t,...e}),(0,w.jsx)(b,{...t,...e})]})}function j(e){const t=(0,f.A)();return(0,w.jsx)(x,{...e,children:p(e.children)},String(t))}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>l});var n=s(6540);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);