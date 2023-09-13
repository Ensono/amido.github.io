---
id: contentful_integration
title: Contentful Integration
sidebar_label: CMS - Contentful Integration
hide_title: false
hide_table_of_contents: false
description: CMS - Contentful Integration
keywords:
  - rest 
  - api
  - ssr
  - cms
  - integration
  - settings
  - configuration
  - contentful cli
---

## ⚠️ Important 👷‍♀️🚧

> Please note CMS is an optional feature included in the Stacks workspace. To
> turn off CMS please remove the folder ```../src/ssr/pages/cms``` inside
> ssr/pages before building and make sure the tsconfig does not include these
> files.

This implementation showcases NextJS's Static Generation feature using
[Contentful](https://www.contentful.com/) as the data source.

## Tools used

- [Contentful](https://www.contentful.com/)
- [Rich-text-react-renderer](https://www.npmjs.com/package/@contentful/rich-text-react-renderer)
- [NextJS-Pre Rendering](https://nextjs.org/docs/basic-features/pages#pre-rendering)

## Configuration

Create an account and a space on Contentful

1. First,
   [create an account on Contentful](https://www.contentful.com/sign-up/).

2. After creating an account, create a new empty **space** from the
   [dashboard](https://app.contentful.com/)

3. Create the
   **[Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/) -
   access token** field of your API key

4. Create the
   **[Content Preview API](https://www.contentful.com/developers/docs/references/content-preview-api/) -
   preview token** field of your API key

## Using Contentful

### Requirements

- A (free) [Contentful account](https://www.contentful.com/sign-up/)
- Locally
  [installed](https://www.contentful.com/developers/docs/tutorials/cli/installation/)
  contentful-cli
- [Authenticated](https://www.contentful.com/developers/docs/tutorials/cli/authentication/)
  with contentful-cli

See [Contentful](https://www.contentful.com/) for more information.

## Set the default local to en-GB

You can change the local in Contentful, note that default in Contentful is
en-US:

![Contentful Management Token](https://amidostacksassets.blob.core.windows.net/docs/assets/contentful_locales.png)

> Please updated the environment variable
> NEXT_PUBLIC_CONTENTFUL_DEFAULT_LOCALE - ```../src/ssr/environment-configuration/environment-variables.js```
> with the right locale

## Set up the tokens

Get the tokens from your account, ensuring that you have created a new
management access token.

![Contentful Management Token](https://amidostacksassets.blob.core.windows.net/docs/assets/contentful_mt.png)

![Contentful Access Token](https://amidostacksassets.blob.core.windows.net/docs/assets/contentful_access_keys.png)

```bash
export CONTENTFUL_MT= \
export NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN= \
export NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN= \
export NEXT_PUBLIC_CONTENTFUL_SPACE_ID=
```

## Importing content with the Contentful CLI

We have provided an example export of the Blog model used with Amido Stacks,
supporting:

- locals
- translations (en-GB, it-IT)

For an example of how this is used in the Server Side Rendered Webapp, see
[our deployed server side rendered solution](https://app.nonprod.amidostacks.com/web/stacks/blog)

After you have the import CLI tool installed and have configured your
environment, and at the command line:

`contentful space import --content-file contentful-export-amidostacks-example.json --mt $CONTENTFUL_MT --space-id $NEXT_PUBLIC_CONTENTFUL_SPACE_ID`

This will then populate your space with the Stacks blog posts, following the
model, ensuring that you can get going faster.

## Content model

The Stacks Yumido example uses the following content model:

### **Author**

- `name` - **Short text** field
- `picture` - **Media** field

#### **Post**

- `title` - **Text** field (type **short text**)
- `content` - **Rich text** field
- `excerpt` - **Text** field (type **short text, full-text search**)
- `coverImage` - **Media** field (type **one file**)
- `date` - **Date and time** field
- `slug` - **Text** field. You can optionally go to the settings of this field,
  and under **Appearance**, select **Slug** to display it as a slug of the
  `title` field.
- `author` - **Reference** field

![Content model overview](https://amidostacksassets.blob.core.windows.net/docs/assets/content-model-overview.jpg)

### Step 3. Populate content

**Important:** For each entry and asset, you need to click on **Publish**.

## To Run

```bash
npx cross-env NEXT_PUBLIC_CONTENTFUL_SPACE_ID={YOUR_SPACE_ID} \
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN={ACCESS_TOKEN} \
NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN={PREVIEW_TOKEN} \
```

## ⚠️ Important 👷‍♀️

> Locale switcher strictly relies on the route. For example the route has to
> always start with `/blog/posts` and should following slug should always start
> with locale string (if multiple locales are enabled) e.g.
> `blog/posts/it-IT/documentation-demo`.

### References

### [https://next-blog-contentful.now.sh/](https://next-blog-contentful.now.sh/)

---

## Localization and Internationalization

Stacks relies on
[contentful](https://www.contentful.com/developers/docs/tutorials/general/setting-locales/)
to supplies the locales needed for translations.

### For the purposes of demo

- Two locales have been created in Contentful (_en-GB_ and _it-IT_)
  ![Locales](https://amidostacksassets.blob.core.windows.net/docs/assets/locales_contentful.jpg)
- Each post and field entry would contain 2 locales _for eg. slugs are prefixed
  with_ _en-GB_ and _it-IT_.
  ![Field translate](https://amidostacksassets.blob.core.windows.net/docs/assets/i18n_fields.jpg)
- NextJS static page generator builds dynamic pages and paths using the slug
  data.
  ![Build output](https://amidostacksassets.blob.core.windows.net/docs/assets/build_output.jpg)
- Added a language switcher in the blog post pages in the header. The switcher
  will update the URL to relative prefixed path for _eg:
  /posts/it-IT/documentation-demo_ refer the image below
  ![published_blog](https://amidostacksassets.blob.core.windows.net/docs/assets/published_blog.jpg)

---
