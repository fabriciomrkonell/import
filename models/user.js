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
		ncm: { type: Number, default: 0 }
	}
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);