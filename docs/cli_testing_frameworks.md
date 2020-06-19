---
id: cli_testing_frameworks
title: Project Types - Testing
sidebar_label: Project Types - Testing
---

Testing frameworks require a lof of boilerplate. It's also hard to know how to get started without examples. We have a range of Javascript Front End focused opinionated boilerplate testing frameworks that can be boostrapped and tailored to your current project with just one command.

By default, Amido Stacks build a range of testing solutions into the projects. But we understand that users require tests to be seperate from the code. For more testing options and examples, see the other [project types](./scaffolding_cli.md).

Get testing.

## Boostrap your framework

The best way to get started, is boostrap the framework using the scaffolding-cli from Amido Stacks. By using it in interactive mode, you can simply answered 5 questions to get a bespoke framework, ready to go with an example test.

`npx @amidostacks/scaffolding-cli test -i`

### Interactive questions

```txt
✔ Please provide the company name to test for
✔ Please provide the project name to be tested
✔ Select test framework
✔ Please provide test scope (domain)
✔ Select Pipeline Tool
```

### Framework types

<!-- markdownlint-disable -->
|   | **cypress*** | **TestCafe framework with Typescript** | **Selenium framework with .NET** | **jest-sonar*** |
| --- | --- | --- | --- | --- |
|  Framework Type | Acceptance<br/>Functional E2E<br/>Functional API<br/>Component<br/>Accessibility<br/>Visual Regression | Acceptance<br/>Functional E2E<br/>Accessibility | Acceptance<br/>Functional E2E<br/>Functional API | Unit<br/>Component<br/>Integration |
|  Language | Typescript<br/>Optional: Javascript | Typescript<br/>Optional: Javascript | C# | Typescript<br/>Optional: Javascript |
|  Framework | Cypress | TestCafe | Bespoke | Jest |
|  Libraries and Tools | Mocha<br/>Chai<br/>Chai-jQuery<br/>Sinon.JS<br/>Sinon-Chai<br/>Lodash<br/>Minimatch<br/>Moment<br/>Blob<br/>Promise | Axios<br/>TestCafe Assertions<br/>TestCafe API | Microsoft Test SDK<br/>Selenium WebDriver<br/>WebDriver ChromeDriver<br/>Shouldly<br/>BDDfy<br/>xUnit | Jest Snapshot<br/>@testing-library/react |
|  Integrations | Axe<br/>Applitools | Axe<br/>LambdaTest |  | Sonar Scanner |
|  Report(s) | jUnit/xUnit<br/>xunit-viewer (single page HTML)<br/>Mochawesome (rich HTML results with screenshots) | xUnit | BDDfy<br/>xUnit | jUnit/xUnit<br/>Cobertura, lcov (code coverage)<br/>Sonar reporter |
|  Browsers | Used:<br/>Google Chrome<br/><br/>Supported:<br/>Mozilla Firefox<br/>Microsoft Edge<br/>Electron<br/>Brave | Used:<br/>LambdaTest<br/>Google Chrome<br/><br/>Supports:<br/>Internet Explorer (11+)<br/>Microsoft Edge (legacy and Chromium-based)<br/>Mozilla Firefox<br/>Safari | Used:<br/>Google Chrome<br/><br/>Supports:<br/>LambdaTest<br/>Internet Explorer (11+)<br/>Microsoft Edge (legacy and Chromium-based)<br/>Mozilla Firefox<br/>Safari | N/A |
|  Pipeline |  | AzureDevops | AzureDevops |  |
|  Example Test(s) | Yes | Yes | Yes | Yes |
|  Example Data Teardown | N/A (stubbed request) | Yes | Yes | N/A |
|  BDD | Mocha |  | BDDfy | Jasmine |
|  Features | Automatic waiting<br/>In browser<br/>Element selector tool<br/>Spies, stubs , clocks<br/>Real time reloads<br/>Can use the same environment variables as the webapp | Cross browser<br/>Script injection | WebDriver | Render |
|  Screenshots +/- Videos | Yes | Yes | Yes | No |
<!-- markdownlint-restore -->

_\* Currently cannot be bootstrapped from [@amidostacks/scaffolding-cli](https://www.npmjs.com/package/@amidostacks/scaffolding-cli), but is available to clone from the [amido/stacks-webapp-template](https://github.com/amido/stacks-webapp-template) respository._

### Get testing in just five questions

[![asciicast](https://asciinema.org/a/mpqq9MGhE2TsSXtLDhmjZfaDq.svg?t=7)](https://asciinema.org/a/mpqq9MGhE2TsSXtLDhmjZfaDq)


## Get testing

At the end of boostrapping your example framework, you will have an output that will contain all the:

* dependencies
* scripts
* example tests
* pipelines
* environment variables
* and information to start testing immediately

```bash
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

_[Above: Example output from bSelenium framework with .NET output folder structure](./testing_selenium.md#folder-structure)_

You are ready to follow the frameworks README.md and run your first test!

## Customising

Since the frameworks providereal examples on deployed applications, we recommend using these as examples and then replacing them with your own applications under test.

## Feedback

As always, we only improve from the incredible feedback and contributions from people like you. To help us improve, see our contribution guide for more information.
