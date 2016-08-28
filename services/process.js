'use strict';

var excelParser = require('node-xlsx');

module.exports = {
	start: function(file, config){

		const data = excelParser.parse(file.path)[0].data;

		data.forEach(function(item, key){
			if(key < (config.start - 1)) return false;
			//count++;
			//console.log(item);
		});
	}
};