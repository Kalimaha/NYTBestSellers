(function () {

    'use strict';

    var app = angular.module('NYTMovieReviews', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider.when('/movies', {
            templateUrl: 'src/html/movies.html',
            controller: 'MoviesController'
        }).when('/movies/:id', {
            templateUrl: 'src/html/movie.html',
            controller: 'SingleMovieController'
        }).otherwise({
            redirectTo: '/movies'
        });
    });

}());