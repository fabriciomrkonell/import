(function(){

	'use strict';

	angular.module('Import.controllers').controller('configurationCtrl', configurationCtrl);

	configurationCtrl.$inject = ['$scope', '$http', '$rootScope'];

	function configurationCtrl($scope, $http, $rootScope) {

		const url = '/configuration';

		$scope.data = {
			addLastLine: true
		};

		$http.get(url).then(function(res){
			angular.extend($scope.data, res.data.data);
			$scope.data.addLastLine = $scope.data.addLastLine.toString();
		});

		$scope.save = function(data){
			$rootScope.setMessage('Salvando configuração...');
			$http.post(url, data).then(function(res){
				$rootScope.setMessage('Configuração salva com sucesso.');
				$rootScope.timeoutMessage();
			});
		};

  }
}());