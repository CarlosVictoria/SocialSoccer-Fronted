'use strict';
(function(){

class LoginComponent {
  constructor(authService) {
    this.authService = authService;
  }

  login(){
    console.log('DATOS DE LOGIN',this.user);
    this.authService.login(this.user);

    var notification = null;
      if (!('Notification' in window)) {
          // el navegador no soporta la API de notificaciones
          alert('Su navegador no soporta la API de Notificaciones :(');
          return;
      } else if (Notification.permission === "granted") {
          // Se puede emplear las notificaciones
            var opciones = {
              icon: "assets/notifications/llave.png",
              body: "Sesion iniciada correctamente"
            }
          notification = new Notification( "Hola, Bienvenido", opciones);

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
  }
}

LoginComponent.$inject = ['authService'];
angular.module('socialSoccerApp')
  .component('login', {
    templateUrl: 'app/login/login.html',
    controller: LoginComponent,
    controllerAs: 'vm'
  });

})();
