(function () {

    'use strict';

    var app = angular.module('NYTMovieReviews');

    app.controller('WelcomeController', function ($scope, $routeParams) {
        $scope.name = $routeParams.name;
    });

}());