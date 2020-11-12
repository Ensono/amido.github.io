---
id: identity
title: Identity using Auth0
sidebar_label: Identity using Auth0
hide_title: false
hide_table_of_contents: false
description: Identity using Auth0
keywords:
  - rest 
  - api
  - ssr
  - identity
  - auth0
  - framework
  - redis cache
---

- [Auth0](https://auth0.com/) is the Identity-as-a-Service (IDaaS) used in the
  stacks demo.
- [PassportJS](http://www.passportjs.org/) lib is the node middleware to create
  and manage user authentication sessions.
- [Redis](https://redis.io/) DB is used for passport session management.

## Implementation

The stacks demo is built using
[Passport-auth0](http://www.passportjs.org/packages/passport-auth0/) strategy.
Every successful login will result in a session-cookie created and stored in the
browser. The application relies on this cookie to decide if the user is logged
in or not.

### Environmental variables

```bash
npx cross-env \
AUTH0_CLIENT_ID=<AUTH0_CLIENT_ID> \
AUTH0_DOMAIN=<AUTH0_DOMAIN> \
AUTH0_CLIENT_SECRET=<AUTH0_CLIENT_SECRET> \
```

## Redis Cache [Optional]

<!-- markdownlint-disable MD033  MD007 MD029-->

- Redis is used as a preferred DB to maintain the user state.
  [ioredis](https://github.com/luin/ioredis) is the redis client used due to its
  robust and performance-focus.

### Implementation of Redis Cache

1. Download Redis to local machine (Follow instruction
   [here](https://redis.io/topics/quickstart))

- It is a good idea to copy both the Redis server and the command line interface

2. Redis-cli is useful tool to query the local redis server

```bash
$redis-cli ping
PONG \\response from server
```

3. Kickstart the redis-server

- Verify the server is running before running the application

4. Build and start the Yumido application.

### Environmental variables for Redis

```bash
npx cross-env \
REDIS_HOST=<REDIS_HOST> \
REDIS_PORT=<REDIS_PORT> \
REDIS_ENABLED=true \
```

![Redis-cli Screenshots](https://amidostacksassets.blob.core.windows.net/docs/assets/redis-server-screenshot.jpg)
![Chrome Screenshots](https://amidostacksassets.blob.core.windows.net/docs/assets/chrome-cookies-screenshot.jpg)

> Please note Redis is disabled for running in CI

## Reference

- [Auth0 Passport blog](https://auth0.com/blog/next-js-authentication-tutorial/)
- [Redis quick start](https://redis.io/topics/quickstart)

<!-- markdownlint-enable MD033 -->
