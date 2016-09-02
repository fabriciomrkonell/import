(function(){

	'use strict';

	angular.module('Import.controllers').controller('referenceCtrl', referenceCtrl);

	referenceCtrl.$inject = ['$scope', '$rootScope', '$http'];

	function referenceCtrl($scope, $rootScope, $http) {

		const url = '/reference';

		$scope.references = [];

		function isNullOrEmpty (a){
		  return (a == null) || (a == "") || !!(a.match(/^\s+$/));
		}

		function findAll(){
			$http.get(url).then(function(res){
				$scope.references = res.data.data;
			});
			$scope._id = '';
			$scope.ncm = '';
			$scope.description = '';
		};

		$scope.save = function(){
			$http.post(url, {
				_id: $scope._id,
				ncm: $scope.ncm,
				description: $scope.description
			}).then(function(){
				findAll();
			});
		};

		$scope.remove = function(id){
			$http.delete(url + '/' + id).then(function(){
				findAll();
			});
		};

		$scope.edit = function(ref){
			$scope._id = ref._id;
			$scope.ncm = ref.ncm;
			$scope.description = ref.description;
		};

		$scope.isValid = function(){
			return !isNullOrEmpty($scope.ncm) && !isNullOrEmpty($scope.description);
		};

		findAll();

  }
}());
