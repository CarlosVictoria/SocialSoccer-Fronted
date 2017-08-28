'use strict';

angular.module('socialSoccerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('users-list', {
        url: '/users-list',
        template: '<users-list></users-list>'
      })
      .state('users-create', {
          url: '/users-create',
          template: '<users-create></users-create>'
      })
      .state('users-update', {
          url: '/users-update/:idUsers',
          template: '<users-update></users-update>'
      });
  });
