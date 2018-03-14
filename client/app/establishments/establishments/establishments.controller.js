'use strict';

(function(){

class EstablishmentsComponent {
  constructor(establishmentsService) {
    this.establishmentsService = establishmentsService;
  }
  $onInit(){

    this.establishmentsService.query().$promise
    .then(res=>{
      this.establecimientos=res;
      console.log(this.establecimientos);
    }).catch(err=>{
      console.log(err);
    })
  }
}

angular.module('socialSoccerApp')
  .component('establishments', {
    templateUrl: 'app/establishments/establishments/establishments.html',
    controller: EstablishmentsComponent,
    controllerAs: 'vm'
  });

})();
