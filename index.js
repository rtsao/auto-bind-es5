'use strict';
module.exports = function (self) {
	var keys = Object.getOwnPropertyNames(self.constructor.prototype);
	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		var val = self[key];
		if (key !== 'constructor' && typeof val === 'function') {
			self[key] = val.bind(self);
		}
	}

	return self;
};
