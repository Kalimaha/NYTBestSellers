(function () {

    'use strict';

    var app = angular.module('NYTBookReviews');

    app.controller('GenreController', function ($scope, $routeParams, $http) {
        var url = 'http://api.nytimes.com/svc/books/v3/lists/' + $routeParams.id + '.json?sort-by=rank&sort-order=ASC&api-key=sample-key';
        $http.get(url).then(function (response) {
            console.log(response.data.results.books[0]);
            $scope.books = response.data.results.books;
        }).catch(function (e) {
            $scope.error = e;
        });
    });

}());