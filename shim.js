'use strict';

var define = require('define-properties');

var getPolyfill = require('./polyfill');
var getMap = require('es-map/polyfill');

module.exports = function shim() {
	var polyfill = getPolyfill();

	var $Map = getMap();
	define(
		$Map.prototype,
		{ getOrInsertComputed: polyfill },
		{ getOrInsertComputed: function () { return $Map.prototype.getOrInsertComputed !== polyfill; } }
	);
	if (typeof Map === 'function' && Map !== $Map) {
		define(
			Map,
			{ getOrInsertComputed: polyfill },
			{ getOrInsertComputed: function () { return Map.prototype.getOrInsertComputed !== polyfill; } }
		);
	}

	return polyfill;
};
