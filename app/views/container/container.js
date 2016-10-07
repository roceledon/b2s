'use strict';

angular.module('b2s.views.container', ['ngRoute'])
/*
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/views/container', {
            templateUrl: '/views/container/header.html',
            controller: 'ContainerCtrl'
        });
    }])
*/
    .controller('ContainerCtrl', ['$scope',function($scope) {
        $scope.header = '/views/container/header.html';
        $scope.footer = '/views/container/footer.html';
        $scope.category = '/views/container/category.html';
    }]);