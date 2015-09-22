angular.module('cereal',[])

.controller('milkBottle', function($scope){
    $scope.names = [];
    $scope.madeNames = [];
    $scope.inbetween = ''

    $scope.addNames = function(link) {
    	$scope.names.push(link);
    	$scope.name = '';
    	console.log($scope.names)
   }

   $scope.makeNames = function() {
   	 var namesArray = $scope.names;
   	 
   	 for(var i = 0; i < namesArray.length; i++) {
   	 	var firstWord = namesArray[i]
   	 	for(var x = 0; x < namesArray.length; x++) {
   	 		$scope.madeNames.push(firstWord + ' ' + namesArray[x]);
   	 		$scope.madeNames.push(firstWord + ' and ' + namesArray[x]);
   	 		$scope.madeNames.push(firstWord + ' + ' + namesArray[x])
   	 	}
   	 }
    }

   $scope.madeIt = function() {
   	$scope.makeNames();
   	console.log($scope.madeNames)
   }

})

.directive('word', function() {
	return {
		restrict: 'A',
		transclude: true,
		template:'<div class="scrollingWords">{{createdWords}}</div>'
	}
})