---
id: testing_the_api_netcore
title: Testing the .NetCore Rest API
sidebar_label: Testing the API3
hide_title: true
hide_table_of_contents: false
---

## Testing the application

<br />

### Running Tests

Tests within the code are grouped using Tag annotations. There are three groups: 'Unit', 'Component' and 'Integration'. To just run the unit tests, for example, type:

```bash
./mvnw test -Dgroups="Unit"
```

Similarly, for the Component tests, you should use:

```bash
./mvnw test -Dgroups="Component"
```

and the equivalent for running the Integration tests.

<br />

### Reports

#### Test reports

A test report may be created from the `test` package in Java using the Surefire Plugin.
The report file (as either XML or HTML) generated for each of the test classes can be found under `<PROJECT-NAME>/target/surefire-reports`.

Run the following command to create the report:

```bash
./mvnw surefire:test
```

To generate the Serenity report:

```bash
./mvnw clean verify
```

The report can be viewed under `<PROJECT-NAME>/api-tests/target/site/serenity/index.html`.

#### Code coverage and dependency check reports

Run the following command:

```bash
./mvnw jacoco:report
```

The generated report can be viewed under `<PROJECT-NAME>/target/site/jacoco/index.html`.

For the dependency checker report, run:

```bash
./mvnw clean install -Powasp-dependency-check
```

The generated report can be viewed under `<PROJECT-NAME>/target/dependency-check.html`.

#### Mutation testing

PIT mutation testing is used to generate mutation tests (see <https://pitest.org/> for details).
The mutation coverage goal analyses all classes in the codebase that match the target tests and target class filters.
To run it:

```bash
./mvnw org.pitest:pitest-maven:mutationCoverage
```

The generated report can be viewed under – `<PROJECT-NAME>/target/pit-reports/YYYYMMDDHHMI`

<br />

### Running API tests

Set an environment variable `BASE_URL` (e.g. if testing locally set it to <http://localhost:9000>)

From project path `<>PROJECT-NAME>/api-tests` to run all tests, use

```bash
./mvnw clean verify
```

To run the Smoke tests independently, use

```bash
mvn clean verify -Dcucumber.options="--tags @Smoke"
```

and to run the Functional tests independently, use

```bash
mvn clean verify -Dcucumber.options="--tags @Functional"
```
