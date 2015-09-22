angular.module('cereal',[])

.controller('milkBottle', function($scope, Links){
    $scope.names = [];
    $scope.inbetween = ''

    $scope.addNames = function(link) {
    	$scope.names.push(link);
    	$scope.name = '';
    	$scope.getWords(link)
   }

    $scope.addSyn = function(link) {
    	$scope.names.push(link);
    	$scope.words = '';
   }

   $scope.getWords = function(data) {
   	 Links.getWords(data).then(function(thesaurus) {
   	 	// var filitered = _.where(thesaurus, {adjective: syn})

   	  $scope.synonyms = [];
   	 	var divideLine = (thesaurus.data).split('\n')
   	 	for(var i = 0; i < divideLine.length; i++) {
   	 		if(divideLine[i].indexOf('syn|') > -1) {
   	 			var index = divideLine[i].indexOf('syn|')
   	 			var wordAfterSyn = index+4
   	 			$scope.synonyms.push(divideLine[i].slice(wordAfterSyn,divideLine[i].length))
   	 		}
   	 	}
   	 	// $scope.synonyms.push(thesaurus.data)
   	  console.log($scope.synonyms)
   	  $scope.clean = ($scope.synonyms).slice(0,5)
   	  console.log($scope.clean)
   	 	// var string = JSON.stringify(parsed)
   	 	// $scope.synonyms.push(string)
   	 	// console.log($scope.synonyms)
   	 })
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

   $scope.clear = function(array) {
   	while(array.length) {
   		array.pop()
   	}
   }
   $scope.madeIt = function() {
   	$scope.makeNames();
   	console.log($scope.madeNames)
   }

   $scope.removeName = function(item) {
   	var namesArray = $scope.names;
   	var getIndex = namesArray.indexOf(item) 

   	if(getIndex > -1) {
   		namesArray.splice(getIndex, 1)
   	}
   }


})

.directive('word', function() {
	return {
		restrict: 'A',
		transclude: true,
		template:'<div class="scrollingWords">{{createdWords}}</div>'
	}
})