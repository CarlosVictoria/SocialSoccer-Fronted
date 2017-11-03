'use strict';

(function(){

class ReservationsComponent {
  constructor(establishmentsService, soccerFieldsService, $state, departmentsService, citiesService, reservationsService) {
    this.establishmentsService = establishmentsService;
    this.soccerFieldsService = soccerFieldsService;
    this.$state = $state;
    this.departmentsService = departmentsService;
    this.citiesService = citiesService;
    this.reservationsService = reservationsService;
  }

  $onInit(){
    this.establishmentsService.query().$promise
    .then(response => {
      console.log('establishments OK',response);
      this.establishments = response;
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

    this.departmentsService.query().$promise
    .then(response => {
      console.log('DEPARTMENS OK',response);
      this.department = response;
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

  getCities(){
    console.log(this.idDepartment);
    this.citiesService.getCities({idDepartment:this.idDepartment}).$promise
    .then(response => {
      console.log('GET CITIES', response);
      this.cities = response;
    })
    .catch(err => console.error(err));
  }
}

angular.module('socialSoccerApp')
  .component('reservations', {
    templateUrl: 'app/reservations/reservations.html',
    controller: ReservationsComponent,
    controllerAs: 'vm'
  });

})();
