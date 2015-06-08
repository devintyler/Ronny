angular.module('Ronny', ['ngRoute', 'ngMessages'])
  .config(function($routeProvider, $locationProvider) {

  	// Provides routing
  	$routeProvider
		  .when('/', {
		    templateUrl: 'views/home.html',
		    controller: 'HomeCtrl'
		  })
		  .when('/resume', {
		    templateUrl: 'views/resume.html',
		    controller: 'ResCtrl'
		  })
		  .when('/music', {
		    templateUrl: 'views/music.html',
		    controller: 'MusicCtrl'
		  })
		  .when('/films', {
		    templateUrl: 'views/films.html',
		    controller: 'VidCtrl'
		  })
		  .when('/games', {
		    templateUrl: 'views/games.html',
		    controller: 'GameCtrl'
		  })
		  .when('/other', {
		    templateUrl: 'views/other.html',
		    controller: 'OtherCtrl'
		  })
		  .otherwise('/');


		  // UNCOMMENT TO GET RID OF #'s
		  // $locationProvider.html5Mode(true);
 
  });