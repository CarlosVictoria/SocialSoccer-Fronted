'use strict';

(function(){

class ReservationsListComponent {
  constructor(reservationsService) {
      this.reservations = reservationsService.query();
      console.log(this.reservations);
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
