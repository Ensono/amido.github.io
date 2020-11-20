---
id: api_definition_csr
title: Api Definition
sidebar_label: Api Definition
hide_title: false
hide_table_of_contents: false
description: Api Definition
keywords:
  - rest 
  - api
  - csr
  - scaffolding
  - template
  - example
  - backend
  - axios
  - client side rendering
  - server side rendering
---

The generated scaffolding can be quickly used make calls to external APIs
meaning another endpoint either within your system developed by another team or
a public endpoint of 3rd party provider e.g. `hotels.com` etc...

The backend (and frontend) uses the [axios](https://github.com/axios/axios)
library as the HTTP Client.

It is on purpose left as a thin wrapper implementation so that the user can
extend with additional parameters on top of the mandated ones; `url`, `method` -
e.g. a header for authentication. As such it only returns an unopinionated axios
Instance and not a method initialized implementation. the method parameter is
mainly used as a type guard.

Sample implementation of an entire API can be found in the
```../src/state/ducks/get-menus```, this demonstrates how to setup a saga to fetch a specific business endpoint.

```javascript
export const fetchMenus = () =>
    action(GetMenuActionTypes.FETCH_POSTS, [], {
        method: "get" as Method,
        route: "/menu", // Todo: Point to deployed example API
    })
```

The specific saga implementation is ```../src/state/ducks/get-menus/saga```

```javascript
import {all, call, fork, put, takeEvery} from "redux-saga/effects"
import {
    MetaActionWithAPI,
    GetMenuActionTypes,
    MenuItem,
} from "../../../interfaces/sagas.interface"
import apiCaller from "../../../services/apiCaller"
import {fetchMenusError, fetchMenusSuccess} from "./actions"

function* handleFetch(action: MetaActionWithAPI): Generator {
    try {
        // eslint-disable-next-line
        const res: MenuItem[] | any = yield call(
            apiCaller,
            action.meta.method,
            action.meta.route,
        )
        yield put(fetchMenusSuccess(res))
    } catch (err) {
        if (err instanceof Error) {
            console.error(err)
            yield put(fetchMenusError(err.message))
        } else {
            yield put(fetchMenusError("An unknown error occurred."))
        }
    }
}

function* watchFetchRequest(): Generator {
    yield takeEvery(GetMenuActionTypes.FETCH_POSTS, handleFetch)
}

export default function* postSaga() {
    yield all([fork(watchFetchRequest)])
}
```

Feel free to modify the example code for your own API endpoints!
