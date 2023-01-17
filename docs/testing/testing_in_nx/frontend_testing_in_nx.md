---
id: frontend_testing_in_nx
title: Frontend Testing in an NX monorepo
sidebar_label: Frontend Testing in an NX monorepo
description: Considerations for testing within an NX monorepo
keywords:
  - NX
  - testing
  - COMPLETE-THIS-SECTION
---

Using [NX](https://nx.dev/) provides many benefits when working with SSR or CSR frontend applications. When using stacks to scaffold an NX monorepo (INSERT LINK HERE TO GARETH DOCUMENTATION) you will be provided with several options to assure quality in your development process.


## Getting Started

COMPLETE THIS SECTION WITH INFORMATION ON THE CLI FOR TESTING

### Selecting your test framework
As part of the scaffolding process, you will be presented with the option to scaffold your test framework. We recommend and currently support Playwright within the stacks workflow, with it’s Microsoft backing, extensive feature set and fast cross-browser web automation capability, it is our preferred tooling choice. Cypress is also a powerful testing framework which has a significant user base, as such this is currently road mapped and will be supported in a future release.  

:::tip 

Find out more about testing with [`Playwright`](./playwright_nx.md) using stacks! 

:::



### Accessibility Testing 
<details>
  <summary>Why accessibility test?</summary>
  <div>
  <p>Accessibility testing is a critical aspect of website and application development that ensures that everyone, including those with disabilities or impairments, can fully access and use the site or app. It is not only a legal requirement, but also a moral and ethical one, to ensure that digital products are inclusive and usable by all.</p> 
  <p>This type of testing identifies and addresses any barriers that would make it difficult or impossible for some users to access the site or app, such as poor contrast, small text, or lack of alternative text for images. By catching these issues early in the development process, developers can ensure that their website or application is user-friendly for everyone and compliant with the regulations like WCAG and Section 508 that are legally binding in certain regions.</p>
  <p>Automated accessibility tooling can consistently and efficiently check for accessibility issues across different pages and sections of a website or application and identify potential accessibility issues. Integrating into Continuous Integration/Continuous Deployment (CI/CD) pipelines enables accessibility testing to be performed as part of the development process, ensuring that issues are identified and addressed early on.
  </p>
  </div>
</details>

:::danger 

**UPDATE THIS SECTION AS WE WONT KNOW THE FRAMEWORK**

:::


When scaffolding your application, you will be presented with the following options:
-	Playwright with Axe:
    -	Preconfigures an axe implementation / configuration, axe being the standard toolset in accessibility testing. See Accessibility testing | Playwright for more information using @axe-core/playwright - npm (npmjs.com)
- None:
    -	If you would prefer an alternative to playwright with axe, then the none option allows you to scaffold your project without these libraries being bundled in. 

### Visual Regression Testing


:::danger 

**UPDATE THIS SECTION AS WE WONT KNOW THE FRAMEWORK**

:::


<details>
  <summary>Why visual regression test?</summary>
  <div>
    <p>Visual regression testing is a crucial step in the website and application development process. It ensures that the visual elements of the site or app are functioning correctly and are consistent across different browsers, devices, and screen sizes. This type of testing involves taking screenshots of a website or application, and then comparing them to previous versions or reference screenshots to identify any differences. By catching visual bugs early on in the development process, visual regression testing helps to prevent costly and time-consuming rework, and ensures that the end user has a consistent and polished experience.</p>
    <p>Visual regression testing can be automated which save a lot of time and effort compared to manual testing. Automated visual testing enables the developers to run many test cases in a very short time, which is not possible with manual testing. 
    </p>
  </div>
</details>

Alongside scaffolding your test framework you will be presented with the opportunity to integrate the following into your project:
-	Applitools eyes
    -	A powerful visual regression testing tool that detects visual changes, updates of browsers or OS, and integrates with popular testing frameworks and CI/CD pipelines, making it easy to automate visual regression testing and improve the quality and user-friendliness of digital products. Our community of experts recommend this software as the best approach, to decide if it is right for you, please visit [Applitools Eyes!](https://applitools.com/platform/eyes/)
-	Native with Playwright
    - A free alternative to cloud-based providers which enables developers to perform automated visual regression testing using the latest web platform features, in addition, Playwrights browser support allows you to easily test cross-browser compatibility and identify visual bugs that may only appear on specific browsers or devices. See Visual comparisons | Playwright for more information
-	None
    -	If neither option meets your requirements, or visual regression testing is not something you are considering, then this can be omitted during the scaffolding process. 
