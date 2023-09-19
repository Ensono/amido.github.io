# Ensono Stacks Documentation Microsite
This repository contains the documentation for the Ensono Stacks platform.
The live site is hosted at [https://stacks.ensono.com](https://stacks.ensono.com).

This microsite is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.
You can view their documentation [here](https://v2.docusaurus.io/docs/).

## Making changes
To make changes to the documentation, you will need to clone this repository and run the following commands to install the dependencies and start the development server.

```console
npm install
npm run start
```
You can then edit the relevant markdown files in the `docs` folder and the site will automatically update.
Once you are happy with your changes, you can commit them to a new branch and open a pull request.

## Search functionality
The search functionality is using (Algolia DocSearch)[https://docusaurus.io/docs/search#using-algolia-docsearch] and the search component has been swizzle (It is in src/theme/SearchBar.js) because the version of docusaurus is using an old infrastructure so the search bar is not able to search anything in the documentation. It is using @docsearch/react which is the new infrastructure. 

AppId, indexName and apiKey is needed to get the search functionality working, and this data is in the dashboard.

The dashboard for Algolia - an overview of the search (https://dashboard.algolia.com/)
Configure the Algolia Crawler - https://crawler.algolia.com/ 

The login email is `stacks@ensono.com`

### Stacks Repositories
These are the repositories that make up the Stacks platform:
- [Stacks Webapp Template](https://github.com/Ensono/stacks-webapp-template)
- [Stacks .NET](https://github.com/Ensono/stacks-dotnet)
- [Stacks Java](https://github.com/Ensono/stacks-java)
- [Stacks Java with CQRS](https://github.com/Ensono/stacks-java-cqrs)
- [Stacks Java with CQRS and Events](https://github.com/Ensono/stacks-java-cqrs-events)
- [Stacks Frontend](https://github.com/Ensono/stacks-nx-plugins)
- [Stacks Pipeline Templates](https://github.com/Ensono/stacks-pipeline-templates)
- [Stacks Terraform](https://github.com/Ensono/stacks-terraform)
- [Stacks Azure Infrastructure](https://github.com/Ensono/stacks-infrastructure-aks)
- [Stacks Azure Data Platform](https://github.com/Ensono/stacks-azure-data)

### Packages
- [NuGet](https://www.nuget.org/profiles/amidostacks)
- [npm](https://www.npmjs.com/~ensonostacks)

### Images
- [Docker images](https://hub.docker.com/u/amidostacks)
