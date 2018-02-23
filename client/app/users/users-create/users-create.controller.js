'use strict';
(function(){

class UsersCreateComponent {
  constructor(usersService, documentTypesService, citiesService, departmentsService, $state) {
    this.usersService = usersService;
    this.documentTypesService = documentTypesService;
    this.citiesService = citiesService;
    this.departmentsService = departmentsService;
    this.$state = $state;
  }

  $onInit(){
    this.documentTypesService.query().$promise
    .then(response => {
      console.log('DOCTYPES OK',response);
      this.documentType = response;
    })
    .catch(err => {
      console.log('ERROR',err);
    });

    this.departmentsService.query().$promise
    .then(response => {
      console.log('DEPARTMENT OK',response);
      this.department = response;
    })
    .catch(err => {
      console.log('ERROR',err);
    });
  }

  createUser(){
    this.user.active = 1;
    console.log(this.user);
    this.usersService.save(this.user).$promise
    .then(response => {
      console.log('Usuario registrado correctamente',response);
      this.$state.go('login');
      var notification = null;
        if (!('Notification' in window)) {
            // el navegador no soporta la API de notificaciones
            alert('Su navegador no soporta la API de Notificaciones :(');
            return;
        } else if (Notification.permission === "granted") {
            // Se puede emplear las notificaciones
              var opciones = {
                icon: "assets/notifications/2.png",
                body: "Usuario regitrado correctamente"
              }
            notification = new Notification( "Registro", opciones);

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
                  color:red
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
UsersCreateComponent.$inject = ['usersService','documentTypesService','citiesService','departmentsService','$state'];
angular.module('socialSoccerApp')
  .component('usersCreate', {
    templateUrl: 'app/users/users-create/users-create.html',
    controller: UsersCreateComponent,
    controllerAs:'vm'
  });

})();
