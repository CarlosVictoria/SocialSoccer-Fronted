'use strict';

(function() {

    class MainController {

        constructor($http, authService) {
            this.$http = $http;
            this.awesomeThings = [];
            this.authService = authService;
        }


        $onInit() {
            this.$http.get('/api/things').then(response => {
                this.awesomeThings = response.data;
            });
        }
    }

    angular.module('socialSoccerApp')
        .component('main', {
            templateUrl: 'app/main/main.html',
            controller: MainController,
            controllerAs: 'vm'
        });

})();
