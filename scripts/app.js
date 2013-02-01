'use strict';

angular.module("ender", [])
    .config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(false);
        
        $routeProvider.when("/", {
            controller: MainController,
            templateUrl: "partials/intro.html"
        })
        .otherwise({ redirectTo: "/" });
    }]);