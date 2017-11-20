'use strict';
(function() {


    function config($stateProvider) {
        $stateProvider
            .state('uploadFile', {
                url: '/upload-file',
                template: '<upload-file></upload-file>',
            })
            .state('uploadFileUser', {
                url: '/upload-file-user',
                template: '<foto-user></foto-user>',
            });
    }

    config.$inject = ['$stateProvider'];
    angular
        .module('socialSoccerApp')
        .config(config);
})();
