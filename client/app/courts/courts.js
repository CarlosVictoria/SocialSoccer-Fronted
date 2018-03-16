'use strict';

angular.module('socialSoccerApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('courts', {
                url: '/courts/:id',
                template: '<courts></courts>'
            });
    });
