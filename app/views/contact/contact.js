'use strict';

angular.module('b2s.views.contact', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/views/contact', {
            templateUrl: '/views/contact/contact.html',
            controller: 'ContactCtrl'
        });
    }])

    .controller('ContactCtrl', ['$scope','$css',function($scope,$css) {

    }]);