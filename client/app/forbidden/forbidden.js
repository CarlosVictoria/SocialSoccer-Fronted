'use strict';

angular.module('socialSoccerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('forbidden', {
        url: '/forbidden',
        template: '<forbidden></forbidden>'
      });
  });
