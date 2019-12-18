# egg-nedb

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-nedb.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-nedb
[travis-image]: https://img.shields.io/travis/eggjs/egg-nedb.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-nedb
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-nedb.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-nedb?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-nedb.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-nedb
[snyk-image]: https://snyk.io/test/npm/egg-nedb/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-nedb
[download-image]: https://img.shields.io/npm/dm/egg-nedb.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-nedb

<!--
Description here.
-->

## Install

```bash
$ npm i egg-nedb --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.nedb = {
  enable: true,
  package: 'egg-nedb',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.nedb = {
  client: {
    // nedb的文件夹路径，nedb文件为*.db
    path: path.join(process.cwd(), '../nedb'),
  },
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

```js
// 直接文件
const db = app.nedb['account'];
const doc = await db.findOne({ username: username });

// 文件夹下文件访问
const db = app.nedb['security/account'];
const doc = await db.findOne({ _id: id });
```

语法参考 [nedb-promises](https://github.com/bajankristof/nedb-promises)

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
