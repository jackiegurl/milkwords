angular.module('cereal',[])

.controller('milkBottle', function($scope, Links){
      $scope.names = [];
      $scope.milkImage = 'bottle.png'
      $scope.milkCount = 0;
      $scope.errorDisplay = ''

    $scope.addNames = function(link) {
      if($scope.milkCount < 12) {
        $scope.names.push(link);
      	$scope.name = '';
        $scope.madeWords = ''
      	$scope.getWords(link)
      } else {
        $scope.errorDisplay = 'Sorry, 12 words is the maximum!'
      }
   }

    $scope.addSyn = function(link) {
      if($scope.milkCount < 12) {
      	$scope.names.push(link);
      	$scope.words = '';
        $scope.addMilk()
      } else {
        $scope.errorDisplay = 'Sorry, 12 words is the maximum!'
      }
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

   $scope.getInstagram = function(tag) {
    $scope.instaWordImages = {};

    var refinedTag = tag.split(' ').join('')
    Links.getInstagram(refinedTag).then(function(picsData){
      console.log(picsData)
      var picturesOfTags = picsData.data.data
      for(var i = 0; i < picturesOfTags.length; i++) {
        $scope.instaWordImages[picturesOfTags[i].link] = picturesOfTags[i].images.thumbnail.url
      }
    })
   }

   $scope.makeNames = function() { 
  
    $('body').css({'background-image': 'url("")'})

     $scope.madeNames = [];
     var namesArray = $scope.names;
     
     for(var i = 0; i < namesArray.length; i++) {
      var firstWord = namesArray[i]
      for(var x = 0; x < namesArray.length; x++) {
        $scope.madeNames.push(firstWord + ' ' + namesArray[x]);
        $scope.madeNames.push(firstWord + ' and ' + namesArray[x]);
      }
     }
    $scope.names = ''
    $scope.clean = ''
  }


   $scope.clear = function(array) {
   	while(array.length) {
   		array.pop()
   	}
   }

   $scope.removeName = function(item) {
   	var namesArray = $scope.names
   	var getIndex = namesArray.indexOf(item) 

   	if(getIndex > -1) {
   		namesArray.splice(getIndex, 1)
   	}
   }

   $scope.addMilk = function() {
    if($scope.milkCount < 12) {
      $scope.milkCount++
      var number = $scope.milkCount
      var pictures = $scope.imageList

      var milk = './assets/img/bottleImages/' + number + '.png'
      $('body').css({'background-image': 'url('+milk+')'})
    } else {
      $scope.errorDisplay = 'Sorry, 12 words is the maximum!'
    }
   }


})