(function () {

    'use strict';

    var app = angular.module('NYTBestSellers');

    app.directive('nytHeader', function () {
        return {
            restrict: 'E',
            templateUrl: 'src/html/directives/header.html'
        };
    });

}());