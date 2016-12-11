(function () {

    'use strict';

    var app = angular.module('NYTBookReviews');

    app.controller('GenreController', function ($scope, $routeParams, $http) {
        var url = 'http://api.nytimes.com/svc/books/v3/lists/' + $routeParams.genre + '.json?sort-by=rank&sort-order=ASC&api-key=42440be70c704f3eaef8a428d47cdca4';
        $http.get(url).then(function (response) {
            $scope.books = response.data.results.books;
            $scope.genre = $routeParams.genre;
        }).catch(function (e) {
            $scope.error = e;
        });
    });

}());
