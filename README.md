## @magic-libraries/gql

graphql client library for [@magic](https://magic.github.io/core)

[html-docs](https://magic-libraries.github.io/gql)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic-libraries/gql.svg
[npm-url]: https://www.npmjs.com/package/@magic-libraries/gql
[travis-image]: https://img.shields.io/travis/com/magic-libraries/gql/master
[travis-url]: https://travis-ci.com/magic-libraries/gql
[appveyor-image]: https://img.shields.io/appveyor/ci/magiclibraries/gql/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magiclibraries/gql/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-libraries/gql/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-libraries/gql
[greenkeeper-image]: https://badges.greenkeeper.io/magic-libraries/gql.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-libraries/gql.svg
[snyk-image]: https://snyk.io/test/github/magic-libraries/gql/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-libraries/gql

* [installation](#install)
* [usage](#usage)

#### <a name="install"></a>installation
```bash
npm install --save-exact @magic-libraries/gql
```

#### <a name="usage"></a>usage
in a page/component, just use the lib.gql function'),

```javascript
const query = lib.gql(`query getHuman($id: Int) {
  human(id: $id) {
    name
    height
  }
}`)

const result = query(1)

// returns valid json with the following structure:
{
  query: `query getHuman($id: Int = 3) {
    human(id: $id) {
      name
      height
    }
  }`,
  variables: '1',
  operationName: 'getHuman'
}
```

#### caveat
this library will throw an error if invalid values get passed in.

##### 0.0.1
first release

##### 0.0.2 - unreleased
require node 13.5.0

##### 0.0.3 - unreleased
...
