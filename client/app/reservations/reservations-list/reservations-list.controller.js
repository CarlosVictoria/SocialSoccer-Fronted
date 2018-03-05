'use strict';

(function(){

class ReservationsListComponent {
  constructor(reservationsService, NavegateParams) {
      this.reservations = reservationsService.query();
      console.log(this.reservations);
      this.NavegateParams = NavegateParams;

      this.query = {
        limit: 5,
        page: 1
      };


  }

  goUpdateResevations(idReservations){
    this.NavegateParams.setData('idReservations', idReservations);
  }

  cambiarEstados(item){
    this.reservationsService.update(item).$promise
    .then(response => {
      alert("Se ha efectuado el cambio de estado");
    })
    .catch(err => {
      alert("Hubo problemas al afectuar el cambio de estado");
    })
  }

  

}

ReservationsListComponent.$inject = ['reservationsService'];
angular.module('socialSoccerApp')
  .component('reservationsList', {
    templateUrl: 'app/reservations/reservations-list/reservations-list.html',
    controller: ReservationsListComponent,
    controllerAs: 'vm'
  });

})();
