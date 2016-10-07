'use strict';

angular.module('b2s.views.home', ['ngRoute','ui.bootstrap'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/views/home', {
            templateUrl: '/views/home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    .controller('HomeCtrl', ['$scope','$css','$sce',function($scope,$css,$sce) {
        $css.removeAll();
        $css.add("components/css/shop-homepage.css");

        //controla el carrusel
        $scope.myInterval = 5000;
        $scope.slides = [
            {id:1,image: '../../components/img/netflix-home.png'}
            ,{id:2,image: '../../components/img/psn-cards.png'}
            ,{id:3,image: '../../components/img/fb_bg.png'}
        ];

        //controla productos
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

        $scope.items = $scope.stock;

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

        $scope.$watch('items',function(newValue,oldValue){
            console.log($scope.items);
        });
    }]);