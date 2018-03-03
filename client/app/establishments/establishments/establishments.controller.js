'use strict';

(function(){

class EstablishmentsComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('socialSoccerApp')
  .component('establishments', {
    templateUrl: 'app/establishments/establishments/establishments.html',
    controller: EstablishmentsComponent,
    controllerAs: 'establishmentsCtrl'
  });

})();
