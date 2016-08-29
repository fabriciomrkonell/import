'use strict';

var excelParser = require('node-xlsx'),
    Process = require('../models/process');

module.exports = {
	start: function(file, config, history, res){

		const data = excelParser.parse(file.path)[0].data,
					pis_cofins = 4;

		var dataPisCofins = [], amountPisCofins = 0, descriptionsPisCofins = [];

		data.forEach(function(item, key){
			if(key < (config.start - 1)) return false;

			//Verify Pis/Cofins
			if((parseInt(item[config.pis - 1]) === pis_cofins) && (parseInt(item[config.cofins - 1]) === pis_cofins)){

				//Push
				dataPisCofins.push(item);

				//Calculate Amount
				amountPisCofins = amountPisCofins + parseFloat(item[config.amount - 1]);

				//Descriptions
				descriptionsPisCofins.push(item[config.description - 1]);

			}
		});

		amountPisCofins = amountPisCofins.toFixed(2);

		var process = new Process();
		process.descriptions = descriptionsPisCofins;
		process.save(function(err){
			if(err){
	      res.send({ error: 1, message: err.errors });
	    }else{
	    	history.processId = process._id;
	    	history.save();
	      res.send({ error: 0, processId: process._id });
	    }
		});
	}
};