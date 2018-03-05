'use strict';

(function(){

class ReservationsListComponent {
  constructor(reservationsService, usersService, authService) {
      this.reservationsService = reservationsService;
      this.usersService = usersService;
      this.authService = authService;
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
    this.reservationsService.query({idUser: this.authService.getIdUser()}).$promise
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

//ReservationsListComponent.$inject = ['reservationsService'];
angular.module('socialSoccerApp')
  .component('reservationsList', {
    templateUrl: 'app/reservations/reservations-list/reservations-list.html',
    controller: ReservationsListComponent,
    controllerAs: 'vm'
  });

})();
