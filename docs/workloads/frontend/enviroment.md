---
id: environment_variables_nodejs
title: Enviroment Variables
sidebar_label: Enviroment Variables
---

## Environment Variables

Before you can start developing you will need to replace your enviroment variables with the appropriated values.
This values will be automatically picked up and used by the underlying server and web client.

```bash
##
 NODE_ENV=development 
 PORT={PORT} 
 APP_BASE_URL=http://localhost 
 APP_BASE_PATH=""

 NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN= {Token}
 NEXT_PUBLIC_CONTENTFUL_PREVIEW_SECRET=  {PREVIEW SECRET}
 NEXT_PUBLIC_CONTENTFUL_SPACE_ID=  {ID}
 NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=  {Token}

```

You can either set them using ```export Variable=Value``` if on linux, or ```set Variable=Value``` if on windows.