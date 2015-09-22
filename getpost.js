angular.module('server', [])

.factory('Links', function ($http) {
  // Your code here
  var getWords = function(data) {
    return $http({
      method: 'GET',
      url:'http://words.bighugelabs.com/api/2/1a2142fa9cc2310c617df8e5592bacc5/' + data,
      data: data
    })
  }

  var addWords = function(link) {
    return $http({
      method: 'POST',
      url:'http://words.bighugelabs.com/api/2/1a2142fa9cc2310c617df8e5592bacc5/' + data,
      data: link
    })
  }

  return {
    getWords: getWords,
    addWords: addWords
  }

})