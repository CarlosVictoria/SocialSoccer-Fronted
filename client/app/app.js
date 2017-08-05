'use strict';

angular.module('socialSoccerApp', [
        'socialSoccerApp.constants',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'ui.bootstrap'
    ])
    .constant('API', 'http://localhost:8080/SoccialSoccer/api')
    .config(function($urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    });
