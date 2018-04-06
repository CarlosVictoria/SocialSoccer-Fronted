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
    console.log("entra ",this.authService.getIdUser());
    this.reservationsService.get({idUsuario: this.authService.getIdUser()}).$promise
    .then(response => {
      console.log("reserva OK",response);
      this.reservations = response;
    })
    .catch(err => {
      console.log("ERROR",err);
    });
  }

  goUpdateResevations(idReservations){
    this.NavegateParams.setData('idReservations.idEstablishments', idReservations);
  }

  Cancelar(item){
    item.estado = !item.estado;
    this.reservationsService.update(item).$promise
    .then(response => {
      var notification = null;
        if (!('Notification' in window)) {
            // el navegador no soporta la API de notificaciones
            alert('Su navegador no soporta la API de Notificaciones :(');
            return;
        } else if (Notification.permission === "granted") {
            // Se puede emplear las notificaciones
              var opciones = {
                icon: "assets/notifications/2.png",
                body: "Reserva Cancelada"
              }
            notification = new Notification( "Reserva", opciones);

        } else if (Notification.permission !== 'denied') {
            // se pregunta al usuario para emplear las notificaciones
            Notification
                    .requestPermission(function(permission) {
                if (permission === "granted") {
                    notification = new Notification(
                            "Hola Mundo");
                }
            });
        }
    })
    .catch(err => {
      var notification = null;
        if (!('Notification' in window)) {
            // el navegador no soporta la API de notificaciones
            alert('Su navegador no soporta la API de Notificaciones :(');
            return;
        } else if (Notification.permission === "granted") {
            // Se puede emplear las notificaciones
              var opciones = {
                icon: "assets/notifications/2.png",
                body: "Reserva no Cancelada"
              }
            notification = new Notification( "Reserva", opciones);

        } else if (Notification.permission !== 'denied') {
            // se pregunta al usuario para emplear las notificaciones
            Notification
                    .requestPermission(function(permission) {
                if (permission === "granted") {
                    notification = new Notification(
                            "Hola Mundo");
                }
            });
        }
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
