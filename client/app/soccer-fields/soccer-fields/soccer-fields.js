'use strict';

angular.module('socialSoccerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('soccer-fields', {
        url: '/soccer-fields',
        template: '<soccer-fields></soccer-fields>'
      });
  });
