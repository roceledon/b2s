'use strict';

// Declare app level module which depends on views, and components
angular.module('b2s', [
  'ngRoute',
  'b2s.views.container',
  'b2s.views.home',
  'b2s.views.contact',
  'b2s.views.category',
  'b2s.version',
  'angularCSS'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: 'views/home'});
}]);
