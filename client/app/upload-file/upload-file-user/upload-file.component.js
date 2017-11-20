'use strict';

function UploadFileController() {
    this.message = 'World';
}

angular.module('socialSoccerApp')
    .component('fotoUser', {
        template: '<h1>Hello {{ $ctrl.message }}</h1>',
        bindings: { message: '<' },
        controller: UploadFileController
    });
