'use strict';

var callBind = require('call-bind');
var $TypeError = require('es-errors/type');

var Call = require('es-abstract/2024/Call');
var CanonicalizeKeyedCollectionKey = require('./aos/CanonicalizeKeyedCollectionKey');
var IsCallable = require('es-abstract/2024/IsCallable');

var $Map = require('es-map/polyfill')();

var $mapHas = callBind($Map.prototype.has);
var $mapGet = callBind($Map.prototype.get);
var $mapSet = callBind($Map.prototype.set);

module.exports = function getOrInsertComputed(key, callbackfn) {
	var M = this; // step 1

	// 2. Perform ? RequireInternalSlot(M, [[MapData]]).
	var has = $mapHas(M); // step 2

	if (!IsCallable(callbackfn)) {
		throw new $TypeError('callbackfn must be a function'); // step 3
	}

	// eslint-disable-next-line no-param-reassign
	key = CanonicalizeKeyedCollectionKey(key); // step 4

	if (has) { // step 5
		return $mapGet(M, key); // step 5.a
	}

	var value = Call(callbackfn, undefined, [key]); // step 6

	$mapSet(M, key, value); // steps 8 - 10

	return value; // step 11
};
