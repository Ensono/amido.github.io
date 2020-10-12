---
id: dependency_management
title: Dependencies and Version Management
sidebar_label: Dependencies and Version Management
hide_table_of_contents: false
---


## Maven - build and dependency management

Java Application uses Maven as a build and dependency management tool.

The following attributes groupId, artifactId, and version uniquely identify every Maven-managed resource in the repository.
These attributes at the top of the file describe your Maven project.

**Dependencies :**

The dependencies section of the POM describes all project's dependencies and versions used by the dependencies.
Installation of maven packages, and the compilation of the application are part of Azure DevOps build pipeline.

**Plugins :**

```text
1)Build Plugins
2)Reporting Plugins
```

**Build Plugins :**

Build plugins will be executed during the build time, and it is configured in the _build_ element.

```text
i) fmt-maven-plugin.
ii) Owasp-dependency-check-plugin.
iii) Spotbug plugin
```

**Reporting Plugins :**

Reporting plugins will be executed during the site generation, and it is configured in the _reporting_ element.

i) Surefire (Unit test reports) - reports created in appropriate directory - target/surefire-reports

**Maven build lifecycle :**
Execute maven build life cycle locally when new dependencies are added to make sure project deployment, project cleaning
and documentations are fine.
