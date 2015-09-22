angular.module('eggsBacon', ['cereal','server', 'ngRoute'])

.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'index.html',
      controller: 'milkBottle'
    })
});