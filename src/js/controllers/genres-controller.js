(function () {

    'use strict';

    var app = angular.module('NYTBestSellers');

    app.controller('GenresController', function ($scope, $routeParams, $http) {
        var url = 'http://api.nytimes.com/svc/books/v3/lists/names.json?api-key=sample-key';
        $http.get(url).then(function (response) {
            $scope.genres = response.data.results;
        }).catch(function (e) {
            $scope.error = e;
        });
    });

}());