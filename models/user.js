'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
	name: String,
 	username: String,
  password: String,
  isAdmin: Boolean,
  configuration: {
  	addLastLine: { type: Boolean, default: true },
		start: { type: Number, default: 1 },
		number: { type: Number, default: 0 },
		description: { type: Number, default: 0 },
		amount: { type: Number, default: 0 },
		ncm: { type: Number, default: 0 },
		cofins: { type: Number, default: 0 },
		pis: { type: Number, default: 0 },
		cest: { type: Number, default: 0 },
		icms: { type: Number, default: 0 }
	}
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);