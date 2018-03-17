'use strict';

angular.module('socialSoccerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('reservations', {
        url: '/reservations/:id',
        authenticate : true,
        template: '<reservations></reservations>'
      });
  });
