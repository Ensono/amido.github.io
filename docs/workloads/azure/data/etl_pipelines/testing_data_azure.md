---
id: testing_data_azure
title: Testing
sidebar_label: Testing
hide_title: false
hide_table_of_contents: false
description: Testing
keywords:
  - testing
---

Data workloads generated in Stacks feature a framework for testing. Automated tests are essential at every stage of a data pipeline for reasons including:

- Early detection of issues: Catch errors and issues early in the data pipeline development process.
- Regression testing: As new code is added, ensure that changes do not introduce regressions or break existing functionality.
- Support CI/CD: Running automated tests are an essential part of the CI/CD process.
- Collaboration: A shared set of expectations and a common framework for testing can help collaboration between developers and end users.

In addition to the automated tests below, Stacks also has a framework for [data quality testing](./data_quality_azure.md).

## Unit tests

Unit tests are implemented throughout the Stacks solution and recommended for all data workloads. Python code is tested using [Pytest](https://docs.pytest.org/en/7.2.x/).

Within a data workload generated through [Datastacks](./datastacks.md), a placeholder for unit tests is found under `tests/unit`. These tests will be executed as part of its Azure DevOps CI/CD pipeline.

Once you have [set up your development environment](../getting_started/dev_quickstart_data_azure.md), you may run unit tests with the following command:

```bash
make test
```

## End-to-end tests

Template end-to-end tests are implemented for data workloads in Stacks. These tests are implemented in a behaviour-driven-development (BDD) style using [behave](https://behave.readthedocs.io/en/stable/).

This framework allows test cases to be written in a natural language style. Data workloads generated through Datastacks will have placeholder end-to-end BDD tests under `tests/end_to_end`. The `.feature` file located here contains the test cases in BDD style. The tests provided perform a number of actions to prepare a test scenario, execute the workload, check the results, and clean up.

Example content of a `.feature` file is shown below:

```text
Feature:Azure Data Ingest
  I want to ingest data
  so that it is available in Azure data lake storage

  Scenario Outline: Data Factory Ingest SQL Database into ADLS with Data Quality
    Given the ADF pipeline Ingest_AzureSql_Example_DQ has been triggered with <parameters>
    And I poll the pipeline every 10 seconds until it has completed
    And the ADF pipeline Ingest_AzureSql_Example_DQ has finished with state Succeeded
    And the ADF pipeline completed in less than 900 seconds
    Then the files <output_files> are present in the ADLS container raw in the directory Ingest_AzureSql_Example

    Examples: Output files
    |parameters|output_files|
    |{"window_start" : "2010-01-01", "window_end": "2010-01-31"}|["movies.keywords", "movies.keywords_dq", "movies.links", "movies.movies_metadata", "movies.movies_metadata_dq", "movies.ratings_small"]|
```

The tests will be executed as part of the workload's Azure DevOps CI/CD pipeline. You may extend or change the test cases dependent on the particular requirements of you workload.

Once you have [set up your development environment](../getting_started/dev_quickstart_data_azure.md), you may run the end-to-end tests with the following command:

```bash
make test
```
