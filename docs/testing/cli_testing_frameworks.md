---
id: cli_testing_frameworks
title: Stacks Testing Frameworks
sidebar_label: Stacks Testing Frameworks
description: Bootstrap your framework using the cli testing frameworks
keywords:
  - bootstrap
  - framework
  - testing
  - example
  - cli
---

import HideNavigation  from "../../src/pages/HideNavigation";

Building testing frameworks from scratch requires a lot of boilerplate code. It is also hard to know how to get started without examples.

As part of the Amido Stacks projects we have developed a range of testing frameworks for each part of our solutions that are already built in, which can be bootstrapped and tailored to your current project with just one command.
 In addition they also exist as standalone solutions that can be run cloned and run without the need to build the entire solution can can be modified to applications and workloads outside of stacks.

## Bootstrap your framework

The best way to get started, is bootstrapping the framework using the scaffolding-cli from Amido Stacks. By using it in interactive mode, you can simply answer 5 questions to get a bespoke framework, ready to go with an example test.

```bash
npx @amidostacks/scaffolding-cli test -i
```

### Interactive questions

```txt
✔ Select test framework
✔ Please provide the company name to test for
✔ Please provide the project name to be tested
✔ Please provide test scope (domain)
✔ Select Pipeline Tool
```

### Framework types

<!-- markdownlint-disable -->
|  | cypress* | Typescript - TestCafe | C# - Selenium | Java - Serenity | jest-sonar* |
|:-:|:-:|:-:|:-:|:-:|:-:|
| Framework Type | Acceptance Functional E2E Functional API Component Accessibility Visual Regression | Acceptance Functional E2E Accessibility | Acceptance Functional E2E | Acceptance Functional E2E | Unit  Component  Integration |
| Language | Typescript Optional: Javascript | Typescript Optional: Javascript | C# | Java | Typescript  Optional: Javascript |
| Framework | Cypress | TestCafe | Bespoke | Serenity | Jest |
| Libraries and Tools | Mocha Chai Chai-jQuery Sinon.JS Sinon-Chai Lodash Minimatch Moment Blob Promise | Axios TestCafe Assertions TestCafe API | Microsoft Test SDK Selenium WebDriver ChromeDriver Shouldly BDDfy xUnit | Java SDK Selenium WebDriver ChromeDriver Serenity JUnit | Jest Snapshot  @testing-library/react |
| Integrations | Axe Applitools | Axe LambdaTest |  |  | Sonar Scanner |
| Report(s) | jUnit/xUnit xunit-viewer (single page HTML) Mochawesome (rich HTML results with screenshots) | xUnit | BDDfy xUnit | Serenity reports | jUnit/xUnit  Cobertura, lcov (code coverage)  Sonar reporter |
| Browsers | Used: Google Chrome  Supported: Mozilla Firefox Microsoft Edge Electron Brave | Used: LambdaTest Google Chrome  Supports: Internet Explorer (11+) Microsoft Edge (legacy and Chromium-based) Mozilla Firefox Safari | Used: Google Chrome  Supports: LambdaTest Internet Explorer (11+) Microsoft Edge (legacy and Chromium-based) Mozilla Firefox Safari | Used: Google Chrome  Supports: Internet Explorer (11+) Microsoft Edge (legacy and Chromium-based) Mozilla Firefox | N/A |
| Pipeline |  | AzureDevops | AzureDevops | AzureDevops |  |
| Example Test(s) | Yes | Yes | Yes | Yes | Yes |
| Example Data Teardown | N/A (stubbed request) | Yes | Yes | Yes | N/A |
| BDD | Mocha |  | BDDfy | Serenity | Jasmine |
| Features | Automatic waiting In browser Element selector tool Spies, stubs , clocks Real time reloads Can use the same environment variables as the webapp | Cross browser Script injection | WebDriver | WebDriver Multi-thread test execution Enhanced reporting | Render |
| Screenshots +/- Videos | Yes | Yes | Yes | Yes | No |
<!-- markdownlint-restore -->

_\* Currently cannot be bootstrapped from [@amidostacks/scaffolding-cli](https://www.npmjs.com/package/@amidostacks/scaffolding-cli), but is available to clone from the [amido/stacks-webapp-template](https://github.com/amido/stacks-webapp-template) repository._

### Get testing in just five questions

[![asciicast](https://asciinema.org/a/mpqq9MGhE2TsSXtLDhmjZfaDq.svg?t=7)](https://asciinema.org/a/mpqq9MGhE2TsSXtLDhmjZfaDq)

## Get testing

At the end of bootstrapping your example framework, you will have an output that will contain all the:

* Dependencies
* Scripts
* Example tests
* Pipelines
* Environment variables
* ...and information to start testing immediately

```text title="Example output from Selenium framework with .NET output folder structure"
├── Api
│   └── Builders
│       └── Http
│           ├── HttpRequestBuilder.cs
│           └── HttpRequestFactory.cs
├── Company.Project.E2E.Selenium.csproj
├── Company.Project.E2E.Selenium.sln
├── Configuration
│   ├── ConfigAccessor.cs
│   └── ConfigModel.cs
├── README.md
├── Selenium
│   ├── Components
│   │   ├── CreateForm.cs
│   │   ├── Header.cs
│   │   ├── MenuList.cs
│   │   └── Notifier.cs
│   ├── Factory
│   │   └── RemoteWebDriverFactory.cs
│   │   └── WebDriverFactory.cs
│   ├── Pages
│   │   └── PageObject.cs
│   └── SeleniumWrapper.cs
├── Tests
│   ├── Fixtures
│   │   └── BaseSetup.cs
│   ├── Steps
│   │   └── CreateMenu.cs
│   └── Stories
│       └── GetMenuExampleTests.cs
└── appsettings.json
```

You are ready to follow the frameworks README.md and run your first test!

## Customising

Since the frameworks provide real examples on deployed applications, we recommend using these as examples and then replacing them with your own applications under test.

## Feedback

As always, we only improve from the incredible feedback and contributions from people like you. To help us improve, see our contribution guide for more information.

<HideNavigation prev />
