(function () {

    'use strict';

    var app = angular.module('DocsBrowser', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider.when('/welcome', {
            templateUrl: 'src/html/welcome.html',
            controller: 'WelcomeController'
        }).when('/welcome/:name', {
            templateUrl: 'src/html/welcome.html',
            controller: 'WelcomeController'
        }).otherwise({
            redirectTo: '/welcome'
        });
    });

}());