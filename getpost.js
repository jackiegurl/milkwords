angular.module('server', [])

.factory('Links', function ($http) {
  // Your code here
  var getWords = function(data) {
    return $http({
      method: 'GET',
      url:'/',
      data: data
    })
  }

  var addWords = function(link) {
    return $http({
      method: 'POST',
      url:'/',
      data: link
    })
  }

  return {
    getWords: getWords,
    addWords: addWords
  }

})