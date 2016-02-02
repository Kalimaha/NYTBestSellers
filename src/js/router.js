(function () {

    'use strict';

    var app = angular.module('NYTBookReviews', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider.when('/genres', {
            templateUrl: 'src/html/genres.html',
            controller: 'GenresController'
        }).when('/genres/:id', {
            templateUrl: 'src/html/genre.html',
            controller: 'GenreController'
        }).when('/genres/:id/:book_id', {
            templateUrl: 'src/html/book.html',
            controller: 'BookController'
        }).otherwise({
            redirectTo: '/genres'
        });
    });

}());