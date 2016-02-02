(function () {

    'use strict';

    var app = angular.module('NYTMovieReviews');

    app.controller('SingleMovieController', function ($scope, $routeParams) {
        $scope.id = $routeParams.id;
    });

}());