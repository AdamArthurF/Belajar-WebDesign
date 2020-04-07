/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */

define( function() {
	"use strict";

	return function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};

} );