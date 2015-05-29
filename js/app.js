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
		  .when('/videos', {
		    templateUrl: 'views/videos.html',
		    controller: 'VidCtrl'
		  })
		  .when('/projects', {
		    templateUrl: 'views/projects.html',
		    controller: 'ProjCtrl'
		  })
		  .when('/extra', {
		    templateUrl: 'views/extra.html',
		    controller: 'ExtraCtrl'
		  })
		  .otherwise('/');


		  // UNCOMMENT TO GET RID OF #'s
		  // $locationProvider.html5Mode(true);
 
  });