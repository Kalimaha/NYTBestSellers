(function () {

    'use strict';

    var app = angular.module('NYTBestSellers');

    app.directive('book', function () {
        return {
            restrict: 'E',
            templateUrl: 'src/html/directives/book.html',
            controller: function ($scope, $routeParams, $http) {
                $scope.id = $routeParams.id;
                $scope.isbn = $routeParams.isbn;
                var url = 'http://api.nytimes.com/svc/books/v3/lists/' + $routeParams.genre + '.json?sort-by=rank&sort-order=ASC&api-key=sample-key',
                    i,
                    b;
                $http.get(url).then(function (response) {
                    for (i = 0; i < response.data.results.books.length; i += 1) {
                        b = response.data.results.books[i];
                        if (b.isbns[0].isbn13 === $routeParams.isbn) {
                            $scope.book = b;
                            break;
                        }
                    }
                }).catch(function (e) {
                    $scope.error = e;
                });
            }
        };
    });

}());