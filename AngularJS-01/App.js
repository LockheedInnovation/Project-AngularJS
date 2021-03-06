// create the module and name it app
var app = angular.module('angularjsApp', ['ngRoute']);

// configure our routes
app.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
		.when('/', {
		    templateUrl: 'Home.html',
		    controller: 'mainController'
		})

        // route for the about page
        .when('/about', {
            templateUrl: 'About.html',
            controller: 'aboutController'
        })

});
