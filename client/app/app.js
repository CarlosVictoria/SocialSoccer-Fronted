'use strict';

angular.module('socialSoccerApp', [
        'socialSoccerApp.constants',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',
        'satellizer',
        'ngMessages',
        'LocalStorageModule',
        'ngMaterial',
        'ngFileSaver',
        'ngFileUpload',
        'md.data.table'
    ])
    .constant('API', 'http://localhost:8080/SocialSoccer-Backend')

    .config(function(API, $authProvider){
       $authProvider.loginUrl = API + '/api/auth/login';
       $authProvider.tokenName = 'token';
       $authProvider.tokenPrefix = 'socialSoccerApp';
     })

    .config(function($mdThemingProvider){
      $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('red');
    })

    .config(function($mdIconProvider){
        $mdIconProvider
            .defaultFontSet('FontAwesome')
            .fontSet('fa', 'FontAwesome');
    })

    .config(function($urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    })

    .config(function(localStorageServiceProvider){
      localStorageServiceProvider
        .setPrefix('LSSoccial')
        .setStorageType('localStorage');
    });
