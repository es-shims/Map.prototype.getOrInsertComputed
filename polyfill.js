'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return (typeof Map === 'function' && Map.prototype.getOrInsertComputed) || implementation;
};
