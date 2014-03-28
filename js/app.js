//app and dependicies
var app = angular.module('MonApp', ['ngRoute']);

//routing and routeProvide
app.config(function($routeProvider){
	
	$routeProvider
		.when('/', {
				templateUrl: 'partials/home.html',
				controller: 'postsController'})

		.when('/comments/:id', {
					templateUrl: 'partials/comments.html',
					controller: 'commentsController'})

		.otherwise({redirectTo: '/'});
});