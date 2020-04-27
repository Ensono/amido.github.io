---
id: server_side_cache
title: Server Side Cache
sidebar_label: Server Side Cache
---

## Cache server side

With Next.JS, React applications can be rendered isomorphic and delivered on the
server side (SSR). So the time that elapses before the web server transmits the
first byte of the page, increases rapidly i.e.
[TTFB](https://developers.google.com/web/tools/lighthouse/audits/ttfb).

React Server Side rendering is very costly and takes a lot of server's CPU power
for that. One of the best solutions for this problem is cache already rendered
pages.

As this can be solved by the infrastructure way but NextJS using custom express
server can also provide ways to optimize the caching of static or dynamic
routes/ pages.

## Usage

- Stacks uses library called
  [cacheable-response](https://www.npmjs.com/package/cacheable-response)
- Server/index.ts sets a _1 hour_ TTL cache

```JS
/* Passing `cacheable-response` instance as middleware */

server.get("/", (req, res) => ssrCache({req, res, pagePath: "/"}))
```

- This limit can be extended
- Root ("/") is only configured to utilize this cache but can be extended to
  other routes too.
- Can also be turned on/off per environment.
