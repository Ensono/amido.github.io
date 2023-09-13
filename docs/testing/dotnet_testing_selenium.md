---
id: testing_dotnet_selenium
title: UI Browser Automation with Selenium and .NET
sidebar_label: C# - Selenium .NET
description: UI tests with Selenium and .NET
keywords:
  - selenium
  - tests
  - testing
  - ui
  - .Net
  - template
  - example
  - run the tests
  - model
---



## Getting Started

This page explains how to setup a UI testing framework built with C# and Selenium.

### Installing the template

To create a templated solution we can use the <https://www.npmjs.com/package/@amidostacks/scaffolding-cli> npm package.

`npx @amidostacks/scaffolding-cli run -i`

### Installation dependencies

We are using [npx](https://www.npmjs.com/package/npx) (Node Package Executor) to run the [@amidostacks/scaffolding-cli](https://www.npmjs.com/package/@amidostacks/scaffolding-cli).

Please ensure your environment has: [node@12](https://nodejs.org/en/about/releases/).

To download the supported version see [nodejs.org](https://nodejs.org/en/download/).

## Using the template on VSCode

It is recommended to use Visual Studio. Alternatively, VSCode has some custom plugins that can be configured to make debugging your tests easier.

For all downloads, see <https://visualstudio.microsoft.com/>

### Suggested VSCode extensions

* C# for Visual Studio Code (powered by OmniSharp)
* Cucumber (Gherkin) Full Support Extension for VSCode
* NXunit Test Explorer

### Debugging in Visual Studio

Visual Studio will automatically attach to the Selenium process, using the XUnit Runner. Visual Studio also automatically discovers the Xunit tests for the project and displays them in the Test Explorer.

For more information on running and debugging in Visual Studio see: <https://docs.microsoft.com/en-us/visualstudio/test/run-unit-tests-with-test-explorer?view=vs-2019>

It's as simple as following these steps:

1. Open the Solution in Visual Studio
2. Open the test explorer from View > Test
3. Right-click the test you wish to debug, and select Debug Test
![vs_debug](https://amidostacksassets.blob.core.windows.net/docs/assets/debug_visual_studio.gif)
4. Set a breakpoint and start stepping through your code!
![vs_debug_step](https://amidostacksassets.blob.core.windows.net/docs/assets/debug_visual_studio_breakpoint.gif)

## Building the solution

Please ensure you have the [.NET Core 3.1 SDK installed.](https://dotnet.microsoft.com/download)

_MacOS/Linux: For [Homebrew](https://formulae.brew.sh/) users, `brew cask install dotnet-sdk` will install the long term support version._

Please install [Visual Studio Code](https://code.visualstudio.com/) and ensure the extension [C# for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) (powered by OmniSharp) is installed.

### Restore the solution

In root (*.sln) directory, restore the dependencies the solution using: ) the solution:

```bash
dotnet restore
```

### Run the tests

In root (*.sln) directory, build the solution using: ) the solution:

```bash
dotnet test
```

As a result of test execution - a 'BDDfy.html' test report will be automatically generated.

:::info
You don't need to run `dotnet restore` because it's run implicitly by all commands that require a restore to occur, such as dotnet new, dotnet build and dotnet run._
:::

### Dependencies

1. **BDDfy** is a simple and fully featured BDD framework that makes it easy to turn your unit tests into living documentation. It works with any testing framework and test runner.
_Documentation: <https://teststackbddfy.readthedocs.io/en/latest/>_
2. **XUnit** is a free, open-source, community-focused unit testing tool for the .NET Framework. We will be configuring it to be used as a Selenium C# framework for Web UI automation testing.
_Documentation: <https://xunit.net/>_
3. **Selenium C# Framework** is an open-source test automation framework for automated cross-browser testing. It supports popular web browsers – Firefox, Chrome, Microsoft Edge, Internet Explorer, Safari, etc. To interact with the underlying web browser, a collection of language-specific bindings to drive the browser called Selenium WebDriver is used.
_Documentation: <https://www.selenium.dev/>_
4. **Selenium Webdriver** allows for the interaction of the Selenium C# Framework with the web browser. Before you can make use of Selenium WebDriver commands in C#, the development environment should be setup i.e. Selenium WebDriver for the corresponding web browser should be installed on the machine.
_Documentation: <https://www.selenium.dev/projects/>_
5. **Selenium WebDriver ChromeDriver** installs Chrome Driver (Win32, macOS, Linux64) for Selenium WebDriver. The chromedriver executable is not in the solution, but is copied into the output folder on the build process. This allows you to use Chrome as a default browser without having to install locally or in the pipeline, or commit a driver into the test repository.
_Documentation: <https://github.com/jsakamoto/nupkg-selenium-webdriver-chromedriver/>_
6. **Shouldly** is an assertion library. Think of it as the bit that enforces (and tests) the `Then` statement.
_Documentation: <https://shouldly.readthedocs.io/en/latest/>_
7. **Microsoft Extensions Configuration** is a provider used to build key/value-based configuration settings for use in an application. In this instance, builds the app with configured `appsettings.json`.
_Documentation: <https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-3.1>_

### Selenium WebDriver Downloads

If you wish to use a local instance of Selenium Webdriver, be sure to download the Selenium WebDriver file for the browsers with which you wish to perform cross-browser testing from the links mentioned below:

* [Opera](https://github.com/operasoftware/operachromiumdriver/releases)
* [Firefox](https://github.com/mozilla/geckodriver/releases)
* [Chrome](http://chromedriver.chromium.org/downloads)
* [Internet Explorer](https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver)
* [Microsoft Edge](https://blogs.windows.com/msedgedev/2015/07/23/bringing-automated-testing-to-microsoft-edge-through-webdriver/)

## Folder structure

```bash
├── Configuration
├── Selenium
├── Tests
│   ├── Fixtures
│   ├── Stories
│   └── Steps
└── appsettings.json
```

### Configuration

This contains classes used to manage the configuration for the tests.

* `ConfigModel.cs` is a POCO representation of the JSON in `appsettings.json`
* `ConfigAccessor.cs` contains the logic required to obtain the JSON from `appsettings.json` and bind it to the `ConfigModel.cs` object. This allows the configuration to be used as a simple object.

The ConfigAccessor will automatically replace any configuration setting values with the values set in the Environment Variables on the machine running the tests.

E.g. in `appsettings.json` we are using the configuration setting (key-value pair) `"BaseUrl":"http://dev.azure.amidostacks.com/api/menu/"`. If there is an Environment Variable set on the current machine/build agent using `BaseUrl` key, the value in `appsettings.json` will be replaced.

### Selenium

This is the base of how Selenium will interact with your web app.

### Tests

This is the parent folder for all test code.

### Fixtures

`BaseSetup.cs` contains methods for setting up the seleniumWrapper and webdriver instances, and will boot the web app using the configured baseUrl.

To use class fixtures, you need to take the following steps:

* Create the fixture class, and put the startup code in the fixture class constructor.
* If the fixture class needs to perform cleanup, implement IDisposable on the fixture class, and put the cleanup code in the Dispose() method.
* Add `IClassFixture<>` to the test class.
* If the test class needs access to the fixture instance, add it as a constructor argument, and it will be provided automatically.
Here is a simple example:

Fixtures contains xUnit class fixtures. These class fixtures are used to create a test context for the tests. The fixture is where you can put fixture setup (via constructor) and teardown (Via `Dispose()`).

See xUnit documentation for information on different fixtures and how to use them: <https://xunit.net/docs/shared-context>

### Stories

The Stories folder contains all the test cases (I.e. the BDDfy stories). Each class should represent a new test story, and within each class/story, there will be several test cases which test a specific feature.

Test cases within a story are defined using xUnit `Facts`. BDDfy is used to describe and orchestrate the tests.

The solution tags (or annotates) tests as smoke tests using xUnit `Traits`. I.e. `[Trait("Category", "SmokeTest")]`

### Steps

This is where all the step definitions are created.

## Page Object model

We are using as a base the Page Object model, with a strong flavour and inclination towards Page Component-based models.

> Instead, you can use the concept of Page Components. A Page Component represents a specific part of the page that helps the user perform a specific task. A login form, a navigation hierarchy, a search result list, or the details about the current user: all of these would make great Page Components.

This aligns with our Front End implementation approach with React components, and how other testing frameworks are structured (with Cypress, TestCafe).

Documentation: [Page Objects that Suck Less – Tips for writing more maintainable Page Objects](https://johnfergusonsmart.com/page-objects-that-suck-less-tips-for-writing-more-maintainable-page-objects/)

### Locators

We strongly recommend using data attributes for selecting elements. See [Element Recommendations](#element-recommendations) for more information.

ID, ClassName, Name, linkText, XPath and CSS are the six locators which selenium supports to identify the locators on the web page.

For information on tools and tips on how to best use locators, the following articles are very handy:

* [Locators In Selenium WebDriver With Examples](https://www.lambdatest.com/blog/locators-in-selenium-webdriver-with-examples)
* [Locator techniques and tools in selenium](https://medium.com/chaya-thilakumara/locator-techniques-and-tools-in-selenium-eef98d0a45a6)

Please be aware, that that the `Selenium PageFactory` uses the `FindBy` method. Jim Evans who is the main contributor to Selenium states why this might not be the best approach for C# implementation.

 More information: <http://jimevansmusic.blogspot.com/2018/03/deprecating-parts-of-seleniums-net.html>

### Element Locator tools

One of the best methods to test your locator is working is by trying it in the browser first.

1. [Debugging with Developer Console](https://www.lambdatest.com/blog/debugging-javascript-using-the-browsers-developer-console/)
2. [Interacting with the DOM with jQuery](https://api.jquery.com/jQuery/)

### Element recommendations

[Data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) can help identify the elements under test.

### Example

In this example, we show how the edit icon can be referenced by using the data attribute. The data attribute in this instance was created for use with Cypress functional tests. We can easily use this again in Selenium. This way we are using common selectors.

![edit_button](https://amidostacksassets.blob.core.windows.net/docs/assets/data_attribute.png)

```html
<button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary Mui-disabled MuiIconButton-edgeEnd Mui-disabled"
        tabindex="-1" type="button" disabled="" aria-label="edit" data-cy="editMenuItem">
    <span class="MuiIconButton-label">
        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
            <path
                d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z">
            </path>
        </svg>
    </span>
</button>
```

We can interact with this by using the following:

```csharp
public By menus = By.CssSelector("[data-cy='editMenuItem']");
```

## Standalone Implementation

If you wish to simply have a solution that is not tied into the stacks CLI tool then you can clone the frpo from [here](https://github.com/amido/stacks-dotnet-webapp-automation)
