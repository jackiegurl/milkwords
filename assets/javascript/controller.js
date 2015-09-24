angular.module('cereal',[])

.controller('milkBottle', function($scope, Links){
      $scope.names = [];
      $scope.milkImage = 'bottle.png'
      $scope.milkCount = 0;
      $scope.errorDisplay = ''
      $scope.saveWords = [];

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

   $scope.getInstagram = function(tag, array) {
    $scope.instaWordImages = {};

    var refinedTag = tag.split(' ').join('')
    Links.getInstagram(refinedTag).then(function(picsData){
      console.log(picsData)
      var picturesOfTags = picsData.data.data
      for(var i = 0; i < picturesOfTags.length; i++) {
        $scope.instaWordImages[picturesOfTags[i].link] = picturesOfTags[i].images.thumbnail.url
      }
    })
    $scope.likeWords(tag,array)
   }

   $scope.makeNames = function() { 
  
    $('body').css({'background-image': 'url("")'})
    $('#object').remove()
    $('input').remove()
    $('button').remove()

     $scope.madeNames = [];
     var namesArray = $scope.names;
     
     for(var i = 0; i < namesArray.length; i++) {
      var firstWord = namesArray[i]
      for(var x = 0; x < namesArray.length; x++) {
        $scope.madeNames.push(firstWord + ' ' + namesArray[x]);
        $scope.madeNames.push(firstWord + ' and ' + namesArray[x]);
      }
     }
     $scope.randomName = $scope.madeNames[2]
    $scope.names = ''
    $scope.clean = ''
  }

  $scope.likeWords = function(likedWord, origArray) {
    $scope.saveWords.push(likedWord)
    $scope.removeName(origArray, likedWord)
    console.log($scope.saveWords)
  }

   $scope.clear = function(array) {
   	while(array.length) {
   		array.pop()
   	}
   }

   $scope.removeName = function(array, item) {
   	var getIndex = array.indexOf(item) 

   	if(getIndex > -1) {
   		array.splice(getIndex, 1)
   	}
   }


   $scope.removeSave = function(array, item) {
    var getIndex = array.indexOf(item) 

    if(getIndex > -1) {
      array.splice(getIndex, 1)
    }

    $scope.madeNames.push(item)
   }

   $scope.addMilk = function() {
    if($scope.milkCount < 12) {
      $scope.milkCount++
      var number = $scope.milkCount
      var pictures = $scope.imageList

      var milk = './assets/img/bottleImages/' + number + '.png'
      $('body').css({'background-image': 'url('+milk+')'});
      $('#object').addClass('slideIn')
    } else {
      $scope.errorDisplay = 'Sorry, 12 words is the maximum!'
    }
   }


})