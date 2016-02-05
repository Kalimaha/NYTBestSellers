(function () {

    'use strict';

    var app = angular.module('NYTBestSellers');

    app.controller('GenreController', function ($scope, $routeParams, $http) {
        var url = 'http://api.nytimes.com/svc/books/v3/lists/' + $routeParams.genre + '.json?sort-by=rank&sort-order=ASC&api-key=sample-key';
        $http.get(url).then(function (response) {
            $scope.books = response.data.results.books;
            $scope.genre = $routeParams.genre;
        }).catch(function (e) {
            $scope.error = e;
        });
    });

}());