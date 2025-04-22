'use strict';

// https://tc39.es/ecma262/#sec-canonicalizekeyedcollectionkey

module.exports = function CanonicalizeKeyedCollectionKey(key) {
	return key === 0 ? +0 : key; // steps 1, 2
};
