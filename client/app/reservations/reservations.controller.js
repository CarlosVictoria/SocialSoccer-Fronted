'use strict';

(function(){

class ReservationsComponent {
  constructor($http,soccerService,establishmentsService, $state, reservationsService, usersService, authService, $stateParams) {
    this.soccerService = soccerService;
    this.establishmentsService = establishmentsService;
    this.$state = $state;
    this.departmentsService = departmentsService;
    this.citiesService = citiesService;
    this.reservationsService = reservationsService;
    this.usersService = usersService;
    this.authService = authService;
    this.$http = $http;
    this.awesome = [];
    this.$stateParams=$stateParams;
  }

  $onInit(){
    this.$http.get('/api/things')
      .then(response => {
        this.awesomeThings = response.data;
      });

      console.log("este id cancha", this.$stateParams.id);
      this.soccerService.get({id:this.$stateParams.id}).$promise
      .then(res=>{
        this.soccerFields=res;
        console.log("canchas",this.soccerFields);
      }).catch(err=>{
        console.log(err);
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
    console.log("ruytvuytu",this.$stateParams.id);
    this.reservations.estado = true;
    this.reservations.idSoccerFields = { idSoccerFields: this.$stateParams.id };
    this.reservations.idUsers = { idUsers: this.authService.getIdUser()};
    this.reservationsService.save(this.reservations).$promise
    .then(response => {
      console.log('La reserva se registrado correctamente',response);
      var notification = null;
        if (!('Notification' in window)) {
            // el navegador no soporta la API de notificaciones
            alert('Su navegador no soporta la API de Notificaciones :(');
            return;
        } else if (Notification.permission === "granted") {
            // Se puede emplear las notificaciones
              var opciones = {
                icon: "assets/notifications/reserva.png",
                body: "Reserva registrada correctamente"
              }
            notification = new Notification( "Registro ok", opciones);

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
      this.$state.go('profile');
    })
    .catch(err =>{
      var notification = null;
        if (!('Notification' in window)) {
            // el navegador no soporta la API de notificaciones
            alert('Su navegador no soporta la API de Notificaciones :(');
            return;
        } else if (Notification.permission === "granted") {
            // Se puede emplear las notificaciones
              var opciones = {
                icon: "assets/notifications/4.jpg",
                body: err.data,
              }
            notification = new Notification( " ", opciones);
        } else if (Notification.permission !== 'denied') {
            // se pregunta al usuario para emplear las notificaciones
            Notification
                    .requestPermission(function(permission) {
                if (permission === "granted") {
                    notification = new Notification(
                            "");
                }
            });
        }
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
