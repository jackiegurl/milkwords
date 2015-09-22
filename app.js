angular.module('eggsBacon', ['cereal','server', 'ngRoute', 'ngAnimate'])

.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'index.html',
      controller: 'milkBottle'
    })
});