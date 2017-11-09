'use strict';

(function(){

class ReservationsComponent {
  constructor(soccerFieldsService,establishmentsService, $state, reservationsService, usersService, authService) {
    this.soccerFieldsService = soccerFieldsService;
    this.establishmentsService = establishmentsService;
    this.$state = $state;
    this.departmentsService = departmentsService;
    this.citiesService = citiesService;
    this.reservationsService = reservationsService;
    this.usersService = usersService;
    this.authService = authService;
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

    this.establishmentsService.query().$promise
    .then(response => {
      console.log('ESTABLISHMENTS OK',response);
      this.establishments = response;
    })
    .catch(err => {
      console.log('ERROR',err);
    });

  }

  getSoccerFiels(){
    console.log(this.establishments);
    this.soccerFieldsService.getSoccerFiels({establishments:this.establishments}).$promise
    .then(response => {
      console.log('GET SOCCER-FIELDS', response);
      this.soccerFields = response;
    })
    .catch(err => console.error(err));
  }

  createReservations(){
    this.reservations.idUsers = { idUsers: this.authService.getIdUser()};
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
