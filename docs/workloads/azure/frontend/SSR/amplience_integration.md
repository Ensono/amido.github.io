---
id: amplience_integration
title: Amplience Integration
sidebar_label: CMS - Amplience Integration
hide_title: false
hide_table_of_contents: false
description: CMS - Amplience Integration
keywords:
- rest
- api
- ssr
- cms
- integration
- settings
- configuration
- amplience
---

## ⚠️ Important 👷‍♀️🚧

> Please note CMS is an optional feature included in the Stacks workspace. To
> turn off CMS please remove the folder ```../src/ssr/pages/cms``` inside
> ssr/pages before building and make sure the tsconfig does not include these
> files.

This implementation showcases NextJS's Static Generation feature using
[Amplience](https://www.amplience.com/) as the data source.

## Tools used

- [Amplience](https://www.amplience.com/)
- [DC Delivery SDK](https://www.npmjs.com/package/dc-delivery-sdk-js)
- [Algolia Search](https://www.npmjs.com/package/algoliasearch)
- [NextJS-Pre Rendering](https://nextjs.org/docs/basic-features/pages#pre-rendering)

## Configuration

1. Request an Amplience account from Amplience support.

2. Request Search Indexes be enabled on your Amplience account.

3. Make a note of your hub name

## Using Amplience

## Create Content Type Schemas

Content Type schemas describe the data structures used in Amplience. These can be hosted externally from Amplience, or created within.

Content Types (to not be confused with Content Type Schemas) are implementations of Content Type Schemas. So if you had a Content Type Schema that described an element such as a blog post, you could re-use that Schema in multiple Content Types, for different kinds of blog post perhaps.

Below are the Content Type Schemas we use for Stacks

### **Blog Image**

```json5
{
	"$schema": "http://json-schema.org/draft-07/schema#",
	"$id": "https://example.amido/blog-image",

"title": "Image",
  "description": "Image schema",
  "allOf": [
    {
      "$ref": "http://bigcontent.io/cms/schema/v1/core#/definitions/content"
    }
  ],
  "type": "object",
  "properties": {
    "image": {
      "title": "Image",
      "description": "insert an image",
      "type": "object",
      "anyOf": [
        {
          "$ref": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
        }
      ]
    },
    "altText": {
      "type": "string",
      "minLength": 1,
      "maxLength": 150,
      "title": "Alt text",
      "description": "insert image alt text"
    }
  },
  "propertyOrder": ["image", "altText"],
  "required": ["image", "altText"]
}
```

### **Blog Text**

```json5
{
	"$schema": "http://json-schema.org/draft-07/schema#",
	"$id": "https://example.amido/blog-text",
  "title": "Text",
  "description": "Text schema",
  "allOf": [
    {
      "$ref": "http://bigcontent.io/cms/schema/v1/core#/definitions/content"
    }
  ],
  "type": "object",
  "properties": {
    "text": {
      "type": "string",
      "format": "markdown",
      "title": "Text",
      "description": "",
      "minLength": 1,
      "maxLength": 30000
    }
  },
  "propertyOrder": ["text"],
  "required": ["text"]
}
```

### **Blog Author**

```json5
{
	"$schema": "http://json-schema.org/draft-07/schema#",
	"$id": "https://example.amido/blog-author",

  "title": "Author",
  "description": "Author schema",
  "allOf": [
    {
      "$ref": "http://bigcontent.io/cms/schema/v1/core#/definitions/content"
    }
  ],
  "type": "object",
  "properties": {
    "name": {
      "title": "Author name",
      "description": "Name of the author",
      "type": "string",
      "minLength": 1,
      "maxLength": 100
    },
    "avatar": {
      "title": "Avatar",
      "description": "The author's avatar",
      "type": "object",
      "allOf": [
        {
          "$ref": "http://bigcontent.io/cms/schema/v1/core#/definitions/content-link"
        },
        {
          "properties": {
            "contentType": {
              "title": "image",
              "enum": ["https://example.amido/blog-image"]
            }
          }
        }
      ]
    }
  },
  "propertyOrder": ["name", "avatar"],
  "required": ["name"]
}
```

### **Blog Post**

```json5
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://example.amido/blog-post",
  "title": "Blog post",
  "description": "A blog post",
  "allOf": [
    {
      "$ref": "http://bigcontent.io/cms/schema/v1/core#/definitions/content"
    }
  ],
  "type": "object",
  "properties": {
    "title": {
      "title": "Title",
      "description": "Used for heading and SEO title tag",
      "type": "string",
      "minLength": 1,
      "maxLength": 150
    },
    "date": {
      "title": "Creation date",
      "description": "Creation date (YYYY-MM-DD)",
      "type": "string",
      "maxLength": 10,
      "minLength": 10
    },
    "description": {
      "title": "Description",
      "description": "Used for blog listing page and SEO description",
      "type": "string",
      "minLength": 1,
      "maxLength": 200
    },
    "image": {
      "title": "Image",
      "description": "Used for the blog post's thumbnail and banner",
      "allOf": [
        {
          "$ref": "http://bigcontent.io/cms/schema/v1/core#/definitions/content-link"
        },
        {
          "properties": {
            "contentType": {
              "enum": [
                "https://example.amido/blog-image"
              ]
            }
          }
        }
      ]
    },
    "urlSlug": {
      "title": "Url slug",
      "description": "Url friendly slug",
      "type": "string",
      "minLength": 1,
      "maxLength": 100
    },
    "tags": {
      "title": "Tags",
      "description": "Blog tags",
      "type": "array",
      "minItems": 0,
      "maxItems": 10,
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 100,
        "title": "Tag",
        "description": ""
      }
    },
    "readTime": {
      "title": "Read time",
      "description": "The time it takes to read the blog",
      "type": "integer"
    },
    "authors": {
      "title": "Blog author",
      "description": "Article author(s) - max 3",
      "type": "array",
      "minItems": 1,
      "maxItems": 3,
      "items": {
        "allOf": [
          {
            "$ref": "http://bigcontent.io/cms/schema/v1/core#/definitions/content-link"
          },
          {
            "properties": {
              "contentType": {
                "enum": [
                  "https://example.amido/blog-author"
                ]
              }
            }
          }
        ]
      }
    },
    "content": {
      "title": "Content",
      "description": "",
      "type": "array",
      "minItems": 1,
      "maxItems": 20,
      "items": {
        "allOf": [
          {
            "$ref": "http://bigcontent.io/cms/schema/v1/core#/definitions/content-link"
          },
          {
            "properties": {
              "contentType": {
                "title": "Content",
                "enum": [
                  "https://example.amidio/blog-image",
                  "https://example.amido/blog-text"
                ]
              }
            }
          }
        ]
      }
    }
  },
  "propertyOrder": [
    "title",
    "authors",
    "date",
    "description",
    "image",
    "urlSlug",
    "tags",
    "readTime",
    "content"
  ],
  "required": [
    "title",
    "authors",
    "date",
    "description",
    "image",
    "urlSlug",
    "readTime",
    "content"
  ]
}
```

Once you have created these schemas in Amplience, created associating Content Types too and assign them to your content repository.

- [Content Type Schemas](https://amplience.com/docs/integration/contenttypes.html)
- [Content Types](https://amplience.com/docs/integration/workingwithcontenttypes.html)

## Algolia Search

Once you have created all of your content type schemas and content types, create a search index.

You can specify here what content-types should automatically be indexed. For this exercise we will use the Blog Post type above.

Once created you will be given an Application ID and a Search API key, you will need these later.
 
**⚠️ Important 👷‍♀**️ You need to resave content if you add your Algolia index _after_ you have created your content.

- [Algolia Search Overview](https://amplience.com/docs/integration/webhooksearchexamplepart1.html)

## Set Up Environment Variables

For the stacks demo you will need the following four environment variables;

```bash
export NEXT_PUBLIC_AMPLIENCE_HUB_NAME=
export NEXT_PUBLIC_AMPLIENCE_ALGOLIA_APPLICATION_ID=
export NEXT_PUBLIC_AMPLIENCE_ALGOLIA_SEARCH_API_KEY=
export NEXT_PUBLIC_AMPLIENCE_ALGOLIA_INDEX_NAME=
```

You should by now have the values for these from following this simple guide.

## Populate content

In Amplience, you are now able to create authors, images, text and orchestrate it all using blog posts.

## References
- [Building The Amplience Blog](https://amplience.com/blog/building-the-amplience-blog-part-1/)
- [DC Content Managed PWA with Next.js](https://github.com/amplience/dc-content-managed-pwa-nextjs)
