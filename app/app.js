'use strict'

angular.module('Import.controllers', ['ngFileUpload']);

angular.module('Import', ['Import.controllers']);

angular.module('Import').run(['$rootScope', '$timeout', function($rootScope, $timeout){

	$rootScope.message = undefined;

	$rootScope.setMessage = function(message){
		$rootScope.message = message;
	};

	$rootScope.timeoutMessage = function(){
		$timeout(function(){
  		$rootScope.setMessage(undefined);
  	}, 2000);
	};

}]);

angular.module('Import').config(['$interpolateProvider', function($interpolateProvider){
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
}]);

angular.element(document).ready(function() {
	angular.bootstrap(document, ['Import']);
});