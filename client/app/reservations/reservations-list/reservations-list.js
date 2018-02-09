'use strict';

angular.module('socialSoccerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('reservations-list', {
        url: '/reservations-list',
        authenticate : ['OWNER'],
        template: '<reservations-list></reservations-list>'
      });
  });
