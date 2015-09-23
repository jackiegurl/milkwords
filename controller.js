angular.module('cereal',[])

.controller('milkBottle', function($scope, Links){
      $scope.names = [];
      $scope.milkImage = 'bottle.png'
      $scope.milkCount = 0;

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

   	  $scope.synonyms = [];

   	 	var divideLine = (thesaurus.data).split('\n')
   	 	for(var i = 0; i < divideLine.length; i++) {
   	 		if(divideLine[i].indexOf('syn|') > -1) {
   	 			var index = divideLine[i].indexOf('syn|')
   	 			var wordAfterSyn = index+4
   	 			$scope.synonyms.push(divideLine[i].slice(wordAfterSyn,divideLine[i].length))
   	 		}
   	 	}

   	  $scope.clean = ($scope.synonyms).slice(0,5)

   	 })
   }

   $scope.makeNames = function() { 
  
    $('body').css({'background-image': 'url("")'})
    $('div').removeClass('container');

     $scope.madeNames = [];
     var namesArray = $scope.names;
     
     for(var i = 0; i < namesArray.length; i++) {
      var firstWord = namesArray[i]
      for(var x = 0; x < namesArray.length; x++) {
        $scope.madeNames.push(firstWord + ' ' + namesArray[x]);
        $scope.madeNames.push(firstWord + ' and ' + namesArray[x]);
        $scope.madeNames.push(firstWord + ' + ' + namesArray[x])
      }
     }
    $scope.names = ''
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
   	var namesArray = $scope.names
   	var getIndex = namesArray.indexOf(item) 

   	if(getIndex > -1) {
   		namesArray.splice(getIndex, 1)
   	}
   }

   $scope.addMilk = function() {
    $scope.milkCount++
    var number = $scope.milkCount
    var pictures = $scope.imageList

    var milk = './bottleImages/' + number + '.png'

    $('body').css({'background-image': 'url('+milk+')'})
   }


})