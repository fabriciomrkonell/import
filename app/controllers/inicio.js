(function(){

	'use strict';

	angular.module('Import.controllers').controller('inicioCtrl', indexCtrl);

	indexCtrl.$inject = ['$scope', 'Upload', '$rootScope', '$timeout'];

	function indexCtrl($scope, Upload, $rootScope, $timeout) {

		$scope.file = undefined;

		$scope.upload = function(file){
			$rootScope.setMessage('Enviando arquivo...');
	    Upload.upload({
        url: '/import',
        data: { file: file }
	    }).then(function (resp) {
	    	$rootScope.setMessage('Arquivo enviado com sucesso.');
	    	$timeout(function(){
	    		$rootScope.setMessage(undefined);
	    	}, 2000)
	      console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
	    }, function (resp) {
	      console.log('Error status: ' + resp.status);
	    }, function (evt) {
	      var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
	      console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
	    });
    };

  }
}());