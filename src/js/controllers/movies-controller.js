(function () {

    'use strict';

    var app = angular.module('NYTMovieReviews');

    app.controller('MoviesController', function ($scope, $routeParams, $http) {
        var url = 'http://api.nytimes.com/svc/movies/v2/reviews/all.json?order=by-publication-date&api-key=sample-key';
        $http.get(url).then(function (response) {
            $scope.movies = response.data.results;
        }).catch(function (e) {
            $scope.error = e;
        });
    });

}());