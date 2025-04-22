# map.prototype.getorinsertcomputed <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ESnext spec-compliant `Map.prototype.getOrInsertComputed` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) v3 interface. It works in an ES3-supported environment and complies with the proposed [spec](https://tc39.github.io/proposal-array-grouping/).

## Getting started

```sh
npm install --save map.prototype.getorinsertcomputed
```

## Usage/Examples

```js
var getOrInsertComputed = require('map.prototype.getorinsertcomputed');
var assert = require('assert');

var map = new Map();
var key = {};
var value = {};

assert.equal(map.has(key), false);
assert.equal(getOrInsertComputed(map, key, () => value), value);
assert.equal(map.has(key), true);
```

```js
var getPolyfill = require('map.prototype.getorinsertcomputed/polyfill');
var shim = require('map.prototype.getorinsertcomputed/shim');
var assert = require('assert');
/* when Map.prototype.getOrInsertComputed is not present */
delete Map.prototype.getOrInsertComputed;
var shimmed = shim();

assert.equal(shimmed, getPolyfill());

var map = new Map();
var key = {};
var value = {};

assert.equal(map.has(key), false);
assert.equal(map.getOrInsertComputed(key, () => value), value);
assert.equal(map.has(key), true);
```

```js
var shim = require('map.prototype.getorinsertcomputed/shim');
var assert = require('assert');
/* when Map.prototype.getOrInsertComputed is present */
var shimmed = shim();

assert.equal(shimmed, Map.prototype.getOrInsertComputed);

var map = new Map();
var key = {};
var value = {};

assert.equal(map.has(key), false);
assert.equal(map.getOrInsertComputed(key, () => value), value);
assert.equal(map.has(key), true);
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/map.prototype.getorinsertcomputed
[npm-version-svg]: https://versionbadg.es/es-shims/Map.prototype.getOrInsertComputed.svg
[deps-svg]: https://david-dm.org/es-shims/Map.prototype.getOrInsertComputed.svg
[deps-url]: https://david-dm.org/es-shims/Map.prototype.getOrInsertComputed
[dev-deps-svg]: https://david-dm.org/es-shims/Map.prototype.getOrInsertComputed/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Map.prototype.getOrInsertComputed#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/map.prototype.getorinsertcomputed.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/map.prototype.getorinsertcomputed.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/map.prototype.getorinsertcomputed.svg
[downloads-url]: https://npm-stat.com/charts.html?package=map.prototype.getorinsertcomputed
[codecov-image]: https://codecov.io/gh/es-shims/Map.prototype.getOrInsertComputed/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/Map.prototype.getOrInsertComputed/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/Map.prototype.getOrInsertComputed
[actions-url]: https://github.com/es-shims/Map.prototype.getOrInsertComputed/actions
