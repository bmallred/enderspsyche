'use strict';

angular.module("ender", [])
    .config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
        //$locationProvider.html5Mode(false);
        
        $routeProvider.when("/", {
            templateUrl: "partials/intro.html"
        })
        .when("/code", {
            templateUrl: "partials/code.html"
        })
        .when("/contact", {
            templateUrl: "partials/contact.html"
        })
        .otherwise({ 
        	redirectTo: "/" 
        });
    }]);