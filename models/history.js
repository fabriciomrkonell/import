'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var _History = new Schema({
	name: String,
  dateCreate: Date,
  userId: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('History', _History);