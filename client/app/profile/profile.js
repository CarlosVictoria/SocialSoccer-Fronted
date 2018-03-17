'use strict';

angular.module('socialSoccerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile/:idUser',
        authenticate : true,
        template: '<profile></profile>'
      });
  });
