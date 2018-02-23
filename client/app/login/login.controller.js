'use strict';
(function(){

class LoginComponent {
  constructor(authService) {
    this.authService = authService;
  }

  login(){
    console.log('DATOS DE LOGIN',this.user);
    this.authService.login(this.user);
    if (!Notification) {
     alert('Desktop notifications not available in your browser. Try Chromium.');
     return;
   }
     var opciones = {
       body: "Bienvenido"
     }
     var notification = new Notification('hola', opciones);

     notification.show();
     console.log("notificacion ok", notificacion);
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
