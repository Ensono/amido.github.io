---
id: publishing
title: Publishing Packages
sidebar_label: Publishing Packages
hide_table_of_contents: false
---


⚠️ IMPORTANT: all packages are versioned and published using
[Lerna](https://lernajs.io), as defined by scripts at the root of the
repository. Please do not version packages manually in their package
directories.

## How to bump the version on a package and publish

1. Make changes and commit them to origin/branch
2. Ensure your `git status` is porcelian
3. On your _local_ machine at the root of the repo (executing the
   [version script](../package.json)): `npm run version`
4. Commit the automatically generated changes
5. Raise a PR to origin/master
6. The CI pipeline will then publish the changes for you

## The registry being used

All of our packages are open-source and can be found under the @amidostacks
organisation on [npm](https://www.npmjs.com/settings/amidostacks/packages).

## Accessing the registry in order to publish

The CI pipeline will publish for you. If you have maintainer access to the
Github repo then you can commit your changes with the version bump, and let the
pipeline do the rest (if it passes all the tests that is).

## Our packages

`stacks-webapp-template` is a [monorepo](../../workloads/frontend/monorepo.md), meaning it is divided
into independent sub-packages.

These packages can be found in the packages/ directory:

```bash
packages/
  elint-config/
  template-cli/
  pact-config
```

## Package registry

All our packages are publicly available from `npm`:
<https://www.npmjs.com/org/amidostacks>

## Package management

We are following in the footsteps of
[create-react-app](https://github.com/facebook/create-react-app) and using
[Lerna](https://lernajs.io) which can be installed using
[npm](https://www.npmjs.com/package/lerna).

Lerna is configured to publish all changes in [packages](../packages) once any
changes have passed the pipeline gates as defined in
`[build/azDevOps/azure](build/azDevOps/azure/)`. Note that it's then up the
consumers of the packages to update their versions as needed.

## Automated package publishing

Lerna is embedded as a step in the [monorepo](../../workloads/frontend/monorepo.md) pipeline. Check out
the pipeline step
`[publish-packages-lerna.yml](./build/azDevOps/azure/templates/steps/publish-packages-lerna.yml)`
for more information on how this is done.

This automates the following process:

1. the version is bumped from the conventional commits `npm run version`
2. `package.json` version is changed
3. the changes are to be merged to master (CHANGELOG.md, version in packages)
4. in the pipeline, this triggers lerna to look for difference in package
   version and the registry
5. if changes are found the packages are published to the configured registry

### Version bumps require manual commit

This is because we think it's up the the developers to ensure that they want to bump the
version, based on their commit history.

### The reasoning behind automated publishing

We think it's good practice to test changes before publishing it to our
[public npm registry](https://www.npmjs.com/settings/amidostacks/packages). so
you know it's free of errors. We only publish from master in the pipeline.

## Versioning

We are versioning as a separate script in order to support publishing from a CI
pipeline, and to automate the creation of changelogs based on the commit
history.

From root, run: `npm run version`

### What `version` does

1. Identifies packages that have been updated since the previous tagged release.
2. Bumps the version based on the Conventional Commits Specification
3. Updates CHANGELOG.md and updates the package.json if needed

The changes are then ready to be committed to the remote.

### Why we use `lerna version --conventional-commits`

> When run with this flag, lerna version will use the Conventional Commits
> Specification to determine the version bump and generate CHANGELOG.md files.
> [2][2]:
> <https://github.com/lerna/lerna/tree/master/commands/version#--conventional-commits>

### Why we use `--no-git-tag-version`

By default, lerna version will commit changes to package.json files and tag the
release. Since we are publishing `from-package` and doing so in the pipeline, we
would rather suggest creating a separate Github release task that would run on
successful Lerna publishing to the registry.

### Why we use `--no-push`

By default, lerna version will push the committed and tagged changes to the
configured git remote. We disable this to ensure that the changelog and version
bumps are obvious on local, and it's up to the develop to commit them to their
working branch.

## Conventional commits

We generate our CHANGELOG.md automagically based on the `git commit`. The
commit itself communicates the **WHAT**, whereas commit message communicates the
**WHY**.

### Definition of a commit

[`git commit`](https://git-scm.com/docs/git-commit) is a git command that is
used to record your changes to the local repository.

### Why we are using Conventional Commits

- Automatically generating CHANGELOGs.
- Automatically determining a semantic version bump (based on the types of
  commits landed).
- Communicating the nature of changes to teammates, the public, and other
  stakeholders.
- Triggering publish processes.
- Making it easier for people to contribute to your projects, by allowing them
  to explore a more structured commit history.

_Source:
<https://www.conventionalcommits.org/en/v1.0.0/#why-use-conventional-commits>_

### How we enforce Conventional Commits

We use pre-commit hooks with [Husky](https://github.com/typicode/husky) and
[commitlint](https://github.com/conventional-changelog/commitlint).

### The commit conventions format

`type(scope?): subject`

Where:

- [`'type'=`](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum)

  ```js
  ;[
    'build',
    'ci',
    'chore',
    'docs',
    'feat',
    'fix',
    'perf',
    'refactor',
    'revert',
    'style',
    'test',
  ]
  ```

- `scope?=` optional, addresses the specific area of change, or feature
- `subject=` why you are making the commit in the first place

Examples: `chore: to run tests on travis ci`

`fix(server): to send cors headers`

`feat(blog): to add comment section`

## Publishing

From root, run: `npm run publish`

### What `publish` does

1. explicitly publish packages where the latest version is not present in the
   registry (from-package).

_Lerna will never publish packages which are marked as private ("private": true
in the package.json)._

### What happens in CI

We check if the package version is up to date with the registry. If it's a head,
then we publish the changes.

### Why we use `lerna publish from-package`

> keyword except the list of packages to publish is determined by inspecting
> each `package.json` and determining if any package version is not present in
> the registry. Any versions not present in the registry will be published. This
> is useful when a previous lerna publish failed to publish all packages to the
> registry. [1]

[1]:
  https://github.com/lerna/lerna/tree/master/commands/publish#bump-from-package

## Lessons learnt with Lerna

We have encountered a lot of issues while using Lerna for versioning and
publishing in a pipeline. Namely the following:

1. Lerna expects master to be unprotected protected and able to push to it -
   <https://github.com/lerna/lerna/issues/1957>
2. When using `from-package` the GitHead SHA needs to be committed POST
   publishing to a registry. This requires the publish task in the pipeline to
   commit this to master.
3. When using `from-package` the Git Tag needs to be committed POST publishing to
   registry. This requires custom tasks for tagging releases.
4. Lerna cannot version or publish in a detached HEAD state, making pipeline
   versioning and publishing really hard.
5. It should probably just be done locally...

## FAQ

Q: What happens if the pipeline fails with error about working tree with uncommitted changes?
A: If you see the following error in the logs on the `Publish: Publish packages using lerna` task:

```log
lerna ERR! EUNCOMMIT Working tree has uncommitted changes, please commit or remove the following changes before continuing:
lerna ERR! EUNCOMMIT  M package-lock.json
```

This could mean that that the monorepo root `package.json` and `package-lock.json` are out of sync on `master` branch. Try deleting the `package-lock.json` and re-installing dependencies, and test then the new lock file.

```bash
stacks-webapp-template $ rm package-lock.json
stacks-webapp-template $ npm install
```
