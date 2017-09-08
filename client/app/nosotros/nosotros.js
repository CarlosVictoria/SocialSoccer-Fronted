'use strict';

angular.module('socialSoccerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('nosotros', {
        url: '/nosotros',
        template: '<nosotros></nosotros>'
      });
  });
