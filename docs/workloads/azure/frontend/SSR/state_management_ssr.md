---
id: state_management_ssr
title: State Management
sidebar_label: State Management Patterns
hide_title: false
hide_table_of_contents: true
---

## Tools used

- [React-redux](https://react-redux.js.org/)
- [Redux-saga](https://github.com/redux-saga/redux-saga)
- [Redux-logger](https://github.com/LogRocket/redux-logger)
- [Redux-devtools](https://github.com/zalmoxisus/redux-devtools-extension)
- [Redux-saga-routines](https://www.npmjs.com/package/redux-saga-routines)

## Next based utility libraries

- [next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper)
- [next-redux-saga](https://github.com/bmealhouse/next-redux-saga#readme)

next-redux-saga uses the redux store created by next-redux-wrapper

## Pattern

[Ducks](https://github.com/erikras/ducks-modular-redux) pattern is used to
simplify the creation and managing the boilerplate associated with reducers,
action creators bundles with sagas. With Ducks pattern, rather than splitting up
all related code, It can be packaged into redux modules. This gives us clarity
about which piece of Redux is handling which functionality.

## Usage

To create new async routine please refer to `<src>/ducks/get-menus` and it is
consumed in landing home functional component `<src>/composition/home/`
