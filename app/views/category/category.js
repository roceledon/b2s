'use strict';

angular.module('b2s.views.category', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/views/category/:category', {
            templateUrl: '/views/category/category.html',
            controller: 'CategoryCtrl'
        });
    }])

    .controller('CategoryCtrl', ['$scope','$routeParams','$css','$sce',function($scope,$routeParams,$css,$sce) {
        $css.removeAll();
        $css.add("components/css/shop-homepage.css");

        $scope.stock = [
            {
                id: 1
                ,title: 'First Product'
                ,url: '/#'
                ,image: 'http://placehold.it/320x150'
                ,price: 24.99
                ,description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                ,stars: 3
                ,reviews: 15
                ,category: 1
            }
            ,{
                id: 2
                ,title: 'Second Product'
                ,url: '/#'
                ,image: 'http://placehold.it/320x150'
                ,price: 64.99
                ,description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                ,stars: 4
                ,reviews: 12
                ,category: 2
            }
            ,{
                id: 3
                ,title: 'Third Product'
                ,url: '/#'
                ,image: 'http://placehold.it/320x150'
                ,price: 74.99
                ,description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                ,stars: 4
                ,reviews: 31
                ,category: 3
            }
            ,{
                id: 4
                ,title: 'Fourth Product'
                ,url: '/#'
                ,image: 'http://placehold.it/320x150'
                ,price: 84.99
                ,description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                ,stars: 3
                ,reviews: 6
                ,category: 4
            }
            ,{
                id: 5
                ,title: 'Fifth Product'
                ,url: '/#'
                ,image: 'http://placehold.it/320x150'
                ,price: 94.99
                ,description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                ,stars: 4
                ,reviews: 18
                ,category: 5
            }
            ,{
                id: 6
                ,title: 'Sixtth Product'
                ,url: '/#'
                ,image: 'http://placehold.it/320x150'
                ,price: 23.99
                ,description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                ,stars: 3
                ,reviews: 15
                ,category: 6
            }
        ];

        var categories = [];
        $scope.stock.forEach(function(item) {
            if(item.category == $routeParams.category){
                categories.push(item);
            }
        });

        $scope.items = categories;

        $scope.getStars = function(quantity){
            var stars = '';
            for (var i = 0; i < quantity; i++) {
                stars = stars+'<span class="glyphicon glyphicon-star"></span>';
            }
            for (var i = 0; i < 5-quantity; i++) {
                stars = stars+'<span class="glyphicon glyphicon-star-empty"></span>';
            }
            return $sce.trustAsHtml(stars);
        };
    }]);