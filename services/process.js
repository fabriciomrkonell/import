'use strict';

module.exports = {
	start: function(req, res, next){
		if(req.user){
			next()
		}else{
			res.redirect('/login');
		}
	}
};