'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var Process = new Schema({
	itens: Array,
	amountAllPisCofins: String,
	amountPisCofins: String,
	finalPisCofins: String,
	economyPisCofins: String
});

module.exports = mongoose.model('Process', Process);