(function(){

	'use strict';

	angular.module('Import.controllers').controller('inicioCtrl', indexCtrl);

	indexCtrl.$inject = ['$scope', 'Upload', '$rootScope'];

	function indexCtrl($scope, Upload, $rootScope) {

		const url = '/processo/'

		$scope.file = undefined;
		$scope.aliquot = '4';
		$scope.importation = '0';

		$scope.upload = function(file){
			$rootScope.setMessage('Enviando arquivo...');
	    Upload.upload({
        url: '/import',
        data: { file: file, aliquot: $scope.aliquot, importation: $scope.importation }
	    }).then(function (resp) {
	    	$rootScope.setMessage('Arquivo enviado com sucesso.');
	    	$rootScope.timeoutMessage();
				window.open(url + resp.data.processId, '_blank').focus();
	    }, function (resp) {
	      console.log('Error status: ' + resp.status);
	    }, function (evt) {
	      var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
	      console.log('Progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
	    });
    };

  }
}());