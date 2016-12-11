(function () {

    'use strict';

    var app = angular.module('NYTBestSellers');

    app.controller('GenresController', function ($scope, $routeParams, $http) {
        var url = 'http://api.nytimes.com/svc/books/v3/lists/names.json?api-key=42440be70c704f3eaef8a428d47cdca4';
        $http.get(url).then(function (response) {
            $scope.genres = response.data.results;
        }).catch(function (e) {
            $scope.error = e;
        });
    });

}());
