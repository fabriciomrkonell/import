'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var Reference = new Schema({
	ncm: String,
	description: String
});

module.exports = mongoose.model('Reference', Reference);