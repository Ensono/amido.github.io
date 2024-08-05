---
id: example_data_source
title: Example Data Source
sidebar_label: 5. Example Data Source
hide_title: false
hide_table_of_contents: false
description: Setting up and using the example data source
keywords:
  - data
  - sql
  - azure
  - testing
---

When deploying an Ensono Stacks Data Platform, an Azure SQL database will be deployed. This database is intended to be used for experimenting and testing ingest processes within the platform. The database will be deployed into the same resource groups as the core data platform resources, named for example:

* **SQL server name:** amidostacksdeveuwdesql.database.windows.net
* **SQL database name:** sqldbtest

:::note Accessing the Azure SQL database

When the sample Azure SQL database is deployed, by default it will create an admin user (`mssqladmin`). A password for this user will be randomly generated and added to key vault secrets under `sql-password`.

By default the SQL server and database will not be accessible outside of the virtual network into which the data platform has been deployed. If you wish to access the SQL server from another network (for example when testing in a non-sensitive environment) you may do this by adding a firewall rule - see [Azure SQL firewall documentation](https://learn.microsoft.com/en-us/azure/azure-sql/database/firewall-configure?view=azuresql#create-and-manage-ip-firewall-rules).

If using the database for anything more than local testing, it is recommended that you configure the database with additional users with more restrictive access.

:::

## Example dataset

The database can be populated with any dataset you wish for developing and testing Ensono Stacks.

The examples contained in the Getting Started documentation are based around populating the sample database with data
from [The Movies Dataset from Kaggle](https://www.kaggle.com/datasets/rounakbanik/the-movies-dataset), which contains metadata and ratings for approximately 45,000 movies released
on or before July 2017. These CSV files were loaded into the following tables in the example database:

* `movies.credits`
* `movies.keywords`
* `movies.links`
* `movies.links_small`
* `movies.movies_metadata`
* `movies.ratings`
* `movies.ratings_small`

Refer to official Microsoft documentation for steps on loading data from CSV into an Azure SQL database. The DDL for the tables created is provided below. Please note, the database schema design has not been fully optimised for the dataset - this is intentional, to give further opportunity for testing data transformation and quality checks in the platform.

### Movies dataset tables DDL

```sql
CREATE TABLE [movies].[credits](
	[cast] [nvarchar](max) NOT NULL,
	[crew] [nvarchar](max) NOT NULL,
	[id] [int] NOT NULL
)
GO
CREATE TABLE [movies].[keywords](
	[id] [int] NOT NULL,
	[keywords] [nvarchar](max) NOT NULL
)
GO
CREATE TABLE [movies].[links](
	[movieId] [int] NOT NULL,
	[imdbId] [int] NOT NULL,
	[tmdbId] [int] NULL
)
GO
CREATE TABLE [movies].[links_small](
	[movieId] [int] NOT NULL,
	[imdbId] [int] NOT NULL,
	[tmdbId] [int] NULL
)
GO
CREATE TABLE [movies].[movies_metadata](
	[adult] [nvarchar](1000) NOT NULL,
	[belongs_to_collection] [nvarchar](1000) NULL,
	[budget] [nvarchar](1000) NOT NULL,
	[genres] [nvarchar](1000) NULL,
	[homepage] [nvarchar](1000) NULL,
	[id] [nvarchar](1000) NOT NULL,
	[imdb_id] [nvarchar](1000) NULL,
	[original_language] [nvarchar](1000) NULL,
	[original_title] [nvarchar](1000) NULL,
	[overview] [nvarchar](1000) NULL,
	[popularity] [nvarchar](1000) NULL,
	[poster_path] [nvarchar](1000) NULL,
	[production_companies] [nvarchar](max) NULL,
	[production_countries] [nvarchar](max) NULL,
	[release_date] [nvarchar](1000) NULL,
	[revenue] [bigint] NULL,
	[runtime] [nvarchar](1000) NULL,
	[spoken_languages] [nvarchar](1000) NULL,
	[status] [nvarchar](1000) NULL,
	[tagline] [nvarchar](1000) NULL,
	[title] [nvarchar](1000) NULL,
	[video] [nvarchar](1000) NULL,
	[vote_average] [nvarchar](1000) NULL,
	[vote_count] [smallint] NULL
)
GO
CREATE TABLE [movies].[ratings](
	[userId] [int] NOT NULL,
	[movieId] [int] NOT NULL,
	[rating] [nvarchar](50) NOT NULL,
	[timestamp] [int] NOT NULL
)
GO
CREATE TABLE [movies].[ratings_small](
	[userId] [int] NOT NULL,
	[movieId] [int] NOT NULL,
	[rating] [nvarchar](50) NOT NULL,
	[timestamp] [int] NOT NULL
)
GO
```
