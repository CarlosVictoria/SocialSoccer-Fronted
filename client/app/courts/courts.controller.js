'use strict';

(function() {
    class CourtsController {
        constructor($http) {
            this.$http = $http;
            this.awesomeThings = [];
        }
    }

    angular.module('socialSoccerApp')
        .component('courts', {
            templateUrl: 'app/courts/courts.html',
            controller: CourtsController,
            controllerAs: 'vm'
        });

})();
