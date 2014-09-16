//creacion del modulo
var angularRoutingApp = angular.module('angularRoutingApp',['ngRoute']);

//configuracion de la rutas
angularRoutingApp.config(function ($routeProvider) {
	$routeProvider
		.when('', {
			templateUrl: '/index.html',
			controller: 'mainController'
		})
		.when('/mision', {
			templateUrl: 'view/mision.html',
			controller: 'misionController'
		})
		.when('/contacto', {
			templateUrl: 'view/contacto.html',
			controller: 'contactController'
		})
		.otherwise({ 
			redirectTo: '/' 
		});
});

angularRoutingApp.controller('mainController', function($scope) {
	$scope.message = 'Hola, Mundo!';
});

angularRoutingApp.controller('misionController', function($scope) {
	$scope.message = 'Esta es la página "mision de la empresa"';
});

angularRoutingApp.controller('contactController', function($scope) {
	$scope.message = 'Esta es la página de "Contacto", aquí podemos poner un formulario';
});