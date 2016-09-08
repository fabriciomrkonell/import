(function(){

	'use strict';

	angular.module('Import.controllers').controller('configurationCtrl', configurationCtrl);

	configurationCtrl.$inject = ['$scope', '$http', '$rootScope'];

	function configurationCtrl($scope, $http, $rootScope) {

		var userConfoguration = document.getElementById('userConfiguration');

		const url = (userConfoguration.value === '') ? '/configuration' : '/configuration/' + userConfoguration.value;

		$scope.data = {
			addLastLine: true
		};

		$http.get(url).then(function(res){
			if(res.data.error === 1) return window.location = '/';
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