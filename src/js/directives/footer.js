(function () {

    'use strict';

    var app = angular.module('NYTBestSellers');

    app.directive('nytFooter', function () {
        return {
            restrict: 'E',
            templateUrl: 'src/html/directives/footer.html'
        };
    });

}());