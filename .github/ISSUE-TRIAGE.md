Triaging of issues
------------------

Triage provides an important way to contribute to an open source project. It can be difficult to keep up with issues and assess the validity of contributions.
As a non-maintainer, or a contributor, you can help an open source project by triaging issues.


## What is triaging?

> When patients come into the emergency room, they don't see a doctor immediately, they go to a triage nurse. The nurse knows enough about medical problems to properly assign that person to the doctor that can help them the quickest. Since the doctors are the most limited resource, triage nurses help to assign them as effectively as possible. Triage in open source means looking at open issues and adding useful information for maintainers. While you might not maintain a repository, you can help those who do by diagnosing issues, reviewing pull requests.
> [source: codetriage]

- Describing the issue's intent and purpose is conveyed precisely. This is necessary because it can be difficult for an issue to explain how an end user experiences a problem and what actions they took.
- Giving a contributor/maintainer the information they need before they commit to resolving an issue.
- Lowering the issue count by preventing duplicate issues.
- Streamlining the development process by preventing duplicate discussions.

If you don't have time to contribute or you are not an active maintainer, consider helping with triaging issues. Everyone wins.

## Classify the issue

An issue can have one more [labels](https://github.com/amido/amido.github.io/labels), including:

- One label identifying its kind (`kind/*`).
- One or multiple labels identifying the functional areas of interest (`area/*`).
- One or multiple labels identifying the technical tool/areas in question (`tech/*`).
- One or multiple labels identifying the theme (`theme/*`).
- Where applicable, one label categorizing the effort (`size/*`).


#### Issue kind

| Kind                  | Description                                                                                                |
|-----------------------|------------------------------------------------------------------------------------------------------------|
| kind/bug              | Bugs are bugs. The cause may or may not be known at triage time.                                           |
| kind/enhancement      | Enhancements are not bugs or new features but a request to improve an existing feature                     |
| kind/feature          | Functionality or other elements that the project does not currently support.  Features are new and shiny.  |
| kind/question         | Contains a user or contributor question requiring a response.                                              |
| kind/documentation    | Improvements or additions to documentation                                                                 |
| kind/help             | Ask for help! The more information you provide, the easier we can answer.                                  |


#### Functional area

| Area                      |
|---------------------------|
| area/devops               |
| area/qa                   |
| area/frontend             |
| area/backend              |


#### Technical area

| Tech                      |
|---------------------------|
| tech/azure                |
| tech/dotnet               |
| tech/kubernetes           |
| tech/terraform            |
| tech/docker               |
| tech/typescript           |
| tech/gcp                  |
| tech/aws                  |
| tech/sonarqube            |
| tech/azure-pipelines      |
| tech/azure-aks            |


#### Theme

| Theme                     |
|---------------------------|
| theme/serverless          |
| theme/observability       |
| theme/testing             |
| theme/security            |
| theme/ci-cd               |


#### Effort

| Size             |
|------------------|
| size/XS          |
| size/S           |
| size/M           |
| size/L           |
| size/XL          |
| size/XXL         |


## Prioritising issues
When an issue is raised, it should be [labelled](https://github.com/amido/amido.github.io/labels?utf8=%E2%9C%93&q=priority) with the following labels to indicate the degree of priority (from more urgent to less urgent).

Please note that maintainers an contributors have the right to change the priority based on the issue description and supporting information therefore it's important to triage the issue appropriately. Any changes to priority will be transparent and communicated appropriately.

| Priority    | Description                                                                                                                       |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------|
| priority/P0 | Urgent: Security, critical bugs, blocking issues. P0 basically means drop everything you are doing until this issue is addressed. |
| priority/P1 | Important: P1 issues are a top priority and a must-have for the next release.                                                     |
| priority/P2 | Normal priority: default priority applied.                                                                                        |
| priority/P3 | Best effort: those are nice to have / minor issues.                                                                               |

We anticipate that if any issue does not fit in to the above priorities, then it isn't an issue. Maybe consider raising a feature request instead, we always want to raise the bar.

*************************
Special thanks to the open-source inspirations we've loved and used to form our own documentation:
* [moby](https://github.com/moby/moby/blob/master/project/ISSUE-TRIAGE.md)

[source: codetriage]: https://github.com/codetriage/codetriage
************************
