'use strict';

angular.module('socialSoccerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('establishments', {
        url: '/establishments',
        template: '<establishments></establishments>'
      });
  });
