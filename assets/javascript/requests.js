angular.module('server', [])

.factory('Links', function ($http) {
  // Your code here
  $http.defaults.headers.put = {
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Origin': '*'
  }

  var getWords = function(data) {
    return $http({
      method: 'GET',
      url:'http://words.bighugelabs.com/api/2/1a2142fa9cc2310c617df8e5592bacc5/' + data + '/',
      data: data
    })
  }

  var addWords = function(link) {
    return $http({
      method: 'POST',
      url:'http://words.bighugelabs.com/api/2/1a2142fa9cc2310c617df8e5592bacc5/' + data + '/',
      data: link
    })
  }

  var getInstagram = function(tag) {
    return $http({
      method: 'GET',
      url:'https://api.instagram.com/v1/tags/' + tag + '/media/recent?client_id=74485a7b522d4d5a8f41e0c59ae5ffb8',
      dataType: "jsonp",
      data: tag
    })
  }

  return {
    getWords: getWords,
    addWords: addWords,
    getInstagram: getInstagram
  }

})