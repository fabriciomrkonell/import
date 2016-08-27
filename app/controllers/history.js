(function(){

	'use strict';

	angular.module('Import.controllers').controller('historyCtrl', historyCtrl);

	historyCtrl.$inject = ['$scope', '$http'];

	function historyCtrl($scope, $http) {

		const url = '/history';

		$scope.histories = [];

		$http.get(url).then(function(res){
			$scope.histories = res.data.data;
		});

  }
}());