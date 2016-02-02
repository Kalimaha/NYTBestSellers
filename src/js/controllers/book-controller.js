(function () {

    'use strict';

    var app = angular.module('NYTBookReviews');

    app.controller('BookController', function ($scope, $routeParams) {
        $scope.id = $routeParams.id;
    });

}());