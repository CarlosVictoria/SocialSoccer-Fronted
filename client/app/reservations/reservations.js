'use strict';

angular.module('socialSoccerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('reservations', {
        url: '/reservations',
        template: '<reservations></reservations>'
      });
  });
