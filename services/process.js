'use strict';

var excelParser = require('node-xlsx'),
		Process = require('../models/process'),
		Reference = require('../models/reference'),
    simpleTableList = require('../services/simpleTable');

module.exports = {
	convertToMoney: function(value) {
		value = parseFloat(value);
		var re = '\\d(?=(\\d{' + (3 || 3) + '})+' + (2 > 0 ? '\\D' : '$') + ')',
  	 	 	num = value.toFixed(Math.max(0, ~~2));
		return (',' ? num.replace('.', ',') : num).replace(new RegExp(re, 'g'), '$&' + ('.' || ','));
	},
	getAliquot: function(aliquot){
		return simpleTableList.find(function(item){
			return item.aliquot == aliquot;
		});
	},
	start: function(file, config, history, res){

		const data = excelParser.parse(file.path)[0].data,
					aliquotReference = this.getAliquot(history.aliquot),
					pis_cofins_four = 4, pis_cofins_five = 5,
					importation_normal = 0, importation_ncm = 1,
					empty = '';

		var dataPisCofins = [], amountPisCofins = 0, itensPisCofins = [], me = this;

		Reference.find().select('ncm').sort('ncm').exec(function(err, referencesAux) {

			function replaceAll(str){
				return str.toString().split('.').join(empty).split(',').join(empty);
			}

			var references = [];
			referencesAux.forEach(function(item, key){
				references.push(replaceAll(item.ncm));
			});

			data.forEach(function(item, key){
				if(key < (config.start - 1)) return false;
				if((data.length === (key + 1)) && (config.addLastLine === false)) return false;

				//Verify Pis/Cofins
				var verifyPisCofinsFour = (parseInt(item[config.pis - 1]) === pis_cofins_four) && (parseInt(item[config.cofins - 1]) === pis_cofins_four);
				var verifyPisCofinsFive = (parseInt(item[config.pis - 1]) === pis_cofins_five) && (parseInt(item[config.cofins - 1]) === pis_cofins_five);
				var importation = parseInt(history.importation);

				if(((verifyPisCofinsFour || verifyPisCofinsFive) && importation === importation_normal) || (importation === importation_ncm)){
					var ncmReference = replaceAll(item[config.ncm - 1]);
					if(references.indexOf(ncmReference) !== -1){

						//Push
						dataPisCofins.push(item);

						//Calculate Amount All
						amountPisCofins = amountPisCofins + parseFloat(item[config.amount - 1]);

						//Itens
						itensPisCofins.push({
							number: item[config.number - 1],
							description: item[config.description - 1],
							value: me.convertToMoney(item[config.amount - 1]),
						});

					}else{
						console.log('Sem NCM ' + ncmReference + '.');
					}
				}
			});

			amountPisCofins = parseFloat(amountPisCofins.toFixed(2));

			var process = new Process();
			process.itens = itensPisCofins;

			//Calculate AmoutPisCofins
			process.amountAllPisCofins = me.convertToMoney(amountPisCofins);
			process.amountPisCofins = parseFloat((amountPisCofins / 100) * aliquotReference.aliquot);
			process.finalPisCofins = parseFloat((amountPisCofins / 100) * (aliquotReference.aliquot - (aliquotReference.cofins + aliquotReference.pis)));
			process.economyPisCofins = me.convertToMoney(process.amountPisCofins - process.finalPisCofins);
			process.amountPisCofins = me.convertToMoney(process.amountPisCofins);
			process.finalPisCofins = me.convertToMoney(process.finalPisCofins);

			process.save(function(err){
				if(err){
		      res.send({ error: 1, message: err.errors });
		    }else{
		    	history.processId = process._id;
		    	history.save();
		      res.send({ error: 0, processId: process._id });
		    }
			});

	  });
	}
};