---
id: testcafe_functional_testing
title: Functional Testing with TestCafe
sidebar_label: TestCafe - Functional Testing
description: How to create functional tests with TestCafe 
keywords:
  - TestCafe
  - tests
  - testing
  - functional
  - template
  - example
  - run TestCafe tests
  - TestCafe report
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

[TestCafe](https://devexpress.github.io/testcafe/) is a Node.js end-to-end open source automation tool that is used to test web applications. It can run your tests on any browser without having to download separate drivers for each browser.
It is easy to install, configure and get started without any external libraries or plugins required.

## TestCafe: Functional tests

Templated sample TestCafe automation framework for PROJECT_NAME, bootstrapped using `@amidostacks/scaffolding-cli`.

### Running tests locally

#### Prerequisites

- Ensure that [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) are installed with the versions specified in `./package.json` file.
- Execute the following command to install all dependencies:

```bash
npm install
```

- Configure your browser:

    - Ensure you have at least one browser installed on your operating system e.g. Chrome.
    - Include the browser name  in  the `./.testcaferc.json` file. e.g.:

```text
  "browsers": [
    "chrome:headless",
    "firefox:headless"
  ]
``` 

At the moment, Chrome is set as the default web browser.

To bypass the browser config in the `./.testcaferc.json` config file, simply run passing in the browser arg:

```bash
npm run test:e2e --chrome
```

See [browsers](https://devexpress.github.io/testcafe/documentation/using-testcafe/common-concepts/browsers/) for more information.

- Configure Environment Variables

TestCafe functional tests are configured to run after successful deployment, so environment variables need to be set.

Export the following environment variables.
    - NODE_ENV, 
    - APP_BASE_URL: base url to the environment where the web app is deployed,
    - APP_BASE_PATH: path to main page, 
    - MENU_API_URL: base url to rest api.

#### Example

 <Tabs
   groupId="operating-systems"
   defaultValue="unix"
   values={[
     { label: 'Unix', value: 'unix', },
     { label: 'Windows', value: 'windows', },
   ]
 }>
  <TabItem value="unix">

  ```bash
  export APP_BASE_PATH=/web/stacks
  ```

  </TabItem>
  <TabItem value="windows">

  ```bash
  set APP_BASE_PATH=/web/stacks
  ```

  </TabItem>
 </Tabs>
 
or use the `./.env` file to specify the default values instead of exporting them locally.

### Run Tests

```bash
npm run test:e2e
```

Run tests in a specific browser:

```bash
npm run test:e2e --chrome
```

This should launch TestCafe and run the tests in the browsers specified in `./.testcaferc.json` in the headless mode.


## Running tests in Docker

In order to be able to run these tests across environments and as part of CI, we need to use Docker to run them.

### Build

```bash
npm install
```

### Run

```bash
docker pull testcafe/testcafe:latest
```

```bash
docker run -e APP_BASE_URL=$APP_BASE_URL -e APP_BASE_PATH=$APP_BASE_PATH -e MENU_API_URL=$MENU_API_URL -e NODE_ENV=$NODE_ENV -it -v $(pwd):/tests testcafe/testcafe chromium /**/*.test.cf.ts   
```

## Optional: Running tests with Lambdatest

[Lambdatest](https://www.lambdatest.com) is a cloud-based cross browser testing tool that allows to check the web application functionality and other dependencies across various browsers over the internet.

### Dependencies

An active [Lambdatest](https://accounts.lambdatest.com/dashboard) Account

### Settings

Export [Lambdatest Credentials](https://www.lambdatest.com/support/docs/npm-plugin-for-testcafe-integration-with-lambdatest/) as following: 

 <Tabs
   groupId="operating-systems"
   defaultValue="unix"
   values={[
     { label: 'Unix', value: 'unix', },
     { label: 'Windows', value: 'windows', },
   ]
 }>
  <TabItem value="unix">

  ```bash
  export LT_USERNAME= {your lambdatest username}
  export LT_ACCESS_KEY= {your lambdatest access_key}
  ```

  </TabItem>
  <TabItem value="windows">

  ```bash
  set LT_USERNAME= {your lambdatest username}
  set LT_ACCESS_KEY= {your lambdatest access_key}
  ```

  </TabItem>
 </Tabs>

### Running E2E tests with LambdaTest

```bash
npm run test:e2e -- "lambdatest:IE@11.0:Windows 10"
```

Lambdatest will create a tunnel to run the tests and automatically record videos.
<br />
The full list of browser configuration available can be found by running the following in the root:

```bash
node_modules/.bin/testcafe -b lambdatest
```
