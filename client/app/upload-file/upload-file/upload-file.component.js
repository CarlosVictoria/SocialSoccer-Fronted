'use strict';

(function() {

    class UploadFileController {

        constructor($q, $state, Upload, API, authService) {
            this.$q = $q;
            this.$state = $state;
            this.Upload = Upload;
            this.API = API;
            this.authService = authService;
        }

        $onInit() {

        }

        create(from) {
            this.Upload.upload({
                url: this.API + '/api/upload/user',
                data: { file: this.file , idUser:this.authService.getIdUser()}
            }).then(function(resp) {
                console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
                console.log('OK');
            }, function(resp) {
                console.log('Error status: ' + resp.status);
            }, function(evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            });
        }

    }

    angular.module('socialSoccerApp')
        .component('uploadFile', {
            templateUrl: 'app/upload-file/upload-file/upload-file.html',
            controller: UploadFileController,
            controllerAs: 'vm'
        });

})();
