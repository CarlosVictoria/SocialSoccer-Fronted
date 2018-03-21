'use strict';

(function(){

class ReservationsListComponent {
  constructor(reservationsService, usersService, authService, $stateParams) {
      this.reservationsService = reservationsService;
      this.usersService = usersService;
      this.authService = authService;
      this.$stateParams =$stateParams;
      this.query = {
        limit: 4,
        page: 1
      };
  }

  $onInit(){
    this.filterId();
  }

  filterId(){
    console.log("entra");
    this.reservationsService.query().$promise
    .then(response => {
      console.log("reserva OK",response);
      this.reservations = response;
    })
    .catch(err => {
      console.log("ERROR",err);
    });
  }

  goUpdateResevations(idReservations){
    this.NavegateParams.setData('idReservations', idReservations);
  }

  Cancelar(item){
    item.estado = !item.estado;
    this.reservationsService.update(item).$promise
    .then(response => {
      alert("Se ha efectuado el cambio de estado");
    })
    .catch(err => {
      alert("Hubo problemas al afectuar el cambio de estado");
    })
  }
}


angular.module('socialSoccerApp')
  .component('reservationsList', {
    templateUrl: 'app/reservations/reservations-list/reservations-list.html',
    controller: ReservationsListComponent,
    controllerAs: 'vm'
  });

})();
