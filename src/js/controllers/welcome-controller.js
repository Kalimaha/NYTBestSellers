(function () {

    'use strict';

    var app = angular.module('DocsBrowser');

    app.controller('WelcomeController', function ($scope, $routeParams) {
        $scope.name = $routeParams.name;
    });

}());