'use strict';

angular.module('socialSoccerApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('courts', {
                url: '/courts',
                template: '<courts></courts>'
            });
    });