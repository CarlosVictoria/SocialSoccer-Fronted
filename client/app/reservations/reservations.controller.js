'use strict';

(function(){

class ReservationsComponent {
  constructor(soccerFieldsService, $state, reservationsService, usersService) {
    this.soccerFieldsService = soccerFieldsService;
    this.$state = $state;
    this.departmentsService = departmentsService;
    this.citiesService = citiesService;
    this.reservationsService = reservationsService;
    this.usersService = usersService;
  }

  $onInit(){
    this.usersService.query().$promise
    .then(response => {
      console.log('users OK',response);
      this.users = response;
    })
    .catch(err => {
      console.log('ERROR',err);
    });

    this.soccerFieldsService.query().$promise
    .then(response => {
      console.log('SOCCER-FIELDS OK',response);
      this.soccerFields = response;
    })
    .catch(err => {
      console.log('ERROR',err);
    });

  }

  createReservations(){
    this.reservationsService.save(this.reservations).$promise
    .then(response => {
      console.log('La reserva se registrado correctamente',response);
      this.$state.go('main');
    })
    .catch(err =>{
      console.log('ERROR',err);
    });
  }

}

angular.module('socialSoccerApp')
  .component('reservations', {
    templateUrl: 'app/reservations/reservations.html',
    controller: ReservationsComponent,
    controllerAs: 'vm'
  });

})();
